var a24_0x291d=['env','WEB_SERVICE_URL','Sending\x20file:\x20','post','Response\x20body:\x20','parse','status','success/','error','SyncEventsService','../infrastructure/stationSettings','request','init','log','init\x20SyncEventsService','exploreDir','readdir','StationContext','settings','eventFileFolder','forEach','includes','.gz','stat','getTime','syncFile','process/','Successfully\x20renamed\x20','sendFile'];(function(_0x2f30d2,_0x23049c){var _0x58527c=function(_0x2d71a8){while(--_0x2d71a8){_0x2f30d2['push'](_0x2f30d2['shift']());}};_0x58527c(++_0x23049c);}(a24_0x291d,0x1a0));var a24_0x1849=function(_0x12199e,_0x17151f){_0x12199e=_0x12199e-0x0;var _0x180ec=a24_0x291d[_0x12199e];return _0x180ec;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a24_0x1849('0x0'));const fs=require('fs');const request=require(a24_0x1849('0x1'));class SyncEventsService{constructor(){}[a24_0x1849('0x2')](){console[a24_0x1849('0x3')](a24_0x1849('0x4'));this[a24_0x1849('0x5')](0x0);}[a24_0x1849('0x5')](_0x3a9bd7){fs[a24_0x1849('0x6')](stationSettings_1[a24_0x1849('0x7')][a24_0x1849('0x8')][a24_0x1849('0x9')],(_0x5deab2,_0x36add0)=>{if(_0x36add0!=null){_0x36add0[a24_0x1849('0xa')](_0x342132=>{if(_0x342132[a24_0x1849('0xb')](a24_0x1849('0xc'))){fs[a24_0x1849('0xd')](stationSettings_1[a24_0x1849('0x7')][a24_0x1849('0x8')][a24_0x1849('0x9')]+_0x342132,(_0xc41535,_0x1d4a08)=>{const _0x168a14=Math['abs'](new Date()[a24_0x1849('0xe')]()-_0x1d4a08['ctime']['getTime']());if(_0x168a14>0x2710){this['syncFile'](_0x342132);}});}});}});setTimeout(()=>{this[a24_0x1849('0x5')](++_0x3a9bd7);},0x1388);}[a24_0x1849('0xf')](_0x150a51){const _0x2c5425=stationSettings_1[a24_0x1849('0x7')][a24_0x1849('0x8')]['eventFileFolder']+_0x150a51;const _0x6ab0ce=stationSettings_1['StationContext'][a24_0x1849('0x8')][a24_0x1849('0x9')]+a24_0x1849('0x10')+_0x150a51;fs['rename'](_0x2c5425,_0x6ab0ce,_0x371df7=>{if(_0x371df7){console[a24_0x1849('0x3')](_0x371df7);}else{console[a24_0x1849('0x3')](a24_0x1849('0x11')+_0x6ab0ce);this[a24_0x1849('0x12')](_0x150a51,_0x6ab0ce);}});}[a24_0x1849('0x12')](_0x4fd10e,_0x209adb){const _0x45304f=process[a24_0x1849('0x13')][a24_0x1849('0x14')]+'sync_files/upload_event';const _0x20af5f={'file':fs['createReadStream'](_0x209adb)};console[a24_0x1849('0x3')](new Date());console[a24_0x1849('0x3')]('serviceUrl:\x20'+_0x45304f);console[a24_0x1849('0x3')](a24_0x1849('0x15')+_0x4fd10e);try{request[a24_0x1849('0x16')]({'url':_0x45304f,'formData':_0x20af5f},function(_0x43045a,_0x5c485d,_0xdd0a71){let _0x22d718=null;let _0x52cc15='';if(_0x43045a){_0x52cc15='';}else{try{console[a24_0x1849('0x3')](a24_0x1849('0x17')+_0xdd0a71);_0x22d718=JSON[a24_0x1849('0x18')](_0xdd0a71);if(_0x22d718[a24_0x1849('0x19')]==0x1){_0x52cc15=a24_0x1849('0x1a');}else{_0x52cc15='';}}catch(_0x3c8e47){console[a24_0x1849('0x1b')](_0x3c8e47);_0x52cc15='';}}const _0x524c93=stationSettings_1[a24_0x1849('0x7')][a24_0x1849('0x8')][a24_0x1849('0x9')]+_0x52cc15+_0x4fd10e;fs['rename'](_0x209adb,_0x524c93,function(_0x43045a){if(_0x43045a){console['log'](_0x43045a);}console[a24_0x1849('0x3')](a24_0x1849('0x11')+_0x524c93);});});}catch(_0x2b0bae){console[a24_0x1849('0x1b')](_0x2b0bae);}}}exports[a24_0x1849('0x1c')]=SyncEventsService;