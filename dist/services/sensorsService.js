var a19_0x3fde=['log','StationContext','settings','doorSensorURL','Basic\x20','toString','base64','substr','SensorsService','defineProperty','../infrastructure/stationSettings','request','doorStatus','init','exploreDir'];(function(_0x48d152,_0x2fbeaa){var _0x19ae43=function(_0x2c1250){while(--_0x2c1250){_0x48d152['push'](_0x48d152['shift']());}};_0x19ae43(++_0x2fbeaa);}(a19_0x3fde,0xf9));var a19_0x3fc3=function(_0x108ea3,_0x1ffe26){_0x108ea3=_0x108ea3-0x0;var _0x35604c=a19_0x3fde[_0x108ea3];return _0x35604c;};'use strict';Object[a19_0x3fc3('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a19_0x3fc3('0x1'));const fs=require('fs');const request=require(a19_0x3fc3('0x2'));class SensorsService{constructor(){this[a19_0x3fc3('0x3')]=0x0;}[a19_0x3fc3('0x4')](){this[a19_0x3fc3('0x5')](0x0);console[a19_0x3fc3('0x6')]('init\x20Sensors');}[a19_0x3fc3('0x5')](_0xb2f615){const _0x21be03=stationSettings_1['StationContext']['settings']['doorSensorUser'],_0x192711=stationSettings_1[a19_0x3fc3('0x7')][a19_0x3fc3('0x8')]['doorSensorPass'],_0x30d44c=stationSettings_1[a19_0x3fc3('0x7')]['settings'][a19_0x3fc3('0x9')],_0x3e5e3a=a19_0x3fc3('0xa')+new Buffer(_0x21be03+':'+_0x192711)[a19_0x3fc3('0xb')](a19_0x3fc3('0xc'));request({'url':_0x30d44c,'headers':{'Authorization':_0x3e5e3a}},(_0x46daa4,_0x2904fa,_0x465cc1)=>{if(_0x465cc1!=null&&_0x465cc1['length']>0x4){const _0xf3c89e=_0x465cc1[a19_0x3fc3('0xd')](0x4,0x1);if(Number(_0xf3c89e)!==NaN){this['doorStatus']=Number(_0xf3c89e);}}});setTimeout(()=>{this[a19_0x3fc3('0x5')](++_0xb2f615);},0x1f4);}}exports[a19_0x3fc3('0xe')]=SensorsService;