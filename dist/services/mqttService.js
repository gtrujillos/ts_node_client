var a20_0x47b5=['/locations/','/registries/','/devices/','unused','mqtts','TLSv1_2_method','round','now','/config','subscribe','/state','connect','/projects/velvety-glazing-252020/topics/my-topic','-payload-0','publish','close','error','message','Message\x20received:\x20','Config\x20message\x20received:\x20','/commands','Command\x20message\x20received:\x20','from','base64','toString','ascii','packetsend','clientId','this.clientId','mqtt://lulo.run','mqttClient_connect','bind','mqttClient','handleAppExit','uncaughtException','Connected\x20to\x20broker\x20client:','player/close','player/load_playlist','player/update','player/ifconfig','player/register','player/turn_on_tv','reportStatus','mqttClient_message','received\x20message\x20%s\x20%s','player/open','handleCloseRequest','player/reboot','handleRebootRequest','handleReloadPlaylistRequest','handleLoadPlaylistRequest','handleUpdateRequest','handleIfconfigRequest','player/update_settings','player/turn_off_tv','handleTurnOffTVRequest','handleTurnOnTVRequest','handleRegisterRequest','playerId','registerClient','all','handleUpdateRequest:\x20','Git\x20updating','pull','Error\x20git\x20updated','Git\x20updated','summary','changes','reboot','loadMediaList','reloadMediaList','handleRebootRequest\x20shutdown\x20-r\x20now:\x20','handleUpdateSettingsRequest','handleTurnOnTVRequest:\x20','turnOnTV','handleTurnOffTVRequest:\x20','turnOffTV','sendStateUpdate','sending\x20state\x20%s','player/state','handleOpenRequest','open','opening','closing','stack','player/connected','false','readFileSync','MqttService','defineProperty','__esModule','./../infrastructure/HttpClientService','fs-extra','request','request-progress','child_process','spawn','exec','string-template','mqtt','uuid/v4','jsonwebtoken','syncPlaylistsService','state','closed','HttpClientService','init','mqttInit_mosquitto','mqttInit_google','log','mqttInit','my-node-device','my-registry','us-central1','resources/keys/rsa_private.pem','projects/'];(function(_0x1196c6,_0x44e6fa){var _0x18d0d0=function(_0x300794){while(--_0x300794){_0x1196c6['push'](_0x1196c6['shift']());}};_0x18d0d0(++_0x44e6fa);}(a20_0x47b5,0x141));var a20_0x4f92=function(_0x4adc7d,_0x25f49c){_0x4adc7d=_0x4adc7d-0x0;var _0x591923=a20_0x47b5[_0x4adc7d];return _0x591923;};'use strict';Object[a20_0x4f92('0x0')](exports,a20_0x4f92('0x1'),{'value':!![]});const HttpClientService_1=require(a20_0x4f92('0x2'));const fs=require('fs');const fsExtra=require(a20_0x4f92('0x3'));const request=require(a20_0x4f92('0x4'));const progress=require(a20_0x4f92('0x5'));const spawn=require(a20_0x4f92('0x6'))[a20_0x4f92('0x7')];const exec=require(a20_0x4f92('0x6'))[a20_0x4f92('0x8')];const isImage=require('is-image');const format=require(a20_0x4f92('0x9'));const os=require('os');const mqtt=require(a20_0x4f92('0xa'));const uuidv4=require(a20_0x4f92('0xb'));const jwt=require(a20_0x4f92('0xc'));class MqttService{constructor(_0xe634fb){this[a20_0x4f92('0xd')]=_0xe634fb;this[a20_0x4f92('0xe')]=a20_0x4f92('0xf');this['httpClientService']=new HttpClientService_1[(a20_0x4f92('0x10'))]();}[a20_0x4f92('0x11')](){this[a20_0x4f92('0x12')]();}[a20_0x4f92('0x13')](){console[a20_0x4f92('0x14')](a20_0x4f92('0x15'));const _0x102902='velvety-glazing-252020';const _0x4b9d8a=a20_0x4f92('0x16');const _0xea10b1=a20_0x4f92('0x17');const _0xe0599f=a20_0x4f92('0x18');const _0x1452ca='RS256';const _0xfcf26=a20_0x4f92('0x19');const _0x3556e0='mqtt.googleapis.com';const _0x4fb868=0x1bb;const _0x3bb357='events';const _0x34c0fe=0x5;const _0x5751a0=a20_0x4f92('0x1a')+_0x102902+a20_0x4f92('0x1b')+_0xe0599f+a20_0x4f92('0x1c')+_0xea10b1+a20_0x4f92('0x1d')+_0x4b9d8a;const _0x24a088={'host':_0x3556e0,'port':_0x4fb868,'clientId':_0x5751a0,'username':a20_0x4f92('0x1e'),'password':this['createJwt'](_0x102902,_0xfcf26,_0x1452ca),'protocol':a20_0x4f92('0x1f'),'secureProtocol':a20_0x4f92('0x20')};const _0x335adc=Math[a20_0x4f92('0x21')](Date[a20_0x4f92('0x22')]()/0x3e8);const _0x5c9239=mqtt['connect'](_0x24a088);_0x5c9239['subscribe'](a20_0x4f92('0x1d')+_0x4b9d8a+a20_0x4f92('0x23'),{'qos':0x1});_0x5c9239[a20_0x4f92('0x24')](a20_0x4f92('0x1d')+_0x4b9d8a+a20_0x4f92('0x25'),{'qos':0x1});_0x5c9239[a20_0x4f92('0x24')](a20_0x4f92('0x1d')+_0x4b9d8a+'/commands/#',{'qos':0x0});const _0x4159e0='/devices/'+_0x4b9d8a+'/'+_0x3bb357;_0x5c9239['on'](a20_0x4f92('0x26'),_0x33cb18=>{console[a20_0x4f92('0x14')]('connect');if(!_0x33cb18){console[a20_0x4f92('0x14')]('Client\x20not\x20connected...');}else{const _0x4159e0=a20_0x4f92('0x27');const _0x4b1c04=_0xea10b1+'/'+_0x4b9d8a+a20_0x4f92('0x28');_0x5c9239[a20_0x4f92('0x29')](_0x4159e0,_0x4b1c04,{'qos':0x1},_0x5bc087=>{console[a20_0x4f92('0x14')]('publish\x20result:');console['log'](_0x5bc087);if(!_0x5bc087){}});}});_0x5c9239['on'](a20_0x4f92('0x2a'),()=>{console[a20_0x4f92('0x14')](a20_0x4f92('0x2a'));});_0x5c9239['on'](a20_0x4f92('0x2b'),_0x5fb595=>{console[a20_0x4f92('0x14')](a20_0x4f92('0x2b'),_0x5fb595);});_0x5c9239['on'](a20_0x4f92('0x2c'),(_0x515b12,_0x59469e)=>{let _0x2ca3e5=a20_0x4f92('0x2d');console[a20_0x4f92('0x14')](_0x515b12);console['log'](_0x59469e+'');if(_0x515b12===a20_0x4f92('0x1d')+_0x4b9d8a+a20_0x4f92('0x23')){_0x2ca3e5=a20_0x4f92('0x2e');}else if(_0x515b12['startsWith']('/devices/'+_0x4b9d8a+a20_0x4f92('0x2f'))){_0x2ca3e5=a20_0x4f92('0x30');}_0x2ca3e5+=Buffer[a20_0x4f92('0x31')](_0x59469e,a20_0x4f92('0x32'))[a20_0x4f92('0x33')](a20_0x4f92('0x34'));console[a20_0x4f92('0x14')](_0x2ca3e5);});_0x5c9239['on'](a20_0x4f92('0x35'),()=>{});console[a20_0x4f92('0x14')](_0x24a088);}['mqttInit_mosquitto'](){console[a20_0x4f92('0x14')](a20_0x4f92('0x15'));this[a20_0x4f92('0x36')]=uuidv4();console[a20_0x4f92('0x14')](a20_0x4f92('0x37'));console[a20_0x4f92('0x14')](this[a20_0x4f92('0x36')]);const _0x33bfa7={'clientId':this[a20_0x4f92('0x36')],'username':'lulo_mqtt','password':'run.lulo_2018#.','clean':!![]};this['mqttClient']=mqtt[a20_0x4f92('0x26')](a20_0x4f92('0x38'),_0x33bfa7);this['mqttClient']['on']('connect',this[a20_0x4f92('0x39')][a20_0x4f92('0x3a')](this));this[a20_0x4f92('0x3b')]['on'](a20_0x4f92('0x2c'),this['mqttClient_message'][a20_0x4f92('0x3a')](this));this[a20_0x4f92('0x3b')]['on'](a20_0x4f92('0x2a'),()=>{console[a20_0x4f92('0x14')](a20_0x4f92('0x2a'));});process['on']('exit',this[a20_0x4f92('0x3c')][a20_0x4f92('0x3a')](this));process['on']('SIGINT',this['handleAppExit'][a20_0x4f92('0x3a')](this));process['on'](a20_0x4f92('0x3d'),this[a20_0x4f92('0x3c')]['bind'](this));}[a20_0x4f92('0x39')](){console[a20_0x4f92('0x14')](a20_0x4f92('0x3e')+this[a20_0x4f92('0x36')]);this[a20_0x4f92('0x3b')][a20_0x4f92('0x24')]('player/open');this[a20_0x4f92('0x3b')][a20_0x4f92('0x24')](a20_0x4f92('0x3f'));this[a20_0x4f92('0x3b')][a20_0x4f92('0x24')]('player/reboot',{'qos':0x2});this[a20_0x4f92('0x3b')]['subscribe'](a20_0x4f92('0x40'),{'qos':0x2});this[a20_0x4f92('0x3b')][a20_0x4f92('0x24')]('player/reload_playlist',{'qos':0x2});this[a20_0x4f92('0x3b')][a20_0x4f92('0x24')](a20_0x4f92('0x41'),{'qos':0x2});this['mqttClient']['subscribe'](a20_0x4f92('0x42'),{'qos':0x2});this[a20_0x4f92('0x3b')][a20_0x4f92('0x24')](a20_0x4f92('0x43'),{'qos':0x2});this[a20_0x4f92('0x3b')][a20_0x4f92('0x24')]('player/update_settings',{'qos':0x2});this[a20_0x4f92('0x3b')][a20_0x4f92('0x24')]('player/turn_off_tv',{'qos':0x2});this['mqttClient'][a20_0x4f92('0x24')](a20_0x4f92('0x44'),{'qos':0x2});}[a20_0x4f92('0x45')](){}[a20_0x4f92('0x46')](_0x28dd97,_0x4ff448){console[a20_0x4f92('0x14')](a20_0x4f92('0x47'),_0x28dd97,_0x4ff448);switch(_0x28dd97){case a20_0x4f92('0x48'):return this['handleOpenRequest'](_0x4ff448);case a20_0x4f92('0x3f'):return this[a20_0x4f92('0x49')](_0x4ff448);case a20_0x4f92('0x4a'):return this[a20_0x4f92('0x4b')](_0x4ff448);case'player/reload_playlist':return this[a20_0x4f92('0x4c')](_0x4ff448);case a20_0x4f92('0x40'):return this[a20_0x4f92('0x4d')](_0x4ff448);case'player/update':return this[a20_0x4f92('0x4e')](_0x4ff448);case a20_0x4f92('0x42'):return this[a20_0x4f92('0x4f')](_0x4ff448);case a20_0x4f92('0x43'):return this['handleRegisterRequest'](_0x4ff448);case a20_0x4f92('0x50'):return this['handleUpdateSettingsRequest'](_0x4ff448);case a20_0x4f92('0x51'):return this[a20_0x4f92('0x52')](_0x4ff448);case'player/turn_on_tv':return this[a20_0x4f92('0x53')](_0x4ff448);}}[a20_0x4f92('0x54')](_0x33099f){if(_0x33099f=='all'||_0x33099f==String(this['syncPlaylistsService'][a20_0x4f92('0x55')])){this[a20_0x4f92('0xd')][a20_0x4f92('0x56')]();}}[a20_0x4f92('0x4f')](_0x1f00b5){if(_0x1f00b5==a20_0x4f92('0x57')||_0x1f00b5==String(this[a20_0x4f92('0xd')][a20_0x4f92('0x55')])){}}[a20_0x4f92('0x4e')](_0x1a27cb){console[a20_0x4f92('0x14')](a20_0x4f92('0x58')+_0x1a27cb);if(_0x1a27cb=='all'||_0x1a27cb==String(this['syncPlaylistsService']['playerId'])){const _0x346253=__dirname;const _0x2944bc=require('simple-git')(_0x346253);console[a20_0x4f92('0x14')](a20_0x4f92('0x59'));_0x2944bc[a20_0x4f92('0x5a')]((_0xcb23af,_0x3e7b62)=>{if(_0xcb23af){console['log'](a20_0x4f92('0x5b'));this[a20_0x4f92('0x4e')](_0x1a27cb);return;}else{}console['log'](a20_0x4f92('0x5c'));console[a20_0x4f92('0x14')](_0x3e7b62);if(_0x3e7b62&&_0x3e7b62[a20_0x4f92('0x5d')][a20_0x4f92('0x5e')]){this[a20_0x4f92('0xd')][a20_0x4f92('0x5f')]();}else{}});}}['handleLoadPlaylistRequest'](_0x3fedff){if(_0x3fedff=='all'||_0x3fedff==String(this[a20_0x4f92('0xd')]['playerId'])){this[a20_0x4f92('0xd')][a20_0x4f92('0x60')]();}}[a20_0x4f92('0x4c')](_0x1c93b8){if(String(_0x1c93b8)=='all'||String(_0x1c93b8)==String(this[a20_0x4f92('0xd')]['playerId'])){this[a20_0x4f92('0xd')][a20_0x4f92('0x61')]();}}[a20_0x4f92('0x4b')](_0x5518e8){if(_0x5518e8==a20_0x4f92('0x57')||_0x5518e8==String(this['syncPlaylistsService'][a20_0x4f92('0x55')])){console[a20_0x4f92('0x14')](a20_0x4f92('0x62'));try{this[a20_0x4f92('0xd')][a20_0x4f92('0x5f')]();}catch(_0x36b3b1){console[a20_0x4f92('0x14')](_0x36b3b1);}}}[a20_0x4f92('0x63')](_0xcbe00a){if(_0xcbe00a==a20_0x4f92('0x57')||_0xcbe00a==String(this[a20_0x4f92('0xd')][a20_0x4f92('0x55')])){console[a20_0x4f92('0x14')]('handleUpdateSettingsRequest:\x20');try{this[a20_0x4f92('0xd')]['updateSettings']();}catch(_0x34c68d){console[a20_0x4f92('0x14')](_0x34c68d);}}}['handleTurnOnTVRequest'](_0x257240){if(_0x257240=='all'||_0x257240==String(this[a20_0x4f92('0xd')][a20_0x4f92('0x55')])){console[a20_0x4f92('0x14')](a20_0x4f92('0x64'));try{this[a20_0x4f92('0xd')][a20_0x4f92('0x65')]();}catch(_0x2b1a99){console[a20_0x4f92('0x14')](_0x2b1a99);}}}[a20_0x4f92('0x52')](_0x2848cf){if(_0x2848cf==a20_0x4f92('0x57')||_0x2848cf==String(this['syncPlaylistsService'][a20_0x4f92('0x55')])){console[a20_0x4f92('0x14')](a20_0x4f92('0x66'));try{this['syncPlaylistsService'][a20_0x4f92('0x67')]();}catch(_0x5212a2){console[a20_0x4f92('0x14')](_0x5212a2);}}}[a20_0x4f92('0x68')](){console[a20_0x4f92('0x14')](a20_0x4f92('0x69'),this['state']);this[a20_0x4f92('0x3b')]['publish'](a20_0x4f92('0x6a'),this[a20_0x4f92('0xd')][a20_0x4f92('0x55')]+'-'+this[a20_0x4f92('0xe')]);}[a20_0x4f92('0x6b')](_0x1ea7b6){if(this[a20_0x4f92('0xe')]!==a20_0x4f92('0x6c')&&this['state']!==a20_0x4f92('0x6d')){console[a20_0x4f92('0x14')]('opening\x20player\x20door');this[a20_0x4f92('0xe')]=a20_0x4f92('0x6d');this['sendStateUpdate']();setTimeout(()=>{this[a20_0x4f92('0xe')]=a20_0x4f92('0x6c');this[a20_0x4f92('0x68')]();},0x1388);}}[a20_0x4f92('0x49')](_0x1b26ee){if(this['state']!=='closed'&&this['state']!==a20_0x4f92('0x6e')){this[a20_0x4f92('0xe')]=a20_0x4f92('0x6e');this[a20_0x4f92('0x68')]();setTimeout(()=>{this[a20_0x4f92('0xe')]=a20_0x4f92('0xf');this['sendStateUpdate']();},0x1388);}}[a20_0x4f92('0x3c')](_0xb9a9d2,_0x2f1623){if(_0x2f1623){console['log'](_0x2f1623[a20_0x4f92('0x6f')]);}this[a20_0x4f92('0x3b')]['publish'](a20_0x4f92('0x70'),a20_0x4f92('0x71'));}['createJwt'](_0x489365,_0x34efb6,_0x44b580){const _0x44e910={'iat':Math[a20_0x4f92('0x21')](Date[a20_0x4f92('0x22')]()/0x3e8),'exp':Math[a20_0x4f92('0x21')](Date[a20_0x4f92('0x22')]()/0x3e8)+0x14*0x3c,'aud':_0x489365};const _0x2ea149=fs[a20_0x4f92('0x72')](_0x34efb6);return jwt['sign'](_0x44e910,_0x2ea149,{'algorithm':_0x44b580});}}exports[a20_0x4f92('0x73')]=MqttService;