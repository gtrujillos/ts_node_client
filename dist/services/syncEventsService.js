var a24_0x7683=['serviceUrl:\x20','Sending\x20file:\x20','post','Response\x20body:\x20','error','rename','SyncEventsService','defineProperty','__esModule','../infrastructure/stationSettings','request','init','log','init\x20SyncEventsService','exploreDir','readdir','StationContext','eventFileFolder','forEach','includes','.gz','abs','getTime','ctime','syncFile','settings','process/','Successfully\x20renamed\x20','sendFile','env','WEB_SERVICE_URL','sync_files/upload_event','createReadStream'];(function(_0x566137,_0x4ecafb){var _0x494f4a=function(_0x400551){while(--_0x400551){_0x566137['push'](_0x566137['shift']());}};_0x494f4a(++_0x4ecafb);}(a24_0x7683,0xee));var a24_0x4460=function(_0x129ace,_0x2f45e2){_0x129ace=_0x129ace-0x0;var _0x1e8a93=a24_0x7683[_0x129ace];return _0x1e8a93;};'use strict';Object[a24_0x4460('0x0')](exports,a24_0x4460('0x1'),{'value':!![]});const stationSettings_1=require(a24_0x4460('0x2'));const fs=require('fs');const request=require(a24_0x4460('0x3'));class SyncEventsService{constructor(){}[a24_0x4460('0x4')](){console[a24_0x4460('0x5')](a24_0x4460('0x6'));this[a24_0x4460('0x7')](0x0);}[a24_0x4460('0x7')](_0x59375f){fs[a24_0x4460('0x8')](stationSettings_1[a24_0x4460('0x9')]['settings'][a24_0x4460('0xa')],(_0x4a3887,_0x2d5fd9)=>{if(_0x2d5fd9!=null){_0x2d5fd9[a24_0x4460('0xb')](_0x3461cd=>{if(_0x3461cd[a24_0x4460('0xc')](a24_0x4460('0xd'))){fs['stat'](stationSettings_1[a24_0x4460('0x9')]['settings'][a24_0x4460('0xa')]+_0x3461cd,(_0x22b017,_0x4ec221)=>{const _0x4ed98f=Math[a24_0x4460('0xe')](new Date()[a24_0x4460('0xf')]()-_0x4ec221[a24_0x4460('0x10')][a24_0x4460('0xf')]());if(_0x4ed98f>0x2710){this[a24_0x4460('0x11')](_0x3461cd);}});}});}});setTimeout(()=>{this[a24_0x4460('0x7')](++_0x59375f);},0x1388);}['syncFile'](_0x5123ee){const _0x18fea1=stationSettings_1[a24_0x4460('0x9')][a24_0x4460('0x12')][a24_0x4460('0xa')]+_0x5123ee;const _0x50d26d=stationSettings_1[a24_0x4460('0x9')]['settings']['eventFileFolder']+a24_0x4460('0x13')+_0x5123ee;fs['rename'](_0x18fea1,_0x50d26d,_0x419819=>{if(_0x419819){console['log'](_0x419819);}else{console[a24_0x4460('0x5')](a24_0x4460('0x14')+_0x50d26d);this[a24_0x4460('0x15')](_0x5123ee,_0x50d26d);}});}[a24_0x4460('0x15')](_0x369f96,_0x1d29fd){const _0x44144b=process[a24_0x4460('0x16')][a24_0x4460('0x17')]+a24_0x4460('0x18');const _0x59154e={'file':fs[a24_0x4460('0x19')](_0x1d29fd)};console['log'](new Date());console['log'](a24_0x4460('0x1a')+_0x44144b);console[a24_0x4460('0x5')](a24_0x4460('0x1b')+_0x369f96);try{request[a24_0x4460('0x1c')]({'url':_0x44144b,'formData':_0x59154e},function(_0x1b1cbb,_0x1f974c,_0xc8660c){let _0x18380e=null;let _0x495dd6='';if(_0x1b1cbb){_0x495dd6='';}else{try{console['log'](a24_0x4460('0x1d')+_0xc8660c);_0x18380e=JSON['parse'](_0xc8660c);if(_0x18380e['status']==0x1){_0x495dd6='success/';}else{_0x495dd6='';}}catch(_0x365159){console[a24_0x4460('0x1e')](_0x365159);_0x495dd6='';}}const _0x5114a4=stationSettings_1[a24_0x4460('0x9')][a24_0x4460('0x12')][a24_0x4460('0xa')]+_0x495dd6+_0x369f96;fs[a24_0x4460('0x1f')](_0x1d29fd,_0x5114a4,function(_0x1b1cbb){if(_0x1b1cbb){console[a24_0x4460('0x5')](_0x1b1cbb);}console['log'](a24_0x4460('0x14')+_0x5114a4);});});}catch(_0x4bb39e){console['error'](_0x4bb39e);}}}exports[a24_0x4460('0x20')]=SyncEventsService;