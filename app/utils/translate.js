import fetchJsonp from 'fetch-jsonpd';

const appKey = '您的应用ID';
const key = '您的应用密钥';
const salt = (new Date).getTime();
const query = '你好';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
const from = '';
const to = 'en';
const str1 = appKey + query + salt +key;
const sign = md5(str1);
fetchJsonp({
    url: 'http://openapi.youdao.com/api',
    type: 'post',
    dataType: 'jsonp',
    data: {
        q: query,
        appKey: appKey,
        salt: salt,
        from: from,
        to: to,
        sign: sign
    },
    success: function (data) {
        console.log(data);
    } 
});