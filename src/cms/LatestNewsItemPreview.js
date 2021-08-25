import React from "react"

import LatestNewsItem from "../components/LatestNewsItem"

export default function LatestNewsItemPreview({ entry }) {
  const title = entry.getIn(["data", "title"])
  const date = entry.getIn(["data", "date"])
  const url = entry.getIn(["data", "url"])
  const image = entry.getIn(["data", "image"])
  return (
    <div className="flex justify-center p-[24px]">
      <LatestNewsItem
        className="w-full max-w-[400px]"
        title={title}
        date={date}
        url={url}
        image={image}
      />
    </div>
  )
}
