import * as React from "react"
import Button from "../components/Button"

import HeroImage from "../images/hero.png"
import KeyVisualImage from "../images/key-visual.png"
import ScrollDownHintImage from "../images/scroll-down-hint.png"

import AwardsPartnersSection from "../components/AwardsPartnersSection"
import CommunityLink from "../components/CommunityLink"
import Divider from "../components/Divider"
import GradientText from "../components/GradientText"
import LatestNewsSection from "../components/LatestNewsSection"
import Layout from "../components/Layout"
import MediaCoverageSection from "../components/MediaCoverageSection"
import StatNumber from "../components/StatNumber"
import WhatDepubOfferItem from "../components/WhatDepubOfferItem"

const IndexPage = () => {
  const communityItems = [
    'discord',
    'github',
    'twitter',
    'medium',
  ]
  return (
    <Layout className="text-like-cyan-vlight">
      {/* Hero Section */}
      <section>
        <div className="relative flex justify-center">
          <img
            className="object-contain object-top max-h-screen transform scale-[1.8] translate-y-[40px] sm:translate-y-0"
            src={HeroImage}
            alt="#Depub"
          />
          <div className="absolute hidden inset-x-0 bottom-0 h-[25%] md:flex justify-center">
            <img
              className="w-[22px] mb-[24px] object-contain"
              src={ScrollDownHintImage}
              alt="Scroll Down"
            />
          </div>
        </div>
        <div className="relative text-center p-[24px]">
          <GradientText tag="h1" className="text-[42px] sm:text-[64px] md:text-[80px] leading-tight">Decentralized Publishing</GradientText>
          <p className="text-[20px] mt-[24px]">
            Digital evidence can now be secured, validated, and made readily available in perpetuity with #DePub.
          </p>
        </div>
      </section>

      {/* Sub-Nav Section */}
      <section className="relative mt-[88px]">
        <nav className="flex justify-center">
          <ul className="grid sm:grid-flow-col-dense auto-cols-auto gap-x-[8px] gap-y-[16px]">
            <li>
              <Button
                preset="filled"
                href="https://app.like.co"
                target="_blank"
                rel="noreferrer"
              >Launch app</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                href="https://docs.like.co/"
                target="_blank"
                rel="noreferrer"
              >Docs</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                href="https://medium.com/likecoin"
                target="_blank"
                rel="noreferrer"
              >Blog</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                href="https://docs.like.co/faq"
                target="_blank"
                rel="noreferrer"
              >FAQ</Button>
            </li>
          </ul>
        </nav>
      </section>

      {/* Statistic Section */}
      <section className="relative mt-[88px] flex justify-center">
        <ul className="grid xl:grid-flow-col-dense auto-cols-auto gap-x-[96px] gap-y-[48px]">
          <li>
            <StatNumber
              value="560,000"
              label="published contents"
              withPlus={true}
            />
          </li>
          <li>
            <StatNumber
              value="18,600"
              label="creators"
              withPlus={true}
            />
          </li>
          <li>
            <StatNumber
              value="107,000"
              label="wallets"
              withPlus={true}
            />
          </li>
        </ul>
      </section>

      {/* What depub offers Section */}
      <section className="relative flex mt-[88px]">
        <div className="relative flex justify-center flex-grow">
          <img
            className="absolute right-0 max-w-[750px] mr-[-120px] opacity-60 md:mr-0 md:opacity-100"
            src={KeyVisualImage}
            alt="What DePub offers"
          />
        </div>
        <div className="relative flex flex-col justify-center flex-grow md:max-w-[66%] p-[24px]">
          <GradientText tag="h2" className="text-[48px]">What DePub offers</GradientText>
          <p className="mt-[24px] text-like-cyan-vlight text-[20px]">LikeCoin aims to empower content ownership, authenticity, and provenance. Creators can register content metadata to guarantee its integrity by acquiring an International Standard Content Number (ISCN). ISCN is a tool to authenticate and track content, just like a digital footprint.</p>
          <ul className="grid md:grid-cols-2	gap-x-[32px] gap-y-[48px] mt-[48px]">
            <li>
              <WhatDepubOfferItem title="Ready for NFT">
                Bringing NFT to publishing. Register now, publish anytime. LikeCoin helps secure and freeze content metadata permanently, lock and store it in the content registry. It will allow your metadata to be accessible for future use and distribution. It can also provide a way for the public to verify that the metadata was not changed when a related NFT is minted.
              </WhatDepubOfferItem>
            </li>
            <li>
              <WhatDepubOfferItem title="Immutable Content Registry">
                ISCN is a unique identifier to catalog metadata assigned to content such as articles and images. It helps to identify the metadata - creator, date, time, location, version - of the content, akin to a book's distinctive ISBN. 
              </WhatDepubOfferItem>
            </li>
            <li>
              <WhatDepubOfferItem title="Integrated with Decentralized Storage">
                Creators, curators, publishers, and readers can easily circulate and distribute content as ISCN allows for more efficient retrieval from databases. LikeCoin chain will dedicate to serve as a metadata registry, and integrate with storage like IPFS and Arweave to provide a one-click solution for users to store their content.
              </WhatDepubOfferItem>
            </li>
            <li>
              <WhatDepubOfferItem title="Permissionless Participation">
                LikeCoin operates under liquid democracy as a DAO (Decentralized Autonomous Organization). Anyone can publish content, build applications and participate in governance without gaining permission. No one may censor anyone.
              </WhatDepubOfferItem>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative mx-[24px] mt-[88px] px-[16px] md:px-[64px] py-[64px] rounded-[16px] border-[1px] border-like-cyan-light">
        <section className="flex flex-col items-center">
          <GradientText tag="h3" className="text-[32px] text-center">Join the community</GradientText>
          <ul className="grid grid-cols-2 sm:grid-flow-col-dense auto-cols-auto gap-x-[48px] md:gap-x-[96px] mt-[48px] gap-y-[48px]">
            {communityItems.map((type) => (
              <li key={type}>
                <CommunityLink type={type} />
              </li>
            ))}
          </ul>
        </section>
        <Divider className="mx-auto my-[48px]" />
        <LatestNewsSection className="mt-[88px]" />
        <Divider className="mx-auto my-[48px]" />
        <MediaCoverageSection className="mt-[88px]" />
      </div>

      <AwardsPartnersSection className="mt-[88px]" />

      <section className="flex flex-col items-center mt-[88px]">
        <GradientText tag="h3" className="text-[32px] text-center">Follow us</GradientText>
        <Button
          className="mt-[32px]"
          preset="filled"
          href="https://likecoin.substack.com"
          target="_blank"
        >Subscribe Newsletter</Button>
      </section>
    </Layout>
  )
}

export default IndexPage
