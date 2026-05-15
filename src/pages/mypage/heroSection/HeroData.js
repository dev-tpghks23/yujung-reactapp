import mainImg from '../heroSection/resources/fail-logs.png';
import mylogImg from '../heroSection/resources/my-fail-log.png';
import likesImg from '../heroSection/resources/likes.png';
import guestbookImg from '../heroSection/resources/guestbook.png';

export const heroData = [
  { id: "fail-logs", 
    path: "/fail-logs", 
    subTitle: "페일로그를 작성해보고 싶다면", 
    title: "페일로그 바로가기", 
    description: "실패를 기록하고 성장의 발판으로 삼으세요.", 
    bgColor: "#E8EBFD", 
    img: mainImg,
    align: "left"
  },

  { id: "my-fail-log", 
    path: "/my-page/fail-logs", 
    subTitle: "내가 작성한 로그를 보고 싶다면", 
    title: "마이 페일로그", 
    description: "내가 작성한 로그를 볼 수 있어요.", 
    bgColor: "#F0F3FF", 
    img: mylogImg,
    align: "left"
  },

  { id: "likes", 
    path: "/my-page/likes", 
    subTitle: "참고하고 싶은 게시글을 모아둔", 
    title: "좋아요 한 페일로그", 
    description: "좋아요 한 게시글을 모아 볼 수 있어요.", 
    bgColor: "#EBF8FF", 
    img: likesImg,
    align: "right" },

  { id: "guestbook", 
    path: "/my-page/guestbook", 
    subTitle: "다른 사람들과 소통하는", 
    title: "페일로그 방명록", 
    description: "내게 남긴 말을 확인해보세요.", 
    bgColor: "#EEF2FF", 
    img: guestbookImg,
    align: "left"
   }
];

export const getHeroContent = (pathname) => {
  const mainContent = heroData.find(item => item.path === pathname) || heroData[0];
  const quickMenus = heroData.filter(item => item.id !== mainContent.id);
  return { mainContent, quickMenus };
};