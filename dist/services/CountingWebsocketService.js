var a14_0x340d=['settings','cameraSocket','log','error','bind','message','incoming','Data','length','parse','{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}','createEvent','onError','CountingWebSocketService','__esModule','../infrastructure/stationSettings','eventCounter','init','createWebSocket','StationContext'];(function(_0x3a3c65,_0x4aa510){var _0x593f7d=function(_0x3876e5){while(--_0x3876e5){_0x3a3c65['push'](_0x3a3c65['shift']());}};_0x593f7d(++_0x4aa510);}(a14_0x340d,0xd6));var a14_0x5c13=function(_0x56c387,_0x44ad60){_0x56c387=_0x56c387-0x0;var _0x508a71=a14_0x340d[_0x56c387];return _0x508a71;};'use strict';Object['defineProperty'](exports,a14_0x5c13('0x0'),{'value':!![]});const stationSettings_1=require(a14_0x5c13('0x1'));class CountingWebSocketService{constructor(){this[a14_0x5c13('0x2')]=0x0;}[a14_0x5c13('0x3')](){console['log']('init\x20CountingWebSocket');this[a14_0x5c13('0x4')]();}[a14_0x5c13('0x4')](){const _0x1d2886=require('ws');const _0x32709f=new _0x1d2886(stationSettings_1[a14_0x5c13('0x5')][a14_0x5c13('0x6')][a14_0x5c13('0x7')]);_0x32709f['on']('open',function open(){console[a14_0x5c13('0x8')]('Websocket\x20opened:'+stationSettings_1['StationContext'][a14_0x5c13('0x6')][a14_0x5c13('0x7')]);this[a14_0x5c13('0x2')]=0x0;});_0x32709f['on'](a14_0x5c13('0x9'),this['onError'][a14_0x5c13('0xa')](this));_0x32709f['on'](a14_0x5c13('0xb'),this[a14_0x5c13('0xc')]['bind'](this));}[a14_0x5c13('0xc')](_0x49565c){const _0x5a54db=JSON['parse'](_0x49565c);if(_0x5a54db[a14_0x5c13('0xd')]==null||_0x5a54db['Data'][a14_0x5c13('0xe')]==0x0){_0x49565c=JSON[a14_0x5c13('0xf')](a14_0x5c13('0x10'));}if(_0x5a54db[a14_0x5c13('0xd')]!=null&&_0x5a54db[a14_0x5c13('0xd')][a14_0x5c13('0xe')]>0x0){this[a14_0x5c13('0x11')](_0x5a54db[a14_0x5c13('0xd')][0x0]);}}[a14_0x5c13('0x12')](_0x157e0c){console['error'](_0x157e0c);setTimeout(function(){this[a14_0x5c13('0x4')]();}[a14_0x5c13('0xa')](this),0x1388);}}exports[a14_0x5c13('0x13')]=CountingWebSocketService;