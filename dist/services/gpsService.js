var a16_0x4839=['toFixed','replace','longitude','hdop','speed','round','GPSService','__esModule','locationParts','gps','data','gpsOnData','bind','processGPSData','lat','latitude'];(function(_0x2ce4ac,_0x4bb0a2){var _0x221a88=function(_0x4d73b3){while(--_0x4d73b3){_0x2ce4ac['push'](_0x2ce4ac['shift']());}};_0x221a88(++_0x4bb0a2);}(a16_0x4839,0x127));var a16_0x23ba=function(_0x1f249f,_0x4ca121){_0x1f249f=_0x1f249f-0x0;var _0x26516f=a16_0x4839[_0x1f249f];return _0x26516f;};'use strict';Object['defineProperty'](exports,a16_0x23ba('0x0'),{'value':!![]});class GPSService{constructor(){this[a16_0x23ba('0x1')]={'latitude':'','longitude':'','speed':'','hdop':''};}['init'](){console['log']('init\x20GPSService');const _0x4bb0f3=require(a16_0x23ba('0x2'));this[a16_0x23ba('0x2')]=new _0x4bb0f3();this['gps']['on'](a16_0x23ba('0x3'),this[a16_0x23ba('0x4')][a16_0x23ba('0x5')](this));}[a16_0x23ba('0x4')](_0x5651bc){this[a16_0x23ba('0x6')](_0x5651bc);}[a16_0x23ba('0x6')](_0x2ed680){if(_0x2ed680[a16_0x23ba('0x7')]!=undefined)this[a16_0x23ba('0x1')][a16_0x23ba('0x8')]=String(_0x2ed680[a16_0x23ba('0x7')][a16_0x23ba('0x9')](0x6))[a16_0x23ba('0xa')]('.',',');if(_0x2ed680[a16_0x23ba('0x7')]!=undefined)this[a16_0x23ba('0x1')][a16_0x23ba('0xb')]=String(_0x2ed680['lon'][a16_0x23ba('0x9')](0x6))[a16_0x23ba('0xa')]('.',',');if(_0x2ed680['hdop']!=undefined)this[a16_0x23ba('0x1')][a16_0x23ba('0xc')]=String(_0x2ed680[a16_0x23ba('0xc')][a16_0x23ba('0x9')](0x2))['replace']('.',',');if(_0x2ed680[a16_0x23ba('0xd')]!=undefined)this[a16_0x23ba('0x1')][a16_0x23ba('0xd')]=String(Math[a16_0x23ba('0xe')](_0x2ed680[a16_0x23ba('0xd')]));}}exports[a16_0x23ba('0xf')]=GPSService;