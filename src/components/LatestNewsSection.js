import React from "react"
import cn from "classnames"

import GradientText from "./GradientText"
import Button from "./Button"
import LatestNewsItem from "./LatestNewsItem"
import NorthEastIcon from "./icons/NorthEast"

export default function LatestNewsSection({ className, ...props }) {
  const items = [
    {
      title :"Introduction to LikeCoin governance",
      url: "https://medium.com/likecoin/introduction-to-likecoin-governance-df0785a15bc1",
      date: '30-07-2021',
      image: '/uploads/latest-news/introduction-to-like-coin-governance.png',
    },
    {
      title :"LikeCoin chain FoTan overview",
      url: "https://medium.com/likecoin/likecoin-chain-fotan-upgrade-overview-4827a933b22",
      date: '09-07-2021',
      image: '/uploads/latest-news/fotan-upgrade-overview.png',
    },
    {
      title :"LikeCoin Community Update #202108",
      url: "https://medium.com/likecoin/likecoin-community-update-202108-abb71c67145c",
      date: '06-08-2021',
      image: '/uploads/latest-news/likecoin-community-update-202108.jpeg',
    },
    {
      title :"How ISCN completes IPFS file version management",
      url: "https://medium.com/likecoin/how-iscn-completes-ipfs-file-version-management-8ad70cb50ed4",
      date: '04-08-2021',
      image: '/uploads/latest-news/how-iscn-completes-ipfs-file-version-management.jpeg',
    },
  ]
  return (
    <section
      className={cn("flex flex-col items-center mt-[88px]", className)}
      {...props}
    >
      <GradientText tag="h3" className="text-[32px] text-center">Latest News</GradientText>
      <ul className="grid md:grid-cols-2 gap-[32px] mt-[32px]">
        {items.map(({ title, url, date, image }, i) => (
          <li key={i} className="max-w-[400px]">
            <LatestNewsItem
              className="h-full"
              title={title}
              image={image}
              url={url}
              date={date}
            />  
          </li>
        ))}
      </ul>

      <Button
        className="flex items-center mt-[32px]"
        preset="filled"
        href="https://medium.com/likecoin"
        target="_blank"
        rel="noreferrer"
      >
        See more news
        <NorthEastIcon className="ml-[8px]" />
      </Button>
    </section>
  )
}
