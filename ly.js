// 8p
const u1 = "20210122093525742EVYB54Y";
const c1 = 'Cookie: CNZZDATA1278518534=303939838-1607651976-%7C1607664272; XSRF-TOKEN=eyJpdiI6IlZiN1lXbkVLY1p1OE1TSkZXdnZaQ3c9PSIsInZhbHVlIjoiXC9tdENGWVg1YmxhS0FvNU9acHlMUExYWDdVZ2h5TXZ1eGlZVUxma2ZQK3RmakQyeXBYS2NBWlhURzkySG1mck01WWtCXC9Qcnh5cUVlS3NZTHJcL1I4UEE9PSIsIm1hYyI6ImI4ODcwYTBjMWI5ZjNiODdkOGEzZDJjNmIzZDhhN2VlMjJkNzMyN2M3OThhMjEwZjQzOTE0M2UwYzFhZTIyMGIifQ%3D%3D; laravel_session=eyJpdiI6IjRGbGxDVDRkMWhoVnFzNTJHdk5QVFE9PSIsInZhbHVlIjoiYWJHUnVwYkRZOFdRV0c4dU9UVUR5NzlpUTVsbG92aGlUZ2lYSldLV0EwN1pMQXlLcVBVKzhFejJrcm5XclZZM0doVVB1UExIZkNmeTZJR3prMFU2U1E9PSIsIm1hYyI6ImE3ZGNhODFmOTU3MzY2MmVhOTUyN2Q5M2YyNDMwMWE2NjU3YTFmNzljOGU2ZGZhNDAzNGJjNGYwN2Y4MjJiNTEifQ%3D%3D; UM_distinctid=1764f9c876d23f-0426330091a2b6-5260777a-4a640-1764f9c876e3a6';

