var a22_0x32b1=['Basic\x20','toString','base64','length','substr','doorStatus','request','init','init\x20SensorsService','exploreDir','StationContext','doorSensorUser','settings','doorSensorPass'];(function(_0x38e19d,_0x2f0cf5){var _0x166d12=function(_0x17d274){while(--_0x17d274){_0x38e19d['push'](_0x38e19d['shift']());}};_0x166d12(++_0x2f0cf5);}(a22_0x32b1,0x76));var a22_0x40d7=function(_0x5260a3,_0x26f464){_0x5260a3=_0x5260a3-0x0;var _0x3f9ae6=a22_0x32b1[_0x5260a3];return _0x3f9ae6;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');const fs=require('fs');const request=require(a22_0x40d7('0x0'));class SensorsService{constructor(){this['doorStatus']=0x0;}[a22_0x40d7('0x1')](){console['log'](a22_0x40d7('0x2'));this['exploreDir'](0x0);}[a22_0x40d7('0x3')](_0x57f8a7){const _0xf1d13d=stationSettings_1[a22_0x40d7('0x4')]['settings'][a22_0x40d7('0x5')],_0x104063=stationSettings_1[a22_0x40d7('0x4')][a22_0x40d7('0x6')][a22_0x40d7('0x7')],_0x4089b2=stationSettings_1[a22_0x40d7('0x4')][a22_0x40d7('0x6')]['doorSensorURL'],_0x3d6e14=a22_0x40d7('0x8')+new Buffer(_0xf1d13d+':'+_0x104063)[a22_0x40d7('0x9')](a22_0x40d7('0xa'));request({'url':_0x4089b2,'headers':{'Authorization':_0x3d6e14}},(_0x21ec33,_0x17bf8d,_0x1fca50)=>{if(_0x1fca50!=null&&_0x1fca50[a22_0x40d7('0xb')]>0x4){const _0x5189bb=_0x1fca50[a22_0x40d7('0xc')](0x4,0x1);if(Number(_0x5189bb)!==NaN){this[a22_0x40d7('0xd')]=Number(_0x5189bb);}}});setTimeout(()=>{this[a22_0x40d7('0x3')](++_0x57f8a7);},0x1f4);}}exports['SensorsService']=SensorsService;