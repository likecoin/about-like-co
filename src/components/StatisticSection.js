import * as React from "react"

import StatNumber from "./StatNumber"

const stats = [
  {
    value: 560000,
    label: "published contents",
  },
  {
    value: 18600,
    label: "creators",
  },
  {
    value: 107000,
    label: "wallets",
  },
]

export default function StatisticSection() {
  return (
    <section className="relative mt-[88px] flex justify-center">
      <ul className="w-full max-w-[1024px] px-[48px] grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[96px] gap-y-[48px]">
        {stats.map(({ value, label }) => (
          <li key={label}>
            <StatNumber
              value={value}
              label={label}
              withPlus={true}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
