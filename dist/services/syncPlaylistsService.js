var a26_0x166c=['__esModule','../infrastructure/HttpClientService','./playerService','node-mediainfo','http','fs-extra','request-progress','spawn','child_process','exec','string-template','config.json','package.json','url-exists','node-kodi','tempFolder','mediaFolder','playlist.txt','m3uFile','filesFolder','lulo_playlist.m3u','currentFile','downloadFiles','failDownloadFiles','newPlayList','kodiHost','kodiUser','kodiPassword','.lulo123.','forceReload','httpClientService','playerService','PlayerService','init','config','parse','readFileSync','playerId','baseURL','env','WEB_SERVICE_URL','playListServiceURL','api/player_playlist.php?player_id={0}','checkDependencies','registerClient','loadMediaList','getStatus','bind','kodi','playlist','stringify','deviceUuid','context','http://restapi.lulo.run/player_devices/register','register\x20response:\x20','catch','log','writeFileSync','player','getCurrentlyPlayingVideo','item','label','reportStatus','reportStatus\x20playingItem:\x20','post','http://restapi.lulo.run/player_devices/report_status','reportStatusResponse','checkFolders','ensureDir','loadMediaList:\x20','playlistChanged','hasPlayListChanged','emptyDirSync','push','Total:\x20','length','download','reloadMediaList','existsSync','playListFile','removeSync','toString','\x20of\x20','path','media_type','lastIndexOf','slice','join','split','youtube_single','.mp4','image','**********+','checkVideo','copySync','Downloading:\x20','downloadYouTube','downloader','videoFile:\x20','media','track','@type','Video','indexOf','splice','downloading:\x20','start','includes','Error:\x20','error','error:\x20','end','mediaType:\x20','stopped','destroyed','retry','downloadHTTPFile','Attempting\x20to\x20download\x20','\x20to\x20','downloadFile\x20callback\x20result\x20undefined:\x20','globalAgent','maxSockets','pathname','get','\x20Progress:\x20unknown\x09','\x20Progress:\x20','statusCode','content-length','stat','Have\x20already\x20downloaded\x20','size','And\x20the\x20file\x20size\x20matches\x20(','Redownloading','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(',')\x20vs\x20New(','err:\x20','finish','Downloaded\x20','headers','location','Redirect\x20limit\x20encountered\x20for\x20','302','File\x20Not\x20Found\x20','Problem\x20downloading\x20','abort','message','downloadHTTPFileCallback','duration','createImageVideo','video','downloadRequestFile','Error\x20downloading\x20file','Downloaded:\x20','pipe','ffmpeg','1/2','-pattern_type','glob','libx264','-pix_fmt','yuv420p','-vf','stdout','data','stderr','stderr:\x20','finished\x20mp4\x20convert','http://www.youtube.com/watch?v=','youtubeURL:\x20','outFileName:\x20','--format=18','--no-check-certificate','info','Download\x20started','filename:\x20','\x20already\x20downloaded.','createWriteStream','finishProcess','Finishing','this.playListFile:\x20','#EXTCPlayListM3U::M3U','#EXTINF:0,luloPlayList','substring','m3uContent:\x20','copySync:\x20','writeFileSync:\x20','Playlist\x20incomplete,\x20retry.','No\x20playlist\x20changes.','refreshPlayer','jsonrpcClient','Playlist.Clear','Playlist.Cleared','Playlist.Add','Player.Open','Playlist.Opened','kodiCommandClient','reboot','sudo\x20/sbin/reboot\x20-f','updateSettings','playerServiceURL','rss','setRss','enableClock','turnOffTV','CECStandby()','turnOnTV','CECActivateSource()','err:\x20%j','result:\x20%j','rssfeeds','set','feed','Builder','buildObject','xml:\x20%j','RefreshRSS()','Settings.SetSettingValue','lookandfeel.enablerssfeeds','setRss:','videoplayer.usedisplayasclock','enableClock:\x20','kodi-send\x20--action=\x22','2.0','jsonrpcClient\x20data','jsonrpcClient\x20options','/jsonrpc','SyncPlaylistsService','__awaiter','next','done','value','then','defineProperty'];(function(_0x2746aa,_0x290947){var _0x4af4a4=function(_0xc829d5){while(--_0xc829d5){_0x2746aa['push'](_0x2746aa['shift']());}};_0x4af4a4(++_0x290947);}(a26_0x166c,0x1cc));var a26_0xc3e2=function(_0x5db683,_0x3e3211){_0x5db683=_0x5db683-0x0;var _0x58873f=a26_0x166c[_0x5db683];return _0x58873f;};'use strict';var __awaiter=this&&this[a26_0xc3e2('0x0')]||function(_0x234875,_0x2733a8,_0x485417,_0x2409ba){function _0x4b3b84(_0x363135){return _0x363135 instanceof _0x485417?_0x363135:new _0x485417(function(_0x33839c){_0x33839c(_0x363135);});}return new(_0x485417||(_0x485417=Promise))(function(_0x3638e3,_0x351d5a){function _0x3c59d7(_0x76c84c){try{_0x5e15ed(_0x2409ba[a26_0xc3e2('0x1')](_0x76c84c));}catch(_0xc885db){_0x351d5a(_0xc885db);}}function _0x4c113a(_0x46195c){try{_0x5e15ed(_0x2409ba['throw'](_0x46195c));}catch(_0x59d678){_0x351d5a(_0x59d678);}}function _0x5e15ed(_0x6fb50c){_0x6fb50c[a26_0xc3e2('0x2')]?_0x3638e3(_0x6fb50c[a26_0xc3e2('0x3')]):_0x4b3b84(_0x6fb50c['value'])[a26_0xc3e2('0x4')](_0x3c59d7,_0x4c113a);}_0x5e15ed((_0x2409ba=_0x2409ba['apply'](_0x234875,_0x2733a8||[]))[a26_0xc3e2('0x1')]());});};Object[a26_0xc3e2('0x5')](exports,a26_0xc3e2('0x6'),{'value':!![]});const HttpClientService_1=require(a26_0xc3e2('0x7'));const playerService_1=require(a26_0xc3e2('0x8'));const mediainfo=require(a26_0xc3e2('0x9'));const fs=require('fs');const url=require('url');const http=require(a26_0xc3e2('0xa'));const fsExtra=require(a26_0xc3e2('0xb'));const request=require('request');const progress=require(a26_0xc3e2('0xc'));const spawn=require('child_process')[a26_0xc3e2('0xd')];const exec=require(a26_0xc3e2('0xe'))[a26_0xc3e2('0xf')];const isImage=require('is-image');const format=require(a26_0xc3e2('0x10'));const os=require('os');const youtubedl=require('youtube-dl');const uuidv4=require('uuid/v4');const configFile=a26_0xc3e2('0x11');const contextFile=a26_0xc3e2('0x12');const urlExists=require(a26_0xc3e2('0x13'));const kodi_rpc=require(a26_0xc3e2('0x14'));const Downloader=require('mt-files-downloader');class SyncPlaylistsService{constructor(){this['mediaFolder']='media/';this[a26_0xc3e2('0x15')]=this[a26_0xc3e2('0x16')]+'temp/';this['filesFolder']=this[a26_0xc3e2('0x16')]+'files/';this['playListFile']=this[a26_0xc3e2('0x16')]+a26_0xc3e2('0x17');this[a26_0xc3e2('0x18')]=this[a26_0xc3e2('0x19')]+a26_0xc3e2('0x1a');this[a26_0xc3e2('0x1b')]=0x0;this['playlistChanged']=![];this[a26_0xc3e2('0x1c')]=[];this[a26_0xc3e2('0x1d')]=[];this[a26_0xc3e2('0x1e')]={};this[a26_0xc3e2('0x1f')]='http://localhost';this[a26_0xc3e2('0x20')]='lulo';this[a26_0xc3e2('0x21')]=a26_0xc3e2('0x22');this[a26_0xc3e2('0x23')]=![];this[a26_0xc3e2('0x24')]=new HttpClientService_1['HttpClientService']();this[a26_0xc3e2('0x25')]=new playerService_1[(a26_0xc3e2('0x26'))]();}[a26_0xc3e2('0x27')](){this[a26_0xc3e2('0x28')]=JSON[a26_0xc3e2('0x29')](fs[a26_0xc3e2('0x2a')](configFile));this['context']=JSON[a26_0xc3e2('0x29')](fs[a26_0xc3e2('0x2a')](contextFile));this[a26_0xc3e2('0x2b')]=this[a26_0xc3e2('0x28')][a26_0xc3e2('0x2b')];this[a26_0xc3e2('0x2c')]=process[a26_0xc3e2('0x2d')][a26_0xc3e2('0x2e')]+'deploy/';this[a26_0xc3e2('0x2f')]=this[a26_0xc3e2('0x2c')]+a26_0xc3e2('0x30');this['playerServiceURL']=this[a26_0xc3e2('0x2c')]+'api/player.php?player_id={0}';this['kodi']=new kodi_rpc({'url':this[a26_0xc3e2('0x1f')],'user':this['kodiUser'],'password':this[a26_0xc3e2('0x21')]});this[a26_0xc3e2('0x31')]();this[a26_0xc3e2('0x32')]();this['checkFolders']();this[a26_0xc3e2('0x33')]();this['updateSettings']();setInterval(function(){this[a26_0xc3e2('0x34')]();}['bind'](this),0x2710);setInterval(function(){this[a26_0xc3e2('0x32')]();}[a26_0xc3e2('0x35')](this),0x493e0);}[a26_0xc3e2('0x31')](){}[a26_0xc3e2('0x32')](){this[a26_0xc3e2('0x36')][a26_0xc3e2('0x37')]['getItems'](0x1)[a26_0xc3e2('0x4')](function(_0x549ad0){const _0x562695=JSON[a26_0xc3e2('0x38')](_0x549ad0);const _0x5995a6={'player_id':this[a26_0xc3e2('0x2b')],'device_uuid':this['config'][a26_0xc3e2('0x39')],'network_info':JSON['stringify'](os['networkInterfaces']()),'firmware_info':JSON['stringify'](this[a26_0xc3e2('0x3a')]['version']),'playlist':_0x562695,'playing_item':'','status':0x0};this[a26_0xc3e2('0x24')]['post'](a26_0xc3e2('0x3b'),_0x5995a6,![])[a26_0xc3e2('0x4')](function(_0x1f94e2){console['log'](a26_0xc3e2('0x3c')+Date());})[a26_0xc3e2('0x3d')](function(_0xa0b424){});console[a26_0xc3e2('0x3e')](_0x5995a6);}[a26_0xc3e2('0x35')](this));const _0xe0a138=this[a26_0xc3e2('0x28')]['deviceUuid'];if(!_0xe0a138||_0xe0a138==''){this[a26_0xc3e2('0x28')][a26_0xc3e2('0x39')]=uuidv4();this['config']={'deviceUuid':this[a26_0xc3e2('0x28')]['deviceUuid'],'playerId':this[a26_0xc3e2('0x28')][a26_0xc3e2('0x2b')]};fs[a26_0xc3e2('0x3f')](configFile,JSON[a26_0xc3e2('0x38')](this[a26_0xc3e2('0x28')]));}}[a26_0xc3e2('0x34')](){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x34'));this[a26_0xc3e2('0x36')][a26_0xc3e2('0x40')][a26_0xc3e2('0x41')]()[a26_0xc3e2('0x4')](function(_0x4241e5){const _0x33fd8f=_0x4241e5[a26_0xc3e2('0x42')][a26_0xc3e2('0x43')];this[a26_0xc3e2('0x44')](_0x33fd8f);}[a26_0xc3e2('0x35')](this))['catch'](function(_0x1fb92d){console[a26_0xc3e2('0x3e')](_0x1fb92d);this[a26_0xc3e2('0x44')](JSON[a26_0xc3e2('0x38')](_0x1fb92d));}['bind'](this));}['reportStatus'](_0x4dc4c1){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x45')+_0x4dc4c1);const _0x478b30={'player_id':this['playerId'],'device_uuid':this[a26_0xc3e2('0x28')][a26_0xc3e2('0x39')],'status':_0x4dc4c1!=''&&_0x4dc4c1!=null?0x1:0x0,'playing_item':_0x4dc4c1};this[a26_0xc3e2('0x24')][a26_0xc3e2('0x46')](a26_0xc3e2('0x47'),_0x478b30,![])[a26_0xc3e2('0x4')](function(_0x496f6d){console['log'](a26_0xc3e2('0x48'));})[a26_0xc3e2('0x3d')](function(_0xa475b5){});}[a26_0xc3e2('0x49')](){fsExtra[a26_0xc3e2('0x4a')](this[a26_0xc3e2('0x16')],_0x255f13=>{});fsExtra[a26_0xc3e2('0x4a')](this[a26_0xc3e2('0x15')],_0x591690=>{});fsExtra[a26_0xc3e2('0x4a')](this['filesFolder'],_0x479679=>{});}[a26_0xc3e2('0x33')](){const _0xbb0591=format(this['playListServiceURL'],this[a26_0xc3e2('0x2b')]);console[a26_0xc3e2('0x3e')](_0xbb0591);request({'url':_0xbb0591,'json':!![]},function(_0x2f97fc,_0x48b167,_0x78c934){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x4b'));this[a26_0xc3e2('0x1e')]=_0x78c934;this[a26_0xc3e2('0x4c')]=this[a26_0xc3e2('0x4d')]();fsExtra[a26_0xc3e2('0x4e')](this['tempFolder']);this[a26_0xc3e2('0x1c')]=[];this['failDownloadFiles']=[];this[a26_0xc3e2('0x1b')]=0x0;for(const _0x212171 in _0x78c934){this[a26_0xc3e2('0x1c')][a26_0xc3e2('0x4f')](_0x78c934[_0x212171]);}console['log'](a26_0xc3e2('0x50')+this['downloadFiles']['length']);if(this[a26_0xc3e2('0x1c')][a26_0xc3e2('0x51')]>0x0){this[a26_0xc3e2('0x52')]();}}[a26_0xc3e2('0x35')](this));}[a26_0xc3e2('0x53')](){this[a26_0xc3e2('0x23')]=!![];if(fsExtra[a26_0xc3e2('0x54')](this[a26_0xc3e2('0x15')])){fsExtra[a26_0xc3e2('0x4e')](this['tempFolder']);}if(fsExtra[a26_0xc3e2('0x54')](this[a26_0xc3e2('0x19')])){fsExtra[a26_0xc3e2('0x4e')](this[a26_0xc3e2('0x19')]);}if(!fsExtra[a26_0xc3e2('0x54')](this[a26_0xc3e2('0x55')])){fsExtra[a26_0xc3e2('0x56')](this[a26_0xc3e2('0x55')]);}if(!fsExtra['existsSync'](this['m3uFile'])){fsExtra[a26_0xc3e2('0x56')](this[a26_0xc3e2('0x18')]);}this[a26_0xc3e2('0x33')]();}[a26_0xc3e2('0x4d')](){const _0x2d3755=JSON['stringify'](this[a26_0xc3e2('0x1e')]);try{if(!fsExtra['existsSync'](this[a26_0xc3e2('0x55')])){return!![];}else{const _0x5dc3bb=fsExtra[a26_0xc3e2('0x2a')](this['playListFile'])[a26_0xc3e2('0x57')]();if(_0x5dc3bb!=_0x2d3755){return!![];}}}catch(_0x7f60d2){console[a26_0xc3e2('0x3e')](_0x7f60d2);}return![];}[a26_0xc3e2('0x52')](){console[a26_0xc3e2('0x3e')]('this.currentFile:\x20'+this[a26_0xc3e2('0x1b')]+a26_0xc3e2('0x58')+this[a26_0xc3e2('0x1c')][a26_0xc3e2('0x51')]);if(this[a26_0xc3e2('0x1b')]>=this[a26_0xc3e2('0x1c')][a26_0xc3e2('0x51')]){this['finishProcess']();return;}const _0x676d70=String(this['downloadFiles'][this[a26_0xc3e2('0x1b')]][a26_0xc3e2('0x59')]);const _0x544c77=this[a26_0xc3e2('0x1c')][this[a26_0xc3e2('0x1b')]][a26_0xc3e2('0x5a')];let _0x2d0380=_0x676d70['substring'](_0x676d70[a26_0xc3e2('0x5b')]('/')+0x1);const _0x5a3339=_0x2d0380['split']('.')[a26_0xc3e2('0x5c')](0x0,-0x1)[a26_0xc3e2('0x5d')]('.');let _0x56b143=this['baseURL']+_0x676d70;const _0x2df087=_0x56b143[a26_0xc3e2('0x5e')]('.')[a26_0xc3e2('0x5c')](0x0,-0x1)[a26_0xc3e2('0x5d')]('.');if(_0x544c77==a26_0xc3e2('0x5f')){_0x2d0380=_0x2d0380+a26_0xc3e2('0x60');}else if(_0x544c77==a26_0xc3e2('0x61')){_0x2d0380=_0x5a3339+a26_0xc3e2('0x60');_0x56b143=_0x2df087+a26_0xc3e2('0x60');}console['log'](a26_0xc3e2('0x62'));console[a26_0xc3e2('0x3e')](_0x676d70);console[a26_0xc3e2('0x3e')](_0x544c77);console[a26_0xc3e2('0x3e')](_0x2d0380);console[a26_0xc3e2('0x3e')](_0x56b143);console[a26_0xc3e2('0x3e')](_0x5a3339);console[a26_0xc3e2('0x3e')](_0x2df087);console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x62'));if(fsExtra[a26_0xc3e2('0x54')](this['tempFolder']+_0x2d0380)){this[a26_0xc3e2('0x63')](this[a26_0xc3e2('0x15')]+_0x2d0380)['then'](function(_0x29cdbd){if(_0x29cdbd){this[a26_0xc3e2('0x1b')]++;}else{this[a26_0xc3e2('0x4c')]=!![];}this[a26_0xc3e2('0x52')]();}['bind'](this));}else if(fsExtra[a26_0xc3e2('0x54')](this['filesFolder']+_0x2d0380)){this[a26_0xc3e2('0x63')](this['filesFolder']+_0x2d0380)[a26_0xc3e2('0x4')](function(_0x385402){if(_0x385402){fsExtra[a26_0xc3e2('0x64')](this[a26_0xc3e2('0x19')]+_0x2d0380,this['tempFolder']+_0x2d0380);this[a26_0xc3e2('0x1b')]++;}else{this[a26_0xc3e2('0x4c')]=!![];}this['download']();}[a26_0xc3e2('0x35')](this));}else{console['log'](a26_0xc3e2('0x65')+_0x56b143);this['playlistChanged']=!![];if(_0x544c77==a26_0xc3e2('0x5f')){this[a26_0xc3e2('0x66')](_0x676d70);}else{this[a26_0xc3e2('0x67')](_0x56b143,_0x2d0380,_0x544c77);}}}[a26_0xc3e2('0x63')](_0x399479){return __awaiter(this,void 0x0,void 0x0,function*(){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x68')+_0x399479);const _0x3881c2=yield mediainfo(_0x399479)[a26_0xc3e2('0x3d')](_0x3e465c=>{console[a26_0xc3e2('0x3e')](_0x3e465c);fsExtra[a26_0xc3e2('0x56')](_0x399479);return![];});const _0x57c5b3=_0x3881c2[a26_0xc3e2('0x69')][a26_0xc3e2('0x6a')][a26_0xc3e2('0x51')]>0x1&&_0x3881c2[a26_0xc3e2('0x69')][a26_0xc3e2('0x6a')][0x1][a26_0xc3e2('0x6b')]==a26_0xc3e2('0x6c');if(!_0x57c5b3){fsExtra[a26_0xc3e2('0x56')](_0x399479);}console[a26_0xc3e2('0x3e')]('mediainfo\x20check:'+_0x57c5b3);return _0x57c5b3;});}[a26_0xc3e2('0x67')](_0x5ba962,_0x13e3c5,_0x5c7a88){const _0x5f4b65=new Downloader();console['log'](_0x5ba962);console[a26_0xc3e2('0x3e')](_0x13e3c5);console[a26_0xc3e2('0x3e')](_0x5c7a88);const _0x30a0a9=_0x5f4b65['download'](_0x5ba962,this['tempFolder']+_0x13e3c5);urlExists(_0x5ba962,function(_0x4b3768,_0x416c98){if(_0x416c98){if(this[a26_0xc3e2('0x1d')]['includes'](this[a26_0xc3e2('0x1b')])){const _0x28b154=this['failDownloadFiles'][a26_0xc3e2('0x6d')](this[a26_0xc3e2('0x1b')]);if(_0x28b154>-0x1){this[a26_0xc3e2('0x1d')][a26_0xc3e2('0x6e')](_0x28b154,0x1);}}console['log'](a26_0xc3e2('0x6f')+_0x5ba962);_0x30a0a9[a26_0xc3e2('0x70')]();}else{if(!this[a26_0xc3e2('0x1d')][a26_0xc3e2('0x71')](this[a26_0xc3e2('0x1b')])){this[a26_0xc3e2('0x1d')]['push'](this['currentFile']);}console['log'](a26_0xc3e2('0x72')+_0x5ba962);this['currentFile']++;this[a26_0xc3e2('0x52')]();}}['bind'](this));_0x30a0a9['on'](a26_0xc3e2('0x70'),function(_0x30a0a9){console[a26_0xc3e2('0x3e')]('start:\x20'+_0x5ba962);});_0x30a0a9['on'](a26_0xc3e2('0x73'),function(_0x30a0a9){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x74'));this[a26_0xc3e2('0x52')]();}[a26_0xc3e2('0x35')](this));_0x30a0a9['on']('end',function(_0x30a0a9){console['log'](a26_0xc3e2('0x75'));console['log']('Downloaded:\x20'+_0x13e3c5);console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x76')+_0x5c7a88);this[a26_0xc3e2('0x63')](this['tempFolder']+_0x13e3c5)[a26_0xc3e2('0x4')](function(_0x3c4846){if(_0x3c4846){this['currentFile']++;}this[a26_0xc3e2('0x52')]();}[a26_0xc3e2('0x35')](this));}[a26_0xc3e2('0x35')](this));_0x30a0a9['on'](a26_0xc3e2('0x77'),function(_0x30a0a9){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x77'));});_0x30a0a9['on'](a26_0xc3e2('0x78'),function(_0x30a0a9){console['log']('destroyed');});_0x30a0a9['on'](a26_0xc3e2('0x79'),function(_0x30a0a9){console[a26_0xc3e2('0x3e')]('retry');});}['downloadHTTPFile'](_0x53ba55,_0x1d8694,_0x4c6704,_0x52ba42){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x7a'));console['log'](_0x53ba55);const _0x5acc48=!![];let _0x5ebe02=0x0;const _0x2da87e='';console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x7b')+_0x53ba55+'\x20to\x20'+_0x1d8694);if(_0x5ebe02){if(_0x5ebe02>0x5){_0x52ba42('Max\x20redirects\x20reached',_0x53ba55,_0x4c6704,null);return;}}else{_0x5ebe02=0x0;}const _0x515734=this[a26_0xc3e2('0x15')]+_0x1d8694;let _0x207e2f;if(_0x52ba42===undefined){console['log']('WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20'+_0x53ba55+a26_0xc3e2('0x7c')+_0x515734);_0x52ba42=function(_0x427eb3,_0x314473){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x7d'),_0x427eb3,_0x314473);};}http[a26_0xc3e2('0x7e')][a26_0xc3e2('0x7f')]=0x64;const _0x184fb6={'host':url[a26_0xc3e2('0x29')](_0x53ba55)['host'],'port':0x50,'path':url['parse'](_0x53ba55)[a26_0xc3e2('0x80')],'agent':![]};const _0x2cc619=http[a26_0xc3e2('0x81')](_0x184fb6,function(_0xb0e718){let _0x5e1db6=0x0;let _0x1ebb17=0x0;function _0x7b3bde(){if(_0x5e1db6===undefined){console['log'](_0x1d8694+a26_0xc3e2('0x82')+_0x1ebb17+'/'+'?');}const _0xa1ad9=_0x1ebb17/_0x5e1db6*0x64;console['log'](_0x1d8694+a26_0xc3e2('0x83')+_0xa1ad9+'%\x09'+_0x1ebb17+'/'+_0x5e1db6);}console[a26_0xc3e2('0x3e')](_0x1d8694+'\x20'+_0xb0e718['statusCode']);switch(_0xb0e718[a26_0xc3e2('0x84')]){case 0xc8:_0x5e1db6=_0xb0e718['headers'][a26_0xc3e2('0x85')]||_0x2da87e;fs[a26_0xc3e2('0x86')](_0x515734,function(_0x55f956,_0x4e65ce){if(!_0x55f956){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x87')+_0x515734);if(_0x4e65ce[a26_0xc3e2('0x88')]==_0x5e1db6){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x89')+_0x5e1db6+')');console['log'](a26_0xc3e2('0x8a'));}else{console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x8b')+_0x4e65ce['size']+a26_0xc3e2('0x8c')+_0x5e1db6+')');}}_0x207e2f=fs['createWriteStream'](_0x515734);_0xb0e718['pipe'](_0x207e2f);_0xb0e718['on']('data',function(_0x14eda8){_0x1ebb17+=_0x14eda8[a26_0xc3e2('0x51')];_0x7b3bde();});_0x2cc619['on'](a26_0xc3e2('0x73'),function(_0x55f956){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x8d'));console[a26_0xc3e2('0x3e')](_0x55f956);});_0x207e2f['on'](a26_0xc3e2('0x8e'),function(){console['log'](a26_0xc3e2('0x8f')+_0x53ba55+'\x20to\x20'+_0x1d8694);_0x52ba42(null,_0x1d8694,_0x4c6704,_0x1d8694);}['bind'](this));});break;case 0x12e:const _0x1f10f8=_0xb0e718[a26_0xc3e2('0x90')][a26_0xc3e2('0x91')];console[a26_0xc3e2('0x3e')]('Redirect\x20'+_0x53ba55+a26_0xc3e2('0x7c')+_0x1f10f8);if(_0x5ebe02<0x5){this[a26_0xc3e2('0x7a')](_0x1f10f8,_0x1d8694,_0x52ba42,_0x5ebe02++);}else{console[a26_0xc3e2('0x73')](a26_0xc3e2('0x92')+_0x53ba55+'.');_0x52ba42(a26_0xc3e2('0x93'),null,null,null);}return;case 0x194:console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x94')+_0x53ba55);default:console['log'](a26_0xc3e2('0x95')+_0x53ba55+'\x20STATUS:\x20'+_0xb0e718[a26_0xc3e2('0x84')]);_0x2cc619[a26_0xc3e2('0x96')]();_0x52ba42(_0xb0e718[a26_0xc3e2('0x84')],null,null,null);return;}})['on'](a26_0xc3e2('0x73'),function(_0x3a38a2){console['log']('Error\x20Downloading:\x20'+_0x53ba55+'\x20'+_0x3a38a2[a26_0xc3e2('0x97')]);_0x52ba42(_0x3a38a2,null,null,null);});}[a26_0xc3e2('0x98')](_0x226a5d,_0x4a36f5,_0x209ebf,_0x2b9465){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x98'));console[a26_0xc3e2('0x3e')](_0x226a5d);console[a26_0xc3e2('0x3e')](_0x4a36f5);console['log'](_0x209ebf);console[a26_0xc3e2('0x3e')](_0x2b9465);if(_0x209ebf==a26_0xc3e2('0x61')){const _0x462626=this[a26_0xc3e2('0x1c')][this['currentFile']][a26_0xc3e2('0x99')]!=null?this[a26_0xc3e2('0x1c')][this[a26_0xc3e2('0x1b')]][a26_0xc3e2('0x99')]:0x1e;this[a26_0xc3e2('0x9a')](_0x2b9465,_0x462626);}else if(_0x209ebf==a26_0xc3e2('0x9b')){if(_0x226a5d==null&&_0x4a36f5!=''){this[a26_0xc3e2('0x1b')]++;}this[a26_0xc3e2('0x52')]();}console[a26_0xc3e2('0x3e')](this[a26_0xc3e2('0x1b')]);}[a26_0xc3e2('0x9c')](_0x15f08c,_0x256e0f,_0x1998a7){progress(request(_0x15f08c),{})['on']('progress',function(_0x243f9d){console[a26_0xc3e2('0x3e')](_0x243f9d);})['on'](a26_0xc3e2('0x73'),function(_0x5ea6c9){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x9d'));this[a26_0xc3e2('0x52')]();})['on'](a26_0xc3e2('0x75'),function(){console['log'](a26_0xc3e2('0x9e')+_0x256e0f);console[a26_0xc3e2('0x3e')](a26_0xc3e2('0x76')+_0x1998a7);if(_0x1998a7=='image'){const _0x54dc9e=this[a26_0xc3e2('0x1c')][this[a26_0xc3e2('0x1b')]]['duration']!=null?this[a26_0xc3e2('0x1c')][this[a26_0xc3e2('0x1b')]][a26_0xc3e2('0x99')]:0x1e;this['createImageVideo'](_0x256e0f,_0x54dc9e);}else if(_0x1998a7==a26_0xc3e2('0x9b')){this[a26_0xc3e2('0x1b')]++;this[a26_0xc3e2('0x52')]();}}['bind'](this))[a26_0xc3e2('0x9f')](fs['createWriteStream'](this[a26_0xc3e2('0x15')]+_0x256e0f));}[a26_0xc3e2('0x9a')](_0x2e9e0a,_0x1a0c94=0x1e){const _0x3792df=this[a26_0xc3e2('0x15')]+_0x2e9e0a;console['log'](_0x3792df);console[a26_0xc3e2('0x3e')](_0x2e9e0a);const _0xc1b595=_0x2e9e0a[a26_0xc3e2('0x5e')]('.')[a26_0xc3e2('0x5c')](0x0,-0x1)[a26_0xc3e2('0x5d')]('.');const _0x5dcf2a=a26_0xc3e2('0xa0');const _0x1878b0=['-y','-r',a26_0xc3e2('0xa1'),'-loop','1',a26_0xc3e2('0xa2'),a26_0xc3e2('0xa3'),'-i',_0x3792df,'-t',String(_0x1a0c94),'-c:v',a26_0xc3e2('0xa4'),a26_0xc3e2('0xa5'),a26_0xc3e2('0xa6'),'-r','25',a26_0xc3e2('0xa7'),'scale=1920:1080',this['tempFolder']+_0xc1b595+'.mp4'];const _0x1b13a0=spawn(_0x5dcf2a,_0x1878b0);_0x1b13a0[a26_0xc3e2('0xa8')]['on'](a26_0xc3e2('0xa9'),function(_0x4418cd){console[a26_0xc3e2('0x3e')]('Converting\x20'+_0x3792df);});_0x1b13a0[a26_0xc3e2('0xaa')]['on'](a26_0xc3e2('0xa9'),function(_0x16fe41){console['log'](a26_0xc3e2('0xab')+_0x16fe41);}['bind'](this));_0x1b13a0['on']('close',function(){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xac'));this[a26_0xc3e2('0x1b')]++;this['download']();}[a26_0xc3e2('0x35')](this));}[a26_0xc3e2('0x66')](_0x4f8c58){const _0x2b6468=this[a26_0xc3e2('0x15')]+'/'+_0x4f8c58+'.mp4';const _0x47fd97=a26_0xc3e2('0xad')+_0x4f8c58;console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xae')+_0x47fd97);console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xaf')+_0x2b6468);const _0x17cb23=youtubedl(_0x47fd97,[a26_0xc3e2('0xb0'),a26_0xc3e2('0xb1')],{'cwd':__dirname});_0x17cb23['on'](a26_0xc3e2('0xb2'),function(_0x46f9d5){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xb3'));console['log'](a26_0xc3e2('0xb4')+_0x46f9d5['_filename']);console[a26_0xc3e2('0x3e')]('size:\x20'+_0x46f9d5[a26_0xc3e2('0x88')]);});_0x17cb23['on']('complete',function complete(_0x4ff1c5){'use strict';console[a26_0xc3e2('0x3e')]('filename:\x20'+_0x4ff1c5['_filename']+a26_0xc3e2('0xb5'));});_0x17cb23['on'](a26_0xc3e2('0x75'),function(){console[a26_0xc3e2('0x3e')]('finished\x20youtube\x20downloading!');this[a26_0xc3e2('0x63')](_0x2b6468)['then'](function(_0x2b0981){if(_0x2b0981){this[a26_0xc3e2('0x1b')]++;}this[a26_0xc3e2('0x52')]();}[a26_0xc3e2('0x35')](this));}[a26_0xc3e2('0x35')](this));_0x17cb23[a26_0xc3e2('0x9f')](fs[a26_0xc3e2('0xb6')](_0x2b6468));}[a26_0xc3e2('0xb7')](){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xb8'));if(this[a26_0xc3e2('0x4c')]){if(this['failDownloadFiles']['length']==0x0){console['log'](a26_0xc3e2('0xb9')+this['playListFile']);fs[a26_0xc3e2('0x3f')](this[a26_0xc3e2('0x55')],JSON[a26_0xc3e2('0x38')](this['newPlayList']));let _0x5847ef=a26_0xc3e2('0xba')+'\x0d\x0a'+a26_0xc3e2('0xbb')+'\x0d\x0a';for(const _0x3a7b28 in this[a26_0xc3e2('0x1c')]){const _0x5baef0=this[a26_0xc3e2('0x1c')][_0x3a7b28][a26_0xc3e2('0x59')];const _0x3f14ae=this[a26_0xc3e2('0x1c')][_0x3a7b28][a26_0xc3e2('0x5a')];const _0x4f22a9=_0x5baef0[a26_0xc3e2('0xbc')](_0x5baef0[a26_0xc3e2('0x5b')]('/')+0x1);let _0x1a5771=_0x4f22a9[a26_0xc3e2('0x5e')]('.')[a26_0xc3e2('0x5c')](0x0,-0x1)[a26_0xc3e2('0x5d')]('.');if(_0x3f14ae==a26_0xc3e2('0x5f')){_0x1a5771=_0x5baef0;}_0x5847ef+='/home/osmc/luloclient/media/files/'+_0x1a5771+a26_0xc3e2('0x60')+'\x0d\x0a';console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xbd')+_0x5847ef);}console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xbd')+_0x5847ef);fsExtra[a26_0xc3e2('0x4e')](this[a26_0xc3e2('0x19')]);console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xbe')+this[a26_0xc3e2('0x15')]);fsExtra['copySync'](this['tempFolder'],this[a26_0xc3e2('0x19')]);console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xbf')+this[a26_0xc3e2('0x18')]);fsExtra['writeFileSync'](this[a26_0xc3e2('0x18')],_0x5847ef);console[a26_0xc3e2('0x3e')]('emptyDirSync:\x20'+this[a26_0xc3e2('0x15')]);fsExtra[a26_0xc3e2('0x4e')](this[a26_0xc3e2('0x15')]);console[a26_0xc3e2('0x3e')]('Rebooting..');this['reboot']();}else{console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xc0'));this[a26_0xc3e2('0x1b')]=0x0;setTimeout(function(){this[a26_0xc3e2('0x52')]();}[a26_0xc3e2('0x35')](this),0x1388);}}else{console['log'](a26_0xc3e2('0xc1'));}}[a26_0xc3e2('0xc2')](){this[a26_0xc3e2('0xc3')](a26_0xc3e2('0xc4'),{'playlistid':0x1},function(_0x3bea3b){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xc5'));console[a26_0xc3e2('0x3e')](_0x3bea3b);this[a26_0xc3e2('0xc3')](a26_0xc3e2('0xc6'),{'item':{'file':'//home/osmc/luloclient/media/files/lulo_playlist.m3u'},'playlistid':0x1},function(_0x3bea3b){console['log']('Playlist.Added');console[a26_0xc3e2('0x3e')](_0x3bea3b);this[a26_0xc3e2('0xc3')](a26_0xc3e2('0xc7'),{'item':{'playlistid':0x1,'position':0x0}},function(_0x3bea3b){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xc8'));console[a26_0xc3e2('0x3e')](_0x3bea3b);this[a26_0xc3e2('0xc9')]('RestartApp()');}[a26_0xc3e2('0x35')](this));}[a26_0xc3e2('0x35')](this));}[a26_0xc3e2('0x35')](this));}[a26_0xc3e2('0xca')](){console[a26_0xc3e2('0x3e')]('Rebooting');exec(a26_0xc3e2('0xcb'),function(_0x4fbcb1){console[a26_0xc3e2('0x3e')](_0x4fbcb1);});}[a26_0xc3e2('0xcc')](){const _0x3ca717=format(this[a26_0xc3e2('0xcd')],this[a26_0xc3e2('0x2b')]);console[a26_0xc3e2('0x3e')](_0x3ca717);request({'url':_0x3ca717,'json':!![]},function(_0x41a618,_0x149809,_0x475fe9){if(_0x475fe9[a26_0xc3e2('0x51')]>0x0){const _0x5965ea=_0x475fe9[0x0];const _0x37ae25=_0x5965ea[a26_0xc3e2('0xce')];const _0x32314a=_0x5965ea['header_active']==0x1;this[a26_0xc3e2('0xcf')](_0x37ae25);this[a26_0xc3e2('0xd0')](_0x32314a);this[a26_0xc3e2('0x32')]();}console[a26_0xc3e2('0x3e')](_0x475fe9);}[a26_0xc3e2('0x35')](this));}[a26_0xc3e2('0xd1')](){this[a26_0xc3e2('0xc9')](a26_0xc3e2('0xd2'));}[a26_0xc3e2('0xd3')](){this[a26_0xc3e2('0xc9')](a26_0xc3e2('0xd4'));}['setRss'](_0x30bc48){const _0x5227e1=_0x30bc48!=null&&_0x30bc48!='';const _0xdfafca='/home/osmc/.kodi/userdata/RssFeeds.xml';if(fsExtra['existsSync'](_0xdfafca)){const _0x4d284d=fsExtra['readFileSync'](_0xdfafca);console[a26_0xc3e2('0x3e')]('xmlContent:\x20'+_0x4d284d);const _0x5006f3=require('xml2js');const _0x5e443c=_0x5006f3['parseString'];_0x5e443c(_0x4d284d,function(_0x2d806f,_0x3a3acd){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xd5'),_0x2d806f);console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xd6'),_0x3a3acd);if(!_0x30bc48||_0x30bc48==null||_0x30bc48==''){_0x30bc48='none';}_0x3a3acd[a26_0xc3e2('0xd7')][a26_0xc3e2('0xd8')][0x0][a26_0xc3e2('0xd9')][0x0]['_']=_0x30bc48;const _0x10f9db=new _0x5006f3[(a26_0xc3e2('0xda'))]();const _0x282d80=_0x10f9db[a26_0xc3e2('0xdb')](_0x3a3acd);console['log'](a26_0xc3e2('0xdc'),_0x282d80);fsExtra['writeFileSync'](_0xdfafca,_0x282d80);});this[a26_0xc3e2('0xc9')](a26_0xc3e2('0xdd'));this[a26_0xc3e2('0xc3')](a26_0xc3e2('0xde'),{'setting':a26_0xc3e2('0xdf'),'value':_0x5227e1},function(_0xc9554e){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xe0'));console[a26_0xc3e2('0x3e')](_0xc9554e);}[a26_0xc3e2('0x35')](this));}}[a26_0xc3e2('0xd0')](_0xdfa59d){this[a26_0xc3e2('0xc3')](a26_0xc3e2('0xde'),{'setting':a26_0xc3e2('0xe1'),'value':_0xdfa59d},function(_0x2b0c3c){console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xe2'));console['log'](_0x2b0c3c);}['bind'](this));}[a26_0xc3e2('0xc9')](_0x111e4d){exec(a26_0xc3e2('0xe3')+_0x111e4d+'\x22',function(_0x117354){console[a26_0xc3e2('0x3e')](_0x117354);});}[a26_0xc3e2('0xc3')](_0x2b1390,_0x22065f,_0xf61b01){const _0x36592d={'jsonrpc':a26_0xc3e2('0xe4'),'method':_0x2b1390,'params':_0x22065f,'id':0x1};const _0x236747={'user':this[a26_0xc3e2('0x20')],'pass':this[a26_0xc3e2('0x21')]};console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xe5'),_0x36592d);console[a26_0xc3e2('0x3e')](a26_0xc3e2('0xe6'),_0x236747);this['httpClientService']['post'](this[a26_0xc3e2('0x1f')]+a26_0xc3e2('0xe7'),_0x36592d,![],_0x236747)[a26_0xc3e2('0x4')](function(_0x397159){_0xf61b01(_0x397159);})[a26_0xc3e2('0x3d')](function(_0x17eec4){});}}exports[a26_0xc3e2('0xe8')]=SyncPlaylistsService;