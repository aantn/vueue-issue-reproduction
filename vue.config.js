// added due to https://github.com/vueuse/vueuse/issues/718#issuecomment-913319680
module.exports = {
    configureWebpack: {
      module: {
        rules: [{
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        }]
      }
    }
  }