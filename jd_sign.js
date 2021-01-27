
// 每天签到

// 'https://lzdz-isv.isvjcloud.com/dingzhi/mn9/sign/sign'  蒙牛
let qdArr = [
  // 蒙牛 签到
  `curl -H 'Host: lzdz-isv.isvjcloud.com' -H 'Accept: application/json' -H 'Origin: https://lzdz-isv.isvjcloud.com' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: jdapp;android;8.5.4;9;865334037231088-d0ff98579980;network/wifi;model/VTR-AL00;addressid/-882321320;aid/d44463b28c3d10f4;oaid/9be9deed-f97c-b589-dffa-ecd76bbbc79a;osVer/28;appBuild/72032;partner/huawei;Mozilla/5.0 (Linux; Android 9; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36' -H 'Referer: https://lzdz-isv.isvjcloud.com/dingzhi/mn9/sign/activity?activityId=dz2101100001480309&lng=116.463218&lat=40.007619&sid=17685d410bc77666b101e799f5e4a22w&un_area=1_2901_4135_0' -H 'Accept-Language: zh-CN,en-US;q=0.9' -H 'Cookie: IsvToken=AAFgES5aADCBQQ5YxpkmiWJo1WwXjAISln1lbdIb3kZbLvpTsOf1Cp2FCVOw_Td4C2TFeuMapmM; __jdc=60969652; __jda=60969652.16111191985941274176593.1611119198.1611312051.1611736710.3; __jdv=60969652%7Csc.ftqq.com%7Ct_1002896812_%7Ctuiguang%7Cedc1d786d40b4c779e8a44770ce21783%7C1611213972156; pre_session=865334037231088-d0ff98579980|340; AUTH_C_USER=kHgabQ035c7bgl+M084ppU7oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w==; __jdb=60969652.3.16111191985941274176593|3.1611736710; mba_sid=342.26; pre_seq=25; LZ_TOKEN_KEY=lztokenpage332bb04e9dbc48a191b81d9eee10bea0; __jd_ref_cls=assist; mba_muid=16111191985941274176593.342.1611738716767; LZ_TOKEN_VALUE=Aa5RE87N+tmRuY4X3zXrxA==' --data "activityId=dz2101100001480309&actorUuid=18f831e6568141a4bc2cd137f66cc93a" --compressed 'https://lzdz-isv.isvjcloud.com/dingzhi/mn9/sign/sign'`,
];


var exec = require('child_process').exec;

function runExec (cmdStr) {
  return new Promise((resolve, reject) => {
    exec(cmdStr, function (err, stdout, stderr) {
      if (err) {
        console.log('err' + stderr);
        reject();
      } else {
        // console.log(stdout);
        resolve(stdout);
      }
    });
  });
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function rand (min, max) {
  return Math.random() * (max - min + 1) + min | 0; //特殊的技巧，|0可以强制转换为整数
}

// 签到
function qd (arr) {
  arr.map(async item => {
    await sleep(rand(3, 5) * 1000);
    runExec(item).then(it => {
      console.log(it);
    }).catch(err => {
      console.log(err);
    })
  })

}


// 每天签到
qd(qdArr);


