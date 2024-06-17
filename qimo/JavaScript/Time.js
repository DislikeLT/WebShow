function getTime() {
    var date = new Date();

    // 年、月、日
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    // 时、分、秒
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    // 实时显示
    var element = document.getElementById('time');
    element.innerHTML = '<h1>' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
setInterval('getTime()', 1000);