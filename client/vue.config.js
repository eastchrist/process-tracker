// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

//const outputDirectory = path.resolve(__dirname, 'src', 'main', 'resources', 'public');
//const contentBaseDir = path.resolve(__dirname, 'src', 'main', 'resources', 'assets');

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, on Mac: sudo npm run / sudo yarn
const devServerPort = 8080 // TODO: get this variable from setting.ts
const mockServerPort = 9528 // TODO: get this variable from setting.ts
const name = 'Vue Typescript Admin' // TODO: get this variable from setting.ts


module.exports = {
    devServer: {
        port: devServerPort,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        progress: false,
        proxy: {
            //CCA Deploy
            [process.env.VUE_APP_BASE_API]: {
                //target: `http://127.0.0.1:${mockServerPort}/`,
                target: `http://localhost:${mockServerPort}/`,
                changeOrigin: true, // needed for virtual hosted sites
                ws: true, // proxy websockets
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },
    //outputDir: path.resolve(__dirname, 'dist'),
    outputDir: path.resolve(__dirname, '../server/public'),
    assetsDir: '',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/client/',
    lintOnSave: process.env.NODE_ENV === 'development',
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.ts',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        //subpage: 'src/subpage/main.js'
    },
    productionSourceMap: false,
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/styles/_variables.scss'),
                path.resolve(__dirname, 'src/styles/_mixins.scss'),
                //path.resolve(__dirname, 'src/styles/_shared.scss'),
            ]
        },
        i18n: {
            locale: undefined,
            fallbackLocale: undefined,
            localeDir: undefined,
            enableInSFC: undefined
        },
    },

}
