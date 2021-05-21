var exec = require('child_process').exec;

function runExec(cmdStr) {
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

function randSleep() {
  return new Promise((resolve) => setTimeout(resolve, Math.random()*1000*100));
}

function randoTask() {
  const r = Math.floor(Math.random()*10);
  return r%2;
}

const dianZanUrl =(mid,vid)=> `curl -H 'Host: gaowei.juzhen02.com' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: https://gaowei.juzhen02.com' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/3.0.3(0x13000309) MiniProgramEnv/Mac MiniProgram' -H 'Referer: https://gaowei.juzhen02.com/2021/plp517/index.html?encryptData=IRaAF1wIjG8__&t=${Date.now()}' -H 'Cookie: ASP.NET_SessionId=123123' --data-binary "Type=VoteFor&memberID=${mid}&vid=${vid}" --compressed 'https://gaowei.juzhen02.com/2021/plp517/webserver/AjaxApi.aspx'`



function dianZan (mid,vid=37) {
  runExec(dianZanUrl(mid,vid)).then(it => {
    getCurrentTime()
    console.log('ID：', mid, '点赞结果：', it);
  }).catch(err => {
    console.log(err);
  })
}

function getCurrentTime () {
  const b =new Date()
  const time  = b.getFullYear()+'/'+b.getMonth()+'/'+b.getDate()+'  '+b.getHours()+':'+b.getMinutes()+':'+b.getSeconds();
  console.log('当前时间：',time)
}

function randomNum (min=100689, max=116133) {
	let r = Math.random()*(max-min);
	r = Math.floor(r)+min;
	return r
}

// 一次任务  点赞 num 次
function generateIds (num=1) {
	const ids = [];
	Array.from({length:num}).map(()=>{
		ids.push(randomNum())
	})
	return ids;
}

// 任务
function task () {
	console.log('task');
	if(randoTask()){
    const ids = generateIds();
    ids.forEach(async item=>{
      await  randSleep();
      getCurrentTime();
      await dianZan(item)
    })
	}


}

task()


