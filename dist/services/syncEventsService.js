var a21_0x4d80=['stat','getTime','ctime','syncFile','process/','rename','Successfully\x20renamed\x20','createReadStream','serviceUrl:\x20','Sending\x20file:\x20','post','Response\x20body:\x20','parse','success/','error','SyncEventsService','defineProperty','__esModule','../infrastructure/stationSettings','init','exploreDir','log','init\x20Sync','readdir','StationContext','settings','eventFileFolder','includes','.gz'];(function(_0x123628,_0x4307a8){var _0x4c5dce=function(_0x55155f){while(--_0x55155f){_0x123628['push'](_0x123628['shift']());}};_0x4c5dce(++_0x4307a8);}(a21_0x4d80,0xa1));var a21_0x1a48=function(_0x3ae84c,_0x8ffd20){_0x3ae84c=_0x3ae84c-0x0;var _0x129035=a21_0x4d80[_0x3ae84c];return _0x129035;};'use strict';Object[a21_0x1a48('0x0')](exports,a21_0x1a48('0x1'),{'value':!![]});const stationSettings_1=require(a21_0x1a48('0x2'));const fs=require('fs');const request=require('request');class SyncEventsService{constructor(){}[a21_0x1a48('0x3')](){this[a21_0x1a48('0x4')](0x0);console[a21_0x1a48('0x5')](a21_0x1a48('0x6'));}['exploreDir'](_0x235812){fs[a21_0x1a48('0x7')](stationSettings_1[a21_0x1a48('0x8')][a21_0x1a48('0x9')][a21_0x1a48('0xa')],(_0x2cb281,_0x587fbe)=>{if(_0x587fbe!=null){_0x587fbe['forEach'](_0x13aad9=>{if(_0x13aad9[a21_0x1a48('0xb')](a21_0x1a48('0xc'))){fs[a21_0x1a48('0xd')](stationSettings_1[a21_0x1a48('0x8')]['settings']['eventFileFolder']+_0x13aad9,(_0x524cbd,_0x8f1ec7)=>{const _0x38c237=Math['abs'](new Date()[a21_0x1a48('0xe')]()-_0x8f1ec7[a21_0x1a48('0xf')]['getTime']());if(_0x38c237>0x2710){this['syncFile'](_0x13aad9);}});}});}});setTimeout(()=>{this[a21_0x1a48('0x4')](++_0x235812);},0x1388);}[a21_0x1a48('0x10')](_0x49ac10){const _0x2e28d3=stationSettings_1[a21_0x1a48('0x8')]['settings'][a21_0x1a48('0xa')]+_0x49ac10;const _0x167b4e=stationSettings_1[a21_0x1a48('0x8')]['settings'][a21_0x1a48('0xa')]+a21_0x1a48('0x11')+_0x49ac10;fs[a21_0x1a48('0x12')](_0x2e28d3,_0x167b4e,_0x16ae77=>{if(_0x16ae77){console[a21_0x1a48('0x5')](_0x16ae77);}else{console[a21_0x1a48('0x5')](a21_0x1a48('0x13')+_0x167b4e);this['sendFile'](_0x49ac10,_0x167b4e);}});}['sendFile'](_0x53b397,_0x18e9e8){const _0x5d9d87='http://restapi.passcontrol.co/sync_files/upload_event';const _0x140636={'file':fs[a21_0x1a48('0x14')](_0x18e9e8)};console[a21_0x1a48('0x5')](new Date());console[a21_0x1a48('0x5')](a21_0x1a48('0x15')+_0x5d9d87);console[a21_0x1a48('0x5')](a21_0x1a48('0x16')+_0x53b397);try{request[a21_0x1a48('0x17')]({'url':_0x5d9d87,'formData':_0x140636},function(_0xfb1fdf,_0x1257fe,_0x34442a){let _0x462798=null;let _0x454c72='';if(_0xfb1fdf){_0x454c72='';}else{try{console[a21_0x1a48('0x5')](a21_0x1a48('0x18')+_0x34442a);_0x462798=JSON[a21_0x1a48('0x19')](_0x34442a);if(_0x462798['status']==0x1){_0x454c72=a21_0x1a48('0x1a');}else{_0x454c72='';}}catch(_0x5e204c){console[a21_0x1a48('0x1b')](_0x5e204c);_0x454c72='';}}const _0x4b67fc=stationSettings_1[a21_0x1a48('0x8')][a21_0x1a48('0x9')]['eventFileFolder']+_0x454c72+_0x53b397;fs['rename'](_0x18e9e8,_0x4b67fc,function(_0xfb1fdf){if(_0xfb1fdf){console['log'](_0xfb1fdf);}console[a21_0x1a48('0x5')](a21_0x1a48('0x13')+_0x4b67fc);});});}catch(_0x1e0a18){console['error'](_0x1e0a18);}}}exports[a21_0x1a48('0x1c')]=SyncEventsService;