var a16_0x3499=['open','Websocket\x20opened:','eventCounter','error','onError','bind','message','incoming','Data','length','parse','{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}','CountingWebSocketService','defineProperty','__esModule','log','init\x20CountingWebSocket','createWebSocket','StationContext','settings','cameraSocket'];(function(_0x1a31e9,_0x2ca2df){var _0x826c33=function(_0xa26ea3){while(--_0xa26ea3){_0x1a31e9['push'](_0x1a31e9['shift']());}};_0x826c33(++_0x2ca2df);}(a16_0x3499,0x1c6));var a16_0x2029=function(_0x5103c0,_0x1a5124){_0x5103c0=_0x5103c0-0x0;var _0x3b5bdc=a16_0x3499[_0x5103c0];return _0x3b5bdc;};'use strict';Object[a16_0x2029('0x0')](exports,a16_0x2029('0x1'),{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');class CountingWebSocketService{constructor(){this['eventCounter']=0x0;}['init'](){console[a16_0x2029('0x2')](a16_0x2029('0x3'));this[a16_0x2029('0x4')]();}[a16_0x2029('0x4')](){const _0x511443=require('ws');const _0x557432=new _0x511443(stationSettings_1[a16_0x2029('0x5')][a16_0x2029('0x6')][a16_0x2029('0x7')]);_0x557432['on'](a16_0x2029('0x8'),function open(){console[a16_0x2029('0x2')](a16_0x2029('0x9')+stationSettings_1[a16_0x2029('0x5')][a16_0x2029('0x6')][a16_0x2029('0x7')]);this[a16_0x2029('0xa')]=0x0;});_0x557432['on'](a16_0x2029('0xb'),this[a16_0x2029('0xc')][a16_0x2029('0xd')](this));_0x557432['on'](a16_0x2029('0xe'),this[a16_0x2029('0xf')][a16_0x2029('0xd')](this));}[a16_0x2029('0xf')](_0x39b492){const _0x188d3f=JSON['parse'](_0x39b492);if(_0x188d3f[a16_0x2029('0x10')]==null||_0x188d3f[a16_0x2029('0x10')][a16_0x2029('0x11')]==0x0){_0x39b492=JSON[a16_0x2029('0x12')](a16_0x2029('0x13'));}if(_0x188d3f[a16_0x2029('0x10')]!=null&&_0x188d3f[a16_0x2029('0x10')]['length']>0x0){this['createEvent'](_0x188d3f['Data'][0x0]);}}[a16_0x2029('0xc')](_0xb59c6f){console['error'](_0xb59c6f);setTimeout(function(){this[a16_0x2029('0x4')]();}[a16_0x2029('0xd')](this),0x1388);}}exports[a16_0x2029('0x14')]=CountingWebSocketService;