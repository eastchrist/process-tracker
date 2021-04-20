// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    },
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableInSFC: undefined
    },
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/styles/_variables.scss";`
        }
      }
    }
  }
}
