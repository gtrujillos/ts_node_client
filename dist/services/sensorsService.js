var a19_0x1a7a=['doorSensorPass','doorSensorURL','base64','substr','request','init','log','init\x20SensorsService','exploreDir','StationContext','settings','doorSensorUser'];(function(_0x9f3a7a,_0x4507ab){var _0x5ca094=function(_0x2862bd){while(--_0x2862bd){_0x9f3a7a['push'](_0x9f3a7a['shift']());}};_0x5ca094(++_0x4507ab);}(a19_0x1a7a,0x184));var a19_0x17f0=function(_0x3f9a28,_0x47dd6f){_0x3f9a28=_0x3f9a28-0x0;var _0x4556cd=a19_0x1a7a[_0x3f9a28];return _0x4556cd;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');const fs=require('fs');const request=require(a19_0x17f0('0x0'));class SensorsService{constructor(){this['doorStatus']=0x0;}[a19_0x17f0('0x1')](){console[a19_0x17f0('0x2')](a19_0x17f0('0x3'));this[a19_0x17f0('0x4')](0x0);}[a19_0x17f0('0x4')](_0x4dda84){const _0x6aba5b=stationSettings_1[a19_0x17f0('0x5')][a19_0x17f0('0x6')][a19_0x17f0('0x7')],_0x1e4e10=stationSettings_1[a19_0x17f0('0x5')][a19_0x17f0('0x6')][a19_0x17f0('0x8')],_0x3e381e=stationSettings_1['StationContext'][a19_0x17f0('0x6')][a19_0x17f0('0x9')],_0x5bb569='Basic\x20'+new Buffer(_0x6aba5b+':'+_0x1e4e10)['toString'](a19_0x17f0('0xa'));request({'url':_0x3e381e,'headers':{'Authorization':_0x5bb569}},(_0x492f5d,_0x52298e,_0x7f5dc8)=>{if(_0x7f5dc8!=null&&_0x7f5dc8['length']>0x4){const _0x454185=_0x7f5dc8[a19_0x17f0('0xb')](0x4,0x1);if(Number(_0x454185)!==NaN){this['doorStatus']=Number(_0x454185);}}});setTimeout(()=>{this[a19_0x17f0('0x4')](++_0x4dda84);},0x1f4);}}exports['SensorsService']=SensorsService;