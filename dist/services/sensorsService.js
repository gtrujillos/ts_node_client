var a19_0x1a2b=['defineProperty','__esModule','../infrastructure/stationSettings','request','doorStatus','log','init\x20SensorsService','exploreDir','settings','doorSensorUser','StationContext','doorSensorURL','Basic\x20','base64','substr','SensorsService'];(function(_0x5567d7,_0x37c4ae){var _0x32f5b4=function(_0x2ba820){while(--_0x2ba820){_0x5567d7['push'](_0x5567d7['shift']());}};_0x32f5b4(++_0x37c4ae);}(a19_0x1a2b,0x70));var a19_0x463f=function(_0x33f136,_0x70dfe2){_0x33f136=_0x33f136-0x0;var _0x856d02=a19_0x1a2b[_0x33f136];return _0x856d02;};'use strict';Object[a19_0x463f('0x0')](exports,a19_0x463f('0x1'),{'value':!![]});const stationSettings_1=require(a19_0x463f('0x2'));const fs=require('fs');const request=require(a19_0x463f('0x3'));class SensorsService{constructor(){this[a19_0x463f('0x4')]=0x0;}['init'](){console[a19_0x463f('0x5')](a19_0x463f('0x6'));this[a19_0x463f('0x7')](0x0);}[a19_0x463f('0x7')](_0x2e56e1){const _0xe998ad=stationSettings_1['StationContext'][a19_0x463f('0x8')][a19_0x463f('0x9')],_0x5d15bd=stationSettings_1[a19_0x463f('0xa')][a19_0x463f('0x8')]['doorSensorPass'],_0x1df36c=stationSettings_1[a19_0x463f('0xa')]['settings'][a19_0x463f('0xb')],_0x1c1a55=a19_0x463f('0xc')+new Buffer(_0xe998ad+':'+_0x5d15bd)['toString'](a19_0x463f('0xd'));request({'url':_0x1df36c,'headers':{'Authorization':_0x1c1a55}},(_0x4ee7f6,_0x242c90,_0x753d0e)=>{if(_0x753d0e!=null&&_0x753d0e['length']>0x4){const _0x33b3e7=_0x753d0e[a19_0x463f('0xe')](0x4,0x1);if(Number(_0x33b3e7)!==NaN){this[a19_0x463f('0x4')]=Number(_0x33b3e7);}}});setTimeout(()=>{this[a19_0x463f('0x7')](++_0x2e56e1);},0x1f4);}}exports[a19_0x463f('0xf')]=SensorsService;