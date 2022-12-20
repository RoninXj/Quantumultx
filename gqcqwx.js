$prefs.setValueForKey($request['headers']['token'], 'gqcqwxCookie');

if (typeof $prefs.valueForKey('gqcqwxCookie') !== "undefined"){
    $notify('广汽传祺小程序', gqcqwxCookie 获取成功,数据已存储!, $request['headers']['token']);
}
$done();
