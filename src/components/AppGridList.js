import React from "react";
import classNames from "classnames";

export default function AppGridList({ className, children }) {
  const count = children?.length;
  return (
    <ul
      className={classNames(
        "relative grid gap-x-[24px] gap-y-[40px] justify-items-stretch",
        {
          "grid-flow-col": count <= 1,
          "md:grid-cols-2": count >= 2,
          "lg:grid-cols-3": count >= 3,
          "xl:grid-cols-4": count >= 4,
        },
        className
      )}
    >
      {children}
    </ul>
  )
}
