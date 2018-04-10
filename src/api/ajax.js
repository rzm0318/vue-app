import axios from 'axios'

export default function ajax(url='', data={}, method='GET') {   //默认初始值为get， 若为post，需传入指定
  /* todo   Promise对象: 代表了未来某个将要发生的事件(通常是一个异步操作)
     异步操作以同步的流程表达出来, 避免了层层嵌套的回调函数(俗称'回调地狱')
     ES6的Promise是一个构造函数, 用来生成promise实例
       let promise = new Promise((resolve, reject) => {   //执行异步操作
           if(异步操作成功) {
              resolve(value);//修改promise的状态fullfilled
           } else {
              reject(errMsg);//修改promise的状态为rejected
           }
       })
       promise.then(function(   //调用promise的then()
       result => console.log(result),
       errorMsg => alert(errorMsg)
       ))
   todo  async函数:同步流程表达异步操作  ---ES7
       async function foo(){
           await 异步操作;
           await 异步操作；
       }
   */
  return new Promise(function (resolve, reject) {   //resolve  成功   reject 失败
    let promise
    if(method==='GET') {// /login?name=tom&pwd=123
        let dataString = '' //todo  初始化为字符串，若为null/undefinded  又会显示一个字符串
        //todo   Object.keys()，知道对象的所有属性   传入对象，返回属性名,返回一个数组,
        Object.keys(data).forEach(key => {
          const value = data[key]
          dataString += key + '=' + value + '&'  //dataString = dataString + key + '=' + value + '&'
        })
        if(dataString) {
          // todo substring(start,end) 从start(0)开始截取到end
          dataString = dataString.substring(0, dataString.length-1) // 去掉最后的&
          url += '?' + dataString
        }
        //  /login?name=tom&pwd=123

        promise = axios.get(url) //Todo  带上参数，则返回的是promise对象,进行成功、失败的解析
      /* promise是异步解决方案。 当一个异步动作发生时，通过promise封装一个ajax异步请求，将ajax请求成功后，返回的数据作为resolve参数解析，失败异常作为reject的参数解析。
        通过new Promise().then()执行下一步骤操作。
        axios封装的方式，原理与这个一样。*/
    } else {
        promise = axios.post(url, data) // {name:'tom', pwd: '123'}
    }
    promise.then(response => {
      resolve(response.data) // 调用ajax函数异步获取的数据不再是response, 而是data
    }).catch(error => {
      reject(error)
    })
  })



}

/*
 ajax('/login', {name:'tom', pwd: '123'}, 'POST').then(response => {
 const result = response.data
 })
 */

// const response = await ajax('/login', {name:'tom', pwd: '123'}, 'POST')
// const result = response.data
 //const result = await ajax('/login', {name:'tom', pwd: '123'}, 'POST')
