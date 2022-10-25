import React from "react"

import ClapIcon from "./icons/Clap"
import DiscordIcon from "./icons/Discord"
import GitHubIcon from "./icons/GitHub"
import TwitterIcon from "./icons/Twitter"

const communityItems = {
  discord: {
    icon: DiscordIcon,
    label: "Discord",
    url: "https://discord.gg/W4DQ6peZZZ",
  },
  github: {
    icon: GitHubIcon,
    label: "GitHub",
    url: "http://github.com/likecoin",
  },
  twitter: {
    icon: TwitterIcon,
    label: "Twitter",
    url: "https://twitter.com/likecoin",
  },
  likersocial: {
    icon: ClapIcon,
    label: "Liker Social",
    url: "https://liker.social",
  },
}

export default function CommunityLink({ type, ...props }) {
  const { icon: Icon, label, url } = communityItems[type]
  return (
    <a
      className="flex flex-col items-center text-center transition-opacity hover:opacity-70 active:opacity-50" {...props}
      href={url}
      target="_blank"
      rel="noreferrer"
      title={label}
    >
      <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-like-cyan-light text-like-green">
        <Icon className="w-[32px] h-[32px]" type={type} />
      </div>
      <div className="mt-[8px] text-[16px] text-like-cyan-light">{label}</div>
    </a>
  )
}
