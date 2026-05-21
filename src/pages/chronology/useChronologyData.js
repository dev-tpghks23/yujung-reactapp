import { useState, useEffect } from 'react';
import useProjectStore from '../../store/projectStore';
import {
  MOCK_VISION, MOCK_PROJECTS, MOCK_TIMELINE, MOCK_ANALYSIS,
  formatDate, calcDDay,
} from './chronologyMockData';

const useChronologyData = () => {
  const { projects: storeProjects } = useProjectStore();

  const addProjects = storeProjects.map((p) => ({
    id: p.id,
    title: p.name,
    startDate: formatDate(p.startDate),
    endDate: formatDate(p.endDate),
    dDay: calcDDay(p.startDate),
    description: p.description || '',
    bullets: (p.checklists || []).slice(0, 4).map((c) => c.title),
  }));

  const [selectedProject, setSelectedProject] = useState(MOCK_PROJECTS[0]);
  const [timeline, setTimeline] = useState(MOCK_TIMELINE);
  const [analysis, setAnalysis] = useState(MOCK_ANALYSIS);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const res = await fetch(
          `http://localhost:10000/api/private/chronology/analysis/${MOCK_VISION.id}`,
          { credentials: 'include' }
        );
        if (res.ok) {
          const json = await res.json();
          if (json.success) setAnalysis(json.data);
        }
      } catch (e) {}
    };
    fetchAnalysis();
  }, []);

  const onReorderTimeline = (fromIndex, toIndex) => {
    setTimeline((prev) => {
      const next = [...prev];
      const [removed] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, removed);
      return next;
    });
  };

  const onRemoveTimeline = (id) => {
    setTimeline((prev) => prev.filter((item) => item.id !== id));
  };

  const onUpdateImage = (itemId, imgIndex, newUrl) => {
    setTimeline((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;
        const images = [...item.images];
        images[imgIndex] = newUrl;
        return { ...item, images };
      })
    );
  };

  const onAddTimeline = (project) => {
    const now = new Date();
    const year = String(now.getFullYear());
    const month = `${now.getMonth() + 1}월`;
    setTimeline((prev) => [
      ...prev,
      {
        id: Date.now(),
        year,
        month,
        projectTitle: project.title,
        description: project.description || project.title,
        bullets: project.bullets || [],
        images: [`https://picsum.photos/300/200?random=${Date.now()}`],
      },
    ]);
  };

  const onAddAllTimeline = (projects) => {
    const now = new Date();
    const year = String(now.getFullYear());
    const month = `${now.getMonth() + 1}월`;
    const newItems = projects.map((p, i) => ({
      id: Date.now() + i,
      year,
      month,
      projectTitle: p.title,
      description: p.description || p.title,
      bullets: p.bullets || [],
      images: [`https://picsum.photos/300/200?random=${Date.now() + i}`],
    }));
    setTimeline((prev) => [...prev, ...newItems]);
  };

  return {
    vision: MOCK_VISION,
    projects: MOCK_PROJECTS,
    addProjects,
    timeline,
    analysis,
    selectedProject,
    onSelectProject: setSelectedProject,
    onReorderTimeline,
    onRemoveTimeline,
    onAddTimeline,
    onUpdateImage,
    onAddAllTimeline,
  };
};

export default useChronologyData;
