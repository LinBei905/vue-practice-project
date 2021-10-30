const {createProxyMiddleware}= require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/search/users', { 
            target: 'https://api.github.com', 
            changeOrigin: true
        })
    )
}