import * as React from "react"

import StatNumber from "./StatNumber"

export default function StatisticSection() {
  const [registeredContents, setRegisteredContents] = React.useState(0)
  const [writingNFTCount, setWritingNFTCount] = React.useState(0)
  const [walletsCount, setWalletsCount] = React.useState(0)
  const [integratedSites, setIntegratedSites] = React.useState(0)
  const [creatorsCount, setCreatorsCount] = React.useState(0)
  const [likeDistribution, setLikeDistribution] = React.useState(0)
  React.useEffect(() => {
    async function fetchData() {
      try {
        const {
          totalISCNCount: registeredContentsRaw = 0,
          NFTCount: writingNFTCountRaw = 0,
          totalLikee: creatorsCountRaw = 0,
          LIKEs: likeDistributionRaw = 0,
          totalAddresses: walletsCountRaw = 0,
          totalSites: integratedSitesRaw = 0,
        } = await fetch("https://like.co/api/like/like/stat").then((r) => r.json())
        setRegisteredContents(registeredContentsRaw)
        setWritingNFTCount(writingNFTCountRaw)
        setCreatorsCount(creatorsCountRaw)
        setLikeDistribution(likeDistributionRaw)
        setWalletsCount(walletsCountRaw)
        setIntegratedSites(integratedSitesRaw);
      } catch (error) {
        console.error("Failed to fetch stat number")
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <section className="relative mt-[88px] px-[48px]">
      <div>
        <ul className="mx-auto my-14 w-full lg:max-w-[1024px] xl:max-w-[1440px] min-w-[224px] gap-x-[96px] gap-y-[48px] grid md:grid-cols-2 xl:grid-cols-3 sm:flex-row flex-wrap justify-center">
          <li>
            <StatNumber
              value={walletsCount || 24000}
              unit="likers"
              label="Addresses with LIKE"
            />
          </li>
          <li>
            <StatNumber
              value={integratedSites || 7000}
              unit="media sites"
              label="LikeCoin Widget loaded"
            />
          </li>
          <li>
            <StatNumber
              value={registeredContents || 683384}
              unit="content"
              label="Content registered in the LikeCoin network"
            />
          </li>
          <li>
            <StatNumber
              value={creatorsCount || 19000}
              unit="creators"
              label="Liker ID with LikeCoin Widget"
            />
          </li>
          <li>
            <StatNumber
              value={likeDistribution || 48570000}
              unit="LIKE"
              label="Distributed LIKE"
            />
          </li>
          <li>
            <StatNumber
              value={writingNFTCount || 1300}
              unit="Writing NFT"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
