var a14_0x5676=['__esModule','eventCounter','init','init\x20CountingWebSocket','createWebSocket','settings','cameraSocket','open','log','StationContext','error','bind','message','incoming','parse','Data','length','createEvent','onError','CountingWebSocketService','defineProperty'];(function(_0x12bddc,_0x901ab6){var _0x3af74c=function(_0x4c5fb1){while(--_0x4c5fb1){_0x12bddc['push'](_0x12bddc['shift']());}};_0x3af74c(++_0x901ab6);}(a14_0x5676,0x18e));var a14_0x208c=function(_0x41b5ff,_0xff9ae8){_0x41b5ff=_0x41b5ff-0x0;var _0x3e8ff1=a14_0x5676[_0x41b5ff];return _0x3e8ff1;};'use strict';Object[a14_0x208c('0x0')](exports,a14_0x208c('0x1'),{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');class CountingWebSocketService{constructor(){this[a14_0x208c('0x2')]=0x0;}[a14_0x208c('0x3')](){console['log'](a14_0x208c('0x4'));this[a14_0x208c('0x5')]();}[a14_0x208c('0x5')](){const _0x49a174=require('ws');const _0xd9b532=new _0x49a174(stationSettings_1['StationContext'][a14_0x208c('0x6')][a14_0x208c('0x7')]);_0xd9b532['on'](a14_0x208c('0x8'),function open(){console[a14_0x208c('0x9')]('Websocket\x20opened:'+stationSettings_1[a14_0x208c('0xa')]['settings'][a14_0x208c('0x7')]);this['eventCounter']=0x0;});_0xd9b532['on'](a14_0x208c('0xb'),this['onError'][a14_0x208c('0xc')](this));_0xd9b532['on'](a14_0x208c('0xd'),this[a14_0x208c('0xe')]['bind'](this));}[a14_0x208c('0xe')](_0xc34a6a){const _0x5e6442=JSON[a14_0x208c('0xf')](_0xc34a6a);if(_0x5e6442['Data']==null||_0x5e6442[a14_0x208c('0x10')][a14_0x208c('0x11')]==0x0){_0xc34a6a=JSON[a14_0x208c('0xf')]('{\x22Data\x22:[{\x22CountingInfo\x22:[{\x22In\x22:0,\x22Out\x22:0,\x22RuleName\x22:\x22Rule\x22,\x22Time\x22:\x222018-11-19T17:02:32.867Z\x22}],\x22RuleType\x22:\x22Counting\x22}],\x22Tag\x22:\x22Event\x22,\x22Ver\x22:\x221.0.0\x22}');}if(_0x5e6442[a14_0x208c('0x10')]!=null&&_0x5e6442[a14_0x208c('0x10')][a14_0x208c('0x11')]>0x0){this[a14_0x208c('0x12')](_0x5e6442[a14_0x208c('0x10')][0x0]);}}[a14_0x208c('0x13')](_0xd91d6a){console[a14_0x208c('0xb')](_0xd91d6a);setTimeout(function(){this[a14_0x208c('0x5')]();}[a14_0x208c('0xc')](this),0x1388);}}exports[a14_0x208c('0x14')]=CountingWebSocketService;