var a19_0x1af4=['doorSensorURL','Basic\x20','base64','defineProperty','../infrastructure/stationSettings','request','doorStatus','exploreDir','log','init\x20Sensors','StationContext','settings','doorSensorUser','doorSensorPass'];(function(_0x441719,_0x2e7f8b){var _0x489930=function(_0x21ae89){while(--_0x21ae89){_0x441719['push'](_0x441719['shift']());}};_0x489930(++_0x2e7f8b);}(a19_0x1af4,0xc7));var a19_0x40f9=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a19_0x1af4[_0x2d8f05];return _0x4d74cb;};'use strict';Object[a19_0x40f9('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a19_0x40f9('0x1'));const fs=require('fs');const request=require(a19_0x40f9('0x2'));class SensorsService{constructor(){this[a19_0x40f9('0x3')]=0x0;}['init'](){this[a19_0x40f9('0x4')](0x0);console[a19_0x40f9('0x5')](a19_0x40f9('0x6'));}[a19_0x40f9('0x4')](_0x5e45ab){const _0x2a9832=stationSettings_1[a19_0x40f9('0x7')][a19_0x40f9('0x8')][a19_0x40f9('0x9')],_0x5a3114=stationSettings_1[a19_0x40f9('0x7')][a19_0x40f9('0x8')][a19_0x40f9('0xa')],_0x1ad6cd=stationSettings_1['StationContext'][a19_0x40f9('0x8')][a19_0x40f9('0xb')],_0x28721d=a19_0x40f9('0xc')+new Buffer(_0x2a9832+':'+_0x5a3114)['toString'](a19_0x40f9('0xd'));request({'url':_0x1ad6cd,'headers':{'Authorization':_0x28721d}},(_0x204c0b,_0x365574,_0x22e102)=>{if(_0x22e102!=null&&_0x22e102['length']>0x4){const _0x51125f=_0x22e102['substr'](0x4,0x1);if(Number(_0x51125f)!==NaN){this[a19_0x40f9('0x3')]=Number(_0x51125f);}}});setTimeout(()=>{this[a19_0x40f9('0x4')](++_0x5e45ab);},0x1f4);}}exports['SensorsService']=SensorsService;