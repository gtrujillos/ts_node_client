var a22_0x4055=['init','log','init\x20SensorsService','exploreDir','StationContext','doorSensorUser','settings','base64','length','substr','SensorsService','defineProperty','../infrastructure/stationSettings','request','doorStatus'];(function(_0x5e738a,_0x33da81){var _0x2c1232=function(_0x41949f){while(--_0x41949f){_0x5e738a['push'](_0x5e738a['shift']());}};_0x2c1232(++_0x33da81);}(a22_0x4055,0xec));var a22_0x34a9=function(_0x1b2768,_0x2c7d5d){_0x1b2768=_0x1b2768-0x0;var _0x3e19af=a22_0x4055[_0x1b2768];return _0x3e19af;};'use strict';Object[a22_0x34a9('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a22_0x34a9('0x1'));const fs=require('fs');const request=require(a22_0x34a9('0x2'));class SensorsService{constructor(){this[a22_0x34a9('0x3')]=0x0;}[a22_0x34a9('0x4')](){console[a22_0x34a9('0x5')](a22_0x34a9('0x6'));this[a22_0x34a9('0x7')](0x0);}[a22_0x34a9('0x7')](_0x397494){const _0x225f77=stationSettings_1[a22_0x34a9('0x8')]['settings'][a22_0x34a9('0x9')],_0x184042=stationSettings_1[a22_0x34a9('0x8')]['settings']['doorSensorPass'],_0x2d564f=stationSettings_1[a22_0x34a9('0x8')][a22_0x34a9('0xa')]['doorSensorURL'],_0x391222='Basic\x20'+new Buffer(_0x225f77+':'+_0x184042)['toString'](a22_0x34a9('0xb'));request({'url':_0x2d564f,'headers':{'Authorization':_0x391222}},(_0x1c7c65,_0x29ce8e,_0x458733)=>{if(_0x458733!=null&&_0x458733[a22_0x34a9('0xc')]>0x4){const _0x39fd71=_0x458733[a22_0x34a9('0xd')](0x4,0x1);if(Number(_0x39fd71)!==NaN){this['doorStatus']=Number(_0x39fd71);}}});setTimeout(()=>{this['exploreDir'](++_0x397494);},0x1f4);}}exports[a22_0x34a9('0xe')]=SensorsService;