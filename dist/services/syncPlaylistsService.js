var a22_0x179a=['rssfeeds','set','feed','Builder','buildObject','xml:\x20%j','kodi-send\x20--action=\x22RefreshRSS()\x22','Settings.SetSettingValue','lookandfeel.enablerssfeeds','setRss:','videoplayer.usedisplayasclock','2.0','/jsonrpc','SyncPlaylistsService','__awaiter','next','throw','done','value','apply','defineProperty','__esModule','node-mediainfo','http','fs-extra','request-progress','child_process','spawn','exec','is-image','string-template','uuid/v4','config.json','context.json','node-kodi','mt-files-downloader','mediaFolder','media/','tempFolder','filesFolder','files/','playListFile','playlist.txt','m3uFile','lulo_playlist.m3u','playlistChanged','downloadFiles','failDownloadFiles','newPlayList','kodiHost','http://localhost','kodiUser','lulo','forceReload','httpClientService','HttpClientService','parse','readFileSync','playerId','config','baseURL','env','WEB_SERVICE_URL','deploy/','playListServiceURL','api/player.php?player_id={0}','kodi','kodiPassword','checkDependencies','checkFolders','loadMediaList','getStatus','registerClient','bind','playlist','getItems','stringify','deviceUuid','networkInterfaces','context','http://restapi.lulo.run/player_devices/register','then','log','writeFileSync','player','getCurrentlyPlayingVideo','item','label','catch','reportStatus','playingItem:\x20','post','reportStatusResponse:\x20','ensureDir','hasPlayListChanged','currentFile','Total:\x20','length','emptyDirSync','existsSync','removeSync','toString','this.currentFile:\x20','\x20of\x20','finishProcess','path','media_type','substring','lastIndexOf','split','join','slice','youtube_single','.mp4','image','**********+','checkVideo','download','copySync','Downloading:\x20','downloadYouTube','media','track','@type','Video','mediainfo\x20check:','downloader','indexOf','splice','downloading:\x20','start','push','Error:\x20','start:\x20','error','error:\x20','end','Downloaded:\x20','stopped','destroyed','Attempting\x20to\x20download\x20','\x20to\x20','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','globalAgent','maxSockets','get','\x20Progress:\x20unknown\x09','\x20Progress:\x20','statusCode','headers','content-length','stat','Have\x20already\x20downloaded\x20','size','And\x20the\x20file\x20size\x20matches\x20(','Redownloading','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(',')\x20vs\x20New(','pipe','data','err:\x20','finish','Downloaded\x20','Redirect\x20','downloadHTTPFile','Redirect\x20limit\x20encountered\x20for\x20','302','File\x20Not\x20Found\x20','abort','Error\x20Downloading:\x20','message','downloadHTTPFileCallback','duration','createImageVideo','video','downloadRequestFile','progress','mediaType:\x20','createWriteStream','ffmpeg','1/2','-loop','-pattern_type','glob','libx264','yuv420p','stdout','Converting\x20','stderr','stderr:\x20','close','finished\x20mp4\x20convert','http://www.youtube.com/watch?v=','info','Download\x20started','filename:\x20','complete','_filename','\x20already\x20downloaded.','finished\x20youtube\x20downloading!','Finishing','#EXTCPlayListM3U::M3U','#EXTINF:0,luloPlayList','/home/osmc/luloclient/media/files/','Refreshing..','refreshPlayer','Playlist\x20incomplete,\x20retry.','No\x20playlist\x20changes.','Playlist.Clear','jsonrpcClient','Playlist.Add','//home/osmc/luloclient/media/files/lulo_playlist.m3u','Player.Open','Playlist.Opened','reboot','sudo\x20/sbin/shutdown\x20-r\x20now','updateSettings','playerServiceURL','setRss','enableClock','/home/osmc/.kodi/userdata/RssFeeds.xml','xmlContent:\x20','xml2js','result:\x20%j'];(function(_0x37d747,_0x4b6ae7){var _0x4209d3=function(_0x318a97){while(--_0x318a97){_0x37d747['push'](_0x37d747['shift']());}};_0x4209d3(++_0x4b6ae7);}(a22_0x179a,0x1ce));var a22_0x2ccd=function(_0x33191d,_0x2a9b51){_0x33191d=_0x33191d-0x0;var _0x5be9b5=a22_0x179a[_0x33191d];return _0x5be9b5;};'use strict';var __awaiter=this&&this[a22_0x2ccd('0x0')]||function(_0x855147,_0x595a91,_0x155ff5,_0x3183ea){function _0x268f2d(_0xdc53e9){return _0xdc53e9 instanceof _0x155ff5?_0xdc53e9:new _0x155ff5(function(_0x2dfc7e){_0x2dfc7e(_0xdc53e9);});}return new(_0x155ff5||(_0x155ff5=Promise))(function(_0x27b18c,_0x23c75e){function _0x2f90dc(_0x3ad16e){try{_0x2f0f24(_0x3183ea[a22_0x2ccd('0x1')](_0x3ad16e));}catch(_0x1e5362){_0x23c75e(_0x1e5362);}}function _0x8a5d95(_0x1f589a){try{_0x2f0f24(_0x3183ea[a22_0x2ccd('0x2')](_0x1f589a));}catch(_0x5533be){_0x23c75e(_0x5533be);}}function _0x2f0f24(_0x4aabac){_0x4aabac[a22_0x2ccd('0x3')]?_0x27b18c(_0x4aabac[a22_0x2ccd('0x4')]):_0x268f2d(_0x4aabac[a22_0x2ccd('0x4')])['then'](_0x2f90dc,_0x8a5d95);}_0x2f0f24((_0x3183ea=_0x3183ea[a22_0x2ccd('0x5')](_0x855147,_0x595a91||[]))['next']());});};Object[a22_0x2ccd('0x6')](exports,a22_0x2ccd('0x7'),{'value':!![]});const HttpClientService_1=require('../infrastructure/HttpClientService');const mediainfo=require(a22_0x2ccd('0x8'));const fs=require('fs');const url=require('url');const http=require(a22_0x2ccd('0x9'));const fsExtra=require(a22_0x2ccd('0xa'));const request=require('request');const progress=require(a22_0x2ccd('0xb'));const spawn=require(a22_0x2ccd('0xc'))[a22_0x2ccd('0xd')];const exec=require(a22_0x2ccd('0xc'))[a22_0x2ccd('0xe')];const isImage=require(a22_0x2ccd('0xf'));const format=require(a22_0x2ccd('0x10'));const os=require('os');const youtubedl=require('youtube-dl');const uuidv4=require(a22_0x2ccd('0x11'));const configFile=a22_0x2ccd('0x12');const contextFile=a22_0x2ccd('0x13');const urlExists=require('url-exists');const kodi_rpc=require(a22_0x2ccd('0x14'));const Downloader=require(a22_0x2ccd('0x15'));class SyncPlaylistsService{constructor(){this[a22_0x2ccd('0x16')]=a22_0x2ccd('0x17');this[a22_0x2ccd('0x18')]=this[a22_0x2ccd('0x16')]+'temp/';this[a22_0x2ccd('0x19')]=this[a22_0x2ccd('0x16')]+a22_0x2ccd('0x1a');this[a22_0x2ccd('0x1b')]=this[a22_0x2ccd('0x16')]+a22_0x2ccd('0x1c');this[a22_0x2ccd('0x1d')]=this[a22_0x2ccd('0x19')]+a22_0x2ccd('0x1e');this['currentFile']=0x0;this[a22_0x2ccd('0x1f')]=![];this[a22_0x2ccd('0x20')]=[];this[a22_0x2ccd('0x21')]=[];this[a22_0x2ccd('0x22')]={};this[a22_0x2ccd('0x23')]=a22_0x2ccd('0x24');this[a22_0x2ccd('0x25')]=a22_0x2ccd('0x26');this['kodiPassword']='.lulo123.';this[a22_0x2ccd('0x27')]=![];this[a22_0x2ccd('0x28')]=new HttpClientService_1[(a22_0x2ccd('0x29'))]();}['init'](){this['config']=JSON[a22_0x2ccd('0x2a')](fs['readFileSync'](configFile));this['context']=JSON[a22_0x2ccd('0x2a')](fs[a22_0x2ccd('0x2b')](contextFile));this[a22_0x2ccd('0x2c')]=this[a22_0x2ccd('0x2d')]['playerId'];this[a22_0x2ccd('0x2e')]=process[a22_0x2ccd('0x2f')][a22_0x2ccd('0x30')]+a22_0x2ccd('0x31');this[a22_0x2ccd('0x32')]=this[a22_0x2ccd('0x2e')]+'api/player_playlist.php?player_id={0}';this['playerServiceURL']=this[a22_0x2ccd('0x2e')]+a22_0x2ccd('0x33');this[a22_0x2ccd('0x34')]=new kodi_rpc({'url':this[a22_0x2ccd('0x23')],'user':this['kodiUser'],'password':this[a22_0x2ccd('0x35')]});this[a22_0x2ccd('0x36')]();this['registerClient']();this[a22_0x2ccd('0x37')]();this[a22_0x2ccd('0x38')]();setInterval(function(){this[a22_0x2ccd('0x39')]();}['bind'](this),0x2710);setInterval(function(){this[a22_0x2ccd('0x3a')]();}[a22_0x2ccd('0x3b')](this),0x493e0);}[a22_0x2ccd('0x36')](){}[a22_0x2ccd('0x3a')](){this[a22_0x2ccd('0x34')][a22_0x2ccd('0x3c')][a22_0x2ccd('0x3d')](0x1)['then'](function(_0x337c1b){const _0x5e40f8=JSON[a22_0x2ccd('0x3e')](_0x337c1b);const _0x1b11a6={'player_id':this['playerId'],'device_uuid':this[a22_0x2ccd('0x2d')][a22_0x2ccd('0x3f')],'network_info':JSON[a22_0x2ccd('0x3e')](os[a22_0x2ccd('0x40')]()),'firmware_info':JSON[a22_0x2ccd('0x3e')](this[a22_0x2ccd('0x41')]),'playlist':_0x5e40f8,'playing_item':'','status':0x0};this['httpClientService']['post'](a22_0x2ccd('0x42'),_0x1b11a6,![])[a22_0x2ccd('0x43')](function(_0x4576ac){console[a22_0x2ccd('0x44')]('register\x20response:\x20'+Date());})['catch'](function(_0x44dd40){});console['log'](_0x1b11a6);}[a22_0x2ccd('0x3b')](this));const _0x28a5c5=this['config']['deviceUuid'];if(!_0x28a5c5||_0x28a5c5==''){this[a22_0x2ccd('0x2d')]['deviceUuid']=uuidv4();this[a22_0x2ccd('0x2d')]={'deviceUuid':this[a22_0x2ccd('0x2d')]['deviceUuid'],'playerId':this[a22_0x2ccd('0x2d')][a22_0x2ccd('0x2c')]};fs[a22_0x2ccd('0x45')](configFile,JSON[a22_0x2ccd('0x3e')](this[a22_0x2ccd('0x2d')]));}}['getStatus'](){console['log'](a22_0x2ccd('0x39'));this[a22_0x2ccd('0x34')][a22_0x2ccd('0x46')][a22_0x2ccd('0x47')]()[a22_0x2ccd('0x43')](function(_0x5c646b){const _0x274c3b=_0x5c646b[a22_0x2ccd('0x48')][a22_0x2ccd('0x49')];this['reportStatus'](_0x274c3b);}[a22_0x2ccd('0x3b')](this))[a22_0x2ccd('0x4a')](function(_0x54ebeb){console['log'](_0x54ebeb);this[a22_0x2ccd('0x4b')](_0x54ebeb);}[a22_0x2ccd('0x3b')](this));}[a22_0x2ccd('0x4b')](_0x49ec56){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x4c')+_0x49ec56);const _0x2a53e0={'player_id':this[a22_0x2ccd('0x2c')],'device_uuid':this[a22_0x2ccd('0x2d')][a22_0x2ccd('0x3f')],'status':_0x49ec56!=''&&_0x49ec56!=null?0x1:0x0,'playing_item':_0x49ec56};this['httpClientService'][a22_0x2ccd('0x4d')]('http://restapi.lulo.run/player_devices/report_status',_0x2a53e0,![])[a22_0x2ccd('0x43')](function(_0xd0fe3f){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x4e')+Date());})[a22_0x2ccd('0x4a')](function(_0x5e36e8){});}[a22_0x2ccd('0x37')](){fsExtra['ensureDir'](this['mediaFolder'],_0x15c05e=>{});fsExtra['ensureDir'](this[a22_0x2ccd('0x18')],_0x49a7a2=>{});fsExtra[a22_0x2ccd('0x4f')](this['filesFolder'],_0x32eab3=>{});}[a22_0x2ccd('0x38')](){const _0x28de0c=format(this[a22_0x2ccd('0x32')],this[a22_0x2ccd('0x2c')]);console[a22_0x2ccd('0x44')](_0x28de0c);request({'url':_0x28de0c,'json':!![]},function(_0x3f96da,_0x1c3efc,_0x51239e){console[a22_0x2ccd('0x44')]('loadMediaList:\x20');console[a22_0x2ccd('0x44')](_0x51239e);this[a22_0x2ccd('0x22')]=_0x51239e;this['playlistChanged']=this[a22_0x2ccd('0x50')]();fsExtra['emptyDirSync'](this[a22_0x2ccd('0x18')]);this[a22_0x2ccd('0x20')]=[];this['failDownloadFiles']=[];this[a22_0x2ccd('0x51')]=0x0;for(const _0x321080 in _0x51239e){this[a22_0x2ccd('0x20')]['push'](_0x51239e[_0x321080]);}console[a22_0x2ccd('0x44')](a22_0x2ccd('0x52')+this[a22_0x2ccd('0x20')][a22_0x2ccd('0x53')]);if(this[a22_0x2ccd('0x20')][a22_0x2ccd('0x53')]>0x0){this['download']();}}[a22_0x2ccd('0x3b')](this));}['reloadMediaList'](){this[a22_0x2ccd('0x27')]=!![];if(fsExtra['existsSync'](this[a22_0x2ccd('0x18')])){fsExtra[a22_0x2ccd('0x54')](this[a22_0x2ccd('0x18')]);}if(fsExtra[a22_0x2ccd('0x55')](this[a22_0x2ccd('0x19')])){fsExtra[a22_0x2ccd('0x54')](this['filesFolder']);}if(!fsExtra[a22_0x2ccd('0x55')](this[a22_0x2ccd('0x1b')])){fsExtra['removeSync'](this['playListFile']);}if(!fsExtra[a22_0x2ccd('0x55')](this[a22_0x2ccd('0x1d')])){fsExtra[a22_0x2ccd('0x56')](this['m3uFile']);}this[a22_0x2ccd('0x38')]();}['hasPlayListChanged'](){const _0x3fd9c7=JSON[a22_0x2ccd('0x3e')](this[a22_0x2ccd('0x22')]);try{if(!fsExtra[a22_0x2ccd('0x55')](this['playListFile'])){return!![];}else{const _0x41b3c9=fsExtra[a22_0x2ccd('0x2b')](this[a22_0x2ccd('0x1b')])[a22_0x2ccd('0x57')]();if(_0x41b3c9!=_0x3fd9c7){return!![];}}}catch(_0x37bd13){console[a22_0x2ccd('0x44')](_0x37bd13);}return![];}['download'](){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x58')+this[a22_0x2ccd('0x51')]+a22_0x2ccd('0x59')+this['downloadFiles'][a22_0x2ccd('0x53')]);if(this[a22_0x2ccd('0x51')]>=this[a22_0x2ccd('0x20')][a22_0x2ccd('0x53')]){this[a22_0x2ccd('0x5a')]();return;}const _0x50f00f=String(this[a22_0x2ccd('0x20')][this['currentFile']][a22_0x2ccd('0x5b')]);const _0x463b15=this[a22_0x2ccd('0x20')][this[a22_0x2ccd('0x51')]][a22_0x2ccd('0x5c')];let _0x100977=_0x50f00f[a22_0x2ccd('0x5d')](_0x50f00f[a22_0x2ccd('0x5e')]('/')+0x1);const _0x1791d2=_0x100977[a22_0x2ccd('0x5f')]('.')['slice'](0x0,-0x1)[a22_0x2ccd('0x60')]('.');let _0x1a1ca3=this[a22_0x2ccd('0x2e')]+_0x50f00f;const _0x31e236=_0x1a1ca3[a22_0x2ccd('0x5f')]('.')[a22_0x2ccd('0x61')](0x0,-0x1)[a22_0x2ccd('0x60')]('.');if(_0x463b15==a22_0x2ccd('0x62')){_0x100977=_0x100977+a22_0x2ccd('0x63');}else if(_0x463b15==a22_0x2ccd('0x64')){_0x100977=_0x1791d2+'.mp4';_0x1a1ca3=_0x31e236+a22_0x2ccd('0x63');}console[a22_0x2ccd('0x44')](a22_0x2ccd('0x65'));console[a22_0x2ccd('0x44')](_0x50f00f);console[a22_0x2ccd('0x44')](_0x463b15);console[a22_0x2ccd('0x44')](_0x100977);console[a22_0x2ccd('0x44')](_0x1a1ca3);console['log'](_0x1791d2);console[a22_0x2ccd('0x44')](_0x31e236);console[a22_0x2ccd('0x44')]('**********+');if(fsExtra[a22_0x2ccd('0x55')](this['tempFolder']+_0x100977)){this[a22_0x2ccd('0x66')](this[a22_0x2ccd('0x18')]+_0x100977)[a22_0x2ccd('0x43')](function(_0x171bb8){if(_0x171bb8){this[a22_0x2ccd('0x51')]++;}else{this[a22_0x2ccd('0x1f')]=!![];}this[a22_0x2ccd('0x67')]();}[a22_0x2ccd('0x3b')](this));}else if(fsExtra[a22_0x2ccd('0x55')](this[a22_0x2ccd('0x19')]+_0x100977)){this[a22_0x2ccd('0x66')](this[a22_0x2ccd('0x19')]+_0x100977)['then'](function(_0x188e87){if(_0x188e87){fsExtra[a22_0x2ccd('0x68')](this['filesFolder']+_0x100977,this['tempFolder']+_0x100977);this[a22_0x2ccd('0x51')]++;}else{this['playlistChanged']=!![];}this['download']();}[a22_0x2ccd('0x3b')](this));}else{console[a22_0x2ccd('0x44')](a22_0x2ccd('0x69')+_0x1a1ca3);this[a22_0x2ccd('0x1f')]=!![];if(_0x463b15==a22_0x2ccd('0x62')){this[a22_0x2ccd('0x6a')](_0x50f00f);}else{this['downloader'](_0x1a1ca3,_0x100977,_0x463b15);}}}['checkVideo'](_0x3de43c){return __awaiter(this,void 0x0,void 0x0,function*(){console[a22_0x2ccd('0x44')]('videoFile:\x20'+_0x3de43c);const _0x375e0e=yield mediainfo(_0x3de43c)['catch'](_0x3111d5=>{console[a22_0x2ccd('0x44')](_0x3111d5);fsExtra['removeSync'](_0x3de43c);return![];});const _0x552447=_0x375e0e[a22_0x2ccd('0x6b')][a22_0x2ccd('0x6c')][a22_0x2ccd('0x53')]>0x1&&_0x375e0e['media'][a22_0x2ccd('0x6c')][0x1][a22_0x2ccd('0x6d')]==a22_0x2ccd('0x6e');if(!_0x552447){fsExtra[a22_0x2ccd('0x56')](_0x3de43c);}console[a22_0x2ccd('0x44')](a22_0x2ccd('0x6f')+_0x552447);return _0x552447;});}[a22_0x2ccd('0x70')](_0x3b6eaf,_0x118045,_0x38f00a){const _0x32588e=new Downloader();console[a22_0x2ccd('0x44')](_0x3b6eaf);console[a22_0x2ccd('0x44')](_0x118045);console[a22_0x2ccd('0x44')](_0x38f00a);const _0x1dbe39=_0x32588e[a22_0x2ccd('0x67')](_0x3b6eaf,this[a22_0x2ccd('0x18')]+_0x118045);urlExists(_0x3b6eaf,function(_0x1ecb5a,_0x1cb5d5){if(_0x1cb5d5){if(this[a22_0x2ccd('0x21')]['includes'](this[a22_0x2ccd('0x51')])){const _0x1193ec=this[a22_0x2ccd('0x21')][a22_0x2ccd('0x71')](this[a22_0x2ccd('0x51')]);if(_0x1193ec>-0x1){this[a22_0x2ccd('0x21')][a22_0x2ccd('0x72')](_0x1193ec,0x1);}}console[a22_0x2ccd('0x44')](a22_0x2ccd('0x73')+_0x3b6eaf);_0x1dbe39[a22_0x2ccd('0x74')]();}else{if(!this['failDownloadFiles']['includes'](this[a22_0x2ccd('0x51')])){this['failDownloadFiles'][a22_0x2ccd('0x75')](this[a22_0x2ccd('0x51')]);}console['log'](a22_0x2ccd('0x76')+_0x3b6eaf);this[a22_0x2ccd('0x51')]++;this[a22_0x2ccd('0x67')]();}}[a22_0x2ccd('0x3b')](this));_0x1dbe39['on']('start',function(_0x1dbe39){console['log'](a22_0x2ccd('0x77')+_0x3b6eaf);});_0x1dbe39['on'](a22_0x2ccd('0x78'),function(_0x1dbe39){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x79'));this[a22_0x2ccd('0x67')]();}[a22_0x2ccd('0x3b')](this));_0x1dbe39['on']('end',function(_0x1dbe39){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x7a'));console[a22_0x2ccd('0x44')](a22_0x2ccd('0x7b')+_0x118045);console[a22_0x2ccd('0x44')]('mediaType:\x20'+_0x38f00a);this[a22_0x2ccd('0x66')](this['tempFolder']+_0x118045)[a22_0x2ccd('0x43')](function(_0x1a39dd){if(_0x1a39dd){this[a22_0x2ccd('0x51')]++;}this[a22_0x2ccd('0x67')]();}[a22_0x2ccd('0x3b')](this));}[a22_0x2ccd('0x3b')](this));_0x1dbe39['on']('stopped',function(_0x1dbe39){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x7c'));});_0x1dbe39['on'](a22_0x2ccd('0x7d'),function(_0x1dbe39){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x7d'));});_0x1dbe39['on']('retry',function(_0x1dbe39){console['log']('retry');});}['downloadHTTPFile'](_0x372807,_0x4ed58c,_0x71fc43,_0x179b83){console['log']('downloadHTTPFile');console[a22_0x2ccd('0x44')](_0x372807);const _0x471b34=!![];let _0x3280c7=0x0;const _0x37ff77='';console['log'](a22_0x2ccd('0x7e')+_0x372807+a22_0x2ccd('0x7f')+_0x4ed58c);if(_0x3280c7){if(_0x3280c7>0x5){_0x179b83('Max\x20redirects\x20reached',_0x372807,_0x71fc43,null);return;}}else{_0x3280c7=0x0;}const _0x2307da=this[a22_0x2ccd('0x18')]+_0x4ed58c;let _0x57841e;if(_0x179b83===undefined){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x80')+_0x372807+a22_0x2ccd('0x7f')+_0x2307da);_0x179b83=function(_0x3ec562,_0x57abfa){console[a22_0x2ccd('0x44')]('downloadFile\x20callback\x20result\x20undefined:\x20',_0x3ec562,_0x57abfa);};}http[a22_0x2ccd('0x81')][a22_0x2ccd('0x82')]=0x64;const _0x140e93={'host':url[a22_0x2ccd('0x2a')](_0x372807)['host'],'port':0x50,'path':url[a22_0x2ccd('0x2a')](_0x372807)['pathname'],'agent':![]};const _0x7abfc=http[a22_0x2ccd('0x83')](_0x140e93,function(_0x19a2ee){let _0x583b1f=0x0;let _0x58aa4c=0x0;function _0x42fbc4(){if(_0x583b1f===undefined){console['log'](_0x4ed58c+a22_0x2ccd('0x84')+_0x58aa4c+'/'+'?');}const _0x3a3f79=_0x58aa4c/_0x583b1f*0x64;console[a22_0x2ccd('0x44')](_0x4ed58c+a22_0x2ccd('0x85')+_0x3a3f79+'%\x09'+_0x58aa4c+'/'+_0x583b1f);}console[a22_0x2ccd('0x44')](_0x4ed58c+'\x20'+_0x19a2ee[a22_0x2ccd('0x86')]);switch(_0x19a2ee[a22_0x2ccd('0x86')]){case 0xc8:_0x583b1f=_0x19a2ee[a22_0x2ccd('0x87')][a22_0x2ccd('0x88')]||_0x37ff77;fs[a22_0x2ccd('0x89')](_0x2307da,function(_0x111b93,_0x4f44c9){if(!_0x111b93){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x8a')+_0x2307da);if(_0x4f44c9[a22_0x2ccd('0x8b')]==_0x583b1f){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x8c')+_0x583b1f+')');console[a22_0x2ccd('0x44')](a22_0x2ccd('0x8d'));}else{console[a22_0x2ccd('0x44')](a22_0x2ccd('0x8e')+_0x4f44c9[a22_0x2ccd('0x8b')]+a22_0x2ccd('0x8f')+_0x583b1f+')');}}_0x57841e=fs['createWriteStream'](_0x2307da);_0x19a2ee[a22_0x2ccd('0x90')](_0x57841e);_0x19a2ee['on'](a22_0x2ccd('0x91'),function(_0x1bf265){_0x58aa4c+=_0x1bf265['length'];_0x42fbc4();});_0x7abfc['on']('error',function(_0x111b93){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x92'));console['log'](_0x111b93);});_0x57841e['on'](a22_0x2ccd('0x93'),function(){console['log'](a22_0x2ccd('0x94')+_0x372807+a22_0x2ccd('0x7f')+_0x4ed58c);_0x179b83(null,_0x4ed58c,_0x71fc43,_0x4ed58c);}[a22_0x2ccd('0x3b')](this));});break;case 0x12e:const _0x5cd643=_0x19a2ee[a22_0x2ccd('0x87')]['location'];console[a22_0x2ccd('0x44')](a22_0x2ccd('0x95')+_0x372807+'\x20to\x20'+_0x5cd643);if(_0x3280c7<0x5){this[a22_0x2ccd('0x96')](_0x5cd643,_0x4ed58c,_0x179b83,_0x3280c7++);}else{console[a22_0x2ccd('0x78')](a22_0x2ccd('0x97')+_0x372807+'.');_0x179b83(a22_0x2ccd('0x98'),null,null,null);}return;case 0x194:console[a22_0x2ccd('0x44')](a22_0x2ccd('0x99')+_0x372807);default:console[a22_0x2ccd('0x44')]('Problem\x20downloading\x20'+_0x372807+'\x20STATUS:\x20'+_0x19a2ee['statusCode']);_0x7abfc[a22_0x2ccd('0x9a')]();_0x179b83(_0x19a2ee[a22_0x2ccd('0x86')],null,null,null);return;}})['on'](a22_0x2ccd('0x78'),function(_0x304b91){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x9b')+_0x372807+'\x20'+_0x304b91[a22_0x2ccd('0x9c')]);_0x179b83(_0x304b91,null,null,null);});}[a22_0x2ccd('0x9d')](_0x4e8d67,_0x19d635,_0x214e43,_0x29130e){console[a22_0x2ccd('0x44')](a22_0x2ccd('0x9d'));console[a22_0x2ccd('0x44')](_0x4e8d67);console[a22_0x2ccd('0x44')](_0x19d635);console['log'](_0x214e43);console[a22_0x2ccd('0x44')](_0x29130e);if(_0x214e43==a22_0x2ccd('0x64')){const _0x33e556=this[a22_0x2ccd('0x20')][this[a22_0x2ccd('0x51')]]['duration']!=null?this[a22_0x2ccd('0x20')][this[a22_0x2ccd('0x51')]][a22_0x2ccd('0x9e')]:0x1e;this[a22_0x2ccd('0x9f')](_0x29130e,_0x33e556);}else if(_0x214e43==a22_0x2ccd('0xa0')){if(_0x4e8d67==null&&_0x19d635!=''){this[a22_0x2ccd('0x51')]++;}this[a22_0x2ccd('0x67')]();}console[a22_0x2ccd('0x44')](this['currentFile']);}[a22_0x2ccd('0xa1')](_0x27a0f2,_0x6ab79d,_0x24dab2){progress(request(_0x27a0f2),{})['on'](a22_0x2ccd('0xa2'),function(_0x183e9f){console['log'](_0x183e9f);})['on'](a22_0x2ccd('0x78'),function(_0x215848){console[a22_0x2ccd('0x44')]('Error\x20downloading\x20file');this['download']();})['on'](a22_0x2ccd('0x7a'),function(){console[a22_0x2ccd('0x44')]('Downloaded:\x20'+_0x6ab79d);console[a22_0x2ccd('0x44')](a22_0x2ccd('0xa3')+_0x24dab2);if(_0x24dab2=='image'){const _0x277a0f=this[a22_0x2ccd('0x20')][this[a22_0x2ccd('0x51')]][a22_0x2ccd('0x9e')]!=null?this['downloadFiles'][this[a22_0x2ccd('0x51')]][a22_0x2ccd('0x9e')]:0x1e;this[a22_0x2ccd('0x9f')](_0x6ab79d,_0x277a0f);}else if(_0x24dab2==a22_0x2ccd('0xa0')){this[a22_0x2ccd('0x51')]++;this['download']();}}[a22_0x2ccd('0x3b')](this))[a22_0x2ccd('0x90')](fs[a22_0x2ccd('0xa4')](this[a22_0x2ccd('0x18')]+_0x6ab79d));}['createImageVideo'](_0x3c7813,_0x1c1203=0x1e){const _0x523f11=this[a22_0x2ccd('0x18')]+_0x3c7813;console['log'](_0x523f11);console['log'](_0x3c7813);const _0xc7909f=_0x3c7813['split']('.')[a22_0x2ccd('0x61')](0x0,-0x1)['join']('.');const _0x5c3969=a22_0x2ccd('0xa5');const _0x50a8cb=['-y','-r',a22_0x2ccd('0xa6'),a22_0x2ccd('0xa7'),'1',a22_0x2ccd('0xa8'),a22_0x2ccd('0xa9'),'-i',_0x523f11,'-t',String(_0x1c1203),'-c:v',a22_0x2ccd('0xaa'),'-pix_fmt',a22_0x2ccd('0xab'),'-r','25','-vf','scale=1920:1080',this['tempFolder']+_0xc7909f+a22_0x2ccd('0x63')];const _0x50e8e2=spawn(_0x5c3969,_0x50a8cb);_0x50e8e2[a22_0x2ccd('0xac')]['on']('data',function(_0x3045d6){console[a22_0x2ccd('0x44')](a22_0x2ccd('0xad')+_0x523f11);});_0x50e8e2[a22_0x2ccd('0xae')]['on'](a22_0x2ccd('0x91'),function(_0x35c8e7){console[a22_0x2ccd('0x44')](a22_0x2ccd('0xaf')+_0x35c8e7);}[a22_0x2ccd('0x3b')](this));_0x50e8e2['on'](a22_0x2ccd('0xb0'),function(){console[a22_0x2ccd('0x44')](a22_0x2ccd('0xb1'));this[a22_0x2ccd('0x51')]++;this[a22_0x2ccd('0x67')]();}['bind'](this));}[a22_0x2ccd('0x6a')](_0x1bc3d3){const _0x5adbf3=this[a22_0x2ccd('0x18')]+'/'+_0x1bc3d3+'.mp4';const _0xa83ff9=youtubedl(a22_0x2ccd('0xb2')+_0x1bc3d3,['--format=18'],{'cwd':__dirname});_0xa83ff9['on'](a22_0x2ccd('0xb3'),function(_0x116089){console[a22_0x2ccd('0x44')](a22_0x2ccd('0xb4'));console[a22_0x2ccd('0x44')](a22_0x2ccd('0xb5')+_0x116089['_filename']);console[a22_0x2ccd('0x44')]('size:\x20'+_0x116089[a22_0x2ccd('0x8b')]);});_0xa83ff9['on'](a22_0x2ccd('0xb6'),function complete(_0x35b802){'use strict';console[a22_0x2ccd('0x44')](a22_0x2ccd('0xb5')+_0x35b802[a22_0x2ccd('0xb7')]+a22_0x2ccd('0xb8'));});_0xa83ff9['on'](a22_0x2ccd('0x7a'),function(){console[a22_0x2ccd('0x44')](a22_0x2ccd('0xb9'));this['checkVideo'](_0x5adbf3)[a22_0x2ccd('0x43')](function(_0x566981){if(_0x566981){this[a22_0x2ccd('0x51')]++;}this['download']();}['bind'](this));}['bind'](this));_0xa83ff9[a22_0x2ccd('0x90')](fs['createWriteStream'](_0x5adbf3));}[a22_0x2ccd('0x5a')](){console[a22_0x2ccd('0x44')](a22_0x2ccd('0xba'));if(this[a22_0x2ccd('0x1f')]){if(this[a22_0x2ccd('0x21')][a22_0x2ccd('0x53')]==0x0){fs[a22_0x2ccd('0x45')](this[a22_0x2ccd('0x1b')],JSON[a22_0x2ccd('0x3e')](this['newPlayList']));let _0x3bbf8c=a22_0x2ccd('0xbb')+'\x0d\x0a'+a22_0x2ccd('0xbc')+'\x0d\x0a';for(const _0xdd345e in this[a22_0x2ccd('0x20')]){const _0x1f9b36=this[a22_0x2ccd('0x20')][_0xdd345e][a22_0x2ccd('0x5b')];const _0x3e454b=this[a22_0x2ccd('0x20')][_0xdd345e]['media_type'];const _0x301427=_0x1f9b36[a22_0x2ccd('0x5d')](_0x1f9b36['lastIndexOf']('/')+0x1);let _0x3b3829=_0x301427[a22_0x2ccd('0x5f')]('.')[a22_0x2ccd('0x61')](0x0,-0x1)[a22_0x2ccd('0x60')]('.');if(_0x3e454b==a22_0x2ccd('0x62')){_0x3b3829=_0x1f9b36;}_0x3bbf8c+=a22_0x2ccd('0xbd')+_0x3b3829+a22_0x2ccd('0x63')+'\x0d\x0a';}fsExtra[a22_0x2ccd('0x54')](this['filesFolder']);fsExtra[a22_0x2ccd('0x68')](this[a22_0x2ccd('0x18')],this[a22_0x2ccd('0x19')]);fsExtra[a22_0x2ccd('0x45')](this['m3uFile'],_0x3bbf8c);fsExtra[a22_0x2ccd('0x54')](this['tempFolder']);console['log'](a22_0x2ccd('0xbe'));this[a22_0x2ccd('0xbf')]();}else{console[a22_0x2ccd('0x44')](a22_0x2ccd('0xc0'));this[a22_0x2ccd('0x51')]=0x0;setTimeout(function(){this[a22_0x2ccd('0x67')]();}['bind'](this),0x1388);}}else{console[a22_0x2ccd('0x44')](a22_0x2ccd('0xc1'));}}[a22_0x2ccd('0xbf')](){this['jsonrpcClient'](a22_0x2ccd('0xc2'),{'playlistid':0x1},function(_0x3de563){console[a22_0x2ccd('0x44')]('Playlist.Cleared');console[a22_0x2ccd('0x44')](_0x3de563);this[a22_0x2ccd('0xc3')](a22_0x2ccd('0xc4'),{'item':{'file':a22_0x2ccd('0xc5')},'playlistid':0x1},function(_0x3de563){console['log']('Playlist.Added');console[a22_0x2ccd('0x44')](_0x3de563);this[a22_0x2ccd('0xc3')](a22_0x2ccd('0xc6'),{'item':{'playlistid':0x1,'position':0x0}},function(_0x3de563){console[a22_0x2ccd('0x44')](a22_0x2ccd('0xc7'));console[a22_0x2ccd('0x44')](_0x3de563);if(this[a22_0x2ccd('0x27')]){this[a22_0x2ccd('0x27')]=![];exec('kodi-send\x20--action=\x22Quit()\x22',function(_0x2399ca){console[a22_0x2ccd('0x44')](_0x2399ca);});}}[a22_0x2ccd('0x3b')](this));}[a22_0x2ccd('0x3b')](this));}[a22_0x2ccd('0x3b')](this));}[a22_0x2ccd('0xc8')](){exec(a22_0x2ccd('0xc9'),function(_0x39b0ed){console[a22_0x2ccd('0x44')](_0x39b0ed);});}[a22_0x2ccd('0xca')](){const _0x3b7ee2=format(this[a22_0x2ccd('0xcb')],this[a22_0x2ccd('0x2c')]);console[a22_0x2ccd('0x44')](_0x3b7ee2);request({'url':_0x3b7ee2,'json':!![]},function(_0x1818c5,_0x3d25a5,_0xd857ce){if(_0xd857ce[a22_0x2ccd('0x53')]>0x0){const _0x2a8400=_0xd857ce[0x0];const _0x4fe4f5=_0x2a8400['rss'];const _0x2c2932=_0x2a8400['header_active']==0x1;this[a22_0x2ccd('0xcc')](_0x4fe4f5);this[a22_0x2ccd('0xcd')](_0x2c2932);}console[a22_0x2ccd('0x44')](_0xd857ce);}[a22_0x2ccd('0x3b')](this));}[a22_0x2ccd('0xcc')](_0x3cb3df){const _0x2c7960=_0x3cb3df!=null&&_0x3cb3df!='';const _0x4efaf9=a22_0x2ccd('0xce');const _0x5764be=fsExtra[a22_0x2ccd('0x2b')](_0x4efaf9);console[a22_0x2ccd('0x44')](a22_0x2ccd('0xcf')+_0x5764be);const _0x2c8ffc=require(a22_0x2ccd('0xd0'));const _0x1b10c8=_0x2c8ffc['parseString'];_0x1b10c8(_0x5764be,function(_0x3fe8f1,_0x2a91c2){console[a22_0x2ccd('0x44')]('err:\x20%j',_0x3fe8f1);console[a22_0x2ccd('0x44')](a22_0x2ccd('0xd1'),_0x2a91c2);if(!_0x3cb3df||_0x3cb3df==null||_0x3cb3df==''){_0x3cb3df='none';}_0x2a91c2[a22_0x2ccd('0xd2')][a22_0x2ccd('0xd3')][0x0][a22_0x2ccd('0xd4')][0x0]['_']=_0x3cb3df;const _0x29a89b=new _0x2c8ffc[(a22_0x2ccd('0xd5'))]();const _0x38613b=_0x29a89b[a22_0x2ccd('0xd6')](_0x2a91c2);console[a22_0x2ccd('0x44')](a22_0x2ccd('0xd7'),_0x38613b);fsExtra[a22_0x2ccd('0x45')](_0x4efaf9,_0x38613b);});exec(a22_0x2ccd('0xd8'),function(_0x509c86){console[a22_0x2ccd('0x44')](_0x509c86);});this[a22_0x2ccd('0xc3')](a22_0x2ccd('0xd9'),{'setting':a22_0x2ccd('0xda'),'value':_0x2c7960},function(_0x540ad4){console[a22_0x2ccd('0x44')](a22_0x2ccd('0xdb'));console['log'](_0x540ad4);}[a22_0x2ccd('0x3b')](this));}['enableClock'](_0x1732f7){this[a22_0x2ccd('0xc3')](a22_0x2ccd('0xd9'),{'setting':a22_0x2ccd('0xdc'),'value':_0x1732f7},function(_0x20fbb4){console[a22_0x2ccd('0x44')]('enableClock:\x20');console['log'](_0x20fbb4);}[a22_0x2ccd('0x3b')](this));}[a22_0x2ccd('0xc3')](_0x14435f,_0x110b84,_0x15eace){const _0x596adf={'jsonrpc':a22_0x2ccd('0xdd'),'method':_0x14435f,'params':_0x110b84,'id':0x1};this[a22_0x2ccd('0x28')][a22_0x2ccd('0x4d')](this[a22_0x2ccd('0x23')]+a22_0x2ccd('0xde'),_0x596adf,![],{'user':this[a22_0x2ccd('0x25')],'pass':this[a22_0x2ccd('0x35')]})[a22_0x2ccd('0x43')](function(_0x3bb774){_0x15eace(_0x3bb774);})['catch'](function(_0x1d217c){});}}exports[a22_0x2ccd('0xdf')]=SyncPlaylistsService;