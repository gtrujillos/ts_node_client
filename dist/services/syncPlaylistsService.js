var a25_0x2fe6=['config','parse','readFileSync','context','playerId','baseURL','env','playListServiceURL','api/player.php?player_id={0}','kodi','kodiHost','kodiPassword','checkDependencies','registerClient','checkFolders','loadMediaList','updateSettings','getStatus','bind','playlist','getItems','stringify','deviceUuid','networkInterfaces','post','http://restapi.lulo.run/player_devices/register','log','register\x20response:\x20','writeFileSync','player','item','reportStatus','reportStatus\x20playingItem:\x20','http://restapi.lulo.run/player_devices/report_status','catch','ensureDir','loadMediaList:\x20','newPlayList','hasPlayListChanged','emptyDirSync','downloadFiles','push','length','reloadMediaList','tempFolder','existsSync','removeSync','download','this.currentFile:\x20','\x20of\x20','finishProcess','media_type','substring','lastIndexOf','split','slice','join','.mp4','image','**********+','checkVideo','Downloading:\x20','downloadYouTube','downloader','track','media','@type','Video','includes','indexOf','splice','downloading:\x20','start','Error:\x20','end','Downloaded:\x20','mediaType:\x20','stopped','destroyed','downloadHTTPFile','Attempting\x20to\x20download\x20','\x20to\x20','Max\x20redirects\x20reached','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','downloadFile\x20callback\x20result\x20undefined:\x20','maxSockets','get','\x20Progress:\x20unknown\x09','statusCode','headers','Have\x20already\x20downloaded\x20','size','And\x20the\x20file\x20size\x20matches\x20(','Redownloading','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(',')\x20vs\x20New(','pipe','data','error','err:\x20','finish','Downloaded\x20','location','Redirect\x20limit\x20encountered\x20for\x20','302','Problem\x20downloading\x20','\x20STATUS:\x20','abort','Error\x20Downloading:\x20','message','downloadHTTPFileCallback','duration','createImageVideo','downloadRequestFile','progress','Error\x20downloading\x20file','video','createWriteStream','ffmpeg','1/2','-loop','-pattern_type','glob','-c:v','libx264','-pix_fmt','-vf','stdout','stderr','stderr:\x20','close','finished\x20mp4\x20convert','http://www.youtube.com/watch?v=','youtubeURL:\x20','outFileName:\x20','--format=18','filename:\x20','_filename','size:\x20','\x20already\x20downloaded.','Finishing','this.playListFile:\x20','/home/osmc/luloclient/media/files/','m3uContent:\x20','copySync:\x20','copySync','writeFileSync:\x20','emptyDirSync:\x20','Rebooting..','Playlist\x20incomplete,\x20retry.','No\x20playlist\x20changes.','jsonrpcClient','Playlist.Clear','Playlist.Cleared','Playlist.Add','//home/osmc/luloclient/media/files/lulo_playlist.m3u','Playlist.Added','kodiCommandClient','RestartApp()','reboot','Rebooting','sudo\x20/sbin/reboot\x20-f','playerServiceURL','header_active','setRss','enableClock','turnOffTV','turnOnTV','CECActivateSource()','/home/osmc/.kodi/userdata/RssFeeds.xml','xmlContent:\x20','xml2js','err:\x20%j','result:\x20%j','none','rssfeeds','set','feed','Builder','xml:\x20%j','RefreshRSS()','Settings.SetSettingValue','setRss:','videoplayer.usedisplayasclock','enableClock:\x20','kodi-send\x20--action=\x22','2.0','jsonrpcClient\x20data','/jsonrpc','SyncPlaylistsService','__awaiter','next','throw','done','value','then','apply','defineProperty','__esModule','../infrastructure/HttpClientService','node-mediainfo','url','fs-extra','request-progress','child_process','spawn','is-image','string-template','youtube-dl','uuid/v4','config.json','url-exists','mediaFolder','media/','temp/','filesFolder','files/','playListFile','playlist.txt','m3uFile','lulo_playlist.m3u','currentFile','playlistChanged','failDownloadFiles','http://localhost','kodiUser','lulo','.lulo123.','forceReload','httpClientService','HttpClientService','playerService','PlayerService','init'];(function(_0x2552d6,_0x126db8){var _0x12464a=function(_0x3cb1a6){while(--_0x3cb1a6){_0x2552d6['push'](_0x2552d6['shift']());}};_0x12464a(++_0x126db8);}(a25_0x2fe6,0x1a8));var a25_0x10ad=function(_0x4036e5,_0x577a0b){_0x4036e5=_0x4036e5-0x0;var _0x3b756a=a25_0x2fe6[_0x4036e5];return _0x3b756a;};'use strict';var __awaiter=this&&this[a25_0x10ad('0x0')]||function(_0x4c8d34,_0x3ec5b0,_0x4b598d,_0x880f72){function _0x5e07e5(_0x248a3c){return _0x248a3c instanceof _0x4b598d?_0x248a3c:new _0x4b598d(function(_0x33787c){_0x33787c(_0x248a3c);});}return new(_0x4b598d||(_0x4b598d=Promise))(function(_0x5ee6f7,_0x4fe3b9){function _0xefd4fc(_0x296e97){try{_0x2756a3(_0x880f72[a25_0x10ad('0x1')](_0x296e97));}catch(_0x3a3b03){_0x4fe3b9(_0x3a3b03);}}function _0x1b0525(_0x2cd628){try{_0x2756a3(_0x880f72[a25_0x10ad('0x2')](_0x2cd628));}catch(_0x2b524c){_0x4fe3b9(_0x2b524c);}}function _0x2756a3(_0x1a0b8f){_0x1a0b8f[a25_0x10ad('0x3')]?_0x5ee6f7(_0x1a0b8f[a25_0x10ad('0x4')]):_0x5e07e5(_0x1a0b8f[a25_0x10ad('0x4')])[a25_0x10ad('0x5')](_0xefd4fc,_0x1b0525);}_0x2756a3((_0x880f72=_0x880f72[a25_0x10ad('0x6')](_0x4c8d34,_0x3ec5b0||[]))[a25_0x10ad('0x1')]());});};Object[a25_0x10ad('0x7')](exports,a25_0x10ad('0x8'),{'value':!![]});const HttpClientService_1=require(a25_0x10ad('0x9'));const playerService_1=require('./playerService');const mediainfo=require(a25_0x10ad('0xa'));const fs=require('fs');const url=require(a25_0x10ad('0xb'));const http=require('http');const fsExtra=require(a25_0x10ad('0xc'));const request=require('request');const progress=require(a25_0x10ad('0xd'));const spawn=require(a25_0x10ad('0xe'))[a25_0x10ad('0xf')];const exec=require('child_process')['exec'];const isImage=require(a25_0x10ad('0x10'));const format=require(a25_0x10ad('0x11'));const os=require('os');const youtubedl=require(a25_0x10ad('0x12'));const uuidv4=require(a25_0x10ad('0x13'));const configFile=a25_0x10ad('0x14');const contextFile='package.json';const urlExists=require(a25_0x10ad('0x15'));const kodi_rpc=require('node-kodi');const Downloader=require('mt-files-downloader');class SyncPlaylistsService{constructor(){this[a25_0x10ad('0x16')]=a25_0x10ad('0x17');this['tempFolder']=this[a25_0x10ad('0x16')]+a25_0x10ad('0x18');this[a25_0x10ad('0x19')]=this[a25_0x10ad('0x16')]+a25_0x10ad('0x1a');this[a25_0x10ad('0x1b')]=this[a25_0x10ad('0x16')]+a25_0x10ad('0x1c');this[a25_0x10ad('0x1d')]=this['filesFolder']+a25_0x10ad('0x1e');this[a25_0x10ad('0x1f')]=0x0;this[a25_0x10ad('0x20')]=![];this['downloadFiles']=[];this[a25_0x10ad('0x21')]=[];this['newPlayList']={};this['kodiHost']=a25_0x10ad('0x22');this[a25_0x10ad('0x23')]=a25_0x10ad('0x24');this['kodiPassword']=a25_0x10ad('0x25');this[a25_0x10ad('0x26')]=![];this[a25_0x10ad('0x27')]=new HttpClientService_1[(a25_0x10ad('0x28'))]();this[a25_0x10ad('0x29')]=new playerService_1[(a25_0x10ad('0x2a'))]();}[a25_0x10ad('0x2b')](){this[a25_0x10ad('0x2c')]=JSON[a25_0x10ad('0x2d')](fs[a25_0x10ad('0x2e')](configFile));this[a25_0x10ad('0x2f')]=JSON[a25_0x10ad('0x2d')](fs['readFileSync'](contextFile));this[a25_0x10ad('0x30')]=this[a25_0x10ad('0x2c')]['playerId'];this[a25_0x10ad('0x31')]=process[a25_0x10ad('0x32')]['WEB_SERVICE_URL']+'deploy/';this[a25_0x10ad('0x33')]=this[a25_0x10ad('0x31')]+'api/player_playlist.php?player_id={0}';this['playerServiceURL']=this['baseURL']+a25_0x10ad('0x34');this[a25_0x10ad('0x35')]=new kodi_rpc({'url':this[a25_0x10ad('0x36')],'user':this[a25_0x10ad('0x23')],'password':this[a25_0x10ad('0x37')]});this[a25_0x10ad('0x38')]();this[a25_0x10ad('0x39')]();this[a25_0x10ad('0x3a')]();this[a25_0x10ad('0x3b')]();this[a25_0x10ad('0x3c')]();setInterval(function(){this[a25_0x10ad('0x3d')]();}[a25_0x10ad('0x3e')](this),0x2710);setInterval(function(){this[a25_0x10ad('0x39')]();}[a25_0x10ad('0x3e')](this),0x493e0);}[a25_0x10ad('0x38')](){}[a25_0x10ad('0x39')](){this[a25_0x10ad('0x35')][a25_0x10ad('0x3f')][a25_0x10ad('0x40')](0x1)[a25_0x10ad('0x5')](function(_0xb7ee52){const _0x591f9a=JSON[a25_0x10ad('0x41')](_0xb7ee52);const _0x5c1549={'player_id':this[a25_0x10ad('0x30')],'device_uuid':this[a25_0x10ad('0x2c')][a25_0x10ad('0x42')],'network_info':JSON['stringify'](os[a25_0x10ad('0x43')]()),'firmware_info':JSON[a25_0x10ad('0x41')](this[a25_0x10ad('0x2f')]['version']),'playlist':_0x591f9a,'playing_item':'','status':0x0};this['httpClientService'][a25_0x10ad('0x44')](a25_0x10ad('0x45'),_0x5c1549,![])[a25_0x10ad('0x5')](function(_0x45ea78){console[a25_0x10ad('0x46')](a25_0x10ad('0x47')+Date());})['catch'](function(_0x1df3c7){});console['log'](_0x5c1549);}[a25_0x10ad('0x3e')](this));const _0x4b3e2a=this[a25_0x10ad('0x2c')][a25_0x10ad('0x42')];if(!_0x4b3e2a||_0x4b3e2a==''){this[a25_0x10ad('0x2c')]['deviceUuid']=uuidv4();this[a25_0x10ad('0x2c')]={'deviceUuid':this[a25_0x10ad('0x2c')]['deviceUuid'],'playerId':this['config'][a25_0x10ad('0x30')]};fs[a25_0x10ad('0x48')](configFile,JSON[a25_0x10ad('0x41')](this[a25_0x10ad('0x2c')]));}}['getStatus'](){console[a25_0x10ad('0x46')]('getStatus');this[a25_0x10ad('0x35')][a25_0x10ad('0x49')]['getCurrentlyPlayingVideo']()['then'](function(_0xc074a3){const _0x5187e3=_0xc074a3[a25_0x10ad('0x4a')]['label'];this[a25_0x10ad('0x4b')](_0x5187e3);}[a25_0x10ad('0x3e')](this))['catch'](function(_0x4e44d9){console[a25_0x10ad('0x46')](_0x4e44d9);this[a25_0x10ad('0x4b')](JSON[a25_0x10ad('0x41')](_0x4e44d9));}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0x4b')](_0x28fe7e){console[a25_0x10ad('0x46')](a25_0x10ad('0x4c')+_0x28fe7e);const _0xb330d3={'player_id':this[a25_0x10ad('0x30')],'device_uuid':this['config'][a25_0x10ad('0x42')],'status':_0x28fe7e!=''&&_0x28fe7e!=null?0x1:0x0,'playing_item':_0x28fe7e};this[a25_0x10ad('0x27')][a25_0x10ad('0x44')](a25_0x10ad('0x4d'),_0xb330d3,![])['then'](function(_0x3504c8){console[a25_0x10ad('0x46')]('reportStatusResponse');})[a25_0x10ad('0x4e')](function(_0x4ae207){});}[a25_0x10ad('0x3a')](){fsExtra[a25_0x10ad('0x4f')](this[a25_0x10ad('0x16')],_0x5b5f66=>{});fsExtra['ensureDir'](this['tempFolder'],_0x4ce5ed=>{});fsExtra[a25_0x10ad('0x4f')](this['filesFolder'],_0x79af2e=>{});}[a25_0x10ad('0x3b')](){const _0x10655a=format(this[a25_0x10ad('0x33')],this['playerId']);console[a25_0x10ad('0x46')](_0x10655a);request({'url':_0x10655a,'json':!![]},function(_0x4f49bb,_0x45fede,_0x45b939){console['log'](a25_0x10ad('0x50'));this[a25_0x10ad('0x51')]=_0x45b939;this[a25_0x10ad('0x20')]=this[a25_0x10ad('0x52')]();fsExtra[a25_0x10ad('0x53')](this['tempFolder']);this[a25_0x10ad('0x54')]=[];this[a25_0x10ad('0x21')]=[];this[a25_0x10ad('0x1f')]=0x0;for(const _0x54906f in _0x45b939){this['downloadFiles'][a25_0x10ad('0x55')](_0x45b939[_0x54906f]);}console[a25_0x10ad('0x46')]('Total:\x20'+this[a25_0x10ad('0x54')]['length']);if(this[a25_0x10ad('0x54')][a25_0x10ad('0x56')]>0x0){this['download']();}}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0x57')](){this[a25_0x10ad('0x26')]=!![];if(fsExtra['existsSync'](this[a25_0x10ad('0x58')])){fsExtra[a25_0x10ad('0x53')](this[a25_0x10ad('0x58')]);}if(fsExtra[a25_0x10ad('0x59')](this[a25_0x10ad('0x19')])){fsExtra[a25_0x10ad('0x53')](this[a25_0x10ad('0x19')]);}if(!fsExtra[a25_0x10ad('0x59')](this[a25_0x10ad('0x1b')])){fsExtra[a25_0x10ad('0x5a')](this[a25_0x10ad('0x1b')]);}if(!fsExtra[a25_0x10ad('0x59')](this[a25_0x10ad('0x1d')])){fsExtra[a25_0x10ad('0x5a')](this[a25_0x10ad('0x1d')]);}this[a25_0x10ad('0x3b')]();}[a25_0x10ad('0x52')](){const _0x3de3c6=JSON['stringify'](this[a25_0x10ad('0x51')]);try{if(!fsExtra[a25_0x10ad('0x59')](this[a25_0x10ad('0x1b')])){return!![];}else{const _0x1e7843=fsExtra['readFileSync'](this[a25_0x10ad('0x1b')])['toString']();if(_0x1e7843!=_0x3de3c6){return!![];}}}catch(_0x4d59be){console[a25_0x10ad('0x46')](_0x4d59be);}return![];}[a25_0x10ad('0x5b')](){console['log'](a25_0x10ad('0x5c')+this[a25_0x10ad('0x1f')]+a25_0x10ad('0x5d')+this['downloadFiles'][a25_0x10ad('0x56')]);if(this[a25_0x10ad('0x1f')]>=this['downloadFiles'][a25_0x10ad('0x56')]){this[a25_0x10ad('0x5e')]();return;}const _0x1e9819=String(this[a25_0x10ad('0x54')][this['currentFile']]['path']);const _0x2befe9=this[a25_0x10ad('0x54')][this[a25_0x10ad('0x1f')]][a25_0x10ad('0x5f')];let _0xd497d9=_0x1e9819[a25_0x10ad('0x60')](_0x1e9819[a25_0x10ad('0x61')]('/')+0x1);const _0x466ec9=_0xd497d9[a25_0x10ad('0x62')]('.')[a25_0x10ad('0x63')](0x0,-0x1)[a25_0x10ad('0x64')]('.');let _0x3fc4c7=this[a25_0x10ad('0x31')]+_0x1e9819;const _0x307cee=_0x3fc4c7['split']('.')[a25_0x10ad('0x63')](0x0,-0x1)[a25_0x10ad('0x64')]('.');if(_0x2befe9=='youtube_single'){_0xd497d9=_0xd497d9+a25_0x10ad('0x65');}else if(_0x2befe9==a25_0x10ad('0x66')){_0xd497d9=_0x466ec9+'.mp4';_0x3fc4c7=_0x307cee+a25_0x10ad('0x65');}console['log'](a25_0x10ad('0x67'));console[a25_0x10ad('0x46')](_0x1e9819);console[a25_0x10ad('0x46')](_0x2befe9);console[a25_0x10ad('0x46')](_0xd497d9);console['log'](_0x3fc4c7);console[a25_0x10ad('0x46')](_0x466ec9);console['log'](_0x307cee);console['log'](a25_0x10ad('0x67'));if(fsExtra[a25_0x10ad('0x59')](this['tempFolder']+_0xd497d9)){this['checkVideo'](this[a25_0x10ad('0x58')]+_0xd497d9)[a25_0x10ad('0x5')](function(_0x7e7dcd){if(_0x7e7dcd){this[a25_0x10ad('0x1f')]++;}else{this['playlistChanged']=!![];}this[a25_0x10ad('0x5b')]();}['bind'](this));}else if(fsExtra['existsSync'](this['filesFolder']+_0xd497d9)){this[a25_0x10ad('0x68')](this[a25_0x10ad('0x19')]+_0xd497d9)[a25_0x10ad('0x5')](function(_0x2e8e02){if(_0x2e8e02){fsExtra['copySync'](this[a25_0x10ad('0x19')]+_0xd497d9,this['tempFolder']+_0xd497d9);this[a25_0x10ad('0x1f')]++;}else{this['playlistChanged']=!![];}this['download']();}[a25_0x10ad('0x3e')](this));}else{console[a25_0x10ad('0x46')](a25_0x10ad('0x69')+_0x3fc4c7);this[a25_0x10ad('0x20')]=!![];if(_0x2befe9=='youtube_single'){this[a25_0x10ad('0x6a')](_0x1e9819);}else{this[a25_0x10ad('0x6b')](_0x3fc4c7,_0xd497d9,_0x2befe9);}}}[a25_0x10ad('0x68')](_0x1b3385){return __awaiter(this,void 0x0,void 0x0,function*(){console[a25_0x10ad('0x46')]('videoFile:\x20'+_0x1b3385);const _0x2a0e77=yield mediainfo(_0x1b3385)[a25_0x10ad('0x4e')](_0x3cfdc=>{console[a25_0x10ad('0x46')](_0x3cfdc);fsExtra[a25_0x10ad('0x5a')](_0x1b3385);return![];});const _0x201f12=_0x2a0e77['media'][a25_0x10ad('0x6c')][a25_0x10ad('0x56')]>0x1&&_0x2a0e77[a25_0x10ad('0x6d')][a25_0x10ad('0x6c')][0x1][a25_0x10ad('0x6e')]==a25_0x10ad('0x6f');if(!_0x201f12){fsExtra['removeSync'](_0x1b3385);}console['log']('mediainfo\x20check:'+_0x201f12);return _0x201f12;});}['downloader'](_0x45db1c,_0x18d420,_0x3c9b6e){const _0x3b3dc2=new Downloader();console[a25_0x10ad('0x46')](_0x45db1c);console[a25_0x10ad('0x46')](_0x18d420);console[a25_0x10ad('0x46')](_0x3c9b6e);const _0x1c642d=_0x3b3dc2[a25_0x10ad('0x5b')](_0x45db1c,this[a25_0x10ad('0x58')]+_0x18d420);urlExists(_0x45db1c,function(_0x22ae56,_0x3f09b9){if(_0x3f09b9){if(this[a25_0x10ad('0x21')][a25_0x10ad('0x70')](this['currentFile'])){const _0x5d8937=this[a25_0x10ad('0x21')][a25_0x10ad('0x71')](this['currentFile']);if(_0x5d8937>-0x1){this['failDownloadFiles'][a25_0x10ad('0x72')](_0x5d8937,0x1);}}console['log'](a25_0x10ad('0x73')+_0x45db1c);_0x1c642d[a25_0x10ad('0x74')]();}else{if(!this[a25_0x10ad('0x21')][a25_0x10ad('0x70')](this[a25_0x10ad('0x1f')])){this[a25_0x10ad('0x21')][a25_0x10ad('0x55')](this[a25_0x10ad('0x1f')]);}console[a25_0x10ad('0x46')](a25_0x10ad('0x75')+_0x45db1c);this[a25_0x10ad('0x1f')]++;this[a25_0x10ad('0x5b')]();}}[a25_0x10ad('0x3e')](this));_0x1c642d['on']('start',function(_0x1c642d){console[a25_0x10ad('0x46')]('start:\x20'+_0x45db1c);});_0x1c642d['on']('error',function(_0x1c642d){console[a25_0x10ad('0x46')]('error:\x20');this['download']();}[a25_0x10ad('0x3e')](this));_0x1c642d['on'](a25_0x10ad('0x76'),function(_0x1c642d){console['log'](a25_0x10ad('0x76'));console['log'](a25_0x10ad('0x77')+_0x18d420);console[a25_0x10ad('0x46')](a25_0x10ad('0x78')+_0x3c9b6e);this['checkVideo'](this[a25_0x10ad('0x58')]+_0x18d420)['then'](function(_0x1998c7){if(_0x1998c7){this[a25_0x10ad('0x1f')]++;}this[a25_0x10ad('0x5b')]();}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0x3e')](this));_0x1c642d['on']('stopped',function(_0x1c642d){console['log'](a25_0x10ad('0x79'));});_0x1c642d['on'](a25_0x10ad('0x7a'),function(_0x1c642d){console['log'](a25_0x10ad('0x7a'));});_0x1c642d['on']('retry',function(_0x1c642d){console[a25_0x10ad('0x46')]('retry');});}['downloadHTTPFile'](_0x352ef5,_0x25b6d2,_0x5a768e,_0x5bd187){console[a25_0x10ad('0x46')](a25_0x10ad('0x7b'));console[a25_0x10ad('0x46')](_0x352ef5);const _0x204064=!![];let _0x3a3c21=0x0;const _0x5d9ad1='';console[a25_0x10ad('0x46')](a25_0x10ad('0x7c')+_0x352ef5+a25_0x10ad('0x7d')+_0x25b6d2);if(_0x3a3c21){if(_0x3a3c21>0x5){_0x5bd187(a25_0x10ad('0x7e'),_0x352ef5,_0x5a768e,null);return;}}else{_0x3a3c21=0x0;}const _0x1f9a25=this[a25_0x10ad('0x58')]+_0x25b6d2;let _0x4e3679;if(_0x5bd187===undefined){console[a25_0x10ad('0x46')](a25_0x10ad('0x7f')+_0x352ef5+a25_0x10ad('0x7d')+_0x1f9a25);_0x5bd187=function(_0x3768ad,_0x295301){console['log'](a25_0x10ad('0x80'),_0x3768ad,_0x295301);};}http['globalAgent'][a25_0x10ad('0x81')]=0x64;const _0x5132e3={'host':url[a25_0x10ad('0x2d')](_0x352ef5)['host'],'port':0x50,'path':url[a25_0x10ad('0x2d')](_0x352ef5)['pathname'],'agent':![]};const _0x5aa663=http[a25_0x10ad('0x82')](_0x5132e3,function(_0xf5a18f){let _0x4f8428=0x0;let _0x1cca91=0x0;function _0x5589d2(){if(_0x4f8428===undefined){console[a25_0x10ad('0x46')](_0x25b6d2+a25_0x10ad('0x83')+_0x1cca91+'/'+'?');}const _0x1d83df=_0x1cca91/_0x4f8428*0x64;console[a25_0x10ad('0x46')](_0x25b6d2+'\x20Progress:\x20'+_0x1d83df+'%\x09'+_0x1cca91+'/'+_0x4f8428);}console['log'](_0x25b6d2+'\x20'+_0xf5a18f['statusCode']);switch(_0xf5a18f[a25_0x10ad('0x84')]){case 0xc8:_0x4f8428=_0xf5a18f[a25_0x10ad('0x85')]['content-length']||_0x5d9ad1;fs['stat'](_0x1f9a25,function(_0x3b7b67,_0x2db3c1){if(!_0x3b7b67){console[a25_0x10ad('0x46')](a25_0x10ad('0x86')+_0x1f9a25);if(_0x2db3c1[a25_0x10ad('0x87')]==_0x4f8428){console['log'](a25_0x10ad('0x88')+_0x4f8428+')');console[a25_0x10ad('0x46')](a25_0x10ad('0x89'));}else{console['log'](a25_0x10ad('0x8a')+_0x2db3c1['size']+a25_0x10ad('0x8b')+_0x4f8428+')');}}_0x4e3679=fs['createWriteStream'](_0x1f9a25);_0xf5a18f[a25_0x10ad('0x8c')](_0x4e3679);_0xf5a18f['on'](a25_0x10ad('0x8d'),function(_0xc61ea){_0x1cca91+=_0xc61ea[a25_0x10ad('0x56')];_0x5589d2();});_0x5aa663['on'](a25_0x10ad('0x8e'),function(_0x3b7b67){console[a25_0x10ad('0x46')](a25_0x10ad('0x8f'));console[a25_0x10ad('0x46')](_0x3b7b67);});_0x4e3679['on'](a25_0x10ad('0x90'),function(){console[a25_0x10ad('0x46')](a25_0x10ad('0x91')+_0x352ef5+a25_0x10ad('0x7d')+_0x25b6d2);_0x5bd187(null,_0x25b6d2,_0x5a768e,_0x25b6d2);}[a25_0x10ad('0x3e')](this));});break;case 0x12e:const _0x455d66=_0xf5a18f[a25_0x10ad('0x85')][a25_0x10ad('0x92')];console[a25_0x10ad('0x46')]('Redirect\x20'+_0x352ef5+a25_0x10ad('0x7d')+_0x455d66);if(_0x3a3c21<0x5){this['downloadHTTPFile'](_0x455d66,_0x25b6d2,_0x5bd187,_0x3a3c21++);}else{console['error'](a25_0x10ad('0x93')+_0x352ef5+'.');_0x5bd187(a25_0x10ad('0x94'),null,null,null);}return;case 0x194:console[a25_0x10ad('0x46')]('File\x20Not\x20Found\x20'+_0x352ef5);default:console['log'](a25_0x10ad('0x95')+_0x352ef5+a25_0x10ad('0x96')+_0xf5a18f[a25_0x10ad('0x84')]);_0x5aa663[a25_0x10ad('0x97')]();_0x5bd187(_0xf5a18f[a25_0x10ad('0x84')],null,null,null);return;}})['on'](a25_0x10ad('0x8e'),function(_0x316af3){console[a25_0x10ad('0x46')](a25_0x10ad('0x98')+_0x352ef5+'\x20'+_0x316af3[a25_0x10ad('0x99')]);_0x5bd187(_0x316af3,null,null,null);});}[a25_0x10ad('0x9a')](_0xf63089,_0x15ce4d,_0x1da224,_0xd91378){console['log']('downloadHTTPFileCallback');console['log'](_0xf63089);console[a25_0x10ad('0x46')](_0x15ce4d);console['log'](_0x1da224);console[a25_0x10ad('0x46')](_0xd91378);if(_0x1da224==a25_0x10ad('0x66')){const _0x4ceb78=this[a25_0x10ad('0x54')][this['currentFile']][a25_0x10ad('0x9b')]!=null?this[a25_0x10ad('0x54')][this[a25_0x10ad('0x1f')]][a25_0x10ad('0x9b')]:0x1e;this[a25_0x10ad('0x9c')](_0xd91378,_0x4ceb78);}else if(_0x1da224=='video'){if(_0xf63089==null&&_0x15ce4d!=''){this['currentFile']++;}this[a25_0x10ad('0x5b')]();}console[a25_0x10ad('0x46')](this[a25_0x10ad('0x1f')]);}[a25_0x10ad('0x9d')](_0x58a826,_0x5c977d,_0x3051e5){progress(request(_0x58a826),{})['on'](a25_0x10ad('0x9e'),function(_0x41d657){console['log'](_0x41d657);})['on']('error',function(_0x39a75d){console[a25_0x10ad('0x46')](a25_0x10ad('0x9f'));this[a25_0x10ad('0x5b')]();})['on'](a25_0x10ad('0x76'),function(){console[a25_0x10ad('0x46')](a25_0x10ad('0x77')+_0x5c977d);console[a25_0x10ad('0x46')](a25_0x10ad('0x78')+_0x3051e5);if(_0x3051e5=='image'){const _0x30b2a4=this[a25_0x10ad('0x54')][this[a25_0x10ad('0x1f')]][a25_0x10ad('0x9b')]!=null?this[a25_0x10ad('0x54')][this[a25_0x10ad('0x1f')]]['duration']:0x1e;this[a25_0x10ad('0x9c')](_0x5c977d,_0x30b2a4);}else if(_0x3051e5==a25_0x10ad('0xa0')){this[a25_0x10ad('0x1f')]++;this[a25_0x10ad('0x5b')]();}}[a25_0x10ad('0x3e')](this))[a25_0x10ad('0x8c')](fs[a25_0x10ad('0xa1')](this['tempFolder']+_0x5c977d));}['createImageVideo'](_0x517520,_0x5bb1d9=0x1e){const _0x4f9357=this[a25_0x10ad('0x58')]+_0x517520;console['log'](_0x4f9357);console['log'](_0x517520);const _0x21cd43=_0x517520[a25_0x10ad('0x62')]('.')[a25_0x10ad('0x63')](0x0,-0x1)[a25_0x10ad('0x64')]('.');const _0x1c1ad2=a25_0x10ad('0xa2');const _0x4b4165=['-y','-r',a25_0x10ad('0xa3'),a25_0x10ad('0xa4'),'1',a25_0x10ad('0xa5'),a25_0x10ad('0xa6'),'-i',_0x4f9357,'-t',String(_0x5bb1d9),a25_0x10ad('0xa7'),a25_0x10ad('0xa8'),a25_0x10ad('0xa9'),'yuv420p','-r','25',a25_0x10ad('0xaa'),'scale=1920:1080',this[a25_0x10ad('0x58')]+_0x21cd43+'.mp4'];const _0x110c58=spawn(_0x1c1ad2,_0x4b4165);_0x110c58[a25_0x10ad('0xab')]['on']('data',function(_0x1988f2){console['log']('Converting\x20'+_0x4f9357);});_0x110c58[a25_0x10ad('0xac')]['on'](a25_0x10ad('0x8d'),function(_0x13d59f){console[a25_0x10ad('0x46')](a25_0x10ad('0xad')+_0x13d59f);}[a25_0x10ad('0x3e')](this));_0x110c58['on'](a25_0x10ad('0xae'),function(){console[a25_0x10ad('0x46')](a25_0x10ad('0xaf'));this[a25_0x10ad('0x1f')]++;this[a25_0x10ad('0x5b')]();}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0x6a')](_0x555752){const _0x43aae4=this['tempFolder']+'/'+_0x555752+'.mp4';const _0x1b15bb=a25_0x10ad('0xb0')+_0x555752;console[a25_0x10ad('0x46')](a25_0x10ad('0xb1')+_0x1b15bb);console[a25_0x10ad('0x46')](a25_0x10ad('0xb2')+_0x43aae4);const _0x2c3c60=youtubedl(_0x1b15bb,[a25_0x10ad('0xb3'),'--no-check-certificate'],{'cwd':__dirname});_0x2c3c60['on']('info',function(_0x3fd3f6){console[a25_0x10ad('0x46')]('Download\x20started');console['log'](a25_0x10ad('0xb4')+_0x3fd3f6[a25_0x10ad('0xb5')]);console[a25_0x10ad('0x46')](a25_0x10ad('0xb6')+_0x3fd3f6[a25_0x10ad('0x87')]);});_0x2c3c60['on']('complete',function complete(_0x593ab2){'use strict';console[a25_0x10ad('0x46')](a25_0x10ad('0xb4')+_0x593ab2['_filename']+a25_0x10ad('0xb7'));});_0x2c3c60['on'](a25_0x10ad('0x76'),function(){console['log']('finished\x20youtube\x20downloading!');this['checkVideo'](_0x43aae4)[a25_0x10ad('0x5')](function(_0x4c68ed){if(_0x4c68ed){this[a25_0x10ad('0x1f')]++;}this['download']();}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0x3e')](this));_0x2c3c60['pipe'](fs[a25_0x10ad('0xa1')](_0x43aae4));}['finishProcess'](){console['log'](a25_0x10ad('0xb8'));if(this[a25_0x10ad('0x20')]){if(this[a25_0x10ad('0x21')][a25_0x10ad('0x56')]==0x0){console[a25_0x10ad('0x46')](a25_0x10ad('0xb9')+this['playListFile']);fs[a25_0x10ad('0x48')](this[a25_0x10ad('0x1b')],JSON[a25_0x10ad('0x41')](this[a25_0x10ad('0x51')]));let _0x2f91c2='#EXTCPlayListM3U::M3U'+'\x0d\x0a'+'#EXTINF:0,luloPlayList'+'\x0d\x0a';for(const _0x18f4de in this[a25_0x10ad('0x54')]){const _0x51c966=this[a25_0x10ad('0x54')][_0x18f4de]['path'];const _0x3d68cd=this[a25_0x10ad('0x54')][_0x18f4de][a25_0x10ad('0x5f')];const _0x1ec047=_0x51c966[a25_0x10ad('0x60')](_0x51c966[a25_0x10ad('0x61')]('/')+0x1);let _0x1e306c=_0x1ec047[a25_0x10ad('0x62')]('.')[a25_0x10ad('0x63')](0x0,-0x1)[a25_0x10ad('0x64')]('.');if(_0x3d68cd=='youtube_single'){_0x1e306c=_0x51c966;}_0x2f91c2+=a25_0x10ad('0xba')+_0x1e306c+'.mp4'+'\x0d\x0a';console[a25_0x10ad('0x46')](a25_0x10ad('0xbb')+_0x2f91c2);}console[a25_0x10ad('0x46')](a25_0x10ad('0xbb')+_0x2f91c2);fsExtra['emptyDirSync'](this[a25_0x10ad('0x19')]);console[a25_0x10ad('0x46')](a25_0x10ad('0xbc')+this[a25_0x10ad('0x58')]);fsExtra[a25_0x10ad('0xbd')](this['tempFolder'],this['filesFolder']);console[a25_0x10ad('0x46')](a25_0x10ad('0xbe')+this['m3uFile']);fsExtra[a25_0x10ad('0x48')](this['m3uFile'],_0x2f91c2);console[a25_0x10ad('0x46')](a25_0x10ad('0xbf')+this['tempFolder']);fsExtra['emptyDirSync'](this[a25_0x10ad('0x58')]);console[a25_0x10ad('0x46')](a25_0x10ad('0xc0'));this['reboot']();}else{console['log'](a25_0x10ad('0xc1'));this[a25_0x10ad('0x1f')]=0x0;setTimeout(function(){this[a25_0x10ad('0x5b')]();}[a25_0x10ad('0x3e')](this),0x1388);}}else{console[a25_0x10ad('0x46')](a25_0x10ad('0xc2'));}}['refreshPlayer'](){this[a25_0x10ad('0xc3')](a25_0x10ad('0xc4'),{'playlistid':0x1},function(_0x3eb2c2){console[a25_0x10ad('0x46')](a25_0x10ad('0xc5'));console['log'](_0x3eb2c2);this[a25_0x10ad('0xc3')](a25_0x10ad('0xc6'),{'item':{'file':a25_0x10ad('0xc7')},'playlistid':0x1},function(_0x3eb2c2){console[a25_0x10ad('0x46')](a25_0x10ad('0xc8'));console['log'](_0x3eb2c2);this[a25_0x10ad('0xc3')]('Player.Open',{'item':{'playlistid':0x1,'position':0x0}},function(_0x3eb2c2){console[a25_0x10ad('0x46')]('Playlist.Opened');console['log'](_0x3eb2c2);this[a25_0x10ad('0xc9')](a25_0x10ad('0xca'));}['bind'](this));}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0xcb')](){console[a25_0x10ad('0x46')](a25_0x10ad('0xcc'));exec(a25_0x10ad('0xcd'),function(_0x5e0008){console['log'](_0x5e0008);});}[a25_0x10ad('0x3c')](){const _0xcab7e=format(this[a25_0x10ad('0xce')],this[a25_0x10ad('0x30')]);console['log'](_0xcab7e);request({'url':_0xcab7e,'json':!![]},function(_0x5aa929,_0x21abc1,_0x52d712){if(_0x52d712[a25_0x10ad('0x56')]>0x0){const _0x291a6c=_0x52d712[0x0];const _0x4f4c54=_0x291a6c['rss'];const _0x59bcc3=_0x291a6c[a25_0x10ad('0xcf')]==0x1;this[a25_0x10ad('0xd0')](_0x4f4c54);this[a25_0x10ad('0xd1')](_0x59bcc3);this[a25_0x10ad('0x39')]();}console[a25_0x10ad('0x46')](_0x52d712);}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0xd2')](){this['kodiCommandClient']('CECStandby()');}[a25_0x10ad('0xd3')](){this[a25_0x10ad('0xc9')](a25_0x10ad('0xd4'));}[a25_0x10ad('0xd0')](_0xa4160){const _0xa4f10b=_0xa4160!=null&&_0xa4160!='';const _0x542ccb=a25_0x10ad('0xd5');if(fsExtra[a25_0x10ad('0x59')](_0x542ccb)){const _0x23172c=fsExtra['readFileSync'](_0x542ccb);console['log'](a25_0x10ad('0xd6')+_0x23172c);const _0x3de242=require(a25_0x10ad('0xd7'));const _0x1ebafe=_0x3de242['parseString'];_0x1ebafe(_0x23172c,function(_0x375d2b,_0x4a38b1){console[a25_0x10ad('0x46')](a25_0x10ad('0xd8'),_0x375d2b);console[a25_0x10ad('0x46')](a25_0x10ad('0xd9'),_0x4a38b1);if(!_0xa4160||_0xa4160==null||_0xa4160==''){_0xa4160=a25_0x10ad('0xda');}_0x4a38b1[a25_0x10ad('0xdb')][a25_0x10ad('0xdc')][0x0][a25_0x10ad('0xdd')][0x0]['_']=_0xa4160;const _0x48c3e7=new _0x3de242[(a25_0x10ad('0xde'))]();const _0x362e30=_0x48c3e7['buildObject'](_0x4a38b1);console[a25_0x10ad('0x46')](a25_0x10ad('0xdf'),_0x362e30);fsExtra[a25_0x10ad('0x48')](_0x542ccb,_0x362e30);});this[a25_0x10ad('0xc9')](a25_0x10ad('0xe0'));this['jsonrpcClient'](a25_0x10ad('0xe1'),{'setting':'lookandfeel.enablerssfeeds','value':_0xa4f10b},function(_0x151901){console[a25_0x10ad('0x46')](a25_0x10ad('0xe2'));console[a25_0x10ad('0x46')](_0x151901);}[a25_0x10ad('0x3e')](this));}}[a25_0x10ad('0xd1')](_0x117d07){this[a25_0x10ad('0xc3')](a25_0x10ad('0xe1'),{'setting':a25_0x10ad('0xe3'),'value':_0x117d07},function(_0x43be31){console[a25_0x10ad('0x46')](a25_0x10ad('0xe4'));console[a25_0x10ad('0x46')](_0x43be31);}[a25_0x10ad('0x3e')](this));}[a25_0x10ad('0xc9')](_0x53f183){exec(a25_0x10ad('0xe5')+_0x53f183+'\x22',function(_0x4a1ae3){console['log'](_0x4a1ae3);});}[a25_0x10ad('0xc3')](_0x4e039d,_0x44d61f,_0x204f0c){const _0x39a71f={'jsonrpc':a25_0x10ad('0xe6'),'method':_0x4e039d,'params':_0x44d61f,'id':0x1};const _0x3c6b5d={'user':this[a25_0x10ad('0x23')],'pass':this[a25_0x10ad('0x37')]};console[a25_0x10ad('0x46')](a25_0x10ad('0xe7'),_0x39a71f);console[a25_0x10ad('0x46')]('jsonrpcClient\x20options',_0x3c6b5d);this['httpClientService']['post'](this[a25_0x10ad('0x36')]+a25_0x10ad('0xe8'),_0x39a71f,![],_0x3c6b5d)[a25_0x10ad('0x5')](function(_0x2e3d44){_0x204f0c(_0x2e3d44);})[a25_0x10ad('0x4e')](function(_0x3294e9){});}}exports[a25_0x10ad('0xe9')]=SyncPlaylistsService;