var a16_0x169b=['incoming','parse','Data','createEvent','CountingWebSocketService','__esModule','../infrastructure/stationSettings','eventCounter','init','log','init\x20CountingWebSocket','createWebSocket','StationContext','settings','cameraSocket','open','Websocket\x20opened:','error','onError','bind','message'];(function(_0x201ad4,_0x430d17){var _0x3c1750=function(_0x37710a){while(--_0x37710a){_0x201ad4['push'](_0x201ad4['shift']());}};_0x3c1750(++_0x430d17);}(a16_0x169b,0x83));var a16_0x6844=function(_0x5861ed,_0x589206){_0x5861ed=_0x5861ed-0x0;var _0x346ca4=a16_0x169b[_0x5861ed];return _0x346ca4;};'use strict';Object['defineProperty'](exports,a16_0x6844('0x0'),{'value':!![]});const stationSettings_1=require(a16_0x6844('0x1'));class CountingWebSocketService{constructor(){this[a16_0x6844('0x2')]=0x0;}[a16_0x6844('0x3')](){console[a16_0x6844('0x4')](a16_0x6844('0x5'));this[a16_0x6844('0x6')]();}[a16_0x6844('0x6')](){const _0x314641=require('ws');const _0x3c9205=new _0x314641(stationSettings_1[a16_0x6844('0x7')][a16_0x6844('0x8')][a16_0x6844('0x9')]);_0x3c9205['on'](a16_0x6844('0xa'),function open(){console[a16_0x6844('0x4')](a16_0x6844('0xb')+stationSettings_1[a16_0x6844('0x7')][a16_0x6844('0x8')]['cameraSocket']);this[a16_0x6844('0x2')]=0x0;});_0x3c9205['on'](a16_0x6844('0xc'),this[a16_0x6844('0xd')][a16_0x6844('0xe')](this));_0x3c9205['on'](a16_0x6844('0xf'),this['incoming'][a16_0x6844('0xe')](this));}[a16_0x6844('0x10')](_0x32ec9c){const _0x6f4fd8=JSON[a16_0x6844('0x11')](_0x32ec9c);if(_0x6f4fd8[a16_0x6844('0x12')]==null||_0x6f4fd8[a16_0x6844('0x12')]['length']==0x0){_0x32ec9c=JSON[a16_0x6844('0x11')]('{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}');}if(_0x6f4fd8['Data']!=null&&_0x6f4fd8[a16_0x6844('0x12')]['length']>0x0){this[a16_0x6844('0x13')](_0x6f4fd8['Data'][0x0]);}}[a16_0x6844('0xd')](_0x3ba990){console['error'](_0x3ba990);setTimeout(function(){this[a16_0x6844('0x6')]();}['bind'](this),0x1388);}}exports[a16_0x6844('0x14')]=CountingWebSocketService;