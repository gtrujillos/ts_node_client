var a16_0x1dad=['data','gpsOnData','bind','processGPSData','latitude','lat','replace','toFixed','hdop','speed','round','GPSService','defineProperty','__esModule','locationParts','init','init\x20GPSService','gps'];(function(_0x2ffbbe,_0x239cb6){var _0x4960d7=function(_0x53560f){while(--_0x53560f){_0x2ffbbe['push'](_0x2ffbbe['shift']());}};_0x4960d7(++_0x239cb6);}(a16_0x1dad,0xd2));var a16_0x2f7b=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a16_0x1dad[_0x2f3e31];return _0x2c6db2;};'use strict';Object[a16_0x2f7b('0x0')](exports,a16_0x2f7b('0x1'),{'value':!![]});class GPSService{constructor(){this[a16_0x2f7b('0x2')]={'latitude':'','longitude':'','speed':'','hdop':''};}[a16_0x2f7b('0x3')](){console['log'](a16_0x2f7b('0x4'));const _0x5b0cf2=require('gps');this[a16_0x2f7b('0x5')]=new _0x5b0cf2();this[a16_0x2f7b('0x5')]['on'](a16_0x2f7b('0x6'),this[a16_0x2f7b('0x7')][a16_0x2f7b('0x8')](this));}[a16_0x2f7b('0x7')](_0x59d702){this[a16_0x2f7b('0x9')](_0x59d702);}[a16_0x2f7b('0x9')](_0x1d6ebd){if(_0x1d6ebd['lat']!=undefined)this[a16_0x2f7b('0x2')][a16_0x2f7b('0xa')]=String(_0x1d6ebd[a16_0x2f7b('0xb')]['toFixed'](0x6))[a16_0x2f7b('0xc')]('.',',');if(_0x1d6ebd[a16_0x2f7b('0xb')]!=undefined)this[a16_0x2f7b('0x2')]['longitude']=String(_0x1d6ebd['lon'][a16_0x2f7b('0xd')](0x6))[a16_0x2f7b('0xc')]('.',',');if(_0x1d6ebd[a16_0x2f7b('0xe')]!=undefined)this[a16_0x2f7b('0x2')]['hdop']=String(_0x1d6ebd[a16_0x2f7b('0xe')][a16_0x2f7b('0xd')](0x2))[a16_0x2f7b('0xc')]('.',',');if(_0x1d6ebd[a16_0x2f7b('0xf')]!=undefined)this[a16_0x2f7b('0x2')][a16_0x2f7b('0xf')]=String(Math[a16_0x2f7b('0x10')](_0x1d6ebd[a16_0x2f7b('0xf')]));}}exports[a16_0x2f7b('0x11')]=GPSService;