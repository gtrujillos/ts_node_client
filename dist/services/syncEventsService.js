var a21_0x356a=['rename','Successfully\x20renamed\x20','sendFile','env','WEB_SERVICE_URL','sync_files/upload_event','createReadStream','serviceUrl:\x20','Sending\x20file:\x20','post','parse','success/','error','defineProperty','__esModule','request','init','log','init\x20SyncEventsService','exploreDir','readdir','eventFileFolder','forEach','includes','.gz','stat','StationContext','settings','abs','getTime','ctime','syncFile','process/'];(function(_0x45f89f,_0x163708){var _0x16a49a=function(_0x44ecb2){while(--_0x44ecb2){_0x45f89f['push'](_0x45f89f['shift']());}};_0x16a49a(++_0x163708);}(a21_0x356a,0x1ba));var a21_0x2b37=function(_0x2a02af,_0x3e1fe6){_0x2a02af=_0x2a02af-0x0;var _0x7a7b47=a21_0x356a[_0x2a02af];return _0x7a7b47;};'use strict';Object[a21_0x2b37('0x0')](exports,a21_0x2b37('0x1'),{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');const fs=require('fs');const request=require(a21_0x2b37('0x2'));class SyncEventsService{constructor(){}[a21_0x2b37('0x3')](){console[a21_0x2b37('0x4')](a21_0x2b37('0x5'));this[a21_0x2b37('0x6')](0x0);}['exploreDir'](_0x332011){fs[a21_0x2b37('0x7')](stationSettings_1['StationContext']['settings'][a21_0x2b37('0x8')],(_0x26ce12,_0x6abfb8)=>{if(_0x6abfb8!=null){_0x6abfb8[a21_0x2b37('0x9')](_0xaad33e=>{if(_0xaad33e[a21_0x2b37('0xa')](a21_0x2b37('0xb'))){fs[a21_0x2b37('0xc')](stationSettings_1[a21_0x2b37('0xd')][a21_0x2b37('0xe')][a21_0x2b37('0x8')]+_0xaad33e,(_0x2c5c42,_0x153c1a)=>{const _0x2ac1c6=Math[a21_0x2b37('0xf')](new Date()[a21_0x2b37('0x10')]()-_0x153c1a[a21_0x2b37('0x11')][a21_0x2b37('0x10')]());if(_0x2ac1c6>0x2710){this[a21_0x2b37('0x12')](_0xaad33e);}});}});}});setTimeout(()=>{this[a21_0x2b37('0x6')](++_0x332011);},0x1388);}[a21_0x2b37('0x12')](_0x206035){const _0x5bdca9=stationSettings_1['StationContext'][a21_0x2b37('0xe')][a21_0x2b37('0x8')]+_0x206035;const _0xf3ce11=stationSettings_1[a21_0x2b37('0xd')][a21_0x2b37('0xe')]['eventFileFolder']+a21_0x2b37('0x13')+_0x206035;fs[a21_0x2b37('0x14')](_0x5bdca9,_0xf3ce11,_0xc613b9=>{if(_0xc613b9){console[a21_0x2b37('0x4')](_0xc613b9);}else{console[a21_0x2b37('0x4')](a21_0x2b37('0x15')+_0xf3ce11);this[a21_0x2b37('0x16')](_0x206035,_0xf3ce11);}});}[a21_0x2b37('0x16')](_0x3e6224,_0x1eb9dd){const _0x41bef4=process[a21_0x2b37('0x17')][a21_0x2b37('0x18')]+a21_0x2b37('0x19');const _0x1b32e6={'file':fs[a21_0x2b37('0x1a')](_0x1eb9dd)};console[a21_0x2b37('0x4')](new Date());console[a21_0x2b37('0x4')](a21_0x2b37('0x1b')+_0x41bef4);console['log'](a21_0x2b37('0x1c')+_0x3e6224);try{request[a21_0x2b37('0x1d')]({'url':_0x41bef4,'formData':_0x1b32e6},function(_0x3f5ab5,_0x1b4102,_0x5f5bd4){let _0x3e6944=null;let _0x2ebf91='';if(_0x3f5ab5){_0x2ebf91='';}else{try{console[a21_0x2b37('0x4')]('Response\x20body:\x20'+_0x5f5bd4);_0x3e6944=JSON[a21_0x2b37('0x1e')](_0x5f5bd4);if(_0x3e6944['status']==0x1){_0x2ebf91=a21_0x2b37('0x1f');}else{_0x2ebf91='';}}catch(_0xe221b3){console[a21_0x2b37('0x20')](_0xe221b3);_0x2ebf91='';}}const _0x27b732=stationSettings_1[a21_0x2b37('0xd')][a21_0x2b37('0xe')][a21_0x2b37('0x8')]+_0x2ebf91+_0x3e6224;fs[a21_0x2b37('0x14')](_0x1eb9dd,_0x27b732,function(_0x3f5ab5){if(_0x3f5ab5){console[a21_0x2b37('0x4')](_0x3f5ab5);}console[a21_0x2b37('0x4')](a21_0x2b37('0x15')+_0x27b732);});});}catch(_0x5d9a9c){console[a21_0x2b37('0x20')](_0x5d9a9c);}}}exports['SyncEventsService']=SyncEventsService;