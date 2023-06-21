import React, { useState } from "react";
import { EffectCards, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import classNames from "classnames";

import "swiper/css";
import "swiper/css/effect-cards";

import NFTWidget from "./NFTWidget";
import ArrowRight from "./icons/ArrowRight";

function SlideshowNavButton({ className, isDisabled, onClick }) {
  return (
    <button
      className={classNames(
        "w-[32px] h-[32px] p-[8px]",
        isDisabled
          ? "text-medium-gray"
          : "text-like-cyan-vlight hover:text-like-cyan-light",
        "transition-colors",
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      <ArrowRight className="w-[16px] h-[16px]" />
    </button>
  )
}

function SlideshowControl({ items, currentIndex }) {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-center gap-[16px]">
      <SlideshowNavButton
        className="rotate-180"
        isDisabled={currentIndex === 0}
        onClick={() => swiper.slidePrev()}
      />
      {items.map((nft, i) => {
        const isActive = i === currentIndex;
        return (
          <button
            key={nft.classId}
            className={classNames(
              "flex items-center justify-center",
              "w-[24px] h-[24px]",
              isActive ? "text-like-cyan" : "text-like-cyan-light",
              "hover:opacity-75",
              "transition-colors",
              "transition-opacity",
            )}
            disabled={isActive}
            onClick={() => swiper.slideTo(i)}
          >
            <span className={classNames(
              "w-[8px] h-[8px]",
              "rounded-full block bg-current",
              "transition-transform",
              {
                "scale-50": !isActive,
              }
            )} />
          </button>
        )
      })}
      <SlideshowNavButton
        isDisabled={currentIndex === items.length - 1}
        onClick={() => swiper.slideNext()}
      />
    </div>
  )
}

export default function NFTWidgetSlideshow({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, EffectCards]}
      centeredSlides={true}
      centerInsufficientSlides={true}
      effect="cards"
      onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
    >
      {items.map(nft => (
        <SwiperSlide key={nft.classId}>
          {({ isActive, isNext, isPrev }) => (
            <NFTWidget
              className={classNames(
                "mx-auto",
                {
                  "brightness-90": !isActive && (isNext || isPrev),
                  "brightness-75": !isActive && !(isNext || isPrev),
                }
              )}
              classId={nft.classId}
            />
          )}
        </SwiperSlide>
      ))}
      <SlideshowControl slot="container-end" items={items} currentIndex={currentIndex} />
    </Swiper>
  )
}
