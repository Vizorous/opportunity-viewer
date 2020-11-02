import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useResponsiveContext } from "../../App";
enum variantColorEnum {
  outlineDanger = "outline-danger",
  danger = "danger",
}

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
  const { isMobile } = useResponsiveContext();
  const [colorChange, setColorChange] = useState("transparent");
  useEffect(() => {
    if (favorited === true) {
      setColorChange("red");
    } else {
      setColorChange("transparent");
    }
  }, [favorited]);

  return (
    <div
      onClick={() => setFavorited(!favorited)}
      className={`${className} like-btn d-flex align-items-center justify-content-center`}>
      <div className="heart-container">
        {favorited && <i className="fas fa-heart solid-heart"></i>}
        {!favorited && <i className="far fa-heart border-heart"></i>}
      </div>
    </div>
    // <Button
    //   className={`${className} like-btn`}
    //   variant={variantColor}
    //   onClick={() => setFavorited(!favorited)}>
    //   {favorited && <i className="fas fa-heart"></i>}
    //   {!favorited && <i className="far fa-heart"></i>}
    // </Button>
  );
}
