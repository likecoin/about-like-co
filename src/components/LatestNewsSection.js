import React from "react"
import { StaticQuery, graphql } from "gatsby"
import cn from "classnames"

import GradientText from "./GradientText"
import Button from "./Button"
import LatestNewsItem from "./LatestNewsItem"
import NorthEastIcon from "./icons/NorthEast"

function LatestNewsSection({ className, items, blogUrl, ...props }) {
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
        href={blogUrl}
        target="_blank"
        rel="noreferrer"
      >
        More News
        <NorthEastIcon className="ml-[8px]" />
      </Button>
    </section>
  )
}

export default function LatestNewsSectionWithData(props) {
  return (
    <StaticQuery
      query={graphql`
        query NewsQuery {
          site {
            siteMetadata {
              blogUrl
            }
          }
          items: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "//en//"}, frontmatter: {type: {eq: "news"}}}
            sort: {fields: frontmatter___date, order: DESC}
          ) {
            edges {
              node {
                frontmatter {
                  title
                  date
                  image
                  url
                }
              }
            }
          }
        }
      
      `}
      render={data => (
        <LatestNewsSection
          items={data.items.edges.map(({ node }) => node.frontmatter)}
          blogUrl={data.site.siteMetadata.blogUrl}
          {...props}
        />
      )}
    />
  )
}