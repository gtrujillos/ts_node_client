var a22_0x50e5=['getTime','ctime','syncFile','process/','rename','log','Successfully\x20renamed\x20','sendFile','env','WEB_SERVICE_URL','sync_files/upload_event','createReadStream','serviceUrl:\x20','post','Response\x20body:\x20','parse','status','success/','error','SyncEventsService','defineProperty','../infrastructure/stationSettings','request','init','init\x20SyncEventsService','exploreDir','readdir','StationContext','settings','includes','stat','eventFileFolder'];(function(_0x2f814f,_0x36c18e){var _0x452844=function(_0x2b4e4a){while(--_0x2b4e4a){_0x2f814f['push'](_0x2f814f['shift']());}};_0x452844(++_0x36c18e);}(a22_0x50e5,0x74));var a22_0x25b7=function(_0x5db683,_0x3e3211){_0x5db683=_0x5db683-0x0;var _0x58873f=a22_0x50e5[_0x5db683];return _0x58873f;};'use strict';Object[a22_0x25b7('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a22_0x25b7('0x1'));const fs=require('fs');const request=require(a22_0x25b7('0x2'));class SyncEventsService{constructor(){}[a22_0x25b7('0x3')](){console['log'](a22_0x25b7('0x4'));this[a22_0x25b7('0x5')](0x0);}[a22_0x25b7('0x5')](_0x3d7d15){fs[a22_0x25b7('0x6')](stationSettings_1[a22_0x25b7('0x7')][a22_0x25b7('0x8')]['eventFileFolder'],(_0x4698fb,_0x27c8c9)=>{if(_0x27c8c9!=null){_0x27c8c9['forEach'](_0x598001=>{if(_0x598001[a22_0x25b7('0x9')]('.gz')){fs[a22_0x25b7('0xa')](stationSettings_1[a22_0x25b7('0x7')][a22_0x25b7('0x8')][a22_0x25b7('0xb')]+_0x598001,(_0x2ab7d6,_0x4d2ea8)=>{const _0x233afe=Math['abs'](new Date()[a22_0x25b7('0xc')]()-_0x4d2ea8[a22_0x25b7('0xd')][a22_0x25b7('0xc')]());if(_0x233afe>0x2710){this[a22_0x25b7('0xe')](_0x598001);}});}});}});setTimeout(()=>{this['exploreDir'](++_0x3d7d15);},0x1388);}[a22_0x25b7('0xe')](_0x4688d8){const _0x1e7887=stationSettings_1['StationContext']['settings'][a22_0x25b7('0xb')]+_0x4688d8;const _0x53a03f=stationSettings_1[a22_0x25b7('0x7')][a22_0x25b7('0x8')][a22_0x25b7('0xb')]+a22_0x25b7('0xf')+_0x4688d8;fs[a22_0x25b7('0x10')](_0x1e7887,_0x53a03f,_0x38ca67=>{if(_0x38ca67){console[a22_0x25b7('0x11')](_0x38ca67);}else{console['log'](a22_0x25b7('0x12')+_0x53a03f);this[a22_0x25b7('0x13')](_0x4688d8,_0x53a03f);}});}[a22_0x25b7('0x13')](_0x35c75f,_0x1824ef){const _0x36cabe=process[a22_0x25b7('0x14')][a22_0x25b7('0x15')]+a22_0x25b7('0x16');const _0x3c5bfd={'file':fs[a22_0x25b7('0x17')](_0x1824ef)};console[a22_0x25b7('0x11')](new Date());console[a22_0x25b7('0x11')](a22_0x25b7('0x18')+_0x36cabe);console[a22_0x25b7('0x11')]('Sending\x20file:\x20'+_0x35c75f);try{request[a22_0x25b7('0x19')]({'url':_0x36cabe,'formData':_0x3c5bfd},function(_0x9e3b47,_0x1803f0,_0x1ffeb5){let _0x776619=null;let _0xb9a33='';if(_0x9e3b47){_0xb9a33='';}else{try{console[a22_0x25b7('0x11')](a22_0x25b7('0x1a')+_0x1ffeb5);_0x776619=JSON[a22_0x25b7('0x1b')](_0x1ffeb5);if(_0x776619[a22_0x25b7('0x1c')]==0x1){_0xb9a33=a22_0x25b7('0x1d');}else{_0xb9a33='';}}catch(_0xdfcfb2){console[a22_0x25b7('0x1e')](_0xdfcfb2);_0xb9a33='';}}const _0x22a205=stationSettings_1[a22_0x25b7('0x7')][a22_0x25b7('0x8')]['eventFileFolder']+_0xb9a33+_0x35c75f;fs[a22_0x25b7('0x10')](_0x1824ef,_0x22a205,function(_0x9e3b47){if(_0x9e3b47){console[a22_0x25b7('0x11')](_0x9e3b47);}console[a22_0x25b7('0x11')](a22_0x25b7('0x12')+_0x22a205);});});}catch(_0x374531){console[a22_0x25b7('0x1e')](_0x374531);}}}exports[a22_0x25b7('0x1f')]=SyncEventsService;