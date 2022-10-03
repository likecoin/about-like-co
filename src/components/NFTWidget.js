import React from "react";

export default function NFTWidget ({ className, classId }) {
  const src = `https://button.like.co/in/embed/nft/class/${classId}?campaign=1`;
  return (
    <iframe
      className={className}
      src={src}
      width={360}
      height={480}
      scrolling="no"
      frameBorder="0"
    />
  )
}
