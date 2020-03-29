// Dependecies
const withSass = require('@zeit/next-sass')
const path = require('path');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[name]_[local]_[hash:base64:5]'
  },
  devIndicators: {
    autoPrerender: false
  },
  webpack: config => {
    config.resolve.alias.styles = path.resolve(__dirname, './src/shared/styles')
    return config
  }
})
