var a20_0xd414=['player/ifconfig','player/register','player/update_settings','player/turn_off_tv','player/turn_on_tv','received\x20message\x20%s\x20%s','player/reboot','handleReloadPlaylistRequest','handleLoadPlaylistRequest','player/update','handleRegisterRequest','handleTurnOffTVRequest','handleTurnOnTVRequest','all','playerId','registerClient','handleIfconfigRequest','handleUpdateRequest','handleUpdateRequest:\x20','simple-git','Git\x20updating','Git\x20updated','summary','reboot','loadMediaList','reloadMediaList','handleRebootRequest','handleRebootRequest\x20shutdown\x20-r\x20now:\x20','handleUpdateSettingsRequest','handleUpdateSettingsRequest:\x20','updateSettings','handleTurnOnTVRequest:\x20','sendStateUpdate','sending\x20state\x20%s','player/state','open','opening','opening\x20player\x20door','handleCloseRequest','closing','stack','player/connected','false','readFileSync','sign','MqttService','defineProperty','./../infrastructure/HttpClientService','request','request-progress','spawn','child_process','exec','is-image','string-template','mqtt','uuid/v4','jsonwebtoken','syncPlaylistsService','state','closed','httpClientService','HttpClientService','init','mqttInit_mosquitto','mqttInit_google','log','mqttInit','velvety-glazing-252020','my-registry','us-central1','RS256','resources/keys/rsa_private.pem','mqtt.googleapis.com','events','projects/','/locations/','/registries/','/devices/','unused','mqtts','TLSv1_2_method','round','now','connect','subscribe','/config','/state','/commands/#','Client\x20not\x20connected...','/projects/velvety-glazing-252020/topics/my-topic','-payload-0','publish','publish\x20result:','close','error','message','Message\x20received:\x20','Config\x20message\x20received:\x20','/commands','Command\x20message\x20received:\x20','from','base64','toString','ascii','this.clientId','clientId','run.lulo_2018#.','mqttClient','mqttClient_connect','bind','mqttClient_message','exit','SIGINT','handleAppExit','uncaughtException','Connected\x20to\x20broker\x20client:','player/open','player/close','player/load_playlist','player/reload_playlist'];(function(_0x480bcb,_0x3d309f){var _0x1863f2=function(_0x4db93b){while(--_0x4db93b){_0x480bcb['push'](_0x480bcb['shift']());}};_0x1863f2(++_0x3d309f);}(a20_0xd414,0xa7));var a20_0x11bb=function(_0x3fd799,_0x447edd){_0x3fd799=_0x3fd799-0x0;var _0x148042=a20_0xd414[_0x3fd799];return _0x148042;};'use strict';Object[a20_0x11bb('0x0')](exports,'__esModule',{'value':!![]});const HttpClientService_1=require(a20_0x11bb('0x1'));const fs=require('fs');const fsExtra=require('fs-extra');const request=require(a20_0x11bb('0x2'));const progress=require(a20_0x11bb('0x3'));const spawn=require('child_process')[a20_0x11bb('0x4')];const exec=require(a20_0x11bb('0x5'))[a20_0x11bb('0x6')];const isImage=require(a20_0x11bb('0x7'));const format=require(a20_0x11bb('0x8'));const os=require('os');const mqtt=require(a20_0x11bb('0x9'));const uuidv4=require(a20_0x11bb('0xa'));const jwt=require(a20_0x11bb('0xb'));class MqttService{constructor(_0x5f88eb){this[a20_0x11bb('0xc')]=_0x5f88eb;this[a20_0x11bb('0xd')]=a20_0x11bb('0xe');this[a20_0x11bb('0xf')]=new HttpClientService_1[(a20_0x11bb('0x10'))]();}[a20_0x11bb('0x11')](){this[a20_0x11bb('0x12')]();}[a20_0x11bb('0x13')](){console[a20_0x11bb('0x14')](a20_0x11bb('0x15'));const _0x14e169=a20_0x11bb('0x16');const _0x5568ca='my-node-device';const _0x2249a2=a20_0x11bb('0x17');const _0x48e1ae=a20_0x11bb('0x18');const _0x5e0ece=a20_0x11bb('0x19');const _0x361c7c=a20_0x11bb('0x1a');const _0x2a861f=a20_0x11bb('0x1b');const _0x4a5d91=0x1bb;const _0x1ffbd5=a20_0x11bb('0x1c');const _0x972622=0x5;const _0x59ac08=a20_0x11bb('0x1d')+_0x14e169+a20_0x11bb('0x1e')+_0x48e1ae+a20_0x11bb('0x1f')+_0x2249a2+a20_0x11bb('0x20')+_0x5568ca;const _0x9d0eb2={'host':_0x2a861f,'port':_0x4a5d91,'clientId':_0x59ac08,'username':a20_0x11bb('0x21'),'password':this['createJwt'](_0x14e169,_0x361c7c,_0x5e0ece),'protocol':a20_0x11bb('0x22'),'secureProtocol':a20_0x11bb('0x23')};const _0x33bc2e=Math[a20_0x11bb('0x24')](Date[a20_0x11bb('0x25')]()/0x3e8);const _0x9a409e=mqtt[a20_0x11bb('0x26')](_0x9d0eb2);_0x9a409e[a20_0x11bb('0x27')](a20_0x11bb('0x20')+_0x5568ca+a20_0x11bb('0x28'),{'qos':0x1});_0x9a409e[a20_0x11bb('0x27')](a20_0x11bb('0x20')+_0x5568ca+a20_0x11bb('0x29'),{'qos':0x1});_0x9a409e[a20_0x11bb('0x27')](a20_0x11bb('0x20')+_0x5568ca+a20_0x11bb('0x2a'),{'qos':0x0});const _0x4b3e22=a20_0x11bb('0x20')+_0x5568ca+'/'+_0x1ffbd5;_0x9a409e['on'](a20_0x11bb('0x26'),_0xb2af92=>{console[a20_0x11bb('0x14')](a20_0x11bb('0x26'));if(!_0xb2af92){console[a20_0x11bb('0x14')](a20_0x11bb('0x2b'));}else{const _0x4b3e22=a20_0x11bb('0x2c');const _0x3365bb=_0x2249a2+'/'+_0x5568ca+a20_0x11bb('0x2d');_0x9a409e[a20_0x11bb('0x2e')](_0x4b3e22,_0x3365bb,{'qos':0x1},_0x22fcc1=>{console[a20_0x11bb('0x14')](a20_0x11bb('0x2f'));console[a20_0x11bb('0x14')](_0x22fcc1);if(!_0x22fcc1){}});}});_0x9a409e['on'](a20_0x11bb('0x30'),()=>{console[a20_0x11bb('0x14')](a20_0x11bb('0x30'));});_0x9a409e['on'](a20_0x11bb('0x31'),_0x38392f=>{console['log'](a20_0x11bb('0x31'),_0x38392f);});_0x9a409e['on'](a20_0x11bb('0x32'),(_0x4f53ca,_0x4319d4)=>{let _0x54d13b=a20_0x11bb('0x33');console[a20_0x11bb('0x14')](_0x4f53ca);console['log'](_0x4319d4+'');if(_0x4f53ca===a20_0x11bb('0x20')+_0x5568ca+a20_0x11bb('0x28')){_0x54d13b=a20_0x11bb('0x34');}else if(_0x4f53ca['startsWith']('/devices/'+_0x5568ca+a20_0x11bb('0x35'))){_0x54d13b=a20_0x11bb('0x36');}_0x54d13b+=Buffer[a20_0x11bb('0x37')](_0x4319d4,a20_0x11bb('0x38'))[a20_0x11bb('0x39')](a20_0x11bb('0x3a'));console[a20_0x11bb('0x14')](_0x54d13b);});_0x9a409e['on']('packetsend',()=>{});console[a20_0x11bb('0x14')](_0x9d0eb2);}['mqttInit_mosquitto'](){console['log'](a20_0x11bb('0x15'));this['clientId']=uuidv4();console[a20_0x11bb('0x14')](a20_0x11bb('0x3b'));console['log'](this[a20_0x11bb('0x3c')]);const _0x10fa11={'clientId':this['clientId'],'username':'lulo_mqtt','password':a20_0x11bb('0x3d'),'clean':!![]};this[a20_0x11bb('0x3e')]=mqtt[a20_0x11bb('0x26')]('mqtt://lulo.run',_0x10fa11);this[a20_0x11bb('0x3e')]['on'](a20_0x11bb('0x26'),this[a20_0x11bb('0x3f')][a20_0x11bb('0x40')](this));this['mqttClient']['on'](a20_0x11bb('0x32'),this[a20_0x11bb('0x41')]['bind'](this));this[a20_0x11bb('0x3e')]['on'](a20_0x11bb('0x30'),()=>{console[a20_0x11bb('0x14')](a20_0x11bb('0x30'));});process['on'](a20_0x11bb('0x42'),this['handleAppExit']['bind'](this));process['on'](a20_0x11bb('0x43'),this[a20_0x11bb('0x44')]['bind'](this));process['on'](a20_0x11bb('0x45'),this['handleAppExit'][a20_0x11bb('0x40')](this));}[a20_0x11bb('0x3f')](){console[a20_0x11bb('0x14')](a20_0x11bb('0x46')+this[a20_0x11bb('0x3c')]);this[a20_0x11bb('0x3e')][a20_0x11bb('0x27')](a20_0x11bb('0x47'));this[a20_0x11bb('0x3e')][a20_0x11bb('0x27')](a20_0x11bb('0x48'));this[a20_0x11bb('0x3e')][a20_0x11bb('0x27')]('player/reboot',{'qos':0x2});this[a20_0x11bb('0x3e')][a20_0x11bb('0x27')](a20_0x11bb('0x49'),{'qos':0x2});this[a20_0x11bb('0x3e')][a20_0x11bb('0x27')](a20_0x11bb('0x4a'),{'qos':0x2});this[a20_0x11bb('0x3e')][a20_0x11bb('0x27')]('player/update',{'qos':0x2});this[a20_0x11bb('0x3e')][a20_0x11bb('0x27')](a20_0x11bb('0x4b'),{'qos':0x2});this['mqttClient']['subscribe'](a20_0x11bb('0x4c'),{'qos':0x2});this[a20_0x11bb('0x3e')]['subscribe'](a20_0x11bb('0x4d'),{'qos':0x2});this[a20_0x11bb('0x3e')]['subscribe'](a20_0x11bb('0x4e'),{'qos':0x2});this[a20_0x11bb('0x3e')][a20_0x11bb('0x27')](a20_0x11bb('0x4f'),{'qos':0x2});}['reportStatus'](){}['mqttClient_message'](_0x8a5c1b,_0x16db13){console['log'](a20_0x11bb('0x50'),_0x8a5c1b,_0x16db13);switch(_0x8a5c1b){case a20_0x11bb('0x47'):return this['handleOpenRequest'](_0x16db13);case a20_0x11bb('0x48'):return this['handleCloseRequest'](_0x16db13);case a20_0x11bb('0x51'):return this['handleRebootRequest'](_0x16db13);case a20_0x11bb('0x4a'):return this[a20_0x11bb('0x52')](_0x16db13);case'player/load_playlist':return this[a20_0x11bb('0x53')](_0x16db13);case a20_0x11bb('0x54'):return this['handleUpdateRequest'](_0x16db13);case a20_0x11bb('0x4b'):return this['handleIfconfigRequest'](_0x16db13);case a20_0x11bb('0x4c'):return this[a20_0x11bb('0x55')](_0x16db13);case a20_0x11bb('0x4d'):return this['handleUpdateSettingsRequest'](_0x16db13);case a20_0x11bb('0x4e'):return this[a20_0x11bb('0x56')](_0x16db13);case a20_0x11bb('0x4f'):return this[a20_0x11bb('0x57')](_0x16db13);}}[a20_0x11bb('0x55')](_0x304b6f){if(_0x304b6f==a20_0x11bb('0x58')||_0x304b6f==String(this[a20_0x11bb('0xc')][a20_0x11bb('0x59')])){this[a20_0x11bb('0xc')][a20_0x11bb('0x5a')]();}}[a20_0x11bb('0x5b')](_0xe79d45){if(_0xe79d45==a20_0x11bb('0x58')||_0xe79d45==String(this[a20_0x11bb('0xc')][a20_0x11bb('0x59')])){}}[a20_0x11bb('0x5c')](_0x46dd0a){console[a20_0x11bb('0x14')](a20_0x11bb('0x5d')+_0x46dd0a);if(_0x46dd0a=='all'||_0x46dd0a==String(this[a20_0x11bb('0xc')][a20_0x11bb('0x59')])){const _0x4d8a5a=__dirname;const _0x32905c=require(a20_0x11bb('0x5e'))(_0x4d8a5a);console['log'](a20_0x11bb('0x5f'));_0x32905c['pull']((_0x213e90,_0x17cda1)=>{if(_0x213e90){console[a20_0x11bb('0x14')]('Error\x20git\x20updated');this['handleUpdateRequest'](_0x46dd0a);return;}else{}console[a20_0x11bb('0x14')](a20_0x11bb('0x60'));console[a20_0x11bb('0x14')](_0x17cda1);if(_0x17cda1&&_0x17cda1[a20_0x11bb('0x61')]['changes']){this[a20_0x11bb('0xc')][a20_0x11bb('0x62')]();}else{}});}}[a20_0x11bb('0x53')](_0x28d919){if(_0x28d919==a20_0x11bb('0x58')||_0x28d919==String(this['syncPlaylistsService'][a20_0x11bb('0x59')])){this[a20_0x11bb('0xc')][a20_0x11bb('0x63')]();}}[a20_0x11bb('0x52')](_0x28a4c7){if(String(_0x28a4c7)==a20_0x11bb('0x58')||String(_0x28a4c7)==String(this[a20_0x11bb('0xc')][a20_0x11bb('0x59')])){this[a20_0x11bb('0xc')][a20_0x11bb('0x64')]();}}[a20_0x11bb('0x65')](_0x3f3ddc){if(_0x3f3ddc==a20_0x11bb('0x58')||_0x3f3ddc==String(this[a20_0x11bb('0xc')]['playerId'])){console[a20_0x11bb('0x14')](a20_0x11bb('0x66'));try{this[a20_0x11bb('0xc')][a20_0x11bb('0x62')]();}catch(_0x2beae4){console['log'](_0x2beae4);}}}[a20_0x11bb('0x67')](_0x2462da){if(_0x2462da==a20_0x11bb('0x58')||_0x2462da==String(this[a20_0x11bb('0xc')]['playerId'])){console[a20_0x11bb('0x14')](a20_0x11bb('0x68'));try{this['syncPlaylistsService'][a20_0x11bb('0x69')]();}catch(_0x13c7a9){console[a20_0x11bb('0x14')](_0x13c7a9);}}}[a20_0x11bb('0x57')](_0x3c17ef){if(_0x3c17ef==a20_0x11bb('0x58')||_0x3c17ef==String(this[a20_0x11bb('0xc')][a20_0x11bb('0x59')])){console['log'](a20_0x11bb('0x6a'));try{this['syncPlaylistsService']['turnOnTV']();}catch(_0x5e47fc){console['log'](_0x5e47fc);}}}['handleTurnOffTVRequest'](_0x1f3452){if(_0x1f3452==a20_0x11bb('0x58')||_0x1f3452==String(this[a20_0x11bb('0xc')][a20_0x11bb('0x59')])){console[a20_0x11bb('0x14')]('handleTurnOffTVRequest:\x20');try{this['syncPlaylistsService']['turnOffTV']();}catch(_0x4776e0){console[a20_0x11bb('0x14')](_0x4776e0);}}}[a20_0x11bb('0x6b')](){console[a20_0x11bb('0x14')](a20_0x11bb('0x6c'),this['state']);this[a20_0x11bb('0x3e')][a20_0x11bb('0x2e')](a20_0x11bb('0x6d'),this[a20_0x11bb('0xc')][a20_0x11bb('0x59')]+'-'+this[a20_0x11bb('0xd')]);}['handleOpenRequest'](_0x1c9e6f){if(this[a20_0x11bb('0xd')]!==a20_0x11bb('0x6e')&&this[a20_0x11bb('0xd')]!==a20_0x11bb('0x6f')){console[a20_0x11bb('0x14')](a20_0x11bb('0x70'));this['state']=a20_0x11bb('0x6f');this[a20_0x11bb('0x6b')]();setTimeout(()=>{this['state']=a20_0x11bb('0x6e');this[a20_0x11bb('0x6b')]();},0x1388);}}[a20_0x11bb('0x71')](_0x2cf2e4){if(this[a20_0x11bb('0xd')]!==a20_0x11bb('0xe')&&this['state']!==a20_0x11bb('0x72')){this[a20_0x11bb('0xd')]=a20_0x11bb('0x72');this[a20_0x11bb('0x6b')]();setTimeout(()=>{this[a20_0x11bb('0xd')]=a20_0x11bb('0xe');this['sendStateUpdate']();},0x1388);}}[a20_0x11bb('0x44')](_0x58b6b4,_0x46cc42){if(_0x46cc42){console[a20_0x11bb('0x14')](_0x46cc42[a20_0x11bb('0x73')]);}this['mqttClient'][a20_0x11bb('0x2e')](a20_0x11bb('0x74'),a20_0x11bb('0x75'));}['createJwt'](_0x48c700,_0xee9db,_0x135422){const _0x2c47b2={'iat':Math[a20_0x11bb('0x24')](Date['now']()/0x3e8),'exp':Math[a20_0x11bb('0x24')](Date[a20_0x11bb('0x25')]()/0x3e8)+0x14*0x3c,'aud':_0x48c700};const _0x2a743c=fs[a20_0x11bb('0x76')](_0xee9db);return jwt[a20_0x11bb('0x77')](_0x2c47b2,_0x2a743c,{'algorithm':_0x135422});}}exports[a20_0x11bb('0x78')]=MqttService;