const url = `http://172.25.249.70/eportal/InterFace.do?method=login`;
const method = `POST`;
const headers = {
'Accept-Encoding' : `gzip, deflate`,
'Origin' : `http://172.25.249.70`,
'Accept-Language':`zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7`,
'Accept' : `*/*`,
};
const body = `？？？？？？？？？？？？？？？？？？？？=？？？？？？？？？？？&？？？？？？？？？=？？？？？？？？？`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});