var a19_0xbe37=['substr','SensorsService','defineProperty','../infrastructure/stationSettings','doorStatus','log','init\x20SensorsService','exploreDir','doorSensorUser','doorSensorPass','StationContext','settings','doorSensorURL','Basic\x20','base64','length'];(function(_0x3807b1,_0x4a96f0){var _0x561144=function(_0x252570){while(--_0x252570){_0x3807b1['push'](_0x3807b1['shift']());}};_0x561144(++_0x4a96f0);}(a19_0xbe37,0xe2));var a19_0x13e4=function(_0x434ce6,_0xbcc853){_0x434ce6=_0x434ce6-0x0;var _0x2893e4=a19_0xbe37[_0x434ce6];return _0x2893e4;};'use strict';Object[a19_0x13e4('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a19_0x13e4('0x1'));const fs=require('fs');const request=require('request');class SensorsService{constructor(){this[a19_0x13e4('0x2')]=0x0;}['init'](){console[a19_0x13e4('0x3')](a19_0x13e4('0x4'));this[a19_0x13e4('0x5')](0x0);}[a19_0x13e4('0x5')](_0x4d624f){const _0x588f02=stationSettings_1['StationContext']['settings'][a19_0x13e4('0x6')],_0x1e70db=stationSettings_1['StationContext']['settings'][a19_0x13e4('0x7')],_0x54166c=stationSettings_1[a19_0x13e4('0x8')][a19_0x13e4('0x9')][a19_0x13e4('0xa')],_0x5b2a1b=a19_0x13e4('0xb')+new Buffer(_0x588f02+':'+_0x1e70db)['toString'](a19_0x13e4('0xc'));request({'url':_0x54166c,'headers':{'Authorization':_0x5b2a1b}},(_0x41907e,_0x498a53,_0x412948)=>{if(_0x412948!=null&&_0x412948[a19_0x13e4('0xd')]>0x4){const _0x3137dc=_0x412948[a19_0x13e4('0xe')](0x4,0x1);if(Number(_0x3137dc)!==NaN){this[a19_0x13e4('0x2')]=Number(_0x3137dc);}}});setTimeout(()=>{this[a19_0x13e4('0x5')](++_0x4d624f);},0x1f4);}}exports[a19_0x13e4('0xf')]=SensorsService;