var a22_0xaa69=['reloadMediaList','existsSync','removeSync','hasPlayListChanged','toString','error','download','this.currentFile:\x20','media_type','substring','lastIndexOf','split','slice','join','youtube_single','.mp4','image','**********+','checkVideo','copySync','Downloading:\x20','downloader','videoFile:\x20','media','track','@type','Video','mediainfo\x20check:','includes','indexOf','downloading:\x20','start','start:\x20','error:\x20','end','mediaType:\x20','stopped','retry','Attempting\x20to\x20download\x20','\x20to\x20','Max\x20redirects\x20reached','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','downloadFile\x20callback\x20result\x20undefined:\x20','globalAgent','host','pathname','get','\x20Progress:\x20','statusCode','headers','content-length','Have\x20already\x20downloaded\x20','size','Redownloading','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(','createWriteStream','pipe','data','err:\x20','Downloaded\x20','location','Redirect\x20','downloadHTTPFile','Redirect\x20limit\x20encountered\x20for\x20','302','Problem\x20downloading\x20','abort','Error\x20Downloading:\x20','message','downloadHTTPFileCallback','duration','createImageVideo','video','downloadRequestFile','Error\x20downloading\x20file','Downloaded:\x20','-loop','-pattern_type','-c:v','libx264','-pix_fmt','yuv420p','-vf','stdout','stderr','stderr:\x20','close','finished\x20mp4\x20convert','downloadYouTube','http://www.youtube.com/watch?v=','--format=18','info','filename:\x20','_filename','size:\x20','complete','\x20already\x20downloaded.','finished\x20youtube\x20downloading!','Finishing','path','Finished','kodi-send','--action','/home/osmc/luloclient/media/files/lulo_playlist.m3u','Playlist\x20incomplete,\x20retry.','__awaiter','next','throw','value','defineProperty','__esModule','../infrastructure/HttpClientService','node-mediainfo','url','fs-extra','request','request-progress','child_process','spawn','is-image','string-template','youtube-dl','uuid/v4','config.json','context.json','url-exists','mt-files-downloader','mediaFolder','media/','temp/','filesFolder','files/','playListFile','m3uFile','failDownloadFiles','httpClientService','init','config','parse','readFileSync','context','playerId','env','WEB_SERVICE_URL','deploy/','playListServiceURL','baseURL','api/player_playlist.php?player_id={0}','loadMediaList','reportStatus','bind','checkDependencies','deviceUuid','writeFileSync','networkInterfaces','stringify','post','then','log','catch','http://restapi.lulo.run/player_devices/report_status','reportStatusResponse:\x20','ensureDir','tempFolder','newPlayList','emptyDirSync','downloadFiles','currentFile','Total:\x20','length'];(function(_0x154b8d,_0x143438){var _0x274941=function(_0x53573f){while(--_0x53573f){_0x154b8d['push'](_0x154b8d['shift']());}};_0x274941(++_0x143438);}(a22_0xaa69,0x69));var a22_0x55c7=function(_0x26e8bc,_0x9e878b){_0x26e8bc=_0x26e8bc-0x0;var _0x18a906=a22_0xaa69[_0x26e8bc];return _0x18a906;};'use strict';var __awaiter=this&&this[a22_0x55c7('0x0')]||function(_0x397f89,_0x5240b4,_0x19f066,_0xbf036d){return new(_0x19f066||(_0x19f066=Promise))(function(_0x1ec445,_0x24b489){function _0xd8d98e(_0x2c8023){try{_0x1b09bf(_0xbf036d[a22_0x55c7('0x1')](_0x2c8023));}catch(_0x548225){_0x24b489(_0x548225);}}function _0x5b4d67(_0x1aa852){try{_0x1b09bf(_0xbf036d[a22_0x55c7('0x2')](_0x1aa852));}catch(_0x271f4c){_0x24b489(_0x271f4c);}}function _0x1b09bf(_0x429ccf){_0x429ccf['done']?_0x1ec445(_0x429ccf[a22_0x55c7('0x3')]):new _0x19f066(function(_0x1ec445){_0x1ec445(_0x429ccf['value']);})['then'](_0xd8d98e,_0x5b4d67);}_0x1b09bf((_0xbf036d=_0xbf036d['apply'](_0x397f89,_0x5240b4||[]))['next']());});};Object[a22_0x55c7('0x4')](exports,a22_0x55c7('0x5'),{'value':!![]});const HttpClientService_1=require(a22_0x55c7('0x6'));const mediainfo=require(a22_0x55c7('0x7'));const fs=require('fs');const url=require(a22_0x55c7('0x8'));const http=require('http');const fsExtra=require(a22_0x55c7('0x9'));const request=require(a22_0x55c7('0xa'));const progress=require(a22_0x55c7('0xb'));const spawn=require(a22_0x55c7('0xc'))[a22_0x55c7('0xd')];const isImage=require(a22_0x55c7('0xe'));const format=require(a22_0x55c7('0xf'));const os=require('os');const youtubedl=require(a22_0x55c7('0x10'));const uuidv4=require(a22_0x55c7('0x11'));const configFile=a22_0x55c7('0x12');const contextFile=a22_0x55c7('0x13');const urlExists=require(a22_0x55c7('0x14'));const Downloader=require(a22_0x55c7('0x15'));class SyncPlaylistsService{constructor(){this[a22_0x55c7('0x16')]=a22_0x55c7('0x17');this['tempFolder']=this['mediaFolder']+a22_0x55c7('0x18');this[a22_0x55c7('0x19')]=this[a22_0x55c7('0x16')]+a22_0x55c7('0x1a');this[a22_0x55c7('0x1b')]=this[a22_0x55c7('0x16')]+'playlist.txt';this[a22_0x55c7('0x1c')]=this[a22_0x55c7('0x19')]+'lulo_playlist.m3u';this['currentFile']=0x0;this['downloadFiles']=[];this[a22_0x55c7('0x1d')]=[];this['newPlayList']={};this[a22_0x55c7('0x1e')]=new HttpClientService_1['HttpClientService']();}[a22_0x55c7('0x1f')](){this[a22_0x55c7('0x20')]=JSON[a22_0x55c7('0x21')](fs[a22_0x55c7('0x22')](configFile));this[a22_0x55c7('0x23')]=JSON['parse'](fs[a22_0x55c7('0x22')](contextFile));this[a22_0x55c7('0x24')]=this[a22_0x55c7('0x20')]['playerId'];this['baseURL']=process[a22_0x55c7('0x25')][a22_0x55c7('0x26')]+a22_0x55c7('0x27');this[a22_0x55c7('0x28')]=this[a22_0x55c7('0x29')]+a22_0x55c7('0x2a');this['registerClient']();this['checkFolders']();this[a22_0x55c7('0x2b')]();setInterval(function(){this[a22_0x55c7('0x2c')]();}[a22_0x55c7('0x2d')](this),0xea60);}[a22_0x55c7('0x2e')](){}['registerClient'](){const _0x32f190=this[a22_0x55c7('0x20')][a22_0x55c7('0x2f')];if(!_0x32f190||_0x32f190==''){this[a22_0x55c7('0x20')]['deviceUuid']=uuidv4();this[a22_0x55c7('0x20')]={'deviceUuid':this[a22_0x55c7('0x20')][a22_0x55c7('0x2f')],'playerId':this[a22_0x55c7('0x20')][a22_0x55c7('0x24')]};fs[a22_0x55c7('0x30')](configFile,JSON['stringify'](this['config']));}const _0x15c91c={'player_id':this[a22_0x55c7('0x24')],'device_uuid':this['config'][a22_0x55c7('0x2f')],'network_info':JSON['stringify'](os[a22_0x55c7('0x31')]()),'firmware_info':JSON[a22_0x55c7('0x32')](this[a22_0x55c7('0x23')]),'status':0x1};this['httpClientService'][a22_0x55c7('0x33')]('http://restapi.lulo.run/player_devices/register',_0x15c91c,![])[a22_0x55c7('0x34')](function(_0x18a6de){console[a22_0x55c7('0x35')]('register\x20response:\x20'+Date());})[a22_0x55c7('0x36')](function(_0x4fcaf1){});}[a22_0x55c7('0x2c')](){const _0x73b3ef={'player_id':this[a22_0x55c7('0x24')],'device_uuid':this['config'][a22_0x55c7('0x2f')],'status':0x1};this['httpClientService'][a22_0x55c7('0x33')](a22_0x55c7('0x37'),_0x73b3ef,![])[a22_0x55c7('0x34')](function(_0x100541){console[a22_0x55c7('0x35')](a22_0x55c7('0x38')+Date());})[a22_0x55c7('0x36')](function(_0x3b475c){});}['checkFolders'](){fsExtra['ensureDir'](this[a22_0x55c7('0x16')],_0x2c14eb=>{});fsExtra[a22_0x55c7('0x39')](this[a22_0x55c7('0x3a')],_0x522974=>{});fsExtra[a22_0x55c7('0x39')](this[a22_0x55c7('0x19')],_0x315acc=>{});}[a22_0x55c7('0x2b')](){const _0x590a42=format(this[a22_0x55c7('0x28')],this['playerId']);console[a22_0x55c7('0x35')](_0x590a42);request({'url':_0x590a42,'json':!![]},function(_0x5959c9,_0x284cec,_0x2e5a14){this[a22_0x55c7('0x3b')]=_0x2e5a14;fsExtra[a22_0x55c7('0x3c')](this[a22_0x55c7('0x3a')]);this[a22_0x55c7('0x3d')]=[];this[a22_0x55c7('0x1d')]=[];this[a22_0x55c7('0x3e')]=0x0;for(const _0x26bd42 in _0x2e5a14){this[a22_0x55c7('0x3d')]['push'](_0x2e5a14[_0x26bd42]);}console[a22_0x55c7('0x35')](a22_0x55c7('0x3f')+this[a22_0x55c7('0x3d')][a22_0x55c7('0x40')]);if(this[a22_0x55c7('0x3d')]['length']>0x0){this['download']();}}[a22_0x55c7('0x2d')](this));}[a22_0x55c7('0x41')](){if(fsExtra[a22_0x55c7('0x42')](this[a22_0x55c7('0x1b')])){fsExtra[a22_0x55c7('0x43')](this['playListFile']);}this[a22_0x55c7('0x2b')]();}[a22_0x55c7('0x44')](){const _0x443094=JSON['stringify'](this[a22_0x55c7('0x3b')]);try{if(!fs[a22_0x55c7('0x42')](this[a22_0x55c7('0x1b')])){return!![];}else{const _0x977c1e=fs[a22_0x55c7('0x22')](this['playListFile'])[a22_0x55c7('0x45')]();if(_0x977c1e!=_0x443094){return!![];}}}catch(_0x7b3b87){console[a22_0x55c7('0x46')](_0x7b3b87);}return![];}[a22_0x55c7('0x47')](){console[a22_0x55c7('0x35')](a22_0x55c7('0x48')+this[a22_0x55c7('0x3e')]+'\x20of\x20'+this[a22_0x55c7('0x3d')][a22_0x55c7('0x40')]);if(this[a22_0x55c7('0x3e')]>=this[a22_0x55c7('0x3d')][a22_0x55c7('0x40')]){this['finishProcess']();return;}const _0x14fdd2=String(this['downloadFiles'][this['currentFile']]['path']);const _0xd119a2=this[a22_0x55c7('0x3d')][this[a22_0x55c7('0x3e')]][a22_0x55c7('0x49')];let _0x13210f=_0x14fdd2[a22_0x55c7('0x4a')](_0x14fdd2[a22_0x55c7('0x4b')]('/')+0x1);const _0xa5422a=_0x13210f[a22_0x55c7('0x4c')]('.')[a22_0x55c7('0x4d')](0x0,-0x1)[a22_0x55c7('0x4e')]('.');let _0x4e16dd=this[a22_0x55c7('0x29')]+_0x14fdd2;const _0x58acb7=_0x4e16dd['split']('.')[a22_0x55c7('0x4d')](0x0,-0x1)[a22_0x55c7('0x4e')]('.');if(_0xd119a2==a22_0x55c7('0x4f')){_0x13210f=_0x13210f+a22_0x55c7('0x50');}else if(_0xd119a2==a22_0x55c7('0x51')){_0x13210f=_0xa5422a+a22_0x55c7('0x50');_0x4e16dd=_0x58acb7+a22_0x55c7('0x50');}console[a22_0x55c7('0x35')](a22_0x55c7('0x52'));console['log'](_0x14fdd2);console['log'](_0xd119a2);console['log'](_0x13210f);console[a22_0x55c7('0x35')](_0x4e16dd);console['log'](_0xa5422a);console[a22_0x55c7('0x35')](_0x58acb7);console[a22_0x55c7('0x35')](a22_0x55c7('0x52'));if(fsExtra[a22_0x55c7('0x42')](this[a22_0x55c7('0x3a')]+_0x13210f)){this[a22_0x55c7('0x53')](this[a22_0x55c7('0x3a')]+_0x13210f)[a22_0x55c7('0x34')](function(_0x536af8){if(_0x536af8){this['currentFile']++;}this[a22_0x55c7('0x47')]();}[a22_0x55c7('0x2d')](this));}else if(fsExtra[a22_0x55c7('0x42')](this[a22_0x55c7('0x19')]+_0x13210f)){this['checkVideo'](this[a22_0x55c7('0x19')]+_0x13210f)[a22_0x55c7('0x34')](function(_0x927181){if(_0x927181){fsExtra[a22_0x55c7('0x54')](this[a22_0x55c7('0x19')]+_0x13210f,this[a22_0x55c7('0x3a')]+_0x13210f);this[a22_0x55c7('0x3e')]++;}this[a22_0x55c7('0x47')]();}['bind'](this));}else{console[a22_0x55c7('0x35')](a22_0x55c7('0x55')+_0x4e16dd);if(_0xd119a2==a22_0x55c7('0x4f')){this['downloadYouTube'](_0x14fdd2);}else{this[a22_0x55c7('0x56')](_0x4e16dd,_0x13210f,_0xd119a2);}}}[a22_0x55c7('0x53')](_0x3045da){return __awaiter(this,void 0x0,void 0x0,function*(){console['log'](a22_0x55c7('0x57')+_0x3045da);const _0x3c9b2f=yield mediainfo(_0x3045da)[a22_0x55c7('0x36')](_0x177f0d=>console[a22_0x55c7('0x35')](_0x177f0d));const _0x3d7861=_0x3c9b2f[a22_0x55c7('0x58')][a22_0x55c7('0x59')][a22_0x55c7('0x40')]>0x1&&_0x3c9b2f[a22_0x55c7('0x58')][a22_0x55c7('0x59')][0x1][a22_0x55c7('0x5a')]==a22_0x55c7('0x5b');if(!_0x3d7861){fsExtra[a22_0x55c7('0x43')](_0x3045da);}console[a22_0x55c7('0x35')](a22_0x55c7('0x5c')+_0x3d7861);return _0x3d7861;});}[a22_0x55c7('0x56')](_0x435ca7,_0x1b2be1,_0x281717){const _0x397ed1=new Downloader();console['log'](_0x435ca7);console[a22_0x55c7('0x35')](_0x1b2be1);console[a22_0x55c7('0x35')](_0x281717);const _0x305c06=_0x397ed1['download'](_0x435ca7,this[a22_0x55c7('0x3a')]+_0x1b2be1);urlExists(_0x435ca7,function(_0x423ce1,_0x53e245){if(_0x53e245){if(this[a22_0x55c7('0x1d')][a22_0x55c7('0x5d')](this[a22_0x55c7('0x3e')])){const _0x36efb7=this[a22_0x55c7('0x1d')][a22_0x55c7('0x5e')](this[a22_0x55c7('0x3e')]);if(_0x36efb7>-0x1){this[a22_0x55c7('0x1d')]['splice'](_0x36efb7,0x1);}}console['log'](a22_0x55c7('0x5f')+_0x435ca7);_0x305c06[a22_0x55c7('0x60')]();}else{if(!this[a22_0x55c7('0x1d')][a22_0x55c7('0x5d')](this[a22_0x55c7('0x3e')])){this[a22_0x55c7('0x1d')]['push'](this[a22_0x55c7('0x3e')]);}console[a22_0x55c7('0x35')]('Error:\x20'+_0x435ca7);this[a22_0x55c7('0x3e')]++;this[a22_0x55c7('0x47')]();}}['bind'](this));_0x305c06['on'](a22_0x55c7('0x60'),function(_0x305c06){console[a22_0x55c7('0x35')](a22_0x55c7('0x61')+_0x435ca7);});_0x305c06['on'](a22_0x55c7('0x46'),function(_0x305c06){console[a22_0x55c7('0x35')](a22_0x55c7('0x62'));this['download']();}[a22_0x55c7('0x2d')](this));_0x305c06['on'](a22_0x55c7('0x63'),function(_0x305c06){console[a22_0x55c7('0x35')](a22_0x55c7('0x63'));console[a22_0x55c7('0x35')]('Downloaded:\x20'+_0x1b2be1);console[a22_0x55c7('0x35')](a22_0x55c7('0x64')+_0x281717);this[a22_0x55c7('0x53')](this[a22_0x55c7('0x3a')]+_0x1b2be1)[a22_0x55c7('0x34')](function(_0x1ee5ca){if(_0x1ee5ca){this[a22_0x55c7('0x3e')]++;}this[a22_0x55c7('0x47')]();}['bind'](this));}['bind'](this));_0x305c06['on'](a22_0x55c7('0x65'),function(_0x305c06){console['log'](a22_0x55c7('0x65'));});_0x305c06['on']('destroyed',function(_0x305c06){console['log']('destroyed');});_0x305c06['on'](a22_0x55c7('0x66'),function(_0x305c06){console['log'](a22_0x55c7('0x66'));});}['downloadHTTPFile'](_0xbd4943,_0x1351cc,_0x55d39e,_0x4a617e){console[a22_0x55c7('0x35')]('downloadHTTPFile');console[a22_0x55c7('0x35')](_0xbd4943);const _0x18360b=!![];let _0x2b6c50=0x0;const _0x28a2b0='';console[a22_0x55c7('0x35')](a22_0x55c7('0x67')+_0xbd4943+a22_0x55c7('0x68')+_0x1351cc);if(_0x2b6c50){if(_0x2b6c50>0x5){_0x4a617e(a22_0x55c7('0x69'),_0xbd4943,_0x55d39e,null);return;}}else{_0x2b6c50=0x0;}const _0x148260=this[a22_0x55c7('0x3a')]+_0x1351cc;let _0x1edcc8;if(_0x4a617e===undefined){console[a22_0x55c7('0x35')](a22_0x55c7('0x6a')+_0xbd4943+a22_0x55c7('0x68')+_0x148260);_0x4a617e=function(_0x2d0d9c,_0xb00eca){console[a22_0x55c7('0x35')](a22_0x55c7('0x6b'),_0x2d0d9c,_0xb00eca);};}http[a22_0x55c7('0x6c')]['maxSockets']=0x64;const _0x572a84={'host':url[a22_0x55c7('0x21')](_0xbd4943)[a22_0x55c7('0x6d')],'port':0x50,'path':url[a22_0x55c7('0x21')](_0xbd4943)[a22_0x55c7('0x6e')],'agent':![]};const _0x4c9cfc=http[a22_0x55c7('0x6f')](_0x572a84,function(_0x45c478){let _0x5c9d96=0x0;let _0x269468=0x0;function _0x410146(){if(_0x5c9d96===undefined){console[a22_0x55c7('0x35')](_0x1351cc+'\x20Progress:\x20unknown\x09'+_0x269468+'/'+'?');}const _0x42391b=_0x269468/_0x5c9d96*0x64;console['log'](_0x1351cc+a22_0x55c7('0x70')+_0x42391b+'%\x09'+_0x269468+'/'+_0x5c9d96);}console[a22_0x55c7('0x35')](_0x1351cc+'\x20'+_0x45c478[a22_0x55c7('0x71')]);switch(_0x45c478[a22_0x55c7('0x71')]){case 0xc8:_0x5c9d96=_0x45c478[a22_0x55c7('0x72')][a22_0x55c7('0x73')]||_0x28a2b0;fs['stat'](_0x148260,function(_0x51cd69,_0x19875a){if(!_0x51cd69){console[a22_0x55c7('0x35')](a22_0x55c7('0x74')+_0x148260);if(_0x19875a[a22_0x55c7('0x75')]==_0x5c9d96){console[a22_0x55c7('0x35')]('And\x20the\x20file\x20size\x20matches\x20('+_0x5c9d96+')');console[a22_0x55c7('0x35')](a22_0x55c7('0x76'));}else{console['log'](a22_0x55c7('0x77')+_0x19875a[a22_0x55c7('0x75')]+')\x20vs\x20New('+_0x5c9d96+')');}}_0x1edcc8=fs[a22_0x55c7('0x78')](_0x148260);_0x45c478[a22_0x55c7('0x79')](_0x1edcc8);_0x45c478['on'](a22_0x55c7('0x7a'),function(_0x2336e6){_0x269468+=_0x2336e6[a22_0x55c7('0x40')];_0x410146();});_0x4c9cfc['on']('error',function(_0x51cd69){console[a22_0x55c7('0x35')](a22_0x55c7('0x7b'));console[a22_0x55c7('0x35')](_0x51cd69);});_0x1edcc8['on']('finish',function(){console[a22_0x55c7('0x35')](a22_0x55c7('0x7c')+_0xbd4943+a22_0x55c7('0x68')+_0x1351cc);_0x4a617e(null,_0x1351cc,_0x55d39e,_0x1351cc);}[a22_0x55c7('0x2d')](this));});break;case 0x12e:const _0x58c800=_0x45c478[a22_0x55c7('0x72')][a22_0x55c7('0x7d')];console[a22_0x55c7('0x35')](a22_0x55c7('0x7e')+_0xbd4943+a22_0x55c7('0x68')+_0x58c800);if(_0x2b6c50<0x5){this[a22_0x55c7('0x7f')](_0x58c800,_0x1351cc,_0x4a617e,_0x2b6c50++);}else{console[a22_0x55c7('0x46')](a22_0x55c7('0x80')+_0xbd4943+'.');_0x4a617e(a22_0x55c7('0x81'),null,null,null);}return;case 0x194:console[a22_0x55c7('0x35')]('File\x20Not\x20Found\x20'+_0xbd4943);default:console[a22_0x55c7('0x35')](a22_0x55c7('0x82')+_0xbd4943+'\x20STATUS:\x20'+_0x45c478[a22_0x55c7('0x71')]);_0x4c9cfc[a22_0x55c7('0x83')]();_0x4a617e(_0x45c478['statusCode'],null,null,null);return;}})['on'](a22_0x55c7('0x46'),function(_0x1d3cbb){console[a22_0x55c7('0x35')](a22_0x55c7('0x84')+_0xbd4943+'\x20'+_0x1d3cbb[a22_0x55c7('0x85')]);_0x4a617e(_0x1d3cbb,null,null,null);});}[a22_0x55c7('0x86')](_0x57200c,_0x4bcc2c,_0xd3a8ce,_0x173456){console[a22_0x55c7('0x35')](a22_0x55c7('0x86'));console[a22_0x55c7('0x35')](_0x57200c);console[a22_0x55c7('0x35')](_0x4bcc2c);console[a22_0x55c7('0x35')](_0xd3a8ce);console[a22_0x55c7('0x35')](_0x173456);if(_0xd3a8ce==a22_0x55c7('0x51')){const _0x431401=this[a22_0x55c7('0x3d')][this['currentFile']]['duration']!=null?this[a22_0x55c7('0x3d')][this[a22_0x55c7('0x3e')]][a22_0x55c7('0x87')]:0x1e;this[a22_0x55c7('0x88')](_0x173456,_0x431401);}else if(_0xd3a8ce==a22_0x55c7('0x89')){if(_0x57200c==null&&_0x4bcc2c!=''){this[a22_0x55c7('0x3e')]++;}this[a22_0x55c7('0x47')]();}console['log'](this[a22_0x55c7('0x3e')]);}[a22_0x55c7('0x8a')](_0x526f9d,_0xd0ecf4,_0x58512f){progress(request(_0x526f9d),{})['on']('progress',function(_0x490707){console[a22_0x55c7('0x35')](_0x490707);})['on'](a22_0x55c7('0x46'),function(_0x344ee4){console['log'](a22_0x55c7('0x8b'));this['download']();})['on'](a22_0x55c7('0x63'),function(){console[a22_0x55c7('0x35')](a22_0x55c7('0x8c')+_0xd0ecf4);console[a22_0x55c7('0x35')]('mediaType:\x20'+_0x58512f);if(_0x58512f==a22_0x55c7('0x51')){const _0x20a4c6=this[a22_0x55c7('0x3d')][this[a22_0x55c7('0x3e')]][a22_0x55c7('0x87')]!=null?this[a22_0x55c7('0x3d')][this[a22_0x55c7('0x3e')]]['duration']:0x1e;this[a22_0x55c7('0x88')](_0xd0ecf4,_0x20a4c6);}else if(_0x58512f==a22_0x55c7('0x89')){this[a22_0x55c7('0x3e')]++;this[a22_0x55c7('0x47')]();}}['bind'](this))[a22_0x55c7('0x79')](fs[a22_0x55c7('0x78')](this[a22_0x55c7('0x3a')]+_0xd0ecf4));}[a22_0x55c7('0x88')](_0x246215,_0x3683a5=0x1e){const _0x273402=this[a22_0x55c7('0x3a')]+_0x246215;console['log'](_0x273402);console['log'](_0x246215);const _0x5bf145=_0x246215['split']('.')[a22_0x55c7('0x4d')](0x0,-0x1)[a22_0x55c7('0x4e')]('.');const _0x5aacb6='ffmpeg';const _0x47dfba=['-y','-r','1/2',a22_0x55c7('0x8d'),'1',a22_0x55c7('0x8e'),'glob','-i',_0x273402,'-t',String(_0x3683a5),a22_0x55c7('0x8f'),a22_0x55c7('0x90'),a22_0x55c7('0x91'),a22_0x55c7('0x92'),'-r','25',a22_0x55c7('0x93'),'scale=1920:1080',this[a22_0x55c7('0x3a')]+_0x5bf145+'.mp4'];const _0xb5bf=spawn(_0x5aacb6,_0x47dfba);_0xb5bf[a22_0x55c7('0x94')]['on'](a22_0x55c7('0x7a'),function(_0x29ff66){console[a22_0x55c7('0x35')]('Converting\x20'+_0x273402);});_0xb5bf[a22_0x55c7('0x95')]['on'](a22_0x55c7('0x7a'),function(_0x13b166){console[a22_0x55c7('0x35')](a22_0x55c7('0x96')+_0x13b166);}['bind'](this));_0xb5bf['on'](a22_0x55c7('0x97'),function(){console['log'](a22_0x55c7('0x98'));this['currentFile']++;this[a22_0x55c7('0x47')]();}[a22_0x55c7('0x2d')](this));}[a22_0x55c7('0x99')](_0x1b9b1f){const _0x32ac12=this[a22_0x55c7('0x3a')]+'/'+_0x1b9b1f+'.mp4';const _0x230121=youtubedl(a22_0x55c7('0x9a')+_0x1b9b1f,[a22_0x55c7('0x9b')],{'cwd':__dirname});_0x230121['on'](a22_0x55c7('0x9c'),function(_0x515ccd){console['log']('Download\x20started');console['log'](a22_0x55c7('0x9d')+_0x515ccd[a22_0x55c7('0x9e')]);console['log'](a22_0x55c7('0x9f')+_0x515ccd[a22_0x55c7('0x75')]);});_0x230121['on'](a22_0x55c7('0xa0'),function complete(_0x45dc63){'use strict';console[a22_0x55c7('0x35')](a22_0x55c7('0x9d')+_0x45dc63[a22_0x55c7('0x9e')]+a22_0x55c7('0xa1'));});_0x230121['on'](a22_0x55c7('0x63'),function(){console[a22_0x55c7('0x35')](a22_0x55c7('0xa2'));this[a22_0x55c7('0x53')](_0x32ac12)[a22_0x55c7('0x34')](function(_0x2cad7c){if(_0x2cad7c){this[a22_0x55c7('0x3e')]++;}this['download']();}[a22_0x55c7('0x2d')](this));}[a22_0x55c7('0x2d')](this));_0x230121[a22_0x55c7('0x79')](fs[a22_0x55c7('0x78')](_0x32ac12));}['finishProcess'](){console[a22_0x55c7('0x35')](a22_0x55c7('0xa3'));if(this[a22_0x55c7('0x1d')][a22_0x55c7('0x40')]==0x0){fs[a22_0x55c7('0x30')](this[a22_0x55c7('0x1b')],JSON[a22_0x55c7('0x32')](this['newPlayList']));let _0x2c5e1d='#EXTCPlayListM3U::M3U'+'\x0d\x0a'+'#EXTINF:0,luloPlayList'+'\x0d\x0a';for(const _0x44f37a in this[a22_0x55c7('0x3d')]){const _0xe9117c=this['downloadFiles'][_0x44f37a][a22_0x55c7('0xa4')];const _0x3e397e=this['downloadFiles'][_0x44f37a]['media_type'];const _0x26c1ea=_0xe9117c[a22_0x55c7('0x4a')](_0xe9117c[a22_0x55c7('0x4b')]('/')+0x1);let _0x591650=_0x26c1ea[a22_0x55c7('0x4c')]('.')[a22_0x55c7('0x4d')](0x0,-0x1)[a22_0x55c7('0x4e')]('.');if(_0x3e397e==a22_0x55c7('0x4f')){_0x591650=_0xe9117c;}_0x2c5e1d+='/home/osmc/luloclient/media/files/'+_0x591650+a22_0x55c7('0x50')+'\x0d\x0a';}fsExtra[a22_0x55c7('0x3c')](this[a22_0x55c7('0x19')]);fsExtra[a22_0x55c7('0x54')](this[a22_0x55c7('0x3a')],this[a22_0x55c7('0x19')]);fs[a22_0x55c7('0x30')](this[a22_0x55c7('0x1c')],_0x2c5e1d);fsExtra[a22_0x55c7('0x3c')](this[a22_0x55c7('0x3a')]);console[a22_0x55c7('0x35')](a22_0x55c7('0xa5'));try{console[a22_0x55c7('0x35')](this[a22_0x55c7('0x1c')]);const _0x2e9a0c=spawn(a22_0x55c7('0xa6'),[a22_0x55c7('0xa7'),a22_0x55c7('0xa8')]);}catch(_0x44d399){console['log'](_0x44d399);}}else{console[a22_0x55c7('0x35')](a22_0x55c7('0xa9'));this[a22_0x55c7('0x3e')]=0x0;setTimeout(function(){this[a22_0x55c7('0x47')]();}[a22_0x55c7('0x2d')](this),0x1388);}}}exports['SyncPlaylistsService']=SyncPlaylistsService;