// module.exports = {
//     entry:'./src/app.js',
//     output:{
//         filename:'b.js',
//         path:'/home/mrmzr/Desktop/ReactEx/dist'
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.js$/,
//                 exclude:/node_modules/,
//                 use:[
//                     'babel-loader'
//                 ],
//             }
//         ]
//     }
// }

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: "./dist/b.js"
  },
  resolve: {
    extensions:[".js",".jsx"]
  },
  module: {
    rules: [
      {
       exclude: /(node_modules)/,
       use: ['babel-loader']
      }
    ]
  }
}
