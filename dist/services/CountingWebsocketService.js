var a14_0x589c=['StationContext','settings','open','error','onError','message','incoming','bind','parse','Data','{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}','length','createEvent','CountingWebSocketService','defineProperty','../infrastructure/stationSettings','eventCounter','init','log','init\x20CountingWebSocket','createWebSocket'];(function(_0x1cc645,_0x59678c){var _0x56a1e9=function(_0x531c53){while(--_0x531c53){_0x1cc645['push'](_0x1cc645['shift']());}};_0x56a1e9(++_0x59678c);}(a14_0x589c,0x77));var a14_0x1007=function(_0x2413a9,_0x5dcf54){_0x2413a9=_0x2413a9-0x0;var _0x1c23f9=a14_0x589c[_0x2413a9];return _0x1c23f9;};'use strict';Object[a14_0x1007('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a14_0x1007('0x1'));class CountingWebSocketService{constructor(){this[a14_0x1007('0x2')]=0x0;}[a14_0x1007('0x3')](){console[a14_0x1007('0x4')](a14_0x1007('0x5'));this['createWebSocket']();}[a14_0x1007('0x6')](){const _0x5c99dc=require('ws');const _0x5a5cd6=new _0x5c99dc(stationSettings_1[a14_0x1007('0x7')][a14_0x1007('0x8')]['cameraSocket']);_0x5a5cd6['on'](a14_0x1007('0x9'),function open(){console[a14_0x1007('0x4')]('Websocket\x20opened:'+stationSettings_1[a14_0x1007('0x7')][a14_0x1007('0x8')]['cameraSocket']);this[a14_0x1007('0x2')]=0x0;});_0x5a5cd6['on'](a14_0x1007('0xa'),this[a14_0x1007('0xb')]['bind'](this));_0x5a5cd6['on'](a14_0x1007('0xc'),this[a14_0x1007('0xd')][a14_0x1007('0xe')](this));}[a14_0x1007('0xd')](_0x1ead3d){const _0x2bd7c7=JSON[a14_0x1007('0xf')](_0x1ead3d);if(_0x2bd7c7[a14_0x1007('0x10')]==null||_0x2bd7c7[a14_0x1007('0x10')]['length']==0x0){_0x1ead3d=JSON['parse'](a14_0x1007('0x11'));}if(_0x2bd7c7[a14_0x1007('0x10')]!=null&&_0x2bd7c7['Data'][a14_0x1007('0x12')]>0x0){this[a14_0x1007('0x13')](_0x2bd7c7[a14_0x1007('0x10')][0x0]);}}[a14_0x1007('0xb')](_0x2cc3dc){console[a14_0x1007('0xa')](_0x2cc3dc);setTimeout(function(){this['createWebSocket']();}[a14_0x1007('0xe')](this),0x1388);}}exports[a14_0x1007('0x14')]=CountingWebSocketService;