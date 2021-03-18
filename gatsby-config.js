/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Intelligent Capital`,
    description: `Verwalten Sie Ihr Vermögen mit Hilfe Künstlicher Intelligenz`,
    author: `@_fpeters`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken: "a3aaba056af82f0ca8664188fecfecaf",
        // optional fields, default values
        enableOnDevMode: true, // if false mixpanel will be activated on NODE_ENV=production only
        mixpanelConfig: {
          api_host: "https://api-eu.mixpanel.com",
        }, // override specific config for mixpanel initialization https://github.com/mixpanel/mixpanel-js/blob/8b2e1f7b/src/mixpanel-core.js#L87-L110
        pageViews: "all", // see below
        // set pageViews to 'all' and use this option to set the same event name for all page view events
        trackPageViewsAs: "Page view", // optionally: set an Event Name to use for all page views, eg: trackPageViewsAs: 'Page view'
        //getPageViewTransformerFn: null, // optionally: function body as a string to customize the event sent to mixpanel. Receives one parameter: location. Example 'return () => ({url: location.pathname})'
      },
    },
  ],
}
