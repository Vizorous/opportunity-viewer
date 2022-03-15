import React from "react";

interface LikeButtonProps {
  program: string;
}
export default function LikeButton({ program }: LikeButtonProps) {
  return (
    <div
      className={`rounded align-items-center justify-content-center p-1 ${program}`}>
      <p className={`mb-0 font-weight-bold text-white text-center`}>
        {program}
      </p>
    </div>
  );
}
