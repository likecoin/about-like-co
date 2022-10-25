import React from "react";
import cn from "classnames"

import Button from "./Button"
import GradientText from "./GradientText"
import NorthEastIcon from "./icons/NorthEast";

export const JoinValidatorSection = ({ className, ...props }) => {
  const items = [
    { title: "UDomain", key: "udomain" },
    { title: "Animoca Brand", key: "animoca" },
    { title: "Arweave", key: "arweave" },
    { title: "Blocktrend", key: "blocktrend" },
    { title: "Cosmostation", key: "cosmostation" },
    { title: "Forbole", key: "forbole" },
    { title: "Matters", key: "matters" },
    { title: "Numbers", key: "numbers" },
    { title: "Oursky", key: "oursky" },
    { title: "Taiwan Factcheck Center", key: "tw-factcheck-center" },
  ].map(({ key, ...item }) => ({ ...item, key, image: `/uploads/validators/${key}.svg`}))
  return (
    <section
      className={cn("flex flex-col items-center mt-[88px]", className)}
      {...props}
    >
      <GradientText tag="h3" className="text-[32px] text-center">Join as a Validator</GradientText>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-[16px] gap-y-[32px] mt-[32px]">
        {items.map(({ key, title, url, image }) => (
          <li
            key={key}
            className={cn({ 'hover:scale-[1.1] hover:relative hover:z-10 active:scale-[1.05] transition-transform': !!url })}
          >
            {url ? (
              <a
                href={url}
                target="_blank"
                title={title}
                rel="noreferrer"
              >
                <img src={image} alt={title} />
              </a>
            ) : (
              <img src={image} alt={title} />
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center mt-[32px]">
        <a href="https://docs.like.co/validator/" target="_blank" rel="noreferrer">
          <Button
            className="flex items-center justify-center"
            preset="filled"
          >Learn More <NorthEastIcon className="ml-[8px]"/></Button>
        </a>
      </div>
    </section>
  )
}

export default JoinValidatorSection;