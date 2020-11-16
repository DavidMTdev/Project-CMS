module.exports = {
  configureWebpack: {
    module: {
      rules: [{ 
        test: /\.html$/,
        use: 'vue-template-loader',
        exclude: /index.html/ 
      }
      ]
    }
  }
}