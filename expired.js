const getMangheUrl = (mid, ua) => `curl -H 'Host: qch.xyoct.com' -H 'Content-Type: application/json' -H 'Accept: */*' -H 'User-Agent: ${ua}' -H 'Referer: https://servicewechat.com/wxc1f07ce8c049095b/191/page-frame.html' -H 'Accept-Language: zh-cn' --compressed 'https://qch.xyoct.com/MangHe2021Api.aspx?type=HuoQuMangHe&mid=${mid}'`

function getManghe (mid, ua) {
  runExec(getMangheUrl(mid, ua)).then(it => {
    getCurrentTime()
    // console.log('ID：', mid, '盲盒已用的IDList', JSON.parse(it));
    const { List } = JSON.parse(it);
    const allList = [];
    Array.from({ length: 16 }).map((item, index) => {
      if (List.some((a, j) => (index + '') === a.BoxNo)) {

      } else {
        allList.push(index)
      }
    });

    const firstId = allList[0];
    choujiang618(mid, ua, firstId)
  }).catch(err => {
    console.log(err);
  })
}

    // await getManghe(mid, ua)
