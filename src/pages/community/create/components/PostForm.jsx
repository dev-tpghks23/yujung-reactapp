import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Preview from './Preview';
import styled from 'styled-components';
import S, { colorCSS, boxShadow, sizeCSS } from '../../style';
import CategorySelect from './CategorySelect';

import bold from '../../resources/option-bold.svg';
import italic from '../../resources/option-italic.svg';
import picture from '../../resources/option-picture.svg';
import hyper from '../../resources/option-hyper.svg';
import { flexCenterRow } from '../../../../styles/common';

import { EditorContent, useEditor, useEditorState } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import ImageResize from 'tiptap-extension-resize-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import '../../css/PostForm.css'

const CATEGORY_OPTIONS = ['공부/취업', '시장/창업', '인간관계', '건강/루틴', '기타'];

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
      // content: defaultContent,
    },
  });

  const hasError = isSubmitted && (errors.title || errors.category);
  const [previewOpen, setPreviewOpen] = useState(false);

  const onSubmitForm = (data) => {
    const categoryIndex = CATEGORY_OPTIONS.indexOf(data.category);

    //html문자열
    console.log(editor?.getHTML());
    const html = editor?.getHTML() ?? '';
    const doc = new DOMParser().parseFromString(html, 'text/html');

    //업로드된 image배열
    // data.images = Array.from(doc.querySelectorAll('img')).map(img => img.getAttribute('src'));
    // console.log(data.images);

    onSubmit?.({ title: data.title, category: categoryIndex, content: html, images: data.images });
  };

  // tiptap 세팅
    const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      ImageResize.configure({
        minWidth: 50, // Minimum width in pixels
        maxWidth: 1270, // Maximum width in pixels
      }),
      Paragraph,
      Text
    ],
    content: '<img src="https://storage.ghost.io/c/ef/c4/efc4de12-d333-4292-a2f4-7c017c0cced8/content/images/size/w2000/2025/11/Gemini_Generated_Image_5fdg255fdg255fdg.png" width="590" containerstyle="width: 590px;" wrapperstyle="display: flex; margin: 0px;"><p>익숙한 내 방에서만 공부하던 게 독이었습니다. 실전에서는 낯선 환경과 작은 소음에도 쉽게 흔들렸고, 알고 있던 것도 제대로 꺼내지 못했습니다. 그래서 공부량을 더 늘리는 대신 환경부터 바꾸기로 했습니다.</p><p></p><p>집이 아닌 도서관, 카페, 스터디카페를 번갈아 이용했고 처음엔 불편했지만 점점 낯선 공간에서도 집중을 유지하는 시간이 길어졌습니다. 이전에는 긴장하면 손이 굳고 머리가 멍해 졌는데, 이제는 다시 흐름을 잡는 연습이 되기 시작했습니다.</p><img src="https://img.freepik.com/free-photo/stack-notebooks-cup-with-pencils_23-2147711407.jpg?semt=ais_hybrid&amp;w=740&amp;q=80" width="627" containerstyle="width: 627px; margin: 0px auto 0px 0px;" wrapperstyle="display: flex; margin: 0px;"><p>공부 루틴도 바꿨습니다. 예전에는 오래 앉아 있는 것 자체에 의미를 뒀지만, 지금은 30분 집중 후 짧게 쉬는 방식으로 구조를 바꿨습니다. 틀린 문제는 그냥 넘어가지 않고 왜 틀렸는 지를 적으면서 실수의 패턴을 추적했습니다.</p><p></p><p>결국 실전은 많이 아는 것보다 흔들려도 다시 꺼낼 수 있는 힘이 더 중요하다는 걸 느꼈습니다. 환경을 바꾸고, 루틴을 바꾸고, 실수의 원인을 적기 시작한 뒤부터 실전에서의 안정감 이 달라졌습니다.</p> ',
  })

  //에디터 상태값변경 (리랜더링)
  const { isBoldActive, isItalicActive, isLinkActive } = useEditorState({
    editor,
    selector: (ctx) => ({
      isLinkActive: ctx.editor?.isActive('link') ?? false,
      isBoldActive: ctx.editor?.isActive('bold') ?? false,
      isItalicActive: ctx.editor?.isActive('italic') ?? false
    }),
  });

  //이미지 업로드 갯수 불러오기
  const getImagesCount = () => {
    const html = editor?.getHTML() ?? '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return Array.from(doc.querySelectorAll('img')).map(img => img.getAttribute('src')).length;
  }

  //버튼 이벤트
  //link 토글
  const handleOnClickLinkButton = () => {
    if (!editor) return;

    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run();
    } else {
      const url = window.prompt('URL을 입력하세요:');
      if (!url) return;
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  //image버튼 (10개 제한)
  const fileInputRef = useRef(null);

  const handleOnClickPictureButton = () => {
    if (getImagesCount() >= 10) {
      return alert('이미지는 최대 10개까지 추가 할 수 있습니다');
    }
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      editor.chain().focus().setImage({ src: reader.result }).run();
    };
    reader.readAsDataURL(file);
    e.target.value = '';
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
              <ToolbarBtn type="button" $isActive={isBoldActive} onClick={() => {
                editor?.chain().focus().toggleBold().run()
                }}><ToolbarIcon src={bold} alt="bold" /></ToolbarBtn>
              <ToolbarBtn type="button" $isActive={isItalicActive} onClick={() => editor?.chain().focus().toggleItalic().run()}><ToolbarIcon src={italic} alt="italic" /></ToolbarBtn>
              <ToolbarBtn type="button" onClick={handleOnClickPictureButton}><ToolbarIcon src={picture} alt="picture" /></ToolbarBtn>
              <ToolbarBtn type="button" $isActive={isLinkActive} onClick={handleOnClickLinkButton}><ToolbarIcon src={hyper} alt="hyperlink" /></ToolbarBtn>
            </EditorToolbar>
            <EditorContent editor={editor} />
            {/* <EditorTextArea {...register('content')} /> */}
          </EditorBox>
        </FieldBlock>

        <BottomDivider />

        <ButtonRow>
          <CancelBtn type="button" onClick={onCancel}>
            <S.Span size="h8Bold">취소</S.Span>
          </CancelBtn>
          <PreviewBtn type="button" onClick={() => setPreviewOpen(true)}>
            <S.Span size="h8Bold">미리보기</S.Span>
          </PreviewBtn>
          <SubmitBtn type="submit">
            <S.Span size="h8Bold" color="faillog_white">{isCreate ? "게시글 등록" : "게시글 수정"}</S.Span>
          </SubmitBtn>
        </ButtonRow>
      </form>
      
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {previewOpen && (
        <Preview content={editor?.getHTML() ?? ''} onClose={() => setPreviewOpen(false)} />
      )}
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
  /* border: 1px solid ${colorCSS["faillog_gray9"]}; */
  border-radius: 15px;
  /* overflow: hidden; */
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
  border-radius: 15px 15px 0px 0px;
  border: 1px solid ${colorCSS["faillog_gray9"]};
  flex-shrink: 0;
  /* border-bottom: 1px solid ${colorCSS["faillog_gray9"]}; */
`

const ToolbarBtn = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  ${flexCenterRow}
  background-color: ${({ $isActive }) => $isActive ? colorCSS["faillog_gray8"] : 'transparent'};
  transition: background-color 150ms ease;

  &:hover {
    background-color: ${({ $isActive }) => $isActive ? colorCSS["faillog_gray8"] : colorCSS["faillog_gray2"]};
  }
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
  gap: 8px;
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

const PreviewBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid ${colorCSS["faillog_purple"]};
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
