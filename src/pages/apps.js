import * as React from "react"

import AppItem from "../components/AppItem"
import GradientText from "../components/GradientText"
import Layout from "../components/Layout"
import PluginItem from "../components/PluginItem"
import Seo from "../components/SEO"

const AppsPage = () => {
  const apps = [
    {
      image: '/uploads/apps/iscn.svg',
      title: "ISCN app",
      url: "https://app.like.co",
      isOfficial: true,
      description: 'Register your content metadata and store the content in the decentralized network with the ISCN web app. ISCN helps you prepare content as NFT.',
    },
    {
      image: '/uploads/apps/liker-land.svg',
      title: "Liker Land",
      url: "https://liker.land",
      isOfficial: true,
      description: 'The web app for creators and readers to browse, read and bookmark content. Civic Liker — a business tool on Liker Land for creators to run subscription services across platforms.',
    },
    {
      image: '/uploads/apps/matters.svg',
      title: "Matters",
      url: "https://matters.news",
      isOfficial: false,
      description: 'Decentralized content publishing platform. Direct publish articles to IPFS and utilize the LikeCoin reward mechanism to reward creativity in LIKE.',
    },
    {
      image: '/uploads/apps/liker-social.svg',
      title: "Liker.Social",
      url: "https://liker.social",
      isOfficial: false,
      description: 'Decentralized microblogs on LikeCoin & Mastodon. Supports likes for rewards, help creators connect with their own communities.',
    },
    {
      image: '/uploads/apps/stake-like-co.svg',
      title: "Stake.like.co",
      url: "https://stake.like.co/",
      isOfficial: false,
      description: 'The dashboard that helps you to manage, stake and vote with LIKE. Supports login with Keplr wallet, Ledger and Liker ID.',
    },
    {
      image: '/uploads/apps/ddshare.svg',
      title: "DDShare",
      url: "https://www.ddshare.io/",
      isOfficial: false,
      description: 'Decentralized data-sharing infrastructure. Integrated with LikeCoin and other web3 protocols to offer data sharing services.',
    },
  ]
  const exchandes = [
    {
      image: '/uploads/exchanges/osmosis.svg',
      title: "Osmosis",
      url: "https://app.osmosis.zone/?from=UST&to=LIKE",
      isOfficial: true,
      description: 'Cosmos-based DEX & AMM protocol that designed for cross-chain assets. Easily swap between LIKE and other cross-chain assets.',
    },
    {
      image: '/uploads/exchanges/emeris.svg',
      title: "Emeris",
      url: "https://app.emeris.com/asset/nanolike",
      isOfficial: true,
      description: 'Cross-chain Defi portal. Integrated with the Gravity DEX protocol on the Cosmos Hub. Easily swap between LIKE and other cross-chain assets.',
    },
    {
      image: '/uploads/exchanges/liquid.svg',
      title: "Liquid",
      url: "https://app.liquid.com/exchange/LIKEUSDT",
      isOfficial: false,
      description: 'Liquid offers various forms of digital assets trading types. Buy and sell LIKE with USD/ credit card is simple and easy.',
    },
  ]
  const wallets = [
    {
      image: '/uploads/wallets/keplr.svg',
      title: "Keplr",
      buttonTitle: 'Visit',
      url: "https://wallet.keplr.app/",
      description: "Chrome extension wallet that supports LIKE. Keplr supports Google logins, private key imports, and Ledger hardware wallets for maximum usability.",
    },
    {
      image: '/uploads/wallets/liker-land-app.svg',
      title: "Liker Land app",
      buttonTitle: 'Visit',
      url: "https://liker.land/getapp",
      description: "The mobile app wallet for Likers. Readers can browse and reward content instantly; Creators can easily view followers' statistics, manage and stake LIKE. Wallet connect supports coming soon.",
    },
  ]
  const blockExplors = [
    {
      image: '/uploads/block-explors/bigdipper.svg',
      title: "Big Dipper",
      buttonTitle: 'Visit',
      url: "https://likecoin.bigdipper.live",
    },
    {
      image: '/uploads/block-explors/mintscan.svg',
      title: "Mintscan",
      buttonTitle: 'Comming Soon',
      url: "https://www.mintscan.io/cosmos",
      isDisabled: true,
    },
  ]
  const plugins = [
    {
      image: '/uploads/plugins/chrome.svg',
      title: "Chrome Plugin",
      buttonTitle: 'Visit',
      url: "https://chrome.google.com/webstore/detail/liker-land/cjjcemdmkddjbofomfgjedpiifpgkjhe",
      description: "Browser extension that provides bookmark functions to add any web page to the Liker Land reader. Auto injects the LikeCoin button for Youtube videos."
    },
    {
      image: '/uploads/plugins/wordpress.svg',
      title: "WordPress Plugin",
      buttonTitle: 'Visit',
      url: "https://wordpress.org/plugins/likecoin/",
      description: "Integrated plugin that bridges WP users to web3. Register content metadata with ISCN. Store and publish content to the decentralized network."
    },
  ]
  return (
    <Layout className="text-like-cyan-vlight">
      <Seo title="Apps" />
      <section className="flex flex-col items-center mt-[100px] p-[24px]">
      <GradientText tag="h2" className="text-[48px] text-center md:text-left">Find our apps</GradientText>
        <div className="max-w-[1050px] text-[20px] text-like-cyan-vlight text-center mt-[24px]">
          Discover a range of apps, plugins and communities built in the
          LikeCoin ecosystem by developers and contributors from across the
          globe.
        </div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {apps.map((data) => (
            <li key={data.title} className="w-[268px] h-full">
              <AppItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[100px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Exchanges</GradientText>
        <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {exchandes.map((data) => (
            <li key={data.title} className="w-[268px] h-full">
              <AppItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Wallets</GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {wallets.map((data) => (
            <li key={data.title} className="w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Block Explorers</GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {blockExplors.map((data) => (
            <li key={data.title} className="min-w-[268px] max-w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Tools and plugins</GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {plugins.map((data) => (
            <li key={data.title} className="w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default AppsPage
