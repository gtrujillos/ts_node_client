var a18_0xa07a=['reportStatus','received\x20message\x20%s\x20%s','handleOpenRequest','handleCloseRequest','player/reboot','handleRebootRequest','player/reload_playlist','handleIfconfigRequest','handleRegisterRequest','all','playerId','registerClient','handleUpdateRequest','handleUpdateRequest:\x20','simple-git','Git\x20updating','pull','Error\x20git\x20updated','Git\x20updated','summary','changes','shutdown','handleLoadPlaylistRequest','loadMediaList','sendStateUpdate','sending\x20state\x20%s','player/state','open','opening','opening\x20player\x20door','closing','createJwt','now','readFileSync','sign','MqttService','defineProperty','./../infrastructure/HttpClientService','fs-extra','request','child_process','is-image','mqtt','uuid/v4','syncPlaylistsService','state','closed','httpClientService','mqttInit_mosquitto','mqttInit_google','log','mqttInit','velvety-glazing-252020','my-registry','RS256','resources/keys/rsa_private.pem','mqtt.googleapis.com','events','/locations/','/registries/','/devices/','unused','mqtts','round','connect','/config','/state','/commands/#','Client\x20not\x20connected...','/projects/velvety-glazing-252020/topics/my-topic','-payload-0','publish','publish\x20result:','error','message','Message\x20received:\x20','Config\x20message\x20received:\x20','/commands','Command\x20message\x20received:\x20','base64','toString','ascii','packetsend','clientId','this.clientId','lulo_mqtt','mqttClient','mqtt://lulo.run','mqttClient_connect','mqttClient_message','bind','close','exit','handleAppExit','SIGINT','uncaughtException','player/open','subscribe','player/close','player/load_playlist','player/update','player/ifconfig','player/register'];(function(_0x2abaf5,_0x59ee44){var _0x2fed7e=function(_0x43dde4){while(--_0x43dde4){_0x2abaf5['push'](_0x2abaf5['shift']());}};_0x2fed7e(++_0x59ee44);}(a18_0xa07a,0xf2));var a18_0x1c6b=function(_0x55228c,_0x7b2e0b){_0x55228c=_0x55228c-0x0;var _0x21bf45=a18_0xa07a[_0x55228c];return _0x21bf45;};'use strict';Object[a18_0x1c6b('0x0')](exports,'__esModule',{'value':!![]});const HttpClientService_1=require(a18_0x1c6b('0x1'));const fs=require('fs');const fsExtra=require(a18_0x1c6b('0x2'));const request=require(a18_0x1c6b('0x3'));const progress=require('request-progress');const {spawn}=require(a18_0x1c6b('0x4'));const isImage=require(a18_0x1c6b('0x5'));const format=require('string-template');const os=require('os');const mqtt=require(a18_0x1c6b('0x6'));const uuidv4=require(a18_0x1c6b('0x7'));const jwt=require('jsonwebtoken');class MqttService{constructor(_0x154bb3){this[a18_0x1c6b('0x8')]=_0x154bb3;this[a18_0x1c6b('0x9')]=a18_0x1c6b('0xa');this[a18_0x1c6b('0xb')]=new HttpClientService_1['HttpClientService']();}['init'](){this[a18_0x1c6b('0xc')]();}[a18_0x1c6b('0xd')](){console[a18_0x1c6b('0xe')](a18_0x1c6b('0xf'));const _0x580674=a18_0x1c6b('0x10');const _0x5312b2='my-node-device';const _0x5d8a1e=a18_0x1c6b('0x11');const _0x573a89='us-central1';const _0x40530e=a18_0x1c6b('0x12');const _0x112928=a18_0x1c6b('0x13');const _0x5cc9a5=a18_0x1c6b('0x14');const _0x136eeb=0x1bb;const _0x2ec2b0=a18_0x1c6b('0x15');const _0x85405d=0x5;const _0x307513='projects/'+_0x580674+a18_0x1c6b('0x16')+_0x573a89+a18_0x1c6b('0x17')+_0x5d8a1e+a18_0x1c6b('0x18')+_0x5312b2;const _0x17e0b0={'host':_0x5cc9a5,'port':_0x136eeb,'clientId':_0x307513,'username':a18_0x1c6b('0x19'),'password':this['createJwt'](_0x580674,_0x112928,_0x40530e),'protocol':a18_0x1c6b('0x1a'),'secureProtocol':'TLSv1_2_method'};const _0x64379b=Math[a18_0x1c6b('0x1b')](Date['now']()/0x3e8);const _0x188b13=mqtt[a18_0x1c6b('0x1c')](_0x17e0b0);_0x188b13['subscribe'](a18_0x1c6b('0x18')+_0x5312b2+a18_0x1c6b('0x1d'),{'qos':0x1});_0x188b13['subscribe']('/devices/'+_0x5312b2+a18_0x1c6b('0x1e'),{'qos':0x1});_0x188b13['subscribe'](a18_0x1c6b('0x18')+_0x5312b2+a18_0x1c6b('0x1f'),{'qos':0x0});const _0x143ad8=a18_0x1c6b('0x18')+_0x5312b2+'/'+_0x2ec2b0;_0x188b13['on'](a18_0x1c6b('0x1c'),_0x2f02b3=>{console[a18_0x1c6b('0xe')](a18_0x1c6b('0x1c'));if(!_0x2f02b3){console[a18_0x1c6b('0xe')](a18_0x1c6b('0x20'));}else{const _0x143ad8=a18_0x1c6b('0x21');const _0x51e08e=_0x5d8a1e+'/'+_0x5312b2+a18_0x1c6b('0x22');_0x188b13[a18_0x1c6b('0x23')](_0x143ad8,_0x51e08e,{'qos':0x1},_0x2d8798=>{console[a18_0x1c6b('0xe')](a18_0x1c6b('0x24'));console[a18_0x1c6b('0xe')](_0x2d8798);if(!_0x2d8798){}});}});_0x188b13['on']('close',()=>{console[a18_0x1c6b('0xe')]('close');});_0x188b13['on'](a18_0x1c6b('0x25'),_0x306491=>{console[a18_0x1c6b('0xe')]('error',_0x306491);});_0x188b13['on'](a18_0x1c6b('0x26'),(_0x35e311,_0x555bf6)=>{let _0x2890b0=a18_0x1c6b('0x27');console[a18_0x1c6b('0xe')](_0x35e311);console[a18_0x1c6b('0xe')](_0x555bf6+'');if(_0x35e311==='/devices/'+_0x5312b2+a18_0x1c6b('0x1d')){_0x2890b0=a18_0x1c6b('0x28');}else if(_0x35e311['startsWith'](a18_0x1c6b('0x18')+_0x5312b2+a18_0x1c6b('0x29'))){_0x2890b0=a18_0x1c6b('0x2a');}_0x2890b0+=Buffer['from'](_0x555bf6,a18_0x1c6b('0x2b'))[a18_0x1c6b('0x2c')](a18_0x1c6b('0x2d'));console[a18_0x1c6b('0xe')](_0x2890b0);});_0x188b13['on'](a18_0x1c6b('0x2e'),()=>{});console[a18_0x1c6b('0xe')](_0x17e0b0);}[a18_0x1c6b('0xc')](){console['log']('mqttInit');this[a18_0x1c6b('0x2f')]=uuidv4();console['log'](a18_0x1c6b('0x30'));console[a18_0x1c6b('0xe')](this[a18_0x1c6b('0x2f')]);const _0x35f628={'clientId':this['clientId'],'username':a18_0x1c6b('0x31'),'password':'run.lulo_2018#.','clean':!![]};this[a18_0x1c6b('0x32')]=mqtt[a18_0x1c6b('0x1c')](a18_0x1c6b('0x33'),_0x35f628);this[a18_0x1c6b('0x32')]['on']('connect',this[a18_0x1c6b('0x34')]['bind'](this));this[a18_0x1c6b('0x32')]['on'](a18_0x1c6b('0x26'),this[a18_0x1c6b('0x35')][a18_0x1c6b('0x36')](this));this[a18_0x1c6b('0x32')]['on'](a18_0x1c6b('0x37'),()=>{console[a18_0x1c6b('0xe')](a18_0x1c6b('0x37'));});process['on'](a18_0x1c6b('0x38'),this[a18_0x1c6b('0x39')][a18_0x1c6b('0x36')](this));process['on'](a18_0x1c6b('0x3a'),this[a18_0x1c6b('0x39')][a18_0x1c6b('0x36')](this));process['on'](a18_0x1c6b('0x3b'),this['handleAppExit'][a18_0x1c6b('0x36')](this));}[a18_0x1c6b('0x34')](){console['log']('Connected\x20to\x20broker\x20client:'+this[a18_0x1c6b('0x2f')]);this[a18_0x1c6b('0x32')]['subscribe'](a18_0x1c6b('0x3c'));this['mqttClient'][a18_0x1c6b('0x3d')](a18_0x1c6b('0x3e'));this[a18_0x1c6b('0x32')][a18_0x1c6b('0x3d')]('player/reboot',{'qos':0x2});this['mqttClient'][a18_0x1c6b('0x3d')](a18_0x1c6b('0x3f'),{'qos':0x2});this[a18_0x1c6b('0x32')]['subscribe']('player/reload_playlist',{'qos':0x2});this['mqttClient']['subscribe'](a18_0x1c6b('0x40'),{'qos':0x2});this[a18_0x1c6b('0x32')]['subscribe'](a18_0x1c6b('0x41'),{'qos':0x2});this[a18_0x1c6b('0x32')]['subscribe'](a18_0x1c6b('0x42'),{'qos':0x2});}[a18_0x1c6b('0x43')](){}[a18_0x1c6b('0x35')](_0x1e6a47,_0x57f737){console[a18_0x1c6b('0xe')](a18_0x1c6b('0x44'),_0x1e6a47,_0x57f737);switch(_0x1e6a47){case a18_0x1c6b('0x3c'):return this[a18_0x1c6b('0x45')](_0x57f737);case a18_0x1c6b('0x3e'):return this[a18_0x1c6b('0x46')](_0x57f737);case a18_0x1c6b('0x47'):return this[a18_0x1c6b('0x48')](_0x57f737);case a18_0x1c6b('0x49'):return this['handleReloadPlaylistRequest'](_0x57f737);case'player/load_playlist':return this['handleLoadPlaylistRequest'](_0x57f737);case'player/update':return this['handleUpdateRequest'](_0x57f737);case a18_0x1c6b('0x41'):return this[a18_0x1c6b('0x4a')](_0x57f737);case'player/register':return this[a18_0x1c6b('0x4b')](_0x57f737);}}[a18_0x1c6b('0x4b')](_0x44357a){if(_0x44357a==a18_0x1c6b('0x4c')||_0x44357a==String(this['syncPlaylistsService'][a18_0x1c6b('0x4d')])){this[a18_0x1c6b('0x8')][a18_0x1c6b('0x4e')]();}}['handleIfconfigRequest'](_0x256190){if(_0x256190==a18_0x1c6b('0x4c')||_0x256190==String(this[a18_0x1c6b('0x8')][a18_0x1c6b('0x4d')])){}}[a18_0x1c6b('0x4f')](_0x4c272c){console[a18_0x1c6b('0xe')](a18_0x1c6b('0x50')+_0x4c272c);if(_0x4c272c==a18_0x1c6b('0x4c')||_0x4c272c==String(this[a18_0x1c6b('0x8')][a18_0x1c6b('0x4d')])){const _0x43af93=__dirname;const _0x55f53e=require(a18_0x1c6b('0x51'))(_0x43af93);console[a18_0x1c6b('0xe')](a18_0x1c6b('0x52'));_0x55f53e[a18_0x1c6b('0x53')]((_0xe70761,_0x2fc70d)=>{if(_0xe70761){console['log'](a18_0x1c6b('0x54'));this[a18_0x1c6b('0x4f')](_0x4c272c);return;}else{}console[a18_0x1c6b('0xe')](a18_0x1c6b('0x55'));console['log'](_0x2fc70d);if(_0x2fc70d&&_0x2fc70d[a18_0x1c6b('0x56')][a18_0x1c6b('0x57')]){const _0x13639a=spawn(a18_0x1c6b('0x58'),['-r','now']);}else{}});}}[a18_0x1c6b('0x59')](_0x113303){if(_0x113303==a18_0x1c6b('0x4c')||_0x113303==String(this[a18_0x1c6b('0x8')][a18_0x1c6b('0x4d')])){this[a18_0x1c6b('0x8')][a18_0x1c6b('0x5a')]();}}['handleReloadPlaylistRequest'](_0x359061){if(String(_0x359061)=='all'||String(_0x359061)==String(this[a18_0x1c6b('0x8')][a18_0x1c6b('0x4d')])){this[a18_0x1c6b('0x8')]['reloadMediaList']();}}[a18_0x1c6b('0x48')](_0x4fcb41){if(_0x4fcb41==a18_0x1c6b('0x4c')||_0x4fcb41==String(this[a18_0x1c6b('0x8')][a18_0x1c6b('0x4d')])){console[a18_0x1c6b('0xe')]('handleRebootRequest');try{}catch(_0x36518e){console[a18_0x1c6b('0xe')](_0x36518e);}}}[a18_0x1c6b('0x5b')](){console[a18_0x1c6b('0xe')](a18_0x1c6b('0x5c'),this['state']);this[a18_0x1c6b('0x32')][a18_0x1c6b('0x23')](a18_0x1c6b('0x5d'),this[a18_0x1c6b('0x8')]['playerId']+'-'+this[a18_0x1c6b('0x9')]);}[a18_0x1c6b('0x45')](_0x267db5){if(this[a18_0x1c6b('0x9')]!==a18_0x1c6b('0x5e')&&this[a18_0x1c6b('0x9')]!==a18_0x1c6b('0x5f')){console[a18_0x1c6b('0xe')](a18_0x1c6b('0x60'));this[a18_0x1c6b('0x9')]=a18_0x1c6b('0x5f');this[a18_0x1c6b('0x5b')]();setTimeout(()=>{this[a18_0x1c6b('0x9')]=a18_0x1c6b('0x5e');this['sendStateUpdate']();},0x1388);}}['handleCloseRequest'](_0x325b0c){if(this[a18_0x1c6b('0x9')]!==a18_0x1c6b('0xa')&&this['state']!==a18_0x1c6b('0x61')){this[a18_0x1c6b('0x9')]=a18_0x1c6b('0x61');this[a18_0x1c6b('0x5b')]();setTimeout(()=>{this[a18_0x1c6b('0x9')]='closed';this[a18_0x1c6b('0x5b')]();},0x1388);}}[a18_0x1c6b('0x39')](_0x39a9ae,_0x3b9b1a){if(_0x3b9b1a){console[a18_0x1c6b('0xe')](_0x3b9b1a['stack']);}this[a18_0x1c6b('0x32')][a18_0x1c6b('0x23')]('player/connected','false');}[a18_0x1c6b('0x62')](_0x3aa02c,_0x3273b9,_0x327167){const _0x24bcb4={'iat':Math[a18_0x1c6b('0x1b')](Date[a18_0x1c6b('0x63')]()/0x3e8),'exp':Math['round'](Date[a18_0x1c6b('0x63')]()/0x3e8)+0x14*0x3c,'aud':_0x3aa02c};const _0x51d185=fs[a18_0x1c6b('0x64')](_0x3273b9);return jwt[a18_0x1c6b('0x65')](_0x24bcb4,_0x51d185,{'algorithm':_0x327167});}}exports[a18_0x1c6b('0x66')]=MqttService;