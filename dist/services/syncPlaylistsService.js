var a28_0x5500=['split','slice','join','youtube_single','.mp4','image','**********+','checkVideo','copySync','downloadYouTube','downloader','m3uFileUpdate','refreshPlayer','track','media','@type','mediainfo\x20check:','includes','indexOf','splice','downloading:\x20','start','start:\x20','error','end','Downloaded:\x20','mediaType:\x20','stopped','destroyed','retry','downloadHTTPFile','Attempting\x20to\x20download\x20','\x20to\x20','Max\x20redirects\x20reached','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','downloadFile\x20callback\x20result\x20undefined:\x20','globalAgent','maxSockets','\x20Progress:\x20unknown\x09','statusCode','headers','content-length','Have\x20already\x20downloaded\x20','size','Redownloading','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(',')\x20vs\x20New(','createWriteStream','pipe','err:\x20','Downloaded\x20','location','Redirect\x20','Redirect\x20limit\x20encountered\x20for\x20','302','Problem\x20downloading\x20','\x20STATUS:\x20','abort','Error\x20Downloading:\x20','downloadHTTPFileCallback','duration','video','Error\x20downloading\x20file','createImageVideo','-pattern_type','-c:v','libx264','-pix_fmt','yuv420p','-vf','scale=1920:1080','stdout','Converting\x20','stderr','data','stderr:\x20','finished\x20mp4\x20convert','http://www.youtube.com/watch?v=','youtubeURL:\x20','outFileName:\x20','--no-check-certificate','info','Download\x20started','filename:\x20','_filename','size:\x20','complete','Finishing','emptyDir','Playlist\x20incomplete,\x20retry.','#EXTCPlayListM3U::M3U','#EXTINF:0,luloPlayList','media_type','DateUtils','Parse','start_date','end_date','/home/osmc/luloclient/media/files/','trim','kodiCommandClient','PlayMedia(//home/osmc/luloclient/media/files/lulo_playlist.m3u)','ActivateWindow(fullscreenvideo)','Rebooting','sudo\x20/sbin/reboot\x20-f','rss','header_active','setRss','enableClock','turnOffTV','xmlContent:\x20','err:\x20%j','result:\x20%j','none','rssfeeds','set','Builder','buildObject','xml:\x20%j','Settings.SetSettingValue','setRss:','kodi-send\x20--action=\x22','jsonrpcClient','2.0','jsonrpcClient\x20data','jsonrpcClient\x20options','SyncPlaylistsService','__awaiter','next','throw','done','value','then','apply','__esModule','../infrastructure/utils/dateUtils','node-mediainfo','http','request','request-progress','child_process','spawn','exec','string-template','youtube-dl','uuid/v4','config.json','package.json','url-exists','node-kodi','mt-files-downloader','API_SERVICE_URL','mediaFolder','media/','tempFolder','filesFolder','files/','playListFile','playlist.txt','m3uFile','lulo_playlist.m3u','currentFile','errorCounter','playlistChanged','downloadFiles','failDownloadFiles','newPlayList','kodiHost','kodiPassword','.lulo123.','forceReload','httpClientService','HttpClientService','playerService','init','config','parse','readFileSync','playerId','baseURL','env','WEB_SERVICE_URL','deploy/','playListServiceURL','api/player_playlist.php?player_id={0}','playerServiceURL','api/player.php?player_id={0}','kodi','kodiUser','checkFolders','loadMediaList','bind','checkSchedule','checkDependencies','registerClient','playlist','getItems','deviceUuid','networkInterfaces','context','post','log','register\x20response:\x20','writeFileSync','stringify','getStatus','player','getCurrentlyPlayingVideo','item','label','reportStatus','catch','this.errorCounter','reboot','report_status:\x20','apiURL','player_devices/report_status','reportStatusResponse:\x20','ensureDir','loadMediaList:\x20','emptyDirSync','push','Total\x20to\x20download:\x20','length','download','existsSync','removeSync','hasPlayListChanged','toString','\x20of\x20','finishProcess','path','substring','lastIndexOf'];(function(_0xb67384,_0x27295a){var _0x156d7c=function(_0x52a1f8){while(--_0x52a1f8){_0xb67384['push'](_0xb67384['shift']());}};_0x156d7c(++_0x27295a);}(a28_0x5500,0x7e));var a28_0x4b77=function(_0x2e4e91,_0xa9e967){_0x2e4e91=_0x2e4e91-0x0;var _0x36293c=a28_0x5500[_0x2e4e91];return _0x36293c;};'use strict';var __awaiter=this&&this[a28_0x4b77('0x0')]||function(_0x5998db,_0x5dbc00,_0x148096,_0x4ce2f9){function _0x15fa50(_0x435d9a){return _0x435d9a instanceof _0x148096?_0x435d9a:new _0x148096(function(_0x1e1116){_0x1e1116(_0x435d9a);});}return new(_0x148096||(_0x148096=Promise))(function(_0x29e4d5,_0xf52669){function _0x10912f(_0x1fc4fc){try{_0x26cbcc(_0x4ce2f9[a28_0x4b77('0x1')](_0x1fc4fc));}catch(_0xdf19fb){_0xf52669(_0xdf19fb);}}function _0x34a29c(_0x5064fa){try{_0x26cbcc(_0x4ce2f9[a28_0x4b77('0x2')](_0x5064fa));}catch(_0x47aba9){_0xf52669(_0x47aba9);}}function _0x26cbcc(_0x59f1d9){_0x59f1d9[a28_0x4b77('0x3')]?_0x29e4d5(_0x59f1d9[a28_0x4b77('0x4')]):_0x15fa50(_0x59f1d9[a28_0x4b77('0x4')])[a28_0x4b77('0x5')](_0x10912f,_0x34a29c);}_0x26cbcc((_0x4ce2f9=_0x4ce2f9[a28_0x4b77('0x6')](_0x5998db,_0x5dbc00||[]))[a28_0x4b77('0x1')]());});};Object['defineProperty'](exports,a28_0x4b77('0x7'),{'value':!![]});const HttpClientService_1=require('../infrastructure/HttpClientService');const playerService_1=require('./playerService');const dateUtils_1=require(a28_0x4b77('0x8'));const mediainfo=require(a28_0x4b77('0x9'));const fs=require('fs');const url=require('url');const http=require(a28_0x4b77('0xa'));const fsExtra=require('fs-extra');const request=require(a28_0x4b77('0xb'));const progress=require(a28_0x4b77('0xc'));const spawn=require(a28_0x4b77('0xd'))[a28_0x4b77('0xe')];const exec=require(a28_0x4b77('0xd'))[a28_0x4b77('0xf')];const isImage=require('is-image');const format=require(a28_0x4b77('0x10'));const os=require('os');const youtubedl=require(a28_0x4b77('0x11'));const uuidv4=require(a28_0x4b77('0x12'));const configFile=a28_0x4b77('0x13');const contextFile=a28_0x4b77('0x14');const urlExists=require(a28_0x4b77('0x15'));const kodi_rpc=require(a28_0x4b77('0x16'));const Downloader=require(a28_0x4b77('0x17'));class SyncPlaylistsService{constructor(){this['apiURL']=process['env'][a28_0x4b77('0x18')];this[a28_0x4b77('0x19')]=a28_0x4b77('0x1a');this[a28_0x4b77('0x1b')]=this[a28_0x4b77('0x19')]+'temp/';this[a28_0x4b77('0x1c')]=this[a28_0x4b77('0x19')]+a28_0x4b77('0x1d');this[a28_0x4b77('0x1e')]=this[a28_0x4b77('0x19')]+a28_0x4b77('0x1f');this[a28_0x4b77('0x20')]=this['filesFolder']+a28_0x4b77('0x21');this[a28_0x4b77('0x22')]=0x0;this[a28_0x4b77('0x23')]=0x0;this[a28_0x4b77('0x24')]=![];this[a28_0x4b77('0x25')]=[];this[a28_0x4b77('0x26')]=[];this[a28_0x4b77('0x27')]={};this[a28_0x4b77('0x28')]='http://localhost';this['kodiUser']='lulo';this[a28_0x4b77('0x29')]=a28_0x4b77('0x2a');this[a28_0x4b77('0x2b')]=![];this[a28_0x4b77('0x2c')]=new HttpClientService_1[(a28_0x4b77('0x2d'))]();this[a28_0x4b77('0x2e')]=new playerService_1['PlayerService']();}[a28_0x4b77('0x2f')](){this[a28_0x4b77('0x30')]=JSON[a28_0x4b77('0x31')](fs[a28_0x4b77('0x32')](configFile));this['context']=JSON[a28_0x4b77('0x31')](fs[a28_0x4b77('0x32')](contextFile));this[a28_0x4b77('0x33')]=this[a28_0x4b77('0x30')]['playerId'];this[a28_0x4b77('0x34')]=process[a28_0x4b77('0x35')][a28_0x4b77('0x36')]+a28_0x4b77('0x37');this[a28_0x4b77('0x38')]=this[a28_0x4b77('0x34')]+a28_0x4b77('0x39');this[a28_0x4b77('0x3a')]=this[a28_0x4b77('0x34')]+a28_0x4b77('0x3b');this[a28_0x4b77('0x3c')]=new kodi_rpc({'url':this['kodiHost'],'user':this[a28_0x4b77('0x3d')],'password':this[a28_0x4b77('0x29')]});this['checkDependencies']();this['registerClient']();this[a28_0x4b77('0x3e')]();this[a28_0x4b77('0x3f')]();this['updateSettings']();setInterval(function(){this['getStatus']();}[a28_0x4b77('0x40')](this),0x2710);setInterval(function(){this['registerClient']();}['bind'](this),0x493e0);setInterval(function(){this[a28_0x4b77('0x41')]();}[a28_0x4b77('0x40')](this),0x2710);}[a28_0x4b77('0x42')](){}[a28_0x4b77('0x43')](){this[a28_0x4b77('0x3c')][a28_0x4b77('0x44')][a28_0x4b77('0x45')](0x1)[a28_0x4b77('0x5')](function(_0x1e207a){const _0x45fb9d=JSON['stringify'](_0x1e207a);const _0x219d80={'player_id':this['playerId'],'device_uuid':this[a28_0x4b77('0x30')][a28_0x4b77('0x46')],'network_info':JSON['stringify'](os[a28_0x4b77('0x47')]()),'firmware_info':JSON['stringify'](this[a28_0x4b77('0x48')]['version']),'playlist':_0x45fb9d,'playing_item':'','status':0x0};this[a28_0x4b77('0x2c')][a28_0x4b77('0x49')](this['apiURL']+'player_devices/register',_0x219d80,![])[a28_0x4b77('0x5')](function(_0x2bf643){console[a28_0x4b77('0x4a')](a28_0x4b77('0x4b')+Date());})['catch'](function(_0x5b426d){});console['log'](_0x219d80);}['bind'](this));const _0x368e30=this[a28_0x4b77('0x30')]['deviceUuid'];if(!_0x368e30||_0x368e30==''){this['config'][a28_0x4b77('0x46')]=uuidv4();this['config']={'deviceUuid':this['config'][a28_0x4b77('0x46')],'playerId':this[a28_0x4b77('0x30')]['playerId']};fs[a28_0x4b77('0x4c')](configFile,JSON[a28_0x4b77('0x4d')](this[a28_0x4b77('0x30')]));}}[a28_0x4b77('0x4e')](){console['log'](a28_0x4b77('0x4e'));this[a28_0x4b77('0x3c')][a28_0x4b77('0x4f')][a28_0x4b77('0x50')]()[a28_0x4b77('0x5')](function(_0x164f5b){const _0xa2b27c=_0x164f5b?_0x164f5b[a28_0x4b77('0x51')][a28_0x4b77('0x52')]:'';this[a28_0x4b77('0x53')](_0xa2b27c);}[a28_0x4b77('0x40')](this))[a28_0x4b77('0x54')](function(_0x46fcbb){console[a28_0x4b77('0x4a')](a28_0x4b77('0x4e'),_0x46fcbb);console[a28_0x4b77('0x4a')](a28_0x4b77('0x55'),this['errorCounter']);this[a28_0x4b77('0x53')](JSON[a28_0x4b77('0x4d')](_0x46fcbb));if(this[a28_0x4b77('0x23')]>0x1e){this[a28_0x4b77('0x56')]();}this[a28_0x4b77('0x23')]++;}['bind'](this));}[a28_0x4b77('0x53')](_0x16ed80){const _0x201de1={'player_id':this[a28_0x4b77('0x33')],'device_uuid':this[a28_0x4b77('0x30')][a28_0x4b77('0x46')],'status':_0x16ed80!=''&&_0x16ed80!=null?0x1:0x0,'playing_item':_0x16ed80};console[a28_0x4b77('0x4a')](a28_0x4b77('0x57'),_0x201de1);this['httpClientService']['post'](this[a28_0x4b77('0x58')]+a28_0x4b77('0x59'),_0x201de1,![])[a28_0x4b77('0x5')](function(_0x3ac0cc){console[a28_0x4b77('0x4a')](a28_0x4b77('0x5a')+JSON[a28_0x4b77('0x4d')](_0x3ac0cc));})[a28_0x4b77('0x54')](function(_0x1b1bdf){});}[a28_0x4b77('0x3e')](){fsExtra[a28_0x4b77('0x5b')](this[a28_0x4b77('0x19')],_0x398c1b=>{});fsExtra['ensureDir'](this[a28_0x4b77('0x1b')],_0x2b839c=>{});fsExtra['ensureDir'](this[a28_0x4b77('0x1c')],_0x342050=>{});}[a28_0x4b77('0x3f')](){const _0x2c4539=format(this['playListServiceURL'],this[a28_0x4b77('0x33')]);console[a28_0x4b77('0x4a')](_0x2c4539);request({'url':_0x2c4539,'json':!![]},function(_0x3559c2,_0x1102a7,_0xa078a9){console[a28_0x4b77('0x4a')](a28_0x4b77('0x5c'));this[a28_0x4b77('0x27')]=_0xa078a9;this['playlistChanged']=this['hasPlayListChanged']();fsExtra[a28_0x4b77('0x5d')](this[a28_0x4b77('0x1b')]);this[a28_0x4b77('0x25')]=[];this[a28_0x4b77('0x26')]=[];this[a28_0x4b77('0x22')]=0x0;for(const _0x53a01d in _0xa078a9){this[a28_0x4b77('0x25')][a28_0x4b77('0x5e')](_0xa078a9[_0x53a01d]);}console[a28_0x4b77('0x4a')](a28_0x4b77('0x5f')+this[a28_0x4b77('0x25')][a28_0x4b77('0x60')]);if(this[a28_0x4b77('0x25')][a28_0x4b77('0x60')]>0x0){this[a28_0x4b77('0x61')]();}}[a28_0x4b77('0x40')](this));}['reloadMediaList'](){this['forceReload']=!![];if(fsExtra['existsSync'](this['tempFolder'])){fsExtra[a28_0x4b77('0x5d')](this[a28_0x4b77('0x1b')]);}if(fsExtra[a28_0x4b77('0x62')](this[a28_0x4b77('0x1c')])){fsExtra['emptyDirSync'](this['filesFolder']);}if(!fsExtra[a28_0x4b77('0x62')](this[a28_0x4b77('0x1e')])){fsExtra['removeSync'](this[a28_0x4b77('0x1e')]);}if(!fsExtra[a28_0x4b77('0x62')](this[a28_0x4b77('0x20')])){fsExtra[a28_0x4b77('0x63')](this[a28_0x4b77('0x20')]);}this[a28_0x4b77('0x3f')]();}[a28_0x4b77('0x64')](){const _0x368b0f=JSON[a28_0x4b77('0x4d')](this['newPlayList']);try{if(!fsExtra[a28_0x4b77('0x62')](this['playListFile'])){return!![];}else{const _0x573142=fsExtra['readFileSync'](this[a28_0x4b77('0x1e')])[a28_0x4b77('0x65')]();if(_0x573142!=_0x368b0f){return!![];}}}catch(_0x307f4e){console[a28_0x4b77('0x4a')](_0x307f4e);}return![];}[a28_0x4b77('0x61')](){console[a28_0x4b77('0x4a')]('this.currentFile:\x20'+this[a28_0x4b77('0x22')]+a28_0x4b77('0x66')+this[a28_0x4b77('0x25')][a28_0x4b77('0x60')]);if(this[a28_0x4b77('0x22')]>=this[a28_0x4b77('0x25')][a28_0x4b77('0x60')]){this[a28_0x4b77('0x67')]();return;}const _0x3526ba=String(this[a28_0x4b77('0x25')][this[a28_0x4b77('0x22')]][a28_0x4b77('0x68')]);const _0x192d6c=this[a28_0x4b77('0x25')][this[a28_0x4b77('0x22')]]['media_type'];let _0x3ef002=_0x3526ba[a28_0x4b77('0x69')](_0x3526ba[a28_0x4b77('0x6a')]('/')+0x1);const _0x98c4c1=_0x3ef002[a28_0x4b77('0x6b')]('.')[a28_0x4b77('0x6c')](0x0,-0x1)[a28_0x4b77('0x6d')]('.');let _0x43eb39=this[a28_0x4b77('0x34')]+_0x3526ba;const _0x38159e=_0x43eb39[a28_0x4b77('0x6b')]('.')[a28_0x4b77('0x6c')](0x0,-0x1)[a28_0x4b77('0x6d')]('.');if(_0x192d6c==a28_0x4b77('0x6e')){_0x3ef002=_0x3ef002+a28_0x4b77('0x6f');}else if(_0x192d6c==a28_0x4b77('0x70')){_0x3ef002=_0x98c4c1+'.mp4';_0x43eb39=_0x38159e+a28_0x4b77('0x6f');}console[a28_0x4b77('0x4a')](a28_0x4b77('0x71'));console['log'](_0x3526ba);console[a28_0x4b77('0x4a')](_0x192d6c);console[a28_0x4b77('0x4a')](_0x3ef002);console[a28_0x4b77('0x4a')](_0x43eb39);console[a28_0x4b77('0x4a')](_0x98c4c1);console['log'](_0x38159e);console[a28_0x4b77('0x4a')](a28_0x4b77('0x71'));if(fsExtra['existsSync'](this['tempFolder']+_0x3ef002)){this[a28_0x4b77('0x72')](this[a28_0x4b77('0x1b')]+_0x3ef002)['then'](function(_0x18b424){if(_0x18b424){this[a28_0x4b77('0x22')]++;}else{this[a28_0x4b77('0x24')]=!![];}this[a28_0x4b77('0x61')]();}['bind'](this));}else if(fsExtra[a28_0x4b77('0x62')](this[a28_0x4b77('0x1c')]+_0x3ef002)){this['checkVideo'](this[a28_0x4b77('0x1c')]+_0x3ef002)[a28_0x4b77('0x5')](function(_0x3f3625){if(_0x3f3625){fsExtra[a28_0x4b77('0x73')](this['filesFolder']+_0x3ef002,this[a28_0x4b77('0x1b')]+_0x3ef002);this[a28_0x4b77('0x22')]++;}else{this[a28_0x4b77('0x24')]=!![];}this[a28_0x4b77('0x61')]();}[a28_0x4b77('0x40')](this));}else{console[a28_0x4b77('0x4a')]('Downloading:\x20'+_0x43eb39);this[a28_0x4b77('0x24')]=!![];if(_0x192d6c==a28_0x4b77('0x6e')){this[a28_0x4b77('0x74')](_0x3526ba);}else{this[a28_0x4b77('0x75')](_0x43eb39,_0x3ef002,_0x192d6c);}}}['checkSchedule'](){const _0x3aae67=this[a28_0x4b77('0x76')]();console[a28_0x4b77('0x4a')](a28_0x4b77('0x76'),_0x3aae67);if(_0x3aae67){setTimeout(function(){this[a28_0x4b77('0x77')]();}[a28_0x4b77('0x40')](this),0x3e8);}}['checkVideo'](_0x5c4ea1){return __awaiter(this,void 0x0,void 0x0,function*(){console[a28_0x4b77('0x4a')]('videoFile:\x20'+_0x5c4ea1);const _0x6f6092=yield mediainfo(_0x5c4ea1)[a28_0x4b77('0x54')](_0x55dbcc=>{console['log'](_0x55dbcc);fsExtra['removeSync'](_0x5c4ea1);return![];});const _0x1d3919=_0x6f6092['media'][a28_0x4b77('0x78')]['length']>0x1&&_0x6f6092[a28_0x4b77('0x79')][a28_0x4b77('0x78')][0x1][a28_0x4b77('0x7a')]=='Video';if(!_0x1d3919){fsExtra[a28_0x4b77('0x63')](_0x5c4ea1);}console[a28_0x4b77('0x4a')](a28_0x4b77('0x7b')+_0x1d3919);return _0x1d3919;});}[a28_0x4b77('0x75')](_0x4392b6,_0x49cdbd,_0x590eee){const _0x51fed5=new Downloader();console[a28_0x4b77('0x4a')](_0x4392b6);console[a28_0x4b77('0x4a')](_0x49cdbd);console['log'](_0x590eee);const _0xc89dd3=_0x51fed5['download'](_0x4392b6,this[a28_0x4b77('0x1b')]+_0x49cdbd);urlExists(_0x4392b6,function(_0x5b90b1,_0x261103){if(_0x261103){if(this[a28_0x4b77('0x26')][a28_0x4b77('0x7c')](this[a28_0x4b77('0x22')])){const _0x3a8e03=this[a28_0x4b77('0x26')][a28_0x4b77('0x7d')](this['currentFile']);if(_0x3a8e03>-0x1){this[a28_0x4b77('0x26')][a28_0x4b77('0x7e')](_0x3a8e03,0x1);}}console[a28_0x4b77('0x4a')](a28_0x4b77('0x7f')+_0x4392b6);_0xc89dd3[a28_0x4b77('0x80')]();}else{if(!this[a28_0x4b77('0x26')][a28_0x4b77('0x7c')](this[a28_0x4b77('0x22')])){this[a28_0x4b77('0x26')][a28_0x4b77('0x5e')](this[a28_0x4b77('0x22')]);}console[a28_0x4b77('0x4a')]('Error:\x20'+_0x4392b6);this[a28_0x4b77('0x22')]++;this[a28_0x4b77('0x61')]();}}['bind'](this));_0xc89dd3['on']('start',function(_0xc89dd3){console[a28_0x4b77('0x4a')](a28_0x4b77('0x81')+_0x4392b6);});_0xc89dd3['on'](a28_0x4b77('0x82'),function(_0xc89dd3){console[a28_0x4b77('0x4a')]('error:\x20');this['download']();}['bind'](this));_0xc89dd3['on'](a28_0x4b77('0x83'),function(_0xc89dd3){console['log'](a28_0x4b77('0x83'));console[a28_0x4b77('0x4a')](a28_0x4b77('0x84')+_0x49cdbd);console['log'](a28_0x4b77('0x85')+_0x590eee);this[a28_0x4b77('0x72')](this[a28_0x4b77('0x1b')]+_0x49cdbd)['then'](function(_0x366ea3){if(_0x366ea3){this[a28_0x4b77('0x22')]++;}this[a28_0x4b77('0x61')]();}[a28_0x4b77('0x40')](this));}[a28_0x4b77('0x40')](this));_0xc89dd3['on'](a28_0x4b77('0x86'),function(_0xc89dd3){console[a28_0x4b77('0x4a')]('stopped');});_0xc89dd3['on'](a28_0x4b77('0x87'),function(_0xc89dd3){console[a28_0x4b77('0x4a')]('destroyed');});_0xc89dd3['on'](a28_0x4b77('0x88'),function(_0xc89dd3){console['log']('retry');});}[a28_0x4b77('0x89')](_0x312d77,_0x15bd55,_0x193fb7,_0x1caa06){console[a28_0x4b77('0x4a')](a28_0x4b77('0x89'));console[a28_0x4b77('0x4a')](_0x312d77);const _0x551a2b=!![];let _0x50aa2c=0x0;const _0xb9c0a1='';console['log'](a28_0x4b77('0x8a')+_0x312d77+a28_0x4b77('0x8b')+_0x15bd55);if(_0x50aa2c){if(_0x50aa2c>0x5){_0x1caa06(a28_0x4b77('0x8c'),_0x312d77,_0x193fb7,null);return;}}else{_0x50aa2c=0x0;}const _0x2c3e74=this[a28_0x4b77('0x1b')]+_0x15bd55;let _0x16521f;if(_0x1caa06===undefined){console[a28_0x4b77('0x4a')](a28_0x4b77('0x8d')+_0x312d77+a28_0x4b77('0x8b')+_0x2c3e74);_0x1caa06=function(_0x5e93fd,_0x26a1c7){console[a28_0x4b77('0x4a')](a28_0x4b77('0x8e'),_0x5e93fd,_0x26a1c7);};}http[a28_0x4b77('0x8f')][a28_0x4b77('0x90')]=0x64;const _0x3df520={'host':url[a28_0x4b77('0x31')](_0x312d77)['host'],'port':0x50,'path':url[a28_0x4b77('0x31')](_0x312d77)['pathname'],'agent':![]};const _0x13b9ad=http['get'](_0x3df520,function(_0x58203a){let _0x5e782c=0x0;let _0x129635=0x0;function _0xd58a81(){if(_0x5e782c===undefined){console[a28_0x4b77('0x4a')](_0x15bd55+a28_0x4b77('0x91')+_0x129635+'/'+'?');}const _0x204a65=_0x129635/_0x5e782c*0x64;console[a28_0x4b77('0x4a')](_0x15bd55+'\x20Progress:\x20'+_0x204a65+'%\x09'+_0x129635+'/'+_0x5e782c);}console[a28_0x4b77('0x4a')](_0x15bd55+'\x20'+_0x58203a['statusCode']);switch(_0x58203a[a28_0x4b77('0x92')]){case 0xc8:_0x5e782c=_0x58203a[a28_0x4b77('0x93')][a28_0x4b77('0x94')]||_0xb9c0a1;fs['stat'](_0x2c3e74,function(_0x222e38,_0x5608eb){if(!_0x222e38){console[a28_0x4b77('0x4a')](a28_0x4b77('0x95')+_0x2c3e74);if(_0x5608eb[a28_0x4b77('0x96')]==_0x5e782c){console[a28_0x4b77('0x4a')]('And\x20the\x20file\x20size\x20matches\x20('+_0x5e782c+')');console[a28_0x4b77('0x4a')](a28_0x4b77('0x97'));}else{console['log'](a28_0x4b77('0x98')+_0x5608eb[a28_0x4b77('0x96')]+a28_0x4b77('0x99')+_0x5e782c+')');}}_0x16521f=fs[a28_0x4b77('0x9a')](_0x2c3e74);_0x58203a[a28_0x4b77('0x9b')](_0x16521f);_0x58203a['on']('data',function(_0x3f501f){_0x129635+=_0x3f501f[a28_0x4b77('0x60')];_0xd58a81();});_0x13b9ad['on']('error',function(_0x222e38){console[a28_0x4b77('0x4a')](a28_0x4b77('0x9c'));console[a28_0x4b77('0x4a')](_0x222e38);});_0x16521f['on']('finish',function(){console[a28_0x4b77('0x4a')](a28_0x4b77('0x9d')+_0x312d77+a28_0x4b77('0x8b')+_0x15bd55);_0x1caa06(null,_0x15bd55,_0x193fb7,_0x15bd55);}[a28_0x4b77('0x40')](this));});break;case 0x12e:const _0x57e29d=_0x58203a[a28_0x4b77('0x93')][a28_0x4b77('0x9e')];console[a28_0x4b77('0x4a')](a28_0x4b77('0x9f')+_0x312d77+a28_0x4b77('0x8b')+_0x57e29d);if(_0x50aa2c<0x5){this[a28_0x4b77('0x89')](_0x57e29d,_0x15bd55,_0x1caa06,_0x50aa2c++);}else{console[a28_0x4b77('0x82')](a28_0x4b77('0xa0')+_0x312d77+'.');_0x1caa06(a28_0x4b77('0xa1'),null,null,null);}return;case 0x194:console['log']('File\x20Not\x20Found\x20'+_0x312d77);default:console[a28_0x4b77('0x4a')](a28_0x4b77('0xa2')+_0x312d77+a28_0x4b77('0xa3')+_0x58203a[a28_0x4b77('0x92')]);_0x13b9ad[a28_0x4b77('0xa4')]();_0x1caa06(_0x58203a[a28_0x4b77('0x92')],null,null,null);return;}})['on']('error',function(_0x181c16){console['log'](a28_0x4b77('0xa5')+_0x312d77+'\x20'+_0x181c16['message']);_0x1caa06(_0x181c16,null,null,null);});}[a28_0x4b77('0xa6')](_0x2d6beb,_0x34e053,_0x216afa,_0x59daae){console[a28_0x4b77('0x4a')](a28_0x4b77('0xa6'));console[a28_0x4b77('0x4a')](_0x2d6beb);console[a28_0x4b77('0x4a')](_0x34e053);console[a28_0x4b77('0x4a')](_0x216afa);console[a28_0x4b77('0x4a')](_0x59daae);if(_0x216afa=='image'){const _0x3bddcf=this['downloadFiles'][this[a28_0x4b77('0x22')]][a28_0x4b77('0xa7')]!=null?this['downloadFiles'][this[a28_0x4b77('0x22')]]['duration']:0x1e;this['createImageVideo'](_0x59daae,_0x3bddcf);}else if(_0x216afa==a28_0x4b77('0xa8')){if(_0x2d6beb==null&&_0x34e053!=''){this[a28_0x4b77('0x22')]++;}this['download']();}console[a28_0x4b77('0x4a')](this[a28_0x4b77('0x22')]);}['downloadRequestFile'](_0x130e96,_0x540848,_0x1c38bf){progress(request(_0x130e96),{})['on']('progress',function(_0x23d3a8){console[a28_0x4b77('0x4a')](_0x23d3a8);})['on'](a28_0x4b77('0x82'),function(_0x4bb5e9){console[a28_0x4b77('0x4a')](a28_0x4b77('0xa9'));this[a28_0x4b77('0x61')]();})['on'](a28_0x4b77('0x83'),function(){console[a28_0x4b77('0x4a')]('Downloaded:\x20'+_0x540848);console[a28_0x4b77('0x4a')](a28_0x4b77('0x85')+_0x1c38bf);if(_0x1c38bf==a28_0x4b77('0x70')){const _0x51d137=this['downloadFiles'][this[a28_0x4b77('0x22')]][a28_0x4b77('0xa7')]!=null?this[a28_0x4b77('0x25')][this[a28_0x4b77('0x22')]][a28_0x4b77('0xa7')]:0x1e;this[a28_0x4b77('0xaa')](_0x540848,_0x51d137);}else if(_0x1c38bf==a28_0x4b77('0xa8')){this[a28_0x4b77('0x22')]++;this[a28_0x4b77('0x61')]();}}[a28_0x4b77('0x40')](this))['pipe'](fs[a28_0x4b77('0x9a')](this[a28_0x4b77('0x1b')]+_0x540848));}['createImageVideo'](_0xd27136,_0x43b63d=0x1e){const _0x324eed=this[a28_0x4b77('0x1b')]+_0xd27136;console['log'](_0x324eed);console['log'](_0xd27136);const _0x526fb7=_0xd27136[a28_0x4b77('0x6b')]('.')['slice'](0x0,-0x1)['join']('.');const _0x3c83ed='ffmpeg';const _0x1d0511=['-y','-r','1/2','-loop','1',a28_0x4b77('0xab'),'glob','-i',_0x324eed,'-t',String(_0x43b63d),a28_0x4b77('0xac'),a28_0x4b77('0xad'),a28_0x4b77('0xae'),a28_0x4b77('0xaf'),'-r','25',a28_0x4b77('0xb0'),a28_0x4b77('0xb1'),this['tempFolder']+_0x526fb7+a28_0x4b77('0x6f')];const _0x1f17c8=spawn(_0x3c83ed,_0x1d0511);_0x1f17c8[a28_0x4b77('0xb2')]['on']('data',function(_0x315abb){console[a28_0x4b77('0x4a')](a28_0x4b77('0xb3')+_0x324eed);});_0x1f17c8[a28_0x4b77('0xb4')]['on'](a28_0x4b77('0xb5'),function(_0x4b6944){console[a28_0x4b77('0x4a')](a28_0x4b77('0xb6')+_0x4b6944);}[a28_0x4b77('0x40')](this));_0x1f17c8['on']('close',function(){console[a28_0x4b77('0x4a')](a28_0x4b77('0xb7'));this['currentFile']++;this['download']();}[a28_0x4b77('0x40')](this));}[a28_0x4b77('0x74')](_0x41a7a1){const _0x33e9d1=this[a28_0x4b77('0x1b')]+'/'+_0x41a7a1+a28_0x4b77('0x6f');const _0xa223c6=a28_0x4b77('0xb8')+_0x41a7a1;console[a28_0x4b77('0x4a')](a28_0x4b77('0xb9')+_0xa223c6);console[a28_0x4b77('0x4a')](a28_0x4b77('0xba')+_0x33e9d1);const _0xde0664=youtubedl(_0xa223c6,['--format=18',a28_0x4b77('0xbb')],{'cwd':__dirname});_0xde0664['on'](a28_0x4b77('0xbc'),function(_0x302df7){console[a28_0x4b77('0x4a')](a28_0x4b77('0xbd'));console[a28_0x4b77('0x4a')](a28_0x4b77('0xbe')+_0x302df7[a28_0x4b77('0xbf')]);console[a28_0x4b77('0x4a')](a28_0x4b77('0xc0')+_0x302df7['size']);});_0xde0664['on'](a28_0x4b77('0xc1'),function complete(_0x36a7eb){'use strict';console[a28_0x4b77('0x4a')](a28_0x4b77('0xbe')+_0x36a7eb[a28_0x4b77('0xbf')]+'\x20already\x20downloaded.');});_0xde0664['on'](a28_0x4b77('0x83'),function(){console[a28_0x4b77('0x4a')]('finished\x20youtube\x20downloading!');this[a28_0x4b77('0x72')](_0x33e9d1)[a28_0x4b77('0x5')](function(_0x57d28e){if(_0x57d28e){this[a28_0x4b77('0x22')]++;}this[a28_0x4b77('0x61')]();}['bind'](this));}['bind'](this));_0xde0664[a28_0x4b77('0x9b')](fs[a28_0x4b77('0x9a')](_0x33e9d1));}['finishProcess'](){console[a28_0x4b77('0x4a')](a28_0x4b77('0xc2'));if(this[a28_0x4b77('0x24')]){if(this[a28_0x4b77('0x26')][a28_0x4b77('0x60')]==0x0){console[a28_0x4b77('0x4a')]('this.playListFile:\x20'+this[a28_0x4b77('0x1e')]);fs['writeFileSync'](this[a28_0x4b77('0x1e')],JSON[a28_0x4b77('0x4d')](this[a28_0x4b77('0x27')]));const _0x558978=this[a28_0x4b77('0x76')]();fsExtra[a28_0x4b77('0xc3')](this[a28_0x4b77('0x1c')])[a28_0x4b77('0x5')](()=>{fsExtra['copy'](this[a28_0x4b77('0x1b')],this[a28_0x4b77('0x1c')])[a28_0x4b77('0x5')](()=>{fsExtra[a28_0x4b77('0xc3')](this[a28_0x4b77('0x1b')])[a28_0x4b77('0x5')](()=>{console[a28_0x4b77('0x4a')]('Refreshing..');this[a28_0x4b77('0x77')]();})['catch'](_0x137300=>console[a28_0x4b77('0x82')](_0x137300));})[a28_0x4b77('0x54')](_0x5be73a=>console[a28_0x4b77('0x82')](_0x5be73a));})[a28_0x4b77('0x54')](_0x5ccee1=>console[a28_0x4b77('0x82')](_0x5ccee1));}else{console['log'](a28_0x4b77('0xc4'));this[a28_0x4b77('0x22')]=0x0;setTimeout(function(){this[a28_0x4b77('0x61')]();}[a28_0x4b77('0x40')](this),0x1388);}}else{console[a28_0x4b77('0x4a')]('No\x20playlist\x20changes.');}}['m3uFileUpdate'](){let _0x151b39=a28_0x4b77('0xc5')+'\x0d\x0a'+a28_0x4b77('0xc6')+'\x0d\x0a';const _0x44859b=new Date();for(const _0x3d75ea in this[a28_0x4b77('0x25')]){const _0x324887=this[a28_0x4b77('0x25')][_0x3d75ea][a28_0x4b77('0x68')];const _0x361fa7=this['downloadFiles'][_0x3d75ea][a28_0x4b77('0xc7')];const _0x5b2991=dateUtils_1[a28_0x4b77('0xc8')][a28_0x4b77('0xc9')](this[a28_0x4b77('0x25')][_0x3d75ea][a28_0x4b77('0xca')]);const _0x54ca49=dateUtils_1['DateUtils']['Parse'](this[a28_0x4b77('0x25')][_0x3d75ea][a28_0x4b77('0xcb')]);const _0x13ac60=_0x324887['substring'](_0x324887[a28_0x4b77('0x6a')]('/')+0x1);let _0x5f21e3=_0x13ac60[a28_0x4b77('0x6b')]('.')['slice'](0x0,-0x1)[a28_0x4b77('0x6d')]('.');if(_0x361fa7=='youtube_single'){_0x5f21e3=_0x324887;}if((_0x5b2991==null||_0x5b2991<_0x44859b)&&(_0x54ca49==null||_0x54ca49>_0x44859b)){_0x151b39+=a28_0x4b77('0xcc')+_0x5f21e3+a28_0x4b77('0x6f')+'\x0d\x0a';}}let _0x30c745='';if(fsExtra[a28_0x4b77('0x62')](this[a28_0x4b77('0x20')])){_0x30c745=fsExtra[a28_0x4b77('0x32')](this[a28_0x4b77('0x20')]);_0x30c745=_0x30c745['toString']()[a28_0x4b77('0xcd')]();}_0x151b39=_0x151b39[a28_0x4b77('0x65')]()[a28_0x4b77('0xcd')]();if(_0x30c745!=_0x151b39){fsExtra[a28_0x4b77('0x4c')](this['m3uFile'],_0x151b39);return!![];}return![];}[a28_0x4b77('0x77')](){console[a28_0x4b77('0x4a')](a28_0x4b77('0x20'),this[a28_0x4b77('0x20')]);this[a28_0x4b77('0xce')](a28_0x4b77('0xcf'));this[a28_0x4b77('0xce')](a28_0x4b77('0xd0'));}[a28_0x4b77('0x56')](){console[a28_0x4b77('0x4a')](a28_0x4b77('0xd1'));exec(a28_0x4b77('0xd2'),function(_0x32826c){console[a28_0x4b77('0x4a')](_0x32826c);});}['updateSettings'](){const _0x512c18=format(this['playerServiceURL'],this[a28_0x4b77('0x33')]);console['log'](_0x512c18);request({'url':_0x512c18,'json':!![]},function(_0x4a8381,_0x307d56,_0x298be4){if(_0x298be4[a28_0x4b77('0x60')]>0x0){const _0x55ac8e=_0x298be4[0x0];const _0x2f283c=_0x55ac8e[a28_0x4b77('0xd3')];const _0x5167dc=_0x55ac8e[a28_0x4b77('0xd4')]==0x1;this[a28_0x4b77('0xd5')](_0x2f283c);this[a28_0x4b77('0xd6')](_0x5167dc);this[a28_0x4b77('0x43')]();}console[a28_0x4b77('0x4a')](_0x298be4);}[a28_0x4b77('0x40')](this));}[a28_0x4b77('0xd7')](){this['kodiCommandClient']('CECStandby()');}['turnOnTV'](){this[a28_0x4b77('0xce')]('CECActivateSource()');}[a28_0x4b77('0xd5')](_0x51f983){const _0x271965=_0x51f983!=null&&_0x51f983!='';const _0x15286f='/home/osmc/.kodi/userdata/RssFeeds.xml';if(fsExtra[a28_0x4b77('0x62')](_0x15286f)){const _0x259127=fsExtra['readFileSync'](_0x15286f);console['log'](a28_0x4b77('0xd8')+_0x259127);const _0xc4386=require('xml2js');const _0x4ebc6=_0xc4386['parseString'];_0x4ebc6(_0x259127,function(_0x540483,_0x1fadd1){console[a28_0x4b77('0x4a')](a28_0x4b77('0xd9'),_0x540483);console[a28_0x4b77('0x4a')](a28_0x4b77('0xda'),_0x1fadd1);if(!_0x51f983||_0x51f983==null||_0x51f983==''){_0x51f983=a28_0x4b77('0xdb');}_0x1fadd1[a28_0x4b77('0xdc')][a28_0x4b77('0xdd')][0x0]['feed'][0x0]['_']=_0x51f983;const _0x28499f=new _0xc4386[(a28_0x4b77('0xde'))]();const _0x19c8db=_0x28499f[a28_0x4b77('0xdf')](_0x1fadd1);console[a28_0x4b77('0x4a')](a28_0x4b77('0xe0'),_0x19c8db);fsExtra[a28_0x4b77('0x4c')](_0x15286f,_0x19c8db);});this[a28_0x4b77('0xce')]('RefreshRSS()');this['jsonrpcClient'](a28_0x4b77('0xe1'),{'setting':'lookandfeel.enablerssfeeds','value':_0x271965},function(_0x584281){console[a28_0x4b77('0x4a')](a28_0x4b77('0xe2'));console[a28_0x4b77('0x4a')](_0x584281);}[a28_0x4b77('0x40')](this));}}['enableClock'](_0x49feb9){this['jsonrpcClient']('Settings.SetSettingValue',{'setting':'videoplayer.usedisplayasclock','value':_0x49feb9},function(_0x242550){console[a28_0x4b77('0x4a')]('enableClock:\x20');console['log'](_0x242550);}[a28_0x4b77('0x40')](this));}[a28_0x4b77('0xce')](_0x101d07){exec(a28_0x4b77('0xe3')+_0x101d07+'\x22',function(_0x103ff9){console[a28_0x4b77('0x4a')](_0x103ff9);});}[a28_0x4b77('0xe4')](_0x2f67fa,_0x510d22,_0x604a68){const _0x1e3857={'jsonrpc':a28_0x4b77('0xe5'),'method':_0x2f67fa,'params':_0x510d22,'id':0x1};const _0x2b24c9={'user':this[a28_0x4b77('0x3d')],'pass':this[a28_0x4b77('0x29')]};console['log'](a28_0x4b77('0xe6'),_0x1e3857);console[a28_0x4b77('0x4a')](a28_0x4b77('0xe7'),_0x2b24c9);this[a28_0x4b77('0x2c')]['post'](this['kodiHost']+'/jsonrpc',_0x1e3857,![],_0x2b24c9)['then'](function(_0x578a2b){_0x604a68(_0x578a2b);})[a28_0x4b77('0x54')](function(_0xb6610e){});}}exports[a28_0x4b77('0xe8')]=SyncPlaylistsService;