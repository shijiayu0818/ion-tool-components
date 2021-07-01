/*
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2021-06-11 17:03:40
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-07-01 14:36:09
 */
module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true
  },
  globals:{
    "$": true,
    "jQuery": true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
