var a16_0x16cd=['init\x20GPSService','gps','data','gpsOnData','processGPSData','lat','latitude','replace','longitude','lon','hdop','speed','round','defineProperty','__esModule','locationParts','init'];(function(_0x23b969,_0x251b03){var _0x20231c=function(_0xf987f3){while(--_0xf987f3){_0x23b969['push'](_0x23b969['shift']());}};_0x20231c(++_0x251b03);}(a16_0x16cd,0x194));var a16_0x355d=function(_0x40646a,_0x25ca5c){_0x40646a=_0x40646a-0x0;var _0x47f3ea=a16_0x16cd[_0x40646a];return _0x47f3ea;};'use strict';Object[a16_0x355d('0x0')](exports,a16_0x355d('0x1'),{'value':!![]});class GPSService{constructor(){this[a16_0x355d('0x2')]={'latitude':'','longitude':'','speed':'','hdop':''};}[a16_0x355d('0x3')](){console['log'](a16_0x355d('0x4'));const _0x2ec632=require(a16_0x355d('0x5'));this[a16_0x355d('0x5')]=new _0x2ec632();this[a16_0x355d('0x5')]['on'](a16_0x355d('0x6'),this[a16_0x355d('0x7')]['bind'](this));}[a16_0x355d('0x7')](_0x2ad718){this[a16_0x355d('0x8')](_0x2ad718);}[a16_0x355d('0x8')](_0x4f2040){if(_0x4f2040[a16_0x355d('0x9')]!=undefined)this[a16_0x355d('0x2')][a16_0x355d('0xa')]=String(_0x4f2040[a16_0x355d('0x9')]['toFixed'](0x6))[a16_0x355d('0xb')]('.',',');if(_0x4f2040[a16_0x355d('0x9')]!=undefined)this[a16_0x355d('0x2')][a16_0x355d('0xc')]=String(_0x4f2040[a16_0x355d('0xd')]['toFixed'](0x6))[a16_0x355d('0xb')]('.',',');if(_0x4f2040[a16_0x355d('0xe')]!=undefined)this[a16_0x355d('0x2')][a16_0x355d('0xe')]=String(_0x4f2040['hdop']['toFixed'](0x2))[a16_0x355d('0xb')]('.',',');if(_0x4f2040[a16_0x355d('0xf')]!=undefined)this[a16_0x355d('0x2')][a16_0x355d('0xf')]=String(Math[a16_0x355d('0x10')](_0x4f2040['speed']));}}exports['GPSService']=GPSService;