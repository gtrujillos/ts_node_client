var a18_0xa7f1=['player/update_settings','reportStatus','received\x20message\x20%s\x20%s','handleOpenRequest','handleCloseRequest','handleRebootRequest','player/load_playlist','handleLoadPlaylistRequest','handleUpdateRequest','handleRegisterRequest','handleUpdateSettingsRequest','all','playerId','registerClient','handleIfconfigRequest','handleUpdateRequest:\x20','simple-git','Git\x20updating','Error\x20git\x20updated','Git\x20updated','summary','changes','reboot','loadMediaList','reloadMediaList','handleRebootRequest\x20shutdown\x20-r\x20now:\x20','handleUpdateSettingsRequest:\x20','sendStateUpdate','sending\x20state\x20%s','publish','player/state','open','opening','opening\x20player\x20door','closed','closing','stack','player/connected','false','now','readFileSync','sign','MqttService','defineProperty','__esModule','./../infrastructure/HttpClientService','fs-extra','child_process','spawn','exec','is-image','string-template','mqtt','jsonwebtoken','syncPlaylistsService','state','httpClientService','HttpClientService','init','mqttInit_google','log','mqttInit','velvety-glazing-252020','my-node-device','RS256','resources/keys/rsa_private.pem','events','projects/','/locations/','/registries/','/devices/','createJwt','mqtts','TLSv1_2_method','round','subscribe','/state','/commands/#','connect','Client\x20not\x20connected...','/projects/velvety-glazing-252020/topics/my-topic','-payload-0','publish\x20result:','close','error','message','Message\x20received:\x20','/config','Config\x20message\x20received:\x20','startsWith','/commands','from','base64','toString','ascii','packetsend','mqttInit_mosquitto','clientId','lulo_mqtt','mqttClient','mqtt://lulo.run','mqttClient_connect','mqttClient_message','bind','SIGINT','handleAppExit','Connected\x20to\x20broker\x20client:','player/open','player/close','player/reboot','player/reload_playlist','player/ifconfig','player/register'];(function(_0x178dbd,_0x250a3c){var _0x25a853=function(_0x3c69e0){while(--_0x3c69e0){_0x178dbd['push'](_0x178dbd['shift']());}};_0x25a853(++_0x250a3c);}(a18_0xa7f1,0x1ef));var a18_0x333c=function(_0x4f22e3,_0x11b742){_0x4f22e3=_0x4f22e3-0x0;var _0x2ad403=a18_0xa7f1[_0x4f22e3];return _0x2ad403;};'use strict';Object[a18_0x333c('0x0')](exports,a18_0x333c('0x1'),{'value':!![]});const HttpClientService_1=require(a18_0x333c('0x2'));const fs=require('fs');const fsExtra=require(a18_0x333c('0x3'));const request=require('request');const progress=require('request-progress');const spawn=require(a18_0x333c('0x4'))[a18_0x333c('0x5')];const exec=require('child_process')[a18_0x333c('0x6')];const isImage=require(a18_0x333c('0x7'));const format=require(a18_0x333c('0x8'));const os=require('os');const mqtt=require(a18_0x333c('0x9'));const uuidv4=require('uuid/v4');const jwt=require(a18_0x333c('0xa'));class MqttService{constructor(_0x4d3cfa){this[a18_0x333c('0xb')]=_0x4d3cfa;this[a18_0x333c('0xc')]='closed';this[a18_0x333c('0xd')]=new HttpClientService_1[(a18_0x333c('0xe'))]();}[a18_0x333c('0xf')](){this['mqttInit_mosquitto']();}[a18_0x333c('0x10')](){console[a18_0x333c('0x11')](a18_0x333c('0x12'));const _0x1f859a=a18_0x333c('0x13');const _0x1026ce=a18_0x333c('0x14');const _0x4a29ad='my-registry';const _0x5d06b3='us-central1';const _0xae6b7b=a18_0x333c('0x15');const _0x38a53c=a18_0x333c('0x16');const _0x3efdff='mqtt.googleapis.com';const _0x438ce1=0x1bb;const _0x285b2b=a18_0x333c('0x17');const _0x4282de=0x5;const _0x32747f=a18_0x333c('0x18')+_0x1f859a+a18_0x333c('0x19')+_0x5d06b3+a18_0x333c('0x1a')+_0x4a29ad+a18_0x333c('0x1b')+_0x1026ce;const _0x3f36b9={'host':_0x3efdff,'port':_0x438ce1,'clientId':_0x32747f,'username':'unused','password':this[a18_0x333c('0x1c')](_0x1f859a,_0x38a53c,_0xae6b7b),'protocol':a18_0x333c('0x1d'),'secureProtocol':a18_0x333c('0x1e')};const _0x214f06=Math[a18_0x333c('0x1f')](Date['now']()/0x3e8);const _0x1bfaf0=mqtt['connect'](_0x3f36b9);_0x1bfaf0['subscribe'](a18_0x333c('0x1b')+_0x1026ce+'/config',{'qos':0x1});_0x1bfaf0[a18_0x333c('0x20')](a18_0x333c('0x1b')+_0x1026ce+a18_0x333c('0x21'),{'qos':0x1});_0x1bfaf0[a18_0x333c('0x20')]('/devices/'+_0x1026ce+a18_0x333c('0x22'),{'qos':0x0});const _0x4f2db5=a18_0x333c('0x1b')+_0x1026ce+'/'+_0x285b2b;_0x1bfaf0['on'](a18_0x333c('0x23'),_0x4f1ff2=>{console[a18_0x333c('0x11')]('connect');if(!_0x4f1ff2){console[a18_0x333c('0x11')](a18_0x333c('0x24'));}else{const _0x4f2db5=a18_0x333c('0x25');const _0x25d366=_0x4a29ad+'/'+_0x1026ce+a18_0x333c('0x26');_0x1bfaf0['publish'](_0x4f2db5,_0x25d366,{'qos':0x1},_0x2dd682=>{console[a18_0x333c('0x11')](a18_0x333c('0x27'));console[a18_0x333c('0x11')](_0x2dd682);if(!_0x2dd682){}});}});_0x1bfaf0['on'](a18_0x333c('0x28'),()=>{console[a18_0x333c('0x11')](a18_0x333c('0x28'));});_0x1bfaf0['on'](a18_0x333c('0x29'),_0x58c600=>{console[a18_0x333c('0x11')](a18_0x333c('0x29'),_0x58c600);});_0x1bfaf0['on'](a18_0x333c('0x2a'),(_0x5400a8,_0xfc3d38)=>{let _0x5defa2=a18_0x333c('0x2b');console[a18_0x333c('0x11')](_0x5400a8);console['log'](_0xfc3d38+'');if(_0x5400a8===a18_0x333c('0x1b')+_0x1026ce+a18_0x333c('0x2c')){_0x5defa2=a18_0x333c('0x2d');}else if(_0x5400a8[a18_0x333c('0x2e')](a18_0x333c('0x1b')+_0x1026ce+a18_0x333c('0x2f'))){_0x5defa2='Command\x20message\x20received:\x20';}_0x5defa2+=Buffer[a18_0x333c('0x30')](_0xfc3d38,a18_0x333c('0x31'))[a18_0x333c('0x32')](a18_0x333c('0x33'));console['log'](_0x5defa2);});_0x1bfaf0['on'](a18_0x333c('0x34'),()=>{});console[a18_0x333c('0x11')](_0x3f36b9);}[a18_0x333c('0x35')](){console[a18_0x333c('0x11')](a18_0x333c('0x12'));this['clientId']=uuidv4();console['log']('this.clientId');console[a18_0x333c('0x11')](this[a18_0x333c('0x36')]);const _0x564123={'clientId':this['clientId'],'username':a18_0x333c('0x37'),'password':'run.lulo_2018#.','clean':!![]};this[a18_0x333c('0x38')]=mqtt['connect'](a18_0x333c('0x39'),_0x564123);this[a18_0x333c('0x38')]['on'](a18_0x333c('0x23'),this[a18_0x333c('0x3a')]['bind'](this));this[a18_0x333c('0x38')]['on'](a18_0x333c('0x2a'),this[a18_0x333c('0x3b')][a18_0x333c('0x3c')](this));this['mqttClient']['on'](a18_0x333c('0x28'),()=>{console['log'](a18_0x333c('0x28'));});process['on']('exit',this['handleAppExit']['bind'](this));process['on'](a18_0x333c('0x3d'),this[a18_0x333c('0x3e')][a18_0x333c('0x3c')](this));process['on']('uncaughtException',this[a18_0x333c('0x3e')][a18_0x333c('0x3c')](this));}[a18_0x333c('0x3a')](){console[a18_0x333c('0x11')](a18_0x333c('0x3f')+this[a18_0x333c('0x36')]);this['mqttClient'][a18_0x333c('0x20')](a18_0x333c('0x40'));this[a18_0x333c('0x38')][a18_0x333c('0x20')](a18_0x333c('0x41'));this[a18_0x333c('0x38')][a18_0x333c('0x20')](a18_0x333c('0x42'),{'qos':0x2});this['mqttClient'][a18_0x333c('0x20')]('player/load_playlist',{'qos':0x2});this[a18_0x333c('0x38')][a18_0x333c('0x20')](a18_0x333c('0x43'),{'qos':0x2});this[a18_0x333c('0x38')]['subscribe']('player/update',{'qos':0x2});this[a18_0x333c('0x38')][a18_0x333c('0x20')](a18_0x333c('0x44'),{'qos':0x2});this[a18_0x333c('0x38')][a18_0x333c('0x20')](a18_0x333c('0x45'),{'qos':0x2});this['mqttClient'][a18_0x333c('0x20')](a18_0x333c('0x46'),{'qos':0x2});}[a18_0x333c('0x47')](){}[a18_0x333c('0x3b')](_0x345959,_0x245c4d){console['log'](a18_0x333c('0x48'),_0x345959,_0x245c4d);switch(_0x345959){case a18_0x333c('0x40'):return this[a18_0x333c('0x49')](_0x245c4d);case a18_0x333c('0x41'):return this[a18_0x333c('0x4a')](_0x245c4d);case a18_0x333c('0x42'):return this[a18_0x333c('0x4b')](_0x245c4d);case a18_0x333c('0x43'):return this['handleReloadPlaylistRequest'](_0x245c4d);case a18_0x333c('0x4c'):return this[a18_0x333c('0x4d')](_0x245c4d);case'player/update':return this[a18_0x333c('0x4e')](_0x245c4d);case'player/ifconfig':return this['handleIfconfigRequest'](_0x245c4d);case a18_0x333c('0x45'):return this[a18_0x333c('0x4f')](_0x245c4d);case a18_0x333c('0x46'):return this[a18_0x333c('0x50')](_0x245c4d);}}[a18_0x333c('0x4f')](_0xbab7a4){if(_0xbab7a4==a18_0x333c('0x51')||_0xbab7a4==String(this[a18_0x333c('0xb')][a18_0x333c('0x52')])){this['syncPlaylistsService'][a18_0x333c('0x53')]();}}[a18_0x333c('0x54')](_0x199c68){if(_0x199c68==a18_0x333c('0x51')||_0x199c68==String(this[a18_0x333c('0xb')][a18_0x333c('0x52')])){}}['handleUpdateRequest'](_0x4cb46e){console[a18_0x333c('0x11')](a18_0x333c('0x55')+_0x4cb46e);if(_0x4cb46e==a18_0x333c('0x51')||_0x4cb46e==String(this[a18_0x333c('0xb')][a18_0x333c('0x52')])){const _0x28dabd=__dirname;const _0x235795=require(a18_0x333c('0x56'))(_0x28dabd);console[a18_0x333c('0x11')](a18_0x333c('0x57'));_0x235795['pull']((_0x1565cf,_0x32b4c5)=>{if(_0x1565cf){console['log'](a18_0x333c('0x58'));this['handleUpdateRequest'](_0x4cb46e);return;}else{}console[a18_0x333c('0x11')](a18_0x333c('0x59'));console[a18_0x333c('0x11')](_0x32b4c5);if(_0x32b4c5&&_0x32b4c5[a18_0x333c('0x5a')][a18_0x333c('0x5b')]){this[a18_0x333c('0xb')][a18_0x333c('0x5c')]();}else{}});}}[a18_0x333c('0x4d')](_0x52e957){if(_0x52e957==a18_0x333c('0x51')||_0x52e957==String(this[a18_0x333c('0xb')][a18_0x333c('0x52')])){this['syncPlaylistsService'][a18_0x333c('0x5d')]();}}['handleReloadPlaylistRequest'](_0x1efb3f){if(String(_0x1efb3f)==a18_0x333c('0x51')||String(_0x1efb3f)==String(this[a18_0x333c('0xb')][a18_0x333c('0x52')])){this[a18_0x333c('0xb')][a18_0x333c('0x5e')]();}}[a18_0x333c('0x4b')](_0x51d0cc){if(_0x51d0cc==a18_0x333c('0x51')||_0x51d0cc==String(this[a18_0x333c('0xb')]['playerId'])){console[a18_0x333c('0x11')](a18_0x333c('0x5f'));try{this[a18_0x333c('0xb')][a18_0x333c('0x5c')]();}catch(_0x2065a6){console[a18_0x333c('0x11')](_0x2065a6);}}}[a18_0x333c('0x50')](_0x31cdde){if(_0x31cdde==a18_0x333c('0x51')||_0x31cdde==String(this[a18_0x333c('0xb')]['playerId'])){console['log'](a18_0x333c('0x60'));try{this[a18_0x333c('0xb')]['updateSettings']();}catch(_0x47fd3b){console[a18_0x333c('0x11')](_0x47fd3b);}}}[a18_0x333c('0x61')](){console[a18_0x333c('0x11')](a18_0x333c('0x62'),this[a18_0x333c('0xc')]);this[a18_0x333c('0x38')][a18_0x333c('0x63')](a18_0x333c('0x64'),this[a18_0x333c('0xb')][a18_0x333c('0x52')]+'-'+this['state']);}[a18_0x333c('0x49')](_0x43df46){if(this[a18_0x333c('0xc')]!==a18_0x333c('0x65')&&this[a18_0x333c('0xc')]!==a18_0x333c('0x66')){console[a18_0x333c('0x11')](a18_0x333c('0x67'));this[a18_0x333c('0xc')]=a18_0x333c('0x66');this['sendStateUpdate']();setTimeout(()=>{this[a18_0x333c('0xc')]='open';this['sendStateUpdate']();},0x1388);}}[a18_0x333c('0x4a')](_0x3e82fe){if(this[a18_0x333c('0xc')]!==a18_0x333c('0x68')&&this[a18_0x333c('0xc')]!=='closing'){this[a18_0x333c('0xc')]=a18_0x333c('0x69');this['sendStateUpdate']();setTimeout(()=>{this[a18_0x333c('0xc')]=a18_0x333c('0x68');this[a18_0x333c('0x61')]();},0x1388);}}[a18_0x333c('0x3e')](_0x227362,_0x5434d4){if(_0x5434d4){console[a18_0x333c('0x11')](_0x5434d4[a18_0x333c('0x6a')]);}this[a18_0x333c('0x38')]['publish'](a18_0x333c('0x6b'),a18_0x333c('0x6c'));}[a18_0x333c('0x1c')](_0x43cbd5,_0x3ad48e,_0x50c60b){const _0x5108d6={'iat':Math[a18_0x333c('0x1f')](Date['now']()/0x3e8),'exp':Math[a18_0x333c('0x1f')](Date[a18_0x333c('0x6d')]()/0x3e8)+0x14*0x3c,'aud':_0x43cbd5};const _0x3ecaaf=fs[a18_0x333c('0x6e')](_0x3ad48e);return jwt[a18_0x333c('0x6f')](_0x5108d6,_0x3ecaaf,{'algorithm':_0x50c60b});}}exports[a18_0x333c('0x70')]=MqttService;