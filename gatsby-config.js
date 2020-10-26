module.exports = {
  plugins: [
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