// 每天签到
let qdArr = [
    `curl -H 'Host: custom.luyuan.cn' -H 'Accept: */*' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: http://custom.luyuan.cn' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://custom.luyuan.cn/custom/wechat/integral_index.html?usercode=20210122093525742EVYB54Y&timestamp=1607650046000' -H 'Cookie: UM_distinctid=1764bb00e662c3-047fdd2377a0e98-5260777a-4a574-1764bb00e67118' --data-binary "usercode=20210122093525742EVYB54Y" --compressed 'http://custom.luyuan.cn/custom/signin/add'`,
];
let uArr = [u1, ];
let cArr = [c1,];
let fb = [
    `curl -H 'Host: forum.luyuan.cn' -H 'Accept: */*' -H 'X-Requested-With: XMLHttpRequest' -H 'Accept-Language: zh-cn' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Origin: http://forum.luyuan.cn' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/article_add.html' -H 'Cookie: index.html=0; XSRF-TOKEN=eyJpdiI6Im1RWVcxb01nRnhLMmRUNlcxdTc3MlE9PSIsInZhbHVlIjoiZk5RRXplQVwvamVrMW8wd1krUVwvbjVzckNKaU53NlwvZDR3ZG8raTNuYzZSZUtCTnRZOE84U3BYbU45cVhscFJMK21jWndRNmRPMWlFdFZST3k1bXg5TUE9PSIsIm1hYyI6IjdmYWM5MTdkZGZjNTdmMDFkN2E3ODgxMWUwN2UyNjQzMGI5OWVmMWVmNDI1MDViNDhjYjQyNTRiZWU3ODdjMDYifQ%3D%3D; laravel_session=eyJpdiI6IjR2ZURZOFFac3l5WVAzckVcL0YrdjZBPT0iLCJ2YWx1ZSI6InNPUno2SzVQb2w5aG0rcXlldXR3QWVYTDl0NXRqYzNyNVZvSjgyY3I1RWkxNDZuZm1PV0plMnJZWXdQM2drbkxQUlA4Q2hraVBsSFwvXC9cL0Fpb2Z5VHF3PT0iLCJtYWMiOiI0MWY5ZjUxYmY5ZGIxODkzYzJiYWI1ZTUwNDU1Yzc5NmEyZmFkZjc4ZGY3OWI3MTkzYThhMTg0ODlmMTYyY2E0In0%3D; CNZZDATA1278518534=1775368182-1607587288-%7C1607651976; index.html%3Ft%3Drec=0; UM_distinctid=1764bb00e662c3-047fdd2377a0e98-5260777a-4a574-1764bb00e67118' --data-binary "title=%E5%8F%91%E5%B8%83%E5%86%85%E5%AE%B9&content=%E5%8F%91%E5%B8%83%E4%BF%A1%E6%81%AF&type=%E6%96%B0%E5%93%81%E6%8E%A8%E8%8D%90" --compressed 'http://forum.luyuan.cn/api/article_add'`,
];
const plArr = [
    encodeURIComponent('好文章!'),
    encodeURIComponent('厉害!'),
    encodeURIComponent('good!!!'),
    encodeURIComponent('nice!'),
    encodeURIComponent('哈哈哈哈哈!'),
];
const lists = [
    //
    `curl -H 'Host: forum.luyuan.cn' -H 'Cookie: XSRF-TOKEN=eyJpdiI6Ik5IR25aeHFDSzlleGN3UkZuWENGbHc9PSIsInZhbHVlIjoiXC83OCs3ZU8xd3BoaWdDbWJBMVh6R3NnWHRwOGhpOEZUOFl2eklLTmdJZTJ6NWd1Z0hkRzJZaXRZQU8rd1wvODcwdzVJZXpVemNoTldIXC8zN3p2bTlMNkE9PSIsIm1hYyI6ImYzNzE1MmMzODU0NDUyYTg5MTkwNWRjOThmYmFkYjA4MDI1ODc5M2MwNjFiN2JkOGFiNjE4NzUwOGUzODc0ZjIifQ%3D%3D; laravel_session=eyJpdiI6InZaK2xrTnNzd3hraGFHWUhzeXBKM1E9PSIsInZhbHVlIjoieW5qeTZ0XC85TGhnV1FHWmhGQm5rXC9WTzVGY2JDckxwemlNbEl3RXdqeVZ2aFwvTlNDZTdFV0t0NzdrZkZIa29EZUYrMDlaYUcwMmZWM0RwQ3NIWmdLbnc9PSIsIm1hYyI6IjI0YWNhN2ZkYWI2ZDMyNTA3YjkyYWQxODhjZmM3ZmUyOTkxODNhM2UyMjUzOTFkOWU5YWY1NzY4MTY4OTlmNDEifQ%3D%3D; CNZZDATA1278518534=303939838-1607651976-http%253A%252F%252Fcustom.luyuan.cn%252F%7C1607664272; UM_distinctid=1764f9c876d23f-0426330091a2b6-5260777a-4a640-1764f9c876e3a6' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/message_list.html' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/message_list?type=0'`,
        `curl -H 'Host: forum.luyuan.cn' -H 'Cookie: CNZZDATA1278518534=1775368182-1607587288-%7C1607664272; XSRF-TOKEN=eyJpdiI6IjdXNzhHQnA4OXYzRmQ2eGl2S2pGT0E9PSIsInZhbHVlIjoiNTV0VHFlK3A0UG5CcGpmUHRucVF3U3BRUmpPeWpzcGgzUU5SVzZIek9ocDRoeWdPcTZsSGtNOCsxR0hsYnB5TXAwZ2NUZEZNek9cL3pjeGwxRHJVTUZnPT0iLCJtYWMiOiIwMzkyNzRjYmFhMzM5Y2JlNjFhMTU3OGM0NzNjZjZjN2NlOTcyM2UxNmE4MzU1YzBiYTE4NzkxNzM3NDUwZWRkIn0%3D; laravel_session=eyJpdiI6ImxkVTZzNkNJZ1Y3WU9yUFZ2end2aXc9PSIsInZhbHVlIjoiSzBnRStXQjI4Wk1xTkhEN3ozSVwvSHd4Z2JFSUdGUlNIV1Rlamh4cjd2akR0VktaY1VYdzVBQ05nM1Ntd0lrbVl1NGhtc0cwM1wvRkdXQ3E0ZGw5WVN6UT09IiwibWFjIjoiZGY2NTk3Y2Q5MGY0MTE2NWQ4MDI1MzAwMDc4NTNmZTI2OTQ3YWJkNGI4NWRmM2Y5MzlmZDU2Y2E5OGE3MDg0YiJ9; index.html=0; index.html%3Ft%3Drec=0; UM_distinctid=1764bb00e662c3-047fdd2377a0e98-5260777a-4a574-1764bb00e67118' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/message_list.html' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/message_list?type=0'`
];

var exec = require('child_process').exec;

function runExec(cmdStr) {
    return new Promise((resolve, reject) => {
        console.log(cmdStr);
        exec(cmdStr, function (err, stdout, stderr) {
            if (err) {
                console.log('get weather api error:' + stderr);
                reject();
            } else {
                // console.log(stdout);
                resolve(stdout);
            }
        });
    });
}

function sleep(time) {
    console.log(`暂停${time}秒,稍后执行下面的程序!`);
    return new Promise((resolve) => setTimeout(resolve, time));
}

