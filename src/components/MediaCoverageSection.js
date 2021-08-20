import React from "react"
import cn from "classnames"

import GradientText from "./GradientText"
import MediaCoverageItem from "./MediaCoverageItem"

export default function MediaCoverageSection({ className, ...props }) {
  const items = [
    {
      title :"Hong Kong's Apple Daily to live on in blockchain, free of censors",
      url: "https://reut.rs/3jKtUHD",
      media: 'Reuters',
      image: '/uploads/media-coverage/reuters.svg',
    },
    {
      title :"Hong Kongers are using blockchain archives to fight government censorship",
      url: "https://bit.ly/3jEsTAO",
      media: 'Quartz',
      image: '/uploads/media-coverage/quartz.svg',
    },
    {
      title :"Hong Kong Media Turns to Blockchain to Preserve Protest Archives",
      url: "https://bit.ly/3s408RL",
      media: 'Decrypt',
      image: '/uploads/media-coverage/decrypt.png',
    },
    {
      title :"Hong Kongers use blockchain to save evidence of anti-authoritarian struggles",
      url: "https://bit.ly/3iFK8m5",
      media: 'Cointelegraph',
      image: '/uploads/media-coverage/cointelegraph.svg',
      backgroundColor: '#253137',
    },
  ]
  return (
    <section
      className={cn("flex flex-col items-center mt-[88px]", className)}
      {...props}
    >
      <GradientText tag="h3" className="text-[32px] text-center">Media Coverage</GradientText>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] mt-[32px]">
        {items.map(({ title, url, media, image, backgroundColor }, i) => (
          <li key={i} className="max-w-[240px]">
            <MediaCoverageItem
              className="h-full"
              title={title}
              image={image}
              url={url}
              media={media}
              backgroundColor={backgroundColor}
            />  
          </li>
        ))}
      </ul>
    </section>
  )
}
