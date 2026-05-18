import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import S, { colorCSS, boxShadow, sizeCSS } from '../../style';
import CategorySelect from './CategorySelect';

import bold from '../../resources/option-bold.svg';
import italic from '../../resources/option-italic.svg';
import picture from '../../resources/option-picture.svg';
import hyper from '../../resources/option-hyper.svg';
import { flexCenterRow } from '../../../../styles/common';

const CATEGORY_OPTIONS = ['시장/창업', '공부/취업', '인간관계', '건강/루틴', '기타'];

const PostForm = ({
  isCreate = true,
  defaultTitle = '',
  defaultCategory = null,
  defaultContent = '',
  onCancel,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      title: defaultTitle,
      category: defaultCategory,
      content: defaultContent,
    },
  });

  const hasError = isSubmitted && (errors.title || errors.category);

  const onSubmitForm = (data) => {
    const categoryIndex = CATEGORY_OPTIONS.indexOf(data.category);
    onSubmit?.({ title: data.title, category: categoryIndex, content: data.content });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <FormTitle>
          <S.Span size="h7Bold">
            {isCreate ? '커뮤니티 새 글 작성하기' : '커뮤니티 글 수정하기'}
          </S.Span>
        </FormTitle>

        <TopDivider />

        <InfoBox>
          <S.Span size="h8Bold" color="faillog_blue">
            커뮤니티 글 작성 시 제목, 카테고리, 본문 항목을 필수로 작성하셔야 등록이 가능합니다.
          </S.Span>
        </InfoBox>

        <FieldBlock $marginTop="40px">
          <Label>
            <S.Span size="h8Bold">게시글 제목 </S.Span>
            {hasError && <RequiredMark> *</RequiredMark>}
          </Label>
          <TitleInput
            $hasError={!!errors.title}
            placeholder="제목을 입력하세요."
            {...register('title', { required: true })}
          />
          {errors.title && (
            <ErrorMsg>
              <S.Span size="h10Regular" color="faillog-red">제목 필수입니다.</S.Span>
            </ErrorMsg>
          )}
        </FieldBlock>

        <FieldBlock $marginTop="40px">
          <Label>
            <S.Span size="h8Bold">카테고리 </S.Span>
            {hasError && <RequiredMark> *</RequiredMark>}
          </Label>
          <Controller
            name="category"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CategorySelect
                defaultValue={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.category && (
            <ErrorMsg>
              <S.Span size="h10Regular" color="faillog-red">카테고리 필수입니다.</S.Span>
            </ErrorMsg>
          )}
        </FieldBlock>

        <FieldBlock $marginTop="42px">
          <Label>
            <S.Span size="h8Bold">본문 작성</S.Span>
            {hasError && <RequiredMark> *</RequiredMark>}
          </Label>
          <EditorBox>
            <EditorToolbar>
              <ToolbarBtn type="button"><ToolbarIcon src={bold} alt="bold" /></ToolbarBtn>
              <ToolbarBtn type="button"><ToolbarIcon src={italic} alt="italic" /></ToolbarBtn>
              <ToolbarBtn type="button"><ToolbarIcon src={picture} alt="picture" /></ToolbarBtn>
              <ToolbarBtn type="button"><ToolbarIcon src={hyper} alt="hyperlink" /></ToolbarBtn>
            </EditorToolbar>
            <EditorTextArea {...register('content')} />
          </EditorBox>
        </FieldBlock>

        <BottomDivider />

        <ButtonRow>
          <CancelBtn type="button" onClick={onCancel}>
            <S.Span size="h8Bold">취소</S.Span>
          </CancelBtn>
          <SubmitBtn type="submit">
            <S.Span size="h8Bold" color="faillog_white">{isCreate ? "게시글 등록" : "게시글 수정"}</S.Span>
          </SubmitBtn>
        </ButtonRow>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 868px;
  padding: 32px 48px;
  box-sizing: border-box;
  ${boxShadow["boxBasic"]}
  border: 1px solid ${colorCSS["faillog_gray4"]};
  background-color: ${colorCSS["faillog_white"]};
  border-radius: 15px;
`

const FormTitle = styled.div`
  margin-bottom: 15px;
`

const TopDivider = styled.hr`
  width: 770px;
  border: none;
  border-top: 1px solid ${colorCSS["faillog_gray9"]};
  margin: 0 0 26px 0;
`

const InfoBox = styled.div`
  width: 770px;
  height: 60px;
  background-color: ${colorCSS["faillog_light_blue"]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
`

const FieldBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: ${({ $marginTop }) => $marginTop};
`

const Label = styled.div`
  display: flex;
  align-items: center;
`

const RequiredMark = styled.span`
  color: ${colorCSS["faillog-red"]};
  font-size: 16px;
  margin-left: 3px;
  font-weight: 700;
  line-height: 24px;
`

const TitleInput = styled.input`
  width: 772px;
  height: 48px;
  padding: 0 11px 0 19px;
  border: 1px solid ${({ $hasError }) => $hasError ? colorCSS["faillog-red"] : "#D9D9D9"};
  border-radius: 15px;
  background: ${colorCSS["faillog_white"]};
  box-sizing: border-box;
  ${sizeCSS["h8Regular"]}
  color: ${colorCSS["faillog-black"]};
  outline: none;

  &::placeholder {
    color: ${colorCSS["faillog_gray9"]};
  }

  &:focus {
    border-color: ${({ $hasError }) => $hasError ? colorCSS["faillog-red"] : colorCSS["faillog_purple"]};
  }
`

const ErrorMsg = styled.div`
  margin-top: -10px;
`

const EditorBox = styled.div`
  width: 772px;
  height: 464px;
  border: 1px solid ${colorCSS["faillog_gray9"]};
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const EditorToolbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colorCSS["faillog_gray4"]};
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0 16px;
  box-sizing: border-box;
  flex-shrink: 0;
  border-bottom: 1px solid ${colorCSS["faillog_gray9"]};
`

const ToolbarBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  ${flexCenterRow}
`

const ToolbarIcon = styled.img`
  width: 20px;
  height: 20px;
`

const EditorTextArea = styled.textarea`
  flex: 1;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border: none;
  resize: none;
  ${sizeCSS["h9-regular"]}
  color: ${colorCSS["faillog-black"]};
  outline: none;

  &::placeholder {
    color: ${colorCSS["faillog_gray9"]};
  }
`

const BottomDivider = styled.hr`
  width: 772px;
  border: none;
  border-top: 1px solid ${colorCSS["faillog_gray9"]};
  margin: 36px 0 0 0;
`

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  margin-top: 23px;
`

const CancelBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid ${colorCSS["faillog_gray9"]};
  border-radius: 10px;
  background: ${colorCSS["faillog_white"]};
  cursor: pointer;
`

const SubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: ${colorCSS["faillog_purple"]};
  cursor: pointer;
`

export default PostForm;
