var a16_0x25b8=['cameraSocket','eventCounter','onError','bind','message','incoming','parse','Data','length','{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}','createWebSocket','CountingWebSocketService','defineProperty','__esModule','../infrastructure/stationSettings','init','log','init\x20CountingWebSocket','StationContext','settings','open','Websocket\x20opened:'];(function(_0x2634f5,_0x273ec9){var _0xb53c3c=function(_0x5d4c8d){while(--_0x5d4c8d){_0x2634f5['push'](_0x2634f5['shift']());}};_0xb53c3c(++_0x273ec9);}(a16_0x25b8,0x182));var a16_0x2059=function(_0x2fc5dc,_0x2b64b7){_0x2fc5dc=_0x2fc5dc-0x0;var _0x34200d=a16_0x25b8[_0x2fc5dc];return _0x34200d;};'use strict';Object[a16_0x2059('0x0')](exports,a16_0x2059('0x1'),{'value':!![]});const stationSettings_1=require(a16_0x2059('0x2'));class CountingWebSocketService{constructor(){this['eventCounter']=0x0;}[a16_0x2059('0x3')](){console[a16_0x2059('0x4')](a16_0x2059('0x5'));this['createWebSocket']();}['createWebSocket'](){const _0xab9af7=require('ws');const _0x29523c=new _0xab9af7(stationSettings_1[a16_0x2059('0x6')][a16_0x2059('0x7')]['cameraSocket']);_0x29523c['on'](a16_0x2059('0x8'),function open(){console[a16_0x2059('0x4')](a16_0x2059('0x9')+stationSettings_1[a16_0x2059('0x6')][a16_0x2059('0x7')][a16_0x2059('0xa')]);this[a16_0x2059('0xb')]=0x0;});_0x29523c['on']('error',this[a16_0x2059('0xc')][a16_0x2059('0xd')](this));_0x29523c['on'](a16_0x2059('0xe'),this[a16_0x2059('0xf')]['bind'](this));}[a16_0x2059('0xf')](_0x53deb4){const _0x7003f1=JSON[a16_0x2059('0x10')](_0x53deb4);if(_0x7003f1['Data']==null||_0x7003f1[a16_0x2059('0x11')][a16_0x2059('0x12')]==0x0){_0x53deb4=JSON[a16_0x2059('0x10')](a16_0x2059('0x13'));}if(_0x7003f1[a16_0x2059('0x11')]!=null&&_0x7003f1[a16_0x2059('0x11')][a16_0x2059('0x12')]>0x0){this['createEvent'](_0x7003f1[a16_0x2059('0x11')][0x0]);}}[a16_0x2059('0xc')](_0x593011){console['error'](_0x593011);setTimeout(function(){this[a16_0x2059('0x14')]();}[a16_0x2059('0xd')](this),0x1388);}}exports[a16_0x2059('0x15')]=CountingWebSocketService;