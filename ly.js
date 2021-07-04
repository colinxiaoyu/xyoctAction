// https://custom.luyuan.cn/custom/wechat/usercenter.html?code=061x8AFa1WFvnA0vsIGa102mSd3x8AFl&state=STATE&usercode=20210122093525742EVYB54Y
// 每天签到
function dd (str) {
  let url = `curl 'https://oapi.dingtalk.com/robot/send?access_token=75d5d35ec52975b87baf3abf889fd0c83d7e20fb1bc1c2e118ee0fa7face8163' \
   -H 'Content-Type: application/json' \
   -d '{"msgtype": "text","text": {"content": "测试:${str}"}}'`;
  runExec(url).then((std) => {
    console.log(std);
  }).catch(err => {
    console.log(err);
  })
}

let qdArr = [
  `curl -H 'Host: custom.luyuan.cn' -H 'Accept: */*' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: http://custom.luyuan.cn' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://custom.luyuan.cn/custom/wechat/integral_index.html?usercode=20210122093525742EVYB54Y&timestamp=${new Date().getTime()}' -H 'Cookie: UM_distinctid=1764bb00e662c3-047fdd2377a0e98-5260777a-4a574-1764bb00e67118' --data-binary "usercode=20210122093525742EVYB54Y" --compressed 'http://custom.luyuan.cn/custom/signin/add'`,
];

// colin
const u1 = "20210122093525742EVYB54Y";
const c1 = 'UM_distinctid=17727cff70595e-0299b9192ab792-326f7000-1aeaa0-17727cff706ae1; CNZZDATA1278518534=102934229-1611275946-http%253A%252F%252Fcustom.luyuan.cn%252F%7C1611289332; index.html=5820; XSRF-TOKEN=eyJpdiI6IjI5WG9ocXNXdXBuOEZDTEpnajBEbFE9PSIsInZhbHVlIjoiQ3oxcXdHZGRmM0FMcjlmXC9FM1E2eEpBTnNYTk43d0h4ZlRKZWl0ZnpRZ3BYeUhudlwvM3o2dVV2dGpqVGU3dG1Od2dKU1VFUWdLdStlRVBWQUJpSldOZz09IiwibWFjIjoiZGM5MjkwOTZmNDZkYWUyNWRmZWRiMzZiOTlkNjAzNjhlMGRhYzMwOTJjNTNhZmQ1ODJkZjcxNGI3ODA3ZmE1OSJ9; laravel_session=eyJpdiI6Imx6UExtZ1c2MUhZQjNjNGNwTlBOM3c9PSIsInZhbHVlIjoiaVYxdFhZZmJad0dKSSsxcTg1dENkZzVnRnk0RVFzc2FYV2xSNk9jV1hxYjY5Y2xBUnNucHZER1I1YlRQVlRpVkZqenZETkFWWHBxalwvMStZQ3hFNDNBPT0iLCJtYWMiOiI4NDA0M2RhOTA0OTY2YzZmZjhiOGZhNjk4ZTRiODMyYTQzNjY1MDUzMmVmMjE1OGUzZmViMmMwODFkNzc0ZTJmIn0%3D';


