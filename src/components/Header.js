import React, { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import cn from "classnames"
import { Link } from "gatsby"

import Logo from "./Logo"
import Button from "./Button"
import ArrowDown from "./icons/ArrowDown"
import Divider from "./Divider"
import ClapIcon from "./icons/Clap"
import ISCNIcon from "./icons/ISCN"
import ArrowRight from "./icons/ArrowRight"

export default function Header() {
  const menuItems = [
    {
      title: "Apps",
      items: [
        {
          title: "ISCN App",
          url: "https://app.like.co",
          prepend: <ISCNIcon className="mr-[8px]" />,
        },
        {
          title: "Liker Land",
          url: "https://liker.land",
          prepend: <ClapIcon className="mr-[8px]" />,
        },
        {
          title: "More",
          to: "/apps",
          append: <ArrowRight className="ml-[8px]" />,
        },
      ],
    },
    {
      title: "Developer",
      items: [
        {
          title: "Documentation",
          url: "https://docs.like.co/developer/introduction",
        },
        {
          title: "GitHub",
          url: "https://github.com/likecoin",
        },
        {
          title: "LikeCoin Grants",
          url: "https://likecoingrants.notion.site/likecoingrants/MainPage-32d790bb3d3b4b6ea9832dc0fe8bda62",
        },
        {
          title: "ISCN Spec",
          url: "https://iscn.io",
        },
      ],
    },
    {
      title: "Governance",
      items: [
        {
          title: "Lunie",
          url: "https://stake.like.co",
        },
        {
          title: "Documentation",
          url: "https://docs.like.co/general-guides/governance/liquid-democracy",
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          title: "Discord",
          url: "https://discord.gg/W4DQ6peZZZ",
        },
        {
          title: "Twitter",
          url: "https://twitter.com/likecoin",
        },
        {
          title: "Community Call",
          url: "https://docs.like.co/general-guides/governance/community-call",
        },
      ],
    },
    {
      title: "About",
      items: [
        {
          title: "Blog",
          url: "https://medium.com/likecoin",
        },
        {
          title: "FAQ",
          url: "https://docs.like.co",
        },
        {
          title: "Logo & Brands",
          url: "https://likecoin.notion.site/Branding-and-Design-96b3d582c3014003985a8819b31217fa",
        },
      ],
    },
    {
      title: "ISCN App",
      url: "https://app.like.co",
    },
  ]

  return (
    <header className="absolute z-10 inset-x-0 top-0 flex items-center justify-between px-[32px] py-[24px]">
      <Link className="transition transition-opacity hover:opacity-90 active:opacity-50" to="/">
        <Logo />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden lg:block">
        <ul className="grid grid-flow-col-dense gap-x-[16px]">
          {menuItems.map((topLevelItem) => {
            if (topLevelItem.items) {
              const secondLevelItems = [];
              topLevelItem.items.forEach((secondLevelItem, index) => {
                if (index > 0) {
                  secondLevelItems.push(
                    <Divider key={`divider-${index}`} className="my-[16px]" />
                  );
                }
                const title = (
                  <Fragment>
                    {secondLevelItem.prepend}
                    {secondLevelItem.title}
                    {secondLevelItem.append}
                  </Fragment>
                )
                secondLevelItems.push(
                  <Menu.Item key={secondLevelItem.title} as="div">
                    {secondLevelItem.url ? (
                      <Button
                        className="flex items-center"
                        preset="white"
                        theme="light"
                        href={secondLevelItem.url}
                        target="_blank"
                        rel="noreferrer"
                        isNoPadding
                      >
                        {title}
                      </Button>
                    ) : (
                      <Link to={secondLevelItem.to}>
                        <Button
                          className="flex items-center"
                          preset="white"
                          theme="light"
                          isNoPadding
                        >
                          {title}
                        </Button>
                      </Link>
                    )}
                  </Menu.Item>
                )
              })

              return (
                <Menu
                  key={topLevelItem.title}
                  className="relative inline-block text-left"
                  as="li"
                >
                  <Menu.Button as={Fragment}>
                    <Button className="flex items-center" preset="white">
                      {topLevelItem.title} <ArrowDown className="ml-[8px]" />
                    </Button>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-[16px] p-[24px] shadow-lg focus:outline-none">
                      {secondLevelItems}
                    </Menu.Items>
                  </Transition>
                </Menu>
              )
            }
            return (
              <li key={topLevelItem.title}>
                {topLevelItem.url ? (
                  <Button
                    preset="filled"
                    href={topLevelItem.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {topLevelItem.title}
                  </Button>
                ) : (
                  <Link to={topLevelItem.to}>
                    <Button preset="filled" isNoPadding>
                      {topLevelItem.title}
                    </Button>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <Menu className="lg:hidden" as="nav">
        <Menu.Button as={Fragment}>
          <Button className="flex items-center" preset="filled">
            Menu <ArrowDown className="ml-[8px]" />
          </Button>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Menu.Items className="absolute inset-x-0 z-10 w-screen mt-[24px] px-[32px] outline-none">
            {() => {
              const topLevelItems = [];
              menuItems.forEach((topLevelItem, index) => {
                if (index > 0) {
                  topLevelItems.push(
                    <Divider key={`divider-${index}`} className="my-[16px]" />
                  )
                }
                if (topLevelItem.items) {
                  const secondLevelItems = topLevelItem.items.map(
                    (secondLevelItem) => {
                      const title = (
                        <Fragment>
                          {secondLevelItem.prepend}
                          {secondLevelItem.title}
                          {secondLevelItem.append}
                        </Fragment>
                      )
                      return (
                        <Menu.Item
                          key={secondLevelItem.title}
                          as={Fragment}
                        >
                          {secondLevelItem.url ? (
                            <Button
                              className="flex items-center"
                              preset="white"
                              theme="light"
                              href={secondLevelItem.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {title}
                            </Button>
                          ) : (
                            <Link to={secondLevelItem.to}>
                              <Button
                                className="flex items-center"
                                preset="white"
                                theme="light"
                              >
                                {title}
                              </Button>
                            </Link>
                          )}
                        </Menu.Item>
                      )
                    }
                  )
                  topLevelItems.push(
                    <Disclosure key={topLevelItem.title}>
                      {({ open }) => {
                        return (
                          <>
                            <Disclosure.Button as={Fragment}>
                              <Button
                                className="flex items-center justify-between"
                                preset="white"
                                theme="light"
                                isNoPadding
                              >
                                {topLevelItem.title}
                                <ArrowDown
                                  className={cn("ml-[8px]", {
                                    "transform rotate-180": open,
                                  })}
                                />
                              </Button>
                            </Disclosure.Button>
                            <Disclosure.Panel className="pl-[24px] pt-[16px]">
                              {secondLevelItems}
                            </Disclosure.Panel>
                          </>
                        )
                      }}
                    </Disclosure>
                  )
                } else {
                  topLevelItems.push(
                    <Menu.Item key={topLevelItem.title} as={Fragment}>
                      <Button
                        preset="filled"
                        href={topLevelItem.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {topLevelItem.title}
                      </Button>
                    </Menu.Item>
                  )
                }
              })
              return (
                <div className="overflow-hidden p-[24px] bg-white rounded-[16px] shadow-lg ring-1 ring-black ring-opacity-5">
                  {topLevelItems}
                </div>
              )
            }}
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  )
}
