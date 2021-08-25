import React from "react"

import MediaCoverageItem from "../components/MediaCoverageItem"

export default function MediaCoverageItemPreview({ entry }) {
  const title = entry.getIn(["data", "title"])
  const platform = entry.getIn(["data", "platform"])
  const url = entry.getIn(["data", "url"])
  const image = entry.getIn(["data", "image"])
  return (
    <div className="flex justify-center p-[24px]">
      <MediaCoverageItem
        className="w-full max-w-[240px]"
        title={title}
        platform={platform}
        url={url}
        image={image}
      />
    </div>
  )
}
