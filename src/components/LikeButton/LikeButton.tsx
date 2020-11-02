import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
enum variantColorEnum {
  outlineDanger = "outline-danger",
  danger = "danger",
}
interface LikeButtonProps {
  favorited: boolean;
  setFavorited: Function;
}
export default function LikeButton({
  favorited,
  setFavorited,
}: LikeButtonProps) {
  const [variantColor, setVariantColor] = useState(
    variantColorEnum.outlineDanger
  );
  useEffect(() => {
    if (favorited === true) {
      setVariantColor(variantColorEnum.danger);
    } else {
      setVariantColor(variantColorEnum.outlineDanger);
    }
  }, [favorited]);

  return (
    <Button
      className="opp-card__save-btn"
      variant={variantColor}
      onClick={() => setFavorited(!favorited)}>
      {favorited && <i className="fas fa-heart"></i>}
      {!favorited && <i className="far fa-heart"></i>}
    </Button>
  );
}
