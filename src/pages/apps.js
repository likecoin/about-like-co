import * as React from "react"

import * as AppList from "../content/app-list.js"
import AppItem from "../components/AppItem"
import GradientText from "../components/GradientText"
import Layout from "../components/Layout"
import PluginItem from "../components/PluginItem"
import Seo from "../components/SEO"

const AppsPage = () => {
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
          {AppList.apps.map((data) => (
            <li key={data.title} className="w-[268px] h-full">
              <AppItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[100px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Exchanges</GradientText>
        <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {AppList.exchandes.map((data) => (
            <li key={data.title} className="w-[268px] h-full">
              <AppItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Wallets</GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {AppList.wallets.map((data) => (
            <li key={data.title} className="w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Block Explorers</GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {AppList.blockExplors.map((data) => (
            <li key={data.title} className="min-w-[268px] max-w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">Tools and plugins</GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {AppList.plugins.map((data) => (
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
