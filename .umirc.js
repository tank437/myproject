
// ref: https://umijs.org/config/
const path = require('path');
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'hero2',
      dll: false,
      hardSource: false,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
       ],
      },
    },
  ],
  'umi-plugin-gh-pages',
  ],
base: '/myproject/',
publicPath: '/myproject/',
  alias: {
    utils: path.resolve(__dirname, 'src/utils'),
    services: path.resolve(__dirname, 'src/services'),
    models: path.resolve(__dirname, 'src/models'),
  },
  // "proxy": {
  //   "/api": {                                       
  //     "target": "https://pvp.qq.com/web201605/js/", 
  //     "changeOrigin": true,                         
  //     "pathRewrite": { "^/api" : "" }               
  //   }
  // }
}
