export function dd (str) {
  let url = `curl 'https://oapi.dingtalk.com/robot/send?access_token=75d5d35ec52975b87baf3abf889fd0c83d7e20fb1bc1c2e118ee0fa7face8163' \
   -H 'Content-Type: application/json' \
   -d '{"msgtype": "text","text": {"content": "测试:${str}"}}'`;
  runExec(url).then((std) => {
    console.log(std);
  }).catch(err => {
    console.log(err);
  })
}
