exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/in`,
    toPath: `https://like.co/in`,
    redirectInBrowser: true,
    isPermanent: false,
  })
}
