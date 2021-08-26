module.exports = {
  siteMetadata: {
    siteUrl: "https://about.like.co",
    title: "LikeCoin",
    titleTemplate: "%s | LikeCoin",
    description:
      "Decentralized Publishing - Digital evidence can now be secured, validated, and made readily available in perpetuity with #DePub.",
    image: "/og.png",
    twitterUsername: "@likecoin",
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
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
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
  ],
};
