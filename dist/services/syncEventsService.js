var a21_0x19f6=['init','log','init\x20Sync','exploreDir','readdir','StationContext','eventFileFolder','includes','.gz','stat','abs','getTime','syncFile','settings','process/','rename','Successfully\x20renamed\x20','sendFile','http://restapi.passcontrol.co/sync_files/upload_event','createReadStream','serviceUrl:\x20','Sending\x20file:\x20','post','Response\x20body:\x20','success/','error','SyncEventsService','defineProperty','../infrastructure/stationSettings','request'];(function(_0x51fa43,_0x30672c){var _0x31743b=function(_0x59ca6b){while(--_0x59ca6b){_0x51fa43['push'](_0x51fa43['shift']());}};_0x31743b(++_0x30672c);}(a21_0x19f6,0xcf));var a21_0x567d=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a21_0x19f6[_0x3562b5];return _0x54d52d;};'use strict';Object[a21_0x567d('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a21_0x567d('0x1'));const fs=require('fs');const request=require(a21_0x567d('0x2'));class SyncEventsService{constructor(){}[a21_0x567d('0x3')](){this['exploreDir'](0x0);console[a21_0x567d('0x4')](a21_0x567d('0x5'));}[a21_0x567d('0x6')](_0x33629e){fs[a21_0x567d('0x7')](stationSettings_1[a21_0x567d('0x8')]['settings'][a21_0x567d('0x9')],(_0x310b9f,_0x5c69eb)=>{if(_0x5c69eb!=null){_0x5c69eb['forEach'](_0x1ff14e=>{if(_0x1ff14e[a21_0x567d('0xa')](a21_0x567d('0xb'))){fs[a21_0x567d('0xc')](stationSettings_1['StationContext']['settings'][a21_0x567d('0x9')]+_0x1ff14e,(_0x3b85a4,_0x51dabc)=>{const _0x3e7dda=Math[a21_0x567d('0xd')](new Date()[a21_0x567d('0xe')]()-_0x51dabc['ctime']['getTime']());if(_0x3e7dda>0x2710){this[a21_0x567d('0xf')](_0x1ff14e);}});}});}});setTimeout(()=>{this[a21_0x567d('0x6')](++_0x33629e);},0x1388);}[a21_0x567d('0xf')](_0x542cfb){const _0x561bae=stationSettings_1[a21_0x567d('0x8')]['settings'][a21_0x567d('0x9')]+_0x542cfb;const _0x1927a2=stationSettings_1[a21_0x567d('0x8')][a21_0x567d('0x10')][a21_0x567d('0x9')]+a21_0x567d('0x11')+_0x542cfb;fs[a21_0x567d('0x12')](_0x561bae,_0x1927a2,_0x166237=>{if(_0x166237){console[a21_0x567d('0x4')](_0x166237);}else{console['log'](a21_0x567d('0x13')+_0x1927a2);this[a21_0x567d('0x14')](_0x542cfb,_0x1927a2);}});}[a21_0x567d('0x14')](_0x300803,_0xa55bfe){const _0x3af0e9=a21_0x567d('0x15');const _0x225524={'file':fs[a21_0x567d('0x16')](_0xa55bfe)};console[a21_0x567d('0x4')](new Date());console[a21_0x567d('0x4')](a21_0x567d('0x17')+_0x3af0e9);console[a21_0x567d('0x4')](a21_0x567d('0x18')+_0x300803);try{request[a21_0x567d('0x19')]({'url':_0x3af0e9,'formData':_0x225524},function(_0x5d2643,_0x3106b7,_0x94e97c){let _0xf163cf=null;let _0x68c409='';if(_0x5d2643){_0x68c409='';}else{try{console[a21_0x567d('0x4')](a21_0x567d('0x1a')+_0x94e97c);_0xf163cf=JSON['parse'](_0x94e97c);if(_0xf163cf['status']==0x1){_0x68c409=a21_0x567d('0x1b');}else{_0x68c409='';}}catch(_0xebc011){console[a21_0x567d('0x1c')](_0xebc011);_0x68c409='';}}const _0x4198bb=stationSettings_1[a21_0x567d('0x8')][a21_0x567d('0x10')][a21_0x567d('0x9')]+_0x68c409+_0x300803;fs[a21_0x567d('0x12')](_0xa55bfe,_0x4198bb,function(_0x5d2643){if(_0x5d2643){console[a21_0x567d('0x4')](_0x5d2643);}console[a21_0x567d('0x4')](a21_0x567d('0x13')+_0x4198bb);});});}catch(_0x4d393a){console[a21_0x567d('0x1c')](_0x4d393a);}}}exports[a21_0x567d('0x1d')]=SyncEventsService;