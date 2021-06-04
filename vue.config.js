module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('assets','@/assets')
            .set('common','@/common')
            .set('components','@/components')
            .set('network','@/network')
            .set('views','@/views')
    }
}