var a22_0x79ea=['includes','.gz','getTime','ctime','process/','rename','Successfully\x20renamed\x20','sendFile','env','WEB_SERVICE_URL','sync_files/upload_event','createReadStream','Sending\x20file:\x20','post','Response\x20body:\x20','parse','status','success/','error','SyncEventsService','defineProperty','__esModule','../infrastructure/stationSettings','log','init\x20SyncEventsService','exploreDir','StationContext','settings','eventFileFolder','forEach'];(function(_0x2101fc,_0x1da42e){var _0x27bba3=function(_0x58d73e){while(--_0x58d73e){_0x2101fc['push'](_0x2101fc['shift']());}};_0x27bba3(++_0x1da42e);}(a22_0x79ea,0x15e));var a22_0x5d45=function(_0x7a339b,_0x15aa7c){_0x7a339b=_0x7a339b-0x0;var _0x53e495=a22_0x79ea[_0x7a339b];return _0x53e495;};'use strict';Object[a22_0x5d45('0x0')](exports,a22_0x5d45('0x1'),{'value':!![]});const stationSettings_1=require(a22_0x5d45('0x2'));const fs=require('fs');const request=require('request');class SyncEventsService{constructor(){}['init'](){console[a22_0x5d45('0x3')](a22_0x5d45('0x4'));this['exploreDir'](0x0);}[a22_0x5d45('0x5')](_0x1f95be){fs['readdir'](stationSettings_1[a22_0x5d45('0x6')][a22_0x5d45('0x7')][a22_0x5d45('0x8')],(_0x472223,_0x135b2c)=>{if(_0x135b2c!=null){_0x135b2c[a22_0x5d45('0x9')](_0x4a2577=>{if(_0x4a2577[a22_0x5d45('0xa')](a22_0x5d45('0xb'))){fs['stat'](stationSettings_1[a22_0x5d45('0x6')][a22_0x5d45('0x7')][a22_0x5d45('0x8')]+_0x4a2577,(_0x2bce03,_0x4c70d7)=>{const _0x3ee9b9=Math['abs'](new Date()[a22_0x5d45('0xc')]()-_0x4c70d7[a22_0x5d45('0xd')][a22_0x5d45('0xc')]());if(_0x3ee9b9>0x2710){this['syncFile'](_0x4a2577);}});}});}});setTimeout(()=>{this['exploreDir'](++_0x1f95be);},0x1388);}['syncFile'](_0x5336f0){const _0x2c722b=stationSettings_1['StationContext'][a22_0x5d45('0x7')][a22_0x5d45('0x8')]+_0x5336f0;const _0x1a7e91=stationSettings_1[a22_0x5d45('0x6')][a22_0x5d45('0x7')][a22_0x5d45('0x8')]+a22_0x5d45('0xe')+_0x5336f0;fs[a22_0x5d45('0xf')](_0x2c722b,_0x1a7e91,_0x4a999c=>{if(_0x4a999c){console[a22_0x5d45('0x3')](_0x4a999c);}else{console[a22_0x5d45('0x3')](a22_0x5d45('0x10')+_0x1a7e91);this[a22_0x5d45('0x11')](_0x5336f0,_0x1a7e91);}});}[a22_0x5d45('0x11')](_0xdf59f4,_0x5b560f){const _0x254720=process[a22_0x5d45('0x12')][a22_0x5d45('0x13')]+a22_0x5d45('0x14');const _0x34d4dc={'file':fs[a22_0x5d45('0x15')](_0x5b560f)};console[a22_0x5d45('0x3')](new Date());console[a22_0x5d45('0x3')]('serviceUrl:\x20'+_0x254720);console[a22_0x5d45('0x3')](a22_0x5d45('0x16')+_0xdf59f4);try{request[a22_0x5d45('0x17')]({'url':_0x254720,'formData':_0x34d4dc},function(_0x5de8f0,_0x47f25e,_0x597eed){let _0x2ff9ce=null;let _0x51f9ed='';if(_0x5de8f0){_0x51f9ed='';}else{try{console[a22_0x5d45('0x3')](a22_0x5d45('0x18')+_0x597eed);_0x2ff9ce=JSON[a22_0x5d45('0x19')](_0x597eed);if(_0x2ff9ce[a22_0x5d45('0x1a')]==0x1){_0x51f9ed=a22_0x5d45('0x1b');}else{_0x51f9ed='';}}catch(_0x5024e9){console[a22_0x5d45('0x1c')](_0x5024e9);_0x51f9ed='';}}const _0x5ae49f=stationSettings_1[a22_0x5d45('0x6')][a22_0x5d45('0x7')][a22_0x5d45('0x8')]+_0x51f9ed+_0xdf59f4;fs[a22_0x5d45('0xf')](_0x5b560f,_0x5ae49f,function(_0x5de8f0){if(_0x5de8f0){console[a22_0x5d45('0x3')](_0x5de8f0);}console[a22_0x5d45('0x3')]('Successfully\x20renamed\x20'+_0x5ae49f);});});}catch(_0xe763c6){console[a22_0x5d45('0x1c')](_0xe763c6);}}}exports[a22_0x5d45('0x1d')]=SyncEventsService;