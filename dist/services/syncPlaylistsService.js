var a25_0x54fe=['get','\x20Progress:\x20unknown\x09','\x20Progress:\x20','statusCode','stat','Have\x20already\x20downloaded\x20','size','And\x20the\x20file\x20size\x20matches\x20(','Redownloading','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(',')\x20vs\x20New(','createWriteStream','pipe','data','finish','Downloaded\x20','location','Redirect\x20','Redirect\x20limit\x20encountered\x20for\x20','302','File\x20Not\x20Found\x20','Problem\x20downloading\x20','\x20STATUS:\x20','message','downloadHTTPFileCallback','duration','createImageVideo','downloadRequestFile','Error\x20downloading\x20file','mediaType:\x20','image','video','join','ffmpeg','1/2','-pattern_type','-c:v','libx264','-vf','stdout','Converting\x20','stderr','stderr:\x20','finished\x20mp4\x20convert','http://www.youtube.com/watch?v=','youtubeURL:\x20','outFileName:\x20','--no-check-certificate','Download\x20started','filename:\x20','_filename','size:\x20','complete','finished\x20youtube\x20downloading!','Finishing','this.playListFile:\x20','writeFileSync','#EXTINF:0,luloPlayList','/home/osmc/luloclient/media/files/','m3uContent:\x20','copySync:\x20','writeFileSync:\x20','reboot','refreshPlayer','jsonrpcClient','Playlist.Clear','Playlist.Cleared','Playlist.Add','Playlist.Added','Player.Open','Playlist.Opened','kodiCommandClient','sudo\x20/sbin/reboot\x20-f','updateSettings','rss','header_active','setRss','enableClock','turnOnTV','CECActivateSource()','/home/osmc/.kodi/userdata/RssFeeds.xml','xmlContent:\x20','xml2js','parseString','err:\x20%j','result:\x20%j','none','rssfeeds','set','feed','buildObject','xml:\x20%j','Settings.SetSettingValue','lookandfeel.enablerssfeeds','setRss:','videoplayer.usedisplayasclock','kodi-send\x20--action=\x22','2.0','jsonrpcClient\x20data','/jsonrpc','SyncPlaylistsService','__awaiter','throw','value','then','next','defineProperty','__esModule','../infrastructure/HttpClientService','./playerService','node-mediainfo','url','http','fs-extra','request','request-progress','child_process','spawn','exec','is-image','youtube-dl','uuid/v4','config.json','package.json','url-exists','node-kodi','mt-files-downloader','media/','tempFolder','mediaFolder','files/','playlist.txt','m3uFile','currentFile','playlistChanged','failDownloadFiles','newPlayList','kodiHost','http://localhost','kodiUser','kodiPassword','.lulo123.','forceReload','HttpClientService','playerService','init','config','parse','readFileSync','context','baseURL','env','WEB_SERVICE_URL','deploy/','playListServiceURL','api/player_playlist.php?player_id={0}','playerServiceURL','loadMediaList','getStatus','registerClient','bind','checkDependencies','kodi','playlist','stringify','playerId','deviceUuid','networkInterfaces','version','httpClientService','post','http://restapi.lulo.run/player_devices/register','log','register\x20response:\x20','catch','player','getCurrentlyPlayingVideo','item','reportStatus','reportStatus\x20playingItem:\x20','http://restapi.lulo.run/player_devices/report_status','ensureDir','filesFolder','loadMediaList:\x20','hasPlayListChanged','emptyDirSync','downloadFiles','Total:\x20','length','download','reloadMediaList','playListFile','removeSync','existsSync','toString','\x20of\x20','finishProcess','path','media_type','substring','lastIndexOf','split','slice','.mp4','checkVideo','youtube_single','downloadYouTube','downloader','media','@type','Video','mediainfo\x20check:','includes','indexOf','splice','start','push','Error:\x20','start:\x20','error','error:\x20','end','stopped','destroyed','retry','downloadHTTPFile','Attempting\x20to\x20download\x20','\x20to\x20','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','globalAgent','maxSockets','host','pathname'];(function(_0x311f0a,_0x413121){var _0x1b9173=function(_0x20e6f4){while(--_0x20e6f4){_0x311f0a['push'](_0x311f0a['shift']());}};_0x1b9173(++_0x413121);}(a25_0x54fe,0x14e));var a25_0x2c25=function(_0x23d922,_0x50055a){_0x23d922=_0x23d922-0x0;var _0x140d92=a25_0x54fe[_0x23d922];return _0x140d92;};'use strict';var __awaiter=this&&this[a25_0x2c25('0x0')]||function(_0x410a4e,_0x54e846,_0x22b4bb,_0x5e0464){function _0x456d6a(_0x5b8af8){return _0x5b8af8 instanceof _0x22b4bb?_0x5b8af8:new _0x22b4bb(function(_0x4c3599){_0x4c3599(_0x5b8af8);});}return new(_0x22b4bb||(_0x22b4bb=Promise))(function(_0x560e56,_0x29535a){function _0x348673(_0x158eb3){try{_0x2868d3(_0x5e0464['next'](_0x158eb3));}catch(_0x1d2639){_0x29535a(_0x1d2639);}}function _0xf5905a(_0x3f9087){try{_0x2868d3(_0x5e0464[a25_0x2c25('0x1')](_0x3f9087));}catch(_0x9a3b5){_0x29535a(_0x9a3b5);}}function _0x2868d3(_0x442e0c){_0x442e0c['done']?_0x560e56(_0x442e0c[a25_0x2c25('0x2')]):_0x456d6a(_0x442e0c[a25_0x2c25('0x2')])[a25_0x2c25('0x3')](_0x348673,_0xf5905a);}_0x2868d3((_0x5e0464=_0x5e0464['apply'](_0x410a4e,_0x54e846||[]))[a25_0x2c25('0x4')]());});};Object[a25_0x2c25('0x5')](exports,a25_0x2c25('0x6'),{'value':!![]});const HttpClientService_1=require(a25_0x2c25('0x7'));const playerService_1=require(a25_0x2c25('0x8'));const mediainfo=require(a25_0x2c25('0x9'));const fs=require('fs');const url=require(a25_0x2c25('0xa'));const http=require(a25_0x2c25('0xb'));const fsExtra=require(a25_0x2c25('0xc'));const request=require(a25_0x2c25('0xd'));const progress=require(a25_0x2c25('0xe'));const spawn=require(a25_0x2c25('0xf'))[a25_0x2c25('0x10')];const exec=require(a25_0x2c25('0xf'))[a25_0x2c25('0x11')];const isImage=require(a25_0x2c25('0x12'));const format=require('string-template');const os=require('os');const youtubedl=require(a25_0x2c25('0x13'));const uuidv4=require(a25_0x2c25('0x14'));const configFile=a25_0x2c25('0x15');const contextFile=a25_0x2c25('0x16');const urlExists=require(a25_0x2c25('0x17'));const kodi_rpc=require(a25_0x2c25('0x18'));const Downloader=require(a25_0x2c25('0x19'));class SyncPlaylistsService{constructor(){this['mediaFolder']=a25_0x2c25('0x1a');this[a25_0x2c25('0x1b')]=this['mediaFolder']+'temp/';this['filesFolder']=this[a25_0x2c25('0x1c')]+a25_0x2c25('0x1d');this['playListFile']=this[a25_0x2c25('0x1c')]+a25_0x2c25('0x1e');this[a25_0x2c25('0x1f')]=this['filesFolder']+'lulo_playlist.m3u';this[a25_0x2c25('0x20')]=0x0;this[a25_0x2c25('0x21')]=![];this['downloadFiles']=[];this[a25_0x2c25('0x22')]=[];this[a25_0x2c25('0x23')]={};this[a25_0x2c25('0x24')]=a25_0x2c25('0x25');this[a25_0x2c25('0x26')]='lulo';this[a25_0x2c25('0x27')]=a25_0x2c25('0x28');this[a25_0x2c25('0x29')]=![];this['httpClientService']=new HttpClientService_1[(a25_0x2c25('0x2a'))]();this[a25_0x2c25('0x2b')]=new playerService_1['PlayerService']();}[a25_0x2c25('0x2c')](){this[a25_0x2c25('0x2d')]=JSON[a25_0x2c25('0x2e')](fs[a25_0x2c25('0x2f')](configFile));this[a25_0x2c25('0x30')]=JSON['parse'](fs[a25_0x2c25('0x2f')](contextFile));this['playerId']=this[a25_0x2c25('0x2d')]['playerId'];this[a25_0x2c25('0x31')]=process[a25_0x2c25('0x32')][a25_0x2c25('0x33')]+a25_0x2c25('0x34');this[a25_0x2c25('0x35')]=this['baseURL']+a25_0x2c25('0x36');this[a25_0x2c25('0x37')]=this['baseURL']+'api/player.php?player_id={0}';this['kodi']=new kodi_rpc({'url':this[a25_0x2c25('0x24')],'user':this['kodiUser'],'password':this[a25_0x2c25('0x27')]});this['checkDependencies']();this['registerClient']();this['checkFolders']();this[a25_0x2c25('0x38')]();this['updateSettings']();setInterval(function(){this[a25_0x2c25('0x39')]();}['bind'](this),0x2710);setInterval(function(){this[a25_0x2c25('0x3a')]();}[a25_0x2c25('0x3b')](this),0x493e0);}[a25_0x2c25('0x3c')](){}['registerClient'](){this[a25_0x2c25('0x3d')][a25_0x2c25('0x3e')]['getItems'](0x1)['then'](function(_0x169bb1){const _0x337ab2=JSON[a25_0x2c25('0x3f')](_0x169bb1);const _0x3d41b8={'player_id':this[a25_0x2c25('0x40')],'device_uuid':this[a25_0x2c25('0x2d')][a25_0x2c25('0x41')],'network_info':JSON[a25_0x2c25('0x3f')](os[a25_0x2c25('0x42')]()),'firmware_info':JSON[a25_0x2c25('0x3f')](this['context'][a25_0x2c25('0x43')]),'playlist':_0x337ab2,'playing_item':'','status':0x0};this[a25_0x2c25('0x44')][a25_0x2c25('0x45')](a25_0x2c25('0x46'),_0x3d41b8,![])[a25_0x2c25('0x3')](function(_0x36b18c){console[a25_0x2c25('0x47')](a25_0x2c25('0x48')+Date());})[a25_0x2c25('0x49')](function(_0x264cae){});console[a25_0x2c25('0x47')](_0x3d41b8);}[a25_0x2c25('0x3b')](this));const _0x27fa85=this[a25_0x2c25('0x2d')][a25_0x2c25('0x41')];if(!_0x27fa85||_0x27fa85==''){this[a25_0x2c25('0x2d')][a25_0x2c25('0x41')]=uuidv4();this[a25_0x2c25('0x2d')]={'deviceUuid':this[a25_0x2c25('0x2d')][a25_0x2c25('0x41')],'playerId':this[a25_0x2c25('0x2d')][a25_0x2c25('0x40')]};fs['writeFileSync'](configFile,JSON[a25_0x2c25('0x3f')](this[a25_0x2c25('0x2d')]));}}[a25_0x2c25('0x39')](){console[a25_0x2c25('0x47')](a25_0x2c25('0x39'));this[a25_0x2c25('0x3d')][a25_0x2c25('0x4a')][a25_0x2c25('0x4b')]()[a25_0x2c25('0x3')](function(_0x5a7fb2){const _0x48dcb4=_0x5a7fb2[a25_0x2c25('0x4c')]['label'];this['reportStatus'](_0x48dcb4);}[a25_0x2c25('0x3b')](this))[a25_0x2c25('0x49')](function(_0x162f82){console[a25_0x2c25('0x47')](_0x162f82);this[a25_0x2c25('0x4d')](JSON[a25_0x2c25('0x3f')](_0x162f82));}[a25_0x2c25('0x3b')](this));}[a25_0x2c25('0x4d')](_0x2d5462){console[a25_0x2c25('0x47')](a25_0x2c25('0x4e')+_0x2d5462);const _0x4e11c5={'player_id':this[a25_0x2c25('0x40')],'device_uuid':this[a25_0x2c25('0x2d')]['deviceUuid'],'status':_0x2d5462!=''&&_0x2d5462!=null?0x1:0x0,'playing_item':_0x2d5462};this[a25_0x2c25('0x44')][a25_0x2c25('0x45')](a25_0x2c25('0x4f'),_0x4e11c5,![])[a25_0x2c25('0x3')](function(_0x5c2ff4){console[a25_0x2c25('0x47')]('reportStatusResponse');})['catch'](function(_0x2d8bc5){});}['checkFolders'](){fsExtra[a25_0x2c25('0x50')](this[a25_0x2c25('0x1c')],_0x3b52fb=>{});fsExtra['ensureDir'](this[a25_0x2c25('0x1b')],_0x496b6a=>{});fsExtra[a25_0x2c25('0x50')](this[a25_0x2c25('0x51')],_0x25c382=>{});}[a25_0x2c25('0x38')](){const _0x1cd1cd=format(this['playListServiceURL'],this[a25_0x2c25('0x40')]);console[a25_0x2c25('0x47')](_0x1cd1cd);request({'url':_0x1cd1cd,'json':!![]},function(_0x45e58b,_0x4cdf68,_0x22c52a){console[a25_0x2c25('0x47')](a25_0x2c25('0x52'));this[a25_0x2c25('0x23')]=_0x22c52a;this[a25_0x2c25('0x21')]=this[a25_0x2c25('0x53')]();fsExtra[a25_0x2c25('0x54')](this[a25_0x2c25('0x1b')]);this['downloadFiles']=[];this[a25_0x2c25('0x22')]=[];this[a25_0x2c25('0x20')]=0x0;for(const _0x236226 in _0x22c52a){this[a25_0x2c25('0x55')]['push'](_0x22c52a[_0x236226]);}console[a25_0x2c25('0x47')](a25_0x2c25('0x56')+this[a25_0x2c25('0x55')][a25_0x2c25('0x57')]);if(this['downloadFiles'][a25_0x2c25('0x57')]>0x0){this[a25_0x2c25('0x58')]();}}[a25_0x2c25('0x3b')](this));}[a25_0x2c25('0x59')](){this[a25_0x2c25('0x29')]=!![];if(fsExtra['existsSync'](this[a25_0x2c25('0x1b')])){fsExtra[a25_0x2c25('0x54')](this[a25_0x2c25('0x1b')]);}if(fsExtra['existsSync'](this[a25_0x2c25('0x51')])){fsExtra[a25_0x2c25('0x54')](this[a25_0x2c25('0x51')]);}if(!fsExtra['existsSync'](this[a25_0x2c25('0x5a')])){fsExtra[a25_0x2c25('0x5b')](this[a25_0x2c25('0x5a')]);}if(!fsExtra[a25_0x2c25('0x5c')](this['m3uFile'])){fsExtra[a25_0x2c25('0x5b')](this[a25_0x2c25('0x1f')]);}this[a25_0x2c25('0x38')]();}[a25_0x2c25('0x53')](){const _0x4d0e04=JSON[a25_0x2c25('0x3f')](this[a25_0x2c25('0x23')]);try{if(!fsExtra[a25_0x2c25('0x5c')](this[a25_0x2c25('0x5a')])){return!![];}else{const _0x2faa30=fsExtra[a25_0x2c25('0x2f')](this[a25_0x2c25('0x5a')])[a25_0x2c25('0x5d')]();if(_0x2faa30!=_0x4d0e04){return!![];}}}catch(_0x4c70f0){console[a25_0x2c25('0x47')](_0x4c70f0);}return![];}[a25_0x2c25('0x58')](){console[a25_0x2c25('0x47')]('this.currentFile:\x20'+this[a25_0x2c25('0x20')]+a25_0x2c25('0x5e')+this[a25_0x2c25('0x55')][a25_0x2c25('0x57')]);if(this[a25_0x2c25('0x20')]>=this[a25_0x2c25('0x55')]['length']){this[a25_0x2c25('0x5f')]();return;}const _0x34a48a=String(this[a25_0x2c25('0x55')][this[a25_0x2c25('0x20')]][a25_0x2c25('0x60')]);const _0x2e9568=this[a25_0x2c25('0x55')][this[a25_0x2c25('0x20')]][a25_0x2c25('0x61')];let _0x35521e=_0x34a48a[a25_0x2c25('0x62')](_0x34a48a[a25_0x2c25('0x63')]('/')+0x1);const _0x1b4770=_0x35521e['split']('.')['slice'](0x0,-0x1)['join']('.');let _0x400416=this[a25_0x2c25('0x31')]+_0x34a48a;const _0x1d9542=_0x400416[a25_0x2c25('0x64')]('.')[a25_0x2c25('0x65')](0x0,-0x1)['join']('.');if(_0x2e9568=='youtube_single'){_0x35521e=_0x35521e+a25_0x2c25('0x66');}else if(_0x2e9568=='image'){_0x35521e=_0x1b4770+a25_0x2c25('0x66');_0x400416=_0x1d9542+'.mp4';}console[a25_0x2c25('0x47')]('**********+');console[a25_0x2c25('0x47')](_0x34a48a);console[a25_0x2c25('0x47')](_0x2e9568);console[a25_0x2c25('0x47')](_0x35521e);console[a25_0x2c25('0x47')](_0x400416);console[a25_0x2c25('0x47')](_0x1b4770);console['log'](_0x1d9542);console['log']('**********+');if(fsExtra['existsSync'](this[a25_0x2c25('0x1b')]+_0x35521e)){this[a25_0x2c25('0x67')](this['tempFolder']+_0x35521e)[a25_0x2c25('0x3')](function(_0x2b0ae9){if(_0x2b0ae9){this[a25_0x2c25('0x20')]++;}else{this[a25_0x2c25('0x21')]=!![];}this[a25_0x2c25('0x58')]();}['bind'](this));}else if(fsExtra[a25_0x2c25('0x5c')](this['filesFolder']+_0x35521e)){this[a25_0x2c25('0x67')](this['filesFolder']+_0x35521e)[a25_0x2c25('0x3')](function(_0x1ed8a3){if(_0x1ed8a3){fsExtra['copySync'](this[a25_0x2c25('0x51')]+_0x35521e,this[a25_0x2c25('0x1b')]+_0x35521e);this[a25_0x2c25('0x20')]++;}else{this['playlistChanged']=!![];}this[a25_0x2c25('0x58')]();}[a25_0x2c25('0x3b')](this));}else{console[a25_0x2c25('0x47')]('Downloading:\x20'+_0x400416);this[a25_0x2c25('0x21')]=!![];if(_0x2e9568==a25_0x2c25('0x68')){this[a25_0x2c25('0x69')](_0x34a48a);}else{this[a25_0x2c25('0x6a')](_0x400416,_0x35521e,_0x2e9568);}}}[a25_0x2c25('0x67')](_0x3fed07){return __awaiter(this,void 0x0,void 0x0,function*(){console['log']('videoFile:\x20'+_0x3fed07);const _0x263c0e=yield mediainfo(_0x3fed07)[a25_0x2c25('0x49')](_0x2f6a49=>{console['log'](_0x2f6a49);fsExtra[a25_0x2c25('0x5b')](_0x3fed07);return![];});const _0x3a5e64=_0x263c0e[a25_0x2c25('0x6b')]['track'][a25_0x2c25('0x57')]>0x1&&_0x263c0e[a25_0x2c25('0x6b')]['track'][0x1][a25_0x2c25('0x6c')]==a25_0x2c25('0x6d');if(!_0x3a5e64){fsExtra[a25_0x2c25('0x5b')](_0x3fed07);}console[a25_0x2c25('0x47')](a25_0x2c25('0x6e')+_0x3a5e64);return _0x3a5e64;});}[a25_0x2c25('0x6a')](_0x1fa084,_0x54c567,_0x5103c1){const _0x545188=new Downloader();console[a25_0x2c25('0x47')](_0x1fa084);console[a25_0x2c25('0x47')](_0x54c567);console[a25_0x2c25('0x47')](_0x5103c1);const _0x1e1019=_0x545188[a25_0x2c25('0x58')](_0x1fa084,this['tempFolder']+_0x54c567);urlExists(_0x1fa084,function(_0x312db0,_0x170573){if(_0x170573){if(this[a25_0x2c25('0x22')][a25_0x2c25('0x6f')](this[a25_0x2c25('0x20')])){const _0x1b0ba3=this[a25_0x2c25('0x22')][a25_0x2c25('0x70')](this['currentFile']);if(_0x1b0ba3>-0x1){this[a25_0x2c25('0x22')][a25_0x2c25('0x71')](_0x1b0ba3,0x1);}}console['log']('downloading:\x20'+_0x1fa084);_0x1e1019[a25_0x2c25('0x72')]();}else{if(!this['failDownloadFiles'][a25_0x2c25('0x6f')](this['currentFile'])){this[a25_0x2c25('0x22')][a25_0x2c25('0x73')](this[a25_0x2c25('0x20')]);}console[a25_0x2c25('0x47')](a25_0x2c25('0x74')+_0x1fa084);this[a25_0x2c25('0x20')]++;this['download']();}}[a25_0x2c25('0x3b')](this));_0x1e1019['on']('start',function(_0x1e1019){console[a25_0x2c25('0x47')](a25_0x2c25('0x75')+_0x1fa084);});_0x1e1019['on'](a25_0x2c25('0x76'),function(_0x1e1019){console[a25_0x2c25('0x47')](a25_0x2c25('0x77'));this['download']();}[a25_0x2c25('0x3b')](this));_0x1e1019['on'](a25_0x2c25('0x78'),function(_0x1e1019){console[a25_0x2c25('0x47')](a25_0x2c25('0x78'));console[a25_0x2c25('0x47')]('Downloaded:\x20'+_0x54c567);console['log']('mediaType:\x20'+_0x5103c1);this[a25_0x2c25('0x67')](this['tempFolder']+_0x54c567)[a25_0x2c25('0x3')](function(_0xa3f474){if(_0xa3f474){this['currentFile']++;}this[a25_0x2c25('0x58')]();}[a25_0x2c25('0x3b')](this));}[a25_0x2c25('0x3b')](this));_0x1e1019['on'](a25_0x2c25('0x79'),function(_0x1e1019){console[a25_0x2c25('0x47')](a25_0x2c25('0x79'));});_0x1e1019['on']('destroyed',function(_0x1e1019){console[a25_0x2c25('0x47')](a25_0x2c25('0x7a'));});_0x1e1019['on'](a25_0x2c25('0x7b'),function(_0x1e1019){console[a25_0x2c25('0x47')](a25_0x2c25('0x7b'));});}[a25_0x2c25('0x7c')](_0xdc90bf,_0x5ce3c8,_0x1c5e64,_0x43c3d6){console[a25_0x2c25('0x47')]('downloadHTTPFile');console[a25_0x2c25('0x47')](_0xdc90bf);const _0x22474e=!![];let _0x146d41=0x0;const _0x4a34d0='';console[a25_0x2c25('0x47')](a25_0x2c25('0x7d')+_0xdc90bf+a25_0x2c25('0x7e')+_0x5ce3c8);if(_0x146d41){if(_0x146d41>0x5){_0x43c3d6('Max\x20redirects\x20reached',_0xdc90bf,_0x1c5e64,null);return;}}else{_0x146d41=0x0;}const _0x473434=this['tempFolder']+_0x5ce3c8;let _0x57b81b;if(_0x43c3d6===undefined){console[a25_0x2c25('0x47')](a25_0x2c25('0x7f')+_0xdc90bf+a25_0x2c25('0x7e')+_0x473434);_0x43c3d6=function(_0x19f626,_0x22e47a){console['log']('downloadFile\x20callback\x20result\x20undefined:\x20',_0x19f626,_0x22e47a);};}http[a25_0x2c25('0x80')][a25_0x2c25('0x81')]=0x64;const _0x265584={'host':url[a25_0x2c25('0x2e')](_0xdc90bf)[a25_0x2c25('0x82')],'port':0x50,'path':url['parse'](_0xdc90bf)[a25_0x2c25('0x83')],'agent':![]};const _0x477702=http[a25_0x2c25('0x84')](_0x265584,function(_0x5ab4ee){let _0x2dbf27=0x0;let _0x22ba4a=0x0;function _0x265ff8(){if(_0x2dbf27===undefined){console['log'](_0x5ce3c8+a25_0x2c25('0x85')+_0x22ba4a+'/'+'?');}const _0x4361f5=_0x22ba4a/_0x2dbf27*0x64;console[a25_0x2c25('0x47')](_0x5ce3c8+a25_0x2c25('0x86')+_0x4361f5+'%\x09'+_0x22ba4a+'/'+_0x2dbf27);}console['log'](_0x5ce3c8+'\x20'+_0x5ab4ee['statusCode']);switch(_0x5ab4ee[a25_0x2c25('0x87')]){case 0xc8:_0x2dbf27=_0x5ab4ee['headers']['content-length']||_0x4a34d0;fs[a25_0x2c25('0x88')](_0x473434,function(_0x3f5bb1,_0x101e6c){if(!_0x3f5bb1){console[a25_0x2c25('0x47')](a25_0x2c25('0x89')+_0x473434);if(_0x101e6c[a25_0x2c25('0x8a')]==_0x2dbf27){console[a25_0x2c25('0x47')](a25_0x2c25('0x8b')+_0x2dbf27+')');console[a25_0x2c25('0x47')](a25_0x2c25('0x8c'));}else{console['log'](a25_0x2c25('0x8d')+_0x101e6c[a25_0x2c25('0x8a')]+a25_0x2c25('0x8e')+_0x2dbf27+')');}}_0x57b81b=fs[a25_0x2c25('0x8f')](_0x473434);_0x5ab4ee[a25_0x2c25('0x90')](_0x57b81b);_0x5ab4ee['on'](a25_0x2c25('0x91'),function(_0x2ef687){_0x22ba4a+=_0x2ef687[a25_0x2c25('0x57')];_0x265ff8();});_0x477702['on'](a25_0x2c25('0x76'),function(_0x3f5bb1){console[a25_0x2c25('0x47')]('err:\x20');console['log'](_0x3f5bb1);});_0x57b81b['on'](a25_0x2c25('0x92'),function(){console[a25_0x2c25('0x47')](a25_0x2c25('0x93')+_0xdc90bf+'\x20to\x20'+_0x5ce3c8);_0x43c3d6(null,_0x5ce3c8,_0x1c5e64,_0x5ce3c8);}[a25_0x2c25('0x3b')](this));});break;case 0x12e:const _0x1eb512=_0x5ab4ee['headers'][a25_0x2c25('0x94')];console['log'](a25_0x2c25('0x95')+_0xdc90bf+a25_0x2c25('0x7e')+_0x1eb512);if(_0x146d41<0x5){this['downloadHTTPFile'](_0x1eb512,_0x5ce3c8,_0x43c3d6,_0x146d41++);}else{console[a25_0x2c25('0x76')](a25_0x2c25('0x96')+_0xdc90bf+'.');_0x43c3d6(a25_0x2c25('0x97'),null,null,null);}return;case 0x194:console[a25_0x2c25('0x47')](a25_0x2c25('0x98')+_0xdc90bf);default:console['log'](a25_0x2c25('0x99')+_0xdc90bf+a25_0x2c25('0x9a')+_0x5ab4ee[a25_0x2c25('0x87')]);_0x477702['abort']();_0x43c3d6(_0x5ab4ee[a25_0x2c25('0x87')],null,null,null);return;}})['on'](a25_0x2c25('0x76'),function(_0x310788){console[a25_0x2c25('0x47')]('Error\x20Downloading:\x20'+_0xdc90bf+'\x20'+_0x310788[a25_0x2c25('0x9b')]);_0x43c3d6(_0x310788,null,null,null);});}[a25_0x2c25('0x9c')](_0x54d292,_0x2fdbc5,_0x4eb936,_0x300e00){console[a25_0x2c25('0x47')](a25_0x2c25('0x9c'));console['log'](_0x54d292);console[a25_0x2c25('0x47')](_0x2fdbc5);console['log'](_0x4eb936);console[a25_0x2c25('0x47')](_0x300e00);if(_0x4eb936=='image'){const _0x13b6ef=this['downloadFiles'][this[a25_0x2c25('0x20')]]['duration']!=null?this[a25_0x2c25('0x55')][this[a25_0x2c25('0x20')]][a25_0x2c25('0x9d')]:0x1e;this[a25_0x2c25('0x9e')](_0x300e00,_0x13b6ef);}else if(_0x4eb936=='video'){if(_0x54d292==null&&_0x2fdbc5!=''){this[a25_0x2c25('0x20')]++;}this[a25_0x2c25('0x58')]();}console[a25_0x2c25('0x47')](this['currentFile']);}[a25_0x2c25('0x9f')](_0x580535,_0x3a114b,_0x343df3){progress(request(_0x580535),{})['on']('progress',function(_0x35e39b){console[a25_0x2c25('0x47')](_0x35e39b);})['on'](a25_0x2c25('0x76'),function(_0xfef5b1){console[a25_0x2c25('0x47')](a25_0x2c25('0xa0'));this[a25_0x2c25('0x58')]();})['on'](a25_0x2c25('0x78'),function(){console[a25_0x2c25('0x47')]('Downloaded:\x20'+_0x3a114b);console['log'](a25_0x2c25('0xa1')+_0x343df3);if(_0x343df3==a25_0x2c25('0xa2')){const _0x2c3c20=this[a25_0x2c25('0x55')][this[a25_0x2c25('0x20')]]['duration']!=null?this[a25_0x2c25('0x55')][this['currentFile']]['duration']:0x1e;this[a25_0x2c25('0x9e')](_0x3a114b,_0x2c3c20);}else if(_0x343df3==a25_0x2c25('0xa3')){this[a25_0x2c25('0x20')]++;this[a25_0x2c25('0x58')]();}}[a25_0x2c25('0x3b')](this))[a25_0x2c25('0x90')](fs[a25_0x2c25('0x8f')](this['tempFolder']+_0x3a114b));}[a25_0x2c25('0x9e')](_0x526a32,_0x4b2a7c=0x1e){const _0x564e70=this[a25_0x2c25('0x1b')]+_0x526a32;console['log'](_0x564e70);console[a25_0x2c25('0x47')](_0x526a32);const _0x5a648e=_0x526a32[a25_0x2c25('0x64')]('.')[a25_0x2c25('0x65')](0x0,-0x1)[a25_0x2c25('0xa4')]('.');const _0x290833=a25_0x2c25('0xa5');const _0x1d9c41=['-y','-r',a25_0x2c25('0xa6'),'-loop','1',a25_0x2c25('0xa7'),'glob','-i',_0x564e70,'-t',String(_0x4b2a7c),a25_0x2c25('0xa8'),a25_0x2c25('0xa9'),'-pix_fmt','yuv420p','-r','25',a25_0x2c25('0xaa'),'scale=1920:1080',this[a25_0x2c25('0x1b')]+_0x5a648e+a25_0x2c25('0x66')];const _0x44bdb3=spawn(_0x290833,_0x1d9c41);_0x44bdb3[a25_0x2c25('0xab')]['on']('data',function(_0x36381e){console[a25_0x2c25('0x47')](a25_0x2c25('0xac')+_0x564e70);});_0x44bdb3[a25_0x2c25('0xad')]['on'](a25_0x2c25('0x91'),function(_0x2f3206){console['log'](a25_0x2c25('0xae')+_0x2f3206);}['bind'](this));_0x44bdb3['on']('close',function(){console[a25_0x2c25('0x47')](a25_0x2c25('0xaf'));this[a25_0x2c25('0x20')]++;this['download']();}[a25_0x2c25('0x3b')](this));}[a25_0x2c25('0x69')](_0x4cdc26){const _0x5d43d2=this['tempFolder']+'/'+_0x4cdc26+a25_0x2c25('0x66');const _0x54fc62=a25_0x2c25('0xb0')+_0x4cdc26;console[a25_0x2c25('0x47')](a25_0x2c25('0xb1')+_0x54fc62);console[a25_0x2c25('0x47')](a25_0x2c25('0xb2')+_0x5d43d2);const _0x2c78c6=youtubedl(_0x54fc62,['--format=18',a25_0x2c25('0xb3')],{'cwd':__dirname});_0x2c78c6['on']('info',function(_0x525234){console[a25_0x2c25('0x47')](a25_0x2c25('0xb4'));console[a25_0x2c25('0x47')](a25_0x2c25('0xb5')+_0x525234[a25_0x2c25('0xb6')]);console['log'](a25_0x2c25('0xb7')+_0x525234[a25_0x2c25('0x8a')]);});_0x2c78c6['on'](a25_0x2c25('0xb8'),function complete(_0x41debe){'use strict';console[a25_0x2c25('0x47')]('filename:\x20'+_0x41debe[a25_0x2c25('0xb6')]+'\x20already\x20downloaded.');});_0x2c78c6['on']('end',function(){console[a25_0x2c25('0x47')](a25_0x2c25('0xb9'));this[a25_0x2c25('0x67')](_0x5d43d2)[a25_0x2c25('0x3')](function(_0x41a048){if(_0x41a048){this['currentFile']++;}this[a25_0x2c25('0x58')]();}[a25_0x2c25('0x3b')](this));}[a25_0x2c25('0x3b')](this));_0x2c78c6[a25_0x2c25('0x90')](fs[a25_0x2c25('0x8f')](_0x5d43d2));}[a25_0x2c25('0x5f')](){console[a25_0x2c25('0x47')](a25_0x2c25('0xba'));if(this[a25_0x2c25('0x21')]){if(this['failDownloadFiles'][a25_0x2c25('0x57')]==0x0){console['log'](a25_0x2c25('0xbb')+this[a25_0x2c25('0x5a')]);fs[a25_0x2c25('0xbc')](this[a25_0x2c25('0x5a')],JSON[a25_0x2c25('0x3f')](this['newPlayList']));let _0x545153='#EXTCPlayListM3U::M3U'+'\x0d\x0a'+a25_0x2c25('0xbd')+'\x0d\x0a';for(const _0x4e1fc6 in this[a25_0x2c25('0x55')]){const _0x26576d=this[a25_0x2c25('0x55')][_0x4e1fc6][a25_0x2c25('0x60')];const _0x3e875f=this[a25_0x2c25('0x55')][_0x4e1fc6][a25_0x2c25('0x61')];const _0xeeaf88=_0x26576d[a25_0x2c25('0x62')](_0x26576d[a25_0x2c25('0x63')]('/')+0x1);let _0x10cb54=_0xeeaf88[a25_0x2c25('0x64')]('.')[a25_0x2c25('0x65')](0x0,-0x1)[a25_0x2c25('0xa4')]('.');if(_0x3e875f==a25_0x2c25('0x68')){_0x10cb54=_0x26576d;}_0x545153+=a25_0x2c25('0xbe')+_0x10cb54+a25_0x2c25('0x66')+'\x0d\x0a';console[a25_0x2c25('0x47')](a25_0x2c25('0xbf')+_0x545153);}console[a25_0x2c25('0x47')](a25_0x2c25('0xbf')+_0x545153);fsExtra['emptyDirSync'](this[a25_0x2c25('0x51')]);console[a25_0x2c25('0x47')](a25_0x2c25('0xc0')+this[a25_0x2c25('0x1b')]);fsExtra['copySync'](this[a25_0x2c25('0x1b')],this[a25_0x2c25('0x51')]);console[a25_0x2c25('0x47')](a25_0x2c25('0xc1')+this[a25_0x2c25('0x1f')]);fsExtra['writeFileSync'](this['m3uFile'],_0x545153);console[a25_0x2c25('0x47')]('emptyDirSync:\x20'+this[a25_0x2c25('0x1b')]);fsExtra[a25_0x2c25('0x54')](this[a25_0x2c25('0x1b')]);console[a25_0x2c25('0x47')]('Rebooting..');this[a25_0x2c25('0xc2')]();}else{console[a25_0x2c25('0x47')]('Playlist\x20incomplete,\x20retry.');this[a25_0x2c25('0x20')]=0x0;setTimeout(function(){this[a25_0x2c25('0x58')]();}[a25_0x2c25('0x3b')](this),0x1388);}}else{console['log']('No\x20playlist\x20changes.');}}[a25_0x2c25('0xc3')](){this[a25_0x2c25('0xc4')](a25_0x2c25('0xc5'),{'playlistid':0x1},function(_0x139495){console[a25_0x2c25('0x47')](a25_0x2c25('0xc6'));console[a25_0x2c25('0x47')](_0x139495);this[a25_0x2c25('0xc4')](a25_0x2c25('0xc7'),{'item':{'file':'//home/osmc/luloclient/media/files/lulo_playlist.m3u'},'playlistid':0x1},function(_0x139495){console[a25_0x2c25('0x47')](a25_0x2c25('0xc8'));console[a25_0x2c25('0x47')](_0x139495);this['jsonrpcClient'](a25_0x2c25('0xc9'),{'item':{'playlistid':0x1,'position':0x0}},function(_0x139495){console[a25_0x2c25('0x47')](a25_0x2c25('0xca'));console[a25_0x2c25('0x47')](_0x139495);this[a25_0x2c25('0xcb')]('RestartApp()');}[a25_0x2c25('0x3b')](this));}['bind'](this));}['bind'](this));}[a25_0x2c25('0xc2')](){console[a25_0x2c25('0x47')]('Rebooting');exec(a25_0x2c25('0xcc'),function(_0x577c5b){console[a25_0x2c25('0x47')](_0x577c5b);});}[a25_0x2c25('0xcd')](){const _0x169200=format(this[a25_0x2c25('0x37')],this[a25_0x2c25('0x40')]);console[a25_0x2c25('0x47')](_0x169200);request({'url':_0x169200,'json':!![]},function(_0x552ad9,_0x3d038d,_0x4cfdad){if(_0x4cfdad[a25_0x2c25('0x57')]>0x0){const _0x15dd56=_0x4cfdad[0x0];const _0x5c8434=_0x15dd56[a25_0x2c25('0xce')];const _0x28c6f0=_0x15dd56[a25_0x2c25('0xcf')]==0x1;this[a25_0x2c25('0xd0')](_0x5c8434);this[a25_0x2c25('0xd1')](_0x28c6f0);this[a25_0x2c25('0x3a')]();}console[a25_0x2c25('0x47')](_0x4cfdad);}[a25_0x2c25('0x3b')](this));}['turnOffTV'](){this[a25_0x2c25('0xcb')]('CECStandby()');}[a25_0x2c25('0xd2')](){this[a25_0x2c25('0xcb')](a25_0x2c25('0xd3'));}['setRss'](_0x445cfc){const _0x5e02ae=_0x445cfc!=null&&_0x445cfc!='';const _0x3c0b86=a25_0x2c25('0xd4');if(fsExtra['existsSync'](_0x3c0b86)){const _0x5fe7=fsExtra[a25_0x2c25('0x2f')](_0x3c0b86);console[a25_0x2c25('0x47')](a25_0x2c25('0xd5')+_0x5fe7);const _0x31d602=require(a25_0x2c25('0xd6'));const _0x471505=_0x31d602[a25_0x2c25('0xd7')];_0x471505(_0x5fe7,function(_0x41f8b4,_0x42bf31){console[a25_0x2c25('0x47')](a25_0x2c25('0xd8'),_0x41f8b4);console[a25_0x2c25('0x47')](a25_0x2c25('0xd9'),_0x42bf31);if(!_0x445cfc||_0x445cfc==null||_0x445cfc==''){_0x445cfc=a25_0x2c25('0xda');}_0x42bf31[a25_0x2c25('0xdb')][a25_0x2c25('0xdc')][0x0][a25_0x2c25('0xdd')][0x0]['_']=_0x445cfc;const _0x3df7a6=new _0x31d602['Builder']();const _0x4e6e1d=_0x3df7a6[a25_0x2c25('0xde')](_0x42bf31);console['log'](a25_0x2c25('0xdf'),_0x4e6e1d);fsExtra['writeFileSync'](_0x3c0b86,_0x4e6e1d);});this['kodiCommandClient']('RefreshRSS()');this[a25_0x2c25('0xc4')](a25_0x2c25('0xe0'),{'setting':a25_0x2c25('0xe1'),'value':_0x5e02ae},function(_0x4777e2){console[a25_0x2c25('0x47')](a25_0x2c25('0xe2'));console['log'](_0x4777e2);}['bind'](this));}}[a25_0x2c25('0xd1')](_0x42ffc6){this[a25_0x2c25('0xc4')](a25_0x2c25('0xe0'),{'setting':a25_0x2c25('0xe3'),'value':_0x42ffc6},function(_0x3c73e3){console[a25_0x2c25('0x47')]('enableClock:\x20');console[a25_0x2c25('0x47')](_0x3c73e3);}['bind'](this));}[a25_0x2c25('0xcb')](_0x5da0f1){exec(a25_0x2c25('0xe4')+_0x5da0f1+'\x22',function(_0x2b2524){console[a25_0x2c25('0x47')](_0x2b2524);});}['jsonrpcClient'](_0x33b3fb,_0x260919,_0x5e995e){const _0x3d927e={'jsonrpc':a25_0x2c25('0xe5'),'method':_0x33b3fb,'params':_0x260919,'id':0x1};const _0x2acccd={'user':this[a25_0x2c25('0x26')],'pass':this[a25_0x2c25('0x27')]};console[a25_0x2c25('0x47')](a25_0x2c25('0xe6'),_0x3d927e);console[a25_0x2c25('0x47')]('jsonrpcClient\x20options',_0x2acccd);this['httpClientService'][a25_0x2c25('0x45')](this[a25_0x2c25('0x24')]+a25_0x2c25('0xe7'),_0x3d927e,![],_0x2acccd)[a25_0x2c25('0x3')](function(_0x5f0ca2){_0x5e995e(_0x5f0ca2);})[a25_0x2c25('0x49')](function(_0x4a8e45){});}}exports[a25_0x2c25('0xe8')]=SyncPlaylistsService;