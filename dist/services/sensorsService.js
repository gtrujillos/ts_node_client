var a20_0x1a6e=['log','init\x20SensorsService','exploreDir','StationContext','doorSensorUser','settings','doorSensorPass','doorSensorURL','Basic\x20','toString','base64','length','SensorsService','__esModule','../infrastructure/stationSettings','request','doorStatus','init'];(function(_0x328831,_0x4b2a1a){var _0x44b108=function(_0x29c6ef){while(--_0x29c6ef){_0x328831['push'](_0x328831['shift']());}};_0x44b108(++_0x4b2a1a);}(a20_0x1a6e,0x1e1));var a20_0x4140=function(_0xcf390d,_0x5f199e){_0xcf390d=_0xcf390d-0x0;var _0x122eae=a20_0x1a6e[_0xcf390d];return _0x122eae;};'use strict';Object['defineProperty'](exports,a20_0x4140('0x0'),{'value':!![]});const stationSettings_1=require(a20_0x4140('0x1'));const fs=require('fs');const request=require(a20_0x4140('0x2'));class SensorsService{constructor(){this[a20_0x4140('0x3')]=0x0;}[a20_0x4140('0x4')](){console[a20_0x4140('0x5')](a20_0x4140('0x6'));this['exploreDir'](0x0);}[a20_0x4140('0x7')](_0x25887a){const _0x4ee84e=stationSettings_1[a20_0x4140('0x8')]['settings'][a20_0x4140('0x9')],_0xf43119=stationSettings_1[a20_0x4140('0x8')][a20_0x4140('0xa')][a20_0x4140('0xb')],_0x407f8b=stationSettings_1['StationContext']['settings'][a20_0x4140('0xc')],_0x98c2b8=a20_0x4140('0xd')+new Buffer(_0x4ee84e+':'+_0xf43119)[a20_0x4140('0xe')](a20_0x4140('0xf'));request({'url':_0x407f8b,'headers':{'Authorization':_0x98c2b8}},(_0x510fae,_0x51ed62,_0x5bf5fa)=>{if(_0x5bf5fa!=null&&_0x5bf5fa[a20_0x4140('0x10')]>0x4){const _0x21089a=_0x5bf5fa['substr'](0x4,0x1);if(Number(_0x21089a)!==NaN){this[a20_0x4140('0x3')]=Number(_0x21089a);}}});setTimeout(()=>{this[a20_0x4140('0x7')](++_0x25887a);},0x1f4);}}exports[a20_0x4140('0x11')]=SensorsService;