var a14_0x5d1f=['bind','message','incoming','parse','Data','length','{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}','createEvent','onError','CountingWebSocketService','__esModule','../infrastructure/stationSettings','eventCounter','init','log','init\x20CountingWebSocket','StationContext','settings','cameraSocket','open','Websocket\x20opened:','error'];(function(_0x194dad,_0x4ecf6f){var _0x1cb564=function(_0x85ee5a){while(--_0x85ee5a){_0x194dad['push'](_0x194dad['shift']());}};_0x1cb564(++_0x4ecf6f);}(a14_0x5d1f,0xa4));var a14_0xae59=function(_0x40bcc0,_0x584025){_0x40bcc0=_0x40bcc0-0x0;var _0x2b5d13=a14_0x5d1f[_0x40bcc0];return _0x2b5d13;};'use strict';Object['defineProperty'](exports,a14_0xae59('0x0'),{'value':!![]});const stationSettings_1=require(a14_0xae59('0x1'));class CountingWebSocketService{constructor(){this[a14_0xae59('0x2')]=0x0;}[a14_0xae59('0x3')](){console[a14_0xae59('0x4')](a14_0xae59('0x5'));this['createWebSocket']();}['createWebSocket'](){const _0x1f3f54=require('ws');const _0x3cdfc9=new _0x1f3f54(stationSettings_1[a14_0xae59('0x6')][a14_0xae59('0x7')][a14_0xae59('0x8')]);_0x3cdfc9['on'](a14_0xae59('0x9'),function open(){console['log'](a14_0xae59('0xa')+stationSettings_1[a14_0xae59('0x6')][a14_0xae59('0x7')][a14_0xae59('0x8')]);this[a14_0xae59('0x2')]=0x0;});_0x3cdfc9['on'](a14_0xae59('0xb'),this['onError'][a14_0xae59('0xc')](this));_0x3cdfc9['on'](a14_0xae59('0xd'),this[a14_0xae59('0xe')][a14_0xae59('0xc')](this));}[a14_0xae59('0xe')](_0x2536d1){const _0x5b6d13=JSON[a14_0xae59('0xf')](_0x2536d1);if(_0x5b6d13['Data']==null||_0x5b6d13[a14_0xae59('0x10')][a14_0xae59('0x11')]==0x0){_0x2536d1=JSON[a14_0xae59('0xf')](a14_0xae59('0x12'));}if(_0x5b6d13[a14_0xae59('0x10')]!=null&&_0x5b6d13['Data']['length']>0x0){this[a14_0xae59('0x13')](_0x5b6d13['Data'][0x0]);}}[a14_0xae59('0x14')](_0xc6cfdb){console[a14_0xae59('0xb')](_0xc6cfdb);setTimeout(function(){this['createWebSocket']();}[a14_0xae59('0xc')](this),0x1388);}}exports[a14_0xae59('0x15')]=CountingWebSocketService;