var a23_0x5677=['init\x20SensorsService','exploreDir','StationContext','settings','doorSensorUser','doorSensorURL','Basic\x20','toString','base64','substr','doorStatus','SensorsService','defineProperty','__esModule','../infrastructure/stationSettings','request','init','log'];(function(_0x1965a2,_0x25e8bc){var _0x3c0cea=function(_0x32b408){while(--_0x32b408){_0x1965a2['push'](_0x1965a2['shift']());}};_0x3c0cea(++_0x25e8bc);}(a23_0x5677,0xf6));var a23_0x13dc=function(_0x1901bb,_0xa31ec8){_0x1901bb=_0x1901bb-0x0;var _0x2fb244=a23_0x5677[_0x1901bb];return _0x2fb244;};'use strict';Object[a23_0x13dc('0x0')](exports,a23_0x13dc('0x1'),{'value':!![]});const stationSettings_1=require(a23_0x13dc('0x2'));const fs=require('fs');const request=require(a23_0x13dc('0x3'));class SensorsService{constructor(){this['doorStatus']=0x0;}[a23_0x13dc('0x4')](){console[a23_0x13dc('0x5')](a23_0x13dc('0x6'));this[a23_0x13dc('0x7')](0x0);}['exploreDir'](_0x2b1526){const _0x402db2=stationSettings_1[a23_0x13dc('0x8')][a23_0x13dc('0x9')][a23_0x13dc('0xa')],_0x566982=stationSettings_1[a23_0x13dc('0x8')][a23_0x13dc('0x9')]['doorSensorPass'],_0x11b63a=stationSettings_1['StationContext']['settings'][a23_0x13dc('0xb')],_0x3a5a0d=a23_0x13dc('0xc')+new Buffer(_0x402db2+':'+_0x566982)[a23_0x13dc('0xd')](a23_0x13dc('0xe'));request({'url':_0x11b63a,'headers':{'Authorization':_0x3a5a0d}},(_0x54f421,_0x16a478,_0x5078b7)=>{if(_0x5078b7!=null&&_0x5078b7['length']>0x4){const _0x5dd0da=_0x5078b7[a23_0x13dc('0xf')](0x4,0x1);if(Number(_0x5dd0da)!==NaN){this[a23_0x13dc('0x10')]=Number(_0x5dd0da);}}});setTimeout(()=>{this[a23_0x13dc('0x7')](++_0x2b1526);},0x1f4);}}exports[a23_0x13dc('0x11')]=SensorsService;