var a18_0x5400=['doorSensorUser','StationContext','doorSensorPass','doorSensorURL','Basic\x20','toString','length','substr','SensorsService','defineProperty','request','init','exploreDir','log','init\x20Sensors','settings'];(function(_0x2a7b86,_0x3be2a7){var _0x4c79ed=function(_0x17cedf){while(--_0x17cedf){_0x2a7b86['push'](_0x2a7b86['shift']());}};_0x4c79ed(++_0x3be2a7);}(a18_0x5400,0x89));var a18_0xf5a7=function(_0x45207a,_0x251439){_0x45207a=_0x45207a-0x0;var _0x251467=a18_0x5400[_0x45207a];return _0x251467;};'use strict';Object[a18_0xf5a7('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');const fs=require('fs');const request=require(a18_0xf5a7('0x1'));class SensorsService{constructor(){this['doorStatus']=0x0;}[a18_0xf5a7('0x2')](){this[a18_0xf5a7('0x3')](0x0);console[a18_0xf5a7('0x4')](a18_0xf5a7('0x5'));}['exploreDir'](_0x581b3a){const _0x3c5429=stationSettings_1['StationContext'][a18_0xf5a7('0x6')][a18_0xf5a7('0x7')],_0x1d105e=stationSettings_1[a18_0xf5a7('0x8')]['settings'][a18_0xf5a7('0x9')],_0x31fe1d=stationSettings_1[a18_0xf5a7('0x8')][a18_0xf5a7('0x6')][a18_0xf5a7('0xa')],_0x12aeb6=a18_0xf5a7('0xb')+new Buffer(_0x3c5429+':'+_0x1d105e)[a18_0xf5a7('0xc')]('base64');request({'url':_0x31fe1d,'headers':{'Authorization':_0x12aeb6}},(_0x5107e2,_0x5ae15a,_0x4f51a5)=>{if(_0x4f51a5!=null&&_0x4f51a5[a18_0xf5a7('0xd')]>0x4){const _0x3b31b0=_0x4f51a5[a18_0xf5a7('0xe')](0x4,0x1);if(Number(_0x3b31b0)!==NaN){this['doorStatus']=Number(_0x3b31b0);}}});setTimeout(()=>{this[a18_0xf5a7('0x3')](++_0x581b3a);},0x1f4);}}exports[a18_0xf5a7('0xf')]=SensorsService;