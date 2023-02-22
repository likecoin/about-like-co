import React from "react";
import cn from "classnames"

import Button from "./Button"
import GradientText from "./GradientText"
import NorthEastIcon from "./icons/NorthEast";

export const JoinValidatorSection = ({ className, ...props }) => {
  const items = [
    { title: "UDomain", key: "udomain", address: 'likevaloper1x79u5q9eldwx4cp8h93p65jx3q6fzyfp48uzgz' },
    { title: "Animoca Brand", key: "animoca", address: 'likevaloper1snsg3y0kl9zujfnqjs9u2c2j9hsnwhvmecdqnu' },
    { title: "9Gag", key: "9gag", address: 'likevaloper16m5383ccel65h49k3l9h3q2vg5yn8lxadqe0pv' },
    { title: "Blocktrend", key: "blocktrend", address: 'likevaloper18u8zdrgngyfeq2rfh9ds7a3hg7awx8h9kxsre6' },
    { title: "Cosmostation", key: "cosmostation", address: 'likevaloper1reztw0ac2l0scjsty6dg6jj5pnrckxw3gvxeh0' },
    { title: "Forbole", key: "forbole", address: 'likevaloper1v8njts96gl5eqstnen4gksdy5k860fau6nxc04' },
    { title: "Matters", key: "matters", address: 'likevaloper1vn8zs4ytys25ezfjvrd83fxc7xg24wf87a6ehn' },
    { title: "Numbers", key: "numbers", address: 'likevaloper1slns4ccxjcgv09t762k0fpduve5e5jsz8dwyss' },
    { title: "Oursky", key: "oursky", address: 'likevaloper1knfp5qgzgr29k00nhjp2qzxlezrlalhyh77e4c' },
    { title: "Taiwan Factcheck Center", key: "tw-factcheck-center", address: 'likevaloper1mcf76n94g6hhxjrshhgarymunxzppl3q0n3a3s' },
  ].map(({ key, ...item }) => ({
    ...item,
    key,
    image: `/uploads/validators/${key}.svg`,
    url: `https://dao.like.co/validators/${item.address}`,
  }))
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
                rel="noopener"
              >
                <img src={image} title={title} alt={title} />
              </a>
            ) : (
              <img src={image} title={title} alt={title} />
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center mt-[32px]">
        <a href="https://docs.like.co/validator/" target="_blank" rel="noopener">
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