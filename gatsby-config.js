module.exports = {
  siteMetadata: {
    siteUrl: "https://about.like.co",
    title: "LikeCoin",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
