var a16_0x3ada=['processGPSData','toFixed','replace','locationParts','lon','hdop','speed','defineProperty','__esModule','init','gps','data','gpsOnData','bind','log','init\x20gps'];(function(_0x2f8d73,_0xfa23d1){var _0x58a3a2=function(_0x4cc923){while(--_0x4cc923){_0x2f8d73['push'](_0x2f8d73['shift']());}};_0x58a3a2(++_0xfa23d1);}(a16_0x3ada,0x157));var a16_0x3ca5=function(_0x202093,_0x24fe83){_0x202093=_0x202093-0x0;var _0x29942a=a16_0x3ada[_0x202093];return _0x29942a;};'use strict';Object[a16_0x3ca5('0x0')](exports,a16_0x3ca5('0x1'),{'value':!![]});class GPSService{constructor(){this['locationParts']={'latitude':'','longitude':'','speed':'','hdop':''};}[a16_0x3ca5('0x2')](){const _0x3a071f=require('gps');this[a16_0x3ca5('0x3')]=new _0x3a071f();this[a16_0x3ca5('0x3')]['on'](a16_0x3ca5('0x4'),this[a16_0x3ca5('0x5')][a16_0x3ca5('0x6')](this));console[a16_0x3ca5('0x7')](a16_0x3ca5('0x8'));}['gpsOnData'](_0x4c0679){this[a16_0x3ca5('0x9')](_0x4c0679);}[a16_0x3ca5('0x9')](_0x1d5b5e){if(_0x1d5b5e['lat']!=undefined)this['locationParts']['latitude']=String(_0x1d5b5e['lat'][a16_0x3ca5('0xa')](0x6))[a16_0x3ca5('0xb')]('.',',');if(_0x1d5b5e['lat']!=undefined)this[a16_0x3ca5('0xc')]['longitude']=String(_0x1d5b5e[a16_0x3ca5('0xd')][a16_0x3ca5('0xa')](0x6))[a16_0x3ca5('0xb')]('.',',');if(_0x1d5b5e[a16_0x3ca5('0xe')]!=undefined)this[a16_0x3ca5('0xc')][a16_0x3ca5('0xe')]=String(_0x1d5b5e[a16_0x3ca5('0xe')][a16_0x3ca5('0xa')](0x2))[a16_0x3ca5('0xb')]('.',',');if(_0x1d5b5e['speed']!=undefined)this[a16_0x3ca5('0xc')][a16_0x3ca5('0xf')]=String(Math['round'](_0x1d5b5e[a16_0x3ca5('0xf')]));}}exports['GPSService']=GPSService;