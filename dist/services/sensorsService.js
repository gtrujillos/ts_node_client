var a20_0x330a=['StationContext','settings','doorSensorUser','doorSensorURL','Basic\x20','toString','base64','substr','doorStatus','SensorsService','defineProperty','__esModule','../infrastructure/stationSettings','request','init','init\x20SensorsService','exploreDir'];(function(_0xf34179,_0x5b6b9b){var _0x554d0e=function(_0x5cae06){while(--_0x5cae06){_0xf34179['push'](_0xf34179['shift']());}};_0x554d0e(++_0x5b6b9b);}(a20_0x330a,0x109));var a20_0x442f=function(_0x13dd41,_0x2e48ce){_0x13dd41=_0x13dd41-0x0;var _0x1b1131=a20_0x330a[_0x13dd41];return _0x1b1131;};'use strict';Object[a20_0x442f('0x0')](exports,a20_0x442f('0x1'),{'value':!![]});const stationSettings_1=require(a20_0x442f('0x2'));const fs=require('fs');const request=require(a20_0x442f('0x3'));class SensorsService{constructor(){this['doorStatus']=0x0;}[a20_0x442f('0x4')](){console['log'](a20_0x442f('0x5'));this[a20_0x442f('0x6')](0x0);}[a20_0x442f('0x6')](_0x3e9ac3){const _0x1fe88a=stationSettings_1[a20_0x442f('0x7')][a20_0x442f('0x8')][a20_0x442f('0x9')],_0x2af538=stationSettings_1[a20_0x442f('0x7')][a20_0x442f('0x8')]['doorSensorPass'],_0x156577=stationSettings_1[a20_0x442f('0x7')][a20_0x442f('0x8')][a20_0x442f('0xa')],_0x10ca35=a20_0x442f('0xb')+new Buffer(_0x1fe88a+':'+_0x2af538)[a20_0x442f('0xc')](a20_0x442f('0xd'));request({'url':_0x156577,'headers':{'Authorization':_0x10ca35}},(_0x11e8af,_0x5ee848,_0x886787)=>{if(_0x886787!=null&&_0x886787['length']>0x4){const _0x66f098=_0x886787[a20_0x442f('0xe')](0x4,0x1);if(Number(_0x66f098)!==NaN){this[a20_0x442f('0xf')]=Number(_0x66f098);}}});setTimeout(()=>{this[a20_0x442f('0x6')](++_0x3e9ac3);},0x1f4);}}exports[a20_0x442f('0x10')]=SensorsService;