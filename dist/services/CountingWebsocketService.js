var a16_0x2b85=['../infrastructure/stationSettings','eventCounter','init','log','init\x20CountingWebSocket','createWebSocket','settings','cameraSocket','Websocket\x20opened:','StationContext','error','bind','message','incoming','parse','Data','length','onError','CountingWebSocketService','defineProperty','__esModule'];(function(_0x2f7e4f,_0x5b4ef0){var _0x32909e=function(_0x12cdc3){while(--_0x12cdc3){_0x2f7e4f['push'](_0x2f7e4f['shift']());}};_0x32909e(++_0x5b4ef0);}(a16_0x2b85,0x18d));var a16_0x351e=function(_0x2e4e91,_0xa9e967){_0x2e4e91=_0x2e4e91-0x0;var _0x36293c=a16_0x2b85[_0x2e4e91];return _0x36293c;};'use strict';Object[a16_0x351e('0x0')](exports,a16_0x351e('0x1'),{'value':!![]});const stationSettings_1=require(a16_0x351e('0x2'));class CountingWebSocketService{constructor(){this[a16_0x351e('0x3')]=0x0;}[a16_0x351e('0x4')](){console[a16_0x351e('0x5')](a16_0x351e('0x6'));this[a16_0x351e('0x7')]();}[a16_0x351e('0x7')](){const _0x1bc21f=require('ws');const _0x53e104=new _0x1bc21f(stationSettings_1['StationContext'][a16_0x351e('0x8')][a16_0x351e('0x9')]);_0x53e104['on']('open',function open(){console[a16_0x351e('0x5')](a16_0x351e('0xa')+stationSettings_1[a16_0x351e('0xb')][a16_0x351e('0x8')]['cameraSocket']);this[a16_0x351e('0x3')]=0x0;});_0x53e104['on'](a16_0x351e('0xc'),this['onError'][a16_0x351e('0xd')](this));_0x53e104['on'](a16_0x351e('0xe'),this[a16_0x351e('0xf')][a16_0x351e('0xd')](this));}[a16_0x351e('0xf')](_0x213cf2){const _0x245d3b=JSON[a16_0x351e('0x10')](_0x213cf2);if(_0x245d3b[a16_0x351e('0x11')]==null||_0x245d3b[a16_0x351e('0x11')][a16_0x351e('0x12')]==0x0){_0x213cf2=JSON[a16_0x351e('0x10')]('{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}');}if(_0x245d3b[a16_0x351e('0x11')]!=null&&_0x245d3b[a16_0x351e('0x11')][a16_0x351e('0x12')]>0x0){this['createEvent'](_0x245d3b[a16_0x351e('0x11')][0x0]);}}[a16_0x351e('0x13')](_0x35a2f4){console[a16_0x351e('0xc')](_0x35a2f4);setTimeout(function(){this[a16_0x351e('0x7')]();}[a16_0x351e('0xd')](this),0x1388);}}exports[a16_0x351e('0x14')]=CountingWebSocketService;