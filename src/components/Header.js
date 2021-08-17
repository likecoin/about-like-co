import React, { Fragment } from "react"
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
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
  return (
    <header className="absolute z-10 inset-x-0 top-0 flex items-center justify-between px-[32px] py-[24px]">
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <Popover className="md:hidden">
          <Popover.Button as={Fragment}>
            <Button
              className="flex items-center"
              preset="filled"
            >
              Menu <ArrowDown className="ml-[8px]" />
            </Button>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute inset-x-0 z-10 w-screen mt-[16px] px-[16px]">
              <div className="overflow-hidden p-[24px] bg-white rounded-[16px] shadow-lg ring-1 ring-black ring-opacity-5">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button as={Fragment}>
                        <Button
                          className="flex items-center justify-between"
                          preset="white"
                          theme="light"
                          isNoPadding
                        >
                          Apps <ArrowDown className={cn("ml-[8px]", { 'transform rotate-180': open })} />
                        </Button>
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-[24px] pt-[16px]">
                        <Popover.Button as={Fragment}>
                          <Button
                            className="flex items-center"
                            preset="white"
                            theme="light"
                            href="https://app.like.co"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ISCNIcon className="mr-[8px]" />ISCN App
                          </Button>
                        </Popover.Button>
                        <Popover.Button as={Fragment}>
                          <Button
                            className="flex items-center"
                            preset="white"
                            theme="light"
                            href="https://liker.land"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ClapIcon className="mr-[8px]" /> Liker Land
                          </Button>
                        </Popover.Button>
                        <Popover.Button as={Fragment}>
                          <Link to="/apps">
                            <Button
                              className="flex items-center"
                              preset="white"
                              theme="light"
                            >
                              more <ArrowRight className="ml-[8px]" />
                            </Button>
                          </Link>
                        </Popover.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Divider className="my-[16px]" />
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button as={Fragment}>
                        <Button
                          className="flex items-center justify-between"
                          preset="white"
                          theme="light"
                          isNoPadding
                        >
                          Developers <ArrowDown className={cn("ml-[8px]", { 'transform rotate-180': open })} />
                        </Button>
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-[24px] pt-[16px]">
                        <Popover.Button as={Fragment}>
                          <Button
                            className="flex"
                            href="https://docs.like.co/developer/introduction"
                            preset="white"
                            theme="light"
                            target="_blank"
                            rel="noreferrer"
                          >Documentation</Button>
                        </Popover.Button>
                        <Popover.Button as={Fragment}>
                          <Button
                            className="flex"
                            href="https://github.com/likecoin"
                            preset="white"
                            theme="light"
                            target="_blank"
                            rel="noreferrer"
                          >GitHub</Button>
                        </Popover.Button>
                        <Popover.Button as={Fragment}>
                          <Button
                            className="flex"
                            href="https://likecoingrants.notion.site/likecoingrants/MainPage-32d790bb3d3b4b6ea9832dc0fe8bda62"
                            preset="white"
                            theme="light"
                            target="_blank"
                            rel="noreferrer"
                          >LikeCoin Grants</Button>
                        </Popover.Button>
                        <Popover.Button as={Fragment}>
                          <Button
                            className="flex"
                            href="https://iscn.io"
                            preset="white"
                            theme="light"
                            target="_blank"
                            rel="noreferrer"
                          >ISCN spec</Button>
                        </Popover.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Divider className="my-[16px]" />
                <Popover.Button as={Fragment}>
                  <Button
                    className="flex"
                    preset="white"
                    theme="light"
                    href="https://stake.like.co/proposals"
                    target="_blank"
                    rel="noreferrer"
                    isNoPadding
                  >
                    Governance
                  </Button>
                </Popover.Button>
                <Divider className="my-[16px]" />
                <Popover.Button as={Fragment}>
                  <Button
                    preset="filled"
                    href="https://app.like.co"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ISCN App
                  </Button>
                </Popover.Button>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <ul className="hidden md:grid grid-flow-col-dense gap-x-[16px]">
          <Menu as="li" className="relative inline-block text-left">
            <Menu.Button>
              <Button
                className="flex items-center"
                preset="white"
              >
                Apps <ArrowDown className="ml-[8px]" />
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
              <Menu.Items
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-[16px] p-[24px] shadow-lg focus:outline-none"
              >
                <Menu.Item>
                  <Button
                    className="flex items-center"
                    preset="white"
                    theme="light"
                    href="https://app.like.co"
                    target="_blank"
                    rel="noreferrer"
                    isNoPadding
                  >
                    <ISCNIcon className="mr-[8px]" />ISCN App
                  </Button>
                </Menu.Item>
                <Divider className="my-[16px]" />
                <Menu.Item>
                  <Button
                    className="flex items-center"
                    preset="white"
                    theme="light"
                    href="https://liker.land"
                    target="_blank"
                    rel="noreferrer"
                    isNoPadding
                  >
                    <ClapIcon className="mr-[8px]" /> Liker Land
                  </Button>
                </Menu.Item>
                <Divider className="my-[16px]" />
                <Menu.Item>
                  <Link to="/apps">
                    <Button
                      className="flex items-center"
                      preset="white"
                      theme="light"
                      isNoPadding
                    >
                      more <ArrowRight className="ml-[8px]" />
                    </Button>
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="li" className="relative inline-block text-left">
            <Menu.Button>
              <Button
                className="flex items-center"
                preset="white"
              >
                Developer <ArrowDown className="ml-[8px]" />
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
              <Menu.Items
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-[16px] p-[24px] shadow-lg focus:outline-none"
              >
                <Menu.Item>
                  <Button
                    className="flex"
                    href="https://docs.like.co/developer/introduction"
                    preset="white"
                    theme="light"
                    target="_blank"
                    rel="noreferrer"
                    isNoPadding
                  >Documentation</Button>
                </Menu.Item>
                <Divider className="my-[16px]" />
                <Menu.Item>
                  <Button
                    className="flex"
                    href="https://github.com/likecoin"
                    preset="white"
                    theme="light"
                    target="_blank"
                    rel="noreferrer"
                    isNoPadding
                  >GitHub</Button>
                </Menu.Item>
                <Divider className="my-[16px]" />
                <Menu.Item>
                  <Button
                    className="flex"
                    href="https://likecoingrants.notion.site/likecoingrants/MainPage-32d790bb3d3b4b6ea9832dc0fe8bda62"
                    preset="white"
                    theme="light"
                    target="_blank"
                    rel="noreferrer"
                    isNoPadding
                  >LikeCoin Grants</Button>
                </Menu.Item>
                <Divider className="my-[16px]" />
                <Menu.Item>
                  <Button
                    className="flex"
                    href="https://iscn.io"
                    preset="white"
                    theme="light"
                    target="_blank"
                    rel="noreferrer"
                    isNoPadding
                  >ISCN spec</Button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <li>
            <Button
              preset="white"
              href="https://stake.like.co/proposals"
              target="_blank"
              rel="noreferrer"
            >
              Governance
            </Button>
          </li>
          <li>
            <Button
              preset="filled"
              href="https://app.like.co"
              target="_blank"
              rel="noreferrer"
            >
              ISCN App
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
