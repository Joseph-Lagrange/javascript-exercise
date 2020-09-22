function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('GET', url);
  xhr.onreadystatechange = function() {
    // readyState 0 => 初始化, 1 => 载入, 2 => 载入完成, 3 => 解析, 4 => 完成
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status === 200) {
      return successCallback(xhr.responseText);
    }
    return errorCallback(xhr.statusText);
  };
  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
