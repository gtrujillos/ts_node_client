var a21_0x3dbf=['init','log','init\x20Sync','exploreDir','readdir','StationContext','settings','forEach','includes','.gz','stat','abs','getTime','ctime','syncFile','eventFileFolder','process/','rename','Successfully\x20renamed\x20','sendFile','http://restapi.passcontrol.co/sync_files/upload_event','createReadStream','serviceUrl:\x20','Sending\x20file:\x20','post','status','success/','error','SyncEventsService','defineProperty','../infrastructure/stationSettings','request'];(function(_0x4d628e,_0x5bea10){var _0x50a7ac=function(_0x3c0ed0){while(--_0x3c0ed0){_0x4d628e['push'](_0x4d628e['shift']());}};_0x50a7ac(++_0x5bea10);}(a21_0x3dbf,0xdd));var a21_0x14ff=function(_0x505ab5,_0x55205d){_0x505ab5=_0x505ab5-0x0;var _0x42fe59=a21_0x3dbf[_0x505ab5];return _0x42fe59;};'use strict';Object[a21_0x14ff('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a21_0x14ff('0x1'));const fs=require('fs');const request=require(a21_0x14ff('0x2'));class SyncEventsService{constructor(){}[a21_0x14ff('0x3')](){this['exploreDir'](0x0);console[a21_0x14ff('0x4')](a21_0x14ff('0x5'));}[a21_0x14ff('0x6')](_0x987ef0){fs[a21_0x14ff('0x7')](stationSettings_1[a21_0x14ff('0x8')][a21_0x14ff('0x9')]['eventFileFolder'],(_0x273c0f,_0x452e4c)=>{if(_0x452e4c!=null){_0x452e4c[a21_0x14ff('0xa')](_0x34a27b=>{if(_0x34a27b[a21_0x14ff('0xb')](a21_0x14ff('0xc'))){fs[a21_0x14ff('0xd')](stationSettings_1['StationContext']['settings']['eventFileFolder']+_0x34a27b,(_0x3bb8b2,_0x8cffeb)=>{const _0x52cb95=Math[a21_0x14ff('0xe')](new Date()[a21_0x14ff('0xf')]()-_0x8cffeb[a21_0x14ff('0x10')][a21_0x14ff('0xf')]());if(_0x52cb95>0x2710){this[a21_0x14ff('0x11')](_0x34a27b);}});}});}});setTimeout(()=>{this[a21_0x14ff('0x6')](++_0x987ef0);},0x1388);}[a21_0x14ff('0x11')](_0x5a045f){const _0x258fab=stationSettings_1[a21_0x14ff('0x8')][a21_0x14ff('0x9')][a21_0x14ff('0x12')]+_0x5a045f;const _0x5679ac=stationSettings_1[a21_0x14ff('0x8')][a21_0x14ff('0x9')]['eventFileFolder']+a21_0x14ff('0x13')+_0x5a045f;fs[a21_0x14ff('0x14')](_0x258fab,_0x5679ac,_0x579e34=>{if(_0x579e34){console[a21_0x14ff('0x4')](_0x579e34);}else{console['log'](a21_0x14ff('0x15')+_0x5679ac);this[a21_0x14ff('0x16')](_0x5a045f,_0x5679ac);}});}[a21_0x14ff('0x16')](_0x419064,_0x56f9a0){const _0x5f3bd3=a21_0x14ff('0x17');const _0x18c648={'file':fs[a21_0x14ff('0x18')](_0x56f9a0)};console[a21_0x14ff('0x4')](new Date());console[a21_0x14ff('0x4')](a21_0x14ff('0x19')+_0x5f3bd3);console[a21_0x14ff('0x4')](a21_0x14ff('0x1a')+_0x419064);try{request[a21_0x14ff('0x1b')]({'url':_0x5f3bd3,'formData':_0x18c648},function(_0x2015e7,_0x4e4cf1,_0x2f149e){let _0x7b63d0=null;let _0x35600c='';if(_0x2015e7){_0x35600c='';}else{try{console['log']('Response\x20body:\x20'+_0x2f149e);_0x7b63d0=JSON['parse'](_0x2f149e);if(_0x7b63d0[a21_0x14ff('0x1c')]==0x1){_0x35600c=a21_0x14ff('0x1d');}else{_0x35600c='';}}catch(_0x6cfb36){console[a21_0x14ff('0x1e')](_0x6cfb36);_0x35600c='';}}const _0x3bcf26=stationSettings_1[a21_0x14ff('0x8')][a21_0x14ff('0x9')][a21_0x14ff('0x12')]+_0x35600c+_0x419064;fs[a21_0x14ff('0x14')](_0x56f9a0,_0x3bcf26,function(_0x2015e7){if(_0x2015e7){console['log'](_0x2015e7);}console[a21_0x14ff('0x4')](a21_0x14ff('0x15')+_0x3bcf26);});});}catch(_0x3daa01){console[a21_0x14ff('0x1e')](_0x3daa01);}}}exports[a21_0x14ff('0x1f')]=SyncEventsService;