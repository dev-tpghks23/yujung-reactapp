import React, { useState, useRef } from 'react';
import S from './styles/ChronologyTimelineStyle';


const ChronologyTimeline = ({
  vision,
  projects,
  addProjects,
  timeline,
  selectedProject,
  onSelectProject,
  onStartAnalysis,
  onReorderTimeline,
  onRemoveTimeline,
  onAddTimeline,
  onUpdateImage,
  onAddAllTimeline,
  onVisionFirstClick,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showVisionDropdown, setShowVisionDropdown] = useState(false);
  const [showProjectToggle, setShowProjectToggle] = useState(false);
  const [carouselIndexes, setCarouselIndexes] = useState({});
  const fileInputRef = useRef(null);
  const pendingEdit = useRef(null);
  const dragIndex = useRef(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [draggingId, setDraggingId] = useState(null);
  const [duplicateError, setDuplicateError] = useState('');

  const handleToggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const handleImageClick = (e, itemId, imgIndex) => {
    if (!isEditMode) return;
    e.stopPropagation();
    pendingEdit.current = { itemId, imgIndex };
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !pendingEdit.current) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      onUpdateImage(pendingEdit.current.itemId, pendingEdit.current.imgIndex, ev.target.result);
      pendingEdit.current = null;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const getCarouselIndex = (id) => carouselIndexes[id] ?? 0;

  const moveCarousel = (id, dir, length) => {
    setCarouselIndexes((prev) => {
      const cur = prev[id] ?? 0;
      return { ...prev, [id]: (cur + dir + length) % length };
    });
  };

  const groupByYear = () => {
    const groups = [];
    let lastYear = null;
    timeline.forEach((item) => {
      if (item.year !== lastYear) {
        groups.push({ year: item.year, items: [item] });
        lastYear = item.year;
      } else {
        groups[groups.length - 1].items.push(item);
      }
    });
    return groups;
  };

  const groups = groupByYear();
  const allItems = groups.flatMap((g) => g.items);
  const indexMap = new Map(allItems.map((item, i) => [item.id, i]));

  // 비전별 프로젝트 수 계산
  const visionProjectCount = {};
  projects.forEach((p) => {
    const key = p.visionTitle || p.title;
    visionProjectCount[key] = (visionProjectCount[key] || 0) + 1;
  });

  const handleDragStart = (e, flatIndex, id) => {
    dragIndex.current = flatIndex;
    setDraggingId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, flatIndex) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(flatIndex);
  };

  const handleDrop = (e, flatIndex) => {
    e.preventDefault();
    if (dragIndex.current !== null && dragIndex.current !== flatIndex) {
      onReorderTimeline(dragIndex.current, flatIndex);
    }
    dragIndex.current = null;
    setDragOverIndex(null);
    setDraggingId(null);
  };

  const handleDragEnd = () => {
    dragIndex.current = null;
    setDragOverIndex(null);
    setDraggingId(null);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderLeft>
          <S.PageTitle>TIME LINE</S.PageTitle>
          <S.PageSubtitle>목표에 도달하기까지 실패와 성장의 흐름을 한눈에 확인하세요.</S.PageSubtitle>
        </S.HeaderLeft>
        <S.HeaderBtnGroup>
          <S.EditModeBtn onClick={() => onAddAllTimeline(addProjects ?? [])}>
            일괄등록
          </S.EditModeBtn>
          <S.EditModeBtn $active={isEditMode} onClick={handleToggleEditMode}>
            {isEditMode ? '완료' : '수정하기'}
          </S.EditModeBtn>
        </S.HeaderBtnGroup>
      </S.Header>

      <S.VisionWrapper>
        <S.VisionCard onClick={() => setShowVisionDropdown((v) => !v)}>
          <S.VisionLabel>VISION</S.VisionLabel>
          <S.VisionTitleRow>
            <S.VisionTitle>{selectedProject.visionTitle || selectedProject.title}</S.VisionTitle>
            <S.VisionChevron $open={showVisionDropdown}>
              <svg width="11" height="4" viewBox="0 0 11 4" fill="none">
                <path d="M1 0.5L5.5 3.5L10 0.5" stroke="#8D8D8D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </S.VisionChevron>
          </S.VisionTitleRow>
        </S.VisionCard>

        {showVisionDropdown && (
          <S.VisionDropdown>
            {projects.map((p) => (
              <S.VisionDropdownItem
                key={p.id}
                $active={p.id === selectedProject.id}
                onClick={() => {
                  if (onVisionFirstClick) onVisionFirstClick();
                  onSelectProject(p);
                  setShowVisionDropdown(false);
                }}
              >
                <S.ProjectToggleInfo>
                  <S.ProjectToggleName>{p.visionTitle || p.title}</S.ProjectToggleName>
                  <S.ProjectToggleDate>등록된 프로젝트</S.ProjectToggleDate>
                </S.ProjectToggleInfo>
                <S.DDay $active={true}>
                  {visionProjectCount[p.visionTitle || p.title] ?? 0}개
                </S.DDay>
              </S.VisionDropdownItem>
            ))}
          </S.VisionDropdown>
        )}
      </S.VisionWrapper>

      <S.TimelineSection>
        {groups.map((group) => (
          <S.YearGroup key={group.year}>
            <S.YearLabel>{group.year}</S.YearLabel>
            <S.YearItems>
              {group.items.map((item, idx) => {
                const flatIndex = indexMap.get(item.id);
                const isReverse = flatIndex % 2 === 1;
                return (
                  <S.TimelineRow
                    key={item.id}
                    draggable={isEditMode}
                    onDragStart={isEditMode ? (e) => handleDragStart(e, flatIndex, item.id) : undefined}
                    onDragOver={isEditMode ? (e) => handleDragOver(e, flatIndex) : undefined}
                    onDrop={isEditMode ? (e) => handleDrop(e, flatIndex) : undefined}
                    onDragEnd={isEditMode ? handleDragEnd : undefined}
                    $isDragging={draggingId === item.id}
                    $isDragOver={dragOverIndex === flatIndex && draggingId !== item.id}
                    $editMode={isEditMode}
                  >
                    <S.DateCol>
                      {idx === 0 && <S.YearText>{item.year}</S.YearText>}
                      <S.MonthText>{item.month}</S.MonthText>
                    </S.DateCol>
                    <S.DotCol>
                      <S.Dot />
                    </S.DotCol>
                    <S.CardCol $reverse={isReverse}>
                      <S.TimelineCard>
                        <S.CarouselWrapper>
                          {item.images && item.images.length > 0 ? (
                            <S.ImgClickArea
                              onClick={(e) => handleImageClick(e, item.id, getCarouselIndex(item.id))}
                              $editMode={isEditMode}
                            >
                              <S.CarouselImg
                                src={item.images[getCarouselIndex(item.id)]}
                                alt="timeline"
                              />
                              {isEditMode && (
                                <S.ImgOverlay>
                                  <S.ImgOverlayText>클릭하여 사진 변경</S.ImgOverlayText>
                                </S.ImgOverlay>
                              )}
                            </S.ImgClickArea>
                          ) : null}
                          {item.images && item.images.length > 1 && (
                            <>
                              <S.CarouselBtn $left onClick={(e) => { e.stopPropagation(); moveCarousel(item.id, -1, item.images.length); }}>‹</S.CarouselBtn>
                              <S.CarouselBtn onClick={(e) => { e.stopPropagation(); moveCarousel(item.id, 1, item.images.length); }}>›</S.CarouselBtn>
                            </>
                          )}
                          {isEditMode && (
                            <S.CardBtnGroup>
                              <S.CloseBtn onClick={(e) => { e.stopPropagation(); onRemoveTimeline(item.id); }}>×</S.CloseBtn>
                            </S.CardBtnGroup>
                          )}
                        </S.CarouselWrapper>

                        <S.CardBody>
                          <S.CardTitle>{item.projectTitle}</S.CardTitle>
                          {(item.startDate || item.endDate) && (
                            <S.CardDateRange>{item.startDate} ~ {item.endDate}</S.CardDateRange>
                          )}
                          <S.CardDesc>{item.description}</S.CardDesc>
                          <S.BulletGrid>
                            {item.bullets.map((b, i) => (
                              <S.BulletItem key={i}>{b}</S.BulletItem>
                            ))}
                          </S.BulletGrid>
                        </S.CardBody>
                      </S.TimelineCard>
                    </S.CardCol>
                  </S.TimelineRow>
                );
              })}
            </S.YearItems>
          </S.YearGroup>
        ))}
      </S.TimelineSection>

      <S.AddSection>
        <S.AddButton onClick={() => { setShowProjectToggle((v) => !v); setDuplicateError(''); }}>
          + 새 항목 추가
        </S.AddButton>

        {duplicateError && <S.DuplicateError>{duplicateError}</S.DuplicateError>}

        {showProjectToggle && (
          <S.ProjectToggleList>
            {(addProjects ?? []).map((p) => {
              const alreadyAdded = timeline.some((t) => t.projectId === p.id || t.id === p.id);
              return (
                <S.ProjectToggleItem
                  key={p.id}
                  $active={alreadyAdded}
                  onClick={() => {
                    if (alreadyAdded) {
                      setDuplicateError('이미 등록된 프로젝트입니다.');
                      return;
                    }
                    setDuplicateError('');
                    onAddTimeline(p);
                    setShowProjectToggle(false);
                  }}
                >
                  <S.ProjectToggleInfo>
                    <S.ProjectToggleName>{p.title}</S.ProjectToggleName>
                    <S.ProjectToggleDate>{p.startDate} ~ {p.endDate}</S.ProjectToggleDate>
                  </S.ProjectToggleInfo>
                  <S.DDay $active={alreadyAdded}>D + {p.dDay}</S.DDay>
                </S.ProjectToggleItem>
              );
            })}
          </S.ProjectToggleList>
        )}
      </S.AddSection>

      <S.AnalysisButton onClick={onStartAnalysis}>성과랭크 분석하기</S.AnalysisButton>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </S.Wrapper>
  );
};

export default ChronologyTimeline;
