import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import HeroImage from "../images/hero.png"
import KeyVisualImage from "../images/key-visual.png"
import ScrollDownHintImage from "../images/scroll-down-hint.png"

import AppGridList from "../components/AppGridList"
import AppItem from "../components/AppItem"
import AwardsPartnersSection from "../components/AwardsPartnersSection"
import Button from "../components/Button"
import CommunityLink from "../components/CommunityLink"
import Divider from "../components/Divider"
import GradientText from "../components/GradientText"
import LatestNewsSection from "../components/LatestNewsSection"
import Layout from "../components/Layout"
import MediaCoverageSection from "../components/MediaCoverageSection"
import ParagraphSection from "../components/ParagraphSection"
import StatisticSection from "../components/StatisticSection"
import NFTWidgetSlideshow from "../components/NFTWidgetSlideshow"

const HomePage = ({ apps, writingNFTItems }) => {
  const communityItems = [
    'discord',
    'github',
    'twitter',
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

      {/* Sub-Nav Section */}
      <section className="flex flex-col items-center relative mt-[88px]">
        <nav className="flex justify-center">
          <ul className="grid sm:grid-flow-col-dense auto-cols-auto gap-x-[8px] gap-y-[16px]">
            <li>
              <Button
                preset="filled"
                href="https://liker.land"
                target="_blank"
                rel="noreferrer"
              >Writing NFT</Button>
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

      {/* LikeCoin chain Section */}
      <section className="relative flex mt-[88px]">
        <div className="relative flex justify-center flex-grow">
          <img
            className="absolute right-0 max-w-[750px] mr-[-120px] opacity-60 md:mr-0 md:opacity-100"
            src={KeyVisualImage}
            alt="LikeCoin chain"
          />
        </div>
        <div className="relative flex flex-col justify-center flex-grow md:max-w-[66%] p-[24px]">
          <GradientText tag="h2" className="text-[48px] text-center md:text-left">LikeCoin chain</GradientText>
          <p className="mt-[24px] text-like-cyan-vlight text-[20px]">LikeCoin is an application-specific blockchain on decentralized publishing built on Cosmos SDK. LikeCoin provides open source products ranging from infrastructure to publishing tools for creators on board to Web3.</p>
          <ul className="grid md:grid-cols-2	gap-x-[32px] gap-y-[48px] mt-[48px]">
            <li>
              <ParagraphSection title="Metadata registry">
              For the future of decentralized publishing to work, it is essential to have a global, decentralized, and resilient digital content registry as the cornerstone. International Standard Content Number, abbreviated as <b className="text-like-cyan">ISCN</b>, is a metadata framework for digital content on the LikeCoin chain. ISCN is like a <b className="text-like-cyan">digital content ID</b>; helps to identify a specific digital content, records the content metadata, the intellectual property rights, and the stakeholders of the creation. ISCN also represents the <b className="text-like-cyan">property right layer</b> of LikeCoin NFT, it records the relationships between the content and creator.
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="Integrated with Arweave & IPFS">
              LikeCoin provides permanent storage for LikeCoin network users, perma-pin IPFS files with Arweave, and records their storage location in the ISCN content metadata. Users can query and parse content metadata from LikeCoin chain. 
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="NFT module">
              LikeCoin utilizes Cosmos SDK’s x/nft standard enables users to create NFT classes and mint NFTs under an ISCN metadata record. LikeCoin envisions a future where digital content is transformed from web-native to NFT native format. All content will be natively created on the blockchain and stored separately in the property right and NFT layers.
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="LIKE">
              LIKE is the native token of the LikeCoin chain. It is the utility and governance token of the LikeCoin ecosystem. All network usage and services such as content registry, storage, writing NFT, and like reward mechanism will require LIKE to facilitate.
              </ParagraphSection>
            </li>
          </ul>
        </div>
      </section>

      {/* Writing NFT Section */}
      <section className="mt-[96px]">
        <GradientText tag="h2" className="px-[24px] text-[48px] text-center md:text-left">Writing NFT</GradientText>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[48px] mt-[48px]">
          <ul className="grid gap-y-[48px] p-[24px]">
            <li>
              <ParagraphSection title="Widget">
              A <b className="text-like-cyan">mini NFT marketplace</b> that can be <b className="text-like-cyan">embedded</b> into any website. Writers can focus on creating quality content while readers can collect and own their favorite articles in NFT. Everyone can sell his or her work as NFT without worrying about the technical legwork. With a simplified process of creating an NFT, writers can quickly turn their writing into an NFT at the same time when they publish to the internet.
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="Portal">
              Writers can turn any <b className="text-like-cyan">webpage</b> into an NFT. Enjoy the benefits of decentralized storage and create NFT in several clicks. No more pages not found, always <b className="text-like-cyan">accessible</b> to your content, truly own and <b className="text-like-cyan">monetize</b> your work.
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="WordPress Plugin">
              Self-host bloggers can install the <b className="text-like-cyan">Writing NFT WordPress plugin</b> to place the NFT widget on their site and publish posts as NFTs.
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
          href="https://newsletter.like.co/"
          target="_blank"
        >Subscribe Newsletter</Button>
      </section>
    </Layout>
  )
}

export default function HomePageWithData(props) {
  return (
    <StaticQuery
      query={graphql`
        query HomePageQuery {
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
            {...props}
          />
        );
      }}
    />
  );
}
