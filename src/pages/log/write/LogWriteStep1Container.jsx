import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [vision, setVision] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isVisionListOpen, setIsVisionListOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const fileInputRef = useRef(null);

  const categories = [
    "사업/창업",
    "공부/취업",
    "인간관계",
    "건강/루틴",
    "기타"
  ];

  const visions = [
    "올해 안에 정보처리기사 자격증 따기",
    "네이버 입사하기",
    "살 15키로 빼기",
    "한달에 책 2권씩 읽기"
  ];

  const handleNext = () => {
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setThumbnail({ url, name: file.name });
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
                    {categories.map((cat, idx) => (
                      <S.FloatingItem
                        key={idx}
                        $isSelected={category === cat}
                        onClick={() => {
                          setCategory(cat);
                          setIsCategoryOpen(false);
                        }}
                      >
                        {cat}
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
                {visions.length > 0 ? (
                  visions.map((pv, idx) => (
                    <S.FloatingItem
                      key={idx}
                      $isSelected={vision === pv}
                      onClick={() => handleVisionSelect(pv)}
                    >
                      {pv}
                    </S.FloatingItem>
                  ))
                ) : (
                  <S.EmptyVision>
                    아직 작성된 비전이 없습니다.<br />
                    새로운 비전을 작성해주세요.
                  </S.EmptyVision>
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
