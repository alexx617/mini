const path = require('path')

resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 3000,
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('store', resolve('src/store'))
            .set('utils', resolve('src/utils'))
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/styles'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
            .set('mixins', resolve('src/mixins'))
            .set('router', resolve('src/router'))
            .set('store', resolve('src/store'))
            .set('models_api', resolve('../models/api'))
    },
}