var a22_0x521b=['videoFile:\x20','media','track','Video','mediainfo\x20check:','includes','indexOf','splice','downloading:\x20','Error:\x20','start','error','end','mediaType:\x20','stopped','destroyed','retry','downloadHTTPFile','Attempting\x20to\x20download\x20','\x20to\x20','Max\x20redirects\x20reached','WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20','downloadFile\x20callback\x20result\x20undefined:\x20','globalAgent','maxSockets','host','pathname','get','\x20Progress:\x20unknown\x09','statusCode','content-length','stat','size','And\x20the\x20file\x20size\x20matches\x20(',')\x20vs\x20New(','createWriteStream','data','err:\x20','finish','Downloaded\x20','headers','location','Redirect\x20','File\x20Not\x20Found\x20','Problem\x20downloading\x20','\x20STATUS:\x20','abort','message','downloadHTTPFileCallback','duration','createImageVideo','video','progress','Error\x20downloading\x20file','Downloaded:\x20','pipe','ffmpeg','1/2','-pattern_type','glob','-c:v','libx264','-pix_fmt','yuv420p','-vf','scale=1920:1080','stdout','Converting\x20','stderr','stderr:\x20','finished\x20mp4\x20convert','downloadYouTube','Download\x20started','_filename','size:\x20','filename:\x20','\x20already\x20downloaded.','finished\x20youtube\x20downloading!','Finishing','#EXTCPlayListM3U::M3U','#EXTINF:0,luloPlayList','media_type','/home/osmc/luloclient/media/files/','shutdown','now','Playlist\x20incomplete,\x20retry.','SyncPlaylistsService','__awaiter','next','throw','done','value','apply','defineProperty','__esModule','node-mediainfo','fs-extra','request','request-progress','child_process','spawn','is-image','string-template','youtube-dl','uuid/v4','config.json','context.json','node-kodi','mt-files-downloader','media/','tempFolder','mediaFolder','temp/','filesFolder','files/','playListFile','playlist.txt','m3uFile','lulo_playlist.m3u','currentFile','playlistChanged','newPlayList','httpClientService','init','config','parse','readFileSync','playerId','env','WEB_SERVICE_URL','deploy/','playListServiceURL','baseURL','api/player_playlist.php?player_id={0}','kodi','lulo','.lulo123.','checkDependencies','registerClient','checkFolders','loadMediaList','getStatus','bind','playlist','getItems','then','stringify','deviceUuid','context','http://restapi.lulo.run/player_devices/register','log','register\x20response:\x20','catch','writeFileSync','player','getCurrentlyPlayingVideo','item','label','reportStatus','reportStatusResponse:\x20','ensureDir','loadMediaList:\x20','hasPlayListChanged','emptyDirSync','failDownloadFiles','push','Total:\x20','downloadFiles','reloadMediaList','existsSync','removeSync','reboot','Shutdown','toString','download','\x20of\x20','length','finishProcess','path','lastIndexOf','split','slice','join','.mp4','image','**********+','checkVideo','copySync','Downloading:\x20','youtube_single','downloader'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(a22_0x521b,0x1d5));var a22_0x1958=function(_0x55901b,_0x1f95de){_0x55901b=_0x55901b-0x0;var _0x1951b=a22_0x521b[_0x55901b];return _0x1951b;};'use strict';var __awaiter=this&&this[a22_0x1958('0x0')]||function(_0x554c35,_0xa7199f,_0x84495a,_0x36a69a){function _0x57bdc4(_0x347e5b){return _0x347e5b instanceof _0x84495a?_0x347e5b:new _0x84495a(function(_0x21b042){_0x21b042(_0x347e5b);});}return new(_0x84495a||(_0x84495a=Promise))(function(_0x101ba1,_0x5808af){function _0xd24bb5(_0x3f3411){try{_0x4b37bc(_0x36a69a[a22_0x1958('0x1')](_0x3f3411));}catch(_0xd1d186){_0x5808af(_0xd1d186);}}function _0x435d5a(_0x534fee){try{_0x4b37bc(_0x36a69a[a22_0x1958('0x2')](_0x534fee));}catch(_0x1cd24e){_0x5808af(_0x1cd24e);}}function _0x4b37bc(_0x3f2768){_0x3f2768[a22_0x1958('0x3')]?_0x101ba1(_0x3f2768[a22_0x1958('0x4')]):_0x57bdc4(_0x3f2768['value'])['then'](_0xd24bb5,_0x435d5a);}_0x4b37bc((_0x36a69a=_0x36a69a[a22_0x1958('0x5')](_0x554c35,_0xa7199f||[]))[a22_0x1958('0x1')]());});};Object[a22_0x1958('0x6')](exports,a22_0x1958('0x7'),{'value':!![]});const HttpClientService_1=require('../infrastructure/HttpClientService');const mediainfo=require(a22_0x1958('0x8'));const fs=require('fs');const url=require('url');const http=require('http');const fsExtra=require(a22_0x1958('0x9'));const request=require(a22_0x1958('0xa'));const progress=require(a22_0x1958('0xb'));const spawn=require(a22_0x1958('0xc'))[a22_0x1958('0xd')];const isImage=require(a22_0x1958('0xe'));const format=require(a22_0x1958('0xf'));const os=require('os');const youtubedl=require(a22_0x1958('0x10'));const uuidv4=require(a22_0x1958('0x11'));const configFile=a22_0x1958('0x12');const contextFile=a22_0x1958('0x13');const urlExists=require('url-exists');const kodi_rpc=require(a22_0x1958('0x14'));const Downloader=require(a22_0x1958('0x15'));class SyncPlaylistsService{constructor(){this['mediaFolder']=a22_0x1958('0x16');this[a22_0x1958('0x17')]=this[a22_0x1958('0x18')]+a22_0x1958('0x19');this[a22_0x1958('0x1a')]=this['mediaFolder']+a22_0x1958('0x1b');this[a22_0x1958('0x1c')]=this[a22_0x1958('0x18')]+a22_0x1958('0x1d');this[a22_0x1958('0x1e')]=this['filesFolder']+a22_0x1958('0x1f');this[a22_0x1958('0x20')]=0x0;this[a22_0x1958('0x21')]=![];this['downloadFiles']=[];this['failDownloadFiles']=[];this[a22_0x1958('0x22')]={};this[a22_0x1958('0x23')]=new HttpClientService_1['HttpClientService']();}[a22_0x1958('0x24')](){this[a22_0x1958('0x25')]=JSON[a22_0x1958('0x26')](fs[a22_0x1958('0x27')](configFile));this['context']=JSON[a22_0x1958('0x26')](fs[a22_0x1958('0x27')](contextFile));this[a22_0x1958('0x28')]=this['config']['playerId'];this['baseURL']=process[a22_0x1958('0x29')][a22_0x1958('0x2a')]+a22_0x1958('0x2b');this[a22_0x1958('0x2c')]=this[a22_0x1958('0x2d')]+a22_0x1958('0x2e');this[a22_0x1958('0x2f')]=new kodi_rpc({'url':'http://localhost','user':a22_0x1958('0x30'),'password':a22_0x1958('0x31')});this[a22_0x1958('0x32')]();this[a22_0x1958('0x33')]();this[a22_0x1958('0x34')]();this[a22_0x1958('0x35')]();setInterval(function(){this[a22_0x1958('0x36')]();}[a22_0x1958('0x37')](this),0x2710);setInterval(function(){this[a22_0x1958('0x33')]();}[a22_0x1958('0x37')](this),0x493e0);}[a22_0x1958('0x32')](){}[a22_0x1958('0x33')](){this['kodi'][a22_0x1958('0x38')][a22_0x1958('0x39')](0x1)[a22_0x1958('0x3a')](function(_0x4b7f34){const _0x5f532c=JSON[a22_0x1958('0x3b')](_0x4b7f34);const _0x51fca9={'player_id':this[a22_0x1958('0x28')],'device_uuid':this[a22_0x1958('0x25')][a22_0x1958('0x3c')],'network_info':JSON['stringify'](os['networkInterfaces']()),'firmware_info':JSON[a22_0x1958('0x3b')](this[a22_0x1958('0x3d')]),'playlist':_0x5f532c,'playing_item':'','status':0x0};this[a22_0x1958('0x23')]['post'](a22_0x1958('0x3e'),_0x51fca9,![])[a22_0x1958('0x3a')](function(_0x47fe72){console[a22_0x1958('0x3f')](a22_0x1958('0x40')+Date());})[a22_0x1958('0x41')](function(_0x33a62e){});console['log'](_0x51fca9);}[a22_0x1958('0x37')](this));const _0x3b72fb=this[a22_0x1958('0x25')][a22_0x1958('0x3c')];if(!_0x3b72fb||_0x3b72fb==''){this[a22_0x1958('0x25')][a22_0x1958('0x3c')]=uuidv4();this[a22_0x1958('0x25')]={'deviceUuid':this[a22_0x1958('0x25')][a22_0x1958('0x3c')],'playerId':this[a22_0x1958('0x25')][a22_0x1958('0x28')]};fs[a22_0x1958('0x42')](configFile,JSON['stringify'](this['config']));}}['getStatus'](){console[a22_0x1958('0x3f')]('getStatus');this[a22_0x1958('0x2f')][a22_0x1958('0x43')][a22_0x1958('0x44')]()[a22_0x1958('0x3a')](function(_0x4a87c0){const _0x285174=_0x4a87c0[a22_0x1958('0x45')][a22_0x1958('0x46')];this['reportStatus'](_0x285174);}['bind'](this))['catch'](function(_0x225aac){console[a22_0x1958('0x3f')](_0x225aac);this[a22_0x1958('0x47')](_0x225aac);}[a22_0x1958('0x37')](this));}[a22_0x1958('0x47')](_0x3399e6){console[a22_0x1958('0x3f')]('playingItem:\x20'+_0x3399e6);const _0x25cd54={'player_id':this[a22_0x1958('0x28')],'device_uuid':this['config']['deviceUuid'],'status':_0x3399e6!=''&&_0x3399e6!=null?0x1:0x0,'playing_item':_0x3399e6};this[a22_0x1958('0x23')]['post']('http://restapi.lulo.run/player_devices/report_status',_0x25cd54,![])['then'](function(_0x114db8){console[a22_0x1958('0x3f')](a22_0x1958('0x48')+Date());})['catch'](function(_0x56ded2){});}[a22_0x1958('0x34')](){fsExtra[a22_0x1958('0x49')](this['mediaFolder'],_0x1763ad=>{});fsExtra[a22_0x1958('0x49')](this[a22_0x1958('0x17')],_0x26d69b=>{});fsExtra['ensureDir'](this[a22_0x1958('0x1a')],_0x117248=>{});}[a22_0x1958('0x35')](){const _0x17ed05=format(this[a22_0x1958('0x2c')],this[a22_0x1958('0x28')]);console[a22_0x1958('0x3f')](_0x17ed05);request({'url':_0x17ed05,'json':!![]},function(_0x2e05bf,_0x7e72a9,_0x1623d3){console[a22_0x1958('0x3f')](a22_0x1958('0x4a'));console['log'](_0x1623d3);this[a22_0x1958('0x22')]=_0x1623d3;this[a22_0x1958('0x21')]=this[a22_0x1958('0x4b')]();fsExtra[a22_0x1958('0x4c')](this[a22_0x1958('0x17')]);this['downloadFiles']=[];this[a22_0x1958('0x4d')]=[];this[a22_0x1958('0x20')]=0x0;for(const _0x35fdf4 in _0x1623d3){this['downloadFiles'][a22_0x1958('0x4e')](_0x1623d3[_0x35fdf4]);}console[a22_0x1958('0x3f')](a22_0x1958('0x4f')+this[a22_0x1958('0x50')]['length']);if(this[a22_0x1958('0x50')]['length']>0x0){this['download']();}}[a22_0x1958('0x37')](this));}[a22_0x1958('0x51')](){if(fsExtra[a22_0x1958('0x52')](this['tempFolder'])){fsExtra[a22_0x1958('0x4c')](this[a22_0x1958('0x17')]);}if(fsExtra[a22_0x1958('0x52')](this[a22_0x1958('0x1c')])){fsExtra[a22_0x1958('0x4c')](this['playListFile']);}if(!fsExtra[a22_0x1958('0x52')](this['playListFile'])){fsExtra[a22_0x1958('0x53')](this[a22_0x1958('0x1c')]);}if(!fsExtra[a22_0x1958('0x52')](this[a22_0x1958('0x1e')])){fsExtra[a22_0x1958('0x53')](this[a22_0x1958('0x1e')]);}this[a22_0x1958('0x35')]();}[a22_0x1958('0x54')](){this[a22_0x1958('0x2f')]['System'][a22_0x1958('0x55')]();}['hasPlayListChanged'](){const _0xa8e76d=JSON[a22_0x1958('0x3b')](this['newPlayList']);try{if(!fsExtra[a22_0x1958('0x52')](this[a22_0x1958('0x1c')])){return!![];}else{const _0x66aaed=fsExtra[a22_0x1958('0x27')](this[a22_0x1958('0x1c')])[a22_0x1958('0x56')]();if(_0x66aaed!=_0xa8e76d){return!![];}}}catch(_0x5f0214){console[a22_0x1958('0x3f')](_0x5f0214);}return![];}[a22_0x1958('0x57')](){console['log']('this.currentFile:\x20'+this[a22_0x1958('0x20')]+a22_0x1958('0x58')+this['downloadFiles'][a22_0x1958('0x59')]);if(this['currentFile']>=this[a22_0x1958('0x50')]['length']){this[a22_0x1958('0x5a')]();return;}const _0xa608ee=String(this['downloadFiles'][this[a22_0x1958('0x20')]][a22_0x1958('0x5b')]);const _0x35fa75=this[a22_0x1958('0x50')][this[a22_0x1958('0x20')]]['media_type'];let _0xd027d1=_0xa608ee['substring'](_0xa608ee[a22_0x1958('0x5c')]('/')+0x1);const _0x16f151=_0xd027d1[a22_0x1958('0x5d')]('.')[a22_0x1958('0x5e')](0x0,-0x1)[a22_0x1958('0x5f')]('.');let _0x399dd4=this[a22_0x1958('0x2d')]+_0xa608ee;const _0x255c34=_0x399dd4['split']('.')[a22_0x1958('0x5e')](0x0,-0x1)[a22_0x1958('0x5f')]('.');if(_0x35fa75=='youtube_single'){_0xd027d1=_0xd027d1+a22_0x1958('0x60');}else if(_0x35fa75==a22_0x1958('0x61')){_0xd027d1=_0x16f151+a22_0x1958('0x60');_0x399dd4=_0x255c34+a22_0x1958('0x60');}console[a22_0x1958('0x3f')]('**********+');console[a22_0x1958('0x3f')](_0xa608ee);console[a22_0x1958('0x3f')](_0x35fa75);console['log'](_0xd027d1);console[a22_0x1958('0x3f')](_0x399dd4);console[a22_0x1958('0x3f')](_0x16f151);console['log'](_0x255c34);console[a22_0x1958('0x3f')](a22_0x1958('0x62'));if(fsExtra[a22_0x1958('0x52')](this[a22_0x1958('0x17')]+_0xd027d1)){this[a22_0x1958('0x63')](this[a22_0x1958('0x17')]+_0xd027d1)['then'](function(_0x1e384c){if(_0x1e384c){this[a22_0x1958('0x20')]++;}else{this[a22_0x1958('0x21')]=!![];}this[a22_0x1958('0x57')]();}[a22_0x1958('0x37')](this));}else if(fsExtra['existsSync'](this['filesFolder']+_0xd027d1)){this[a22_0x1958('0x63')](this[a22_0x1958('0x1a')]+_0xd027d1)['then'](function(_0x125f9f){if(_0x125f9f){fsExtra[a22_0x1958('0x64')](this[a22_0x1958('0x1a')]+_0xd027d1,this['tempFolder']+_0xd027d1);this[a22_0x1958('0x20')]++;}else{this['playlistChanged']=!![];}this[a22_0x1958('0x57')]();}[a22_0x1958('0x37')](this));}else{console[a22_0x1958('0x3f')](a22_0x1958('0x65')+_0x399dd4);this['playlistChanged']=!![];if(_0x35fa75==a22_0x1958('0x66')){this['downloadYouTube'](_0xa608ee);}else{this[a22_0x1958('0x67')](_0x399dd4,_0xd027d1,_0x35fa75);}}}[a22_0x1958('0x63')](_0x26a168){return __awaiter(this,void 0x0,void 0x0,function*(){console[a22_0x1958('0x3f')](a22_0x1958('0x68')+_0x26a168);const _0x4f893c=yield mediainfo(_0x26a168)[a22_0x1958('0x41')](_0x1f1936=>{console[a22_0x1958('0x3f')](_0x1f1936);fsExtra['removeSync'](_0x26a168);return![];});const _0x21823a=_0x4f893c[a22_0x1958('0x69')]['track']['length']>0x1&&_0x4f893c[a22_0x1958('0x69')][a22_0x1958('0x6a')][0x1]['@type']==a22_0x1958('0x6b');if(!_0x21823a){fsExtra['removeSync'](_0x26a168);}console['log'](a22_0x1958('0x6c')+_0x21823a);return _0x21823a;});}['downloader'](_0x15564a,_0x444297,_0x291000){const _0x429e12=new Downloader();console['log'](_0x15564a);console[a22_0x1958('0x3f')](_0x444297);console[a22_0x1958('0x3f')](_0x291000);const _0x594dfb=_0x429e12[a22_0x1958('0x57')](_0x15564a,this['tempFolder']+_0x444297);urlExists(_0x15564a,function(_0x1d382f,_0x2888ab){if(_0x2888ab){if(this[a22_0x1958('0x4d')][a22_0x1958('0x6d')](this[a22_0x1958('0x20')])){const _0x364c1e=this[a22_0x1958('0x4d')][a22_0x1958('0x6e')](this[a22_0x1958('0x20')]);if(_0x364c1e>-0x1){this['failDownloadFiles'][a22_0x1958('0x6f')](_0x364c1e,0x1);}}console[a22_0x1958('0x3f')](a22_0x1958('0x70')+_0x15564a);_0x594dfb['start']();}else{if(!this[a22_0x1958('0x4d')][a22_0x1958('0x6d')](this[a22_0x1958('0x20')])){this[a22_0x1958('0x4d')]['push'](this[a22_0x1958('0x20')]);}console['log'](a22_0x1958('0x71')+_0x15564a);this[a22_0x1958('0x20')]++;this['download']();}}['bind'](this));_0x594dfb['on'](a22_0x1958('0x72'),function(_0x594dfb){console[a22_0x1958('0x3f')]('start:\x20'+_0x15564a);});_0x594dfb['on'](a22_0x1958('0x73'),function(_0x594dfb){console['log']('error:\x20');this[a22_0x1958('0x57')]();}[a22_0x1958('0x37')](this));_0x594dfb['on'](a22_0x1958('0x74'),function(_0x594dfb){console['log']('end');console[a22_0x1958('0x3f')]('Downloaded:\x20'+_0x444297);console[a22_0x1958('0x3f')](a22_0x1958('0x75')+_0x291000);this['checkVideo'](this[a22_0x1958('0x17')]+_0x444297)[a22_0x1958('0x3a')](function(_0x47d481){if(_0x47d481){this['currentFile']++;}this['download']();}['bind'](this));}[a22_0x1958('0x37')](this));_0x594dfb['on']('stopped',function(_0x594dfb){console['log'](a22_0x1958('0x76'));});_0x594dfb['on'](a22_0x1958('0x77'),function(_0x594dfb){console[a22_0x1958('0x3f')](a22_0x1958('0x77'));});_0x594dfb['on'](a22_0x1958('0x78'),function(_0x594dfb){console[a22_0x1958('0x3f')](a22_0x1958('0x78'));});}[a22_0x1958('0x79')](_0x261e44,_0x349069,_0x125411,_0x420b24){console[a22_0x1958('0x3f')](a22_0x1958('0x79'));console['log'](_0x261e44);const _0x28fd4f=!![];let _0x256c07=0x0;const _0x19c5ae='';console[a22_0x1958('0x3f')](a22_0x1958('0x7a')+_0x261e44+a22_0x1958('0x7b')+_0x349069);if(_0x256c07){if(_0x256c07>0x5){_0x420b24(a22_0x1958('0x7c'),_0x261e44,_0x125411,null);return;}}else{_0x256c07=0x0;}const _0x411d1d=this[a22_0x1958('0x17')]+_0x349069;let _0x59988f;if(_0x420b24===undefined){console[a22_0x1958('0x3f')](a22_0x1958('0x7d')+_0x261e44+a22_0x1958('0x7b')+_0x411d1d);_0x420b24=function(_0xbb4aa7,_0x890493){console[a22_0x1958('0x3f')](a22_0x1958('0x7e'),_0xbb4aa7,_0x890493);};}http[a22_0x1958('0x7f')][a22_0x1958('0x80')]=0x64;const _0x1d33f2={'host':url['parse'](_0x261e44)[a22_0x1958('0x81')],'port':0x50,'path':url['parse'](_0x261e44)[a22_0x1958('0x82')],'agent':![]};const _0x357ac8=http[a22_0x1958('0x83')](_0x1d33f2,function(_0x371d3f){let _0x326dd6=0x0;let _0xd2d3a8=0x0;function _0x478e5d(){if(_0x326dd6===undefined){console['log'](_0x349069+a22_0x1958('0x84')+_0xd2d3a8+'/'+'?');}const _0x43158c=_0xd2d3a8/_0x326dd6*0x64;console[a22_0x1958('0x3f')](_0x349069+'\x20Progress:\x20'+_0x43158c+'%\x09'+_0xd2d3a8+'/'+_0x326dd6);}console[a22_0x1958('0x3f')](_0x349069+'\x20'+_0x371d3f['statusCode']);switch(_0x371d3f[a22_0x1958('0x85')]){case 0xc8:_0x326dd6=_0x371d3f['headers'][a22_0x1958('0x86')]||_0x19c5ae;fs[a22_0x1958('0x87')](_0x411d1d,function(_0x555de6,_0x3a3a7d){if(!_0x555de6){console['log']('Have\x20already\x20downloaded\x20'+_0x411d1d);if(_0x3a3a7d[a22_0x1958('0x88')]==_0x326dd6){console[a22_0x1958('0x3f')](a22_0x1958('0x89')+_0x326dd6+')');console[a22_0x1958('0x3f')]('Redownloading');}else{console['log']('But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old('+_0x3a3a7d[a22_0x1958('0x88')]+a22_0x1958('0x8a')+_0x326dd6+')');}}_0x59988f=fs[a22_0x1958('0x8b')](_0x411d1d);_0x371d3f['pipe'](_0x59988f);_0x371d3f['on'](a22_0x1958('0x8c'),function(_0x465202){_0xd2d3a8+=_0x465202[a22_0x1958('0x59')];_0x478e5d();});_0x357ac8['on']('error',function(_0x555de6){console[a22_0x1958('0x3f')](a22_0x1958('0x8d'));console[a22_0x1958('0x3f')](_0x555de6);});_0x59988f['on'](a22_0x1958('0x8e'),function(){console[a22_0x1958('0x3f')](a22_0x1958('0x8f')+_0x261e44+a22_0x1958('0x7b')+_0x349069);_0x420b24(null,_0x349069,_0x125411,_0x349069);}[a22_0x1958('0x37')](this));});break;case 0x12e:const _0x3c7d8a=_0x371d3f[a22_0x1958('0x90')][a22_0x1958('0x91')];console[a22_0x1958('0x3f')](a22_0x1958('0x92')+_0x261e44+a22_0x1958('0x7b')+_0x3c7d8a);if(_0x256c07<0x5){this[a22_0x1958('0x79')](_0x3c7d8a,_0x349069,_0x420b24,_0x256c07++);}else{console[a22_0x1958('0x73')]('Redirect\x20limit\x20encountered\x20for\x20'+_0x261e44+'.');_0x420b24('302',null,null,null);}return;case 0x194:console[a22_0x1958('0x3f')](a22_0x1958('0x93')+_0x261e44);default:console[a22_0x1958('0x3f')](a22_0x1958('0x94')+_0x261e44+a22_0x1958('0x95')+_0x371d3f[a22_0x1958('0x85')]);_0x357ac8[a22_0x1958('0x96')]();_0x420b24(_0x371d3f[a22_0x1958('0x85')],null,null,null);return;}})['on']('error',function(_0x484830){console[a22_0x1958('0x3f')]('Error\x20Downloading:\x20'+_0x261e44+'\x20'+_0x484830[a22_0x1958('0x97')]);_0x420b24(_0x484830,null,null,null);});}['downloadHTTPFileCallback'](_0x98fe1f,_0x111c4a,_0x4d7f05,_0x17fd48){console[a22_0x1958('0x3f')](a22_0x1958('0x98'));console[a22_0x1958('0x3f')](_0x98fe1f);console[a22_0x1958('0x3f')](_0x111c4a);console['log'](_0x4d7f05);console[a22_0x1958('0x3f')](_0x17fd48);if(_0x4d7f05=='image'){const _0x212e2e=this['downloadFiles'][this['currentFile']]['duration']!=null?this['downloadFiles'][this[a22_0x1958('0x20')]][a22_0x1958('0x99')]:0x1e;this[a22_0x1958('0x9a')](_0x17fd48,_0x212e2e);}else if(_0x4d7f05==a22_0x1958('0x9b')){if(_0x98fe1f==null&&_0x111c4a!=''){this[a22_0x1958('0x20')]++;}this['download']();}console[a22_0x1958('0x3f')](this[a22_0x1958('0x20')]);}['downloadRequestFile'](_0x152417,_0xa8fbf5,_0x3505b9){progress(request(_0x152417),{})['on'](a22_0x1958('0x9c'),function(_0x11c18d){console[a22_0x1958('0x3f')](_0x11c18d);})['on'](a22_0x1958('0x73'),function(_0x31761f){console[a22_0x1958('0x3f')](a22_0x1958('0x9d'));this[a22_0x1958('0x57')]();})['on'](a22_0x1958('0x74'),function(){console[a22_0x1958('0x3f')](a22_0x1958('0x9e')+_0xa8fbf5);console[a22_0x1958('0x3f')](a22_0x1958('0x75')+_0x3505b9);if(_0x3505b9=='image'){const _0x34e84b=this[a22_0x1958('0x50')][this[a22_0x1958('0x20')]][a22_0x1958('0x99')]!=null?this[a22_0x1958('0x50')][this[a22_0x1958('0x20')]][a22_0x1958('0x99')]:0x1e;this['createImageVideo'](_0xa8fbf5,_0x34e84b);}else if(_0x3505b9==a22_0x1958('0x9b')){this['currentFile']++;this['download']();}}['bind'](this))[a22_0x1958('0x9f')](fs[a22_0x1958('0x8b')](this['tempFolder']+_0xa8fbf5));}[a22_0x1958('0x9a')](_0x3d2f0e,_0x57482b=0x1e){const _0x35269f=this[a22_0x1958('0x17')]+_0x3d2f0e;console[a22_0x1958('0x3f')](_0x35269f);console[a22_0x1958('0x3f')](_0x3d2f0e);const _0x3cf321=_0x3d2f0e[a22_0x1958('0x5d')]('.')['slice'](0x0,-0x1)[a22_0x1958('0x5f')]('.');const _0x4032c8=a22_0x1958('0xa0');const _0x414526=['-y','-r',a22_0x1958('0xa1'),'-loop','1',a22_0x1958('0xa2'),a22_0x1958('0xa3'),'-i',_0x35269f,'-t',String(_0x57482b),a22_0x1958('0xa4'),a22_0x1958('0xa5'),a22_0x1958('0xa6'),a22_0x1958('0xa7'),'-r','25',a22_0x1958('0xa8'),a22_0x1958('0xa9'),this[a22_0x1958('0x17')]+_0x3cf321+a22_0x1958('0x60')];const _0x5ef37e=spawn(_0x4032c8,_0x414526);_0x5ef37e[a22_0x1958('0xaa')]['on'](a22_0x1958('0x8c'),function(_0x4d14ff){console[a22_0x1958('0x3f')](a22_0x1958('0xab')+_0x35269f);});_0x5ef37e[a22_0x1958('0xac')]['on']('data',function(_0x57240f){console[a22_0x1958('0x3f')](a22_0x1958('0xad')+_0x57240f);}[a22_0x1958('0x37')](this));_0x5ef37e['on']('close',function(){console['log'](a22_0x1958('0xae'));this[a22_0x1958('0x20')]++;this['download']();}['bind'](this));}[a22_0x1958('0xaf')](_0x4f4d42){const _0x18d02c=this['tempFolder']+'/'+_0x4f4d42+a22_0x1958('0x60');const _0x2c2ad2=youtubedl('http://www.youtube.com/watch?v='+_0x4f4d42,['--format=18'],{'cwd':__dirname});_0x2c2ad2['on']('info',function(_0xe078ac){console['log'](a22_0x1958('0xb0'));console[a22_0x1958('0x3f')]('filename:\x20'+_0xe078ac[a22_0x1958('0xb1')]);console[a22_0x1958('0x3f')](a22_0x1958('0xb2')+_0xe078ac[a22_0x1958('0x88')]);});_0x2c2ad2['on']('complete',function complete(_0x3c46a4){'use strict';console[a22_0x1958('0x3f')](a22_0x1958('0xb3')+_0x3c46a4[a22_0x1958('0xb1')]+a22_0x1958('0xb4'));});_0x2c2ad2['on'](a22_0x1958('0x74'),function(){console[a22_0x1958('0x3f')](a22_0x1958('0xb5'));this['checkVideo'](_0x18d02c)[a22_0x1958('0x3a')](function(_0x696dda){if(_0x696dda){this[a22_0x1958('0x20')]++;}this[a22_0x1958('0x57')]();}[a22_0x1958('0x37')](this));}[a22_0x1958('0x37')](this));_0x2c2ad2['pipe'](fs[a22_0x1958('0x8b')](_0x18d02c));}[a22_0x1958('0x5a')](){console[a22_0x1958('0x3f')](a22_0x1958('0xb6'));if(this[a22_0x1958('0x21')]){if(this[a22_0x1958('0x4d')][a22_0x1958('0x59')]==0x0){fs['writeFileSync'](this['playListFile'],JSON['stringify'](this[a22_0x1958('0x22')]));let _0x508c74=a22_0x1958('0xb7')+'\x0d\x0a'+a22_0x1958('0xb8')+'\x0d\x0a';for(const _0x3eb279 in this[a22_0x1958('0x50')]){const _0x4941bc=this[a22_0x1958('0x50')][_0x3eb279][a22_0x1958('0x5b')];const _0x5ca5fa=this[a22_0x1958('0x50')][_0x3eb279][a22_0x1958('0xb9')];const _0xbae8d0=_0x4941bc['substring'](_0x4941bc[a22_0x1958('0x5c')]('/')+0x1);let _0x126dbe=_0xbae8d0[a22_0x1958('0x5d')]('.')[a22_0x1958('0x5e')](0x0,-0x1)['join']('.');if(_0x5ca5fa==a22_0x1958('0x66')){_0x126dbe=_0x4941bc;}_0x508c74+=a22_0x1958('0xba')+_0x126dbe+'.mp4'+'\x0d\x0a';}fsExtra[a22_0x1958('0x4c')](this[a22_0x1958('0x1a')]);fsExtra[a22_0x1958('0x64')](this[a22_0x1958('0x17')],this['filesFolder']);fsExtra[a22_0x1958('0x42')](this[a22_0x1958('0x1e')],_0x508c74);fsExtra[a22_0x1958('0x4c')](this[a22_0x1958('0x17')]);console['log']('Rebooting..');const _0x15e688=spawn(a22_0x1958('0xbb'),['-r',a22_0x1958('0xbc')]);}else{console['log'](a22_0x1958('0xbd'));this[a22_0x1958('0x20')]=0x0;setTimeout(function(){this['download']();}[a22_0x1958('0x37')](this),0x1388);}}else{console[a22_0x1958('0x3f')]('No\x20playlist\x20changes.');}}}exports[a22_0x1958('0xbe')]=SyncPlaylistsService;