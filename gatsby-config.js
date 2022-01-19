require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Sofybrands",
    siteTitleDefault: "ONLINE OUTLET |  spare bis zu 70%  |",
    siteUrl: "https://sofybrands.com/",
    hrefLang: "en",
    siteDescription:
      "Sofybrands, Europas führendem Online Designer Outlet. Kaufen Sie die beste Mode,Schuhe,Sneakers und Accessoires für Damen und Herren .",
    siteImage: "/default-og-image.jpg",
    twitter: "@lucaildiko",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
