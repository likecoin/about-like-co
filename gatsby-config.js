module.exports = {
  siteMetadata: {
    siteUrl: "https://about.like.co",
    title: "LikeCoin",
    titleTemplate: "%s | LikeCoin",
    description:
      "Decentralize Publishing. Own your content forever.",
    image: "/og.png",
    twitterUsername: "@likecoin",
    themeColor: '#28646e',
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-72702567-14",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify",
  ],
};
