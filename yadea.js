const qdArr =[
`curl -H 'Host: 100000800589.retail.n.weimob.com' -H 'Cookie: pluto=7I84OJSvsV9_t5I5LnDPTFDDOwwUEAqI; rprm_cuid=403775578n2dt2n4pavo; LIVE_MIN_CODE=; saas.express.session=s%3A7I84OJSvsV9_t5I5LnDPTFDDOwwUEAqI.iJKeaDGw7vBoCx6cBzmTTIPXn48TMPmq01Y3bTawta0; rprm_appShowId2=-kk9o7b32t7jupc2qb8' -H 'content-type: application/json; charset=utf-8' -H 'pragma: no-cache' -H 'accept: application/json' -H 'weimob-wid: 2288382212' -H 'accept-language: zh-cn' -H 'cache-control: no-cache' -H 'origin: https://100000800589.retail.n.weimob.com' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/2.6.1(0x12060113) NetType/WIFI WindowsWechat' -H 'referer: https://100000800589.retail.n.weimob.com/saas/retail/100000800589/2172935589/market/signforward/index?shareChannel=1&rsShareWid=2288382212' -H 'weimob-pid: 100000800589' --data-binary '{"pid":"100000800589","storeId":2172935589,"wid":"2288382212","refer":"sign","source":2}' --compressed 'https://100000800589.retail.n.weimob.com/api3/misc/sign/activity/core/c/paasValidate'`
];

const info = [
	`curl -H 'Host: 100000800589.retail.n.weimob.com' -H 'Cookie: pluto=7I84OJSvsV9_t5I5LnDPTFDDOwwUEAqI; rprm_cuid=403775578n2dt2n4pavo; LIVE_MIN_CODE=; rprm_appShowId2=-kk9p9mj2gelms7ft0ee; saas.express.session=s%3A7I84OJSvsV9_t5I5LnDPTFDDOwwUEAqI.iJKeaDGw7vBoCx6cBzmTTIPXn48TMPmq01Y3bTawta0' -H 'content-type: application/json; charset=utf-8' -H 'pragma: no-cache' -H 'accept: application/json' -H 'weimob-wid: 2288382212' -H 'accept-language: zh-cn' -H 'cache-control: no-cache' -H 'origin: https://100000800589.retail.n.weimob.com' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/2.6.1(0x12060113) NetType/WIFI WindowsWechat' -H 'referer: https://100000800589.retail.n.weimob.com/saas/retail/100000800589/2172935589/user/member/center' -H 'weimob-pid: 100000800589' --data-binary '{"pid":"100000800589","storeId":2172935589,"wid":"2288382212","refer":"mine","source":2,"isMerchantPageRecommend":false}' --compressed 'https://100000800589.retail.n.weimob.com/api3/ec/user/info/getUserCenterInfo'`
]

const exec = require('child_process').exec;

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


// 签到
function qd (arr) {
	arr.map(async item => {
		// await sleep(rand(3, 5) * 1000);
		runExec(item).then(it => {
			const res =JSON.parse(it)
			if(res.errcode==="0"){
				console.log(it);
			}else {
				dd('yadea 签到token失效，请重新获取token')
			}
		}).catch(err => {

		})
	})
}

// 获取用户信息
function getInfo (arr) {
	arr.map(async item => {
		// await sleep(rand(3, 5) * 1000);
		runExec(item).then(it => {
			const res =JSON.parse(it)
			if(res.errcode==="0"){
				const value = res.data.modules[2].moduleContent.items[1].value
				if(Number(value)>1200){
					dd(`yadea当前积分为${value},快去兑换商品吧`)
				}
			}else {

			}
		}).catch(err => {
			dd(`yadea 接口已经变化，快去看看`)
		})
	})
}

getInfo(info);
qd(qdArr);


function dd(str) {
	let url = `curl 'https://oapi.dingtalk.com/robot/send?access_token=75d5d35ec52975b87baf3abf889fd0c83d7e20fb1bc1c2e118ee0fa7face8163' \
   -H 'Content-Type: application/json' \
   -d '{"msgtype": "text","text": {"content": "测试:${str}"}}'`;
	runExec(url).then((std) => {
		console.log(std);
	}).catch(err => {
		console.log(err);
	})
}

function rand (min, max) {
	return Math.random() * (max - min + 1) + min | 0; //特殊的技巧，|0可以强制转换为整数
}

function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}



