var a18_0x5181=['player/ifconfig','player/register','reportStatus','received\x20message\x20%s\x20%s','handleCloseRequest','handleRebootRequest','handleReloadPlaylistRequest','handleLoadPlaylistRequest','player/update','handleIfconfigRequest','handleRegisterRequest','all','playerId','registerClient','handleUpdateRequest','handleUpdateRequest:\x20','Git\x20updating','pull','Error\x20git\x20updated','Git\x20updated','summary','changes','loadMediaList','reloadMediaList','handleRebootRequest\x20shutdown\x20-r\x20now:\x20','sudo\x20/sbin/shutdown\x20-r\x20now','player/state','handleOpenRequest','opening','opening\x20player\x20door','open','sendStateUpdate','closing','stack','false','round','readFileSync','sign','__esModule','./../infrastructure/HttpClientService','request','child_process','exec','string-template','uuid/v4','syncPlaylistsService','state','closed','httpClientService','init','mqttInit_mosquitto','mqttInit_google','mqttInit','velvety-glazing-252020','my-node-device','my-registry','us-central1','RS256','resources/keys/rsa_private.pem','/locations/','/registries/','/devices/','unused','createJwt','mqtts','TLSv1_2_method','now','connect','subscribe','/config','/state','/commands/#','log','Client\x20not\x20connected...','/projects/velvety-glazing-252020/topics/my-topic','-payload-0','publish','publish\x20result:','close','error','message','Message\x20received:\x20','Config\x20message\x20received:\x20','startsWith','/commands','from','base64','ascii','packetsend','clientId','run.lulo_2018#.','mqttClient','mqtt://lulo.run','bind','mqttClient_message','exit','handleAppExit','SIGINT','uncaughtException','Connected\x20to\x20broker\x20client:','player/open','player/close','player/reboot','player/load_playlist','player/reload_playlist'];(function(_0x1590bd,_0x22be03){var _0x4dc91a=function(_0xae5239){while(--_0xae5239){_0x1590bd['push'](_0x1590bd['shift']());}};_0x4dc91a(++_0x22be03);}(a18_0x5181,0x1ca));var a18_0x6d4f=function(_0x2d43a7,_0x16b303){_0x2d43a7=_0x2d43a7-0x0;var _0x41912c=a18_0x5181[_0x2d43a7];return _0x41912c;};'use strict';Object['defineProperty'](exports,a18_0x6d4f('0x0'),{'value':!![]});const HttpClientService_1=require(a18_0x6d4f('0x1'));const fs=require('fs');const fsExtra=require('fs-extra');const request=require(a18_0x6d4f('0x2'));const progress=require('request-progress');const spawn=require(a18_0x6d4f('0x3'))['spawn'];const exec=require('child_process')[a18_0x6d4f('0x4')];const isImage=require('is-image');const format=require(a18_0x6d4f('0x5'));const os=require('os');const mqtt=require('mqtt');const uuidv4=require(a18_0x6d4f('0x6'));const jwt=require('jsonwebtoken');class MqttService{constructor(_0x47fa03){this[a18_0x6d4f('0x7')]=_0x47fa03;this[a18_0x6d4f('0x8')]=a18_0x6d4f('0x9');this[a18_0x6d4f('0xa')]=new HttpClientService_1['HttpClientService']();}[a18_0x6d4f('0xb')](){this[a18_0x6d4f('0xc')]();}[a18_0x6d4f('0xd')](){console['log'](a18_0x6d4f('0xe'));const _0x3785d5=a18_0x6d4f('0xf');const _0x1a855f=a18_0x6d4f('0x10');const _0x2e915d=a18_0x6d4f('0x11');const _0x3e58fa=a18_0x6d4f('0x12');const _0x16a681=a18_0x6d4f('0x13');const _0x320957=a18_0x6d4f('0x14');const _0xc89a86='mqtt.googleapis.com';const _0x3e80c3=0x1bb;const _0x263187='events';const _0x2a94bf=0x5;const _0x27106d='projects/'+_0x3785d5+a18_0x6d4f('0x15')+_0x3e58fa+a18_0x6d4f('0x16')+_0x2e915d+a18_0x6d4f('0x17')+_0x1a855f;const _0xa9f5d8={'host':_0xc89a86,'port':_0x3e80c3,'clientId':_0x27106d,'username':a18_0x6d4f('0x18'),'password':this[a18_0x6d4f('0x19')](_0x3785d5,_0x320957,_0x16a681),'protocol':a18_0x6d4f('0x1a'),'secureProtocol':a18_0x6d4f('0x1b')};const _0x431395=Math['round'](Date[a18_0x6d4f('0x1c')]()/0x3e8);const _0x39d862=mqtt[a18_0x6d4f('0x1d')](_0xa9f5d8);_0x39d862[a18_0x6d4f('0x1e')](a18_0x6d4f('0x17')+_0x1a855f+a18_0x6d4f('0x1f'),{'qos':0x1});_0x39d862['subscribe'](a18_0x6d4f('0x17')+_0x1a855f+a18_0x6d4f('0x20'),{'qos':0x1});_0x39d862['subscribe'](a18_0x6d4f('0x17')+_0x1a855f+a18_0x6d4f('0x21'),{'qos':0x0});const _0x13133d='/devices/'+_0x1a855f+'/'+_0x263187;_0x39d862['on'](a18_0x6d4f('0x1d'),_0x3b2825=>{console[a18_0x6d4f('0x22')]('connect');if(!_0x3b2825){console[a18_0x6d4f('0x22')](a18_0x6d4f('0x23'));}else{const _0x13133d=a18_0x6d4f('0x24');const _0x206280=_0x2e915d+'/'+_0x1a855f+a18_0x6d4f('0x25');_0x39d862[a18_0x6d4f('0x26')](_0x13133d,_0x206280,{'qos':0x1},_0x3b4149=>{console[a18_0x6d4f('0x22')](a18_0x6d4f('0x27'));console[a18_0x6d4f('0x22')](_0x3b4149);if(!_0x3b4149){}});}});_0x39d862['on']('close',()=>{console[a18_0x6d4f('0x22')](a18_0x6d4f('0x28'));});_0x39d862['on'](a18_0x6d4f('0x29'),_0x15f364=>{console['log'](a18_0x6d4f('0x29'),_0x15f364);});_0x39d862['on'](a18_0x6d4f('0x2a'),(_0x5bfee5,_0x20cddf)=>{let _0xed9e4e=a18_0x6d4f('0x2b');console[a18_0x6d4f('0x22')](_0x5bfee5);console[a18_0x6d4f('0x22')](_0x20cddf+'');if(_0x5bfee5===a18_0x6d4f('0x17')+_0x1a855f+'/config'){_0xed9e4e=a18_0x6d4f('0x2c');}else if(_0x5bfee5[a18_0x6d4f('0x2d')](a18_0x6d4f('0x17')+_0x1a855f+a18_0x6d4f('0x2e'))){_0xed9e4e='Command\x20message\x20received:\x20';}_0xed9e4e+=Buffer[a18_0x6d4f('0x2f')](_0x20cddf,a18_0x6d4f('0x30'))['toString'](a18_0x6d4f('0x31'));console[a18_0x6d4f('0x22')](_0xed9e4e);});_0x39d862['on'](a18_0x6d4f('0x32'),()=>{});console[a18_0x6d4f('0x22')](_0xa9f5d8);}[a18_0x6d4f('0xc')](){console[a18_0x6d4f('0x22')]('mqttInit');this['clientId']=uuidv4();console['log']('this.clientId');console['log'](this['clientId']);const _0x1c9661={'clientId':this[a18_0x6d4f('0x33')],'username':'lulo_mqtt','password':a18_0x6d4f('0x34'),'clean':!![]};this[a18_0x6d4f('0x35')]=mqtt[a18_0x6d4f('0x1d')](a18_0x6d4f('0x36'),_0x1c9661);this['mqttClient']['on']('connect',this['mqttClient_connect'][a18_0x6d4f('0x37')](this));this[a18_0x6d4f('0x35')]['on'](a18_0x6d4f('0x2a'),this[a18_0x6d4f('0x38')][a18_0x6d4f('0x37')](this));this[a18_0x6d4f('0x35')]['on'](a18_0x6d4f('0x28'),()=>{console[a18_0x6d4f('0x22')](a18_0x6d4f('0x28'));});process['on'](a18_0x6d4f('0x39'),this[a18_0x6d4f('0x3a')][a18_0x6d4f('0x37')](this));process['on'](a18_0x6d4f('0x3b'),this[a18_0x6d4f('0x3a')][a18_0x6d4f('0x37')](this));process['on'](a18_0x6d4f('0x3c'),this[a18_0x6d4f('0x3a')][a18_0x6d4f('0x37')](this));}['mqttClient_connect'](){console['log'](a18_0x6d4f('0x3d')+this[a18_0x6d4f('0x33')]);this['mqttClient'][a18_0x6d4f('0x1e')](a18_0x6d4f('0x3e'));this[a18_0x6d4f('0x35')][a18_0x6d4f('0x1e')](a18_0x6d4f('0x3f'));this['mqttClient']['subscribe'](a18_0x6d4f('0x40'),{'qos':0x2});this[a18_0x6d4f('0x35')][a18_0x6d4f('0x1e')](a18_0x6d4f('0x41'),{'qos':0x2});this[a18_0x6d4f('0x35')][a18_0x6d4f('0x1e')](a18_0x6d4f('0x42'),{'qos':0x2});this[a18_0x6d4f('0x35')][a18_0x6d4f('0x1e')]('player/update',{'qos':0x2});this[a18_0x6d4f('0x35')][a18_0x6d4f('0x1e')](a18_0x6d4f('0x43'),{'qos':0x2});this['mqttClient']['subscribe'](a18_0x6d4f('0x44'),{'qos':0x2});}[a18_0x6d4f('0x45')](){}[a18_0x6d4f('0x38')](_0x434a0f,_0x241cf8){console[a18_0x6d4f('0x22')](a18_0x6d4f('0x46'),_0x434a0f,_0x241cf8);switch(_0x434a0f){case a18_0x6d4f('0x3e'):return this['handleOpenRequest'](_0x241cf8);case a18_0x6d4f('0x3f'):return this[a18_0x6d4f('0x47')](_0x241cf8);case a18_0x6d4f('0x40'):return this[a18_0x6d4f('0x48')](_0x241cf8);case'player/reload_playlist':return this[a18_0x6d4f('0x49')](_0x241cf8);case a18_0x6d4f('0x41'):return this[a18_0x6d4f('0x4a')](_0x241cf8);case a18_0x6d4f('0x4b'):return this['handleUpdateRequest'](_0x241cf8);case'player/ifconfig':return this[a18_0x6d4f('0x4c')](_0x241cf8);case a18_0x6d4f('0x44'):return this[a18_0x6d4f('0x4d')](_0x241cf8);}}['handleRegisterRequest'](_0x24570d){if(_0x24570d==a18_0x6d4f('0x4e')||_0x24570d==String(this[a18_0x6d4f('0x7')][a18_0x6d4f('0x4f')])){this[a18_0x6d4f('0x7')][a18_0x6d4f('0x50')]();}}[a18_0x6d4f('0x4c')](_0x37fd87){if(_0x37fd87=='all'||_0x37fd87==String(this['syncPlaylistsService'][a18_0x6d4f('0x4f')])){}}[a18_0x6d4f('0x51')](_0x50ec6d){console[a18_0x6d4f('0x22')](a18_0x6d4f('0x52')+_0x50ec6d);if(_0x50ec6d=='all'||_0x50ec6d==String(this[a18_0x6d4f('0x7')][a18_0x6d4f('0x4f')])){const _0x27ff78=__dirname;const _0x725a73=require('simple-git')(_0x27ff78);console['log'](a18_0x6d4f('0x53'));_0x725a73[a18_0x6d4f('0x54')]((_0x2ce8ea,_0xaa38dc)=>{if(_0x2ce8ea){console[a18_0x6d4f('0x22')](a18_0x6d4f('0x55'));this[a18_0x6d4f('0x51')](_0x50ec6d);return;}else{}console[a18_0x6d4f('0x22')](a18_0x6d4f('0x56'));console[a18_0x6d4f('0x22')](_0xaa38dc);if(_0xaa38dc&&_0xaa38dc[a18_0x6d4f('0x57')][a18_0x6d4f('0x58')]){const _0x193f74=spawn('shutdown',['-r',a18_0x6d4f('0x1c')]);}else{}});}}[a18_0x6d4f('0x4a')](_0x31bb0){if(_0x31bb0=='all'||_0x31bb0==String(this[a18_0x6d4f('0x7')][a18_0x6d4f('0x4f')])){this[a18_0x6d4f('0x7')][a18_0x6d4f('0x59')]();}}[a18_0x6d4f('0x49')](_0x3e9cb4){if(String(_0x3e9cb4)=='all'||String(_0x3e9cb4)==String(this[a18_0x6d4f('0x7')][a18_0x6d4f('0x4f')])){this[a18_0x6d4f('0x7')][a18_0x6d4f('0x5a')]();}}[a18_0x6d4f('0x48')](_0x5c1037){if(_0x5c1037==a18_0x6d4f('0x4e')||_0x5c1037==String(this[a18_0x6d4f('0x7')][a18_0x6d4f('0x4f')])){console['log'](a18_0x6d4f('0x5b'));try{exec(a18_0x6d4f('0x5c'),function(_0x16fdb5){console[a18_0x6d4f('0x22')](_0x16fdb5);});}catch(_0x56a2f2){console['log'](_0x56a2f2);}}}['sendStateUpdate'](){console[a18_0x6d4f('0x22')]('sending\x20state\x20%s',this[a18_0x6d4f('0x8')]);this[a18_0x6d4f('0x35')][a18_0x6d4f('0x26')](a18_0x6d4f('0x5d'),this[a18_0x6d4f('0x7')]['playerId']+'-'+this[a18_0x6d4f('0x8')]);}[a18_0x6d4f('0x5e')](_0x4220ea){if(this[a18_0x6d4f('0x8')]!=='open'&&this['state']!==a18_0x6d4f('0x5f')){console['log'](a18_0x6d4f('0x60'));this[a18_0x6d4f('0x8')]=a18_0x6d4f('0x5f');this['sendStateUpdate']();setTimeout(()=>{this[a18_0x6d4f('0x8')]=a18_0x6d4f('0x61');this[a18_0x6d4f('0x62')]();},0x1388);}}[a18_0x6d4f('0x47')](_0x2316b2){if(this['state']!==a18_0x6d4f('0x9')&&this['state']!==a18_0x6d4f('0x63')){this['state']=a18_0x6d4f('0x63');this[a18_0x6d4f('0x62')]();setTimeout(()=>{this[a18_0x6d4f('0x8')]=a18_0x6d4f('0x9');this[a18_0x6d4f('0x62')]();},0x1388);}}[a18_0x6d4f('0x3a')](_0x3d3a8f,_0xb5cfa){if(_0xb5cfa){console[a18_0x6d4f('0x22')](_0xb5cfa[a18_0x6d4f('0x64')]);}this[a18_0x6d4f('0x35')][a18_0x6d4f('0x26')]('player/connected',a18_0x6d4f('0x65'));}[a18_0x6d4f('0x19')](_0x19c296,_0x4e2e5e,_0x3d4769){const _0x99e615={'iat':Math['round'](Date['now']()/0x3e8),'exp':Math[a18_0x6d4f('0x66')](Date[a18_0x6d4f('0x1c')]()/0x3e8)+0x14*0x3c,'aud':_0x19c296};const _0x320554=fs[a18_0x6d4f('0x67')](_0x4e2e5e);return jwt[a18_0x6d4f('0x68')](_0x99e615,_0x320554,{'algorithm':_0x3d4769});}}exports['MqttService']=MqttService;