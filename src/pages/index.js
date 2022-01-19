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
import StatisticSection from "../components/StatisticSection"
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
          <svg className="w-full h-full max-h-screen pointer-events-none" viewBox="0 0 2560 1966" />
          <img
            className="absolute inset-0 top-0 object-contain object-top max-h-screen mx-auto transform scale-[1.8] translate-y-[40px] sm:translate-y-0"
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
          <GradientText tag="h1" className="text-[42px] sm:text-[64px] md:text-[80px] leading-tight">Decentralize Publishing</GradientText>
          <h2 className="text-[32px] font-bold font-display mt-[24px]">
            Own your content forever.
          </h2>
        </div>
      </section>

      {/* AirDrop preLaunch */}
      <section className="relative flex justify-center">
        <div className="flex flex-col p-[16px] md:flex-row md:p-[56px] justify-between relative items-center mx-[16px] max-w-[1100px] bg-white border-[3px] border-airdrop-gold rounded-[24px] mt-[116px] overflow-hidden">
          <img className="absolute top-0 left-0 object-cover w-full h-full" src="/uploads/airdrop/background-sm.png" />
          <img className="absolute top-0 left-0 object-cover w-full h-full" src="/uploads/airdrop/background-planets.png" />
          <div className="z-10 mb-[24px] md:mr-[24px] md:mb-0">
            <img className="block w-full h-full max-w-[353px] max-h-[56px] object-contain mb-[8px]" src="/uploads/airdrop/title-likecoin.png" alt="airdrop" />
            <p className=" text-[20px] text-dark-gray">LikeCoin airdrop is coming. Check out the amount you can claim now!</p>
          </div>
          <div className="flex-shrink-0 ml-[12px] z-10">
            <Button
              className="flex items-center font-normal border-airdrop-gold"
              preset="outlined"
              href="https://app.like.co/airdrop"
              target="_blank"
              rel="referrer"
            >
              <img className="mr-[12px]" src="/uploads/airdrop/claim.svg" alt="airdrop-claim" />
              <p className="whitespace-nowrap text-airdrop-gold text-[16px]">Claim Airdrop</p>
              <img className="ml-[12px]" src="/uploads/airdrop/arrowright.svg" />
            </Button>
          </div>
        </div>
        <img className="absolute top-[50px] left-[38%] w-[244px]" src="/uploads/airdrop/background-planet.png" />
      </section>

      {/* Sub-Nav Section */}
      <section className="flex flex-col items-center relative mt-[88px]">
        <nav className="flex justify-center">
          <ul className="grid sm:grid-flow-col-dense auto-cols-auto gap-x-[8px] gap-y-[16px]">
            <li>
              <Button
                preset="filled"
                href="https://app.like.co"
                target="_blank"
                rel="noreferrer"
              >Get started</Button>
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
        <p className="text-[16px] mt-[24px]">
          Questions? Ask the <a className="underline" href="http://discord.gg/likecoin">community</a>.
        </p>
      </section>

      {/* Statistic Section */}
      <StatisticSection />

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
          <GradientText tag="h2" className="text-[48px] text-center md:text-left">What DePub offers</GradientText>
          <p className="mt-[24px] text-like-cyan-vlight text-[20px]">LikeCoin is a cross-chain protocol and framework for decentralized publishing. It is an application-specific blockchain for building and bridging media to Web 3. </p>
          <ul className="grid md:grid-cols-2	gap-x-[32px] gap-y-[48px] mt-[48px]">
            <li>
              <WhatDepubOfferItem title="Not your key, not your content">
                Always accessible content metadata that guarantees ownership. It makes content easier to retrieve, the same as what gives an NFT its value.
              </WhatDepubOfferItem>
            </li>
            <li>
              <WhatDepubOfferItem title="LikerDAO">
                LikeCoin is a community-owned network where LIKE holders make decisions collectively via liquid democracy. Anyone can publish content, build applications and participate in governance.
              </WhatDepubOfferItem>
            </li>
            <li>
              <WhatDepubOfferItem title="Ready tools for Web3 native content">
                A flexible decentralized publication framework (ISCN) that can retrieve data via API, integrate with existing media platforms, and connect with other blockchains. Dapps can easily build integrated tools for creators to produce, manage and own web3 native content. 
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
          href="https://twitter.com/likecoin"
          target="_blank"
        >Follow us on Twitter</Button>
      </section>
    </Layout>
  )
}

export default IndexPage
