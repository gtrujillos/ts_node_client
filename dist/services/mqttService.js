var a18_0xf01d=['/locations/','/registries/','/devices/','unused','mqtts','round','/config','/state','/commands/#','connect','Client\x20not\x20connected...','/projects/velvety-glazing-252020/topics/my-topic','-payload-0','publish','close','error','message','Message\x20received:\x20','Config\x20message\x20received:\x20','startsWith','Command\x20message\x20received:\x20','from','base64','toString','ascii','packetsend','mqttInit_mosquitto','this.clientId','clientId','lulo_mqtt','run.lulo_2018#.','mqttClient','mqtt://lulo.run','mqttClient_connect','bind','mqttClient_message','exit','handleAppExit','uncaughtException','subscribe','player/open','player/close','player/load_playlist','player/reload_playlist','player/update','player/ifconfig','player/register','handleRebootRequest','handleReloadPlaylistRequest','handleLoadPlaylistRequest','handleUpdateRequest','handleIfconfigRequest','handleRegisterRequest','all','playerId','handleUpdateRequest:\x20','pull','Git\x20updated','summary','changes','reboot','loadMediaList','handleRebootRequest\x20shutdown\x20-r\x20now:\x20','sending\x20state\x20%s','player/state','handleOpenRequest','open','opening','opening\x20player\x20door','sendStateUpdate','handleCloseRequest','closing','createJwt','now','sign','defineProperty','request','spawn','child_process','exec','string-template','uuid/v4','syncPlaylistsService','state','closed','httpClientService','HttpClientService','init','log','mqttInit','my-node-device','my-registry','resources/keys/rsa_private.pem','mqtt.googleapis.com','projects/'];(function(_0x5eed05,_0x34cbe7){var _0x2f88d8=function(_0x5b902c){while(--_0x5b902c){_0x5eed05['push'](_0x5eed05['shift']());}};_0x2f88d8(++_0x34cbe7);}(a18_0xf01d,0xaa));var a18_0x1736=function(_0x86b312,_0x51a31e){_0x86b312=_0x86b312-0x0;var _0x3c8546=a18_0xf01d[_0x86b312];return _0x3c8546;};'use strict';Object[a18_0x1736('0x0')](exports,'__esModule',{'value':!![]});const HttpClientService_1=require('./../infrastructure/HttpClientService');const fs=require('fs');const fsExtra=require('fs-extra');const request=require(a18_0x1736('0x1'));const progress=require('request-progress');const spawn=require('child_process')[a18_0x1736('0x2')];const exec=require(a18_0x1736('0x3'))[a18_0x1736('0x4')];const isImage=require('is-image');const format=require(a18_0x1736('0x5'));const os=require('os');const mqtt=require('mqtt');const uuidv4=require(a18_0x1736('0x6'));const jwt=require('jsonwebtoken');class MqttService{constructor(_0x372600){this[a18_0x1736('0x7')]=_0x372600;this[a18_0x1736('0x8')]=a18_0x1736('0x9');this[a18_0x1736('0xa')]=new HttpClientService_1[(a18_0x1736('0xb'))]();}[a18_0x1736('0xc')](){this['mqttInit_mosquitto']();}['mqttInit_google'](){console[a18_0x1736('0xd')](a18_0x1736('0xe'));const _0x568eee='velvety-glazing-252020';const _0x5eb5be=a18_0x1736('0xf');const _0x2f98c9=a18_0x1736('0x10');const _0x3bb26c='us-central1';const _0x3a9e4e='RS256';const _0x35391d=a18_0x1736('0x11');const _0x4309b6=a18_0x1736('0x12');const _0x5bbf7c=0x1bb;const _0x342fb2='events';const _0x1f4e60=0x5;const _0xb25e56=a18_0x1736('0x13')+_0x568eee+a18_0x1736('0x14')+_0x3bb26c+a18_0x1736('0x15')+_0x2f98c9+a18_0x1736('0x16')+_0x5eb5be;const _0x5916af={'host':_0x4309b6,'port':_0x5bbf7c,'clientId':_0xb25e56,'username':a18_0x1736('0x17'),'password':this['createJwt'](_0x568eee,_0x35391d,_0x3a9e4e),'protocol':a18_0x1736('0x18'),'secureProtocol':'TLSv1_2_method'};const _0x2086e3=Math[a18_0x1736('0x19')](Date['now']()/0x3e8);const _0x4f5592=mqtt['connect'](_0x5916af);_0x4f5592['subscribe']('/devices/'+_0x5eb5be+a18_0x1736('0x1a'),{'qos':0x1});_0x4f5592['subscribe']('/devices/'+_0x5eb5be+a18_0x1736('0x1b'),{'qos':0x1});_0x4f5592['subscribe'](a18_0x1736('0x16')+_0x5eb5be+a18_0x1736('0x1c'),{'qos':0x0});const _0x89c944=a18_0x1736('0x16')+_0x5eb5be+'/'+_0x342fb2;_0x4f5592['on'](a18_0x1736('0x1d'),_0x3b50c2=>{console[a18_0x1736('0xd')](a18_0x1736('0x1d'));if(!_0x3b50c2){console['log'](a18_0x1736('0x1e'));}else{const _0x89c944=a18_0x1736('0x1f');const _0x3e5167=_0x2f98c9+'/'+_0x5eb5be+a18_0x1736('0x20');_0x4f5592[a18_0x1736('0x21')](_0x89c944,_0x3e5167,{'qos':0x1},_0x2ae812=>{console['log']('publish\x20result:');console[a18_0x1736('0xd')](_0x2ae812);if(!_0x2ae812){}});}});_0x4f5592['on'](a18_0x1736('0x22'),()=>{console['log'](a18_0x1736('0x22'));});_0x4f5592['on'](a18_0x1736('0x23'),_0x48ac3c=>{console['log'](a18_0x1736('0x23'),_0x48ac3c);});_0x4f5592['on'](a18_0x1736('0x24'),(_0x2a4203,_0x2e00da)=>{let _0x289512=a18_0x1736('0x25');console[a18_0x1736('0xd')](_0x2a4203);console[a18_0x1736('0xd')](_0x2e00da+'');if(_0x2a4203===a18_0x1736('0x16')+_0x5eb5be+'/config'){_0x289512=a18_0x1736('0x26');}else if(_0x2a4203[a18_0x1736('0x27')](a18_0x1736('0x16')+_0x5eb5be+'/commands')){_0x289512=a18_0x1736('0x28');}_0x289512+=Buffer[a18_0x1736('0x29')](_0x2e00da,a18_0x1736('0x2a'))[a18_0x1736('0x2b')](a18_0x1736('0x2c'));console[a18_0x1736('0xd')](_0x289512);});_0x4f5592['on'](a18_0x1736('0x2d'),()=>{});console[a18_0x1736('0xd')](_0x5916af);}[a18_0x1736('0x2e')](){console[a18_0x1736('0xd')](a18_0x1736('0xe'));this['clientId']=uuidv4();console[a18_0x1736('0xd')](a18_0x1736('0x2f'));console[a18_0x1736('0xd')](this[a18_0x1736('0x30')]);const _0x477d95={'clientId':this[a18_0x1736('0x30')],'username':a18_0x1736('0x31'),'password':a18_0x1736('0x32'),'clean':!![]};this[a18_0x1736('0x33')]=mqtt[a18_0x1736('0x1d')](a18_0x1736('0x34'),_0x477d95);this[a18_0x1736('0x33')]['on'](a18_0x1736('0x1d'),this[a18_0x1736('0x35')][a18_0x1736('0x36')](this));this['mqttClient']['on']('message',this[a18_0x1736('0x37')][a18_0x1736('0x36')](this));this[a18_0x1736('0x33')]['on']('close',()=>{console['log'](a18_0x1736('0x22'));});process['on'](a18_0x1736('0x38'),this[a18_0x1736('0x39')][a18_0x1736('0x36')](this));process['on']('SIGINT',this['handleAppExit']['bind'](this));process['on'](a18_0x1736('0x3a'),this[a18_0x1736('0x39')][a18_0x1736('0x36')](this));}['mqttClient_connect'](){console[a18_0x1736('0xd')]('Connected\x20to\x20broker\x20client:'+this[a18_0x1736('0x30')]);this[a18_0x1736('0x33')][a18_0x1736('0x3b')](a18_0x1736('0x3c'));this['mqttClient']['subscribe'](a18_0x1736('0x3d'));this[a18_0x1736('0x33')][a18_0x1736('0x3b')]('player/reboot',{'qos':0x2});this[a18_0x1736('0x33')]['subscribe'](a18_0x1736('0x3e'),{'qos':0x2});this['mqttClient'][a18_0x1736('0x3b')](a18_0x1736('0x3f'),{'qos':0x2});this[a18_0x1736('0x33')][a18_0x1736('0x3b')](a18_0x1736('0x40'),{'qos':0x2});this['mqttClient'][a18_0x1736('0x3b')](a18_0x1736('0x41'),{'qos':0x2});this[a18_0x1736('0x33')][a18_0x1736('0x3b')](a18_0x1736('0x42'),{'qos':0x2});}['reportStatus'](){}[a18_0x1736('0x37')](_0x2fac52,_0x34a830){console[a18_0x1736('0xd')]('received\x20message\x20%s\x20%s',_0x2fac52,_0x34a830);switch(_0x2fac52){case'player/open':return this['handleOpenRequest'](_0x34a830);case a18_0x1736('0x3d'):return this['handleCloseRequest'](_0x34a830);case'player/reboot':return this[a18_0x1736('0x43')](_0x34a830);case a18_0x1736('0x3f'):return this[a18_0x1736('0x44')](_0x34a830);case'player/load_playlist':return this[a18_0x1736('0x45')](_0x34a830);case'player/update':return this[a18_0x1736('0x46')](_0x34a830);case'player/ifconfig':return this[a18_0x1736('0x47')](_0x34a830);case a18_0x1736('0x42'):return this[a18_0x1736('0x48')](_0x34a830);}}[a18_0x1736('0x48')](_0x2dbd61){if(_0x2dbd61==a18_0x1736('0x49')||_0x2dbd61==String(this[a18_0x1736('0x7')][a18_0x1736('0x4a')])){this[a18_0x1736('0x7')]['registerClient']();}}[a18_0x1736('0x47')](_0x148903){if(_0x148903==a18_0x1736('0x49')||_0x148903==String(this['syncPlaylistsService'][a18_0x1736('0x4a')])){}}[a18_0x1736('0x46')](_0x1ecebe){console[a18_0x1736('0xd')](a18_0x1736('0x4b')+_0x1ecebe);if(_0x1ecebe==a18_0x1736('0x49')||_0x1ecebe==String(this['syncPlaylistsService'][a18_0x1736('0x4a')])){const _0x17b8f9=__dirname;const _0x2c3034=require('simple-git')(_0x17b8f9);console[a18_0x1736('0xd')]('Git\x20updating');_0x2c3034[a18_0x1736('0x4c')]((_0x2189a1,_0xc7bd3a)=>{if(_0x2189a1){console[a18_0x1736('0xd')]('Error\x20git\x20updated');this[a18_0x1736('0x46')](_0x1ecebe);return;}else{}console[a18_0x1736('0xd')](a18_0x1736('0x4d'));console['log'](_0xc7bd3a);if(_0xc7bd3a&&_0xc7bd3a[a18_0x1736('0x4e')][a18_0x1736('0x4f')]){this['syncPlaylistsService'][a18_0x1736('0x50')]();}else{}});}}['handleLoadPlaylistRequest'](_0x5e2767){if(_0x5e2767==a18_0x1736('0x49')||_0x5e2767==String(this['syncPlaylistsService'][a18_0x1736('0x4a')])){this[a18_0x1736('0x7')][a18_0x1736('0x51')]();}}[a18_0x1736('0x44')](_0x3d3b88){if(String(_0x3d3b88)==a18_0x1736('0x49')||String(_0x3d3b88)==String(this[a18_0x1736('0x7')][a18_0x1736('0x4a')])){this[a18_0x1736('0x7')]['reloadMediaList']();}}['handleRebootRequest'](_0x19a8f9){if(_0x19a8f9==a18_0x1736('0x49')||_0x19a8f9==String(this[a18_0x1736('0x7')][a18_0x1736('0x4a')])){console[a18_0x1736('0xd')](a18_0x1736('0x52'));try{this['syncPlaylistsService'][a18_0x1736('0x50')]();}catch(_0x47cbc3){console[a18_0x1736('0xd')](_0x47cbc3);}}}['sendStateUpdate'](){console[a18_0x1736('0xd')](a18_0x1736('0x53'),this[a18_0x1736('0x8')]);this['mqttClient'][a18_0x1736('0x21')](a18_0x1736('0x54'),this[a18_0x1736('0x7')][a18_0x1736('0x4a')]+'-'+this[a18_0x1736('0x8')]);}[a18_0x1736('0x55')](_0xef89f8){if(this[a18_0x1736('0x8')]!==a18_0x1736('0x56')&&this['state']!==a18_0x1736('0x57')){console[a18_0x1736('0xd')](a18_0x1736('0x58'));this['state']=a18_0x1736('0x57');this[a18_0x1736('0x59')]();setTimeout(()=>{this['state']=a18_0x1736('0x56');this[a18_0x1736('0x59')]();},0x1388);}}[a18_0x1736('0x5a')](_0x99c612){if(this[a18_0x1736('0x8')]!==a18_0x1736('0x9')&&this[a18_0x1736('0x8')]!=='closing'){this[a18_0x1736('0x8')]=a18_0x1736('0x5b');this[a18_0x1736('0x59')]();setTimeout(()=>{this[a18_0x1736('0x8')]=a18_0x1736('0x9');this[a18_0x1736('0x59')]();},0x1388);}}['handleAppExit'](_0x54cb7a,_0xae471d){if(_0xae471d){console[a18_0x1736('0xd')](_0xae471d['stack']);}this[a18_0x1736('0x33')]['publish']('player/connected','false');}[a18_0x1736('0x5c')](_0x238246,_0x158105,_0x148d83){const _0x20490c={'iat':Math[a18_0x1736('0x19')](Date[a18_0x1736('0x5d')]()/0x3e8),'exp':Math[a18_0x1736('0x19')](Date[a18_0x1736('0x5d')]()/0x3e8)+0x14*0x3c,'aud':_0x238246};const _0x5f36fd=fs['readFileSync'](_0x158105);return jwt[a18_0x1736('0x5e')](_0x20490c,_0x5f36fd,{'algorithm':_0x148d83});}}exports['MqttService']=MqttService;