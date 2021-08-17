import React from "react"
import cn from "classnames"

import GradientText from "./GradientText"

export default function AwardsPartnersSection({ className, ...props }) {
  const items = [
    {
      title :"Google News",
      url: "https://www.blog.google/around-the-globe/google-asia/gni-innovation-challenge-apac/",
      key: "google",
    },
    {
      title :"Grant for the Web",
      url: "https://www.grantfortheweb.org/blog/2020-flagship-grantees",
      key: "grantfortheweb",
    },
    {
      title :"Cosmos cross chain hackerthon (2nd place)",
      url: "https://blog.cosmos.network/announcing-the-cross-chain-hackathon-winners-698b6d03bd6",
      key: "cosmos",
    },
    {
      title :"Cosmos HackAtom (Honorable mentions)",
      url: "https://blog.cosmos.network/cosmos-hackatom-seoul-winners-d6badbd0629b",
      key: "hackatom",
    },
    {
      title :"CAI",
      url: "https://contentauthenticity.org/",
      key: "cai",
    },
    {
      title :"IPFS",
      url: "",
      key: "ipfs",
    },
    {
      title :"Arweave",
      url: "",
      key: "arweave",
    },
    {
      title :"AppWorks",
      url: "",
      key: "appworks",
    },
  ].map(({ key, ...item }) => ({ ...item, key, image: `/uploads/awards-partners/${key}.svg`}))
  return (
    <section
      className={cn("flex flex-col items-center mt-[88px]", className)}
      {...props}
    >
      <GradientText tag="h3" className="text-[32px] text-center">Awards & Partners</GradientText>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-[16px] gap-y-[32px] mt-[32px]">
        {items.map(({ key, title, url, image }) => (
          <li key={key}>
            {url ? (
              <a
                href={url}
                target="_blank"
                title={title}
                rel="noreferrer"
              >
                <img src={image} alt={title} />
              </a>
            ) : (
              <img src={image} alt={title} />
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
