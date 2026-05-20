import image1 from '../profile/resouces/IMAGE-1.png';
import image2 from '../profile/resouces/IMAGE-2.png';
import image3 from '../profile/resouces/IMAGE-3.png';

export const DUMMY_COMMUNITY_POSTS = [
  {
    id: 1,
    category: '취업/이직',
    title: '1페이지 - Asunica 최종 면접 준비 중 발견한 코드 오류',
    content: '오늘 프로젝트를 정리하다가 스타일 경로가 꼬인 것을 발견했다. 당황했지만 Git 복구를 통해 해결!',
    date: '2026.05.14',
    imageUrl: image1,
    profile: 'https://via.placeholder.com/14x14',
    author: '김세종',
    views: 128,
    likes: 15,
    comments: 3,
  },
  {
    id: 2,
    category: '공부',
    title: '1페이지 - React 공통 컴포넌트 설계의 어려움',
    content: '페이지네이션 컴포넌트를 만들면서 그룹화 로직을 구현하는 게 생각보다 까다로웠다.',
    date: '2026.05.13',
    imageUrl: image2,
    profile: 'https://via.placeholder.com/14x14',
    author: '김세종',
    views: 85,
    likes: 10,
    comments: 1,
  },
  {
    id: 3,
    category: '일상',
    title: '1페이지 - 오늘의 실패: 커피를 쏟은 키보드',
    content: '코딩에 집중하다가 커피를 쏟았다. 하드웨어 관리는 정말 중요하다.',
    date: '2026.05.12',
    imageUrl: image3,
    profile: 'https://via.placeholder.com/14x14',
    author: '김세종',
    views: 210,
    likes: 42,
    comments: 8,
  },
];

export const DUMMY_FAIL_LOGS = [
  { id: 1, title: '1페이지 - Asunica 최종 면접 준비 중 발견한 코드 오류', content: '오늘 프로젝트를 정리하다가 스타일 경로가 꼬인 것을 발견했다.', createdAt: '2026-05-14', isLiked: false },
  { id: 2, title: '1페이지 - React 공통 컴포넌트 설계의 어려움', content: '페이지네이션 컴포넌트를 만들면서 그룹화 로직을 구현하는 게 까다로웠다.', createdAt: '2026-05-13', isLiked: true },
  { id: 3, title: '1페이지 - 오늘의 실패: 커피를 쏟은 키보드', content: '코딩에 집중하다가 커피를 쏟았다. 하드웨어 관리는 정말 중요하다.', createdAt: '2026-05-12', isLiked: false },
  { id: 4, title: '스타일 컴포넌트 레이어 연동 실패 분석', content: 'z-index와 가상요소 속성의 원리를 분석한다.', createdAt: '2026-05-11', isLiked: false },
];
