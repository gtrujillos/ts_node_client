var a18_0x2be0=['changes','now','loadMediaList','handleReloadPlaylistRequest','shutdown','sendStateUpdate','publish','open','opening','opening\x20player\x20door','closing','stack','player/connected','false','./../infrastructure/HttpClientService','fs-extra','request','request-progress','child_process','is-image','string-template','mqtt','uuid/v4','state','closed','httpClientService','HttpClientService','init','mqttInit','log','this.clientId','clientId','run.lulo_2018#.','connect','mqttClient','bind','message','exit','handleAppExit','uncaughtException','mqttClient_connect','Connected\x20to\x20broker\x20client:','subscribe','player/open','player/close','player/reboot','player/load_playlist','player/reload_playlist','player/register','reportStatus','mqttClient_message','received\x20message\x20%s\x20%s','handleOpenRequest','handleCloseRequest','handleRebootRequest','handleLoadPlaylistRequest','player/update','handleUpdateRequest','player/ifconfig','handleIfconfigRequest','handleRegisterRequest','syncPlaylistsService','registerClient','all','playerId','handleUpdateRequest:\x20','simple-git','Git\x20updating','pull','Error\x20git\x20updated','Git\x20updated'];(function(_0x27fcd9,_0x3ce9dc){var _0x2735ea=function(_0x577a6a){while(--_0x577a6a){_0x27fcd9['push'](_0x27fcd9['shift']());}};_0x2735ea(++_0x3ce9dc);}(a18_0x2be0,0x1b8));var a18_0x5e86=function(_0x57124d,_0x1755b1){_0x57124d=_0x57124d-0x0;var _0x633ae3=a18_0x2be0[_0x57124d];return _0x633ae3;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const HttpClientService_1=require(a18_0x5e86('0x0'));const fs=require('fs');const fsExtra=require(a18_0x5e86('0x1'));const request=require(a18_0x5e86('0x2'));const progress=require(a18_0x5e86('0x3'));const spawn=require(a18_0x5e86('0x4'))['spawn'];const isImage=require(a18_0x5e86('0x5'));const format=require(a18_0x5e86('0x6'));const os=require('os');const mqtt=require(a18_0x5e86('0x7'));const uuidv4=require(a18_0x5e86('0x8'));class MqttService{constructor(_0x4d9bf8){this['syncPlaylistsService']=_0x4d9bf8;this[a18_0x5e86('0x9')]=a18_0x5e86('0xa');this[a18_0x5e86('0xb')]=new HttpClientService_1[(a18_0x5e86('0xc'))]();}[a18_0x5e86('0xd')](){this[a18_0x5e86('0xe')]();}['mqttInit'](){console[a18_0x5e86('0xf')](a18_0x5e86('0xe'));this['clientId']=uuidv4();console[a18_0x5e86('0xf')](a18_0x5e86('0x10'));console[a18_0x5e86('0xf')](this[a18_0x5e86('0x11')]);const _0xe62d83={'clientId':this[a18_0x5e86('0x11')],'username':'lulo_mqtt','password':a18_0x5e86('0x12'),'clean':!![]};this['mqttClient']=mqtt[a18_0x5e86('0x13')]('mqtt://lulo.run',_0xe62d83);this[a18_0x5e86('0x14')]['on'](a18_0x5e86('0x13'),this['mqttClient_connect'][a18_0x5e86('0x15')](this));this[a18_0x5e86('0x14')]['on'](a18_0x5e86('0x16'),this['mqttClient_message']['bind'](this));process['on'](a18_0x5e86('0x17'),this[a18_0x5e86('0x18')]['bind'](this));process['on']('SIGINT',this[a18_0x5e86('0x18')][a18_0x5e86('0x15')](this));process['on'](a18_0x5e86('0x19'),this[a18_0x5e86('0x18')][a18_0x5e86('0x15')](this));}[a18_0x5e86('0x1a')](){console[a18_0x5e86('0xf')](a18_0x5e86('0x1b')+this['clientId']);this[a18_0x5e86('0x14')][a18_0x5e86('0x1c')](a18_0x5e86('0x1d'));this[a18_0x5e86('0x14')][a18_0x5e86('0x1c')](a18_0x5e86('0x1e'));this[a18_0x5e86('0x14')][a18_0x5e86('0x1c')](a18_0x5e86('0x1f'),{'qos':0x2});this[a18_0x5e86('0x14')][a18_0x5e86('0x1c')](a18_0x5e86('0x20'),{'qos':0x2});this[a18_0x5e86('0x14')]['subscribe'](a18_0x5e86('0x21'),{'qos':0x2});this[a18_0x5e86('0x14')][a18_0x5e86('0x1c')]('player/update',{'qos':0x2});this[a18_0x5e86('0x14')]['subscribe']('player/ifconfig',{'qos':0x2});this[a18_0x5e86('0x14')][a18_0x5e86('0x1c')](a18_0x5e86('0x22'),{'qos':0x2});}[a18_0x5e86('0x23')](){}[a18_0x5e86('0x24')](_0x2394e2,_0x30c996){console[a18_0x5e86('0xf')](a18_0x5e86('0x25'),_0x2394e2,_0x30c996);switch(_0x2394e2){case a18_0x5e86('0x1d'):return this[a18_0x5e86('0x26')](_0x30c996);case a18_0x5e86('0x1e'):return this[a18_0x5e86('0x27')](_0x30c996);case a18_0x5e86('0x1f'):return this[a18_0x5e86('0x28')](_0x30c996);case a18_0x5e86('0x21'):return this['handleReloadPlaylistRequest'](_0x30c996);case a18_0x5e86('0x20'):return this[a18_0x5e86('0x29')](_0x30c996);case a18_0x5e86('0x2a'):return this[a18_0x5e86('0x2b')](_0x30c996);case a18_0x5e86('0x2c'):return this[a18_0x5e86('0x2d')](_0x30c996);case a18_0x5e86('0x22'):return this[a18_0x5e86('0x2e')](_0x30c996);}}[a18_0x5e86('0x2e')](_0x90a270){if(_0x90a270=='all'||_0x90a270==String(this['syncPlaylistsService']['playerId'])){this[a18_0x5e86('0x2f')][a18_0x5e86('0x30')]();}}[a18_0x5e86('0x2d')](_0x3ddd47){if(_0x3ddd47==a18_0x5e86('0x31')||_0x3ddd47==String(this[a18_0x5e86('0x2f')][a18_0x5e86('0x32')])){}}[a18_0x5e86('0x2b')](_0xbaaef7){console[a18_0x5e86('0xf')](a18_0x5e86('0x33')+_0xbaaef7);if(_0xbaaef7==a18_0x5e86('0x31')||_0xbaaef7==String(this[a18_0x5e86('0x2f')][a18_0x5e86('0x32')])){const _0x2f724a=__dirname;const _0x3342a1=require(a18_0x5e86('0x34'))(_0x2f724a);console[a18_0x5e86('0xf')](a18_0x5e86('0x35'));_0x3342a1[a18_0x5e86('0x36')]((_0x5a2a8e,_0x3fb64b)=>{if(_0x5a2a8e){console['log'](a18_0x5e86('0x37'));this[a18_0x5e86('0x2b')](_0xbaaef7);return;}else{}console[a18_0x5e86('0xf')](a18_0x5e86('0x38'));console[a18_0x5e86('0xf')](_0x3fb64b);if(_0x3fb64b&&_0x3fb64b['summary'][a18_0x5e86('0x39')]){const _0x3a7299=spawn('shutdown',['-r',a18_0x5e86('0x3a')]);}else{}});}}[a18_0x5e86('0x29')](_0x149ea3){if(_0x149ea3=='all'||_0x149ea3==String(this['syncPlaylistsService']['playerId'])){this['syncPlaylistsService'][a18_0x5e86('0x3b')]();}}[a18_0x5e86('0x3c')](_0x21e3ca){if(String(_0x21e3ca)==a18_0x5e86('0x31')||String(_0x21e3ca)==String(this[a18_0x5e86('0x2f')][a18_0x5e86('0x32')])){this[a18_0x5e86('0x2f')]['reloadMediaList']();}}['handleRebootRequest'](_0x2c78f0){if(_0x2c78f0==a18_0x5e86('0x31')||_0x2c78f0==String(this[a18_0x5e86('0x2f')][a18_0x5e86('0x32')])){const _0x5bb149=spawn(a18_0x5e86('0x3d'),['-r','now']);}}[a18_0x5e86('0x3e')](){console['log']('sending\x20state\x20%s',this['state']);this['mqttClient'][a18_0x5e86('0x3f')]('player/state',this[a18_0x5e86('0x2f')][a18_0x5e86('0x32')]+'-'+this[a18_0x5e86('0x9')]);}[a18_0x5e86('0x26')](_0x5319eb){if(this[a18_0x5e86('0x9')]!==a18_0x5e86('0x40')&&this[a18_0x5e86('0x9')]!==a18_0x5e86('0x41')){console[a18_0x5e86('0xf')](a18_0x5e86('0x42'));this[a18_0x5e86('0x9')]=a18_0x5e86('0x41');this[a18_0x5e86('0x3e')]();setTimeout(()=>{this[a18_0x5e86('0x9')]=a18_0x5e86('0x40');this[a18_0x5e86('0x3e')]();},0x1388);}}['handleCloseRequest'](_0x5532f6){if(this['state']!==a18_0x5e86('0xa')&&this[a18_0x5e86('0x9')]!=='closing'){this['state']=a18_0x5e86('0x43');this[a18_0x5e86('0x3e')]();setTimeout(()=>{this[a18_0x5e86('0x9')]=a18_0x5e86('0xa');this[a18_0x5e86('0x3e')]();},0x1388);}}[a18_0x5e86('0x18')](_0x2be314,_0xe6737){if(_0xe6737){console[a18_0x5e86('0xf')](_0xe6737[a18_0x5e86('0x44')]);}this[a18_0x5e86('0x14')][a18_0x5e86('0x3f')](a18_0x5e86('0x45'),a18_0x5e86('0x46'));}}exports['MqttService']=MqttService;