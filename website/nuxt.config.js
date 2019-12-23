export default {
    mode: 'universal',
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    css: ['iview/dist/styles/iview.css', '~assets/styles/common.css'],
    loading: { color: '#80bd01' },
    performance: {
        prefetch: false
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    plugins: [
        { src: '~plugins/iview.js', ssr: true },
        { src: '~plugins/bdStat.js', ssr: false },
        { src: '~plugins/analyze.js', ssr: false },
        // { src: '~plugins/adsense.js', ssr: false },
        { src: '~plugins/refreshToken.js', ssr: true }
    ]
}
