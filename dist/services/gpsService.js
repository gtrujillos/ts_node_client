var a16_0x2799=['gpsOnData','bind','processGPSData','lat','latitude','toFixed','replace','longitude','lon','speed','GPSService','__esModule','locationParts','init','init\x20GPSService','gps','data'];(function(_0x44d724,_0xba4955){var _0x160688=function(_0x4edaab){while(--_0x4edaab){_0x44d724['push'](_0x44d724['shift']());}};_0x160688(++_0xba4955);}(a16_0x2799,0x82));var a16_0x5389=function(_0x5742d7,_0x36299a){_0x5742d7=_0x5742d7-0x0;var _0x470d4c=a16_0x2799[_0x5742d7];return _0x470d4c;};'use strict';Object['defineProperty'](exports,a16_0x5389('0x0'),{'value':!![]});class GPSService{constructor(){this[a16_0x5389('0x1')]={'latitude':'','longitude':'','speed':'','hdop':''};}[a16_0x5389('0x2')](){console['log'](a16_0x5389('0x3'));const _0x22c169=require(a16_0x5389('0x4'));this[a16_0x5389('0x4')]=new _0x22c169();this[a16_0x5389('0x4')]['on'](a16_0x5389('0x5'),this[a16_0x5389('0x6')][a16_0x5389('0x7')](this));}[a16_0x5389('0x6')](_0xf381e){this[a16_0x5389('0x8')](_0xf381e);}[a16_0x5389('0x8')](_0x38a2bb){if(_0x38a2bb[a16_0x5389('0x9')]!=undefined)this[a16_0x5389('0x1')][a16_0x5389('0xa')]=String(_0x38a2bb[a16_0x5389('0x9')][a16_0x5389('0xb')](0x6))[a16_0x5389('0xc')]('.',',');if(_0x38a2bb[a16_0x5389('0x9')]!=undefined)this[a16_0x5389('0x1')][a16_0x5389('0xd')]=String(_0x38a2bb[a16_0x5389('0xe')]['toFixed'](0x6))['replace']('.',',');if(_0x38a2bb['hdop']!=undefined)this['locationParts']['hdop']=String(_0x38a2bb['hdop'][a16_0x5389('0xb')](0x2))[a16_0x5389('0xc')]('.',',');if(_0x38a2bb['speed']!=undefined)this[a16_0x5389('0x1')][a16_0x5389('0xf')]=String(Math['round'](_0x38a2bb['speed']));}}exports[a16_0x5389('0x10')]=GPSService;