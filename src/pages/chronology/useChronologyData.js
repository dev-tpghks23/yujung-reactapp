import { useState, useEffect, useRef } from 'react';
import { MOCK_ANALYSIS, calcDDay } from './chronologyMockData';

const API_BASE = 'http://localhost:10000';

const toTimelineItem = (p, index = 0) => {
  const raw = p.createdAt || p.startDate || '';
  const date = raw ? new Date(raw.replace(/\./g, '-')) : new Date();
  return {
    id: p.id,
    projectId: p.id,
    year: String(date.getFullYear()),
    month: `${date.getMonth() + 1}월`,
    projectTitle: p.title,
    description: p.description || p.title,
    startDate: p.startDate || '',
    endDate: p.endDate || '',
    bullets: p.bullets || [],
    aiSuggestions: p.aiSuggestions || [],
    images: [`https://picsum.photos/300/200?random=${p.id ?? index}`],
  };
};

const EMPTY_PROJECT = {
  id: null,
  title: '',
  visionTitle: '',
  startDate: '',
  endDate: '',
  dDay: 0,
  description: '',
  bullets: [],
  aiSuggestions: [],
};

const useChronologyData = () => {
  const [projects, setProjects]           = useState([]);
  const [timeline, setTimeline]           = useState([]);
  const [analysis, setAnalysis]           = useState(MOCK_ANALYSIS);
  const [vision, setVision]               = useState({ id: null, title: '' });
  const [selectedProject, setSelectedProject] = useState(EMPTY_PROJECT);

  // 비전 최초 클릭 여부 추적 (외부에서 사용)
  const timelineInitialized = useRef(false);

  /* ── 프로젝트 목록 API 호출 ── */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/project/list`, {
          credentials: 'include',
        });
        if (!res.ok) return;
        const json = await res.json();
        if (!json.success || !Array.isArray(json.data)) return;

        const mapped = json.data.map((p) => ({
          id:            p.id,
          title:         p.projectTitle  || '',
          visionTitle:   p.visionTitle   || '',
          startDate:     p.projectStartDate || '',
          endDate:       p.projectEndDate   || '',
          dDay:          calcDDay(p.projectStartDate),
          description:   p.projectContent  || '',
          bullets:       (p.checklists || []).slice(0, 4).map((c) => c.checklistTitle),
          aiSuggestions: p.aiSuggestions   || [],
          createdAt:     p.projectCreatedAt || '',
        }));

        setProjects(mapped);

        if (mapped.length > 0) {
          const first = mapped[0];
          setSelectedProject(first);
          setVision({ id: first.id, title: first.visionTitle || first.title });
        }
      } catch (e) {
        console.error('[연대기] 프로젝트 조회 실패:', e);
      }
    };
    fetchProjects();
  }, []);

  /* ── 성과 분석 API 호출 (vision.id 확정 후) ── */
  useEffect(() => {
    if (!vision.id) return;
    const fetchAnalysis = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/api/private/chronology/analysis/${vision.id}`,
          { credentials: 'include' },
        );
        if (res.ok) {
          const json = await res.json();
          if (json.success) setAnalysis(json.data);
        }
      } catch (_) {}
    };
    fetchAnalysis();
  }, [vision.id]);

  /* ── AI 피드백 폴링 (3초마다, 완료되면 중단) ── */
  useEffect(() => {
    if (!vision.id) return;

    const poll = setInterval(async () => {
      try {
        const res = await fetch(
          `${API_BASE}/api/private/chronology/feedback/${vision.id}`,
          { credentials: 'include' },
        );
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setAnalysis((prev) => ({ ...prev, aiFeedback: json.data }));
            clearInterval(poll);
          }
        }
      } catch (_) {}
    }, 3000);

    return () => clearInterval(poll);
  }, [vision.id]);

  /* ── 비전 최초 클릭 시 전체 프로젝트 타임라인 자동 등록 ── */
  const handleVisionFirstClick = () => {
    if (timelineInitialized.current || projects.length === 0) return;
    timelineInitialized.current = true;
    setTimeline(projects.map(toTimelineItem));
  };

  /* ── 타임라인 순서 변경 ── */
  const onReorderTimeline = (fromIndex, toIndex) => {
    setTimeline((prev) => {
      const next = [...prev];
      const [removed] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, removed);
      return next;
    });
  };

  /* ── 타임라인 항목 삭제 ── */
  const onRemoveTimeline = (id) => {
    setTimeline((prev) => prev.filter((item) => item.id !== id));
  };

  /* ── 타임라인 이미지 변경 ── */
  const onUpdateImage = (itemId, imgIndex, newUrl) => {
    setTimeline((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;
        const images = [...(item.images || [])];
        images[imgIndex] = newUrl;
        return { ...item, images };
      }),
    );
  };

  /* ── 새 항목 추가 (단건) ── */
  const onAddTimeline = (project) => {
    const now = new Date();
    const seed = Date.now();
    setTimeline((prev) => [
      ...prev,
      {
        id:           seed,
        projectId:    project.id,
        year:         String(now.getFullYear()),
        month:        `${now.getMonth() + 1}월`,
        projectTitle: project.title,
        description:  project.description || project.title,
        startDate:    project.startDate || '',
        endDate:      project.endDate || '',
        bullets:      project.bullets || [],
        aiSuggestions: project.aiSuggestions || [],
        images:       [`https://picsum.photos/300/200?random=${seed}`],
      },
    ]);
  };

  /* ── 일괄 등록 ── */
  const onAddAllTimeline = (projectList) => {
    const now = new Date();
    setTimeline((prev) => {
      const registeredIds = new Set(prev.map((t) => t.projectId ?? t.id));
      const newItems = (projectList || [])
        .filter((p) => !registeredIds.has(p.id))
        .map((p, i) => ({
          id:           Date.now() + i,
          projectId:    p.id,
          year:         String(now.getFullYear()),
          month:        `${now.getMonth() + 1}월`,
          projectTitle: p.title,
          description:  p.description || p.title,
          startDate:    p.startDate || '',
          endDate:      p.endDate || '',
          bullets:      p.bullets || [],
          aiSuggestions: p.aiSuggestions || [],
          images:       [`https://picsum.photos/300/200?random=${Date.now() + i}`],
        }));
      return [...prev, ...newItems];
    });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setVision({ id: project.id, title: project.visionTitle || project.title });
  };

  return {
    vision,
    projects,
    addProjects:         projects,
    timeline,
    analysis,
    selectedProject,
    onSelectProject:     handleSelectProject,
    onReorderTimeline,
    onRemoveTimeline,
    onAddTimeline,
    onUpdateImage,
    onAddAllTimeline,
    onVisionFirstClick:  handleVisionFirstClick,
  };
};

export default useChronologyData;
