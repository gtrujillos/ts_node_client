var a22_0x475a=['complete','finished\x20youtube\x20downloading!','#EXTINF:0,luloPlayList','path','lastIndexOf','Rebooting..','Playlist\x20incomplete,\x20retry.','No\x20playlist\x20changes.','SyncPlaylistsService','__awaiter','next','throw','done','then','apply','defineProperty','__esModule','../infrastructure/HttpClientService','url','http','fs-extra','request','request-progress','child_process','exec','is-image','string-template','youtube-dl','uuid/v4','config.json','url-exists','node-kodi','mediaFolder','media/','tempFolder','temp/','filesFolder','files/','playListFile','m3uFile','lulo_playlist.m3u','currentFile','playlistChanged','downloadFiles','failDownloadFiles','httpClientService','init','config','parse','context','readFileSync','playerId','baseURL','env','WEB_SERVICE_URL','deploy/','playListServiceURL','api/player_playlist.php?player_id={0}','kodi','.lulo123.','checkDependencies','checkFolders','loadMediaList','getStatus','bind','registerClient','playlist','getItems','stringify','deviceUuid','networkInterfaces','post','http://restapi.lulo.run/player_devices/register','register\x20response:\x20','catch','log','writeFileSync','player','getCurrentlyPlayingVideo','item','label','reportStatus','playingItem:\x20','http://restapi.lulo.run/player_devices/report_status','reportStatusResponse:\x20','ensureDir','newPlayList','hasPlayListChanged','emptyDirSync','Total:\x20','length','download','reloadMediaList','existsSync','removeSync','reboot','sudo\x20/sbin/shutdown\x20-r\x20now','toString','this.currentFile:\x20','\x20of\x20','finishProcess','media_type','substring','split','slice','join','youtube_single','.mp4','image','**********+','checkVideo','copySync','Downloading:\x20','downloadYouTube','downloader','videoFile:\x20','media','@type','Video','mediainfo\x20check:','includes','splice','downloading:\x20','start','push','Error:\x20','start:\x20','end','Downloaded:\x20','mediaType:\x20','stopped','destroyed','retry','downloadHTTPFile','\x20to\x20','Max\x20redirects\x20reached','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','globalAgent','host','pathname','get','statusCode','headers','content-length','size','And\x20the\x20file\x20size\x20matches\x20(','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(',')\x20vs\x20New(','createWriteStream','pipe','data','err:\x20','Downloaded\x20','Redirect\x20','Redirect\x20limit\x20encountered\x20for\x20','302','\x20STATUS:\x20','error','message','downloadHTTPFileCallback','duration','video','downloadRequestFile','progress','createImageVideo','ffmpeg','-loop','-pattern_type','glob','-c:v','libx264','yuv420p','-vf','scale=1920:1080','stdout','Converting\x20','stderr','stderr:\x20','close','finished\x20mp4\x20convert','http://www.youtube.com/watch?v=','--format=18','info','Download\x20started','filename:\x20','_filename','size:\x20'];(function(_0x601d0a,_0xdc270e){var _0x2e5866=function(_0x45a474){while(--_0x45a474){_0x601d0a['push'](_0x601d0a['shift']());}};_0x2e5866(++_0xdc270e);}(a22_0x475a,0x17f));var a22_0x11b4=function(_0x46bd63,_0x20772c){_0x46bd63=_0x46bd63-0x0;var _0x5ce987=a22_0x475a[_0x46bd63];return _0x5ce987;};'use strict';var __awaiter=this&&this[a22_0x11b4('0x0')]||function(_0x5b31db,_0x5481d5,_0x45f7d8,_0x41c978){function _0x601acb(_0x5d286f){return _0x5d286f instanceof _0x45f7d8?_0x5d286f:new _0x45f7d8(function(_0x341f07){_0x341f07(_0x5d286f);});}return new(_0x45f7d8||(_0x45f7d8=Promise))(function(_0x4072f8,_0x230f00){function _0x338e2f(_0x5facda){try{_0x10f114(_0x41c978[a22_0x11b4('0x1')](_0x5facda));}catch(_0x5dbd24){_0x230f00(_0x5dbd24);}}function _0x4aa31c(_0x59077a){try{_0x10f114(_0x41c978[a22_0x11b4('0x2')](_0x59077a));}catch(_0x9379d){_0x230f00(_0x9379d);}}function _0x10f114(_0x334f5f){_0x334f5f[a22_0x11b4('0x3')]?_0x4072f8(_0x334f5f['value']):_0x601acb(_0x334f5f['value'])[a22_0x11b4('0x4')](_0x338e2f,_0x4aa31c);}_0x10f114((_0x41c978=_0x41c978[a22_0x11b4('0x5')](_0x5b31db,_0x5481d5||[]))[a22_0x11b4('0x1')]());});};Object[a22_0x11b4('0x6')](exports,a22_0x11b4('0x7'),{'value':!![]});const HttpClientService_1=require(a22_0x11b4('0x8'));const mediainfo=require('node-mediainfo');const fs=require('fs');const url=require(a22_0x11b4('0x9'));const http=require(a22_0x11b4('0xa'));const fsExtra=require(a22_0x11b4('0xb'));const request=require(a22_0x11b4('0xc'));const progress=require(a22_0x11b4('0xd'));const spawn=require(a22_0x11b4('0xe'))['spawn'];const exec=require(a22_0x11b4('0xe'))[a22_0x11b4('0xf')];const isImage=require(a22_0x11b4('0x10'));const format=require(a22_0x11b4('0x11'));const os=require('os');const youtubedl=require(a22_0x11b4('0x12'));const uuidv4=require(a22_0x11b4('0x13'));const configFile=a22_0x11b4('0x14');const contextFile='context.json';const urlExists=require(a22_0x11b4('0x15'));const kodi_rpc=require(a22_0x11b4('0x16'));const Downloader=require('mt-files-downloader');class SyncPlaylistsService{constructor(){this[a22_0x11b4('0x17')]=a22_0x11b4('0x18');this[a22_0x11b4('0x19')]=this[a22_0x11b4('0x17')]+a22_0x11b4('0x1a');this[a22_0x11b4('0x1b')]=this[a22_0x11b4('0x17')]+a22_0x11b4('0x1c');this[a22_0x11b4('0x1d')]=this[a22_0x11b4('0x17')]+'playlist.txt';this[a22_0x11b4('0x1e')]=this[a22_0x11b4('0x1b')]+a22_0x11b4('0x1f');this[a22_0x11b4('0x20')]=0x0;this[a22_0x11b4('0x21')]=![];this[a22_0x11b4('0x22')]=[];this[a22_0x11b4('0x23')]=[];this['newPlayList']={};this[a22_0x11b4('0x24')]=new HttpClientService_1['HttpClientService']();}[a22_0x11b4('0x25')](){this[a22_0x11b4('0x26')]=JSON[a22_0x11b4('0x27')](fs['readFileSync'](configFile));this[a22_0x11b4('0x28')]=JSON[a22_0x11b4('0x27')](fs[a22_0x11b4('0x29')](contextFile));this[a22_0x11b4('0x2a')]=this['config']['playerId'];this[a22_0x11b4('0x2b')]=process[a22_0x11b4('0x2c')][a22_0x11b4('0x2d')]+a22_0x11b4('0x2e');this[a22_0x11b4('0x2f')]=this['baseURL']+a22_0x11b4('0x30');this[a22_0x11b4('0x31')]=new kodi_rpc({'url':'http://localhost','user':'lulo','password':a22_0x11b4('0x32')});this[a22_0x11b4('0x33')]();this['registerClient']();this[a22_0x11b4('0x34')]();this[a22_0x11b4('0x35')]();setInterval(function(){this[a22_0x11b4('0x36')]();}[a22_0x11b4('0x37')](this),0x2710);setInterval(function(){this[a22_0x11b4('0x38')]();}[a22_0x11b4('0x37')](this),0x493e0);}[a22_0x11b4('0x33')](){}[a22_0x11b4('0x38')](){this[a22_0x11b4('0x31')][a22_0x11b4('0x39')][a22_0x11b4('0x3a')](0x1)['then'](function(_0x2d511e){const _0x17e46b=JSON[a22_0x11b4('0x3b')](_0x2d511e);const _0x488b72={'player_id':this[a22_0x11b4('0x2a')],'device_uuid':this[a22_0x11b4('0x26')][a22_0x11b4('0x3c')],'network_info':JSON[a22_0x11b4('0x3b')](os[a22_0x11b4('0x3d')]()),'firmware_info':JSON[a22_0x11b4('0x3b')](this['context']),'playlist':_0x17e46b,'playing_item':'','status':0x0};this[a22_0x11b4('0x24')][a22_0x11b4('0x3e')](a22_0x11b4('0x3f'),_0x488b72,![])[a22_0x11b4('0x4')](function(_0x15a9a1){console['log'](a22_0x11b4('0x40')+Date());})[a22_0x11b4('0x41')](function(_0x2f9b42){});console[a22_0x11b4('0x42')](_0x488b72);}['bind'](this));const _0x2aa5be=this[a22_0x11b4('0x26')][a22_0x11b4('0x3c')];if(!_0x2aa5be||_0x2aa5be==''){this['config'][a22_0x11b4('0x3c')]=uuidv4();this[a22_0x11b4('0x26')]={'deviceUuid':this[a22_0x11b4('0x26')]['deviceUuid'],'playerId':this['config'][a22_0x11b4('0x2a')]};fs[a22_0x11b4('0x43')](configFile,JSON['stringify'](this['config']));}}['getStatus'](){console[a22_0x11b4('0x42')](a22_0x11b4('0x36'));this[a22_0x11b4('0x31')][a22_0x11b4('0x44')][a22_0x11b4('0x45')]()['then'](function(_0x37a40e){const _0x177db2=_0x37a40e[a22_0x11b4('0x46')][a22_0x11b4('0x47')];this[a22_0x11b4('0x48')](_0x177db2);}[a22_0x11b4('0x37')](this))[a22_0x11b4('0x41')](function(_0x16054d){console['log'](_0x16054d);this[a22_0x11b4('0x48')](_0x16054d);}[a22_0x11b4('0x37')](this));}['reportStatus'](_0x4ba2c3){console[a22_0x11b4('0x42')](a22_0x11b4('0x49')+_0x4ba2c3);const _0x78d6ab={'player_id':this[a22_0x11b4('0x2a')],'device_uuid':this[a22_0x11b4('0x26')]['deviceUuid'],'status':_0x4ba2c3!=''&&_0x4ba2c3!=null?0x1:0x0,'playing_item':_0x4ba2c3};this[a22_0x11b4('0x24')][a22_0x11b4('0x3e')](a22_0x11b4('0x4a'),_0x78d6ab,![])[a22_0x11b4('0x4')](function(_0x8f9577){console['log'](a22_0x11b4('0x4b')+Date());})['catch'](function(_0x46525e){});}[a22_0x11b4('0x34')](){fsExtra[a22_0x11b4('0x4c')](this[a22_0x11b4('0x17')],_0x535f92=>{});fsExtra[a22_0x11b4('0x4c')](this[a22_0x11b4('0x19')],_0x22e1b8=>{});fsExtra[a22_0x11b4('0x4c')](this['filesFolder'],_0x2bc119=>{});}[a22_0x11b4('0x35')](){const _0x24e616=format(this[a22_0x11b4('0x2f')],this[a22_0x11b4('0x2a')]);console['log'](_0x24e616);request({'url':_0x24e616,'json':!![]},function(_0x3b05c3,_0x18c57b,_0x9a2f6c){console[a22_0x11b4('0x42')]('loadMediaList:\x20');console[a22_0x11b4('0x42')](_0x9a2f6c);this[a22_0x11b4('0x4d')]=_0x9a2f6c;this['playlistChanged']=this[a22_0x11b4('0x4e')]();fsExtra[a22_0x11b4('0x4f')](this['tempFolder']);this['downloadFiles']=[];this[a22_0x11b4('0x23')]=[];this[a22_0x11b4('0x20')]=0x0;for(const _0x77e90e in _0x9a2f6c){this[a22_0x11b4('0x22')]['push'](_0x9a2f6c[_0x77e90e]);}console[a22_0x11b4('0x42')](a22_0x11b4('0x50')+this['downloadFiles'][a22_0x11b4('0x51')]);if(this[a22_0x11b4('0x22')][a22_0x11b4('0x51')]>0x0){this[a22_0x11b4('0x52')]();}}['bind'](this));}[a22_0x11b4('0x53')](){if(fsExtra[a22_0x11b4('0x54')](this['tempFolder'])){fsExtra[a22_0x11b4('0x4f')](this[a22_0x11b4('0x19')]);}if(fsExtra['existsSync'](this[a22_0x11b4('0x1b')])){fsExtra[a22_0x11b4('0x4f')](this['filesFolder']);}if(!fsExtra['existsSync'](this[a22_0x11b4('0x1d')])){fsExtra['removeSync'](this[a22_0x11b4('0x1d')]);}if(!fsExtra[a22_0x11b4('0x54')](this['m3uFile'])){fsExtra[a22_0x11b4('0x55')](this[a22_0x11b4('0x1e')]);}this[a22_0x11b4('0x35')]();}[a22_0x11b4('0x56')](){exec(a22_0x11b4('0x57'),function(_0x4e27db){console[a22_0x11b4('0x42')](_0x4e27db);});}[a22_0x11b4('0x4e')](){const _0x302ce8=JSON[a22_0x11b4('0x3b')](this['newPlayList']);try{if(!fsExtra['existsSync'](this['playListFile'])){return!![];}else{const _0x43643e=fsExtra[a22_0x11b4('0x29')](this[a22_0x11b4('0x1d')])[a22_0x11b4('0x58')]();if(_0x43643e!=_0x302ce8){return!![];}}}catch(_0x342e8c){console[a22_0x11b4('0x42')](_0x342e8c);}return![];}[a22_0x11b4('0x52')](){console[a22_0x11b4('0x42')](a22_0x11b4('0x59')+this['currentFile']+a22_0x11b4('0x5a')+this['downloadFiles'][a22_0x11b4('0x51')]);if(this[a22_0x11b4('0x20')]>=this[a22_0x11b4('0x22')]['length']){this[a22_0x11b4('0x5b')]();return;}const _0x92861c=String(this[a22_0x11b4('0x22')][this[a22_0x11b4('0x20')]]['path']);const _0x240a47=this[a22_0x11b4('0x22')][this['currentFile']][a22_0x11b4('0x5c')];let _0x2a4b25=_0x92861c[a22_0x11b4('0x5d')](_0x92861c['lastIndexOf']('/')+0x1);const _0x63213d=_0x2a4b25[a22_0x11b4('0x5e')]('.')[a22_0x11b4('0x5f')](0x0,-0x1)[a22_0x11b4('0x60')]('.');let _0xc786f=this[a22_0x11b4('0x2b')]+_0x92861c;const _0x3d209c=_0xc786f['split']('.')[a22_0x11b4('0x5f')](0x0,-0x1)['join']('.');if(_0x240a47==a22_0x11b4('0x61')){_0x2a4b25=_0x2a4b25+a22_0x11b4('0x62');}else if(_0x240a47==a22_0x11b4('0x63')){_0x2a4b25=_0x63213d+a22_0x11b4('0x62');_0xc786f=_0x3d209c+a22_0x11b4('0x62');}console[a22_0x11b4('0x42')](a22_0x11b4('0x64'));console[a22_0x11b4('0x42')](_0x92861c);console[a22_0x11b4('0x42')](_0x240a47);console[a22_0x11b4('0x42')](_0x2a4b25);console[a22_0x11b4('0x42')](_0xc786f);console[a22_0x11b4('0x42')](_0x63213d);console['log'](_0x3d209c);console[a22_0x11b4('0x42')](a22_0x11b4('0x64'));if(fsExtra[a22_0x11b4('0x54')](this[a22_0x11b4('0x19')]+_0x2a4b25)){this['checkVideo'](this[a22_0x11b4('0x19')]+_0x2a4b25)['then'](function(_0x337cd6){if(_0x337cd6){this[a22_0x11b4('0x20')]++;}else{this[a22_0x11b4('0x21')]=!![];}this['download']();}[a22_0x11b4('0x37')](this));}else if(fsExtra[a22_0x11b4('0x54')](this[a22_0x11b4('0x1b')]+_0x2a4b25)){this[a22_0x11b4('0x65')](this[a22_0x11b4('0x1b')]+_0x2a4b25)[a22_0x11b4('0x4')](function(_0x305970){if(_0x305970){fsExtra[a22_0x11b4('0x66')](this[a22_0x11b4('0x1b')]+_0x2a4b25,this[a22_0x11b4('0x19')]+_0x2a4b25);this[a22_0x11b4('0x20')]++;}else{this['playlistChanged']=!![];}this['download']();}[a22_0x11b4('0x37')](this));}else{console['log'](a22_0x11b4('0x67')+_0xc786f);this[a22_0x11b4('0x21')]=!![];if(_0x240a47==a22_0x11b4('0x61')){this[a22_0x11b4('0x68')](_0x92861c);}else{this[a22_0x11b4('0x69')](_0xc786f,_0x2a4b25,_0x240a47);}}}[a22_0x11b4('0x65')](_0x2c274a){return __awaiter(this,void 0x0,void 0x0,function*(){console[a22_0x11b4('0x42')](a22_0x11b4('0x6a')+_0x2c274a);const _0x2f73b5=yield mediainfo(_0x2c274a)['catch'](_0x46f0bc=>{console[a22_0x11b4('0x42')](_0x46f0bc);fsExtra[a22_0x11b4('0x55')](_0x2c274a);return![];});const _0x245812=_0x2f73b5[a22_0x11b4('0x6b')]['track'][a22_0x11b4('0x51')]>0x1&&_0x2f73b5['media']['track'][0x1][a22_0x11b4('0x6c')]==a22_0x11b4('0x6d');if(!_0x245812){fsExtra[a22_0x11b4('0x55')](_0x2c274a);}console[a22_0x11b4('0x42')](a22_0x11b4('0x6e')+_0x245812);return _0x245812;});}[a22_0x11b4('0x69')](_0x3fc73d,_0x51008d,_0x2e8f8d){const _0x2a7464=new Downloader();console[a22_0x11b4('0x42')](_0x3fc73d);console[a22_0x11b4('0x42')](_0x51008d);console[a22_0x11b4('0x42')](_0x2e8f8d);const _0x514fb4=_0x2a7464[a22_0x11b4('0x52')](_0x3fc73d,this[a22_0x11b4('0x19')]+_0x51008d);urlExists(_0x3fc73d,function(_0x5c9864,_0x35d198){if(_0x35d198){if(this[a22_0x11b4('0x23')][a22_0x11b4('0x6f')](this[a22_0x11b4('0x20')])){const _0x1085ff=this[a22_0x11b4('0x23')]['indexOf'](this[a22_0x11b4('0x20')]);if(_0x1085ff>-0x1){this[a22_0x11b4('0x23')][a22_0x11b4('0x70')](_0x1085ff,0x1);}}console[a22_0x11b4('0x42')](a22_0x11b4('0x71')+_0x3fc73d);_0x514fb4[a22_0x11b4('0x72')]();}else{if(!this[a22_0x11b4('0x23')]['includes'](this['currentFile'])){this[a22_0x11b4('0x23')][a22_0x11b4('0x73')](this[a22_0x11b4('0x20')]);}console[a22_0x11b4('0x42')](a22_0x11b4('0x74')+_0x3fc73d);this['currentFile']++;this[a22_0x11b4('0x52')]();}}[a22_0x11b4('0x37')](this));_0x514fb4['on'](a22_0x11b4('0x72'),function(_0x514fb4){console['log'](a22_0x11b4('0x75')+_0x3fc73d);});_0x514fb4['on']('error',function(_0x514fb4){console[a22_0x11b4('0x42')]('error:\x20');this[a22_0x11b4('0x52')]();}[a22_0x11b4('0x37')](this));_0x514fb4['on']('end',function(_0x514fb4){console['log'](a22_0x11b4('0x76'));console[a22_0x11b4('0x42')](a22_0x11b4('0x77')+_0x51008d);console[a22_0x11b4('0x42')](a22_0x11b4('0x78')+_0x2e8f8d);this['checkVideo'](this[a22_0x11b4('0x19')]+_0x51008d)['then'](function(_0x528797){if(_0x528797){this[a22_0x11b4('0x20')]++;}this[a22_0x11b4('0x52')]();}[a22_0x11b4('0x37')](this));}[a22_0x11b4('0x37')](this));_0x514fb4['on'](a22_0x11b4('0x79'),function(_0x514fb4){console[a22_0x11b4('0x42')](a22_0x11b4('0x79'));});_0x514fb4['on'](a22_0x11b4('0x7a'),function(_0x514fb4){console['log']('destroyed');});_0x514fb4['on']('retry',function(_0x514fb4){console['log'](a22_0x11b4('0x7b'));});}['downloadHTTPFile'](_0x5c72e2,_0x2888d5,_0x218f45,_0xe667da){console[a22_0x11b4('0x42')](a22_0x11b4('0x7c'));console['log'](_0x5c72e2);const _0x28990f=!![];let _0x15a2f2=0x0;const _0x461f61='';console[a22_0x11b4('0x42')]('Attempting\x20to\x20download\x20'+_0x5c72e2+a22_0x11b4('0x7d')+_0x2888d5);if(_0x15a2f2){if(_0x15a2f2>0x5){_0xe667da(a22_0x11b4('0x7e'),_0x5c72e2,_0x218f45,null);return;}}else{_0x15a2f2=0x0;}const _0x10e135=this[a22_0x11b4('0x19')]+_0x2888d5;let _0x372d48;if(_0xe667da===undefined){console[a22_0x11b4('0x42')](a22_0x11b4('0x7f')+_0x5c72e2+a22_0x11b4('0x7d')+_0x10e135);_0xe667da=function(_0x2bbd5e,_0x1dc11e){console[a22_0x11b4('0x42')]('downloadFile\x20callback\x20result\x20undefined:\x20',_0x2bbd5e,_0x1dc11e);};}http[a22_0x11b4('0x80')]['maxSockets']=0x64;const _0x51842f={'host':url[a22_0x11b4('0x27')](_0x5c72e2)[a22_0x11b4('0x81')],'port':0x50,'path':url[a22_0x11b4('0x27')](_0x5c72e2)[a22_0x11b4('0x82')],'agent':![]};const _0x2cd7cc=http[a22_0x11b4('0x83')](_0x51842f,function(_0x40b503){let _0x2cfa5b=0x0;let _0x3572c2=0x0;function _0x22c2c6(){if(_0x2cfa5b===undefined){console['log'](_0x2888d5+'\x20Progress:\x20unknown\x09'+_0x3572c2+'/'+'?');}const _0x4c3190=_0x3572c2/_0x2cfa5b*0x64;console[a22_0x11b4('0x42')](_0x2888d5+'\x20Progress:\x20'+_0x4c3190+'%\x09'+_0x3572c2+'/'+_0x2cfa5b);}console[a22_0x11b4('0x42')](_0x2888d5+'\x20'+_0x40b503[a22_0x11b4('0x84')]);switch(_0x40b503['statusCode']){case 0xc8:_0x2cfa5b=_0x40b503[a22_0x11b4('0x85')][a22_0x11b4('0x86')]||_0x461f61;fs['stat'](_0x10e135,function(_0x4c07ee,_0x56c766){if(!_0x4c07ee){console['log']('Have\x20already\x20downloaded\x20'+_0x10e135);if(_0x56c766[a22_0x11b4('0x87')]==_0x2cfa5b){console['log'](a22_0x11b4('0x88')+_0x2cfa5b+')');console[a22_0x11b4('0x42')]('Redownloading');}else{console['log'](a22_0x11b4('0x89')+_0x56c766[a22_0x11b4('0x87')]+a22_0x11b4('0x8a')+_0x2cfa5b+')');}}_0x372d48=fs[a22_0x11b4('0x8b')](_0x10e135);_0x40b503[a22_0x11b4('0x8c')](_0x372d48);_0x40b503['on'](a22_0x11b4('0x8d'),function(_0x2a17b3){_0x3572c2+=_0x2a17b3[a22_0x11b4('0x51')];_0x22c2c6();});_0x2cd7cc['on']('error',function(_0x4c07ee){console[a22_0x11b4('0x42')](a22_0x11b4('0x8e'));console[a22_0x11b4('0x42')](_0x4c07ee);});_0x372d48['on']('finish',function(){console[a22_0x11b4('0x42')](a22_0x11b4('0x8f')+_0x5c72e2+a22_0x11b4('0x7d')+_0x2888d5);_0xe667da(null,_0x2888d5,_0x218f45,_0x2888d5);}['bind'](this));});break;case 0x12e:const _0x566507=_0x40b503[a22_0x11b4('0x85')]['location'];console[a22_0x11b4('0x42')](a22_0x11b4('0x90')+_0x5c72e2+a22_0x11b4('0x7d')+_0x566507);if(_0x15a2f2<0x5){this[a22_0x11b4('0x7c')](_0x566507,_0x2888d5,_0xe667da,_0x15a2f2++);}else{console['error'](a22_0x11b4('0x91')+_0x5c72e2+'.');_0xe667da(a22_0x11b4('0x92'),null,null,null);}return;case 0x194:console[a22_0x11b4('0x42')]('File\x20Not\x20Found\x20'+_0x5c72e2);default:console[a22_0x11b4('0x42')]('Problem\x20downloading\x20'+_0x5c72e2+a22_0x11b4('0x93')+_0x40b503[a22_0x11b4('0x84')]);_0x2cd7cc['abort']();_0xe667da(_0x40b503[a22_0x11b4('0x84')],null,null,null);return;}})['on'](a22_0x11b4('0x94'),function(_0x3c19c5){console[a22_0x11b4('0x42')]('Error\x20Downloading:\x20'+_0x5c72e2+'\x20'+_0x3c19c5[a22_0x11b4('0x95')]);_0xe667da(_0x3c19c5,null,null,null);});}[a22_0x11b4('0x96')](_0x2dcf98,_0x59128d,_0x251d25,_0x1b9255){console[a22_0x11b4('0x42')](a22_0x11b4('0x96'));console['log'](_0x2dcf98);console[a22_0x11b4('0x42')](_0x59128d);console['log'](_0x251d25);console[a22_0x11b4('0x42')](_0x1b9255);if(_0x251d25==a22_0x11b4('0x63')){const _0x33179a=this[a22_0x11b4('0x22')][this[a22_0x11b4('0x20')]][a22_0x11b4('0x97')]!=null?this[a22_0x11b4('0x22')][this['currentFile']][a22_0x11b4('0x97')]:0x1e;this['createImageVideo'](_0x1b9255,_0x33179a);}else if(_0x251d25==a22_0x11b4('0x98')){if(_0x2dcf98==null&&_0x59128d!=''){this[a22_0x11b4('0x20')]++;}this[a22_0x11b4('0x52')]();}console['log'](this[a22_0x11b4('0x20')]);}[a22_0x11b4('0x99')](_0x4d62d1,_0x2e74d,_0x37ae22){progress(request(_0x4d62d1),{})['on'](a22_0x11b4('0x9a'),function(_0x2d0a5f){console[a22_0x11b4('0x42')](_0x2d0a5f);})['on'](a22_0x11b4('0x94'),function(_0x5a67fa){console[a22_0x11b4('0x42')]('Error\x20downloading\x20file');this[a22_0x11b4('0x52')]();})['on'](a22_0x11b4('0x76'),function(){console['log'](a22_0x11b4('0x77')+_0x2e74d);console[a22_0x11b4('0x42')](a22_0x11b4('0x78')+_0x37ae22);if(_0x37ae22==a22_0x11b4('0x63')){const _0x461c15=this['downloadFiles'][this[a22_0x11b4('0x20')]][a22_0x11b4('0x97')]!=null?this['downloadFiles'][this[a22_0x11b4('0x20')]][a22_0x11b4('0x97')]:0x1e;this[a22_0x11b4('0x9b')](_0x2e74d,_0x461c15);}else if(_0x37ae22==a22_0x11b4('0x98')){this['currentFile']++;this[a22_0x11b4('0x52')]();}}[a22_0x11b4('0x37')](this))[a22_0x11b4('0x8c')](fs[a22_0x11b4('0x8b')](this[a22_0x11b4('0x19')]+_0x2e74d));}[a22_0x11b4('0x9b')](_0x37049f,_0x1c72da=0x1e){const _0x278a46=this[a22_0x11b4('0x19')]+_0x37049f;console[a22_0x11b4('0x42')](_0x278a46);console['log'](_0x37049f);const _0x38fe62=_0x37049f[a22_0x11b4('0x5e')]('.')[a22_0x11b4('0x5f')](0x0,-0x1)[a22_0x11b4('0x60')]('.');const _0x22af9e=a22_0x11b4('0x9c');const _0x2aba26=['-y','-r','1/2',a22_0x11b4('0x9d'),'1',a22_0x11b4('0x9e'),a22_0x11b4('0x9f'),'-i',_0x278a46,'-t',String(_0x1c72da),a22_0x11b4('0xa0'),a22_0x11b4('0xa1'),'-pix_fmt',a22_0x11b4('0xa2'),'-r','25',a22_0x11b4('0xa3'),a22_0x11b4('0xa4'),this['tempFolder']+_0x38fe62+'.mp4'];const _0x4759f9=spawn(_0x22af9e,_0x2aba26);_0x4759f9[a22_0x11b4('0xa5')]['on']('data',function(_0x145760){console[a22_0x11b4('0x42')](a22_0x11b4('0xa6')+_0x278a46);});_0x4759f9[a22_0x11b4('0xa7')]['on']('data',function(_0x4b195b){console['log'](a22_0x11b4('0xa8')+_0x4b195b);}['bind'](this));_0x4759f9['on'](a22_0x11b4('0xa9'),function(){console['log'](a22_0x11b4('0xaa'));this[a22_0x11b4('0x20')]++;this[a22_0x11b4('0x52')]();}['bind'](this));}['downloadYouTube'](_0x58a099){const _0x593907=this[a22_0x11b4('0x19')]+'/'+_0x58a099+'.mp4';const _0x14a28b=youtubedl(a22_0x11b4('0xab')+_0x58a099,[a22_0x11b4('0xac')],{'cwd':__dirname});_0x14a28b['on'](a22_0x11b4('0xad'),function(_0xe9b99e){console[a22_0x11b4('0x42')](a22_0x11b4('0xae'));console['log'](a22_0x11b4('0xaf')+_0xe9b99e[a22_0x11b4('0xb0')]);console[a22_0x11b4('0x42')](a22_0x11b4('0xb1')+_0xe9b99e[a22_0x11b4('0x87')]);});_0x14a28b['on'](a22_0x11b4('0xb2'),function complete(_0x5c263b){'use strict';console[a22_0x11b4('0x42')]('filename:\x20'+_0x5c263b['_filename']+'\x20already\x20downloaded.');});_0x14a28b['on'](a22_0x11b4('0x76'),function(){console[a22_0x11b4('0x42')](a22_0x11b4('0xb3'));this[a22_0x11b4('0x65')](_0x593907)[a22_0x11b4('0x4')](function(_0x451b5a){if(_0x451b5a){this[a22_0x11b4('0x20')]++;}this['download']();}['bind'](this));}[a22_0x11b4('0x37')](this));_0x14a28b[a22_0x11b4('0x8c')](fs[a22_0x11b4('0x8b')](_0x593907));}['finishProcess'](){console[a22_0x11b4('0x42')]('Finishing');if(this[a22_0x11b4('0x21')]){if(this[a22_0x11b4('0x23')][a22_0x11b4('0x51')]==0x0){fs[a22_0x11b4('0x43')](this[a22_0x11b4('0x1d')],JSON[a22_0x11b4('0x3b')](this['newPlayList']));let _0x703948='#EXTCPlayListM3U::M3U'+'\x0d\x0a'+a22_0x11b4('0xb4')+'\x0d\x0a';for(const _0x26c5da in this[a22_0x11b4('0x22')]){const _0x2ed9a7=this['downloadFiles'][_0x26c5da][a22_0x11b4('0xb5')];const _0x208db2=this[a22_0x11b4('0x22')][_0x26c5da][a22_0x11b4('0x5c')];const _0x49d444=_0x2ed9a7[a22_0x11b4('0x5d')](_0x2ed9a7[a22_0x11b4('0xb6')]('/')+0x1);let _0x32f180=_0x49d444[a22_0x11b4('0x5e')]('.')[a22_0x11b4('0x5f')](0x0,-0x1)[a22_0x11b4('0x60')]('.');if(_0x208db2=='youtube_single'){_0x32f180=_0x2ed9a7;}_0x703948+='/home/osmc/luloclient/media/files/'+_0x32f180+a22_0x11b4('0x62')+'\x0d\x0a';}fsExtra[a22_0x11b4('0x4f')](this[a22_0x11b4('0x1b')]);fsExtra[a22_0x11b4('0x66')](this[a22_0x11b4('0x19')],this['filesFolder']);fsExtra['writeFileSync'](this[a22_0x11b4('0x1e')],_0x703948);fsExtra['emptyDirSync'](this[a22_0x11b4('0x19')]);console[a22_0x11b4('0x42')](a22_0x11b4('0xb7'));this[a22_0x11b4('0x56')]();}else{console[a22_0x11b4('0x42')](a22_0x11b4('0xb8'));this['currentFile']=0x0;setTimeout(function(){this[a22_0x11b4('0x52')]();}[a22_0x11b4('0x37')](this),0x1388);}}else{console[a22_0x11b4('0x42')](a22_0x11b4('0xb9'));}}}exports[a22_0x11b4('0xba')]=SyncPlaylistsService;