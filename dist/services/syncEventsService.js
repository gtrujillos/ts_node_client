var a21_0x3ca4=['parse','status','success/','error','SyncEventsService','defineProperty','__esModule','../infrastructure/stationSettings','request','init','exploreDir','log','init\x20Sync','StationContext','settings','eventFileFolder','forEach','includes','stat','abs','getTime','ctime','syncFile','process/','rename','Successfully\x20renamed\x20','createReadStream','serviceUrl:\x20','Sending\x20file:\x20','post','Response\x20body:\x20'];(function(_0x16f97c,_0x6cd6ee){var _0x44dcaa=function(_0x1ddaeb){while(--_0x1ddaeb){_0x16f97c['push'](_0x16f97c['shift']());}};_0x44dcaa(++_0x6cd6ee);}(a21_0x3ca4,0x179));var a21_0x18c3=function(_0x2a9c28,_0x239117){_0x2a9c28=_0x2a9c28-0x0;var _0x14fa26=a21_0x3ca4[_0x2a9c28];return _0x14fa26;};'use strict';Object[a21_0x18c3('0x0')](exports,a21_0x18c3('0x1'),{'value':!![]});const stationSettings_1=require(a21_0x18c3('0x2'));const fs=require('fs');const request=require(a21_0x18c3('0x3'));class SyncEventsService{constructor(){}[a21_0x18c3('0x4')](){this[a21_0x18c3('0x5')](0x0);console[a21_0x18c3('0x6')](a21_0x18c3('0x7'));}[a21_0x18c3('0x5')](_0x374f95){fs['readdir'](stationSettings_1[a21_0x18c3('0x8')][a21_0x18c3('0x9')][a21_0x18c3('0xa')],(_0x16a61a,_0x5d52c0)=>{if(_0x5d52c0!=null){_0x5d52c0[a21_0x18c3('0xb')](_0x2133d6=>{if(_0x2133d6[a21_0x18c3('0xc')]('.gz')){fs[a21_0x18c3('0xd')](stationSettings_1[a21_0x18c3('0x8')]['settings'][a21_0x18c3('0xa')]+_0x2133d6,(_0x4e6bcf,_0x285715)=>{const _0x73291c=Math[a21_0x18c3('0xe')](new Date()[a21_0x18c3('0xf')]()-_0x285715[a21_0x18c3('0x10')][a21_0x18c3('0xf')]());if(_0x73291c>0x2710){this[a21_0x18c3('0x11')](_0x2133d6);}});}});}});setTimeout(()=>{this[a21_0x18c3('0x5')](++_0x374f95);},0x1388);}[a21_0x18c3('0x11')](_0x29b3c3){const _0x3ceb2a=stationSettings_1[a21_0x18c3('0x8')]['settings'][a21_0x18c3('0xa')]+_0x29b3c3;const _0x347c8b=stationSettings_1['StationContext'][a21_0x18c3('0x9')][a21_0x18c3('0xa')]+a21_0x18c3('0x12')+_0x29b3c3;fs[a21_0x18c3('0x13')](_0x3ceb2a,_0x347c8b,_0x94ec0f=>{if(_0x94ec0f){console[a21_0x18c3('0x6')](_0x94ec0f);}else{console['log'](a21_0x18c3('0x14')+_0x347c8b);this['sendFile'](_0x29b3c3,_0x347c8b);}});}['sendFile'](_0x215042,_0x3f04fc){const _0x12467f='http://restapi.passcontrol.co/sync_files/upload_event';const _0x8a883e={'file':fs[a21_0x18c3('0x15')](_0x3f04fc)};console[a21_0x18c3('0x6')](new Date());console[a21_0x18c3('0x6')](a21_0x18c3('0x16')+_0x12467f);console[a21_0x18c3('0x6')](a21_0x18c3('0x17')+_0x215042);try{request[a21_0x18c3('0x18')]({'url':_0x12467f,'formData':_0x8a883e},function(_0x103644,_0xdb05b7,_0x5ea6d4){let _0x124159=null;let _0x15edb3='';if(_0x103644){_0x15edb3='';}else{try{console[a21_0x18c3('0x6')](a21_0x18c3('0x19')+_0x5ea6d4);_0x124159=JSON[a21_0x18c3('0x1a')](_0x5ea6d4);if(_0x124159[a21_0x18c3('0x1b')]==0x1){_0x15edb3=a21_0x18c3('0x1c');}else{_0x15edb3='';}}catch(_0x2fcd83){console['error'](_0x2fcd83);_0x15edb3='';}}const _0x196a0c=stationSettings_1[a21_0x18c3('0x8')]['settings']['eventFileFolder']+_0x15edb3+_0x215042;fs['rename'](_0x3f04fc,_0x196a0c,function(_0x103644){if(_0x103644){console['log'](_0x103644);}console[a21_0x18c3('0x6')]('Successfully\x20renamed\x20'+_0x196a0c);});});}catch(_0x34bc76){console[a21_0x18c3('0x1d')](_0x34bc76);}}}exports[a21_0x18c3('0x1e')]=SyncEventsService;