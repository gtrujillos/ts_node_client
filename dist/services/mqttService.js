var a18_0xd3fa=['closed','httpClientService','HttpClientService','init','mqttInit_mosquitto','mqttInit_google','log','mqttInit','velvety-glazing-252020','my-node-device','my-registry','us-central1','RS256','mqtt.googleapis.com','events','projects/','/registries/','/devices/','unused','createJwt','mqtts','TLSv1_2_method','round','now','connect','subscribe','/config','/state','/commands/#','Client\x20not\x20connected...','/projects/velvety-glazing-252020/topics/my-topic','-payload-0','publish','publish\x20result:','close','error','Message\x20received:\x20','startsWith','/commands','from','base64','toString','ascii','this.clientId','clientId','run.lulo_2018#.','mqttClient','bind','mqttClient_message','SIGINT','handleAppExit','uncaughtException','Connected\x20to\x20broker\x20client:','player/close','player/load_playlist','player/reload_playlist','player/update','player/ifconfig','player/register','player/update_settings','reportStatus','received\x20message\x20%s\x20%s','player/open','handleOpenRequest','handleCloseRequest','player/reboot','handleRebootRequest','handleReloadPlaylistRequest','handleUpdateRequest','handleRegisterRequest','handleUpdateSettingsRequest','playerId','registerClient','handleIfconfigRequest','all','handleUpdateRequest:\x20','simple-git','Reset','hard','Reset\x20result:','clean','clean\x20result:','pull','Error\x20git\x20updated','Git\x20updated','summary','changes','Git\x20no\x20changes','handleLoadPlaylistRequest','loadMediaList','reloadMediaList','handleRebootRequest\x20shutdown\x20-r\x20now:\x20','reboot','updateSettings','sending\x20state\x20%s','opening','open','closing','sendStateUpdate','stack','false','sign','MqttService','__esModule','./../infrastructure/HttpClientService','fs-extra','request','child_process','spawn','exec','string-template','mqtt','uuid/v4','syncPlaylistsService','state'];(function(_0x5572fb,_0x1cc0de){var _0x4ae14f=function(_0x850ef2){while(--_0x850ef2){_0x5572fb['push'](_0x5572fb['shift']());}};_0x4ae14f(++_0x1cc0de);}(a18_0xd3fa,0xda));var a18_0x2332=function(_0x57feb2,_0x45b2e7){_0x57feb2=_0x57feb2-0x0;var _0x19938c=a18_0xd3fa[_0x57feb2];return _0x19938c;};'use strict';Object['defineProperty'](exports,a18_0x2332('0x0'),{'value':!![]});const HttpClientService_1=require(a18_0x2332('0x1'));const fs=require('fs');const fsExtra=require(a18_0x2332('0x2'));const request=require(a18_0x2332('0x3'));const progress=require('request-progress');const spawn=require(a18_0x2332('0x4'))[a18_0x2332('0x5')];const exec=require(a18_0x2332('0x4'))[a18_0x2332('0x6')];const isImage=require('is-image');const format=require(a18_0x2332('0x7'));const os=require('os');const mqtt=require(a18_0x2332('0x8'));const uuidv4=require(a18_0x2332('0x9'));const jwt=require('jsonwebtoken');class MqttService{constructor(_0xd39753){this[a18_0x2332('0xa')]=_0xd39753;this[a18_0x2332('0xb')]=a18_0x2332('0xc');this[a18_0x2332('0xd')]=new HttpClientService_1[(a18_0x2332('0xe'))]();}[a18_0x2332('0xf')](){this[a18_0x2332('0x10')]();}[a18_0x2332('0x11')](){console[a18_0x2332('0x12')](a18_0x2332('0x13'));const _0x1d460d=a18_0x2332('0x14');const _0x1f67a5=a18_0x2332('0x15');const _0x536f10=a18_0x2332('0x16');const _0x592f75=a18_0x2332('0x17');const _0x45ddd3=a18_0x2332('0x18');const _0x557914='resources/keys/rsa_private.pem';const _0x390bb5=a18_0x2332('0x19');const _0x41253c=0x1bb;const _0x4d5bbd=a18_0x2332('0x1a');const _0x421004=0x5;const _0x1bd753=a18_0x2332('0x1b')+_0x1d460d+'/locations/'+_0x592f75+a18_0x2332('0x1c')+_0x536f10+a18_0x2332('0x1d')+_0x1f67a5;const _0x5d1e9a={'host':_0x390bb5,'port':_0x41253c,'clientId':_0x1bd753,'username':a18_0x2332('0x1e'),'password':this[a18_0x2332('0x1f')](_0x1d460d,_0x557914,_0x45ddd3),'protocol':a18_0x2332('0x20'),'secureProtocol':a18_0x2332('0x21')};const _0x2a326f=Math[a18_0x2332('0x22')](Date[a18_0x2332('0x23')]()/0x3e8);const _0xf78f8e=mqtt[a18_0x2332('0x24')](_0x5d1e9a);_0xf78f8e[a18_0x2332('0x25')](a18_0x2332('0x1d')+_0x1f67a5+a18_0x2332('0x26'),{'qos':0x1});_0xf78f8e[a18_0x2332('0x25')](a18_0x2332('0x1d')+_0x1f67a5+a18_0x2332('0x27'),{'qos':0x1});_0xf78f8e[a18_0x2332('0x25')](a18_0x2332('0x1d')+_0x1f67a5+a18_0x2332('0x28'),{'qos':0x0});const _0x3c4861=a18_0x2332('0x1d')+_0x1f67a5+'/'+_0x4d5bbd;_0xf78f8e['on'](a18_0x2332('0x24'),_0x5e78fc=>{console[a18_0x2332('0x12')](a18_0x2332('0x24'));if(!_0x5e78fc){console[a18_0x2332('0x12')](a18_0x2332('0x29'));}else{const _0x3c4861=a18_0x2332('0x2a');const _0x1ff106=_0x536f10+'/'+_0x1f67a5+a18_0x2332('0x2b');_0xf78f8e[a18_0x2332('0x2c')](_0x3c4861,_0x1ff106,{'qos':0x1},_0x2efb69=>{console[a18_0x2332('0x12')](a18_0x2332('0x2d'));console['log'](_0x2efb69);if(!_0x2efb69){}});}});_0xf78f8e['on'](a18_0x2332('0x2e'),()=>{console[a18_0x2332('0x12')]('close');});_0xf78f8e['on'](a18_0x2332('0x2f'),_0x24468f=>{console[a18_0x2332('0x12')]('error',_0x24468f);});_0xf78f8e['on']('message',(_0x280976,_0x54b466)=>{let _0x3265ac=a18_0x2332('0x30');console[a18_0x2332('0x12')](_0x280976);console[a18_0x2332('0x12')](_0x54b466+'');if(_0x280976===a18_0x2332('0x1d')+_0x1f67a5+'/config'){_0x3265ac='Config\x20message\x20received:\x20';}else if(_0x280976[a18_0x2332('0x31')](a18_0x2332('0x1d')+_0x1f67a5+a18_0x2332('0x32'))){_0x3265ac='Command\x20message\x20received:\x20';}_0x3265ac+=Buffer[a18_0x2332('0x33')](_0x54b466,a18_0x2332('0x34'))[a18_0x2332('0x35')](a18_0x2332('0x36'));console[a18_0x2332('0x12')](_0x3265ac);});_0xf78f8e['on']('packetsend',()=>{});console[a18_0x2332('0x12')](_0x5d1e9a);}[a18_0x2332('0x10')](){console[a18_0x2332('0x12')]('mqttInit');this['clientId']=uuidv4();console[a18_0x2332('0x12')](a18_0x2332('0x37'));console[a18_0x2332('0x12')](this['clientId']);const _0x21137f={'clientId':this[a18_0x2332('0x38')],'username':'lulo_mqtt','password':a18_0x2332('0x39'),'clean':!![]};this[a18_0x2332('0x3a')]=mqtt[a18_0x2332('0x24')]('mqtt://lulo.run',_0x21137f);this[a18_0x2332('0x3a')]['on'](a18_0x2332('0x24'),this['mqttClient_connect'][a18_0x2332('0x3b')](this));this['mqttClient']['on']('message',this[a18_0x2332('0x3c')][a18_0x2332('0x3b')](this));this['mqttClient']['on'](a18_0x2332('0x2e'),()=>{console[a18_0x2332('0x12')](a18_0x2332('0x2e'));});process['on']('exit',this['handleAppExit'][a18_0x2332('0x3b')](this));process['on'](a18_0x2332('0x3d'),this[a18_0x2332('0x3e')][a18_0x2332('0x3b')](this));process['on'](a18_0x2332('0x3f'),this[a18_0x2332('0x3e')]['bind'](this));}['mqttClient_connect'](){console[a18_0x2332('0x12')](a18_0x2332('0x40')+this[a18_0x2332('0x38')]);this[a18_0x2332('0x3a')][a18_0x2332('0x25')]('player/open');this[a18_0x2332('0x3a')]['subscribe'](a18_0x2332('0x41'));this[a18_0x2332('0x3a')][a18_0x2332('0x25')]('player/reboot',{'qos':0x2});this['mqttClient'][a18_0x2332('0x25')](a18_0x2332('0x42'),{'qos':0x2});this[a18_0x2332('0x3a')]['subscribe'](a18_0x2332('0x43'),{'qos':0x2});this[a18_0x2332('0x3a')][a18_0x2332('0x25')](a18_0x2332('0x44'),{'qos':0x2});this[a18_0x2332('0x3a')][a18_0x2332('0x25')](a18_0x2332('0x45'),{'qos':0x2});this[a18_0x2332('0x3a')][a18_0x2332('0x25')](a18_0x2332('0x46'),{'qos':0x2});this[a18_0x2332('0x3a')][a18_0x2332('0x25')](a18_0x2332('0x47'),{'qos':0x2});}[a18_0x2332('0x48')](){}[a18_0x2332('0x3c')](_0x57d102,_0xdec8f){console[a18_0x2332('0x12')](a18_0x2332('0x49'),_0x57d102,_0xdec8f);switch(_0x57d102){case a18_0x2332('0x4a'):return this[a18_0x2332('0x4b')](_0xdec8f);case a18_0x2332('0x41'):return this[a18_0x2332('0x4c')](_0xdec8f);case a18_0x2332('0x4d'):return this[a18_0x2332('0x4e')](_0xdec8f);case a18_0x2332('0x43'):return this[a18_0x2332('0x4f')](_0xdec8f);case a18_0x2332('0x42'):return this['handleLoadPlaylistRequest'](_0xdec8f);case a18_0x2332('0x44'):return this[a18_0x2332('0x50')](_0xdec8f);case'player/ifconfig':return this['handleIfconfigRequest'](_0xdec8f);case'player/register':return this[a18_0x2332('0x51')](_0xdec8f);case a18_0x2332('0x47'):return this[a18_0x2332('0x52')](_0xdec8f);}}[a18_0x2332('0x51')](_0x529014){if(_0x529014=='all'||_0x529014==String(this[a18_0x2332('0xa')][a18_0x2332('0x53')])){this[a18_0x2332('0xa')][a18_0x2332('0x54')]();}}[a18_0x2332('0x55')](_0x522db0){if(_0x522db0==a18_0x2332('0x56')||_0x522db0==String(this[a18_0x2332('0xa')][a18_0x2332('0x53')])){}}[a18_0x2332('0x50')](_0x24da2b){console[a18_0x2332('0x12')](a18_0x2332('0x57')+_0x24da2b);if(_0x24da2b=='all'||_0x24da2b==String(this[a18_0x2332('0xa')][a18_0x2332('0x53')])){const _0xe591e9=__dirname;const _0xc9957c=require(a18_0x2332('0x58'))(_0xe591e9);console[a18_0x2332('0x12')]('Git\x20updating');_0xc9957c[a18_0x2332('0x59')](a18_0x2332('0x5a'),(_0x12f22b,_0x3153a6)=>{console[a18_0x2332('0x12')](a18_0x2332('0x5b')+_0x3153a6);_0xc9957c[a18_0x2332('0x5c')]('f',(_0x12f22b,_0x3153a6)=>{console['log'](a18_0x2332('0x5d')+_0x3153a6);_0xc9957c[a18_0x2332('0x5e')]((_0x12f22b,_0xb5e5c9)=>{if(_0x12f22b){console[a18_0x2332('0x12')](a18_0x2332('0x5f'));this[a18_0x2332('0x50')](_0x24da2b);return;}else{}console[a18_0x2332('0x12')](a18_0x2332('0x60'));console['log'](_0xb5e5c9);if(_0xb5e5c9&&_0xb5e5c9[a18_0x2332('0x61')][a18_0x2332('0x62')]){this['syncPlaylistsService']['reboot']();}else{console[a18_0x2332('0x12')](a18_0x2332('0x63'));}});});});}}[a18_0x2332('0x64')](_0xb14819){if(_0xb14819==a18_0x2332('0x56')||_0xb14819==String(this[a18_0x2332('0xa')]['playerId'])){this[a18_0x2332('0xa')][a18_0x2332('0x65')]();}}[a18_0x2332('0x4f')](_0x1d5299){if(String(_0x1d5299)==a18_0x2332('0x56')||String(_0x1d5299)==String(this[a18_0x2332('0xa')][a18_0x2332('0x53')])){this[a18_0x2332('0xa')][a18_0x2332('0x66')]();}}[a18_0x2332('0x4e')](_0x27bbde){if(_0x27bbde==a18_0x2332('0x56')||_0x27bbde==String(this[a18_0x2332('0xa')][a18_0x2332('0x53')])){console[a18_0x2332('0x12')](a18_0x2332('0x67'));try{this[a18_0x2332('0xa')][a18_0x2332('0x68')]();}catch(_0xa03f12){console[a18_0x2332('0x12')](_0xa03f12);}}}['handleUpdateSettingsRequest'](_0x103ced){if(_0x103ced==a18_0x2332('0x56')||_0x103ced==String(this[a18_0x2332('0xa')][a18_0x2332('0x53')])){console[a18_0x2332('0x12')]('handleUpdateSettingsRequest:\x20');try{this[a18_0x2332('0xa')][a18_0x2332('0x69')]();}catch(_0x4bbf3e){console[a18_0x2332('0x12')](_0x4bbf3e);}}}['sendStateUpdate'](){console[a18_0x2332('0x12')](a18_0x2332('0x6a'),this['state']);this['mqttClient'][a18_0x2332('0x2c')]('player/state',this[a18_0x2332('0xa')][a18_0x2332('0x53')]+'-'+this[a18_0x2332('0xb')]);}[a18_0x2332('0x4b')](_0x82729b){if(this[a18_0x2332('0xb')]!=='open'&&this[a18_0x2332('0xb')]!==a18_0x2332('0x6b')){console[a18_0x2332('0x12')]('opening\x20player\x20door');this['state']=a18_0x2332('0x6b');this['sendStateUpdate']();setTimeout(()=>{this[a18_0x2332('0xb')]=a18_0x2332('0x6c');this['sendStateUpdate']();},0x1388);}}[a18_0x2332('0x4c')](_0x53f679){if(this[a18_0x2332('0xb')]!==a18_0x2332('0xc')&&this[a18_0x2332('0xb')]!==a18_0x2332('0x6d')){this['state']=a18_0x2332('0x6d');this[a18_0x2332('0x6e')]();setTimeout(()=>{this['state']=a18_0x2332('0xc');this[a18_0x2332('0x6e')]();},0x1388);}}[a18_0x2332('0x3e')](_0x538445,_0x334e00){if(_0x334e00){console['log'](_0x334e00[a18_0x2332('0x6f')]);}this[a18_0x2332('0x3a')]['publish']('player/connected',a18_0x2332('0x70'));}['createJwt'](_0x4e8a09,_0x53bd89,_0x161879){const _0x10182a={'iat':Math[a18_0x2332('0x22')](Date[a18_0x2332('0x23')]()/0x3e8),'exp':Math[a18_0x2332('0x22')](Date[a18_0x2332('0x23')]()/0x3e8)+0x14*0x3c,'aud':_0x4e8a09};const _0x470c8e=fs['readFileSync'](_0x53bd89);return jwt[a18_0x2332('0x71')](_0x10182a,_0x470c8e,{'algorithm':_0x161879});}}exports[a18_0x2332('0x72')]=MqttService;