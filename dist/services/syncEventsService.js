var a21_0x458a=['request','init','exploreDir','log','readdir','settings','eventFileFolder','forEach','.gz','stat','StationContext','getTime','ctime','syncFile','process/','rename','Successfully\x20renamed\x20','sendFile','createReadStream','serviceUrl:\x20','Sending\x20file:\x20','post','Response\x20body:\x20','status','success/','error','SyncEventsService','defineProperty','__esModule','../infrastructure/stationSettings'];(function(_0x4c80cb,_0x28cb76){var _0x1c1c88=function(_0x5824be){while(--_0x5824be){_0x4c80cb['push'](_0x4c80cb['shift']());}};_0x1c1c88(++_0x28cb76);}(a21_0x458a,0x1dd));var a21_0x2deb=function(_0x41b5ff,_0xff9ae8){_0x41b5ff=_0x41b5ff-0x0;var _0x3e8ff1=a21_0x458a[_0x41b5ff];return _0x3e8ff1;};'use strict';Object[a21_0x2deb('0x0')](exports,a21_0x2deb('0x1'),{'value':!![]});const stationSettings_1=require(a21_0x2deb('0x2'));const fs=require('fs');const request=require(a21_0x2deb('0x3'));class SyncEventsService{constructor(){}[a21_0x2deb('0x4')](){this[a21_0x2deb('0x5')](0x0);console[a21_0x2deb('0x6')]('init\x20Sync');}[a21_0x2deb('0x5')](_0x3d8e9b){fs[a21_0x2deb('0x7')](stationSettings_1['StationContext'][a21_0x2deb('0x8')][a21_0x2deb('0x9')],(_0x25209d,_0x3b13ee)=>{if(_0x3b13ee!=null){_0x3b13ee[a21_0x2deb('0xa')](_0xebd4c7=>{if(_0xebd4c7['includes'](a21_0x2deb('0xb'))){fs[a21_0x2deb('0xc')](stationSettings_1[a21_0x2deb('0xd')]['settings'][a21_0x2deb('0x9')]+_0xebd4c7,(_0x502be6,_0x57b224)=>{const _0xaad716=Math['abs'](new Date()[a21_0x2deb('0xe')]()-_0x57b224[a21_0x2deb('0xf')]['getTime']());if(_0xaad716>0x2710){this['syncFile'](_0xebd4c7);}});}});}});setTimeout(()=>{this[a21_0x2deb('0x5')](++_0x3d8e9b);},0x1388);}[a21_0x2deb('0x10')](_0x5f590a){const _0xd0b414=stationSettings_1[a21_0x2deb('0xd')]['settings'][a21_0x2deb('0x9')]+_0x5f590a;const _0x9de72=stationSettings_1[a21_0x2deb('0xd')][a21_0x2deb('0x8')][a21_0x2deb('0x9')]+a21_0x2deb('0x11')+_0x5f590a;fs[a21_0x2deb('0x12')](_0xd0b414,_0x9de72,_0x2db2d3=>{if(_0x2db2d3){console[a21_0x2deb('0x6')](_0x2db2d3);}else{console['log'](a21_0x2deb('0x13')+_0x9de72);this[a21_0x2deb('0x14')](_0x5f590a,_0x9de72);}});}['sendFile'](_0x39554c,_0xc143ee){const _0x3776c2='http://restapi.passcontrol.co/sync_files/upload_event';const _0x42616a={'file':fs[a21_0x2deb('0x15')](_0xc143ee)};console[a21_0x2deb('0x6')](new Date());console[a21_0x2deb('0x6')](a21_0x2deb('0x16')+_0x3776c2);console['log'](a21_0x2deb('0x17')+_0x39554c);try{request[a21_0x2deb('0x18')]({'url':_0x3776c2,'formData':_0x42616a},function(_0x592f4e,_0x390c5f,_0x34b997){let _0x3f0fac=null;let _0x4ecf35='';if(_0x592f4e){_0x4ecf35='';}else{try{console['log'](a21_0x2deb('0x19')+_0x34b997);_0x3f0fac=JSON['parse'](_0x34b997);if(_0x3f0fac[a21_0x2deb('0x1a')]==0x1){_0x4ecf35=a21_0x2deb('0x1b');}else{_0x4ecf35='';}}catch(_0x4ffcca){console[a21_0x2deb('0x1c')](_0x4ffcca);_0x4ecf35='';}}const _0x3471ba=stationSettings_1[a21_0x2deb('0xd')][a21_0x2deb('0x8')][a21_0x2deb('0x9')]+_0x4ecf35+_0x39554c;fs[a21_0x2deb('0x12')](_0xc143ee,_0x3471ba,function(_0x592f4e){if(_0x592f4e){console[a21_0x2deb('0x6')](_0x592f4e);}console[a21_0x2deb('0x6')]('Successfully\x20renamed\x20'+_0x3471ba);});});}catch(_0x2517ee){console[a21_0x2deb('0x1c')](_0x2517ee);}}}exports[a21_0x2deb('0x1d')]=SyncEventsService;