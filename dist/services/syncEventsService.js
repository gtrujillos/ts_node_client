var a22_0xbab3=['Response\x20body:\x20','parse','status','success/','error','rename','defineProperty','__esModule','../infrastructure/stationSettings','request','init','exploreDir','readdir','StationContext','eventFileFolder','forEach','settings','abs','getTime','ctime','syncFile','log','Successfully\x20renamed\x20','sendFile','env','sync_files/upload_event','createReadStream','Sending\x20file:\x20'];(function(_0x245b93,_0x57cea4){var _0x166944=function(_0x521892){while(--_0x521892){_0x245b93['push'](_0x245b93['shift']());}};_0x166944(++_0x57cea4);}(a22_0xbab3,0x76));var a22_0x1632=function(_0x5646d2,_0x57e78c){_0x5646d2=_0x5646d2-0x0;var _0x1e98e3=a22_0xbab3[_0x5646d2];return _0x1e98e3;};'use strict';Object[a22_0x1632('0x0')](exports,a22_0x1632('0x1'),{'value':!![]});const stationSettings_1=require(a22_0x1632('0x2'));const fs=require('fs');const request=require(a22_0x1632('0x3'));class SyncEventsService{constructor(){}[a22_0x1632('0x4')](){console['log']('init\x20SyncEventsService');this[a22_0x1632('0x5')](0x0);}[a22_0x1632('0x5')](_0x3a3bf5){fs[a22_0x1632('0x6')](stationSettings_1[a22_0x1632('0x7')]['settings'][a22_0x1632('0x8')],(_0x35f029,_0xd495d2)=>{if(_0xd495d2!=null){_0xd495d2[a22_0x1632('0x9')](_0x329c5e=>{if(_0x329c5e['includes']('.gz')){fs['stat'](stationSettings_1[a22_0x1632('0x7')][a22_0x1632('0xa')][a22_0x1632('0x8')]+_0x329c5e,(_0x39f6c9,_0xc256bc)=>{const _0xf38e58=Math[a22_0x1632('0xb')](new Date()[a22_0x1632('0xc')]()-_0xc256bc[a22_0x1632('0xd')][a22_0x1632('0xc')]());if(_0xf38e58>0x2710){this['syncFile'](_0x329c5e);}});}});}});setTimeout(()=>{this[a22_0x1632('0x5')](++_0x3a3bf5);},0x1388);}[a22_0x1632('0xe')](_0x4df6b8){const _0x1c11b2=stationSettings_1[a22_0x1632('0x7')][a22_0x1632('0xa')][a22_0x1632('0x8')]+_0x4df6b8;const _0x171123=stationSettings_1[a22_0x1632('0x7')][a22_0x1632('0xa')][a22_0x1632('0x8')]+'process/'+_0x4df6b8;fs['rename'](_0x1c11b2,_0x171123,_0x56d25d=>{if(_0x56d25d){console[a22_0x1632('0xf')](_0x56d25d);}else{console[a22_0x1632('0xf')](a22_0x1632('0x10')+_0x171123);this[a22_0x1632('0x11')](_0x4df6b8,_0x171123);}});}[a22_0x1632('0x11')](_0x475222,_0x3490f1){const _0x4df902=process[a22_0x1632('0x12')]['WEB_SERVICE_URL']+a22_0x1632('0x13');const _0xb6b01e={'file':fs[a22_0x1632('0x14')](_0x3490f1)};console[a22_0x1632('0xf')](new Date());console[a22_0x1632('0xf')]('serviceUrl:\x20'+_0x4df902);console['log'](a22_0x1632('0x15')+_0x475222);try{request['post']({'url':_0x4df902,'formData':_0xb6b01e},function(_0x1a5192,_0x1a3b35,_0x335fb5){let _0x2b6ee8=null;let _0x8d44b7='';if(_0x1a5192){_0x8d44b7='';}else{try{console[a22_0x1632('0xf')](a22_0x1632('0x16')+_0x335fb5);_0x2b6ee8=JSON[a22_0x1632('0x17')](_0x335fb5);if(_0x2b6ee8[a22_0x1632('0x18')]==0x1){_0x8d44b7=a22_0x1632('0x19');}else{_0x8d44b7='';}}catch(_0x312ef1){console[a22_0x1632('0x1a')](_0x312ef1);_0x8d44b7='';}}const _0x4eed30=stationSettings_1[a22_0x1632('0x7')]['settings'][a22_0x1632('0x8')]+_0x8d44b7+_0x475222;fs[a22_0x1632('0x1b')](_0x3490f1,_0x4eed30,function(_0x1a5192){if(_0x1a5192){console['log'](_0x1a5192);}console[a22_0x1632('0xf')]('Successfully\x20renamed\x20'+_0x4eed30);});});}catch(_0x425489){console[a22_0x1632('0x1a')](_0x425489);}}}exports['SyncEventsService']=SyncEventsService;