var a16_0x12c9=['locationParts','init','gps','data','gpsOnData','bind','log','init\x20gps','processGPSData','lat','latitude','replace','longitude','lon','hdop','toFixed','speed','defineProperty','__esModule'];(function(_0x4209bc,_0x3ae51a){var _0xb741db=function(_0x1c36a3){while(--_0x1c36a3){_0x4209bc['push'](_0x4209bc['shift']());}};_0xb741db(++_0x3ae51a);}(a16_0x12c9,0x141));var a16_0x1aa5=function(_0x5a5143,_0x440357){_0x5a5143=_0x5a5143-0x0;var _0x404fc7=a16_0x12c9[_0x5a5143];return _0x404fc7;};'use strict';Object[a16_0x1aa5('0x0')](exports,a16_0x1aa5('0x1'),{'value':!![]});class GPSService{constructor(){this[a16_0x1aa5('0x2')]={'latitude':'','longitude':'','speed':'','hdop':''};}[a16_0x1aa5('0x3')](){const _0x5c3a4d=require(a16_0x1aa5('0x4'));this[a16_0x1aa5('0x4')]=new _0x5c3a4d();this['gps']['on'](a16_0x1aa5('0x5'),this[a16_0x1aa5('0x6')][a16_0x1aa5('0x7')](this));console[a16_0x1aa5('0x8')](a16_0x1aa5('0x9'));}['gpsOnData'](_0x521787){this[a16_0x1aa5('0xa')](_0x521787);}['processGPSData'](_0x169cf9){if(_0x169cf9[a16_0x1aa5('0xb')]!=undefined)this[a16_0x1aa5('0x2')][a16_0x1aa5('0xc')]=String(_0x169cf9[a16_0x1aa5('0xb')]['toFixed'](0x6))[a16_0x1aa5('0xd')]('.',',');if(_0x169cf9[a16_0x1aa5('0xb')]!=undefined)this['locationParts'][a16_0x1aa5('0xe')]=String(_0x169cf9[a16_0x1aa5('0xf')]['toFixed'](0x6))[a16_0x1aa5('0xd')]('.',',');if(_0x169cf9['hdop']!=undefined)this[a16_0x1aa5('0x2')][a16_0x1aa5('0x10')]=String(_0x169cf9['hdop'][a16_0x1aa5('0x11')](0x2))[a16_0x1aa5('0xd')]('.',',');if(_0x169cf9['speed']!=undefined)this['locationParts']['speed']=String(Math['round'](_0x169cf9[a16_0x1aa5('0x12')]));}}exports['GPSService']=GPSService;