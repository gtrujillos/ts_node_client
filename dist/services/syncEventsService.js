var a21_0x5211=['sendFile','http://restapi.passcontrol.co/sync_files/upload_event','createReadStream','serviceUrl:\x20','post','Response\x20body:\x20','parse','status','error','Successfully\x20renamed\x20','SyncEventsService','defineProperty','request','init','log','init\x20Sync','exploreDir','readdir','settings','forEach','.gz','stat','StationContext','abs','ctime','getTime','syncFile','eventFileFolder','process/','rename'];(function(_0x47c2f4,_0x4ff199){var _0x5847c1=function(_0x2fef36){while(--_0x2fef36){_0x47c2f4['push'](_0x47c2f4['shift']());}};_0x5847c1(++_0x4ff199);}(a21_0x5211,0x1eb));var a21_0x18a4=function(_0x5c29ca,_0xb0961f){_0x5c29ca=_0x5c29ca-0x0;var _0x4a9bd7=a21_0x5211[_0x5c29ca];return _0x4a9bd7;};'use strict';Object[a21_0x18a4('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');const fs=require('fs');const request=require(a21_0x18a4('0x1'));class SyncEventsService{constructor(){}[a21_0x18a4('0x2')](){this['exploreDir'](0x0);console[a21_0x18a4('0x3')](a21_0x18a4('0x4'));}[a21_0x18a4('0x5')](_0x5317be){fs[a21_0x18a4('0x6')](stationSettings_1['StationContext'][a21_0x18a4('0x7')]['eventFileFolder'],(_0x2ef3cc,_0x935e00)=>{if(_0x935e00!=null){_0x935e00[a21_0x18a4('0x8')](_0x4fe89f=>{if(_0x4fe89f['includes'](a21_0x18a4('0x9'))){fs[a21_0x18a4('0xa')](stationSettings_1[a21_0x18a4('0xb')][a21_0x18a4('0x7')]['eventFileFolder']+_0x4fe89f,(_0x228986,_0x3ecb79)=>{const _0xd5bab8=Math[a21_0x18a4('0xc')](new Date()['getTime']()-_0x3ecb79[a21_0x18a4('0xd')][a21_0x18a4('0xe')]());if(_0xd5bab8>0x2710){this[a21_0x18a4('0xf')](_0x4fe89f);}});}});}});setTimeout(()=>{this[a21_0x18a4('0x5')](++_0x5317be);},0x1388);}[a21_0x18a4('0xf')](_0xaf39fe){const _0x38c26b=stationSettings_1[a21_0x18a4('0xb')][a21_0x18a4('0x7')][a21_0x18a4('0x10')]+_0xaf39fe;const _0x2a662b=stationSettings_1['StationContext'][a21_0x18a4('0x7')][a21_0x18a4('0x10')]+a21_0x18a4('0x11')+_0xaf39fe;fs[a21_0x18a4('0x12')](_0x38c26b,_0x2a662b,_0x5ba487=>{if(_0x5ba487){console['log'](_0x5ba487);}else{console[a21_0x18a4('0x3')]('Successfully\x20renamed\x20'+_0x2a662b);this[a21_0x18a4('0x13')](_0xaf39fe,_0x2a662b);}});}[a21_0x18a4('0x13')](_0xb47dae,_0x3ed325){const _0x59de27=a21_0x18a4('0x14');const _0x37aa8c={'file':fs[a21_0x18a4('0x15')](_0x3ed325)};console[a21_0x18a4('0x3')](new Date());console[a21_0x18a4('0x3')](a21_0x18a4('0x16')+_0x59de27);console['log']('Sending\x20file:\x20'+_0xb47dae);try{request[a21_0x18a4('0x17')]({'url':_0x59de27,'formData':_0x37aa8c},function(_0x5612c5,_0x21256a,_0x507598){let _0x508960=null;let _0x49230a='';if(_0x5612c5){_0x49230a='';}else{try{console['log'](a21_0x18a4('0x18')+_0x507598);_0x508960=JSON[a21_0x18a4('0x19')](_0x507598);if(_0x508960[a21_0x18a4('0x1a')]==0x1){_0x49230a='success/';}else{_0x49230a='';}}catch(_0x943116){console[a21_0x18a4('0x1b')](_0x943116);_0x49230a='';}}const _0x1b3828=stationSettings_1[a21_0x18a4('0xb')][a21_0x18a4('0x7')][a21_0x18a4('0x10')]+_0x49230a+_0xb47dae;fs['rename'](_0x3ed325,_0x1b3828,function(_0x5612c5){if(_0x5612c5){console[a21_0x18a4('0x3')](_0x5612c5);}console[a21_0x18a4('0x3')](a21_0x18a4('0x1c')+_0x1b3828);});});}catch(_0x258e0e){console[a21_0x18a4('0x1b')](_0x258e0e);}}}exports[a21_0x18a4('0x1d')]=SyncEventsService;