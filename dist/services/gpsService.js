var a16_0x2fe3=['replace','longitude','lon','hdop','speed','GPSService','defineProperty','__esModule','locationParts','gps','data','gpsOnData','bind','log','init\x20gps','processGPSData','lat','latitude','toFixed'];(function(_0x726e9d,_0x3a938c){var _0x33b1fa=function(_0x149b0b){while(--_0x149b0b){_0x726e9d['push'](_0x726e9d['shift']());}};_0x33b1fa(++_0x3a938c);}(a16_0x2fe3,0x1f4));var a16_0x3bdf=function(_0x539359,_0x1d51f6){_0x539359=_0x539359-0x0;var _0x59ee9a=a16_0x2fe3[_0x539359];return _0x59ee9a;};'use strict';Object[a16_0x3bdf('0x0')](exports,a16_0x3bdf('0x1'),{'value':!![]});class GPSService{constructor(){this[a16_0x3bdf('0x2')]={'latitude':'','longitude':'','speed':'','hdop':''};}['init'](){const _0xa60927=require(a16_0x3bdf('0x3'));this[a16_0x3bdf('0x3')]=new _0xa60927();this[a16_0x3bdf('0x3')]['on'](a16_0x3bdf('0x4'),this[a16_0x3bdf('0x5')][a16_0x3bdf('0x6')](this));console[a16_0x3bdf('0x7')](a16_0x3bdf('0x8'));}['gpsOnData'](_0x326758){this['processGPSData'](_0x326758);}[a16_0x3bdf('0x9')](_0x256e41){if(_0x256e41[a16_0x3bdf('0xa')]!=undefined)this[a16_0x3bdf('0x2')][a16_0x3bdf('0xb')]=String(_0x256e41[a16_0x3bdf('0xa')][a16_0x3bdf('0xc')](0x6))[a16_0x3bdf('0xd')]('.',',');if(_0x256e41['lat']!=undefined)this[a16_0x3bdf('0x2')][a16_0x3bdf('0xe')]=String(_0x256e41[a16_0x3bdf('0xf')][a16_0x3bdf('0xc')](0x6))[a16_0x3bdf('0xd')]('.',',');if(_0x256e41[a16_0x3bdf('0x10')]!=undefined)this[a16_0x3bdf('0x2')][a16_0x3bdf('0x10')]=String(_0x256e41['hdop'][a16_0x3bdf('0xc')](0x2))[a16_0x3bdf('0xd')]('.',',');if(_0x256e41['speed']!=undefined)this[a16_0x3bdf('0x2')][a16_0x3bdf('0x11')]=String(Math['round'](_0x256e41[a16_0x3bdf('0x11')]));}}exports[a16_0x3bdf('0x12')]=GPSService;