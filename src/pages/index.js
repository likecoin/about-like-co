import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import HeroVideoMp4 from "../videos/hero.mp4"
import HeroVideoWebm from "../videos/hero.webm"
import HeroImage from "../images/hero.png"
import ScrollDownHintImage from "../images/scroll-down-hint.png"
import {
  LIKECOIN_DESCRIPTION,
  ISCN_DESCRIPTION,
  IPFS_DESCRIPTION,
  NFT_MODULE_DESCRIPTION,
  TOKEN_DESCRIPTION,
  WIDGET_DESCRIPTION,
  PORTAL_DESCRIPTION,
  WORDPRESS_PLUGIN_DESCRIPTION,
} from "../text";

import AppGridList from "../components/AppGridList"
import AppItem from "../components/AppItem"
import AwardsPartnersSection from "../components/AwardsPartnersSection"
import Button from "../components/Button"
import CommunityLink from "../components/CommunityLink"
import Divider from "../components/Divider"
import GradientText from "../components/GradientText"
import KeyVisualImage from "../components/KeyVisualImage"
import LatestNewsSection from "../components/LatestNewsSection"
import Layout from "../components/Layout"
import MediaCoverageSection from "../components/MediaCoverageSection"
import ParagraphSection from "../components/ParagraphSection"
import StatisticSection from "../components/StatisticSection"
import SubscribeNewsletterSection from "../components/SubscribeNewsletterSection"
import NFTWidgetSlideshow from "../components/NFTWidgetSlideshow"
import JoinValidatorSection from "../components/JoinValidatorSection"

