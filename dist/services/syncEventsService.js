var a20_0xbd1b=['success/','error','SyncEventsService','defineProperty','../infrastructure/stationSettings','init','log','init\x20Sync','readdir','StationContext','settings','eventFileFolder','forEach','includes','.gz','stat','abs','getTime','ctime','exploreDir','syncFile','process/','rename','Sending\x20file:\x20','post','Response\x20body:\x20','parse','status'];(function(_0x260fc1,_0x2ba5a3){var _0x1210bf=function(_0x42bca1){while(--_0x42bca1){_0x260fc1['push'](_0x260fc1['shift']());}};_0x1210bf(++_0x2ba5a3);}(a20_0xbd1b,0x153));var a20_0x3676=function(_0xef7c5b,_0x141f10){_0xef7c5b=_0xef7c5b-0x0;var _0x16e9c3=a20_0xbd1b[_0xef7c5b];return _0x16e9c3;};'use strict';Object[a20_0x3676('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a20_0x3676('0x1'));const fs=require('fs');const request=require('request');class SyncEventsService{constructor(){}[a20_0x3676('0x2')](){this['exploreDir'](0x0);console[a20_0x3676('0x3')](a20_0x3676('0x4'));}['exploreDir'](_0x2c6a3d){fs[a20_0x3676('0x5')](stationSettings_1[a20_0x3676('0x6')][a20_0x3676('0x7')][a20_0x3676('0x8')],(_0x59b23f,_0x5d4b89)=>{if(_0x5d4b89!=null){_0x5d4b89[a20_0x3676('0x9')](_0x12696a=>{if(_0x12696a[a20_0x3676('0xa')](a20_0x3676('0xb'))){fs[a20_0x3676('0xc')](stationSettings_1[a20_0x3676('0x6')][a20_0x3676('0x7')]['eventFileFolder']+_0x12696a,(_0x191d67,_0x108b96)=>{const _0x283775=Math[a20_0x3676('0xd')](new Date()[a20_0x3676('0xe')]()-_0x108b96[a20_0x3676('0xf')][a20_0x3676('0xe')]());if(_0x283775>0x2710){this['syncFile'](_0x12696a);}});}});}});setTimeout(()=>{this[a20_0x3676('0x10')](++_0x2c6a3d);},0x1388);}[a20_0x3676('0x11')](_0xb133e0){const _0x4ec1e2=stationSettings_1['StationContext'][a20_0x3676('0x7')]['eventFileFolder']+_0xb133e0;const _0x3405a6=stationSettings_1[a20_0x3676('0x6')][a20_0x3676('0x7')]['eventFileFolder']+a20_0x3676('0x12')+_0xb133e0;fs[a20_0x3676('0x13')](_0x4ec1e2,_0x3405a6,_0x6ee24c=>{if(_0x6ee24c){console[a20_0x3676('0x3')](_0x6ee24c);}else{console[a20_0x3676('0x3')]('Successfully\x20renamed\x20'+_0x3405a6);this['sendFile'](_0xb133e0,_0x3405a6);}});}['sendFile'](_0x57799e,_0x3f6fff){const _0x4382cc='http://restapi.passcontrol.co/sync_files/upload_event';const _0x22c7e8={'file':fs['createReadStream'](_0x3f6fff)};console[a20_0x3676('0x3')](new Date());console['log']('serviceUrl:\x20'+_0x4382cc);console[a20_0x3676('0x3')](a20_0x3676('0x14')+_0x57799e);try{request[a20_0x3676('0x15')]({'url':_0x4382cc,'formData':_0x22c7e8},function(_0x1e7761,_0x5b7884,_0x5f216e){let _0x377df3=null;let _0x374635='';if(_0x1e7761){_0x374635='';}else{try{console[a20_0x3676('0x3')](a20_0x3676('0x16')+_0x5f216e);_0x377df3=JSON[a20_0x3676('0x17')](_0x5f216e);if(_0x377df3[a20_0x3676('0x18')]==0x1){_0x374635=a20_0x3676('0x19');}else{_0x374635='';}}catch(_0x3c7c20){console[a20_0x3676('0x1a')](_0x3c7c20);_0x374635='';}}const _0x3bf1ab=stationSettings_1[a20_0x3676('0x6')]['settings'][a20_0x3676('0x8')]+_0x374635+_0x57799e;fs['rename'](_0x3f6fff,_0x3bf1ab,function(_0x1e7761){if(_0x1e7761){console[a20_0x3676('0x3')](_0x1e7761);}console[a20_0x3676('0x3')]('Successfully\x20renamed\x20'+_0x3bf1ab);});});}catch(_0x34a6cc){console[a20_0x3676('0x1a')](_0x34a6cc);}}}exports[a20_0x3676('0x1b')]=SyncEventsService;