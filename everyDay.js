var exec = require('child_process').exec;

const UA = require('./USER_AGENTS');
// console.log('UA', UA.USER_AGENT)

function runExec (cmdStr) {
  return new Promise((resolve, reject) => {
    exec(cmdStr, function (err, stdout, stderr) {
      if (err) {
        console.log('err' + stderr);
        reject();
      } else {
        resolve(stdout);
      }
    });
  });
}

// 产生 min - max 之间的随机数
function randomNum (min = 100189, max = 116133) {
  let r = Math.random() * (max - min);
  r = Math.floor(r) + min;
  return r
}

// 一次任务  点赞 num 次
function generateIds (num = 1) {
  const ids = [];
  Array.from({ length: num }).map(() => {
    ids.push(randomNum())
  })
  return ids;
}

// 获取当前时间
function getCurrentTime () {
  const b = new Date()
  const time = b.getFullYear() + '/' + b.getMonth() + '/' + b.getDate() + '  ' + b.getHours() + ':' + b.getMinutes() + ':' + b.getSeconds();
  console.log('当前时间：', time)
}

function randSleep () {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));
}

function randoTask () {
  const r = Math.floor(Math.random() * 10);
  // return r%2;
  return true;
}

const dianZanUrl = (mid, vid) => `curl -H 'Host: gaowei.juzhen02.com' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://gaowei.juzhen02.com' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/3.0.3(0x13000309) MiniProgramEnv/Mac MiniProgram' -H 'Referer: https://gaowei.juzhen02.com/2021/plp517/index.html?encryptData=IRaAF1wIjG8__&t=${Date.now()}' -H 'Cookie: ASP.NET_SessionId=123123' --data-binary "Type=VoteFor&memberID=${mid}&vid=${vid}" --compressed 'https://gaowei.juzhen02.com/2021/plp517/webserver/AjaxApi.aspx'`


const USERCODE1 = process.env.USERCODE1;
const USERCODE2 = process.env.USERCODE2;
const USERCODE3 = process.env.USERCODE3;
const USERCODE4 = process.env.USERCODE4;
const USERCODE5 = process.env.USERCODE5; //114133  副作用号

// 签到
const signUrl = (mid, ua) => `curl -H 'Host: www.xyoct.com' -H 'Content-Type: application/json' -H 'Accept: */*' -H 'User-Agent: ${ua}' -H 'Referer: https://servicewechat.com/wxc1f07ce8c049095b/179/page-frame.html' -H 'Accept-Language: zh-cn' --compressed 'https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=QianDao&memberid=${mid}'`
// 大转盘签到
const dazhuanpanUrl = (mid, ua) => `curl -H 'Host: www.xyoct.com' -H 'Content-Type: application/json' -H 'Accept: */*' -H 'User-Agent: ${ua}' -H 'Referer: https://servicewechat.com/wxc1f07ce8c049095b/179/page-frame.html' -H 'Accept-Language: zh-cn' --compressed 'https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=HuoDongJiFen&memberid=${mid}&eventid=6&score=5'`
// 连连看 抽奖
const lianliankanUrl = (mid, ua) => `curl -H 'Host: qch.xyoct.com' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://qch.xyoct.com' -H 'Accept-Language: zh-cn' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'User-Agent: ${ua}' -H 'Referer: https://qch.xyoct.com/llk608/index.html?encryptData=_ __&t=${Date.now()}' -H 'X-Requested-With: XMLHttpRequest' --data-binary "Type=ChouJiang&memberID=${mid}" --compressed 'https://qch.xyoct.com/llk608/webserver/AjaxApi.aspx'`
// 积分雨活动
const jifenyuUrl = (mid, ua) => `curl -H 'Host: qch.xyoct.com' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://qch.xyoct.com' -H 'Accept-Language: zh-cn' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'User-Agent: ${ua}' -H 'Referer: https://qch.xyoct.com/jjb604/index.html?encryptData=_&t=${Date.now()}' -H 'X-Requested-With: XMLHttpRequest' --data-binary "Type=TiJiaoChengJi&memberID=${mid}&Score=30" --compressed 'https://qch.xyoct.com/jjb604/webserver/AjaxApi.aspx'`

// 
const chouUrl = (mid, ua) => `https://www.xyoct.com/choujiang0528/webserver/AjaxApi.aspx?Type=ChouJiang&memberID=${mid}`;// 积分抽奖
const chouUrl2 = (mid, ua) => `curl -H 'Host: qch.xyoct.com' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://qch.xyoct.com' -H 'Accept-Language: zh-cn' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'User-Agent: ${ua}' -H 'Referer: https://qch.xyoct.com/hqczp622/index.html?encryptData=___&t=${Date.now()}' -H 'X-Requested-With: XMLHttpRequest' --data-binary "Type=ChouJiang&memberID=${mid}" --compressed 'https://qch.xyoct.com/hqczp622/webserver/AjaxApi.aspx'`;// 大转盘抽奖
const birthRightUrl = (mid) => `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=ShengRiTeQuan&memberid=${mid}`// 生日权益


function getIds () {
  return [USERCODE1, USERCODE2, USERCODE3, USERCODE4, USERCODE5]
}

// 签到
function sign (mid, ua) {
  runExec(signUrl(mid, ua)).then(it => {
    getCurrentTime()
    console.log('ID：', mid, '签到结果：', it);
  }).catch(err => {
    console.log(err);
  })
}

// 大转盘签到
function dazhuanpan (mid, ua) {
  runExec(dazhuanpanUrl(mid, ua)).then(it => {
    getCurrentTime()
    console.log('ID：', mid, '大转盘签到 结果：', it);
  }).catch(err => {
    console.log(err);
  })
}

// 积分抽奖
function chou (mid, ua) {
  runExec(chouUrl(mid, ua)).then(it => {
    getCurrentTime()
    console.log('ID：', mid, '积分抽奖结果：', it);
  }).catch(err => {
    console.log(err);
  })
}

// 大转盘抽奖
function chou2 (mid, ua) {
  runExec(chouUrl2(mid, ua)).then(it => {
    getCurrentTime()
    console.log('ID：', mid, '大转盘抽奖结果：', it);
  }).catch(err => {
    console.log(err);
  })
}

// 积分雨活动
function jifenyu (mid, ua) {
  runExec(jifenyuUrl(mid)).then(it => {
    getCurrentTime()
    console.log('ID：', mid, '积分雨抽奖结果：', it);
  }).catch(err => {
    console.log(err);
  })
}

// 连连看 活动
function lianliankan (mid, ua) {
  runExec(lianliankanUrl(mid, ua)).then(it => {
    getCurrentTime()
    console.log('ID：', mid, '连连看抽奖结果：', it);
  }).catch(err => {
    console.log(err);
  })
}





// 任务
async function task () {
  getIds().map(async mid => {
    const ua = UA.USER_AGENT;
    await sign(mid, ua); // 签到
    await randSleep();

    await await dazhuanpan(mid, ua); // 大转盘 签到
    await randSleep();

    await chou2(mid, ua); // 大转盘抽奖
    await randSleep();

    await chou2(mid, ua);
    await randSleep();

    await chou2(mid, ua);
    await randSleep();

    await chou(mid, ua); // 积分抽奖
    await randSleep();

    await chou(mid, ua);
    await randSleep();

    await chou(mid, ua);
    await randSleep();

    await jifenyu(mid, ua) // 积分雨

    await lianliankan(mid, ua) // 连连看
    await randSleep();

    await lianliankan(mid, ua)
    await randSleep();

    await lianliankan(mid, ua)
    await randSleep();


  })
}

task()









//

