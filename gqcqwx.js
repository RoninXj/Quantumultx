$prefs.setValueForKey($request.headers.token, 'gqcqwxcookie');

if (typeof $prefs.valueForKey('gqcqwxcookie') !== "undefined"){
    $notify('广汽传祺小程序', gqcqwxcookie 获取成功,数据已存储!, $request['headers']['token']);
}

$done();
