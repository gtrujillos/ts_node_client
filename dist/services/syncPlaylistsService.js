var a25_0x1455=['size:\x20','complete','\x20already\x20downloaded.','finishProcess','Finishing','emptyDir','Refreshing..','Playlist\x20incomplete,\x20retry.','#EXTINF:0,luloPlayList','DateUtils','Parse','start_date','end_date','substring','lastIndexOf','trim','writeFileSync','kodiCommandClient','PlayMedia(//home/osmc/luloclient/media/files/lulo_playlist.m3u)','ActivateWindow(fullscreenvideo)','Rebooting','sudo\x20/sbin/reboot\x20-f','rss','header_active','setRss','turnOffTV','CECStandby()','turnOnTV','CECActivateSource()','/home/osmc/.kodi/userdata/RssFeeds.xml','xmlContent:\x20','xml2js','parseString','err:\x20%j','result:\x20%j','none','rssfeeds','feed','Builder','buildObject','xml:\x20%j','RefreshRSS()','jsonrpcClient','setRss:','Settings.SetSettingValue','videoplayer.usedisplayasclock','kodi-send\x20--action=\x22','2.0','jsonrpcClient\x20data','jsonrpcClient\x20options','SyncPlaylistsService','next','throw','done','value','then','apply','defineProperty','__esModule','../infrastructure/HttpClientService','./playerService','../infrastructure/utils/dateUtils','node-mediainfo','url','http','fs-extra','spawn','child_process','exec','is-image','youtube-dl','package.json','url-exists','mt-files-downloader','mediaFolder','tempFolder','temp/','filesFolder','files/','playListFile','playlist.txt','lulo_playlist.m3u','currentFile','playlistChanged','downloadFiles','failDownloadFiles','kodiHost','http://192.168.0.109','lulo','kodiPassword','.lulo123.','httpClientService','HttpClientService','playerService','PlayerService','config','readFileSync','context','parse','playerId','baseURL','env','deploy/','playListServiceURL','api/player_playlist.php?player_id={0}','playerServiceURL','api/player.php?player_id={0}','kodi','kodiUser','checkDependencies','registerClient','checkFolders','loadMediaList','updateSettings','getStatus','bind','checkSchedule','playlist','getItems','stringify','deviceUuid','networkInterfaces','version','post','http://restapi.lulo.run/player_devices/register','log','register\x20response:\x20','player','getCurrentlyPlayingVideo','item','label','catch','http://restapi.lulo.run/player_devices/report_status','ensureDir','loadMediaList:\x20','emptyDirSync','push','Total\x20to\x20download:\x20','length','download','reloadMediaList','forceReload','existsSync','removeSync','m3uFile','newPlayList','toString','this.currentFile:\x20','\x20of\x20','path','media_type','slice','join','split','youtube_single','.mp4','image','**********+','checkVideo','Downloading:\x20','downloader','m3uFileUpdate','refreshPlayer','track','@type','Video','includes','indexOf','downloading:\x20','start','start:\x20','error','end','Downloaded:\x20','mediaType:\x20','stopped','destroyed','retry','downloadHTTPFile','Attempting\x20to\x20download\x20','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','downloadFile\x20callback\x20result\x20undefined:\x20','host','get','\x20Progress:\x20unknown\x09','\x20Progress:\x20','statusCode','content-length','stat','Have\x20already\x20downloaded\x20','size','And\x20the\x20file\x20size\x20matches\x20(','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(',')\x20vs\x20New(','createWriteStream','pipe','data','err:\x20','finish','Downloaded\x20','headers','location','Redirect\x20','\x20to\x20','Redirect\x20limit\x20encountered\x20for\x20','File\x20Not\x20Found\x20','\x20STATUS:\x20','Error\x20Downloading:\x20','downloadHTTPFileCallback','duration','video','downloadRequestFile','progress','Error\x20downloading\x20file','createImageVideo','ffmpeg','1/2','-loop','-pattern_type','-c:v','libx264','-pix_fmt','yuv420p','scale=1920:1080','stdout','Converting\x20','stderr','stderr:\x20','close','youtubeURL:\x20','outFileName:\x20','--format=18','--no-check-certificate','info','Download\x20started','filename:\x20','_filename'];(function(_0x523f68,_0x18810e){var _0x5705c7=function(_0x8a1b2){while(--_0x8a1b2){_0x523f68['push'](_0x523f68['shift']());}};_0x5705c7(++_0x18810e);}(a25_0x1455,0x120));var a25_0x4b23=function(_0x4d282a,_0x34c4ab){_0x4d282a=_0x4d282a-0x0;var _0x2b96af=a25_0x1455[_0x4d282a];return _0x2b96af;};'use strict';var __awaiter=this&&this['__awaiter']||function(_0xe7232b,_0x4ccf11,_0x504de6,_0x2ec508){function _0x14ff28(_0x320bd1){return _0x320bd1 instanceof _0x504de6?_0x320bd1:new _0x504de6(function(_0x58efca){_0x58efca(_0x320bd1);});}return new(_0x504de6||(_0x504de6=Promise))(function(_0x122c07,_0x1508ed){function _0x37e023(_0x2974e1){try{_0x75ed79(_0x2ec508[a25_0x4b23('0x0')](_0x2974e1));}catch(_0x259294){_0x1508ed(_0x259294);}}function _0x35bfdd(_0x4ad59d){try{_0x75ed79(_0x2ec508[a25_0x4b23('0x1')](_0x4ad59d));}catch(_0x53709e){_0x1508ed(_0x53709e);}}function _0x75ed79(_0x1c2d02){_0x1c2d02[a25_0x4b23('0x2')]?_0x122c07(_0x1c2d02[a25_0x4b23('0x3')]):_0x14ff28(_0x1c2d02[a25_0x4b23('0x3')])[a25_0x4b23('0x4')](_0x37e023,_0x35bfdd);}_0x75ed79((_0x2ec508=_0x2ec508[a25_0x4b23('0x5')](_0xe7232b,_0x4ccf11||[]))[a25_0x4b23('0x0')]());});};Object[a25_0x4b23('0x6')](exports,a25_0x4b23('0x7'),{'value':!![]});const HttpClientService_1=require(a25_0x4b23('0x8'));const playerService_1=require(a25_0x4b23('0x9'));const dateUtils_1=require(a25_0x4b23('0xa'));const mediainfo=require(a25_0x4b23('0xb'));const fs=require('fs');const url=require(a25_0x4b23('0xc'));const http=require(a25_0x4b23('0xd'));const fsExtra=require(a25_0x4b23('0xe'));const request=require('request');const progress=require('request-progress');const spawn=require('child_process')[a25_0x4b23('0xf')];const exec=require(a25_0x4b23('0x10'))[a25_0x4b23('0x11')];const isImage=require(a25_0x4b23('0x12'));const format=require('string-template');const os=require('os');const youtubedl=require(a25_0x4b23('0x13'));const uuidv4=require('uuid/v4');const configFile='config.json';const contextFile=a25_0x4b23('0x14');const urlExists=require(a25_0x4b23('0x15'));const kodi_rpc=require('node-kodi');const Downloader=require(a25_0x4b23('0x16'));class SyncPlaylistsService{constructor(){this[a25_0x4b23('0x17')]='media/';this[a25_0x4b23('0x18')]=this['mediaFolder']+a25_0x4b23('0x19');this[a25_0x4b23('0x1a')]=this[a25_0x4b23('0x17')]+a25_0x4b23('0x1b');this[a25_0x4b23('0x1c')]=this[a25_0x4b23('0x17')]+a25_0x4b23('0x1d');this['m3uFile']=this['filesFolder']+a25_0x4b23('0x1e');this[a25_0x4b23('0x1f')]=0x0;this[a25_0x4b23('0x20')]=![];this[a25_0x4b23('0x21')]=[];this[a25_0x4b23('0x22')]=[];this['newPlayList']={};this[a25_0x4b23('0x23')]=a25_0x4b23('0x24');this['kodiUser']=a25_0x4b23('0x25');this[a25_0x4b23('0x26')]=a25_0x4b23('0x27');this['forceReload']=![];this[a25_0x4b23('0x28')]=new HttpClientService_1[(a25_0x4b23('0x29'))]();this[a25_0x4b23('0x2a')]=new playerService_1[(a25_0x4b23('0x2b'))]();}['init'](){this[a25_0x4b23('0x2c')]=JSON['parse'](fs[a25_0x4b23('0x2d')](configFile));this[a25_0x4b23('0x2e')]=JSON[a25_0x4b23('0x2f')](fs[a25_0x4b23('0x2d')](contextFile));this['playerId']=this[a25_0x4b23('0x2c')][a25_0x4b23('0x30')];this[a25_0x4b23('0x31')]=process[a25_0x4b23('0x32')]['WEB_SERVICE_URL']+a25_0x4b23('0x33');this[a25_0x4b23('0x34')]=this['baseURL']+a25_0x4b23('0x35');this[a25_0x4b23('0x36')]=this[a25_0x4b23('0x31')]+a25_0x4b23('0x37');this[a25_0x4b23('0x38')]=new kodi_rpc({'url':this[a25_0x4b23('0x23')],'user':this[a25_0x4b23('0x39')],'password':this['kodiPassword']});this[a25_0x4b23('0x3a')]();this[a25_0x4b23('0x3b')]();this[a25_0x4b23('0x3c')]();this[a25_0x4b23('0x3d')]();this[a25_0x4b23('0x3e')]();setInterval(function(){this[a25_0x4b23('0x3f')]();}[a25_0x4b23('0x40')](this),0x2710);setInterval(function(){this[a25_0x4b23('0x3b')]();}['bind'](this),0x493e0);setInterval(function(){this[a25_0x4b23('0x41')]();}[a25_0x4b23('0x40')](this),0x2710);}[a25_0x4b23('0x3a')](){}[a25_0x4b23('0x3b')](){this[a25_0x4b23('0x38')][a25_0x4b23('0x42')][a25_0x4b23('0x43')](0x1)[a25_0x4b23('0x4')](function(_0x1d4078){const _0x236a76=JSON[a25_0x4b23('0x44')](_0x1d4078);const _0x423d05={'player_id':this[a25_0x4b23('0x30')],'device_uuid':this[a25_0x4b23('0x2c')][a25_0x4b23('0x45')],'network_info':JSON['stringify'](os[a25_0x4b23('0x46')]()),'firmware_info':JSON[a25_0x4b23('0x44')](this[a25_0x4b23('0x2e')][a25_0x4b23('0x47')]),'playlist':_0x236a76,'playing_item':'','status':0x0};this[a25_0x4b23('0x28')][a25_0x4b23('0x48')](a25_0x4b23('0x49'),_0x423d05,![])[a25_0x4b23('0x4')](function(_0x3c8e4d){console[a25_0x4b23('0x4a')](a25_0x4b23('0x4b')+Date());})['catch'](function(_0x2111e3){});console[a25_0x4b23('0x4a')](_0x423d05);}['bind'](this));const _0xdcad51=this[a25_0x4b23('0x2c')][a25_0x4b23('0x45')];if(!_0xdcad51||_0xdcad51==''){this[a25_0x4b23('0x2c')][a25_0x4b23('0x45')]=uuidv4();this['config']={'deviceUuid':this[a25_0x4b23('0x2c')][a25_0x4b23('0x45')],'playerId':this[a25_0x4b23('0x2c')][a25_0x4b23('0x30')]};fs['writeFileSync'](configFile,JSON[a25_0x4b23('0x44')](this['config']));}}[a25_0x4b23('0x3f')](){console[a25_0x4b23('0x4a')](a25_0x4b23('0x3f'));this[a25_0x4b23('0x38')][a25_0x4b23('0x4c')][a25_0x4b23('0x4d')]()[a25_0x4b23('0x4')](function(_0x4a79b5){const _0x48d4c0=_0x4a79b5[a25_0x4b23('0x4e')][a25_0x4b23('0x4f')];this['reportStatus'](_0x48d4c0);}[a25_0x4b23('0x40')](this))[a25_0x4b23('0x50')](function(_0x51b09f){console['log'](_0x51b09f);this['reportStatus'](JSON[a25_0x4b23('0x44')](_0x51b09f));}[a25_0x4b23('0x40')](this));}['reportStatus'](_0x3c1ad3){console['log']('reportStatus\x20playingItem:\x20'+_0x3c1ad3);const _0x273666={'player_id':this[a25_0x4b23('0x30')],'device_uuid':this['config']['deviceUuid'],'status':_0x3c1ad3!=''&&_0x3c1ad3!=null?0x1:0x0,'playing_item':_0x3c1ad3};this[a25_0x4b23('0x28')]['post'](a25_0x4b23('0x51'),_0x273666,![])[a25_0x4b23('0x4')](function(_0x5b5af5){console[a25_0x4b23('0x4a')]('reportStatusResponse');})[a25_0x4b23('0x50')](function(_0x17de0b){});}[a25_0x4b23('0x3c')](){fsExtra[a25_0x4b23('0x52')](this[a25_0x4b23('0x17')],_0x37d935=>{});fsExtra['ensureDir'](this[a25_0x4b23('0x18')],_0x83283d=>{});fsExtra['ensureDir'](this['filesFolder'],_0x3b1f4f=>{});}[a25_0x4b23('0x3d')](){const _0x3d87c8=format(this[a25_0x4b23('0x34')],this[a25_0x4b23('0x30')]);console['log'](_0x3d87c8);request({'url':_0x3d87c8,'json':!![]},function(_0x56eb09,_0xaf5695,_0x2f9146){console['log'](a25_0x4b23('0x53'));this['newPlayList']=_0x2f9146;this['playlistChanged']=this['hasPlayListChanged']();fsExtra[a25_0x4b23('0x54')](this[a25_0x4b23('0x18')]);this['downloadFiles']=[];this[a25_0x4b23('0x22')]=[];this[a25_0x4b23('0x1f')]=0x0;for(const _0x22ce9c in _0x2f9146){this[a25_0x4b23('0x21')][a25_0x4b23('0x55')](_0x2f9146[_0x22ce9c]);}console[a25_0x4b23('0x4a')](a25_0x4b23('0x56')+this[a25_0x4b23('0x21')][a25_0x4b23('0x57')]);if(this[a25_0x4b23('0x21')][a25_0x4b23('0x57')]>0x0){this[a25_0x4b23('0x58')]();}}[a25_0x4b23('0x40')](this));}[a25_0x4b23('0x59')](){this[a25_0x4b23('0x5a')]=!![];if(fsExtra[a25_0x4b23('0x5b')](this[a25_0x4b23('0x18')])){fsExtra[a25_0x4b23('0x54')](this[a25_0x4b23('0x18')]);}if(fsExtra['existsSync'](this[a25_0x4b23('0x1a')])){fsExtra[a25_0x4b23('0x54')](this[a25_0x4b23('0x1a')]);}if(!fsExtra[a25_0x4b23('0x5b')](this['playListFile'])){fsExtra[a25_0x4b23('0x5c')](this[a25_0x4b23('0x1c')]);}if(!fsExtra[a25_0x4b23('0x5b')](this['m3uFile'])){fsExtra[a25_0x4b23('0x5c')](this[a25_0x4b23('0x5d')]);}this['loadMediaList']();}['hasPlayListChanged'](){const _0x14af20=JSON[a25_0x4b23('0x44')](this[a25_0x4b23('0x5e')]);try{if(!fsExtra[a25_0x4b23('0x5b')](this[a25_0x4b23('0x1c')])){return!![];}else{const _0x5f1c19=fsExtra[a25_0x4b23('0x2d')](this[a25_0x4b23('0x1c')])[a25_0x4b23('0x5f')]();if(_0x5f1c19!=_0x14af20){return!![];}}}catch(_0x36fa19){console[a25_0x4b23('0x4a')](_0x36fa19);}return![];}[a25_0x4b23('0x58')](){console[a25_0x4b23('0x4a')](a25_0x4b23('0x60')+this['currentFile']+a25_0x4b23('0x61')+this[a25_0x4b23('0x21')]['length']);if(this[a25_0x4b23('0x1f')]>=this[a25_0x4b23('0x21')][a25_0x4b23('0x57')]){this['finishProcess']();return;}const _0x11edf2=String(this['downloadFiles'][this['currentFile']][a25_0x4b23('0x62')]);const _0x4d66b9=this['downloadFiles'][this[a25_0x4b23('0x1f')]][a25_0x4b23('0x63')];let _0x1d64a9=_0x11edf2['substring'](_0x11edf2['lastIndexOf']('/')+0x1);const _0x365c9f=_0x1d64a9['split']('.')[a25_0x4b23('0x64')](0x0,-0x1)[a25_0x4b23('0x65')]('.');let _0x57e58d=this[a25_0x4b23('0x31')]+_0x11edf2;const _0x213c54=_0x57e58d[a25_0x4b23('0x66')]('.')['slice'](0x0,-0x1)[a25_0x4b23('0x65')]('.');if(_0x4d66b9==a25_0x4b23('0x67')){_0x1d64a9=_0x1d64a9+a25_0x4b23('0x68');}else if(_0x4d66b9==a25_0x4b23('0x69')){_0x1d64a9=_0x365c9f+'.mp4';_0x57e58d=_0x213c54+'.mp4';}console[a25_0x4b23('0x4a')](a25_0x4b23('0x6a'));console['log'](_0x11edf2);console[a25_0x4b23('0x4a')](_0x4d66b9);console['log'](_0x1d64a9);console[a25_0x4b23('0x4a')](_0x57e58d);console[a25_0x4b23('0x4a')](_0x365c9f);console['log'](_0x213c54);console[a25_0x4b23('0x4a')](a25_0x4b23('0x6a'));if(fsExtra[a25_0x4b23('0x5b')](this[a25_0x4b23('0x18')]+_0x1d64a9)){this['checkVideo'](this[a25_0x4b23('0x18')]+_0x1d64a9)[a25_0x4b23('0x4')](function(_0x5a9ac3){if(_0x5a9ac3){this[a25_0x4b23('0x1f')]++;}else{this[a25_0x4b23('0x20')]=!![];}this[a25_0x4b23('0x58')]();}['bind'](this));}else if(fsExtra[a25_0x4b23('0x5b')](this[a25_0x4b23('0x1a')]+_0x1d64a9)){this[a25_0x4b23('0x6b')](this[a25_0x4b23('0x1a')]+_0x1d64a9)['then'](function(_0x547b6e){if(_0x547b6e){fsExtra['copySync'](this[a25_0x4b23('0x1a')]+_0x1d64a9,this[a25_0x4b23('0x18')]+_0x1d64a9);this['currentFile']++;}else{this['playlistChanged']=!![];}this['download']();}[a25_0x4b23('0x40')](this));}else{console['log'](a25_0x4b23('0x6c')+_0x57e58d);this['playlistChanged']=!![];if(_0x4d66b9=='youtube_single'){this['downloadYouTube'](_0x11edf2);}else{this[a25_0x4b23('0x6d')](_0x57e58d,_0x1d64a9,_0x4d66b9);}}}['checkSchedule'](){const _0x533a11=this[a25_0x4b23('0x6e')]();console[a25_0x4b23('0x4a')]('m3uFileUpdate',_0x533a11);if(_0x533a11){setTimeout(function(){this[a25_0x4b23('0x6f')]();}['bind'](this),0x3e8);}}[a25_0x4b23('0x6b')](_0x59ec78){return __awaiter(this,void 0x0,void 0x0,function*(){console[a25_0x4b23('0x4a')]('videoFile:\x20'+_0x59ec78);const _0x1bd8b3=yield mediainfo(_0x59ec78)[a25_0x4b23('0x50')](_0x4a53cc=>{console[a25_0x4b23('0x4a')](_0x4a53cc);fsExtra[a25_0x4b23('0x5c')](_0x59ec78);return![];});const _0x8d74f1=_0x1bd8b3['media'][a25_0x4b23('0x70')][a25_0x4b23('0x57')]>0x1&&_0x1bd8b3['media'][a25_0x4b23('0x70')][0x1][a25_0x4b23('0x71')]==a25_0x4b23('0x72');if(!_0x8d74f1){fsExtra[a25_0x4b23('0x5c')](_0x59ec78);}console[a25_0x4b23('0x4a')]('mediainfo\x20check:'+_0x8d74f1);return _0x8d74f1;});}[a25_0x4b23('0x6d')](_0x2d6d5c,_0x5cefe8,_0x42fe0a){const _0x4a4a61=new Downloader();console[a25_0x4b23('0x4a')](_0x2d6d5c);console['log'](_0x5cefe8);console[a25_0x4b23('0x4a')](_0x42fe0a);const _0x142eca=_0x4a4a61[a25_0x4b23('0x58')](_0x2d6d5c,this[a25_0x4b23('0x18')]+_0x5cefe8);urlExists(_0x2d6d5c,function(_0x3b9a76,_0x4a4063){if(_0x4a4063){if(this[a25_0x4b23('0x22')][a25_0x4b23('0x73')](this[a25_0x4b23('0x1f')])){const _0x5f1cba=this['failDownloadFiles'][a25_0x4b23('0x74')](this['currentFile']);if(_0x5f1cba>-0x1){this[a25_0x4b23('0x22')]['splice'](_0x5f1cba,0x1);}}console[a25_0x4b23('0x4a')](a25_0x4b23('0x75')+_0x2d6d5c);_0x142eca['start']();}else{if(!this[a25_0x4b23('0x22')][a25_0x4b23('0x73')](this[a25_0x4b23('0x1f')])){this['failDownloadFiles'][a25_0x4b23('0x55')](this['currentFile']);}console[a25_0x4b23('0x4a')]('Error:\x20'+_0x2d6d5c);this['currentFile']++;this[a25_0x4b23('0x58')]();}}['bind'](this));_0x142eca['on'](a25_0x4b23('0x76'),function(_0x142eca){console[a25_0x4b23('0x4a')](a25_0x4b23('0x77')+_0x2d6d5c);});_0x142eca['on'](a25_0x4b23('0x78'),function(_0x142eca){console[a25_0x4b23('0x4a')]('error:\x20');this['download']();}[a25_0x4b23('0x40')](this));_0x142eca['on'](a25_0x4b23('0x79'),function(_0x142eca){console[a25_0x4b23('0x4a')](a25_0x4b23('0x79'));console[a25_0x4b23('0x4a')](a25_0x4b23('0x7a')+_0x5cefe8);console['log'](a25_0x4b23('0x7b')+_0x42fe0a);this[a25_0x4b23('0x6b')](this['tempFolder']+_0x5cefe8)['then'](function(_0x3c81aa){if(_0x3c81aa){this[a25_0x4b23('0x1f')]++;}this[a25_0x4b23('0x58')]();}[a25_0x4b23('0x40')](this));}['bind'](this));_0x142eca['on'](a25_0x4b23('0x7c'),function(_0x142eca){console[a25_0x4b23('0x4a')](a25_0x4b23('0x7c'));});_0x142eca['on'](a25_0x4b23('0x7d'),function(_0x142eca){console[a25_0x4b23('0x4a')](a25_0x4b23('0x7d'));});_0x142eca['on'](a25_0x4b23('0x7e'),function(_0x142eca){console[a25_0x4b23('0x4a')](a25_0x4b23('0x7e'));});}[a25_0x4b23('0x7f')](_0x4276e2,_0x59d9e0,_0x513720,_0x31154d){console['log'](a25_0x4b23('0x7f'));console[a25_0x4b23('0x4a')](_0x4276e2);const _0x243b42=!![];let _0x37d835=0x0;const _0xff01e8='';console[a25_0x4b23('0x4a')](a25_0x4b23('0x80')+_0x4276e2+'\x20to\x20'+_0x59d9e0);if(_0x37d835){if(_0x37d835>0x5){_0x31154d('Max\x20redirects\x20reached',_0x4276e2,_0x513720,null);return;}}else{_0x37d835=0x0;}const _0x3a805d=this[a25_0x4b23('0x18')]+_0x59d9e0;let _0x4a91cc;if(_0x31154d===undefined){console[a25_0x4b23('0x4a')](a25_0x4b23('0x81')+_0x4276e2+'\x20to\x20'+_0x3a805d);_0x31154d=function(_0x304038,_0x37f8a7){console['log'](a25_0x4b23('0x82'),_0x304038,_0x37f8a7);};}http['globalAgent']['maxSockets']=0x64;const _0x1d6b46={'host':url['parse'](_0x4276e2)[a25_0x4b23('0x83')],'port':0x50,'path':url[a25_0x4b23('0x2f')](_0x4276e2)['pathname'],'agent':![]};const _0x3cd269=http[a25_0x4b23('0x84')](_0x1d6b46,function(_0x495586){let _0xa46552=0x0;let _0x581c10=0x0;function _0x1f8128(){if(_0xa46552===undefined){console[a25_0x4b23('0x4a')](_0x59d9e0+a25_0x4b23('0x85')+_0x581c10+'/'+'?');}const _0x58e1af=_0x581c10/_0xa46552*0x64;console[a25_0x4b23('0x4a')](_0x59d9e0+a25_0x4b23('0x86')+_0x58e1af+'%\x09'+_0x581c10+'/'+_0xa46552);}console[a25_0x4b23('0x4a')](_0x59d9e0+'\x20'+_0x495586['statusCode']);switch(_0x495586[a25_0x4b23('0x87')]){case 0xc8:_0xa46552=_0x495586['headers'][a25_0x4b23('0x88')]||_0xff01e8;fs[a25_0x4b23('0x89')](_0x3a805d,function(_0x25bfa0,_0x32732a){if(!_0x25bfa0){console[a25_0x4b23('0x4a')](a25_0x4b23('0x8a')+_0x3a805d);if(_0x32732a[a25_0x4b23('0x8b')]==_0xa46552){console['log'](a25_0x4b23('0x8c')+_0xa46552+')');console[a25_0x4b23('0x4a')]('Redownloading');}else{console[a25_0x4b23('0x4a')](a25_0x4b23('0x8d')+_0x32732a[a25_0x4b23('0x8b')]+a25_0x4b23('0x8e')+_0xa46552+')');}}_0x4a91cc=fs[a25_0x4b23('0x8f')](_0x3a805d);_0x495586[a25_0x4b23('0x90')](_0x4a91cc);_0x495586['on'](a25_0x4b23('0x91'),function(_0x443410){_0x581c10+=_0x443410['length'];_0x1f8128();});_0x3cd269['on'](a25_0x4b23('0x78'),function(_0x25bfa0){console[a25_0x4b23('0x4a')](a25_0x4b23('0x92'));console[a25_0x4b23('0x4a')](_0x25bfa0);});_0x4a91cc['on'](a25_0x4b23('0x93'),function(){console[a25_0x4b23('0x4a')](a25_0x4b23('0x94')+_0x4276e2+'\x20to\x20'+_0x59d9e0);_0x31154d(null,_0x59d9e0,_0x513720,_0x59d9e0);}[a25_0x4b23('0x40')](this));});break;case 0x12e:const _0x538ac2=_0x495586[a25_0x4b23('0x95')][a25_0x4b23('0x96')];console[a25_0x4b23('0x4a')](a25_0x4b23('0x97')+_0x4276e2+a25_0x4b23('0x98')+_0x538ac2);if(_0x37d835<0x5){this[a25_0x4b23('0x7f')](_0x538ac2,_0x59d9e0,_0x31154d,_0x37d835++);}else{console['error'](a25_0x4b23('0x99')+_0x4276e2+'.');_0x31154d('302',null,null,null);}return;case 0x194:console[a25_0x4b23('0x4a')](a25_0x4b23('0x9a')+_0x4276e2);default:console[a25_0x4b23('0x4a')]('Problem\x20downloading\x20'+_0x4276e2+a25_0x4b23('0x9b')+_0x495586[a25_0x4b23('0x87')]);_0x3cd269['abort']();_0x31154d(_0x495586[a25_0x4b23('0x87')],null,null,null);return;}})['on']('error',function(_0x27de04){console[a25_0x4b23('0x4a')](a25_0x4b23('0x9c')+_0x4276e2+'\x20'+_0x27de04['message']);_0x31154d(_0x27de04,null,null,null);});}[a25_0x4b23('0x9d')](_0x519e34,_0x4de94d,_0x41a8fc,_0x464b8e){console[a25_0x4b23('0x4a')](a25_0x4b23('0x9d'));console[a25_0x4b23('0x4a')](_0x519e34);console[a25_0x4b23('0x4a')](_0x4de94d);console[a25_0x4b23('0x4a')](_0x41a8fc);console[a25_0x4b23('0x4a')](_0x464b8e);if(_0x41a8fc=='image'){const _0x7df3cd=this[a25_0x4b23('0x21')][this[a25_0x4b23('0x1f')]][a25_0x4b23('0x9e')]!=null?this[a25_0x4b23('0x21')][this[a25_0x4b23('0x1f')]]['duration']:0x1e;this['createImageVideo'](_0x464b8e,_0x7df3cd);}else if(_0x41a8fc==a25_0x4b23('0x9f')){if(_0x519e34==null&&_0x4de94d!=''){this['currentFile']++;}this['download']();}console[a25_0x4b23('0x4a')](this[a25_0x4b23('0x1f')]);}[a25_0x4b23('0xa0')](_0x344ac5,_0x27811f,_0x2109ad){progress(request(_0x344ac5),{})['on'](a25_0x4b23('0xa1'),function(_0x5bc5aa){console['log'](_0x5bc5aa);})['on'](a25_0x4b23('0x78'),function(_0x5e3eec){console[a25_0x4b23('0x4a')](a25_0x4b23('0xa2'));this[a25_0x4b23('0x58')]();})['on'](a25_0x4b23('0x79'),function(){console[a25_0x4b23('0x4a')](a25_0x4b23('0x7a')+_0x27811f);console[a25_0x4b23('0x4a')](a25_0x4b23('0x7b')+_0x2109ad);if(_0x2109ad==a25_0x4b23('0x69')){const _0x321881=this[a25_0x4b23('0x21')][this[a25_0x4b23('0x1f')]][a25_0x4b23('0x9e')]!=null?this[a25_0x4b23('0x21')][this[a25_0x4b23('0x1f')]]['duration']:0x1e;this[a25_0x4b23('0xa3')](_0x27811f,_0x321881);}else if(_0x2109ad==a25_0x4b23('0x9f')){this['currentFile']++;this['download']();}}[a25_0x4b23('0x40')](this))['pipe'](fs[a25_0x4b23('0x8f')](this['tempFolder']+_0x27811f));}['createImageVideo'](_0x1bc51d,_0x5ca75a=0x1e){const _0x2c71a1=this[a25_0x4b23('0x18')]+_0x1bc51d;console['log'](_0x2c71a1);console[a25_0x4b23('0x4a')](_0x1bc51d);const _0x586ab9=_0x1bc51d[a25_0x4b23('0x66')]('.')[a25_0x4b23('0x64')](0x0,-0x1)['join']('.');const _0x31bbc8=a25_0x4b23('0xa4');const _0x3ffa83=['-y','-r',a25_0x4b23('0xa5'),a25_0x4b23('0xa6'),'1',a25_0x4b23('0xa7'),'glob','-i',_0x2c71a1,'-t',String(_0x5ca75a),a25_0x4b23('0xa8'),a25_0x4b23('0xa9'),a25_0x4b23('0xaa'),a25_0x4b23('0xab'),'-r','25','-vf',a25_0x4b23('0xac'),this[a25_0x4b23('0x18')]+_0x586ab9+'.mp4'];const _0x3f6de4=spawn(_0x31bbc8,_0x3ffa83);_0x3f6de4[a25_0x4b23('0xad')]['on'](a25_0x4b23('0x91'),function(_0x39af58){console['log'](a25_0x4b23('0xae')+_0x2c71a1);});_0x3f6de4[a25_0x4b23('0xaf')]['on'](a25_0x4b23('0x91'),function(_0x2d92b7){console['log'](a25_0x4b23('0xb0')+_0x2d92b7);}['bind'](this));_0x3f6de4['on'](a25_0x4b23('0xb1'),function(){console[a25_0x4b23('0x4a')]('finished\x20mp4\x20convert');this['currentFile']++;this[a25_0x4b23('0x58')]();}['bind'](this));}['downloadYouTube'](_0x571766){const _0x2ffa74=this[a25_0x4b23('0x18')]+'/'+_0x571766+a25_0x4b23('0x68');const _0x775f63='http://www.youtube.com/watch?v='+_0x571766;console[a25_0x4b23('0x4a')](a25_0x4b23('0xb2')+_0x775f63);console['log'](a25_0x4b23('0xb3')+_0x2ffa74);const _0x961f46=youtubedl(_0x775f63,[a25_0x4b23('0xb4'),a25_0x4b23('0xb5')],{'cwd':__dirname});_0x961f46['on'](a25_0x4b23('0xb6'),function(_0x2d6f07){console[a25_0x4b23('0x4a')](a25_0x4b23('0xb7'));console['log'](a25_0x4b23('0xb8')+_0x2d6f07[a25_0x4b23('0xb9')]);console[a25_0x4b23('0x4a')](a25_0x4b23('0xba')+_0x2d6f07['size']);});_0x961f46['on'](a25_0x4b23('0xbb'),function complete(_0xaa3be){'use strict';console[a25_0x4b23('0x4a')](a25_0x4b23('0xb8')+_0xaa3be[a25_0x4b23('0xb9')]+a25_0x4b23('0xbc'));});_0x961f46['on'](a25_0x4b23('0x79'),function(){console['log']('finished\x20youtube\x20downloading!');this[a25_0x4b23('0x6b')](_0x2ffa74)[a25_0x4b23('0x4')](function(_0x12d6e1){if(_0x12d6e1){this[a25_0x4b23('0x1f')]++;}this[a25_0x4b23('0x58')]();}[a25_0x4b23('0x40')](this));}['bind'](this));_0x961f46[a25_0x4b23('0x90')](fs[a25_0x4b23('0x8f')](_0x2ffa74));}[a25_0x4b23('0xbd')](){console['log'](a25_0x4b23('0xbe'));if(this[a25_0x4b23('0x20')]){if(this[a25_0x4b23('0x22')][a25_0x4b23('0x57')]==0x0){console['log']('this.playListFile:\x20'+this[a25_0x4b23('0x1c')]);fs['writeFileSync'](this['playListFile'],JSON[a25_0x4b23('0x44')](this[a25_0x4b23('0x5e')]));const _0x48e0eb=this[a25_0x4b23('0x6e')]();fsExtra['emptyDir'](this['filesFolder'])[a25_0x4b23('0x4')](()=>{fsExtra['copy'](this[a25_0x4b23('0x18')],this['filesFolder'])[a25_0x4b23('0x4')](()=>{fsExtra[a25_0x4b23('0xbf')](this[a25_0x4b23('0x18')])['then'](()=>{console['log'](a25_0x4b23('0xc0'));this['refreshPlayer']();})['catch'](_0x17ac01=>console[a25_0x4b23('0x78')](_0x17ac01));})[a25_0x4b23('0x50')](_0x4fef54=>console[a25_0x4b23('0x78')](_0x4fef54));})[a25_0x4b23('0x50')](_0x51b641=>console[a25_0x4b23('0x78')](_0x51b641));}else{console[a25_0x4b23('0x4a')](a25_0x4b23('0xc1'));this[a25_0x4b23('0x1f')]=0x0;setTimeout(function(){this[a25_0x4b23('0x58')]();}[a25_0x4b23('0x40')](this),0x1388);}}else{console[a25_0x4b23('0x4a')]('No\x20playlist\x20changes.');}}[a25_0x4b23('0x6e')](){let _0x467182='#EXTCPlayListM3U::M3U'+'\x0d\x0a'+a25_0x4b23('0xc2')+'\x0d\x0a';const _0xc46ff4=new Date();for(const _0x8901dd in this[a25_0x4b23('0x21')]){const _0x1a29ca=this[a25_0x4b23('0x21')][_0x8901dd][a25_0x4b23('0x62')];const _0x1d9515=this[a25_0x4b23('0x21')][_0x8901dd][a25_0x4b23('0x63')];const _0x16cdf6=dateUtils_1[a25_0x4b23('0xc3')][a25_0x4b23('0xc4')](this[a25_0x4b23('0x21')][_0x8901dd][a25_0x4b23('0xc5')]);const _0x5717bf=dateUtils_1[a25_0x4b23('0xc3')][a25_0x4b23('0xc4')](this[a25_0x4b23('0x21')][_0x8901dd][a25_0x4b23('0xc6')]);const _0x32ed03=_0x1a29ca[a25_0x4b23('0xc7')](_0x1a29ca[a25_0x4b23('0xc8')]('/')+0x1);let _0x87c2d3=_0x32ed03[a25_0x4b23('0x66')]('.')[a25_0x4b23('0x64')](0x0,-0x1)[a25_0x4b23('0x65')]('.');if(_0x1d9515=='youtube_single'){_0x87c2d3=_0x1a29ca;}if((_0x16cdf6==null||_0x16cdf6<_0xc46ff4)&&(_0x5717bf==null||_0x5717bf>_0xc46ff4)){_0x467182+='/home/osmc/luloclient/media/files/'+_0x87c2d3+a25_0x4b23('0x68')+'\x0d\x0a';}}let _0x4dd6de='';if(fsExtra[a25_0x4b23('0x5b')](this[a25_0x4b23('0x5d')])){_0x4dd6de=fsExtra[a25_0x4b23('0x2d')](this[a25_0x4b23('0x5d')]);_0x4dd6de=_0x4dd6de[a25_0x4b23('0x5f')]()[a25_0x4b23('0xc9')]();}_0x467182=_0x467182[a25_0x4b23('0x5f')]()[a25_0x4b23('0xc9')]();if(_0x4dd6de!=_0x467182){fsExtra[a25_0x4b23('0xca')](this[a25_0x4b23('0x5d')],_0x467182);return!![];}return![];}[a25_0x4b23('0x6f')](){console[a25_0x4b23('0x4a')](a25_0x4b23('0x5d'),this[a25_0x4b23('0x5d')]);this[a25_0x4b23('0xcb')](a25_0x4b23('0xcc'));this[a25_0x4b23('0xcb')](a25_0x4b23('0xcd'));}['reboot'](){console[a25_0x4b23('0x4a')](a25_0x4b23('0xce'));exec(a25_0x4b23('0xcf'),function(_0x1b521c){console[a25_0x4b23('0x4a')](_0x1b521c);});}[a25_0x4b23('0x3e')](){const _0x270d8d=format(this[a25_0x4b23('0x36')],this[a25_0x4b23('0x30')]);console[a25_0x4b23('0x4a')](_0x270d8d);request({'url':_0x270d8d,'json':!![]},function(_0x87fc16,_0x45a2b2,_0x509084){if(_0x509084[a25_0x4b23('0x57')]>0x0){const _0x3cf5fc=_0x509084[0x0];const _0x1f169e=_0x3cf5fc[a25_0x4b23('0xd0')];const _0xb2fc29=_0x3cf5fc[a25_0x4b23('0xd1')]==0x1;this[a25_0x4b23('0xd2')](_0x1f169e);this['enableClock'](_0xb2fc29);this[a25_0x4b23('0x3b')]();}console['log'](_0x509084);}[a25_0x4b23('0x40')](this));}[a25_0x4b23('0xd3')](){this[a25_0x4b23('0xcb')](a25_0x4b23('0xd4'));}[a25_0x4b23('0xd5')](){this[a25_0x4b23('0xcb')](a25_0x4b23('0xd6'));}[a25_0x4b23('0xd2')](_0x12b738){const _0x366d19=_0x12b738!=null&&_0x12b738!='';const _0xa5e2f8=a25_0x4b23('0xd7');if(fsExtra[a25_0x4b23('0x5b')](_0xa5e2f8)){const _0x5f0cfb=fsExtra[a25_0x4b23('0x2d')](_0xa5e2f8);console[a25_0x4b23('0x4a')](a25_0x4b23('0xd8')+_0x5f0cfb);const _0x2eae5f=require(a25_0x4b23('0xd9'));const _0x1de761=_0x2eae5f[a25_0x4b23('0xda')];_0x1de761(_0x5f0cfb,function(_0x5c1067,_0x5a239d){console[a25_0x4b23('0x4a')](a25_0x4b23('0xdb'),_0x5c1067);console[a25_0x4b23('0x4a')](a25_0x4b23('0xdc'),_0x5a239d);if(!_0x12b738||_0x12b738==null||_0x12b738==''){_0x12b738=a25_0x4b23('0xdd');}_0x5a239d[a25_0x4b23('0xde')]['set'][0x0][a25_0x4b23('0xdf')][0x0]['_']=_0x12b738;const _0x302b87=new _0x2eae5f[(a25_0x4b23('0xe0'))]();const _0x16b686=_0x302b87[a25_0x4b23('0xe1')](_0x5a239d);console[a25_0x4b23('0x4a')](a25_0x4b23('0xe2'),_0x16b686);fsExtra[a25_0x4b23('0xca')](_0xa5e2f8,_0x16b686);});this['kodiCommandClient'](a25_0x4b23('0xe3'));this[a25_0x4b23('0xe4')]('Settings.SetSettingValue',{'setting':'lookandfeel.enablerssfeeds','value':_0x366d19},function(_0x394f22){console[a25_0x4b23('0x4a')](a25_0x4b23('0xe5'));console['log'](_0x394f22);}['bind'](this));}}['enableClock'](_0x1dcb86){this['jsonrpcClient'](a25_0x4b23('0xe6'),{'setting':a25_0x4b23('0xe7'),'value':_0x1dcb86},function(_0xedd982){console[a25_0x4b23('0x4a')]('enableClock:\x20');console[a25_0x4b23('0x4a')](_0xedd982);}[a25_0x4b23('0x40')](this));}[a25_0x4b23('0xcb')](_0xc5ca4b){exec(a25_0x4b23('0xe8')+_0xc5ca4b+'\x22',function(_0x10b0d0){console[a25_0x4b23('0x4a')](_0x10b0d0);});}[a25_0x4b23('0xe4')](_0x3a23e6,_0x33963c,_0x1c5483){const _0x308bc0={'jsonrpc':a25_0x4b23('0xe9'),'method':_0x3a23e6,'params':_0x33963c,'id':0x1};const _0x55d815={'user':this[a25_0x4b23('0x39')],'pass':this['kodiPassword']};console['log'](a25_0x4b23('0xea'),_0x308bc0);console[a25_0x4b23('0x4a')](a25_0x4b23('0xeb'),_0x55d815);this[a25_0x4b23('0x28')][a25_0x4b23('0x48')](this[a25_0x4b23('0x23')]+'/jsonrpc',_0x308bc0,![],_0x55d815)[a25_0x4b23('0x4')](function(_0x45565c){_0x1c5483(_0x45565c);})['catch'](function(_0x4dca86){});}}exports[a25_0x4b23('0xec')]=SyncPlaylistsService;