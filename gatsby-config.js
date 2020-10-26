module.exports = {
  plugins: [
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `babel-plugin-styled-components`,
      options: {
        displayName: false,
        minify: false,
        transpileTemplateLiterals: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        minify: false,
        ssr: false,
      },
    },
  ],
}
