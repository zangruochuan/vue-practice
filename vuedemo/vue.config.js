module.exports = {
    devServer: {
        proxy:{
            '/api':{
                target:'https://www.v2ex.com',
                secure: true,
                changeOrigin: true,
            }
        }
        // proxy: 'https://www.v2ex.com/',
        // host:'localhost'    
    }
}