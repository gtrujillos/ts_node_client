var a16_0x4289=['processGPSData','lat','toFixed','replace','longitude','lon','hdop','speed','round','GPSService','defineProperty','__esModule','locationParts','init','gps','gpsOnData','bind'];(function(_0x3aacf7,_0xbea533){var _0x286adf=function(_0x344076){while(--_0x344076){_0x3aacf7['push'](_0x3aacf7['shift']());}};_0x286adf(++_0xbea533);}(a16_0x4289,0x16f));var a16_0x398e=function(_0x3b1823,_0x1b1709){_0x3b1823=_0x3b1823-0x0;var _0x230c1d=a16_0x4289[_0x3b1823];return _0x230c1d;};'use strict';Object[a16_0x398e('0x0')](exports,a16_0x398e('0x1'),{'value':!![]});class GPSService{constructor(){this[a16_0x398e('0x2')]={'latitude':'','longitude':'','speed':'','hdop':''};}[a16_0x398e('0x3')](){console['log']('init\x20GPSService');const _0x3f0759=require(a16_0x398e('0x4'));this[a16_0x398e('0x4')]=new _0x3f0759();this[a16_0x398e('0x4')]['on']('data',this[a16_0x398e('0x5')][a16_0x398e('0x6')](this));}[a16_0x398e('0x5')](_0x4b1eca){this[a16_0x398e('0x7')](_0x4b1eca);}[a16_0x398e('0x7')](_0x2677bf){if(_0x2677bf[a16_0x398e('0x8')]!=undefined)this[a16_0x398e('0x2')]['latitude']=String(_0x2677bf[a16_0x398e('0x8')][a16_0x398e('0x9')](0x6))[a16_0x398e('0xa')]('.',',');if(_0x2677bf[a16_0x398e('0x8')]!=undefined)this[a16_0x398e('0x2')][a16_0x398e('0xb')]=String(_0x2677bf[a16_0x398e('0xc')][a16_0x398e('0x9')](0x6))[a16_0x398e('0xa')]('.',',');if(_0x2677bf[a16_0x398e('0xd')]!=undefined)this['locationParts']['hdop']=String(_0x2677bf['hdop'][a16_0x398e('0x9')](0x2))[a16_0x398e('0xa')]('.',',');if(_0x2677bf[a16_0x398e('0xe')]!=undefined)this[a16_0x398e('0x2')][a16_0x398e('0xe')]=String(Math[a16_0x398e('0xf')](_0x2677bf[a16_0x398e('0xe')]));}}exports[a16_0x398e('0x10')]=GPSService;