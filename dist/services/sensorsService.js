var a20_0x590c=['doorSensorUser','doorSensorPass','doorSensorURL','toString','base64','length','substr','defineProperty','__esModule','../infrastructure/stationSettings','request','doorStatus','init\x20SensorsService','exploreDir','StationContext','settings'];(function(_0x10c35d,_0x54eca3){var _0xe8c26b=function(_0x2f91eb){while(--_0x2f91eb){_0x10c35d['push'](_0x10c35d['shift']());}};_0xe8c26b(++_0x54eca3);}(a20_0x590c,0xd7));var a20_0x1317=function(_0x2699a9,_0x501e82){_0x2699a9=_0x2699a9-0x0;var _0x5b6c40=a20_0x590c[_0x2699a9];return _0x5b6c40;};'use strict';Object[a20_0x1317('0x0')](exports,a20_0x1317('0x1'),{'value':!![]});const stationSettings_1=require(a20_0x1317('0x2'));const fs=require('fs');const request=require(a20_0x1317('0x3'));class SensorsService{constructor(){this[a20_0x1317('0x4')]=0x0;}['init'](){console['log'](a20_0x1317('0x5'));this[a20_0x1317('0x6')](0x0);}[a20_0x1317('0x6')](_0x4d19f0){const _0x173dd6=stationSettings_1[a20_0x1317('0x7')][a20_0x1317('0x8')][a20_0x1317('0x9')],_0x404d1f=stationSettings_1[a20_0x1317('0x7')][a20_0x1317('0x8')][a20_0x1317('0xa')],_0x5e9ab6=stationSettings_1[a20_0x1317('0x7')][a20_0x1317('0x8')][a20_0x1317('0xb')],_0x31eb3b='Basic\x20'+new Buffer(_0x173dd6+':'+_0x404d1f)[a20_0x1317('0xc')](a20_0x1317('0xd'));request({'url':_0x5e9ab6,'headers':{'Authorization':_0x31eb3b}},(_0x43a3f8,_0x3e10ed,_0x519ad7)=>{if(_0x519ad7!=null&&_0x519ad7[a20_0x1317('0xe')]>0x4){const _0xeeff52=_0x519ad7[a20_0x1317('0xf')](0x4,0x1);if(Number(_0xeeff52)!==NaN){this['doorStatus']=Number(_0xeeff52);}}});setTimeout(()=>{this[a20_0x1317('0x6')](++_0x4d19f0);},0x1f4);}}exports['SensorsService']=SensorsService;