var a18_0x2cc0=['sendStateUpdate','closing','publish','false','createJwt','round','now','MqttService','defineProperty','__esModule','./../infrastructure/HttpClientService','fs-extra','request','request-progress','child_process','spawn','string-template','mqtt','uuid/v4','jsonwebtoken','syncPlaylistsService','state','closed','httpClientService','HttpClientService','init','mqttInit_mosquitto','mqttInit_google','log','mqttInit','velvety-glazing-252020','my-node-device','my-registry','us-central1','mqtt.googleapis.com','projects/','/locations/','/registries/','/devices/','mqtts','TLSv1_2_method','connect','subscribe','/state','/commands/#','Client\x20not\x20connected...','/projects/velvety-glazing-252020/topics/my-topic','-payload-0','publish\x20result:','close','message','Message\x20received:\x20','Config\x20message\x20received:\x20','startsWith','/commands','Command\x20message\x20received:\x20','from','base64','ascii','packetsend','clientId','run.lulo_2018#.','mqtt://lulo.run','mqttClient_connect','bind','mqttClient','mqttClient_message','exit','handleAppExit','uncaughtException','Connected\x20to\x20broker\x20client:','player/open','player/close','player/reboot','player/load_playlist','player/reload_playlist','player/update','player/ifconfig','player/register','handleOpenRequest','handleCloseRequest','handleRebootRequest','handleReloadPlaylistRequest','handleLoadPlaylistRequest','handleUpdateRequest','handleIfconfigRequest','handleRegisterRequest','playerId','registerClient','all','handleUpdateRequest:\x20','simple-git','Git\x20updating','pull','Error\x20git\x20updated','Git\x20updated','summary','changes','loadMediaList','reloadMediaList','handleRebootRequest\x20shutdown\x20-r\x20now:\x20','reboot','player/state','open','opening','opening\x20player\x20door'];(function(_0x148bc0,_0xbcc533){var _0x386052=function(_0x448d26){while(--_0x448d26){_0x148bc0['push'](_0x148bc0['shift']());}};_0x386052(++_0xbcc533);}(a18_0x2cc0,0x146));var a18_0x325e=function(_0xaefd3d,_0xa66ddf){_0xaefd3d=_0xaefd3d-0x0;var _0x1fa012=a18_0x2cc0[_0xaefd3d];return _0x1fa012;};'use strict';Object[a18_0x325e('0x0')](exports,a18_0x325e('0x1'),{'value':!![]});const HttpClientService_1=require(a18_0x325e('0x2'));const fs=require('fs');const fsExtra=require(a18_0x325e('0x3'));const request=require(a18_0x325e('0x4'));const progress=require(a18_0x325e('0x5'));const spawn=require(a18_0x325e('0x6'))[a18_0x325e('0x7')];const exec=require(a18_0x325e('0x6'))['exec'];const isImage=require('is-image');const format=require(a18_0x325e('0x8'));const os=require('os');const mqtt=require(a18_0x325e('0x9'));const uuidv4=require(a18_0x325e('0xa'));const jwt=require(a18_0x325e('0xb'));class MqttService{constructor(_0x57ad86){this[a18_0x325e('0xc')]=_0x57ad86;this[a18_0x325e('0xd')]=a18_0x325e('0xe');this[a18_0x325e('0xf')]=new HttpClientService_1[(a18_0x325e('0x10'))]();}[a18_0x325e('0x11')](){this[a18_0x325e('0x12')]();}[a18_0x325e('0x13')](){console[a18_0x325e('0x14')](a18_0x325e('0x15'));const _0xaf9ea2=a18_0x325e('0x16');const _0x5d0467=a18_0x325e('0x17');const _0x520015=a18_0x325e('0x18');const _0x2ca69a=a18_0x325e('0x19');const _0x1b2e21='RS256';const _0x94a006='resources/keys/rsa_private.pem';const _0xd37288=a18_0x325e('0x1a');const _0xa4c902=0x1bb;const _0x38391c='events';const _0x1fec32=0x5;const _0x2ca6a1=a18_0x325e('0x1b')+_0xaf9ea2+a18_0x325e('0x1c')+_0x2ca69a+a18_0x325e('0x1d')+_0x520015+a18_0x325e('0x1e')+_0x5d0467;const _0x321823={'host':_0xd37288,'port':_0xa4c902,'clientId':_0x2ca6a1,'username':'unused','password':this['createJwt'](_0xaf9ea2,_0x94a006,_0x1b2e21),'protocol':a18_0x325e('0x1f'),'secureProtocol':a18_0x325e('0x20')};const _0xaa0165=Math['round'](Date['now']()/0x3e8);const _0x418862=mqtt[a18_0x325e('0x21')](_0x321823);_0x418862[a18_0x325e('0x22')](a18_0x325e('0x1e')+_0x5d0467+'/config',{'qos':0x1});_0x418862[a18_0x325e('0x22')](a18_0x325e('0x1e')+_0x5d0467+a18_0x325e('0x23'),{'qos':0x1});_0x418862[a18_0x325e('0x22')](a18_0x325e('0x1e')+_0x5d0467+a18_0x325e('0x24'),{'qos':0x0});const _0x34a34f='/devices/'+_0x5d0467+'/'+_0x38391c;_0x418862['on'](a18_0x325e('0x21'),_0x514dfb=>{console[a18_0x325e('0x14')](a18_0x325e('0x21'));if(!_0x514dfb){console[a18_0x325e('0x14')](a18_0x325e('0x25'));}else{const _0x34a34f=a18_0x325e('0x26');const _0x72bf7=_0x520015+'/'+_0x5d0467+a18_0x325e('0x27');_0x418862['publish'](_0x34a34f,_0x72bf7,{'qos':0x1},_0x47927e=>{console[a18_0x325e('0x14')](a18_0x325e('0x28'));console[a18_0x325e('0x14')](_0x47927e);if(!_0x47927e){}});}});_0x418862['on']('close',()=>{console[a18_0x325e('0x14')](a18_0x325e('0x29'));});_0x418862['on']('error',_0x24820a=>{console[a18_0x325e('0x14')]('error',_0x24820a);});_0x418862['on'](a18_0x325e('0x2a'),(_0x56f1d2,_0x1a1aaa)=>{let _0x5e3d02=a18_0x325e('0x2b');console[a18_0x325e('0x14')](_0x56f1d2);console['log'](_0x1a1aaa+'');if(_0x56f1d2===a18_0x325e('0x1e')+_0x5d0467+'/config'){_0x5e3d02=a18_0x325e('0x2c');}else if(_0x56f1d2[a18_0x325e('0x2d')](a18_0x325e('0x1e')+_0x5d0467+a18_0x325e('0x2e'))){_0x5e3d02=a18_0x325e('0x2f');}_0x5e3d02+=Buffer[a18_0x325e('0x30')](_0x1a1aaa,a18_0x325e('0x31'))['toString'](a18_0x325e('0x32'));console[a18_0x325e('0x14')](_0x5e3d02);});_0x418862['on'](a18_0x325e('0x33'),()=>{});console['log'](_0x321823);}['mqttInit_mosquitto'](){console[a18_0x325e('0x14')]('mqttInit');this[a18_0x325e('0x34')]=uuidv4();console['log']('this.clientId');console[a18_0x325e('0x14')](this[a18_0x325e('0x34')]);const _0x21abd8={'clientId':this[a18_0x325e('0x34')],'username':'lulo_mqtt','password':a18_0x325e('0x35'),'clean':!![]};this['mqttClient']=mqtt[a18_0x325e('0x21')](a18_0x325e('0x36'),_0x21abd8);this['mqttClient']['on'](a18_0x325e('0x21'),this[a18_0x325e('0x37')][a18_0x325e('0x38')](this));this[a18_0x325e('0x39')]['on'](a18_0x325e('0x2a'),this[a18_0x325e('0x3a')]['bind'](this));this[a18_0x325e('0x39')]['on']('close',()=>{console[a18_0x325e('0x14')](a18_0x325e('0x29'));});process['on'](a18_0x325e('0x3b'),this[a18_0x325e('0x3c')][a18_0x325e('0x38')](this));process['on']('SIGINT',this[a18_0x325e('0x3c')][a18_0x325e('0x38')](this));process['on'](a18_0x325e('0x3d'),this['handleAppExit'][a18_0x325e('0x38')](this));}[a18_0x325e('0x37')](){console[a18_0x325e('0x14')](a18_0x325e('0x3e')+this[a18_0x325e('0x34')]);this[a18_0x325e('0x39')][a18_0x325e('0x22')](a18_0x325e('0x3f'));this[a18_0x325e('0x39')][a18_0x325e('0x22')](a18_0x325e('0x40'));this[a18_0x325e('0x39')][a18_0x325e('0x22')](a18_0x325e('0x41'),{'qos':0x2});this['mqttClient'][a18_0x325e('0x22')](a18_0x325e('0x42'),{'qos':0x2});this[a18_0x325e('0x39')][a18_0x325e('0x22')](a18_0x325e('0x43'),{'qos':0x2});this[a18_0x325e('0x39')][a18_0x325e('0x22')](a18_0x325e('0x44'),{'qos':0x2});this[a18_0x325e('0x39')]['subscribe'](a18_0x325e('0x45'),{'qos':0x2});this[a18_0x325e('0x39')]['subscribe'](a18_0x325e('0x46'),{'qos':0x2});}['reportStatus'](){}[a18_0x325e('0x3a')](_0x17e56d,_0x283dce){console[a18_0x325e('0x14')]('received\x20message\x20%s\x20%s',_0x17e56d,_0x283dce);switch(_0x17e56d){case a18_0x325e('0x3f'):return this[a18_0x325e('0x47')](_0x283dce);case a18_0x325e('0x40'):return this[a18_0x325e('0x48')](_0x283dce);case a18_0x325e('0x41'):return this[a18_0x325e('0x49')](_0x283dce);case a18_0x325e('0x43'):return this[a18_0x325e('0x4a')](_0x283dce);case'player/load_playlist':return this[a18_0x325e('0x4b')](_0x283dce);case a18_0x325e('0x44'):return this[a18_0x325e('0x4c')](_0x283dce);case a18_0x325e('0x45'):return this[a18_0x325e('0x4d')](_0x283dce);case a18_0x325e('0x46'):return this['handleRegisterRequest'](_0x283dce);}}[a18_0x325e('0x4e')](_0x7e2c5){if(_0x7e2c5=='all'||_0x7e2c5==String(this['syncPlaylistsService'][a18_0x325e('0x4f')])){this[a18_0x325e('0xc')][a18_0x325e('0x50')]();}}[a18_0x325e('0x4d')](_0x459b9f){if(_0x459b9f==a18_0x325e('0x51')||_0x459b9f==String(this['syncPlaylistsService'][a18_0x325e('0x4f')])){}}['handleUpdateRequest'](_0x28d7ec){console['log'](a18_0x325e('0x52')+_0x28d7ec);if(_0x28d7ec==a18_0x325e('0x51')||_0x28d7ec==String(this[a18_0x325e('0xc')][a18_0x325e('0x4f')])){const _0x6ec89=__dirname;const _0x46833b=require(a18_0x325e('0x53'))(_0x6ec89);console['log'](a18_0x325e('0x54'));_0x46833b[a18_0x325e('0x55')]((_0x100cda,_0x2de166)=>{if(_0x100cda){console[a18_0x325e('0x14')](a18_0x325e('0x56'));this[a18_0x325e('0x4c')](_0x28d7ec);return;}else{}console['log'](a18_0x325e('0x57'));console[a18_0x325e('0x14')](_0x2de166);if(_0x2de166&&_0x2de166[a18_0x325e('0x58')][a18_0x325e('0x59')]){this['syncPlaylistsService']['reboot']();}else{}});}}['handleLoadPlaylistRequest'](_0x1231b7){if(_0x1231b7==a18_0x325e('0x51')||_0x1231b7==String(this['syncPlaylistsService'][a18_0x325e('0x4f')])){this[a18_0x325e('0xc')][a18_0x325e('0x5a')]();}}[a18_0x325e('0x4a')](_0xe979f8){if(String(_0xe979f8)==a18_0x325e('0x51')||String(_0xe979f8)==String(this[a18_0x325e('0xc')][a18_0x325e('0x4f')])){this[a18_0x325e('0xc')][a18_0x325e('0x5b')]();}}[a18_0x325e('0x49')](_0x442713){if(_0x442713==a18_0x325e('0x51')||_0x442713==String(this['syncPlaylistsService'][a18_0x325e('0x4f')])){console[a18_0x325e('0x14')](a18_0x325e('0x5c'));try{this[a18_0x325e('0xc')][a18_0x325e('0x5d')]();}catch(_0x1a1631){console[a18_0x325e('0x14')](_0x1a1631);}}}['sendStateUpdate'](){console[a18_0x325e('0x14')]('sending\x20state\x20%s',this[a18_0x325e('0xd')]);this[a18_0x325e('0x39')]['publish'](a18_0x325e('0x5e'),this['syncPlaylistsService'][a18_0x325e('0x4f')]+'-'+this['state']);}[a18_0x325e('0x47')](_0x252bc3){if(this[a18_0x325e('0xd')]!==a18_0x325e('0x5f')&&this[a18_0x325e('0xd')]!==a18_0x325e('0x60')){console[a18_0x325e('0x14')](a18_0x325e('0x61'));this[a18_0x325e('0xd')]=a18_0x325e('0x60');this[a18_0x325e('0x62')]();setTimeout(()=>{this[a18_0x325e('0xd')]=a18_0x325e('0x5f');this[a18_0x325e('0x62')]();},0x1388);}}[a18_0x325e('0x48')](_0x27c775){if(this[a18_0x325e('0xd')]!==a18_0x325e('0xe')&&this[a18_0x325e('0xd')]!==a18_0x325e('0x63')){this[a18_0x325e('0xd')]=a18_0x325e('0x63');this[a18_0x325e('0x62')]();setTimeout(()=>{this[a18_0x325e('0xd')]=a18_0x325e('0xe');this[a18_0x325e('0x62')]();},0x1388);}}[a18_0x325e('0x3c')](_0xbbadf1,_0x446aa5){if(_0x446aa5){console['log'](_0x446aa5['stack']);}this[a18_0x325e('0x39')][a18_0x325e('0x64')]('player/connected',a18_0x325e('0x65'));}[a18_0x325e('0x66')](_0x37c76c,_0x1f8d61,_0xddac5b){const _0x5b8eb5={'iat':Math[a18_0x325e('0x67')](Date['now']()/0x3e8),'exp':Math[a18_0x325e('0x67')](Date[a18_0x325e('0x68')]()/0x3e8)+0x14*0x3c,'aud':_0x37c76c};const _0x5e7950=fs['readFileSync'](_0x1f8d61);return jwt['sign'](_0x5b8eb5,_0x5e7950,{'algorithm':_0xddac5b});}}exports[a18_0x325e('0x69')]=MqttService;