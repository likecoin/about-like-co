import * as React from "react"

import StatNumber from "./StatNumber"

export default function StatisticSection() {
  const [registeredContents, setRegisteredContents] = React.useState(0)
  const [sitesWithLikeButton, setSitesWithLikeButton] = React.useState(0)
  const [creatorsCount, setCreatorsCount] = React.useState(0)
  const [likeDistribution, setLikeDistribution] = React.useState(0)
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [
          { total_count: registeredContentsRaw = 0 },
          {
            totalLikee: creatorsCountRaw = 0,
            LIKEs: likeDistributionRaw = 0,
            totalSites: sitesWithLikeButtonRaw = 0,
          },
        ] = await Promise.all([
          fetch(
            "https://mainnet-node.like.co/txs?message.module=iscn&limit=1"
          ).then((r) => r.json()),
          fetch("https://like.co/api/like/like/stat").then((r) => r.json()),
        ]);
        setRegisteredContents(registeredContentsRaw)
        setCreatorsCount(creatorsCountRaw)
        setLikeDistribution(likeDistributionRaw)
        setSitesWithLikeButton(sitesWithLikeButtonRaw);
      } catch (error) {
        console.error("Failed to fetch stat number")
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <section className="relative mt-[88px] px-[48px] flex justify-center">
      <div>
        <ul className="my-14 sm:w-full max-w-[768px] min-w-[224px]  gap-x-[96px] gap-y-[48px] grid md:grid-cols-3">
          <li>
            <StatNumber value={24000} label="Addresses" withPlus={true} />
          </li>
          <li>
            <StatNumber
              value={sitesWithLikeButton || 7000}
              label="Sites"
              withPlus={true}
            />
          </li>
          <li>
            <StatNumber
              value={registeredContents || 683384}
              label="Registered contents"
            />
          </li>
        </ul>
        <ul className="sm:w-full max-w-[768px] min-w-[224px]  gap-x-[96px] gap-y-[48px] grid md:grid-cols-2 place-items-center">
          <li>
            <StatNumber value={creatorsCount || 19000} label="Creators" />
          </li>
          <li>
            <StatNumber
              value={likeDistribution || 48570000}
              label="Distributed $LIKE"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
