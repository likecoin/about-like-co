import React from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import Divider from "./Divider"

export default function StatNumber({
  value = "",
  label = "",
  unit = "",
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
          <div>
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
                    <span className="text-[36px] sm:text-[56px] min-h-[54px] sm:min-h-[84px] font-bold text-white font-display" ref={countUpRef} />
                  )}
                </CountUp>
              )
              : null
            }
            {withPlus && (isShow || hasShown) && (
              <span className="text-like-cyan-vlight text-opacity-70">+</span>
            )}
            {!!unit && <span className="text-[16px] text-like-cyan-vlight font-normal">&nbsp;{unit}</span>}
          </div>
        }
      </VisibilitySensor>
      <div className="text-[16px] text-like-cyan-vlight text-opacity-70">
        {label}
      </div>
    </React.Fragment>
  )
}
