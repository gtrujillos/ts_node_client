var a24_0x400c=['../infrastructure/stationSettings','init','log','init\x20SyncEventsService','exploreDir','readdir','StationContext','settings','forEach','.gz','stat','eventFileFolder','abs','ctime','syncFile','process/','rename','sendFile','WEB_SERVICE_URL','sync_files/upload_event','createReadStream','Sending\x20file:\x20','post','Response\x20body:\x20','status','success/','error','Successfully\x20renamed\x20','SyncEventsService','defineProperty','__esModule'];(function(_0x13943a,_0xaaf4a0){var _0x3ca95c=function(_0x4e193d){while(--_0x4e193d){_0x13943a['push'](_0x13943a['shift']());}};_0x3ca95c(++_0xaaf4a0);}(a24_0x400c,0xb8));var a24_0x1517=function(_0x3533e1,_0x4c7600){_0x3533e1=_0x3533e1-0x0;var _0x537c06=a24_0x400c[_0x3533e1];return _0x537c06;};'use strict';Object[a24_0x1517('0x0')](exports,a24_0x1517('0x1'),{'value':!![]});const stationSettings_1=require(a24_0x1517('0x2'));const fs=require('fs');const request=require('request');class SyncEventsService{constructor(){}[a24_0x1517('0x3')](){console[a24_0x1517('0x4')](a24_0x1517('0x5'));this[a24_0x1517('0x6')](0x0);}[a24_0x1517('0x6')](_0x629ca2){fs[a24_0x1517('0x7')](stationSettings_1[a24_0x1517('0x8')][a24_0x1517('0x9')]['eventFileFolder'],(_0x5656ab,_0x55d8f9)=>{if(_0x55d8f9!=null){_0x55d8f9[a24_0x1517('0xa')](_0x19cda7=>{if(_0x19cda7['includes'](a24_0x1517('0xb'))){fs[a24_0x1517('0xc')](stationSettings_1[a24_0x1517('0x8')]['settings'][a24_0x1517('0xd')]+_0x19cda7,(_0x43cbcf,_0x30e080)=>{const _0x307ac6=Math[a24_0x1517('0xe')](new Date()['getTime']()-_0x30e080[a24_0x1517('0xf')]['getTime']());if(_0x307ac6>0x2710){this[a24_0x1517('0x10')](_0x19cda7);}});}});}});setTimeout(()=>{this[a24_0x1517('0x6')](++_0x629ca2);},0x1388);}[a24_0x1517('0x10')](_0x4ee02f){const _0x3d06c9=stationSettings_1['StationContext'][a24_0x1517('0x9')][a24_0x1517('0xd')]+_0x4ee02f;const _0x210c7d=stationSettings_1[a24_0x1517('0x8')][a24_0x1517('0x9')][a24_0x1517('0xd')]+a24_0x1517('0x11')+_0x4ee02f;fs[a24_0x1517('0x12')](_0x3d06c9,_0x210c7d,_0x3f07f1=>{if(_0x3f07f1){console[a24_0x1517('0x4')](_0x3f07f1);}else{console[a24_0x1517('0x4')]('Successfully\x20renamed\x20'+_0x210c7d);this[a24_0x1517('0x13')](_0x4ee02f,_0x210c7d);}});}[a24_0x1517('0x13')](_0x227099,_0x57b21f){const _0x1b7da1=process['env'][a24_0x1517('0x14')]+a24_0x1517('0x15');const _0x2f34ec={'file':fs[a24_0x1517('0x16')](_0x57b21f)};console[a24_0x1517('0x4')](new Date());console['log']('serviceUrl:\x20'+_0x1b7da1);console['log'](a24_0x1517('0x17')+_0x227099);try{request[a24_0x1517('0x18')]({'url':_0x1b7da1,'formData':_0x2f34ec},function(_0x2eb174,_0x2ccc88,_0x32b5f7){let _0x33d752=null;let _0x1746e1='';if(_0x2eb174){_0x1746e1='';}else{try{console[a24_0x1517('0x4')](a24_0x1517('0x19')+_0x32b5f7);_0x33d752=JSON['parse'](_0x32b5f7);if(_0x33d752[a24_0x1517('0x1a')]==0x1){_0x1746e1=a24_0x1517('0x1b');}else{_0x1746e1='';}}catch(_0x2dc51c){console[a24_0x1517('0x1c')](_0x2dc51c);_0x1746e1='';}}const _0x1454f1=stationSettings_1[a24_0x1517('0x8')][a24_0x1517('0x9')][a24_0x1517('0xd')]+_0x1746e1+_0x227099;fs['rename'](_0x57b21f,_0x1454f1,function(_0x2eb174){if(_0x2eb174){console[a24_0x1517('0x4')](_0x2eb174);}console[a24_0x1517('0x4')](a24_0x1517('0x1d')+_0x1454f1);});});}catch(_0xb7856d){console[a24_0x1517('0x1c')](_0xb7856d);}}}exports[a24_0x1517('0x1e')]=SyncEventsService;