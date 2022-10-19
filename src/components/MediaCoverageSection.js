import React from "react"
import { StaticQuery, graphql } from "gatsby"
import cn from "classnames"

import GradientText from "./GradientText"
import MediaCoverageItem from "./MediaCoverageItem"

function MediaCoverageSection({ className, items, ...props }) {
  return (
    <section
      className={cn("flex flex-col items-center mt-[88px]", className)}
      {...props}
    >
      <GradientText tag="h3" className="text-[32px] text-center">Media Coverage</GradientText>
      <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] mt-[32px]">
        {items.map(({ title, url, platform, image, backgroundColor }, i) => (
          <li key={i} className="max-w-[240px] w-full">
            <MediaCoverageItem
              className="w-full h-full"
              title={title}
              image={image}
              url={url}
              media={platform}
              backgroundColor={backgroundColor}
            />  
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function MediaCoverageSectionWithData(props) {
  return (
    <StaticQuery
      query={graphql`
        query MediaCoverageQuery {
          items: allMarkdownRemark(
            filter: {
              fileAbsolutePath: { regex: "//en//" }
              frontmatter: { type: { eq: "media-coverage" } }
            }
            sort: { fields: frontmatter___date, order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  image
                  url
                  platform
                }
              }
            }
          }
        }
      `}
      render={data => (
        <MediaCoverageSection
          items={data.items.edges.map(({ node }) => node.frontmatter)}
          {...props}
        />
      )}
    />
  )
}