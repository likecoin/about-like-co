import React from "react"

import AppItem from "../components/AppItem";

export default function AppListPreview({ entry }) {
  const appsData = entry.getIn(["data", "appItems"])
  const appList = JSON.parse(appsData.toJSON().code)
  return (
    <div className="h-full">
      <AppItem items={appList}/>
    </div>
  )
}
