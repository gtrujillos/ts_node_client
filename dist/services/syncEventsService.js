var a22_0x1c6a=['getTime','ctime','syncFile','process/','rename','Successfully\x20renamed\x20','sendFile','WEB_SERVICE_URL','sync_files/upload_event','createReadStream','post','Response\x20body:\x20','parse','status','success/','error','defineProperty','__esModule','../infrastructure/stationSettings','request','init','log','init\x20SyncEventsService','exploreDir','readdir','StationContext','settings','eventFileFolder','stat','abs'];(function(_0x322942,_0x342f5b){var _0x4e7852=function(_0x457d8e){while(--_0x457d8e){_0x322942['push'](_0x322942['shift']());}};_0x4e7852(++_0x342f5b);}(a22_0x1c6a,0x1b4));var a22_0x52aa=function(_0x2b89cc,_0x1ff5b5){_0x2b89cc=_0x2b89cc-0x0;var _0xa9de5f=a22_0x1c6a[_0x2b89cc];return _0xa9de5f;};'use strict';Object[a22_0x52aa('0x0')](exports,a22_0x52aa('0x1'),{'value':!![]});const stationSettings_1=require(a22_0x52aa('0x2'));const fs=require('fs');const request=require(a22_0x52aa('0x3'));class SyncEventsService{constructor(){}[a22_0x52aa('0x4')](){console[a22_0x52aa('0x5')](a22_0x52aa('0x6'));this[a22_0x52aa('0x7')](0x0);}[a22_0x52aa('0x7')](_0x14e7cd){fs[a22_0x52aa('0x8')](stationSettings_1[a22_0x52aa('0x9')][a22_0x52aa('0xa')][a22_0x52aa('0xb')],(_0x5ce108,_0x141ddf)=>{if(_0x141ddf!=null){_0x141ddf['forEach'](_0x5ca46f=>{if(_0x5ca46f['includes']('.gz')){fs[a22_0x52aa('0xc')](stationSettings_1[a22_0x52aa('0x9')]['settings'][a22_0x52aa('0xb')]+_0x5ca46f,(_0x50bab7,_0x31390d)=>{const _0x42d305=Math[a22_0x52aa('0xd')](new Date()[a22_0x52aa('0xe')]()-_0x31390d[a22_0x52aa('0xf')][a22_0x52aa('0xe')]());if(_0x42d305>0x2710){this[a22_0x52aa('0x10')](_0x5ca46f);}});}});}});setTimeout(()=>{this['exploreDir'](++_0x14e7cd);},0x1388);}[a22_0x52aa('0x10')](_0x2ca830){const _0x3f357a=stationSettings_1['StationContext'][a22_0x52aa('0xa')][a22_0x52aa('0xb')]+_0x2ca830;const _0x3bbee2=stationSettings_1[a22_0x52aa('0x9')]['settings'][a22_0x52aa('0xb')]+a22_0x52aa('0x11')+_0x2ca830;fs[a22_0x52aa('0x12')](_0x3f357a,_0x3bbee2,_0x51efbc=>{if(_0x51efbc){console[a22_0x52aa('0x5')](_0x51efbc);}else{console[a22_0x52aa('0x5')](a22_0x52aa('0x13')+_0x3bbee2);this[a22_0x52aa('0x14')](_0x2ca830,_0x3bbee2);}});}[a22_0x52aa('0x14')](_0x12a06f,_0x1ce41d){const _0x12439f=process['env'][a22_0x52aa('0x15')]+a22_0x52aa('0x16');const _0x5dd4e7={'file':fs[a22_0x52aa('0x17')](_0x1ce41d)};console['log'](new Date());console[a22_0x52aa('0x5')]('serviceUrl:\x20'+_0x12439f);console['log']('Sending\x20file:\x20'+_0x12a06f);try{request[a22_0x52aa('0x18')]({'url':_0x12439f,'formData':_0x5dd4e7},function(_0x3b459a,_0x17b634,_0xe0d611){let _0x4b0691=null;let _0x550be9='';if(_0x3b459a){_0x550be9='';}else{try{console[a22_0x52aa('0x5')](a22_0x52aa('0x19')+_0xe0d611);_0x4b0691=JSON[a22_0x52aa('0x1a')](_0xe0d611);if(_0x4b0691[a22_0x52aa('0x1b')]==0x1){_0x550be9=a22_0x52aa('0x1c');}else{_0x550be9='';}}catch(_0x4e1fa6){console[a22_0x52aa('0x1d')](_0x4e1fa6);_0x550be9='';}}const _0x1234dd=stationSettings_1[a22_0x52aa('0x9')][a22_0x52aa('0xa')]['eventFileFolder']+_0x550be9+_0x12a06f;fs['rename'](_0x1ce41d,_0x1234dd,function(_0x3b459a){if(_0x3b459a){console[a22_0x52aa('0x5')](_0x3b459a);}console[a22_0x52aa('0x5')](a22_0x52aa('0x13')+_0x1234dd);});});}catch(_0x2760b2){console[a22_0x52aa('0x1d')](_0x2760b2);}}}exports['SyncEventsService']=SyncEventsService;