var a18_0x26f3=['hdop','speed','locationParts','init','log','init\x20GPSService','gps','data','gpsOnData','processGPSData','latitude','toFixed','replace','lat','lon'];(function(_0x212694,_0x2f704c){var _0x436fd1=function(_0x240739){while(--_0x240739){_0x212694['push'](_0x212694['shift']());}};_0x436fd1(++_0x2f704c);}(a18_0x26f3,0x1f1));var a18_0x12a6=function(_0x485179,_0x5b7463){_0x485179=_0x485179-0x0;var _0x30e8b7=a18_0x26f3[_0x485179];return _0x30e8b7;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});class GPSService{constructor(){this[a18_0x12a6('0x0')]={'latitude':'','longitude':'','speed':'','hdop':''};}[a18_0x12a6('0x1')](){console[a18_0x12a6('0x2')](a18_0x12a6('0x3'));const _0x516ecf=require(a18_0x12a6('0x4'));this['gps']=new _0x516ecf();this['gps']['on'](a18_0x12a6('0x5'),this['gpsOnData']['bind'](this));}[a18_0x12a6('0x6')](_0x1749b5){this[a18_0x12a6('0x7')](_0x1749b5);}[a18_0x12a6('0x7')](_0x42831e){if(_0x42831e['lat']!=undefined)this[a18_0x12a6('0x0')][a18_0x12a6('0x8')]=String(_0x42831e['lat'][a18_0x12a6('0x9')](0x6))[a18_0x12a6('0xa')]('.',',');if(_0x42831e[a18_0x12a6('0xb')]!=undefined)this[a18_0x12a6('0x0')]['longitude']=String(_0x42831e[a18_0x12a6('0xc')][a18_0x12a6('0x9')](0x6))[a18_0x12a6('0xa')]('.',',');if(_0x42831e[a18_0x12a6('0xd')]!=undefined)this['locationParts'][a18_0x12a6('0xd')]=String(_0x42831e[a18_0x12a6('0xd')][a18_0x12a6('0x9')](0x2))['replace']('.',',');if(_0x42831e[a18_0x12a6('0xe')]!=undefined)this[a18_0x12a6('0x0')][a18_0x12a6('0xe')]=String(Math['round'](_0x42831e['speed']));}}exports['GPSService']=GPSService;