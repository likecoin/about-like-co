import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import AppItem from "../components/AppItem"
import GradientText from "../components/GradientText"
import Layout from "../components/Layout"
import PluginItem from "../components/PluginItem"
import Seo from "../components/SEO"

const AppsPage = ({ items = [], ...props }) => {
  const apps = items.filter((data) => data.title === "Apps")[0].items;
  const exchanges = items.filter((data) => data.title === "Exchanges")[0].items;
  const wallets = items.filter((data) => data.title === "Wallets")[0].items;
  const blockExplorers = items.filter(
    (data) => data.title === "BlockExplorers"
  )[0].items;
  const plugins = items.filter((data) => data.title === "Plugins")[0].items;

  return (
    <Layout className="text-like-cyan-vlight" {...props}>
      <Seo title="Apps" />
      <section className="flex flex-col items-center mt-[100px] p-[24px]">
        <GradientText tag="h2" className="text-[48px] text-center md:text-left">
          Find our apps
        </GradientText>
        <div className="max-w-[1050px] text-[20px] text-like-cyan-vlight text-center mt-[24px]">
          Discover a range of apps, plugins and communities built in the
          LikeCoin ecosystem by developers and contributors from across the
          globe.
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {apps.map((data) => (
            <li key={data.title} className="w-[268px] h-full">
              <AppItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[100px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">
          Exchanges
        </GradientText>
        <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {exchanges.map((data) => (
            <li key={data.title} className="w-[268px] h-full">
              <AppItem {...data} />
            </li>
          ))}
          <li>
            <div className="flex justify-center items-center text-dark-gray relative bg-white text-[24px] rounded-[16px] border-[2px] p-[32px] h-full border-shade-gray">
              Coming Soon
            </div>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">
          Wallets
        </GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {wallets.map((data) => (
            <li key={data.title} className="w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">
          Block Explorers
        </GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {blockExplorers.map((data) => (
            <li key={data.title} className="min-w-[268px] max-w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center mt-[88px] p-[24px]">
        <GradientText tag="h3" className="text-[32px] text-center">
          Tools and plugins
        </GradientText>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[24px] gap-y-[40px] mt-[88px]">
          {plugins.map((data) => (
            <li key={data.title} className="w-[324px]">
              <PluginItem {...data} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default function AppsPageData(props) {
  return (
    <StaticQuery
      query={graphql`
        query AppListQuery {
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
        }
      `}
      render={(data) => {
        const {
          appItems: { code: appListCode },
        } = data.appList.frontmatter.en;
        const appListData = JSON.parse(appListCode);
        return <AppsPage items={appListData} {...props} />;
      }}
    />
  );
}
