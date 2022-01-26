function checkMobile(){
	var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
	if ( varUA.indexOf('android') > -1) {
		//안드로이드
		return "android";
	} else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
		//IOS
		return "ios";
	} else {
		//아이폰, 안드로이드 외
		return "other";
	}
}


var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
 
if (mobile) { 
  //모바일 처리
}else{
  //비 모바일 처리
//   alert("모바일에서 가능합니다. 웹은 추후 업데이트 하겠습니다.");
}

function checkM(m,lat,lon){
    
	location.href = 'sms:' +noticeList+(m == 'ios' ? '&' : '?') + 'body='+ encodeURIComponent("도와주세요 현재 여기있어요! 주소 지도에서 보기 https://map.kakao.com/link/map/"+lat+','+lon);
}

