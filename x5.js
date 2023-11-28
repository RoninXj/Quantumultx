GetCookie();
function GetCookie() {
    var CV = $response.headers['Set-Cookie'] || $response.headers['set-cookie'];;
    var ELMCK = CV && CV.includes("x5sec=")  && CV;
    if (CV && ELMCK) {
        let x5sec = CV.match(/x5sec=.+?;/)[0] ;
              $notify(x5sec, "", x5sec);  
              console.log(x5sec+"\n\n");
        }
        $done();
}