function rand(min, max) {
    return Math.random() * (max - min + 1) + min | 0; //特殊的技巧，|0可以强制转换为整数
}
function dd(str) {
    let url = `curl 'https://oapi.dingtalk.com/robot/send?access_token=f1143441ca8cc5ee057beb4c2c85e5c7ed76656d42fb2db1916bdddf73672344' \
   -H 'Content-Type: application/json' \
   -d '{"msgtype": "text","text": {"content": "绿源电动车:${str}"}}'`;
    runExec(url).then((std) => {
        console.log(std);
    }).catch(err => {
        console.log(err);
    })
}
// 签到
function qd(arr) {
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
function xx(arr) {
    let url = (usercode) => `curl -H 'Host: custom.luyuan.cn' -H 'Cookie: UM_distinctid=1764bb00e662c3-047fdd2377a0e98-5260777a-4a574-1764bb00e67118' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://custom.luyuan.cn/custom/wechat/usercenter.html?usercode=${usercode}&timestamp=20201210154010206' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://custom.luyuan.cn/custom/userprofile/fetch?usercode=${usercode}&_=1607649872963'`;
    arr.map(async item => {
        runExec(url(item)).then(data => {
            // console.log(data);
            const a = JSON.parse(data);
            if (a.ok) {
                const integral = a['userprofile']['integral'];
                if (integral > 10000) {
                    const cellphone = a['userprofile']['cellphone'];
                    dd(`${cellphone}的积分为: ${integral} ,大于 10000 了,快去换东西去吧`);
                }
            }
        }).catch(err => {
            console.log(err);
        })
    });

}

// 社区内容
function sh() {
    let url = `curl -H 'Host: forum.luyuan.cn' -H 'Cookie: CNZZDATA1278518534=1775368182-1607587288-%7C1607646420; XSRF-TOKEN=eyJpdiI6InpOUWtqc1wvc1k0VndrcHV3aHNLWVB3PT0iLCJ2YWx1ZSI6ImRoQjJxc0g4aVpqaGdkUlFNWStUZzRCanJieWFQUVwvUmNPRllralhzcitIeXROSzhQekZlMkpjb01ETGJiOVBcLzZtaVpqRGVTSWcyN3Z5SHFzaHZ3RXc9PSIsIm1hYyI6ImJjMjc4ODljNTY0MjlhYzBiYTg4MGUzMjkxNjczYWI3OTYxMDYwMDliMDZmNjFmZDZmODFmODAzNDZjMjdkOTkifQ%3D%3D; laravel_session=eyJpdiI6InRGMUVubjI1UjZcL1N4VXRjeHVacm93PT0iLCJ2YWx1ZSI6IktPaVdqWXV3bHc4dkN6a1FHRXZWNFEwQ3k1SURaWXVOV3JZUWxzVGp5XC8zYU9EajZmVXdOOVAzaThZcVVkYTlwYnNRNXY3a0x4ekFKV2FEWEFrbkhXdz09IiwibWFjIjoiNmViYjcwYmM5YjA3OTAxMDRiZGFmMzYxMjFiNjg1NDFjMDFhZjBmMWVjMDRkMzU1MDJlMGU1MjUwMzkzNjkwMCJ9; UM_distinctid=1764bb00e662c3-047fdd2377a0e98-5260777a-4a574-1764bb00e67118' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/index.html?t=rec' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/article_list?type=rec&last_id='`
    runExec(url).then(async d => {
        let data = JSON.parse(d);
        let ids = [];
        console.log(data.length);
        for (let i = 0; i < 6; i++){
            ids.push(data[rand(1, 100)]['id']);
        }
        console.log(ids);
        // dianzan(ids);
        // pinglun(ids);
        // await sleep(rand(1, 3) * 1000);

    }).catch(err => {
        console.log(err);
    });
}
async function dianzan(ids) {
    let url = (Cookie, id, t = 1) => `curl -H 'Host: forum.luyuan.cn' -H '${Cookie}' -H 'Accept: */*' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.18(0x17001231) NetType/WIFI Language/zh_CN' -H 'Referer: http://forum.luyuan.cn/web_html/article_detail.html?id=${id}' -H 'Accept-Language: zh-cn' -H 'X-Requested-With: XMLHttpRequest' --compressed 'http://forum.luyuan.cn/api/praise?type=%E5%B8%96%E5%AD%90&object_id=${id}&num=${t}'`;
    for (let index = 0; index < cArr.length; index++) {
        const c = cArr[index];
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            await sleep(rand(1, 3)* 1000);
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
}
async function dzan(ids, index) {
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

async function pinglun(ids) {
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

async function plun(ids, index) {
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
async function fbxx(fb) {
    for (let index = 0; index < 2; index++) {
        await sleep(rand(4, 8) * 1000);
        fb.map(url => {
            runExec(url).then(d => {
                console.log(d);
            }).catch(err => {
                console.log(err);
            })
        });
    }
}

async function ll(arrr) {
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



const ab = async () => {
    // 每天签到
    qd(qdArr);
    await sleep(rand(4, 8) * 1000);
    // 先发布内容
    fbxx(fb);
    await sleep(rand(4, 8) * 1000);
    // 内容评论点赞
    ll(lists);
    await sleep(rand(4, 8) * 1000);
    // 社区内容点赞评论等
    sh();
    await sleep(rand(4, 8) * 1000);
    // 最后查看信息
    xx(uArr); // 最后查看信息
}


ab();
