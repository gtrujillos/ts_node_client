var a18_0x3e5b=['clientId','lulo_mqtt','run.lulo_2018#.','mqttClient','connect','mqtt://lulo.run','mqttClient_connect','message','mqttClient_message','exit','handleAppExit','bind','SIGINT','uncaughtException','subscribe','player/close','player/load_playlist','player/reload_playlist','player/update','reportStatus','received\x20message\x20%s\x20%s','player/open','handleCloseRequest','handleRebootRequest','handleReloadPlaylistRequest','handleLoadPlaylistRequest','handleUpdateRequest','all','syncPlaylistsService','playerId','simple-git','Git\x20updating','pull','Error\x20git\x20updated','Git\x20updated','summary','changes','loadMediaList','reloadMediaList','shutdown','now','sendStateUpdate','sending\x20state\x20%s','publish','player/state','state','open','opening\x20player\x20door','opening','closing','player/connected','false','MqttService','__esModule','./../infrastructure/HttpClientService','request','request-progress','spawn','is-image','string-template','mqtt','uuid/v4','closed','httpClientService','HttpClientService','init','mqttInit','log','this.clientId'];(function(_0x49687e,_0x5d17ee){var _0x10c73c=function(_0x28ecd9){while(--_0x28ecd9){_0x49687e['push'](_0x49687e['shift']());}};_0x10c73c(++_0x5d17ee);}(a18_0x3e5b,0x7a));var a18_0x28f7=function(_0xb67384,_0x27295a){_0xb67384=_0xb67384-0x0;var _0x156d7c=a18_0x3e5b[_0xb67384];return _0x156d7c;};'use strict';Object['defineProperty'](exports,a18_0x28f7('0x0'),{'value':!![]});const HttpClientService_1=require(a18_0x28f7('0x1'));const fs=require('fs');const fsExtra=require('fs-extra');const request=require(a18_0x28f7('0x2'));const progress=require(a18_0x28f7('0x3'));const spawn=require('child_process')[a18_0x28f7('0x4')];const isImage=require(a18_0x28f7('0x5'));const format=require(a18_0x28f7('0x6'));const os=require('os');const mqtt=require(a18_0x28f7('0x7'));const uuidv4=require(a18_0x28f7('0x8'));class MqttService{constructor(_0x173a1f){this['syncPlaylistsService']=_0x173a1f;this['state']=a18_0x28f7('0x9');this[a18_0x28f7('0xa')]=new HttpClientService_1[(a18_0x28f7('0xb'))]();}[a18_0x28f7('0xc')](){this[a18_0x28f7('0xd')]();}['mqttInit'](){console[a18_0x28f7('0xe')]('mqttInit');this['clientId']=uuidv4();console[a18_0x28f7('0xe')](a18_0x28f7('0xf'));console[a18_0x28f7('0xe')](this['clientId']);const _0x1d3fb6={'clientId':this[a18_0x28f7('0x10')],'username':a18_0x28f7('0x11'),'password':a18_0x28f7('0x12'),'clean':!![]};this[a18_0x28f7('0x13')]=mqtt[a18_0x28f7('0x14')](a18_0x28f7('0x15'),_0x1d3fb6);this[a18_0x28f7('0x13')]['on']('connect',this[a18_0x28f7('0x16')]['bind'](this));this[a18_0x28f7('0x13')]['on'](a18_0x28f7('0x17'),this[a18_0x28f7('0x18')]['bind'](this));process['on'](a18_0x28f7('0x19'),this[a18_0x28f7('0x1a')][a18_0x28f7('0x1b')](this));process['on'](a18_0x28f7('0x1c'),this[a18_0x28f7('0x1a')]['bind'](this));process['on'](a18_0x28f7('0x1d'),this['handleAppExit'][a18_0x28f7('0x1b')](this));}[a18_0x28f7('0x16')](){console[a18_0x28f7('0xe')]('Connected\x20to\x20broker\x20client:'+this[a18_0x28f7('0x10')]);this[a18_0x28f7('0x13')][a18_0x28f7('0x1e')]('player/open');this[a18_0x28f7('0x13')][a18_0x28f7('0x1e')](a18_0x28f7('0x1f'));this[a18_0x28f7('0x13')][a18_0x28f7('0x1e')]('player/reboot',{'qos':0x2});this[a18_0x28f7('0x13')][a18_0x28f7('0x1e')](a18_0x28f7('0x20'),{'qos':0x2});this[a18_0x28f7('0x13')][a18_0x28f7('0x1e')](a18_0x28f7('0x21'),{'qos':0x2});this[a18_0x28f7('0x13')][a18_0x28f7('0x1e')](a18_0x28f7('0x22'),{'qos':0x2});}[a18_0x28f7('0x23')](){}[a18_0x28f7('0x18')](_0x3849f6,_0x196f46){console['log'](a18_0x28f7('0x24'),_0x3849f6,_0x196f46);switch(_0x3849f6){case a18_0x28f7('0x25'):return this['handleOpenRequest'](_0x196f46);case a18_0x28f7('0x1f'):return this[a18_0x28f7('0x26')](_0x196f46);case'player/reboot':return this[a18_0x28f7('0x27')](_0x196f46);case'player/reload_playlist':return this[a18_0x28f7('0x28')](_0x196f46);case'player/load_playlist':return this[a18_0x28f7('0x29')](_0x196f46);case'player/update':return this[a18_0x28f7('0x2a')](_0x196f46);}}[a18_0x28f7('0x2a')](_0x57b2d1){if(_0x57b2d1==a18_0x28f7('0x2b')||_0x57b2d1==String(this[a18_0x28f7('0x2c')][a18_0x28f7('0x2d')])){const _0x381da9=__dirname;const _0x3a9671=require(a18_0x28f7('0x2e'))(_0x381da9);console[a18_0x28f7('0xe')](a18_0x28f7('0x2f'));_0x3a9671[a18_0x28f7('0x30')]((_0x2e69e7,_0x51e6a8)=>{if(_0x2e69e7){console[a18_0x28f7('0xe')](a18_0x28f7('0x31'));this[a18_0x28f7('0x2a')](_0x57b2d1);return;}else{}console['log'](a18_0x28f7('0x32'));console['log'](_0x51e6a8);if(_0x51e6a8&&_0x51e6a8[a18_0x28f7('0x33')][a18_0x28f7('0x34')]){const _0x3def50=spawn('shutdown',['-r','now']);}else{}});}}[a18_0x28f7('0x29')](_0x54d23a){if(_0x54d23a==a18_0x28f7('0x2b')||_0x54d23a==String(this['syncPlaylistsService'][a18_0x28f7('0x2d')])){this[a18_0x28f7('0x2c')][a18_0x28f7('0x35')]();}}['handleReloadPlaylistRequest'](_0x3f2258){if(_0x3f2258==a18_0x28f7('0x2b')||_0x3f2258==String(this[a18_0x28f7('0x2c')][a18_0x28f7('0x2d')])){this['syncPlaylistsService'][a18_0x28f7('0x36')]();}}['handleRebootRequest'](_0x40b67b){if(_0x40b67b==a18_0x28f7('0x2b')||_0x40b67b==String(this[a18_0x28f7('0x2c')][a18_0x28f7('0x2d')])){const _0x12db94=spawn(a18_0x28f7('0x37'),['-r',a18_0x28f7('0x38')]);}}[a18_0x28f7('0x39')](){console[a18_0x28f7('0xe')](a18_0x28f7('0x3a'),this['state']);this['mqttClient'][a18_0x28f7('0x3b')](a18_0x28f7('0x3c'),this[a18_0x28f7('0x2c')][a18_0x28f7('0x2d')]+'-'+this[a18_0x28f7('0x3d')]);}['handleOpenRequest'](_0x396e31){if(this[a18_0x28f7('0x3d')]!==a18_0x28f7('0x3e')&&this['state']!=='opening'){console[a18_0x28f7('0xe')](a18_0x28f7('0x3f'));this[a18_0x28f7('0x3d')]=a18_0x28f7('0x40');this[a18_0x28f7('0x39')]();setTimeout(()=>{this[a18_0x28f7('0x3d')]=a18_0x28f7('0x3e');this[a18_0x28f7('0x39')]();},0x1388);}}[a18_0x28f7('0x26')](_0xa606b9){if(this['state']!==a18_0x28f7('0x9')&&this[a18_0x28f7('0x3d')]!=='closing'){this[a18_0x28f7('0x3d')]=a18_0x28f7('0x41');this[a18_0x28f7('0x39')]();setTimeout(()=>{this[a18_0x28f7('0x3d')]='closed';this['sendStateUpdate']();},0x1388);}}['handleAppExit'](_0xeeb2bf,_0x50a8b4){if(_0x50a8b4){console[a18_0x28f7('0xe')](_0x50a8b4['stack']);}this[a18_0x28f7('0x13')][a18_0x28f7('0x3b')](a18_0x28f7('0x42'),a18_0x28f7('0x43'));}}exports[a18_0x28f7('0x44')]=MqttService;