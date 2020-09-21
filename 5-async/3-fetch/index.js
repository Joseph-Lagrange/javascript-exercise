function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
    fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            Promise.reject('error msg');
        }
    });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
