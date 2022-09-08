const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // 设置公共路径
    publicPath: process.env.NODE_ENV = "production" ? "./" : "/"
        // devServer: {
        //     proxy: {
        //         '/api1': {
        //             target: 'http://127.0.0.1:8000',
        //             pathRewrite: { '^/api1': '' }, //将请求路径中atguigu改写为空字符串
        //             ws: true, // 用于支持websocket
        //             changeOrigin: true //用于控制请求头中的host值
        //         }

    //     }
    // }
})