const HomePage = ({ apps, writingNFTItems, blogUrl }) => {
  const communityItems = [
    'discord',
    'github',
    'twitter',
    'likersocial',
  ]
  return (
    <Layout className="text-like-cyan-vlight">
      {/* Hero Section */}
      <section>
        <div className="relative flex justify-center">
          <svg className="w-full h-full max-h-screen pointer-events-none" viewBox="0 0 2560 1966" />
          <video
            autoPlay
            playsInline
            loop
            muted
            className="absolute inset-0 top-0 object-contain object-top max-h-screen mx-auto scale-[1.8] translate-y-[40px] sm:translate-y-0"
            poster={HeroImage}
            alt="#Depub"
            style={{ filter: 'brightness(0.9)' }}
          >
            <source src={HeroVideoWebm} type="video/webm" />
            <source src={HeroVideoMp4} type="video/mp4" />
          </video>
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

      {/* Sub-Nav Section */}
      <section className="flex flex-col items-center relative mt-[32px] sm:mt-[88px]">
        <Button
          className="text-[22px]"
          preset="filled"
          href="https://liker.land"
          target="_blank"
          rel="noopener"
        >Explore Writing NFT</Button>
        <nav className="flex justify-center mt-[24px]">
          <ul className="grid grid-cols-2 sm:flex flex-wrap gap-x-[8px] gap-y-[16px]">
            <li>
              <Button
                preset="outlined"
                href="https://app.like.co"
                target="_blank"
                rel="noopener"
              >Register ISCN</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                href="https://docs.like.co/"
                target="_blank"
                rel="noopener"
              >Docs</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                href={blogUrl}
                target="_blank"
                rel="noopener"
              >Blog</Button>
            </li>
            <li>
              <Button
                preset="outlined"
                href="https://docs.like.co/faq"
                target="_blank"
                rel="noopener"
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

      {/* LikeCoin chain Section */}
      <section className="relative flex mt-[88px]">
        <div className="relative flex justify-center flex-grow">
          <KeyVisualImage className="absolute right-0 max-w-[750px] mr-[-120px] opacity-60 md:mr-0 md:opacity-100" />
        </div>
        <div className="relative flex flex-col justify-center flex-grow md:max-w-[66%] p-[24px]">
          <GradientText tag="h2" className="text-[48px] text-center md:text-left">LikeCoin chain</GradientText>
          <p className="mt-[24px] text-like-cyan-vlight text-[20px]">{LIKECOIN_DESCRIPTION}</p>
          <ul className="grid md:grid-cols-2	gap-x-[32px] gap-y-[48px] mt-[48px]">
            <li>
              <ParagraphSection title="Metadata Registry" href="https://iscn.io">
              {ISCN_DESCRIPTION}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="Integrated with Arweave & IPFS" href="https://docs.like.co/developer/iscn/web-widget/iscn-ar">
              {IPFS_DESCRIPTION}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="NFT Module" href="https://docs.like.co/developer/likenft/likecoin-nft-module-spec">
              {NFT_MODULE_DESCRIPTION}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="LIKE Token" href="https://coinmarketcap.com/currencies/likecoin/">
              {TOKEN_DESCRIPTION}
              </ParagraphSection>
            </li>
          </ul>
        </div>
      </section>

      {/* Writing NFT Section */}
      <section className="mt-[96px]">
        <GradientText tag="h2" className="px-[24px] text-[48px] text-center md:text-left">Writing NFT - The POAP for content</GradientText>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[48px] mt-[48px]">
          <ul className="grid gap-y-[48px] p-[24px]">
            <li>
              <ParagraphSection title="Widget" href="https://docs.like.co/general-guides/writing-nft/collect-writing-nft/nft-widget">
              {WIDGET_DESCRIPTION}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="Publish" href="https://app.like.co/">
              {PORTAL_DESCRIPTION}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="WordPress Plugin" href="https://w3press.io/">
              {WORDPRESS_PLUGIN_DESCRIPTION}
              </ParagraphSection>
            </li>
          </ul>
          <div className="sm:p-[24px] lg:mt-[64px]">
            <NFTWidgetSlideshow items={writingNFTItems} />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-[100px] p-[24px]">
        <GradientText tag="h2" className="text-[48px] text-center md:text-left">
          Discover dapps
        </GradientText>
        <AppGridList className="mt-[32px]">
          {apps.map((data) => (
            <li key={data.title} className="w-[268px]">
              <AppItem {...data} />
            </li>
          ))}
        </AppGridList>
        <div className="flex items-center justify-center mt-[32px]">
          <Link to="/apps">
            <Button preset="filled">More Apps</Button>
          </Link>
        </div>
      </section>

      <JoinValidatorSection className="mt-[88px]" />

      <section className="flex flex-col items-center mt-[100px] p-[24px]">
        <GradientText tag="h2" className="text-[48px] text-center md:text-left">
          Swap, Stake, and Earn LIKE
        </GradientText>
        <p className="mt-[24px] text-like-cyan-vlight text-[20px]">Swap, stake, and earn LIKE in one click and start to generate yields on the leading decentralized Cosmos exchange, <a className="font-[600] text-like-cyan underline" href="https://app.osmosis.zone/pool/553" target="_blank" rel="noopener">Osmosis</a>.</p>
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

      <SubscribeNewsletterSection />
    </Layout>
  )
}

export default function HomePageWithData(props) {
  return (
    <StaticQuery
      query={graphql`
        query HomePageQuery {
          site {
            siteMetadata {
              blogUrl
            }
          }
          appList: markdownRemark(
            fileAbsolutePath: { regex: "/src/content/appList.md$/" }
          ) {
            frontmatter {
              en {
                appItems {
                  code
                }
              }
            }
          }
          homePage: pagesJson(name: {eq: "home"}) {
            writingNFTItems {
              classId
            }
          }
        }
      `}
      render={(data) => {
        const {
          appItems: { code: appListCode },
        } = data.appList.frontmatter.en;
        const { writingNFTItems } = data.homePage;
        const appListData = JSON.parse(appListCode);
        const apps = appListData
          .filter((data) => data.title === "Apps")[0].items
          .slice(0, 4);
        return (
          <HomePage
            apps={apps}
            writingNFTItems={writingNFTItems}
            blogUrl={data.site.siteMetadata.blogUrl}
            {...props}
          />
        );
      }}
    />
  );
}
