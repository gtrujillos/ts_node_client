var a22_0x184f=['StationContext','settings','doorSensorUser','doorSensorPass','doorSensorURL','length','SensorsService','defineProperty','../infrastructure/stationSettings','request','doorStatus','init','log','exploreDir'];(function(_0x4b315c,_0x2d152c){var _0x35a9d1=function(_0x151d7f){while(--_0x151d7f){_0x4b315c['push'](_0x4b315c['shift']());}};_0x35a9d1(++_0x2d152c);}(a22_0x184f,0x69));var a22_0x1e9f=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a22_0x184f[_0x2d8f05];return _0x4d74cb;};'use strict';Object[a22_0x1e9f('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a22_0x1e9f('0x1'));const fs=require('fs');const request=require(a22_0x1e9f('0x2'));class SensorsService{constructor(){this[a22_0x1e9f('0x3')]=0x0;}[a22_0x1e9f('0x4')](){console[a22_0x1e9f('0x5')]('init\x20SensorsService');this[a22_0x1e9f('0x6')](0x0);}[a22_0x1e9f('0x6')](_0x2c483d){const _0x279687=stationSettings_1[a22_0x1e9f('0x7')][a22_0x1e9f('0x8')][a22_0x1e9f('0x9')],_0x3a1b3e=stationSettings_1[a22_0x1e9f('0x7')]['settings'][a22_0x1e9f('0xa')],_0xac5d18=stationSettings_1[a22_0x1e9f('0x7')][a22_0x1e9f('0x8')][a22_0x1e9f('0xb')],_0x5665c3='Basic\x20'+new Buffer(_0x279687+':'+_0x3a1b3e)['toString']('base64');request({'url':_0xac5d18,'headers':{'Authorization':_0x5665c3}},(_0xdd007c,_0x5d5890,_0x49a4a7)=>{if(_0x49a4a7!=null&&_0x49a4a7[a22_0x1e9f('0xc')]>0x4){const _0x2a3012=_0x49a4a7['substr'](0x4,0x1);if(Number(_0x2a3012)!==NaN){this[a22_0x1e9f('0x3')]=Number(_0x2a3012);}}});setTimeout(()=>{this[a22_0x1e9f('0x6')](++_0x2c483d);},0x1f4);}}exports[a22_0x1e9f('0xd')]=SensorsService;