var a18_0x30e3=['processGPSData:\x20','lat','toFixed','longitude','lon','hdop','replace','speed','locationParts','round','locationParts:\x20','env','FILES_FOLDER','writeFile','location.txt','stringify','GPSService','defineProperty','__esModule','fs-extra','init','instance','log','init\x20GPSService','gps','data','gpsOnData','bind','processGPSData'];(function(_0x23da50,_0x359869){var _0x305d13=function(_0x48ca6b){while(--_0x48ca6b){_0x23da50['push'](_0x23da50['shift']());}};_0x305d13(++_0x359869);}(a18_0x30e3,0x133));var a18_0x5009=function(_0x468751,_0x533a07){_0x468751=_0x468751-0x0;var _0x1300e3=a18_0x30e3[_0x468751];return _0x1300e3;};'use strict';Object[a18_0x5009('0x0')](exports,a18_0x5009('0x1'),{'value':!![]});const fsExtra=require(a18_0x5009('0x2'));class GPSService{constructor(){this['locationParts']={'latitude':'','longitude':'','speed':'','hdop':''};this[a18_0x5009('0x3')]();}static['getInstance'](){if(!GPSService[a18_0x5009('0x4')]){GPSService[a18_0x5009('0x4')]=new GPSService();}return GPSService['instance'];}[a18_0x5009('0x3')](){console[a18_0x5009('0x5')](a18_0x5009('0x6'));const _0x122246=require('gps');this[a18_0x5009('0x7')]=new _0x122246();this['gps']['on'](a18_0x5009('0x8'),this[a18_0x5009('0x9')][a18_0x5009('0xa')](this));}[a18_0x5009('0x9')](_0x32be7a){this[a18_0x5009('0xb')](_0x32be7a);}['processGPSData'](_0x41acc0){console[a18_0x5009('0x5')](a18_0x5009('0xc'),_0x41acc0);if(_0x41acc0[a18_0x5009('0xd')]!=undefined)this['locationParts']['latitude']=String(_0x41acc0[a18_0x5009('0xd')][a18_0x5009('0xe')](0x6))['replace']('.',',');if(_0x41acc0[a18_0x5009('0xd')]!=undefined)this['locationParts'][a18_0x5009('0xf')]=String(_0x41acc0[a18_0x5009('0x10')][a18_0x5009('0xe')](0x6))['replace']('.',',');if(_0x41acc0[a18_0x5009('0x11')]!=undefined)this['locationParts'][a18_0x5009('0x11')]=String(_0x41acc0['hdop']['toFixed'](0x2))[a18_0x5009('0x12')]('.',',');if(_0x41acc0[a18_0x5009('0x13')]!=undefined)this[a18_0x5009('0x14')][a18_0x5009('0x13')]=String(Math[a18_0x5009('0x15')](_0x41acc0[a18_0x5009('0x13')]));console[a18_0x5009('0x5')](a18_0x5009('0x16'),this[a18_0x5009('0x14')]);const _0x4a3ca6=process[a18_0x5009('0x17')][a18_0x5009('0x18')];fsExtra[a18_0x5009('0x19')](_0x4a3ca6+a18_0x5009('0x1a'),JSON[a18_0x5009('0x1b')](this['locationParts']),function(_0x5317c2){});}}exports[a18_0x5009('0x1c')]=GPSService;