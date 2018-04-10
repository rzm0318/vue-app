/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'

import data from './data.json'  // js对象

console.log('mockServer')
// 模拟提供goods数据的接口
Mock.mock('/goods', {code: 0, data: data.goods})
Mock.mock('/ratings', {code: 0, data: data.ratings})
Mock.mock('/info', {code: 0, data: data.info})

// 向外暴露什么?  不需要
// export defaul t
