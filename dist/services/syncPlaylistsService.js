var a22_0x19d3=['Finishing','#EXTCPlayListM3U::M3U','#EXTINF:0,luloPlayList','substring','/home/osmc/luloclient/media/files/','copySync','Rebooting..','now','Playlist\x20incomplete,\x20retry.','No\x20playlist\x20changes.','SyncPlaylistsService','__awaiter','throw','done','value','then','apply','next','defineProperty','__esModule','../infrastructure/HttpClientService','node-mediainfo','url','http','fs-extra','request-progress','spawn','is-image','string-template','youtube-dl','uuid/v4','context.json','url-exists','node-kodi','mt-files-downloader','mediaFolder','media/','filesFolder','files/','playListFile','playlist.txt','m3uFile','lulo_playlist.m3u','currentFile','playlistChanged','downloadFiles','failDownloadFiles','newPlayList','httpClientService','HttpClientService','init','config','parse','readFileSync','context','playerId','baseURL','env','WEB_SERVICE_URL','deploy/','api/player_playlist.php?player_id={0}','kodi','http://localhost','checkDependencies','registerClient','checkFolders','loadMediaList','playlist','getItems','stringify','post','http://restapi.lulo.run/player_devices/register','log','catch','deviceUuid','writeFileSync','reportStatus','player','getCurrentlyPlayingVideo','item','bind','ensureDir','tempFolder','hasPlayListChanged','emptyDirSync','Total:\x20','length','download','this.currentFile:\x20','\x20of\x20','finishProcess','path','media_type','lastIndexOf','split','join','slice','youtube_single','.mp4','image','**********+','existsSync','checkVideo','downloadYouTube','downloader','videoFile:\x20','media','track','removeSync','mediainfo\x20check:','indexOf','splice','start','includes','start:\x20','error','error:\x20','end','Downloaded:\x20','stopped','destroyed','downloadHTTPFile','Attempting\x20to\x20download\x20','Max\x20redirects\x20reached','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','downloadFile\x20callback\x20result\x20undefined:\x20','globalAgent','host','pathname','get','\x20Progress:\x20','statusCode','stat','size','And\x20the\x20file\x20size\x20matches\x20(','Redownloading','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(','createWriteStream','data','err:\x20','Downloaded\x20','\x20to\x20','headers','location','Redirect\x20','Redirect\x20limit\x20encountered\x20for\x20','302','File\x20Not\x20Found\x20','\x20STATUS:\x20','abort','Error\x20Downloading:\x20','message','downloadHTTPFileCallback','duration','createImageVideo','downloadRequestFile','progress','Error\x20downloading\x20file','video','pipe','ffmpeg','1/2','-loop','-pattern_type','glob','libx264','-pix_fmt','yuv420p','scale=1920:1080','close','finished\x20mp4\x20convert','http://www.youtube.com/watch?v=','info','Download\x20started','filename:\x20','size:\x20','complete','_filename','\x20already\x20downloaded.','finished\x20youtube\x20downloading!'];(function(_0x2a0168,_0x261ff6){var _0x4979e2=function(_0x553315){while(--_0x553315){_0x2a0168['push'](_0x2a0168['shift']());}};_0x4979e2(++_0x261ff6);}(a22_0x19d3,0x173));var a22_0x3b94=function(_0x19d640,_0x5c0a2d){_0x19d640=_0x19d640-0x0;var _0x3f612e=a22_0x19d3[_0x19d640];return _0x3f612e;};'use strict';var __awaiter=this&&this[a22_0x3b94('0x0')]||function(_0x287b1c,_0x13ad47,_0x440a09,_0x3459ec){return new(_0x440a09||(_0x440a09=Promise))(function(_0x3ed1ce,_0x24c6b4){function _0x451086(_0x32a5e5){try{_0x4798f2(_0x3459ec['next'](_0x32a5e5));}catch(_0x38b8bf){_0x24c6b4(_0x38b8bf);}}function _0x1afdd9(_0x359d91){try{_0x4798f2(_0x3459ec[a22_0x3b94('0x1')](_0x359d91));}catch(_0x22cf63){_0x24c6b4(_0x22cf63);}}function _0x4798f2(_0x3c057c){_0x3c057c[a22_0x3b94('0x2')]?_0x3ed1ce(_0x3c057c[a22_0x3b94('0x3')]):new _0x440a09(function(_0x3ed1ce){_0x3ed1ce(_0x3c057c[a22_0x3b94('0x3')]);})[a22_0x3b94('0x4')](_0x451086,_0x1afdd9);}_0x4798f2((_0x3459ec=_0x3459ec[a22_0x3b94('0x5')](_0x287b1c,_0x13ad47||[]))[a22_0x3b94('0x6')]());});};Object[a22_0x3b94('0x7')](exports,a22_0x3b94('0x8'),{'value':!![]});const HttpClientService_1=require(a22_0x3b94('0x9'));const mediainfo=require(a22_0x3b94('0xa'));const fs=require('fs');const url=require(a22_0x3b94('0xb'));const http=require(a22_0x3b94('0xc'));const fsExtra=require(a22_0x3b94('0xd'));const request=require('request');const progress=require(a22_0x3b94('0xe'));const spawn=require('child_process')[a22_0x3b94('0xf')];const isImage=require(a22_0x3b94('0x10'));const format=require(a22_0x3b94('0x11'));const os=require('os');const youtubedl=require(a22_0x3b94('0x12'));const uuidv4=require(a22_0x3b94('0x13'));const configFile='config.json';const contextFile=a22_0x3b94('0x14');const urlExists=require(a22_0x3b94('0x15'));const kodi_rpc=require(a22_0x3b94('0x16'));const Downloader=require(a22_0x3b94('0x17'));class SyncPlaylistsService{constructor(){this[a22_0x3b94('0x18')]=a22_0x3b94('0x19');this['tempFolder']=this[a22_0x3b94('0x18')]+'temp/';this[a22_0x3b94('0x1a')]=this[a22_0x3b94('0x18')]+a22_0x3b94('0x1b');this[a22_0x3b94('0x1c')]=this[a22_0x3b94('0x18')]+a22_0x3b94('0x1d');this[a22_0x3b94('0x1e')]=this['filesFolder']+a22_0x3b94('0x1f');this[a22_0x3b94('0x20')]=0x0;this[a22_0x3b94('0x21')]=![];this[a22_0x3b94('0x22')]=[];this[a22_0x3b94('0x23')]=[];this[a22_0x3b94('0x24')]={};this[a22_0x3b94('0x25')]=new HttpClientService_1[(a22_0x3b94('0x26'))]();}[a22_0x3b94('0x27')](){this[a22_0x3b94('0x28')]=JSON[a22_0x3b94('0x29')](fs[a22_0x3b94('0x2a')](configFile));this[a22_0x3b94('0x2b')]=JSON[a22_0x3b94('0x29')](fs[a22_0x3b94('0x2a')](contextFile));this[a22_0x3b94('0x2c')]=this[a22_0x3b94('0x28')]['playerId'];this[a22_0x3b94('0x2d')]=process[a22_0x3b94('0x2e')][a22_0x3b94('0x2f')]+a22_0x3b94('0x30');this['playListServiceURL']=this['baseURL']+a22_0x3b94('0x31');this[a22_0x3b94('0x32')]=new kodi_rpc({'url':a22_0x3b94('0x33')});this[a22_0x3b94('0x34')]();this[a22_0x3b94('0x35')]();this[a22_0x3b94('0x36')]();this[a22_0x3b94('0x37')]();setInterval(function(){this['reportStatus']();}['bind'](this),0x2710);}[a22_0x3b94('0x34')](){}[a22_0x3b94('0x35')](){this[a22_0x3b94('0x32')][a22_0x3b94('0x38')][a22_0x3b94('0x39')](0x1)[a22_0x3b94('0x4')](function(_0x49d06a){const _0x4151c5=JSON[a22_0x3b94('0x3a')](_0x49d06a);const _0x14f34f={'player_id':this[a22_0x3b94('0x2c')],'device_uuid':this['config']['deviceUuid'],'network_info':JSON[a22_0x3b94('0x3a')](os['networkInterfaces']()),'firmware_info':JSON[a22_0x3b94('0x3a')](this[a22_0x3b94('0x2b')]),'playlist':_0x4151c5,'status':0x0};this[a22_0x3b94('0x25')][a22_0x3b94('0x3b')](a22_0x3b94('0x3c'),_0x14f34f,![])[a22_0x3b94('0x4')](function(_0x183264){console[a22_0x3b94('0x3d')]('register\x20response:\x20'+Date());})[a22_0x3b94('0x3e')](function(_0x1d7297){});console[a22_0x3b94('0x3d')](_0x14f34f);}['bind'](this));const _0xf87527=this['config']['deviceUuid'];if(!_0xf87527||_0xf87527==''){this[a22_0x3b94('0x28')]['deviceUuid']=uuidv4();this[a22_0x3b94('0x28')]={'deviceUuid':this[a22_0x3b94('0x28')][a22_0x3b94('0x3f')],'playerId':this[a22_0x3b94('0x28')][a22_0x3b94('0x2c')]};fs[a22_0x3b94('0x40')](configFile,JSON[a22_0x3b94('0x3a')](this[a22_0x3b94('0x28')]));}}[a22_0x3b94('0x41')](){console[a22_0x3b94('0x3d')](a22_0x3b94('0x41'));this[a22_0x3b94('0x32')][a22_0x3b94('0x42')][a22_0x3b94('0x43')]()[a22_0x3b94('0x4')](function(_0x282401){const _0x39e753=_0x282401[a22_0x3b94('0x44')]['label'];const _0x378a4c={'player_id':this[a22_0x3b94('0x2c')],'device_uuid':this['config'][a22_0x3b94('0x3f')],'status':_0x39e753!=''&&_0x39e753!=null?0x1:0x0,'playing_item':_0x39e753};this['httpClientService'][a22_0x3b94('0x3b')]('http://restapi.lulo.run/player_devices/report_status',_0x378a4c,![])[a22_0x3b94('0x4')](function(_0x39c58f){console[a22_0x3b94('0x3d')]('reportStatusResponse:\x20'+Date());})['catch'](function(_0x40cb12){});}[a22_0x3b94('0x45')](this));}['checkFolders'](){fsExtra[a22_0x3b94('0x46')](this[a22_0x3b94('0x18')],_0x23db8c=>{});fsExtra[a22_0x3b94('0x46')](this[a22_0x3b94('0x47')],_0xb76b84=>{});fsExtra[a22_0x3b94('0x46')](this[a22_0x3b94('0x1a')],_0x493638=>{});}[a22_0x3b94('0x37')](){const _0x1c718d=format(this['playListServiceURL'],this[a22_0x3b94('0x2c')]);console[a22_0x3b94('0x3d')](_0x1c718d);request({'url':_0x1c718d,'json':!![]},function(_0x5228e2,_0x5c7a4e,_0x17f8b1){this['newPlayList']=_0x17f8b1;this['playlistChanged']=this[a22_0x3b94('0x48')]();fsExtra[a22_0x3b94('0x49')](this[a22_0x3b94('0x47')]);this[a22_0x3b94('0x22')]=[];this['failDownloadFiles']=[];this[a22_0x3b94('0x20')]=0x0;for(const _0x40d2d0 in _0x17f8b1){this[a22_0x3b94('0x22')]['push'](_0x17f8b1[_0x40d2d0]);}console[a22_0x3b94('0x3d')](a22_0x3b94('0x4a')+this[a22_0x3b94('0x22')][a22_0x3b94('0x4b')]);if(this[a22_0x3b94('0x22')][a22_0x3b94('0x4b')]>0x0){this[a22_0x3b94('0x4c')]();}}[a22_0x3b94('0x45')](this));}['reloadMediaList'](){if(fsExtra['existsSync'](this[a22_0x3b94('0x1c')])){fsExtra['removeSync'](this[a22_0x3b94('0x1c')]);}this[a22_0x3b94('0x37')]();}[a22_0x3b94('0x48')](){const _0x5c2952=JSON[a22_0x3b94('0x3a')](this[a22_0x3b94('0x24')]);try{if(!fs['existsSync'](this[a22_0x3b94('0x1c')])){return!![];}else{const _0x5b9737=fs[a22_0x3b94('0x2a')](this[a22_0x3b94('0x1c')])['toString']();if(_0x5b9737!=_0x5c2952){return!![];}}}catch(_0x5784b0){console['error'](_0x5784b0);}return![];}['download'](){console[a22_0x3b94('0x3d')](a22_0x3b94('0x4d')+this['currentFile']+a22_0x3b94('0x4e')+this['downloadFiles'][a22_0x3b94('0x4b')]);if(this[a22_0x3b94('0x20')]>=this[a22_0x3b94('0x22')][a22_0x3b94('0x4b')]){this[a22_0x3b94('0x4f')]();return;}const _0x44c8ba=String(this[a22_0x3b94('0x22')][this['currentFile']][a22_0x3b94('0x50')]);const _0x2f704e=this[a22_0x3b94('0x22')][this[a22_0x3b94('0x20')]][a22_0x3b94('0x51')];let _0x4dfc7d=_0x44c8ba['substring'](_0x44c8ba[a22_0x3b94('0x52')]('/')+0x1);const _0x56c43e=_0x4dfc7d[a22_0x3b94('0x53')]('.')['slice'](0x0,-0x1)[a22_0x3b94('0x54')]('.');let _0x1827be=this[a22_0x3b94('0x2d')]+_0x44c8ba;const _0x19a771=_0x1827be[a22_0x3b94('0x53')]('.')[a22_0x3b94('0x55')](0x0,-0x1)[a22_0x3b94('0x54')]('.');if(_0x2f704e==a22_0x3b94('0x56')){_0x4dfc7d=_0x4dfc7d+a22_0x3b94('0x57');}else if(_0x2f704e==a22_0x3b94('0x58')){_0x4dfc7d=_0x56c43e+a22_0x3b94('0x57');_0x1827be=_0x19a771+a22_0x3b94('0x57');}console[a22_0x3b94('0x3d')](a22_0x3b94('0x59'));console[a22_0x3b94('0x3d')](_0x44c8ba);console[a22_0x3b94('0x3d')](_0x2f704e);console[a22_0x3b94('0x3d')](_0x4dfc7d);console['log'](_0x1827be);console[a22_0x3b94('0x3d')](_0x56c43e);console['log'](_0x19a771);console['log'](a22_0x3b94('0x59'));if(fsExtra[a22_0x3b94('0x5a')](this[a22_0x3b94('0x47')]+_0x4dfc7d)){this[a22_0x3b94('0x5b')](this[a22_0x3b94('0x47')]+_0x4dfc7d)[a22_0x3b94('0x4')](function(_0x5bf615){if(_0x5bf615){this['currentFile']++;}else{this['playlistChanged']=!![];}this[a22_0x3b94('0x4c')]();}[a22_0x3b94('0x45')](this));}else if(fsExtra[a22_0x3b94('0x5a')](this['filesFolder']+_0x4dfc7d)){this[a22_0x3b94('0x5b')](this[a22_0x3b94('0x1a')]+_0x4dfc7d)[a22_0x3b94('0x4')](function(_0x53df47){if(_0x53df47){fsExtra['copySync'](this[a22_0x3b94('0x1a')]+_0x4dfc7d,this[a22_0x3b94('0x47')]+_0x4dfc7d);this[a22_0x3b94('0x20')]++;}else{this[a22_0x3b94('0x21')]=!![];}this[a22_0x3b94('0x4c')]();}[a22_0x3b94('0x45')](this));}else{console[a22_0x3b94('0x3d')]('Downloading:\x20'+_0x1827be);this['playlistChanged']=!![];if(_0x2f704e=='youtube_single'){this[a22_0x3b94('0x5c')](_0x44c8ba);}else{this[a22_0x3b94('0x5d')](_0x1827be,_0x4dfc7d,_0x2f704e);}}}[a22_0x3b94('0x5b')](_0x3f98bf){return __awaiter(this,void 0x0,void 0x0,function*(){console[a22_0x3b94('0x3d')](a22_0x3b94('0x5e')+_0x3f98bf);const _0x37b6fa=yield mediainfo(_0x3f98bf)[a22_0x3b94('0x3e')](_0x4a0744=>console['log'](_0x4a0744));const _0x1c1e3f=_0x37b6fa[a22_0x3b94('0x5f')]['track'][a22_0x3b94('0x4b')]>0x1&&_0x37b6fa['media'][a22_0x3b94('0x60')][0x1]['@type']=='Video';if(!_0x1c1e3f){fsExtra[a22_0x3b94('0x61')](_0x3f98bf);}console['log'](a22_0x3b94('0x62')+_0x1c1e3f);return _0x1c1e3f;});}[a22_0x3b94('0x5d')](_0x3eb5a0,_0x592382,_0x1130c2){const _0x19eb89=new Downloader();console[a22_0x3b94('0x3d')](_0x3eb5a0);console[a22_0x3b94('0x3d')](_0x592382);console['log'](_0x1130c2);const _0x21a36e=_0x19eb89[a22_0x3b94('0x4c')](_0x3eb5a0,this[a22_0x3b94('0x47')]+_0x592382);urlExists(_0x3eb5a0,function(_0x2643b6,_0x48b4be){if(_0x48b4be){if(this['failDownloadFiles']['includes'](this[a22_0x3b94('0x20')])){const _0x5d9018=this[a22_0x3b94('0x23')][a22_0x3b94('0x63')](this[a22_0x3b94('0x20')]);if(_0x5d9018>-0x1){this[a22_0x3b94('0x23')][a22_0x3b94('0x64')](_0x5d9018,0x1);}}console[a22_0x3b94('0x3d')]('downloading:\x20'+_0x3eb5a0);_0x21a36e[a22_0x3b94('0x65')]();}else{if(!this[a22_0x3b94('0x23')][a22_0x3b94('0x66')](this[a22_0x3b94('0x20')])){this[a22_0x3b94('0x23')]['push'](this[a22_0x3b94('0x20')]);}console[a22_0x3b94('0x3d')]('Error:\x20'+_0x3eb5a0);this[a22_0x3b94('0x20')]++;this['download']();}}[a22_0x3b94('0x45')](this));_0x21a36e['on']('start',function(_0x21a36e){console[a22_0x3b94('0x3d')](a22_0x3b94('0x67')+_0x3eb5a0);});_0x21a36e['on'](a22_0x3b94('0x68'),function(_0x21a36e){console[a22_0x3b94('0x3d')](a22_0x3b94('0x69'));this[a22_0x3b94('0x4c')]();}['bind'](this));_0x21a36e['on'](a22_0x3b94('0x6a'),function(_0x21a36e){console['log'](a22_0x3b94('0x6a'));console[a22_0x3b94('0x3d')](a22_0x3b94('0x6b')+_0x592382);console[a22_0x3b94('0x3d')]('mediaType:\x20'+_0x1130c2);this[a22_0x3b94('0x5b')](this[a22_0x3b94('0x47')]+_0x592382)['then'](function(_0x4098f4){if(_0x4098f4){this['currentFile']++;}this[a22_0x3b94('0x4c')]();}[a22_0x3b94('0x45')](this));}[a22_0x3b94('0x45')](this));_0x21a36e['on']('stopped',function(_0x21a36e){console[a22_0x3b94('0x3d')](a22_0x3b94('0x6c'));});_0x21a36e['on']('destroyed',function(_0x21a36e){console[a22_0x3b94('0x3d')](a22_0x3b94('0x6d'));});_0x21a36e['on']('retry',function(_0x21a36e){console[a22_0x3b94('0x3d')]('retry');});}[a22_0x3b94('0x6e')](_0x176c96,_0x2d03e9,_0x4177c8,_0x3db515){console[a22_0x3b94('0x3d')](a22_0x3b94('0x6e'));console[a22_0x3b94('0x3d')](_0x176c96);const _0x4a345d=!![];let _0x376035=0x0;const _0x5f4857='';console[a22_0x3b94('0x3d')](a22_0x3b94('0x6f')+_0x176c96+'\x20to\x20'+_0x2d03e9);if(_0x376035){if(_0x376035>0x5){_0x3db515(a22_0x3b94('0x70'),_0x176c96,_0x4177c8,null);return;}}else{_0x376035=0x0;}const _0x4e69fc=this[a22_0x3b94('0x47')]+_0x2d03e9;let _0x1c6249;if(_0x3db515===undefined){console[a22_0x3b94('0x3d')](a22_0x3b94('0x71')+_0x176c96+'\x20to\x20'+_0x4e69fc);_0x3db515=function(_0x10d356,_0x46070d){console['log'](a22_0x3b94('0x72'),_0x10d356,_0x46070d);};}http[a22_0x3b94('0x73')]['maxSockets']=0x64;const _0x1f2af3={'host':url[a22_0x3b94('0x29')](_0x176c96)[a22_0x3b94('0x74')],'port':0x50,'path':url[a22_0x3b94('0x29')](_0x176c96)[a22_0x3b94('0x75')],'agent':![]};const _0x4e3537=http[a22_0x3b94('0x76')](_0x1f2af3,function(_0x1339f0){let _0x2973fc=0x0;let _0x3f1e90=0x0;function _0x5409b6(){if(_0x2973fc===undefined){console[a22_0x3b94('0x3d')](_0x2d03e9+'\x20Progress:\x20unknown\x09'+_0x3f1e90+'/'+'?');}const _0x39c7c3=_0x3f1e90/_0x2973fc*0x64;console[a22_0x3b94('0x3d')](_0x2d03e9+a22_0x3b94('0x77')+_0x39c7c3+'%\x09'+_0x3f1e90+'/'+_0x2973fc);}console[a22_0x3b94('0x3d')](_0x2d03e9+'\x20'+_0x1339f0[a22_0x3b94('0x78')]);switch(_0x1339f0[a22_0x3b94('0x78')]){case 0xc8:_0x2973fc=_0x1339f0['headers']['content-length']||_0x5f4857;fs[a22_0x3b94('0x79')](_0x4e69fc,function(_0x583438,_0x15bd19){if(!_0x583438){console['log']('Have\x20already\x20downloaded\x20'+_0x4e69fc);if(_0x15bd19[a22_0x3b94('0x7a')]==_0x2973fc){console['log'](a22_0x3b94('0x7b')+_0x2973fc+')');console[a22_0x3b94('0x3d')](a22_0x3b94('0x7c'));}else{console[a22_0x3b94('0x3d')](a22_0x3b94('0x7d')+_0x15bd19[a22_0x3b94('0x7a')]+')\x20vs\x20New('+_0x2973fc+')');}}_0x1c6249=fs[a22_0x3b94('0x7e')](_0x4e69fc);_0x1339f0['pipe'](_0x1c6249);_0x1339f0['on'](a22_0x3b94('0x7f'),function(_0x4d753c){_0x3f1e90+=_0x4d753c[a22_0x3b94('0x4b')];_0x5409b6();});_0x4e3537['on'](a22_0x3b94('0x68'),function(_0x583438){console[a22_0x3b94('0x3d')](a22_0x3b94('0x80'));console['log'](_0x583438);});_0x1c6249['on']('finish',function(){console[a22_0x3b94('0x3d')](a22_0x3b94('0x81')+_0x176c96+a22_0x3b94('0x82')+_0x2d03e9);_0x3db515(null,_0x2d03e9,_0x4177c8,_0x2d03e9);}['bind'](this));});break;case 0x12e:const _0x31b134=_0x1339f0[a22_0x3b94('0x83')][a22_0x3b94('0x84')];console[a22_0x3b94('0x3d')](a22_0x3b94('0x85')+_0x176c96+a22_0x3b94('0x82')+_0x31b134);if(_0x376035<0x5){this[a22_0x3b94('0x6e')](_0x31b134,_0x2d03e9,_0x3db515,_0x376035++);}else{console[a22_0x3b94('0x68')](a22_0x3b94('0x86')+_0x176c96+'.');_0x3db515(a22_0x3b94('0x87'),null,null,null);}return;case 0x194:console[a22_0x3b94('0x3d')](a22_0x3b94('0x88')+_0x176c96);default:console[a22_0x3b94('0x3d')]('Problem\x20downloading\x20'+_0x176c96+a22_0x3b94('0x89')+_0x1339f0[a22_0x3b94('0x78')]);_0x4e3537[a22_0x3b94('0x8a')]();_0x3db515(_0x1339f0[a22_0x3b94('0x78')],null,null,null);return;}})['on'](a22_0x3b94('0x68'),function(_0x37f894){console[a22_0x3b94('0x3d')](a22_0x3b94('0x8b')+_0x176c96+'\x20'+_0x37f894[a22_0x3b94('0x8c')]);_0x3db515(_0x37f894,null,null,null);});}[a22_0x3b94('0x8d')](_0x4dd8fe,_0x1c6656,_0x3f6432,_0x59b145){console[a22_0x3b94('0x3d')](a22_0x3b94('0x8d'));console['log'](_0x4dd8fe);console[a22_0x3b94('0x3d')](_0x1c6656);console[a22_0x3b94('0x3d')](_0x3f6432);console[a22_0x3b94('0x3d')](_0x59b145);if(_0x3f6432==a22_0x3b94('0x58')){const _0x30c15b=this['downloadFiles'][this[a22_0x3b94('0x20')]][a22_0x3b94('0x8e')]!=null?this['downloadFiles'][this[a22_0x3b94('0x20')]][a22_0x3b94('0x8e')]:0x1e;this[a22_0x3b94('0x8f')](_0x59b145,_0x30c15b);}else if(_0x3f6432=='video'){if(_0x4dd8fe==null&&_0x1c6656!=''){this['currentFile']++;}this[a22_0x3b94('0x4c')]();}console[a22_0x3b94('0x3d')](this[a22_0x3b94('0x20')]);}[a22_0x3b94('0x90')](_0xf7a356,_0x31d049,_0x562076){progress(request(_0xf7a356),{})['on'](a22_0x3b94('0x91'),function(_0x261dc6){console[a22_0x3b94('0x3d')](_0x261dc6);})['on'](a22_0x3b94('0x68'),function(_0x4b7649){console[a22_0x3b94('0x3d')](a22_0x3b94('0x92'));this[a22_0x3b94('0x4c')]();})['on'](a22_0x3b94('0x6a'),function(){console[a22_0x3b94('0x3d')](a22_0x3b94('0x6b')+_0x31d049);console['log']('mediaType:\x20'+_0x562076);if(_0x562076==a22_0x3b94('0x58')){const _0x234f29=this[a22_0x3b94('0x22')][this[a22_0x3b94('0x20')]][a22_0x3b94('0x8e')]!=null?this['downloadFiles'][this['currentFile']]['duration']:0x1e;this[a22_0x3b94('0x8f')](_0x31d049,_0x234f29);}else if(_0x562076==a22_0x3b94('0x93')){this[a22_0x3b94('0x20')]++;this[a22_0x3b94('0x4c')]();}}[a22_0x3b94('0x45')](this))[a22_0x3b94('0x94')](fs[a22_0x3b94('0x7e')](this[a22_0x3b94('0x47')]+_0x31d049));}[a22_0x3b94('0x8f')](_0x196ba8,_0x33b4fc=0x1e){const _0x1fbb5c=this['tempFolder']+_0x196ba8;console[a22_0x3b94('0x3d')](_0x1fbb5c);console[a22_0x3b94('0x3d')](_0x196ba8);const _0x4bf5fe=_0x196ba8[a22_0x3b94('0x53')]('.')[a22_0x3b94('0x55')](0x0,-0x1)[a22_0x3b94('0x54')]('.');const _0x5d9860=a22_0x3b94('0x95');const _0x42a695=['-y','-r',a22_0x3b94('0x96'),a22_0x3b94('0x97'),'1',a22_0x3b94('0x98'),a22_0x3b94('0x99'),'-i',_0x1fbb5c,'-t',String(_0x33b4fc),'-c:v',a22_0x3b94('0x9a'),a22_0x3b94('0x9b'),a22_0x3b94('0x9c'),'-r','25','-vf',a22_0x3b94('0x9d'),this[a22_0x3b94('0x47')]+_0x4bf5fe+'.mp4'];const _0x724243=spawn(_0x5d9860,_0x42a695);_0x724243['stdout']['on'](a22_0x3b94('0x7f'),function(_0x5f4a4c){console['log']('Converting\x20'+_0x1fbb5c);});_0x724243['stderr']['on'](a22_0x3b94('0x7f'),function(_0x24d3e9){console['log']('stderr:\x20'+_0x24d3e9);}['bind'](this));_0x724243['on'](a22_0x3b94('0x9e'),function(){console[a22_0x3b94('0x3d')](a22_0x3b94('0x9f'));this[a22_0x3b94('0x20')]++;this[a22_0x3b94('0x4c')]();}['bind'](this));}['downloadYouTube'](_0x509dc5){const _0x23e1f0=this[a22_0x3b94('0x47')]+'/'+_0x509dc5+a22_0x3b94('0x57');const _0x33186d=youtubedl(a22_0x3b94('0xa0')+_0x509dc5,['--format=18'],{'cwd':__dirname});_0x33186d['on'](a22_0x3b94('0xa1'),function(_0x4e2012){console['log'](a22_0x3b94('0xa2'));console[a22_0x3b94('0x3d')](a22_0x3b94('0xa3')+_0x4e2012['_filename']);console[a22_0x3b94('0x3d')](a22_0x3b94('0xa4')+_0x4e2012[a22_0x3b94('0x7a')]);});_0x33186d['on'](a22_0x3b94('0xa5'),function complete(_0x1d411f){'use strict';console[a22_0x3b94('0x3d')](a22_0x3b94('0xa3')+_0x1d411f[a22_0x3b94('0xa6')]+a22_0x3b94('0xa7'));});_0x33186d['on'](a22_0x3b94('0x6a'),function(){console['log'](a22_0x3b94('0xa8'));this[a22_0x3b94('0x5b')](_0x23e1f0)[a22_0x3b94('0x4')](function(_0x26ffcc){if(_0x26ffcc){this['currentFile']++;}this['download']();}[a22_0x3b94('0x45')](this));}['bind'](this));_0x33186d[a22_0x3b94('0x94')](fs[a22_0x3b94('0x7e')](_0x23e1f0));}[a22_0x3b94('0x4f')](){console['log'](a22_0x3b94('0xa9'));if(this[a22_0x3b94('0x21')]){if(this['failDownloadFiles']['length']==0x0){fs['writeFileSync'](this['playListFile'],JSON[a22_0x3b94('0x3a')](this[a22_0x3b94('0x24')]));let _0x434ff1=a22_0x3b94('0xaa')+'\x0d\x0a'+a22_0x3b94('0xab')+'\x0d\x0a';for(const _0x5adcdd in this[a22_0x3b94('0x22')]){const _0x277338=this[a22_0x3b94('0x22')][_0x5adcdd][a22_0x3b94('0x50')];const _0x447462=this[a22_0x3b94('0x22')][_0x5adcdd]['media_type'];const _0x30d47c=_0x277338[a22_0x3b94('0xac')](_0x277338[a22_0x3b94('0x52')]('/')+0x1);let _0x221ca4=_0x30d47c['split']('.')['slice'](0x0,-0x1)[a22_0x3b94('0x54')]('.');if(_0x447462=='youtube_single'){_0x221ca4=_0x277338;}_0x434ff1+=a22_0x3b94('0xad')+_0x221ca4+a22_0x3b94('0x57')+'\x0d\x0a';}fsExtra['emptyDirSync'](this[a22_0x3b94('0x1a')]);fsExtra[a22_0x3b94('0xae')](this['tempFolder'],this[a22_0x3b94('0x1a')]);fsExtra['writeFileSync'](this[a22_0x3b94('0x1e')],_0x434ff1);fsExtra[a22_0x3b94('0x49')](this[a22_0x3b94('0x47')]);console[a22_0x3b94('0x3d')](a22_0x3b94('0xaf'));const _0x30f870=spawn('shutdown',['-r',a22_0x3b94('0xb0')]);}else{console[a22_0x3b94('0x3d')](a22_0x3b94('0xb1'));this['currentFile']=0x0;setTimeout(function(){this[a22_0x3b94('0x4c')]();}[a22_0x3b94('0x45')](this),0x1388);}}else{console[a22_0x3b94('0x3d')](a22_0x3b94('0xb2'));}}}exports[a22_0x3b94('0xb3')]=SyncPlaylistsService;