let uArr = [u1];
let cArr = [c1];
let fb = [
  `curl -H 'Host: forum.luyuan.cn' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'Accept: */*' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: http://forum.luyuan.cn' -H 'Referer: http://forum.luyuan.cn/web_html/article_add.html' -H 'Accept-Language: zh-CN,zh;q=0.9' -H 'Cookie: UM_distinctid=17727cff70595e-0299b9192ab792-326f7000-1aeaa0-17727cff706ae1; CNZZDATA1278518534=102934229-1611275946-http%253A%252F%252Fcustom.luyuan.cn%252F%7C1611289332; XSRF-TOKEN=eyJpdiI6InJuR0wwUTIzVVQrQlpubnUrMmdkZVE9PSIsInZhbHVlIjoiOWRYMDExTFZ0elRcL21xYXBQcGZNSGM4eHBcL0c0aFAybVZZUzhMdElOdTE5XC9IYzM3QThZWHg5MzlPSGtaVVhZVGdsV3VHWkZ4a2QrQ3RFblpwckdJN0E9PSIsIm1hYyI6IjZjOGZiNzZkNzBhZGRiYWFhY2UzNzk0YTU4MThmMzJhNDQyZGQxMDMyZjhiMjk3NTUyMDI4ZWUzYWNlMTYwYTcifQ%3D%3D; laravel_session=eyJpdiI6InRiVkJHYjNtZ3lxYjVzN3IrM2crK3c9PSIsInZhbHVlIjoiVForVXJQeFFyWFdUM1ZLemt6YW4rTGNpbWhwXC9xZTZzOXBpNWt4V2ErRGtEZzYxSXU1RVV2cjEyTHEzeVBTbk9cLzU0MnhLZm93bFFrNVRKOTRcL1wvSlR3PT0iLCJtYWMiOiI0ZjUxODJkOGMxZmMzOWRjZjgyMmMxYjVlYTllNzI2YzAzNDljZTM0MDM5YzY2MWE5YmQ0ZTA0M2UyYjBjOTdjIn0%3D' --data-binary "title=%E7%BB%BF%E6%BA%90%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%BE%88%E5%A5%BD&content=%E6%88%91%E5%AE%B6%E4%B9%B0%E4%BA%86%E4%B8%89%E8%BE%86%E7%94%B5%E5%8A%A8%E8%BD%A6+%EF%BC%8C%E9%83%BD%E6%98%AF%E7%BB%BF%E6%BA%90%E7%9A%84&type=%E4%B9%B0%E5%AE%B6%E7%A7%80" --compressed 'http://forum.luyuan.cn/api/article_add'`,
  `curl -H 'Host: forum.luyuan.cn' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'Accept: */*' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: http://forum.luyuan.cn' -H 'Referer: http://forum.luyuan.cn/web_html/article_add.html' -H 'Accept-Language: zh-CN,zh;q=0.9' -H 'Cookie: UM_distinctid=17727cff70595e-0299b9192ab792-326f7000-1aeaa0-17727cff706ae1; CNZZDATA1278518534=102934229-1611275946-http%253A%252F%252Fcustom.luyuan.cn%252F%7C1611289332; XSRF-TOKEN=eyJpdiI6InJuR0wwUTIzVVQrQlpubnUrMmdkZVE9PSIsInZhbHVlIjoiOWRYMDExTFZ0elRcL21xYXBQcGZNSGM4eHBcL0c0aFAybVZZUzhMdElOdTE5XC9IYzM3QThZWHg5MzlPSGtaVVhZVGdsV3VHWkZ4a2QrQ3RFblpwckdJN0E9PSIsIm1hYyI6IjZjOGZiNzZkNzBhZGRiYWFhY2UzNzk0YTU4MThmMzJhNDQyZGQxMDMyZjhiMjk3NTUyMDI4ZWUzYWNlMTYwYTcifQ%3D%3D; laravel_session=eyJpdiI6InRiVkJHYjNtZ3lxYjVzN3IrM2crK3c9PSIsInZhbHVlIjoiVForVXJQeFFyWFdUM1ZLemt6YW4rTGNpbWhwXC9xZTZzOXBpNWt4V2ErRGtEZzYxSXU1RVV2cjEyTHEzeVBTbk9cLzU0MnhLZm93bFFrNVRKOTRcL1wvSlR3PT0iLCJtYWMiOiI0ZjUxODJkOGMxZmMzOWRjZjgyMmMxYjVlYTllNzI2YzAzNDljZTM0MDM5YzY2MWE5YmQ0ZTA0M2UyYjBjOTdjIn0%3D' --data-binary "title=%E7%BB%BF%E6%BA%90%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%BE%88%E5%A5%BD&content=%E6%88%91%E5%AE%B6%E4%B9%B0%E4%BA%86%E4%B8%89%E8%BE%86%E7%94%B5%E5%8A%A8%E8%BD%A6+%EF%BC%8C%E9%83%BD%E6%98%AF%E7%BB%BF%E6%BA%90%E7%9A%84&type=%E4%B9%B0%E5%AE%B6%E7%A7%80" --compressed 'http://forum.luyuan.cn/api/article_add'`
];
const plArr = [
  encodeURIComponent('好文章!'),
  encodeURIComponent('厉害!'),
  encodeURIComponent('good!!!'),
  encodeURIComponent('nice!'),
  encodeURIComponent('哈哈哈哈哈!'),
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

// 最后信息
function xx (arr) {
  let url = (usercode) => `curl -H 'Host: custom.luyuan.cn' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36' -H 'X-Requested-With: XMLHttpRequest' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Dest: empty' -H 'Referer: https://custom.luyuan.cn/custom/wechat/usercenter.html?code=061x8AFa1WFvnA0vsIGa102mSd3x8AFl&state=STATE&usercode=20210122093525742EVYB54Y' -H 'Accept-Language: zh-CN,zh;q=0.9' -H 'Cookie: UM_distinctid=17727cff70595e-0299b9192ab792-326f7000-1aeaa0-17727cff706ae1' --compressed 'https://custom.luyuan.cn/custom/userprofile/fetch?usercode=20210122093525742EVYB54Y&_=1611308816449'`;
  arr.map(async item => {
    runExec(url(item)).then(data => {
      const a = JSON.parse(data);

      const integral = a['userprofile']['integral'];
      const cellphone = a['userprofile']['cellphone'];
      if (integral > 10000) {
        dd(`${cellphone}的积分为: ${integral} ,快去换东西去吧`);
      }
    }).catch(err => {
      console.log(err);
    })
  });

}


// 社区内容
function sh () {
  let url = `curl -H 'Host: forum.luyuan.cn' -H 'Cookie: CNZZDATA1278518534=1775368182-1607587288-%7C1607646420; XSRF-TOKEN=eyJpdiI6InpOUWtqc1wvc1k0VndrcHV3aHNLWVB3PT0iLCJ2YWx1ZSI6ImRoQjJxc0g4aVpqaGdkUlFNWStUZzRCanJieWFQUVwvUmNPRllralhzcitIeXROSzhQekZlMkpjb01ETGJiOVBcLzZtaVpqRGVTSWcyN3Z5SHFzaHZ3RXc9PSIsIm1hYyI6ImJjMjc4ODljNTY0MjlhYzBiYTg4MGUzMjkxNjczYWI3OTYxMDYwMDliMDZmNjFmZDZmODFmODAzNDZjMjdkOTkifQ%3D%3D; laravel_session=eyJpdiI6InRGMUVubjI1UjZcL1N4VXRjeHVacm93PT0iLCJ2YWx1ZSI6IktPaVdqWXV3bHc4dkN6a1FHRXZWNFEwQ3k1SURaWXVOV3JZUWxzVGp5XC8zYU9EajZmVXdOOVAzaThZcVVkYTlwYnNRNXY3a0x4ekFKV2FEWEFrbkhXdz09IiwibWFjIjoiNmViYjcwYmM5YjA3OTAxMDRiZGFmMzYxMjFiNjg1NDFjMDFhZjBmMWVjMDRkMzU1MDJlMGU1MjUwMzkzNjkwMCJ9; UM_distinctid=1764bb00e662c3-047fdd2377a0e98-5260777a-4a574-1764bb00e67118' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/index.html?t=rec' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/article_list?type=rec&last_id='`
  runExec(url).then(async d => {
    let data = JSON.parse(d);
    let ids = [];
    console.log(data.length);
    for (let i = 0; i < 6; i++) {
      ids.push(data[rand(1, 100)]['id']);
    }
    console.log('ids', ids);
    dianzan(ids);
    pinglun(ids);
    await sleep(rand(1, 3) * 1000);

  }).catch(err => {
    console.log(err);
  });
}


async function dianzan (ids) {
  let url = (Cookie, id, t = 1) => `curl -H 'Host: forum.luyuan.cn' -H '${Cookie}' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/article_detail.html?id=${id}' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/praise?type=%E5%B8%96%E5%AD%90&object_id=${id}&num=${t}'`;
  for (let index = 0; index < cArr.length; index++) {
    const c = cArr[index];
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      await sleep(rand(1, 3) * 1000);
      // 点赞
      runExec(url(c, id, 1)).then(_ => {
        console.log('点赞');
        //   取消赞
        runExec(url(c, id, -1)).then(_ => {

        }).catch(err => {

        })
      }).catch(err => {

      })
    }
  }
}

