import React from "react";

interface LikeButtonProps {
  className?: string;
  favorited: boolean;
  setFavorited: Function;
}
export default function LikeButton({
  favorited,
  setFavorited,
  className,
}: LikeButtonProps) {
  return (
    <div
      onClick={(event: any) => {
        event.cancelBubble = true;
        if (event.stopPropagation) event.stopPropagation();
        setFavorited(!favorited);
      }}
      className={`${className} like-btn d-flex align-items-center justify-content-center`}>
      <div className="heart-container">
        {favorited && <i className="fas fa-heart solid-heart"></i>}
        {!favorited && <i className="far fa-heart border-heart"></i>}
      </div>
    </div>
  );
}
