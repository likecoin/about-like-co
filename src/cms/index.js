import CMS from "netlify-cms-app"

import globalStyles from "!css-loader!postcss-loader!../styles/global.css"

import LatestNewsItemPreview from "./LatestNewsItemPreview"
import MediaCoverageItemPreview from "./MediaCoverageItemPreview"
import MenuPreview from "./MenuPreview"

CMS.registerPreviewStyle(globalStyles.toString(), { raw: true })

CMS.registerPreviewTemplate('menu', MenuPreview)
CMS.registerPreviewTemplate('news', LatestNewsItemPreview)
CMS.registerPreviewTemplate('mediaCoverage', MediaCoverageItemPreview)
