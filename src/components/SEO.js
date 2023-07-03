import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import {
  LIKECOIN_DESCRIPTION,
  ISCN_DESCRIPTION,
  IPFS_DESCRIPTION,
  NFT_MODULE_DESCRIPTION,
  TOKEN_DESCRIPTION,
  WIDGET_DESCRIPTION,
  PORTAL_DESCRIPTION,
  WORDPRESS_PLUGIN_DESCRIPTION,
} from "../text";

const SEO = ({ title, description, image, isArticle }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    url,
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultImage,
    twitterUsername,
    themeColor,
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image || defaultImage}`,
    url: `${url}${pathname}`,
  }
  const organizationData = {
    '@context': 'http://www.schema.org',
    '@type': 'Organization',
    name: 'LikeCoin',
    url: 'https://like.co',
    logo: 'https://like.co/logo.png',
    sameAs: [
      'https://discord.com/invite/likecoin',
      'https://t.me/likecoin',
      'https://matters.news/@likecoin',
      'https://blog.like.co',
      'https://github.com/likecoin',
      'https://twitter.com/likecoin',
      'https://www.youtube.com/c/LikeCoin',
      'https://www.facebook.com/Liker.Land',
    ],
  }
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'What is LikeCoin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: LIKECOIN_DESCRIPTION,
      }
    },
    {
      '@type': 'Question',
      name: 'What is ISCN metadata registry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: ISCN_DESCRIPTION,
      }
    },
    {
      '@type': 'Question',
      name: 'What is the relationship between IPFS, Arweave and LikeCoin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: IPFS_DESCRIPTION,
      }
    },
    {
      '@type': 'Question',
      name: 'What is LikeCoin NFT module?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: NFT_MODULE_DESCRIPTION,
      }
    },
    {
      '@type': 'Question',
      name: 'What is LIKE token?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: TOKEN_DESCRIPTION,
      }
    },
    {
      '@type': 'Question',
      name: 'What is Writing NFT widget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: WIDGET_DESCRIPTION,
      }
    },
    {
      '@type': 'Question',
      name: 'What is Writing NFT portal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: PORTAL_DESCRIPTION,
      }
    },
    {
      '@type': 'Question',
      name: 'What is Writing NFT WordPress plugin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: WORDPRESS_PLUGIN_DESCRIPTION,
      }
    }]
  }
  return (
    <Helmet
      defaultTitle={defaultTitle}
      title={title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {themeColor && <meta name="theme-color" content={themeColor} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(isArticle ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <link rel="prefetch" href="https://substackapi.com/widget.js"/>
      <link rel="preload" href="https://use.typekit.net/yqg7ihd.css" as="style" />
      <link rel="stylesheet" href="https://use.typekit.net/yqg7ihd.css" />
      <script type="application/ld+json">
        {JSON.stringify([organizationData, faqData])}
      </script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isArticle: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  isArticle: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        url: siteUrl
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        defaultImage: image
        twitterUsername
        themeColor
      }
    }
  }
`