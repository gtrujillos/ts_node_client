var a13_0x2d8a=['settings','cameraSocket','Websocket\x20opened:','error','onError','message','incoming','bind','parse','Data','{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}','createEvent','CountingWebSocketService','defineProperty','__esModule','../infrastructure/stationSettings','init','createWebSocket','log','init\x20CountingWebSocket','StationContext'];(function(_0x2051bc,_0x254e61){var _0x398467=function(_0x3733d8){while(--_0x3733d8){_0x2051bc['push'](_0x2051bc['shift']());}};_0x398467(++_0x254e61);}(a13_0x2d8a,0x76));var a13_0x503e=function(_0x4bd822,_0x2bd6f7){_0x4bd822=_0x4bd822-0x0;var _0xb4bdb3=a13_0x2d8a[_0x4bd822];return _0xb4bdb3;};'use strict';Object[a13_0x503e('0x0')](exports,a13_0x503e('0x1'),{'value':!![]});const stationSettings_1=require(a13_0x503e('0x2'));class CountingWebSocketService{constructor(){this['eventCounter']=0x0;}[a13_0x503e('0x3')](){this[a13_0x503e('0x4')]();console[a13_0x503e('0x5')](a13_0x503e('0x6'));}[a13_0x503e('0x4')](){const _0x4fa204=require('ws');const _0x1cfd2f=new _0x4fa204(stationSettings_1[a13_0x503e('0x7')][a13_0x503e('0x8')][a13_0x503e('0x9')]);_0x1cfd2f['on']('open',function open(){console[a13_0x503e('0x5')](a13_0x503e('0xa')+stationSettings_1[a13_0x503e('0x7')][a13_0x503e('0x8')][a13_0x503e('0x9')]);this['eventCounter']=0x0;});_0x1cfd2f['on'](a13_0x503e('0xb'),this[a13_0x503e('0xc')]['bind'](this));_0x1cfd2f['on'](a13_0x503e('0xd'),this[a13_0x503e('0xe')][a13_0x503e('0xf')](this));}[a13_0x503e('0xe')](_0x4789bf){const _0x31b7b6=JSON[a13_0x503e('0x10')](_0x4789bf);if(_0x31b7b6[a13_0x503e('0x11')]==null||_0x31b7b6['Data']['length']==0x0){_0x4789bf=JSON[a13_0x503e('0x10')](a13_0x503e('0x12'));}if(_0x31b7b6[a13_0x503e('0x11')]!=null&&_0x31b7b6[a13_0x503e('0x11')]['length']>0x0){this[a13_0x503e('0x13')](_0x31b7b6[a13_0x503e('0x11')][0x0]);}}[a13_0x503e('0xc')](_0x442243){console[a13_0x503e('0xb')](_0x442243);setTimeout(function(){this[a13_0x503e('0x4')]();}[a13_0x503e('0xf')](this),0x1388);}}exports[a13_0x503e('0x14')]=CountingWebSocketService;