
// 每天签到

// 'https://lzdz-isv.isvjcloud.com/dingzhi/mn9/sign/sign'  蒙牛
let qdArr = [
  // 蒙牛 签到 Cookie:  LZ_TOKEN_KEY=lztokenpage767318ce0ed34e078ee6ca8013e44557  规则无法确定
  // `curl -H 'Host: lzdz-isv.isvjcloud.com' -H 'Accept: application/json' -H 'Origin: https://lzdz-isv.isvjcloud.com' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: jdapp;android;8.5.4;9;865334037231088-d0ff98579980;network/wifi;model/VTR-AL00;addressid/-882321320;aid/d44463b28c3d10f4;oaid/9be9deed-f97c-b589-dffa-ecd76bbbc79a;osVer/28;appBuild/72032;partner/huawei;Mozilla/5.0 (Linux; Android 9; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36' -H 'Referer: https://lzdz-isv.isvjcloud.com/dingzhi/mn9/sign/activity?activityId=dz2101100001480309&lng=116.463218&lat=40.007619&sid=17685d410bc77666b101e799f5e4a22w&un_area=1_2901_4135_0' -H 'Accept-Language: zh-CN,en-US;q=0.9' -H 'Cookie: LZ_TOKEN_KEY=lztokenpage332bb04e9dbc48a191b81d9eee10bea0; LZ_TOKEN_VALUE=Aa5RE87N+tmRuY4X3zXrxA==' --data "activityId=dz2101100001480309&actorUuid=18f831e6568141a4bc2cd137f66cc93a" --compressed 'https://lzdz-isv.isvjcloud.com/dingzhi/mn9/sign/sign'`,
  // `curl -H 'Host: lzdz-isv.isvjcloud.com' -H 'Accept: application/json' -H 'Origin: https://lzdz-isv.isvjcloud.com' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: jdapp;android;8.5.4;9;865334037231088-d0ff98579980;network/wifi;model/VTR-AL00;addressid/-882321320;aid/d44463b28c3d10f4;oaid/9be9deed-f97c-b589-dffa-ecd76bbbc79a;osVer/28;appBuild/72032;partner/huawei;Mozilla/5.0 (Linux; Android 9; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36' -H 'Referer: https://lzdz-isv.isvjcloud.com/dingzhi/mn9/sign/activity?activityId=dz2101100001480309&lng=116.462979&lat=40.007782&sid=17685d410bc77666b101e799f5e4a22w&un_area=1_2901_4135_0' -H 'Accept-Language: zh-CN,en-US;q=0.9' -H 'Cookie: LZ_TOKEN_KEY=lztokenpage767318ce0ed34e078ee6ca8013e44557;  LZ_TOKEN_VALUE=Aa5RE87N+tmRuY4X3zXrxA==;' --data "activityId=dz2101100001480309&actorUuid=18f831e6568141a4bc2cd137f66cc93a" --compressed 'https://lzdz-isv.isvjcloud.com/dingzhi/mn9/sign/sign'`,
  // 海尔 签到  Cookie 仅 mba_muid  有用
  // `curl -H 'Host: cjhy-isv.isvjcloud.com' -H 'Accept: application/json' -H 'Origin: https://cjhy-isv.isvjcloud.com' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: jdapp;android;8.5.4;9;865334037231088-d0ff98579980;network/wifi;model/VTR-AL00;addressid/-882321320;aid/d44463b28c3d10f4;oaid/9be9deed-f97c-b589-dffa-ecd76bbbc79a;osVer/28;appBuild/72032;partner/huawei;Mozilla/5.0 (Linux; Android 9; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36' -H 'Referer: https://cjhy-isv.isvjcloud.com/sign/signActivity?activityId=235666f1db8d4305aefda403ace47f75&venderId=1000001782&lng=116.463475&lat=40.007849&sid=17685d410bc77666b101e799f5e4a22w&un_area=1_2901_4135_0' -H 'Accept-Language: zh-CN,en-US;q=0.9' -H 'Cookie: IsvToken=AAFgEh-dADCPKvX0lpJvBBoa0nkVxAmEaIoyYCgSWaum21cSLVfr9hfURIrZvGqzvhcHLk_s1hg; __jdc=60969652; __jdv=60969652%7Csc.ftqq.com%7Ct_1002896812_%7Ctuiguang%7Cedc1d786d40b4c779e8a44770ce21783%7C1611213972156; __jda=60969652.16111191985941274176593.1611119198.1611736710.1611796421.4; APP_ABBR=CJHY; pre_session=865334037231088-d0ff98579980|346; AUTH_C_USER=kHgabQ035c7bgl+M084ppdA1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w==; __jdb=60969652.14.16111191985941274176593|4.1611796421; mba_sid=348.27; pre_seq=25; __jd_ref_cls=v_shop; mba_muid=16111191985941274176593.348.1611800497793' --data "actId=235666f1db8d4305aefda403ace47f75&pin=kHgabQ035c7bgl%252BM084ppdA1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%253D%253D" --compressed 'https://cjhy-isv.isvjcloud.com/sign/wx/signUp'`,
  // 伊利 签到
  `curl -H 'Host: lzkj-isv.isvjcloud.com' -H 'Accept: application/json' -H 'Origin: https://lzkj-isv.isvjcloud.com' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: jdapp;android;8.5.4;9;865334037231088-d0ff98579980;network/wifi;model/VTR-AL00;addressid/-882321320;aid/d44463b28c3d10f4;oaid/9be9deed-f97c-b589-dffa-ecd76bbbc79a;osVer/28;appBuild/72032;partner/huawei;Mozilla/5.0 (Linux; Android 9; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36' -H 'Referer: https://lzkj-isv.isvjcloud.com/sign/signActivity2?activityId=d126338f4c5f42bca46ba7b0bbe9bc11&venderId=1000013402&lng=116.463475&lat=40.007849&sid=17685d410bc77666b101e799f5e4a22w&un_area=1_2901_4135_0' -H 'Accept-Language: zh-CN,en-US;q=0.9' -H 'Cookie: IsvToken=AAFgEiH9ADD-dOK27zlBcxcDalBj1lbXqiOZekKhBKE1BSlKHuENEPWkHb6QXPNQdB9szWP87ik; __jdc=60969652; __jdv=60969652%7Csc.ftqq.com%7Ct_1002896812_%7Ctuiguang%7Cedc1d786d40b4c779e8a44770ce21783%7C1611213972156; JSESSIONID=6402051145762BF12202C1BF62B18594; __jda=60969652.16111191985941274176593.1611119198.1611736710.1611796421.4; pre_session=865334037231088-d0ff98579980|346; LZ_TOKEN_KEY=lztokenpage5253b73c576848f480e8eeffba19d2ad; __jdb=60969652.15.16111191985941274176593|4.1611796421; mba_sid=348.46; pre_seq=44; AUTH_C_USER=kHgabQ035c7bgl+M084ppU7oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w==; LZ_TOKEN_VALUE=2QCVCunNfd1vb7FpdSH+VQ==; __jd_ref_cls=join; mba_muid=16111191985941274176593.348.1611801107513' --data "actId=d126338f4c5f42bca46ba7b0bbe9bc11&pin=kHgabQ035c7bgl%2BM084ppU7oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w%3D%3D" --compressed 'https://lzkj-isv.isvjcloud.com/sign/wx/signUp'`,
  // 长虹* 美菱
  `curl -H 'Host: lzkj-isv.isvjcloud.com' -H 'Accept: application/json' -H 'Origin: https://lzkj-isv.isvjcloud.com' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: jdapp;android;8.5.4;9;865334037231088-d0ff98579980;network/wifi;model/VTR-AL00;addressid/-882321320;aid/d44463b28c3d10f4;oaid/9be9deed-f97c-b589-dffa-ecd76bbbc79a;osVer/28;appBuild/72032;partner/huawei;Mozilla/5.0 (Linux; Android 9; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36' -H 'Referer: https://lzkj-isv.isvjcloud.com/sign/sevenDay/signActivity?activityId=a4e40dfa318b4fd7b15261bcc47b0a3e&venderId=1000000937&lng=116.462979&lat=40.007782&sid=17685d410bc77666b101e799f5e4a22w&un_area=1_2901_4135_0' -H 'Accept-Language: zh-CN,en-US;q=0.9' -H 'Cookie: IsvToken=AAFgEiV9ADDqaAPW6Ue0DgG-wz1PZ_MNAaZweHbs-N6vab9NML9O9S7m1R-vfwnFiDNBv6Bdkxc; IsvToken=AAFgEiH9ADD-dOK27zlBcxcDalBj1lbXqiOZekKhBKE1BSlKHuENEPWkHb6QXPNQdB9szWP87ik; __jdc=60969652; __jdv=60969652%7Csc.ftqq.com%7Ct_1002896812_%7Ctuiguang%7Cedc1d786d40b4c779e8a44770ce21783%7C1611213972156; JSESSIONID=6402051145762BF12202C1BF62B18594; __jda=60969652.16111191985941274176593.1611119198.1611736710.1611796421.4; AUTH_C_USER=kHgabQ035c7bgl+M084ppU7oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w==; pre_session=865334037231088-d0ff98579980|347; LZ_TOKEN_KEY=lztokenpage7077f0de1bb44532a5117c42d78680a4; __jdb=60969652.20.16111191985941274176593|4.1611796421; mba_sid=349.42; pre_seq=41; __jd_ref_cls=Mnpm_ComponentApplied; mba_muid=16111191985941274176593.349.1611801983561; LZ_TOKEN_VALUE=mSKz5uMofBC8YxBreqYNwA==' --data "actId=a4e40dfa318b4fd7b15261bcc47b0a3e&pin=kHgabQ035c7bgl%2BM084ppU7oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w%3D%3D" --compressed 'https://lzkj-isv.isvjcloud.com/sign/sevenDay/wx/signUp'`,
  // 抽奖
  `curl -H 'Host: lzkj-isv.isvjcloud.com' -H 'Accept: application/json' -H 'Origin: https://lzkj-isv.isvjcloud.com' -H 'X-Requested-With: XMLHttpRequest' -H 'User-Agent: jdapp;android;8.5.4;9;865334037231088-d0ff98579980;network/wifi;model/VTR-AL00;addressid/-882321320;aid/d44463b28c3d10f4;oaid/9be9deed-f97c-b589-dffa-ecd76bbbc79a;osVer/28;appBuild/72032;partner/huawei;Mozilla/5.0 (Linux; Android 9; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36' -H 'Referer: https://lzkj-isv.isvjcloud.com/wxDrawActivity/activity/2fba83b451694145964f44714da94d24?activityId=2fba83b451694145964f44714da94d24&lng=116.462979&lat=40.007782&sid=17685d410bc77666b101e799f5e4a22w&un_area=1_2901_4135_0' -H 'Accept-Language: zh-CN,en-US;q=0.9' -H 'Cookie: __jdc=60969652; __jdv=60969652%7Csc.ftqq.com%7Ct_1002896812_%7Ctuiguang%7Cedc1d786d40b4c779e8a44770ce21783%7C1611213972156; JSESSIONID=6402051145762BF12202C1BF62B18594; __jda=60969652.16111191985941274176593.1611119198.1611736710.1611796421.4; AUTH_C_USER=kHgabQ035c7bgl+M084ppU7oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w==; pre_session=865334037231088-d0ff98579980|347; LZ_TOKEN_KEY=lztokenpage1928f5be334d4f029af42cad9abb0c9d; __jdb=60969652.25.16111191985941274176593|4.1611796421; mba_sid=349.60; pre_seq=59; __jd_ref_cls=Mnpm_ComponentApplied; mba_muid=16111191985941274176593.349.1611802262107; LZ_TOKEN_VALUE=MHmwjJTSUs8s4xvc/595hw==' --data "activityId=2fba83b451694145964f44714da94d24&pin=kHgabQ035c7bgl%2BM084ppU7oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w%3D%3D" --compressed 'https://lzkj-isv.isvjcloud.com/wxPointDrawActivity/start'`


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
    // await sleep(rand(3, 5) * 1000);
    runExec(item).then(it => {
      console.log('it',it);
    }).catch(err => {
      console.log('err',err);
    })
  })

}


// 每天签到
qd(qdArr);


