var a18_0xcc59=['exit','handleAppExit','SIGINT','uncaughtException','mqttClient','player/open','player/close','player/reboot','subscribe','player/reload_playlist','player/update','player/register','reportStatus','received\x20message\x20%s\x20%s','handleOpenRequest','handleCloseRequest','handleRebootRequest','handleReloadPlaylistRequest','player/load_playlist','handleLoadPlaylistRequest','handleUpdateRequest','player/ifconfig','handleIfconfigRequest','handleRegisterRequest','all','syncPlaylistsService','playerId','registerClient','simple-git','Git\x20updating','Error\x20git\x20updated','Git\x20updated','summary','changes','now','reloadMediaList','sendStateUpdate','sending\x20state\x20%s','state','publish','player/state','open','opening','opening\x20player\x20door','closing','player/connected','false','MqttService','defineProperty','fs-extra','request','child_process','spawn','is-image','mqtt','uuid/v4','closed','httpClientService','init','mqttInit','log','clientId','this.clientId','lulo_mqtt','run.lulo_2018#.','connect','mqtt://lulo.run','mqttClient_connect','bind','message','mqttClient_message'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a18_0xcc59,0x77));var a18_0x482c=function(_0x7d5ed4,_0x1e9f08){_0x7d5ed4=_0x7d5ed4-0x0;var _0x102816=a18_0xcc59[_0x7d5ed4];return _0x102816;};'use strict';Object[a18_0x482c('0x0')](exports,'__esModule',{'value':!![]});const HttpClientService_1=require('./../infrastructure/HttpClientService');const fs=require('fs');const fsExtra=require(a18_0x482c('0x1'));const request=require(a18_0x482c('0x2'));const progress=require('request-progress');const spawn=require(a18_0x482c('0x3'))[a18_0x482c('0x4')];const isImage=require(a18_0x482c('0x5'));const format=require('string-template');const os=require('os');const mqtt=require(a18_0x482c('0x6'));const uuidv4=require(a18_0x482c('0x7'));class MqttService{constructor(_0x21ac00){this['syncPlaylistsService']=_0x21ac00;this['state']=a18_0x482c('0x8');this[a18_0x482c('0x9')]=new HttpClientService_1['HttpClientService']();}[a18_0x482c('0xa')](){this[a18_0x482c('0xb')]();}[a18_0x482c('0xb')](){console[a18_0x482c('0xc')](a18_0x482c('0xb'));this[a18_0x482c('0xd')]=uuidv4();console[a18_0x482c('0xc')](a18_0x482c('0xe'));console['log'](this[a18_0x482c('0xd')]);const _0x34a4bb={'clientId':this[a18_0x482c('0xd')],'username':a18_0x482c('0xf'),'password':a18_0x482c('0x10'),'clean':!![]};this['mqttClient']=mqtt[a18_0x482c('0x11')](a18_0x482c('0x12'),_0x34a4bb);this['mqttClient']['on'](a18_0x482c('0x11'),this[a18_0x482c('0x13')][a18_0x482c('0x14')](this));this['mqttClient']['on'](a18_0x482c('0x15'),this[a18_0x482c('0x16')][a18_0x482c('0x14')](this));process['on'](a18_0x482c('0x17'),this[a18_0x482c('0x18')][a18_0x482c('0x14')](this));process['on'](a18_0x482c('0x19'),this[a18_0x482c('0x18')][a18_0x482c('0x14')](this));process['on'](a18_0x482c('0x1a'),this[a18_0x482c('0x18')]['bind'](this));}['mqttClient_connect'](){console['log']('Connected\x20to\x20broker\x20client:'+this[a18_0x482c('0xd')]);this[a18_0x482c('0x1b')]['subscribe'](a18_0x482c('0x1c'));this[a18_0x482c('0x1b')]['subscribe'](a18_0x482c('0x1d'));this['mqttClient']['subscribe'](a18_0x482c('0x1e'),{'qos':0x2});this[a18_0x482c('0x1b')][a18_0x482c('0x1f')]('player/load_playlist',{'qos':0x2});this[a18_0x482c('0x1b')][a18_0x482c('0x1f')](a18_0x482c('0x20'),{'qos':0x2});this[a18_0x482c('0x1b')][a18_0x482c('0x1f')](a18_0x482c('0x21'),{'qos':0x2});this[a18_0x482c('0x1b')]['subscribe']('player/ifconfig',{'qos':0x2});this[a18_0x482c('0x1b')][a18_0x482c('0x1f')](a18_0x482c('0x22'),{'qos':0x2});}[a18_0x482c('0x23')](){}[a18_0x482c('0x16')](_0x23d065,_0x43a03d){console[a18_0x482c('0xc')](a18_0x482c('0x24'),_0x23d065,_0x43a03d);switch(_0x23d065){case'player/open':return this[a18_0x482c('0x25')](_0x43a03d);case a18_0x482c('0x1d'):return this[a18_0x482c('0x26')](_0x43a03d);case a18_0x482c('0x1e'):return this[a18_0x482c('0x27')](_0x43a03d);case a18_0x482c('0x20'):return this[a18_0x482c('0x28')](_0x43a03d);case a18_0x482c('0x29'):return this[a18_0x482c('0x2a')](_0x43a03d);case'player/update':return this[a18_0x482c('0x2b')](_0x43a03d);case a18_0x482c('0x2c'):return this[a18_0x482c('0x2d')](_0x43a03d);case a18_0x482c('0x22'):return this[a18_0x482c('0x2e')](_0x43a03d);}}[a18_0x482c('0x2e')](_0x1218a4){if(_0x1218a4==a18_0x482c('0x2f')||_0x1218a4==String(this[a18_0x482c('0x30')][a18_0x482c('0x31')])){this[a18_0x482c('0x30')][a18_0x482c('0x32')]();}}['handleIfconfigRequest'](_0x37fe4b){if(_0x37fe4b=='all'||_0x37fe4b==String(this[a18_0x482c('0x30')][a18_0x482c('0x31')])){}}[a18_0x482c('0x2b')](_0x3dc3cd){if(_0x3dc3cd==a18_0x482c('0x2f')||_0x3dc3cd==String(this['syncPlaylistsService']['playerId'])){const _0x5d5baa=__dirname;const _0x4933d1=require(a18_0x482c('0x33'))(_0x5d5baa);console[a18_0x482c('0xc')](a18_0x482c('0x34'));_0x4933d1['pull']((_0x41d16e,_0x174f17)=>{if(_0x41d16e){console[a18_0x482c('0xc')](a18_0x482c('0x35'));this['handleUpdateRequest'](_0x3dc3cd);return;}else{}console['log'](a18_0x482c('0x36'));console[a18_0x482c('0xc')](_0x174f17);if(_0x174f17&&_0x174f17[a18_0x482c('0x37')][a18_0x482c('0x38')]){const _0x23c3c7=spawn('shutdown',['-r',a18_0x482c('0x39')]);}else{}});}}[a18_0x482c('0x2a')](_0x6877b7){if(_0x6877b7==a18_0x482c('0x2f')||_0x6877b7==String(this[a18_0x482c('0x30')]['playerId'])){this[a18_0x482c('0x30')]['loadMediaList']();}}['handleReloadPlaylistRequest'](_0x42e8f5){if(String(_0x42e8f5)==a18_0x482c('0x2f')||String(_0x42e8f5)==String(this[a18_0x482c('0x30')][a18_0x482c('0x31')])){this[a18_0x482c('0x30')][a18_0x482c('0x3a')]();}}[a18_0x482c('0x27')](_0xbfb276){if(_0xbfb276==a18_0x482c('0x2f')||_0xbfb276==String(this[a18_0x482c('0x30')][a18_0x482c('0x31')])){const _0x5ca2be=spawn('shutdown',['-r','now']);}}[a18_0x482c('0x3b')](){console[a18_0x482c('0xc')](a18_0x482c('0x3c'),this[a18_0x482c('0x3d')]);this['mqttClient'][a18_0x482c('0x3e')](a18_0x482c('0x3f'),this[a18_0x482c('0x30')][a18_0x482c('0x31')]+'-'+this[a18_0x482c('0x3d')]);}['handleOpenRequest'](_0x134060){if(this[a18_0x482c('0x3d')]!==a18_0x482c('0x40')&&this[a18_0x482c('0x3d')]!==a18_0x482c('0x41')){console['log'](a18_0x482c('0x42'));this[a18_0x482c('0x3d')]='opening';this[a18_0x482c('0x3b')]();setTimeout(()=>{this[a18_0x482c('0x3d')]=a18_0x482c('0x40');this['sendStateUpdate']();},0x1388);}}[a18_0x482c('0x26')](_0x2ffdee){if(this[a18_0x482c('0x3d')]!==a18_0x482c('0x8')&&this[a18_0x482c('0x3d')]!==a18_0x482c('0x43')){this[a18_0x482c('0x3d')]=a18_0x482c('0x43');this[a18_0x482c('0x3b')]();setTimeout(()=>{this[a18_0x482c('0x3d')]='closed';this['sendStateUpdate']();},0x1388);}}[a18_0x482c('0x18')](_0x358efd,_0xa34b76){if(_0xa34b76){console['log'](_0xa34b76['stack']);}this[a18_0x482c('0x1b')][a18_0x482c('0x3e')](a18_0x482c('0x44'),a18_0x482c('0x45'));}}exports[a18_0x482c('0x46')]=MqttService;