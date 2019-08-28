// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { fileURLToPath } from 'url';
// import path, {dirname} from 'path';
// // const path = require('path');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default {
//     entry: './src/index.js',
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, './dist'),
//     },
//     plugins: [new HtmlWebpackPlugin()]
// }

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // devServer:{historyApiFallback: true},
  mode: 'production',
  entry: './src/index.js',
  // entry: {app: './src/index.js' ,print: './src/print.js'},
  // output:
  // {
  // path: path.resolve(__dirname, './dist'),
  // filename: 'index_bundlee.js'
  // filename: '[name].bundle.js'
  // },
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      //   {test: /\.css$/, use:['style-loader','css-loader']},
      //   {test: /\.(png|svg|jpg|gif)$/, use:['file-loader']},
      //   {test: /\.(woff|woff2|eot|ttf|otf)$/, use:['file-loader']}
    ],
  },
};
