const path = require('path')
const webpack = require('webpack')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    publicPath: '/',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            // new webpack.ProvidePlugin({
            //     _M: resolve('src/store/modules/mutations')
            // })
        ]
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@V', resolve('src/views'))
    }
}
