module.exports = {
    entry:'./src/app.js',
    output:{
        filename:'b.js',
        path:'/home/mrmzr/Desktop/ReactEx/dist'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    'babel-loader'
                ],
            }
        ]
    }
}