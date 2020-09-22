function fetchData(url) {
  // Promise 在声明的时候就被运行了，接收两个回调函数
  // 将内部异步操作代码包装起来并且留出新的接口
  // 等待内部的异步代码运行完成出发事件获得回调函数之后返回 resolve 或 reject
  //  resolve 或 reject 的结果会传入then
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        return resolve(xhr.responseText);
      }
      return reject(xhr.statusText);
    };
    xhr.send();
    // end -->
  });
}

// 发出异步请求获得结果之后进行 then
const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(JSON.parse(result).name);
  })
  .catch(error => {
    console.error(error);
  });
