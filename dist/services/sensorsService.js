var a19_0x2cab=['settings','doorSensorUser','doorSensorPass','doorSensorURL','Basic\x20','toString','length','substr','doorStatus','SensorsService','defineProperty','__esModule','../infrastructure/stationSettings','request','log','init\x20SensorsService','exploreDir','StationContext'];(function(_0xa3bd4,_0x333454){var _0x2a4196=function(_0x4d0249){while(--_0x4d0249){_0xa3bd4['push'](_0xa3bd4['shift']());}};_0x2a4196(++_0x333454);}(a19_0x2cab,0x76));var a19_0x2e8e=function(_0x49b1ee,_0x66334d){_0x49b1ee=_0x49b1ee-0x0;var _0x238bad=a19_0x2cab[_0x49b1ee];return _0x238bad;};'use strict';Object[a19_0x2e8e('0x0')](exports,a19_0x2e8e('0x1'),{'value':!![]});const stationSettings_1=require(a19_0x2e8e('0x2'));const fs=require('fs');const request=require(a19_0x2e8e('0x3'));class SensorsService{constructor(){this['doorStatus']=0x0;}['init'](){console[a19_0x2e8e('0x4')](a19_0x2e8e('0x5'));this['exploreDir'](0x0);}[a19_0x2e8e('0x6')](_0x233d48){const _0x484a51=stationSettings_1[a19_0x2e8e('0x7')][a19_0x2e8e('0x8')][a19_0x2e8e('0x9')],_0x5a2bc8=stationSettings_1[a19_0x2e8e('0x7')]['settings'][a19_0x2e8e('0xa')],_0x41cc17=stationSettings_1['StationContext'][a19_0x2e8e('0x8')][a19_0x2e8e('0xb')],_0x503954=a19_0x2e8e('0xc')+new Buffer(_0x484a51+':'+_0x5a2bc8)[a19_0x2e8e('0xd')]('base64');request({'url':_0x41cc17,'headers':{'Authorization':_0x503954}},(_0x54911d,_0x430973,_0x675504)=>{if(_0x675504!=null&&_0x675504[a19_0x2e8e('0xe')]>0x4){const _0x40f001=_0x675504[a19_0x2e8e('0xf')](0x4,0x1);if(Number(_0x40f001)!==NaN){this[a19_0x2e8e('0x10')]=Number(_0x40f001);}}});setTimeout(()=>{this[a19_0x2e8e('0x6')](++_0x233d48);},0x1f4);}}exports[a19_0x2e8e('0x11')]=SensorsService;