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
    blogUrl: "https://blog.like.co",
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
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["UA-72702567-14"],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [`Referrer-Policy: strict-origin-when-cross-origin`],
        },
      },
    },
  ],
};
