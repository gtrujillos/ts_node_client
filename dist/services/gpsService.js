var a16_0x4727=['toFixed','replace','hdop','speed','round','defineProperty','__esModule','init','init\x20GPSService','gps','data','bind','processGPSData','locationParts','lat','longitude','lon'];(function(_0x5b6106,_0x3e7728){var _0x5e58a1=function(_0x96326){while(--_0x96326){_0x5b6106['push'](_0x5b6106['shift']());}};_0x5e58a1(++_0x3e7728);}(a16_0x4727,0x137));var a16_0x4615=function(_0x21df0e,_0x24298e){_0x21df0e=_0x21df0e-0x0;var _0x1f2b07=a16_0x4727[_0x21df0e];return _0x1f2b07;};'use strict';Object[a16_0x4615('0x0')](exports,a16_0x4615('0x1'),{'value':!![]});class GPSService{constructor(){this['locationParts']={'latitude':'','longitude':'','speed':'','hdop':''};}[a16_0x4615('0x2')](){console['log'](a16_0x4615('0x3'));const _0x6a254f=require(a16_0x4615('0x4'));this[a16_0x4615('0x4')]=new _0x6a254f();this[a16_0x4615('0x4')]['on'](a16_0x4615('0x5'),this['gpsOnData'][a16_0x4615('0x6')](this));}['gpsOnData'](_0x539178){this[a16_0x4615('0x7')](_0x539178);}[a16_0x4615('0x7')](_0x2419e9){if(_0x2419e9['lat']!=undefined)this[a16_0x4615('0x8')]['latitude']=String(_0x2419e9[a16_0x4615('0x9')]['toFixed'](0x6))['replace']('.',',');if(_0x2419e9[a16_0x4615('0x9')]!=undefined)this[a16_0x4615('0x8')][a16_0x4615('0xa')]=String(_0x2419e9[a16_0x4615('0xb')][a16_0x4615('0xc')](0x6))[a16_0x4615('0xd')]('.',',');if(_0x2419e9[a16_0x4615('0xe')]!=undefined)this[a16_0x4615('0x8')][a16_0x4615('0xe')]=String(_0x2419e9[a16_0x4615('0xe')][a16_0x4615('0xc')](0x2))[a16_0x4615('0xd')]('.',',');if(_0x2419e9[a16_0x4615('0xf')]!=undefined)this[a16_0x4615('0x8')]['speed']=String(Math[a16_0x4615('0x10')](_0x2419e9[a16_0x4615('0xf')]));}}exports['GPSService']=GPSService;