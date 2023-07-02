import * as React from "react"
import cn from "classnames"

const getKeyVisualImages = require.context("../images/key-visual", false, /\.png$/)

export const KeyVisualImage = ({ className }) => {
  const images = getKeyVisualImages.keys().map(key => (getKeyVisualImages(key).default))
  return (
    <div className={className}>
      {images.map((image, index) => (
        <img
          key={`${index}`}
          className={cn([
            "block max-w-[inherit]",
            { "absolute inset-0 animate-[key-visual-pulse_0s_linear_infinite]": index > 0 }
          ])}
          src={image}
          style={index > 0 ? {
            animationDelay: `${(index - 1) * 1}s`,
            animationDuration: `${images.length - 1}s`,
          } : undefined}
          alt="LikeCoin chain"
        />
      ))}
    </div>
  )
}

export default KeyVisualImage