async function dzan (ids, index) {
  let url = (Cookie, id, t = 1) => `curl -H 'Host: forum.luyuan.cn' -H '${Cookie}' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/article_detail.html?id=${id}' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/praise?type=%E5%B8%96%E5%AD%90&object_id=${id}&num=${t}'`;

  const c = cArr[index];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    await sleep(rand(1, 3) * 1000);
    // 取消赞
    runExec(url(c, id, -1)).then(_ => {
      // 点赞
      runExec(url(c, id, 1)).then(_ => {
        // console.log(_);
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    })
  }

}

async function pinglun (ids) {
  let url = (Cookie, id, content) => `curl -H 'Host: forum.luyuan.cn' -H '${Cookie}' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/article_detail.html?id=${id}' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/article_comment?content=${content}&article_id=${id}'`;
  for (let index = 0; index < cArr.length; index++) {
    const c = cArr[index];
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      await sleep(rand(4, 8) * 1000);
      // 评论
      runExec(url(c, id, plArr[rand(1, plArr.length)])).then(_ => {
        console.log(_);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}

async function plun (ids, index) {
  let url = (Cookie, id, content) => `curl -H 'Host: forum.luyuan.cn' -H '${Cookie}' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/article_detail.html?id=${id}' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/article_comment?content=${content}&article_id=${id}'`;

  const c = cArr[index];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    await sleep(rand(4, 8) * 1000);
    // 评论
    runExec(url(c, id, plArr[rand(1, plArr.length)])).then(_ => {
      console.log(_);
    }).catch(err => {
      console.log(err);
    })
  }

}


async function fbxx (fb) {
  for (let index = 0; index < 2; index++) {
    await sleep(rand(4, 8) * 1000);
    fb.map(url => {
      runExec(url).then(d => {
        console.log('fbxx ', d);
      }).catch(err => {
        console.log(err);
      })
    });
  }
}

async function ll (arrr) {
  arrr.map(async (it, index) => {
    await sleep(rand(4, 8) * 1000);
    runExec(it).then(async d => {
      const ddd = await JSON.parse(d);
      let ids = [];
      for (let i = 0; i < ddd.length; i++) {
        const id = ddd[i]['id'];
        ids.push(id);
      }
      if (index === 0) {
        plun(ids, 1);
        dzan(ids, 1);
      } else {
        plun(ids, 0);
        dzan(ids, 0);
      }
    }).catch(err => {
      console.error(err);
    })
  });
}

// dd('123123')
// const ab = async () => {
//   // 每天签到
//   qd(qdArr);
//   await sleep(rand(4, 8) * 1000);
//   // 先发布内容
//   fbxx(fb);
//   await sleep(rand(4, 8) * 1000);
//   // 内容评论点赞
//   ll(cly.jscly.js);
//   await sleep(rand(4, 8) * 1000);
//   // 社区内容点赞评论等
//   sh();
//   await sleep(rand(4, 8) * 1000);
//   // 最后查看信息
//   xx(uArr);
// }


// ab()

var axios = require('axios');

function ddBotNotify(text, desp) {

  let ddd = {
    "msgtype": "markdown",
    "markdown": {
      "title": '线上 App 崩溃了',
      "text": `# 测试`
    }
  };
  let DD_BOT_TOKEN = '75d5d35ec52975b87baf3abf889fd0c83d7e20fb1bc1c2e118ee0fa7face8163';

  axios({
    method: 'post',
    url: `https://oapi.dingtalk.com/robot/send?access_token=${DD_BOT_TOKEN}`,
    data: ddd
  }).then(function(response) {
    console.log(response.data);
  });

  
}

ddBotNotify()


