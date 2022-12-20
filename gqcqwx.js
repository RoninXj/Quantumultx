async function GetRewrite() {
 if ($request.url.indexOf("live/home/tab-bar-status.json") > -1) {
  const ck = $request.headers['token']
  if (ckStr) {
   if (ckStr.indexOf(ck) == -1) { // 找不到返回 -1
    ckStr = ckStr + "@" or "\n" + ck;
    $.setdata(ckStr, "gqcqwxcookie");
    ckList = ckStr.split("@" or "\n");
    $.msg($.name + ` 获取第${ckList.length}个 ck 成功: ${ck} ,不用请自行关闭重写!`);
   }
  } else {
   $.setdata(ck, "gqcqwxcookie");
   $.msg($.name + ` 获取第1个 ck 成功: ${ck} ,不用请自行关闭重写!`);
  }
 }
}
