// 每天签到
let qdArr = [
  `curl -H 'Host: custom.luyuan.cn' -H 'Accept: */*' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: http://custom.luyuan.cn' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://custom.luyuan.cn/custom/wechat/integral_index.html?usercode=20210122093525742EVYB54Y&timestamp=${new Date().getTime()}' -H 'Cookie: UM_distinctid=1764bb00e662c3-047fdd2377a0e98-5260777a-4a574-1764bb00e67118' --data-binary "usercode=20210122093525742EVYB54Y" --compressed 'http://custom.luyuan.cn/custom/signin/add'`,
];

var exec = require('child_process').exec;

function runExec (cmdStr) {
  return new Promise((resolve, reject) => {
    console.log(cmdStr);
    exec(cmdStr, function (err, stdout, stderr) {
      if (err) {
        console.log('get weather api error:' + stderr);
        reject();
      } else {
        resolve(stdout);
      }
    });
  });
}

// 签到
function qd (arr) {
  arr.map(async item => {
    runExec(item).then(it => {
      console.log(it);
    }).catch(err => {
      console.log(err);
    })
  })
}

qd(qdArr);


