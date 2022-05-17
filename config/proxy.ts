/*
 * @Author: Cookie
 * @Date: 2020-08-06 13:57:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-06 08:35:10
 * @FilePath: /fe-bp-ops/config/proxy.ts
 * @Description: 
 */

export default {
  dev: {
    '/api/': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
    },
  },
  test: {
    '/api/': {
      target: 'https://127.0.0.1:7001',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
