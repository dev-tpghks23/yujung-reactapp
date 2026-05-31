import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';

import uploadIcon from './write_icon/upload.svg';
import deleteIcon from './write_icon/delete.svg';
import { S } from './LogWriteStep1ContainerStyles';

const VisionIconComponent = ({ className }) => (
  <S.VisionIcon className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.6499 3.98242H13.3166M2.6499 7.98242H13.3166M2.6499 11.9824H13.3166" stroke="currentColor" strokeWidth="1.88235" strokeLinecap="round" strokeLinejoin="round" />
  </S.VisionIcon>
);

const LogWriteStep1Container = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [vision, setVision] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isVisionListOpen, setIsVisionListOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [categories, setCategories] = useState([]);
  const [pastVisions, setPastVisions] = useState([]);
  const fileInputRef = useRef(null);

  // 카테고리 및 내 로그(과거 비전 추출용) 목록 백엔드에서 조회
  useEffect(() => {
    axiosInstance.get('/api/categories')
      .then(res => {
        if (res.data?.data) setCategories(res.data.data);
      })
      .catch(() => {
        setCategories([
          { id: 1, categoryName: "공부/취업" },
          { id: 2, categoryName: "사업/창업" },
          { id: 3, categoryName: "인간관계" },
          { id: 4, categoryName: "건강/루틴" },
          { id: 5, categoryName: "기타" },
        ]);
      });

    axiosInstance.get('/api/logs/my-list')
      .then(res => {
        if (res.data?.data) {
          // 중복을 제거한 과거 비전 목록 추출
          const uniqueVisions = [...new Set(res.data.data.map(log => log.visionTitle).filter(Boolean))];
          setPastVisions(uniqueVisions);
        }
      })
      .catch(err => console.error("과거 비전 목록을 불러오는 데 실패했습니다.", err));
  }, []);

  // 이전에 작성 중이던 내용 복원
  useEffect(() => {
    const saved = sessionStorage.getItem('logDraft');
    if (saved) {
      const draft = JSON.parse(saved);
      setTitle(draft.logTitle || "");
      setVision(draft.visionTitle || "");
      setCategory(draft.categoryName || "");
      setCategoryId(draft.categoryId || null);
    }
  }, []);

  const handleNext = () => {
    if (!title.trim()) { alert("로그 제목을 입력해주세요."); return; }
    if (!categoryId) { alert("카테고리를 선택해주세요."); return; }
    if (!vision.trim()) { alert("이루고 싶은 비전을 입력해주세요."); return; }

    sessionStorage.setItem('logDraft', JSON.stringify({
      logTitle: title,
      visionTitle: vision,
      categoryId: categoryId,
      categoryName: category,
      logThumbnailUrl: thumbnail?.uploadedUrl || null,
    }));
    navigate("/logs/new/step2");
  };

  const handleVisionSelect = (selectedVision) => {
    setVision(selectedVision);
    setIsVisionListOpen(false);
  };

  const categoryRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
      if (visionRef.current && !visionRef.current.contains(event.target)) {
        setIsVisionListOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axiosInstance.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setThumbnail({ url, name: file.name, uploadedUrl: res.data?.data });
    } catch {
      setThumbnail({ url, name: file.name, uploadedUrl: null });
    }
  };

  const handleDeleteImage = () => {
    setThumbnail(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>
          <S.Title>Write Fail Log</S.Title>
          <S.SubTitle>로그 작성 가이드에 맞게 페일 로그 작성</S.SubTitle>
        </S.Header>

        <S.StepInfo>
          <S.StepBadgeRow>
            <S.StepBadge>Step 1</S.StepBadge>
            <S.StepTitle>비전, 제목, 카테고리, 썸네일 설정하기</S.StepTitle>
          </S.StepBadgeRow>
          <S.StepDesc>로그의 제목과 달성하고 싶은 최종 목표, 목표 태그, 로그 썸네일 사진을 설정해주세요.</S.StepDesc>
        </S.StepInfo>
        <S.ButtonRow>
          <S.NextButton onClick={handleNext}>다음</S.NextButton>
        </S.ButtonRow>

        <S.FormContainer>
          <S.FormRow>
            <S.FormGroup>
              <S.Label>로그 제목</S.Label>
              <S.Input
                placeholder="예) 정보처리기사 자격증 필기 도전기"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                $width={491}
              />
            </S.FormGroup>

            <S.FormGroup ref={categoryRef}>
              <S.Label>카테고리</S.Label>
              <S.DropdownWrapper>
                <S.DropdownHeader $isOpen={isCategoryOpen} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                  <S.DropdownText $hasValue={!!category}>{category || "카테고리를 선택해주세요."}</S.DropdownText>
                  <S.ArrowIcon $isOpen={isCategoryOpen} />
                </S.DropdownHeader>
                {isCategoryOpen && (
                  <S.FloatingList>
                    {categories.map((cat) => (
                      <S.FloatingItem
                        key={cat.id}
                        $isSelected={categoryId === cat.id}
                        onClick={() => {
                          setCategory(cat.categoryName);
                          setCategoryId(cat.id);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {cat.categoryName}
                      </S.FloatingItem>
                    ))}
                  </S.FloatingList>
                )}
              </S.DropdownWrapper>
            </S.FormGroup>
          </S.FormRow>

          <S.FormGroup ref={visionRef}>
            <S.LabelRow>
              <S.Label>이루고 싶은 비전</S.Label>
              <S.LoadVisionButton $isOpen={isVisionListOpen} type="button" onClick={() => setIsVisionListOpen(!isVisionListOpen)}>
                <VisionIconComponent />
                기존 비전 불러오기
              </S.LoadVisionButton>
            </S.LabelRow>
            <S.Input
              placeholder="예) 정보처리기사 취득하기"
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              $width={782}
            />
            {isVisionListOpen && (
              <S.FloatingList>
                {pastVisions.length === 0 ? (
                  <S.EmptyVision>
                    아직 작성된 비전이 없습니다.<br />
                    새로운 비전을 작성해주세요.
                  </S.EmptyVision>
                ) : (
                  pastVisions.map((pv, idx) => (
                    <S.FloatingItem
                      key={idx}
                      onClick={() => handleVisionSelect(pv)}
                    >
                      {pv}
                    </S.FloatingItem>
                  ))
                )}
              </S.FloatingList>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>로그 썸네일 사진 첨부</S.Label>
            <S.ThumbnailRow>
              <S.UploadButtonArea onClick={() => fileInputRef.current?.click()}>
                <S.UploadIcon>
                  <S.UploadIconImg src={uploadIcon} alt="upload" />
                </S.UploadIcon>
                <S.UploadText>클릭해서 사진 업로드 (JPG, PNG / 최대 5MB)</S.UploadText>
              </S.UploadButtonArea>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              {thumbnail && (
                <S.PreviewWrapper>
                  <S.PreviewImage src={thumbnail.url} alt="thumbnail" />
                  <S.FileNameContainer>
                    <S.PreviewFileName>{thumbnail.name}</S.PreviewFileName>
                  </S.FileNameContainer>
                  <S.DeleteIcon onClick={handleDeleteImage}>
                    <S.DeleteImg src={deleteIcon} alt="delete" />
                  </S.DeleteIcon>
                </S.PreviewWrapper>
              )}
            </S.ThumbnailRow>
          </S.FormGroup>
        </S.FormContainer>

      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default LogWriteStep1Container;
