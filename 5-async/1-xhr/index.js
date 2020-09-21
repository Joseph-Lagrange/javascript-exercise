function fetchData(url, successCallback, errorCallback) {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 21: 通过XMLHttpRequest实现异步请求
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status === 200) {
            successCallback(xhr.responseText);
        } else {
            errorCallback(xhr.statusText);
        }
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
