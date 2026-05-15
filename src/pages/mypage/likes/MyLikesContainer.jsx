import React from 'react';
import { useLocation } from 'react-router-dom';
import { getHeroContent } from '../heroSection/HeroData';
import HeroRotationComponent from '../heroSection/HeroRotationComponents';

const MyLikesContainer = () => {
      const { pathname } = useLocation();
        
          // 0. 히어로 섹션 복붙용
          const { mainContent, quickMenus } = getHeroContent(pathname);
          
    return (
        <div className="MyLikesContainer">
           {/* 순환형 히어로 섹션 */}
             <HeroRotationComponent 
                mainContent={mainContent} 
                quickMenus={quickMenus} 
            />
        </div>
    );
};

export default MyLikesContainer;