var a16_0x51fd=['gpsOnData','bind','processGPSData','lat','latitude','replace','longitude','lon','toFixed','hdop','speed','round','GPSService','defineProperty','__esModule','locationParts','log','init\x20GPSService','gps','data'];(function(_0xfdfa45,_0x2fd7e2){var _0x1f156b=function(_0x72b08d){while(--_0x72b08d){_0xfdfa45['push'](_0xfdfa45['shift']());}};_0x1f156b(++_0x2fd7e2);}(a16_0x51fd,0x19d));var a16_0x3132=function(_0x3b7251,_0x1946fe){_0x3b7251=_0x3b7251-0x0;var _0x54de23=a16_0x51fd[_0x3b7251];return _0x54de23;};'use strict';Object[a16_0x3132('0x0')](exports,a16_0x3132('0x1'),{'value':!![]});class GPSService{constructor(){this[a16_0x3132('0x2')]={'latitude':'','longitude':'','speed':'','hdop':''};}['init'](){console[a16_0x3132('0x3')](a16_0x3132('0x4'));const _0x89eeb9=require('gps');this[a16_0x3132('0x5')]=new _0x89eeb9();this[a16_0x3132('0x5')]['on'](a16_0x3132('0x6'),this[a16_0x3132('0x7')][a16_0x3132('0x8')](this));}[a16_0x3132('0x7')](_0x2989df){this[a16_0x3132('0x9')](_0x2989df);}[a16_0x3132('0x9')](_0xb13a8c){if(_0xb13a8c[a16_0x3132('0xa')]!=undefined)this[a16_0x3132('0x2')][a16_0x3132('0xb')]=String(_0xb13a8c['lat']['toFixed'](0x6))[a16_0x3132('0xc')]('.',',');if(_0xb13a8c[a16_0x3132('0xa')]!=undefined)this['locationParts'][a16_0x3132('0xd')]=String(_0xb13a8c[a16_0x3132('0xe')][a16_0x3132('0xf')](0x6))[a16_0x3132('0xc')]('.',',');if(_0xb13a8c['hdop']!=undefined)this[a16_0x3132('0x2')]['hdop']=String(_0xb13a8c[a16_0x3132('0x10')]['toFixed'](0x2))['replace']('.',',');if(_0xb13a8c[a16_0x3132('0x11')]!=undefined)this['locationParts'][a16_0x3132('0x11')]=String(Math[a16_0x3132('0x12')](_0xb13a8c[a16_0x3132('0x11')]));}}exports[a16_0x3132('0x13')]=GPSService;