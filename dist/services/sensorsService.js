var a22_0x51ad=['settings','doorSensorPass','doorSensorURL','Basic\x20','substr','SensorsService','defineProperty','../infrastructure/stationSettings','request','doorStatus','log','init\x20SensorsService','exploreDir','StationContext'];(function(_0x3a253e,_0x4855eb){var _0x25ccf0=function(_0x13d108){while(--_0x13d108){_0x3a253e['push'](_0x3a253e['shift']());}};_0x25ccf0(++_0x4855eb);}(a22_0x51ad,0x12c));var a22_0x11d0=function(_0x452d77,_0x4ed553){_0x452d77=_0x452d77-0x0;var _0x418012=a22_0x51ad[_0x452d77];return _0x418012;};'use strict';Object[a22_0x11d0('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a22_0x11d0('0x1'));const fs=require('fs');const request=require(a22_0x11d0('0x2'));class SensorsService{constructor(){this[a22_0x11d0('0x3')]=0x0;}['init'](){console[a22_0x11d0('0x4')](a22_0x11d0('0x5'));this[a22_0x11d0('0x6')](0x0);}['exploreDir'](_0x49194e){const _0x226342=stationSettings_1[a22_0x11d0('0x7')][a22_0x11d0('0x8')]['doorSensorUser'],_0x447f2b=stationSettings_1[a22_0x11d0('0x7')][a22_0x11d0('0x8')][a22_0x11d0('0x9')],_0x14aca0=stationSettings_1[a22_0x11d0('0x7')][a22_0x11d0('0x8')][a22_0x11d0('0xa')],_0x5c321a=a22_0x11d0('0xb')+new Buffer(_0x226342+':'+_0x447f2b)['toString']('base64');request({'url':_0x14aca0,'headers':{'Authorization':_0x5c321a}},(_0x3d6bba,_0x20b8cc,_0x220544)=>{if(_0x220544!=null&&_0x220544['length']>0x4){const _0x34b751=_0x220544[a22_0x11d0('0xc')](0x4,0x1);if(Number(_0x34b751)!==NaN){this[a22_0x11d0('0x3')]=Number(_0x34b751);}}});setTimeout(()=>{this[a22_0x11d0('0x6')](++_0x49194e);},0x1f4);}}exports[a22_0x11d0('0xd')]=SensorsService;