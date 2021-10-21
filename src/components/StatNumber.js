import React from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import Divider from "./Divider"

export default function StatNumber({
  value = "",
  label = "",
  withPlus = false,
}) {
  const [hasShown, setHasShown] = React.useState(false)
  const handleVisibilityChange = React.useCallback((isVisible) => {
    if (isVisible) setHasShown(true)
  }, [])
  return (
    <React.Fragment>
      <Divider />
      <VisibilitySensor
        active={!hasShown}
        partialVisibility
        onChange={handleVisibilityChange}
      >
        {({ isVisible: isShow }) =>
          <div className="text-[56px] min-h-[84px] font-bold font-display text-white">
            {isShow || hasShown
              ? (    
                <CountUp
                  start={value * 0.95}
                  end={value}
                  delay={0}
                  separator=","
                  duration={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} />
                  )}
                </CountUp>
              )
              : null
            }
            {withPlus && (isShow || hasShown) && (
              <span className="text-like-cyan-vlight text-opacity-70">+</span>
            )}
          </div>
        }
      </VisibilitySensor>
      <div className="text-[16px] text-like-cyan-vlight text-opacity-70">
        {label}
      </div>
    </React.Fragment>
  )
}
