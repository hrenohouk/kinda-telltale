const webpack = require('webpack');
const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json']
        },
        plugins: [
            new webpack.ProvidePlugin({
                Vue: ['vue', 'default'],
                mapState: ['vuex', 'mapState'],
                mapGetters: ['vuex', 'mapGetters'],
                mapMutations: ['vuex', 'mapMutations'],
                mapActions: ['vuex', 'mapActions']
            })
        ]
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@use "src/styles/global.scss";'
            }
        }
    }
};