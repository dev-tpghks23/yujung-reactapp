import React from "react";
import MyCommunityPostCardComponent from "./MyCommunityPostCardComponent";

const PostGridSectionComponent = ({ posts = [], selectedIds = [], onSelectOne, onNavigateOne, styles, isPageOwner = true }) => {
  const Grid = styles?.PostGrid || "div";

  return (
    <Grid>
      {posts.map((post) => {
        const isSelected = selectedIds.includes(post.id);

        return (
          <div key={post.id}>
            <MyCommunityPostCardComponent
              post={post}
              isSelected={isSelected}
              onSelect={() => onSelectOne?.(post.id)}
              onNavigate={() => onNavigateOne?.(post.id)}
              isPageOwner={isPageOwner}
            />
          </div>
        );
      })}
    </Grid>
  );
};

export default PostGridSectionComponent;