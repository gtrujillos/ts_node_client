var a14_0x5b0c=['parse','Data','length','{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}','createEvent','onError','defineProperty','__esModule','../infrastructure/stationSettings','eventCounter','init','createWebSocket','log','init\x20CountingWebSocket','StationContext','settings','cameraSocket','open','Websocket\x20opened:','error','bind','message'];(function(_0x1310fe,_0x4875d7){var _0x234c94=function(_0x5a8f20){while(--_0x5a8f20){_0x1310fe['push'](_0x1310fe['shift']());}};_0x234c94(++_0x4875d7);}(a14_0x5b0c,0x1ea));var a14_0x4853=function(_0x2699a9,_0x501e82){_0x2699a9=_0x2699a9-0x0;var _0x5b6c40=a14_0x5b0c[_0x2699a9];return _0x5b6c40;};'use strict';Object[a14_0x4853('0x0')](exports,a14_0x4853('0x1'),{'value':!![]});const stationSettings_1=require(a14_0x4853('0x2'));class CountingWebSocketService{constructor(){this[a14_0x4853('0x3')]=0x0;}[a14_0x4853('0x4')](){this[a14_0x4853('0x5')]();console[a14_0x4853('0x6')](a14_0x4853('0x7'));}[a14_0x4853('0x5')](){const _0x49ba6c=require('ws');const _0x3b49e3=new _0x49ba6c(stationSettings_1[a14_0x4853('0x8')][a14_0x4853('0x9')][a14_0x4853('0xa')]);_0x3b49e3['on'](a14_0x4853('0xb'),function open(){console[a14_0x4853('0x6')](a14_0x4853('0xc')+stationSettings_1[a14_0x4853('0x8')][a14_0x4853('0x9')][a14_0x4853('0xa')]);this[a14_0x4853('0x3')]=0x0;});_0x3b49e3['on'](a14_0x4853('0xd'),this['onError'][a14_0x4853('0xe')](this));_0x3b49e3['on'](a14_0x4853('0xf'),this['incoming'][a14_0x4853('0xe')](this));}['incoming'](_0x450b9d){const _0x91da2f=JSON[a14_0x4853('0x10')](_0x450b9d);if(_0x91da2f[a14_0x4853('0x11')]==null||_0x91da2f['Data'][a14_0x4853('0x12')]==0x0){_0x450b9d=JSON[a14_0x4853('0x10')](a14_0x4853('0x13'));}if(_0x91da2f['Data']!=null&&_0x91da2f[a14_0x4853('0x11')][a14_0x4853('0x12')]>0x0){this[a14_0x4853('0x14')](_0x91da2f['Data'][0x0]);}}[a14_0x4853('0x15')](_0x4de567){console[a14_0x4853('0xd')](_0x4de567);setTimeout(function(){this['createWebSocket']();}['bind'](this),0x1388);}}exports['CountingWebSocketService']=CountingWebSocketService;