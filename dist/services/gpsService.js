var a16_0x1b0f=['gps','data','gpsOnData','bind','processGPSData','lat','toFixed','replace','hdop','speed','round','GPSService','__esModule','locationParts','init','log','init\x20GPSService'];(function(_0x4b4c11,_0x986a66){var _0xbfd6d8=function(_0x244b7e){while(--_0x244b7e){_0x4b4c11['push'](_0x4b4c11['shift']());}};_0xbfd6d8(++_0x986a66);}(a16_0x1b0f,0xb6));var a16_0x1baf=function(_0xf9c03c,_0x216221){_0xf9c03c=_0xf9c03c-0x0;var _0x577ee9=a16_0x1b0f[_0xf9c03c];return _0x577ee9;};'use strict';Object['defineProperty'](exports,a16_0x1baf('0x0'),{'value':!![]});class GPSService{constructor(){this[a16_0x1baf('0x1')]={'latitude':'','longitude':'','speed':'','hdop':''};}[a16_0x1baf('0x2')](){console[a16_0x1baf('0x3')](a16_0x1baf('0x4'));const _0x585aaa=require(a16_0x1baf('0x5'));this['gps']=new _0x585aaa();this[a16_0x1baf('0x5')]['on'](a16_0x1baf('0x6'),this[a16_0x1baf('0x7')][a16_0x1baf('0x8')](this));}[a16_0x1baf('0x7')](_0x215c64){this[a16_0x1baf('0x9')](_0x215c64);}[a16_0x1baf('0x9')](_0x479edc){if(_0x479edc['lat']!=undefined)this[a16_0x1baf('0x1')]['latitude']=String(_0x479edc[a16_0x1baf('0xa')]['toFixed'](0x6))['replace']('.',',');if(_0x479edc['lat']!=undefined)this[a16_0x1baf('0x1')]['longitude']=String(_0x479edc['lon'][a16_0x1baf('0xb')](0x6))[a16_0x1baf('0xc')]('.',',');if(_0x479edc[a16_0x1baf('0xd')]!=undefined)this['locationParts'][a16_0x1baf('0xd')]=String(_0x479edc[a16_0x1baf('0xd')][a16_0x1baf('0xb')](0x2))[a16_0x1baf('0xc')]('.',',');if(_0x479edc[a16_0x1baf('0xe')]!=undefined)this[a16_0x1baf('0x1')]['speed']=String(Math[a16_0x1baf('0xf')](_0x479edc['speed']));}}exports[a16_0x1baf('0x10')]=GPSService;