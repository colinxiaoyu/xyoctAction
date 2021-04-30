const axios = require('axios');
const fs = require('fs');

const USERCODE1 = process.env.USERCODE1;
const USERCODE2 = process.env.USERCODE2;
const USERCODE3 = process.env.USERCODE3;
const USERCODE4 = process.env.USERCODE4;
const USERCODE5 = process.env.USERCODE5; //114133  副作用号

const Url = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=QianDao&memberid=`;// 签到
const dazhuanpanUrl = 'https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=HuoDongJiFen&eventid=6&score=5&memberid='; // 大转盘签到

const chouUrl = 'https://www.xyoct.com/choujiang0528/webserver/AjaxApi.aspx?Type=ChouJiang&memberID=';// 积分抽奖
const chouUrl2 = 'https://www.xyoct.com/hqczp622/webserver/AjaxApi.aspx?Type=ChouJiang&memberID=';// 大转盘抽奖


const teaUrl = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=WanChengChaYuanRenWu&move=Free&mid=`;//领取茶叶
const signTeaUrl = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=WanChengChaYuanRenWu&move=Sign&mid=`; // 签到
const shareTeaUrl = 'https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=WanChengChaYuanRenWu&move=Share&mid='; //分享
const applyTeaUrl = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=ShiFei&mid=`; //施肥
const guangTeaUrl = `https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=WanChengChaYuanRenWu&move=View&mid=`// 逛一逛

const birthRight = 'https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=ShengRiTeQuan&memberid=104082'// 生日权益

// const zanUR=`https://www.xyoct.com/xiaochengxu/XiaoChengXuApi.aspx?type=DianZan`; // 点赞
// for(let i=45;i<0;i++){
//   getMessage(zanUR+`&eventid=${i}&memberid=`+USERCODE1);
//   getMessage(zanUR+`&eventid=${i}&memberid=`+USERCODE2);
// }

 function getScore  (mid) {
  // 签到
  getMessage(Url + mid);
  // 大转盘签到
  getMessage(dazhuanpanUrl + mid);
  // 积分抽奖 三次机会
  postMessage(chouUrl + mid);
  postMessage(chouUrl + mid);
  postMessage(chouUrl + mid);
  // 大转盘抽奖 三册机会
  postMessage(chouUrl2 + mid);
  postMessage(chouUrl2 + mid);
  postMessage(chouUrl2 + mid);
  // 茶叶相关  活动已取消
  // getMessage(teaUrl + mid);
  // getMessage(signTeaUrl + mid);
  // getMessage(shareTeaUrl + mid);//分享三次
  // getMessage(shareTeaUrl + mid);
  // getMessage(shareTeaUrl + mid);
  // getMessage(guangTeaUrl + mid);
  // getMessage(applyTeaUrl+mid);
}

getScore(USERCODE1);
getScore(USERCODE2);
getScore(USERCODE3);
getScore(USERCODE4);
getScore(USERCODE5);

function getMessage (url) {
  axios({
    url: url,
    method: 'get',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
  }).then(res => {
    if (res.data.State === -1) {
    } else {
    }
  }).catch(e => console.log('error', e))
}

function postMessage (url) {
  axios({
    url: url,
    method: 'post',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(res => {
  }).catch(e => console.log('error', e))
}

