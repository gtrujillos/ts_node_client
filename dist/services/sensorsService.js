var a19_0x26ed=['__esModule','../infrastructure/stationSettings','request','doorStatus','exploreDir','log','init\x20Sensors','StationContext','doorSensorUser','settings','doorSensorPass','doorSensorURL','Basic\x20','toString','base64','length','substr','SensorsService','defineProperty'];(function(_0x4001ea,_0x19f591){var _0x25c63a=function(_0x3f7d51){while(--_0x3f7d51){_0x4001ea['push'](_0x4001ea['shift']());}};_0x25c63a(++_0x19f591);}(a19_0x26ed,0x142));var a19_0x2b3a=function(_0x2b1a71,_0x57e127){_0x2b1a71=_0x2b1a71-0x0;var _0x1e7438=a19_0x26ed[_0x2b1a71];return _0x1e7438;};'use strict';Object[a19_0x2b3a('0x0')](exports,a19_0x2b3a('0x1'),{'value':!![]});const stationSettings_1=require(a19_0x2b3a('0x2'));const fs=require('fs');const request=require(a19_0x2b3a('0x3'));class SensorsService{constructor(){this[a19_0x2b3a('0x4')]=0x0;}['init'](){this[a19_0x2b3a('0x5')](0x0);console[a19_0x2b3a('0x6')](a19_0x2b3a('0x7'));}[a19_0x2b3a('0x5')](_0x16582b){const _0x3c59eb=stationSettings_1[a19_0x2b3a('0x8')]['settings'][a19_0x2b3a('0x9')],_0x3e307d=stationSettings_1['StationContext'][a19_0x2b3a('0xa')][a19_0x2b3a('0xb')],_0x5842fe=stationSettings_1[a19_0x2b3a('0x8')][a19_0x2b3a('0xa')][a19_0x2b3a('0xc')],_0x4babf9=a19_0x2b3a('0xd')+new Buffer(_0x3c59eb+':'+_0x3e307d)[a19_0x2b3a('0xe')](a19_0x2b3a('0xf'));request({'url':_0x5842fe,'headers':{'Authorization':_0x4babf9}},(_0x2abf0f,_0x20a122,_0x57c915)=>{if(_0x57c915!=null&&_0x57c915[a19_0x2b3a('0x10')]>0x4){const _0x5d611a=_0x57c915[a19_0x2b3a('0x11')](0x4,0x1);if(Number(_0x5d611a)!==NaN){this[a19_0x2b3a('0x4')]=Number(_0x5d611a);}}});setTimeout(()=>{this[a19_0x2b3a('0x5')](++_0x16582b);},0x1f4);}}exports[a19_0x2b3a('0x12')]=SensorsService;