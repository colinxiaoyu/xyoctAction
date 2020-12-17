const axios = require('axios');
const fs = require('fs');

const USERCODE1 = process.env.USERCODE1;
const USERCODE2 = process.env.USERCODE2;

const Url = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=QianDao&memberid=`;// 签到
const chouUrl = 'https://www.xyoct.com/choujiang0528/webserver/AjaxApi.aspx?Type=ChouJiang&memberID=';// 抽奖


const teaUrl = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=WanChengChaYuanRenWu&move=Free&mid=`;//领取茶叶
const signTeaUrl = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=WanChengChaYuanRenWu&move=Sign&mid=`; // 签到
const shareTeaUrl = 'https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=WanChengChaYuanRenWu&move=Share&mid='; //分享
const applyTeaUrl = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=ShiFei&mid=`; //施肥
const guangTeaUrl = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=WanChengChaYuanRenWu&move=View&mid=`// 逛一逛

// const zanUR=`https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=DianZan`; // 点赞
// 45
// for(let i=45;i<0;i++){
//   getMessage(zanUR+`&eventid=${i}&memberid=`+USERCODE1);
//   getMessage(zanUR+`&eventid=${i}&memberid=`+USERCODE2);
// }

function getScore (mid) {
  // 签到
  getMessage(Url + mid);
  // 抽奖 三次机会
  postMessage(chouUrl + mid);
  postMessage(chouUrl + mid);
  postMessage(chouUrl + mid);
  // 茶叶相关
  getMessage(teaUrl + mid);
  getMessage(signTeaUrl + mid);
  getMessage(shareTeaUrl + mid);//分享三次
  getMessage(shareTeaUrl + mid);
  getMessage(shareTeaUrl + mid);
  getMessage(Url + mid);
  getMessage(guangTeaUrl + mid);
  // getMessage(applyTeaUrl+mid);
}

getScore(USERCODE1);
getScore(USERCODE2);

function getMessage (url) {
  axios({
    url: url,
    method: 'get',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
  }).then(res => {
    console.log(res.data)
    if (res.data.State === -1) {
      log(res.data);
    } else {
      log(res.data);
    }
  })
}

function postMessage (url) {
  axios({
    url: url,
    method: 'post',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(res => {
    console.log('responseData', res.data)
  }).catch(e => console.log('error', e))
}

function log (data) {
  // fs.appendFileSync('log.txt', `当前时间：${toTime()}`+'\r');
  // fs.appendFileSync('log.txt', JSON.stringify(data)+'\r');
  console.log('data')
}


function toTime () {
  const date = new Date();
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  const h = date.getHours() + ':';
  const m = date.getMinutes() + '   ';
  const s = date.getMilliseconds();
  return Y + M + D + h + m + s;
}
