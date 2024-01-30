import React from "react";

type AvatarProps = {
  src: string
  className: string
};

function Avatar({ src, className }: AvatarProps) {
  return (
    <div className={className}>
      <img
        src={src}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

export default Avatar;
