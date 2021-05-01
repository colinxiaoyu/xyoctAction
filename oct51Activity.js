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


// 100689
// 114133
// const midArr = [100689,114133];

const {USERCODE1,USERCODE2,USERCODE3,USERCODE4,USERCODE5} = process.env;

const midArr =[USERCODE1,USERCODE2,USERCODE3,USERCODE4,USERCODE5];

const signUrl =(mid)=>`curl -H 'Host: hongbao.juzhen.co' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://hongbao.juzhen.co' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/3.0.2(0x13000212) MiniProgramEnv/Mac MiniProgram' -H 'Referer: https://hongbao.juzhen.co/2021/qch0426/index.html' -H 'Cookie: ASP.NET_SessionId=44l54l0fbbl0pecnfytcsdxc' --data-binary "Type=sign&memid=${mid}" --compressed 'https://hongbao.juzhen.co/2021/qch0426/WebService/Ajax.aspx'`
const choujiangUrl =(mid)=>`curl -H 'Host: hongbao.juzhen.co' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://hongbao.juzhen.co' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/3.0.2(0x13000212) MiniProgramEnv/Mac MiniProgram' -H 'Referer: https://hongbao.juzhen.co/2021/qch0426/index.html' -H 'Cookie: ASP.NET_SessionId=44l54l0fbbl0pecnfytcsdxc' --data-binary "Type=SendSeeds&memid=${mid}&game=lhj&iswin=-2" --compressed 'https://hongbao.juzhen.co/2021/qch0426/WebService/Ajax.aspx'`
const bigUrl = (mid)=> `curl -H 'Host: hongbao.juzhen.co' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://hongbao.juzhen.co' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/3.0.2(0x13000212) MiniProgramEnv/Mac MiniProgram' -H 'Referer: https://hongbao.juzhen.co/2021/qch0426/index.html' -H 'Cookie: ASP.NET_SessionId=44l54l0fbbl0pecnfytcsdxc' --data-binary "Type=SendSeeds&memid=${mid}&game=dfw&iswin=20" --compressed 'https://hongbao.juzhen.co/2021/qch0426/WebService/Ajax.aspx'`
const hbUrl =  (mid)=> `curl -H 'Host: hongbao.juzhen.co' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://hongbao.juzhen.co' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/3.0.2(0x13000212) MiniProgramEnv/Mac MiniProgram' -H 'Referer: https://hongbao.juzhen.co/2021/qch0426/index.html' -H 'Cookie: ASP.NET_SessionId=44l54l0fbbl0pecnfytcsdxc' --data-binary "Type=SendSeeds&memid=${mid}&game=rain&iswin=20" --compressed 'https://hongbao.juzhen.co/2021/qch0426/WebService/Ajax.aspx'`
// 侨城会 51 签到
function sign () {
	midArr.map(async (item)=>{
		await sleep(rand(3, 5) * 1000);
		runExec(signUrl(item)).then(it => {
			console.log('签到ID：',item,'签到结果：',it);
		}).catch(err => {
			console.log(err);
		})
	})
}

// 侨城会 51 抽奖
function choujiang () {
	midArr.map(async (item)=>{
		await sleep(rand(3, 5) * 1000);
		runExec(choujiangUrl(item)).then(it => {
			console.log('抽奖ID：',item,'签到结果：',it);
		}).catch(err => {
			console.log(err);
		})
	})
}

// 大富翁活动
function big() {
	midArr.map(async (item)=>{
		await sleep(rand(3, 5) * 1000);
		runExec(bigUrl(item)).then(it => {
			console.log('大富翁ID：',item,'签到结果：',it);
		}).catch(err => {
			console.log(err);
		})
	})
}

// 红包雨 活动 hbUrl
function hb() {
	midArr.map(async (item)=>{
		await sleep(rand(3, 5) * 1000);
		runExec(hbUrl(item)).then(it => {
			console.log('红包雨ID：',item,'签到结果：',it);
		}).catch(err => {
			console.log(err);
		})
	})
}



async function doAll(){
	await sign();// 运行签到
	await sleep(rand(3, 5) * 1000);
	Array.from({length:3}).map(()=>{
		choujiang(); // 运行抽奖
	});
	await sleep(rand(3, 5) * 1000);
	big();
	hb();
}

doAll();


