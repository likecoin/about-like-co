import * as React from "react"

import StatNumber from "./StatNumber"

export default function StatisticSection() {
  const [registeredContents, setRegisteredContents] = React.useState(0)
  const [writingNFTCount, setWritingNFTCount] = React.useState(0)
  const [likeDistribution, setLikeDistribution] = React.useState(0)
  const [iscnOwnerCount, setIscnOwnerCount] = React.useState(0)
  React.useEffect(() => {
    async function fetchData() {
      try {
        const {
          totalISCNCount: registeredContentsRaw = 0,
          NFTCount: writingNFTCountRaw = 0,
          LIKEs: likeDistributionRaw = 0,
          iscnOwnerCount: iscnOwnerCountRaw = 0,
        } = await fetch("https://api.like.co/like/like/stat").then((r) => r.json())
        setRegisteredContents(registeredContentsRaw)
        setWritingNFTCount(writingNFTCountRaw)
        setLikeDistribution(likeDistributionRaw)
        setIscnOwnerCount(iscnOwnerCountRaw)
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
              value={iscnOwnerCount || 20135}
              unit="creators"
              label="have registered content in the LikeCoin network"
            />
          </li>
          <li>
            <StatNumber
              value={registeredContents || 2368038}
              unit="content"
              label="are registered in the LikeCoin network"
            />
          </li>
          <li>
            <StatNumber
              value={writingNFTCount || 15095}
              unit="Writing NFT"
              label="are minted from content"
            />
          </li>
          <li>
            <StatNumber
              value={likeDistribution || 56186085}
              unit="LIKE"
              label="are distributed to creators"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
