var a17_0x2d57=['reloadMediaList','shutdown','sendStateUpdate','sending\x20state\x20%s','publish','opening','handleCloseRequest','closed','closing','player/connected','false','MqttService','defineProperty','__esModule','fs-extra','request','request-progress','child_process','spawn','is-image','string-template','mqtt','uuid/v4','state','syncPlaylistsService','init','mqttInit','log','clientId','run.lulo_2018#.','mqttClient','connect','mqtt://lulo.run','mqttClient_connect','bind','mqttClient_message','handleAppExit','SIGINT','uncaughtException','subscribe','player/open','player/close','player/reboot','player/reload_playlist','player/update','registerClient','stringify','reportStatus','received\x20message\x20%s\x20%s','handleOpenRequest','handleRebootRequest','handleReloadPlaylistRequest','handleLoadPlaylistRequest','handleUpdateRequest','all','simple-git','Git\x20updating','pull','Git\x20updated','summary','changes','now','loadMediaList','playerId'];(function(_0x3dfd2b,_0x4ec390){var _0x588020=function(_0x3351d8){while(--_0x3351d8){_0x3dfd2b['push'](_0x3dfd2b['shift']());}};_0x588020(++_0x4ec390);}(a17_0x2d57,0x18c));var a17_0x3216=function(_0x3e1ed4,_0x3d1868){_0x3e1ed4=_0x3e1ed4-0x0;var _0x2784e1=a17_0x2d57[_0x3e1ed4];return _0x2784e1;};'use strict';Object[a17_0x3216('0x0')](exports,a17_0x3216('0x1'),{'value':!![]});const fs=require('fs');const fsExtra=require(a17_0x3216('0x2'));const request=require(a17_0x3216('0x3'));const progress=require(a17_0x3216('0x4'));const spawn=require(a17_0x3216('0x5'))[a17_0x3216('0x6')];const isImage=require(a17_0x3216('0x7'));const format=require(a17_0x3216('0x8'));const os=require('os');const mqtt=require(a17_0x3216('0x9'));const uuidv4=require(a17_0x3216('0xa'));class MqttService{constructor(_0x3f8a0a){this[a17_0x3216('0xb')]='closed';this[a17_0x3216('0xc')]=_0x3f8a0a;}[a17_0x3216('0xd')](){this['mqttInit']();}[a17_0x3216('0xe')](){console[a17_0x3216('0xf')](a17_0x3216('0xe'));this['clientId']=uuidv4();const _0x4e444d={'clientId':this[a17_0x3216('0x10')],'username':'lulo_mqtt','password':a17_0x3216('0x11'),'clean':!![]};this[a17_0x3216('0x12')]=mqtt[a17_0x3216('0x13')](a17_0x3216('0x14'),_0x4e444d);this[a17_0x3216('0x12')]['on'](a17_0x3216('0x13'),this[a17_0x3216('0x15')][a17_0x3216('0x16')](this));this[a17_0x3216('0x12')]['on']('message',this[a17_0x3216('0x17')][a17_0x3216('0x16')](this));process['on']('exit',this[a17_0x3216('0x18')][a17_0x3216('0x16')](this));process['on'](a17_0x3216('0x19'),this[a17_0x3216('0x18')]['bind'](this));process['on'](a17_0x3216('0x1a'),this[a17_0x3216('0x18')]['bind'](this));}[a17_0x3216('0x15')](){console[a17_0x3216('0xf')]('Connected\x20to\x20broker\x20client:'+this[a17_0x3216('0x10')]);this[a17_0x3216('0x12')][a17_0x3216('0x1b')](a17_0x3216('0x1c'));this[a17_0x3216('0x12')][a17_0x3216('0x1b')](a17_0x3216('0x1d'));this[a17_0x3216('0x12')][a17_0x3216('0x1b')](a17_0x3216('0x1e'),{'qos':0x2});this[a17_0x3216('0x12')][a17_0x3216('0x1b')]('player/load_playlist',{'qos':0x2});this[a17_0x3216('0x12')][a17_0x3216('0x1b')](a17_0x3216('0x1f'),{'qos':0x2});this[a17_0x3216('0x12')][a17_0x3216('0x1b')](a17_0x3216('0x20'),{'qos':0x2});this['registerClient']();}[a17_0x3216('0x21')](){const _0x5a2d5c={'playerId':this[a17_0x3216('0xc')]['playerId'],'clientId':this['clientId'],'connected':!![],'network':JSON[a17_0x3216('0x22')](os['networkInterfaces']())};console[a17_0x3216('0xf')](_0x5a2d5c);}[a17_0x3216('0x23')](){}[a17_0x3216('0x17')](_0x3c2665,_0x21d035){console['log'](a17_0x3216('0x24'),_0x3c2665,_0x21d035);switch(_0x3c2665){case a17_0x3216('0x1c'):return this[a17_0x3216('0x25')](_0x21d035);case a17_0x3216('0x1d'):return this['handleCloseRequest'](_0x21d035);case a17_0x3216('0x1e'):return this[a17_0x3216('0x26')](_0x21d035);case a17_0x3216('0x1f'):return this[a17_0x3216('0x27')](_0x21d035);case'player/load_playlist':return this[a17_0x3216('0x28')](_0x21d035);case a17_0x3216('0x20'):return this[a17_0x3216('0x29')](_0x21d035);}}[a17_0x3216('0x29')](_0x5d93a9){if(_0x5d93a9==a17_0x3216('0x2a')||_0x5d93a9==String(this[a17_0x3216('0xc')]['playerId'])){const _0x23d1ba=__dirname;const _0x51dbf8=require(a17_0x3216('0x2b'))(_0x23d1ba);console['log'](a17_0x3216('0x2c'));_0x51dbf8[a17_0x3216('0x2d')]((_0x493de0,_0xf6c928)=>{if(_0x493de0){console[a17_0x3216('0xf')]('Error\x20git\x20updated');this[a17_0x3216('0x29')](_0x5d93a9);return;}else{}console['log'](a17_0x3216('0x2e'));console[a17_0x3216('0xf')](_0xf6c928);if(_0xf6c928&&_0xf6c928[a17_0x3216('0x2f')][a17_0x3216('0x30')]){const _0x334629=spawn('shutdown',['-r',a17_0x3216('0x31')]);}else{}});}}[a17_0x3216('0x28')](_0x119ffc){if(_0x119ffc==a17_0x3216('0x2a')||_0x119ffc==String(this[a17_0x3216('0xc')]['playerId'])){this[a17_0x3216('0xc')][a17_0x3216('0x32')]();}}[a17_0x3216('0x27')](_0x1a6005){if(_0x1a6005==a17_0x3216('0x2a')||_0x1a6005==String(this[a17_0x3216('0xc')][a17_0x3216('0x33')])){this[a17_0x3216('0xc')][a17_0x3216('0x34')]();}}['handleRebootRequest'](_0x597233){if(_0x597233=='all'||_0x597233==String(this[a17_0x3216('0xc')][a17_0x3216('0x33')])){const _0x264127=spawn(a17_0x3216('0x35'),['-r',a17_0x3216('0x31')]);}}[a17_0x3216('0x36')](){console[a17_0x3216('0xf')](a17_0x3216('0x37'),this[a17_0x3216('0xb')]);this[a17_0x3216('0x12')][a17_0x3216('0x38')]('player/state',this['syncPlaylistsService'][a17_0x3216('0x33')]+'-'+this[a17_0x3216('0xb')]);}[a17_0x3216('0x25')](_0x5d3103){if(this['state']!=='open'&&this[a17_0x3216('0xb')]!==a17_0x3216('0x39')){console[a17_0x3216('0xf')]('opening\x20player\x20door');this['state']=a17_0x3216('0x39');this[a17_0x3216('0x36')]();setTimeout(()=>{this['state']='open';this[a17_0x3216('0x36')]();},0x1388);}}[a17_0x3216('0x3a')](_0x8c753){if(this['state']!==a17_0x3216('0x3b')&&this[a17_0x3216('0xb')]!==a17_0x3216('0x3c')){this['state']='closing';this[a17_0x3216('0x36')]();setTimeout(()=>{this[a17_0x3216('0xb')]=a17_0x3216('0x3b');this[a17_0x3216('0x36')]();},0x1388);}}[a17_0x3216('0x18')](_0x1ae57f,_0x276fa6){if(_0x276fa6){console[a17_0x3216('0xf')](_0x276fa6['stack']);}this[a17_0x3216('0x12')][a17_0x3216('0x38')](a17_0x3216('0x3d'),a17_0x3216('0x3e'));}}exports[a17_0x3216('0x3f')]=MqttService;