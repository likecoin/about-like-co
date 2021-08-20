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
    },
    {
      image: '/uploads/apps/liker-land.svg',
      title: "Liker Land",
      url: "https://liker.land",
      isOfficial: true,
    },
    {
      image: '/uploads/apps/matters.svg',
      title: "Matters",
      url: "https://matters.news",
      isOfficial: false,
    },
    {
      image: '/uploads/apps/liker-social.svg',
      title: "Liker.Social",
      url: "https://liker.social",
      isOfficial: false,
    },
  ]
  const plugins = [
    {
      image: '/uploads/plugins/chrome.svg',
      title: "Chrome Plugin",
      buttonTitle: 'Install',
      url: "https://chrome.google.com/webstore/detail/liker-land/cjjcemdmkddjbofomfgjedpiifpgkjhe",
    },
    {
      image: '/uploads/plugins/wordpress.svg',
      title: "WordPress Plugin",
      buttonTitle: 'Install',
      url: "https://wordpress.org/plugins/likecoin/",
    },
    {
      image: '/uploads/plugins/bigdipper.svg',
      title: "Big Dipper",
      buttonTitle: 'Visit',
      url: "https://likecoin.bigdipper.live",
    },
    {
      image: '/uploads/plugins/stake-like-co.svg',
      title: "stake.like.co",
      buttonTitle: 'Visit',
      url: "https://stake.like.co",
    },
  ]
  return (
    <Layout className="text-like-cyan-vlight">
      <Seo title="Apps" />
      <section className="flex flex-col items-center mt-[100px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Find our apps</GradientText>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] mt-[88px]">
          {apps.map((data) => (
            <li key={data.title} className="max-w-[240px]">
              <AppItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Tools and plugins</GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[88px]">
          {plugins.map((data) => (
            <li key={data.title} className="max-w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default AppsPage
