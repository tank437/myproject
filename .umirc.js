
// ref: https://umijs.org/config/
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
          /components/,
        ],
      },
    }],
  ],
  // "proxy": {
  //   "/api": {                                       
  //     "target": "https://pvp.qq.com/web201605/js/", 
  //     "changeOrigin": true,                         
  //     "pathRewrite": { "^/api" : "" }               
  //   }
  // }
}
