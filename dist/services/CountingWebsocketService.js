var a16_0x5678=['error','__esModule','init','log','init\x20CountingWebSocket','createWebSocket','StationContext','cameraSocket','open','Websocket\x20opened:','eventCounter','bind','incoming','parse','Data','length','{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}','onError'];(function(_0x4578a7,_0x2e5c46){var _0x11c9e1=function(_0x1d8761){while(--_0x1d8761){_0x4578a7['push'](_0x4578a7['shift']());}};_0x11c9e1(++_0x2e5c46);}(a16_0x5678,0xd9));var a16_0x1aa7=function(_0x2bb5be,_0x317dd8){_0x2bb5be=_0x2bb5be-0x0;var _0x3a2c89=a16_0x5678[_0x2bb5be];return _0x3a2c89;};'use strict';Object['defineProperty'](exports,a16_0x1aa7('0x0'),{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');class CountingWebSocketService{constructor(){this['eventCounter']=0x0;}[a16_0x1aa7('0x1')](){console[a16_0x1aa7('0x2')](a16_0x1aa7('0x3'));this[a16_0x1aa7('0x4')]();}[a16_0x1aa7('0x4')](){const _0x3a422d=require('ws');const _0x4224c6=new _0x3a422d(stationSettings_1[a16_0x1aa7('0x5')]['settings'][a16_0x1aa7('0x6')]);_0x4224c6['on'](a16_0x1aa7('0x7'),function open(){console[a16_0x1aa7('0x2')](a16_0x1aa7('0x8')+stationSettings_1['StationContext']['settings'][a16_0x1aa7('0x6')]);this[a16_0x1aa7('0x9')]=0x0;});_0x4224c6['on']('error',this['onError'][a16_0x1aa7('0xa')](this));_0x4224c6['on']('message',this[a16_0x1aa7('0xb')][a16_0x1aa7('0xa')](this));}[a16_0x1aa7('0xb')](_0x58636f){const _0x4d1f9a=JSON[a16_0x1aa7('0xc')](_0x58636f);if(_0x4d1f9a[a16_0x1aa7('0xd')]==null||_0x4d1f9a['Data'][a16_0x1aa7('0xe')]==0x0){_0x58636f=JSON[a16_0x1aa7('0xc')](a16_0x1aa7('0xf'));}if(_0x4d1f9a[a16_0x1aa7('0xd')]!=null&&_0x4d1f9a[a16_0x1aa7('0xd')][a16_0x1aa7('0xe')]>0x0){this['createEvent'](_0x4d1f9a[a16_0x1aa7('0xd')][0x0]);}}[a16_0x1aa7('0x10')](_0x4e255a){console[a16_0x1aa7('0x11')](_0x4e255a);setTimeout(function(){this[a16_0x1aa7('0x4')]();}[a16_0x1aa7('0xa')](this),0x1388);}}exports['CountingWebSocketService']=CountingWebSocketService;