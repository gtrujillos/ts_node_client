var a22_0x50e8=['removeSync','hasPlayListChanged','toString','error','this.currentFile:\x20','\x20of\x20','finishProcess','path','media_type','substring','lastIndexOf','Downloading:\x20','downloadYouTube','downloader','downloading:\x20','start','start:\x20','bind','Downloaded:\x20','mediaType:\x20','duration','video','stopped','destroyed','retry','downloadHTTPFile','Attempting\x20to\x20download\x20','\x20to\x20','Max\x20redirects\x20reached','globalAgent','pathname','get','\x20Progress:\x20','statusCode','headers','stat','Have\x20already\x20downloaded\x20','size','And\x20the\x20file\x20size\x20matches\x20(','But\x20the\x20file\x20size\x20does\x20not\x20match\x20so\x20re-downloading\x20Old(',')\x20vs\x20New(','createWriteStream','pipe','err:\x20','Downloaded\x20','location','Redirect\x20','Redirect\x20limit\x20encountered\x20for\x20','302','File\x20Not\x20Found\x20','Problem\x20downloading\x20','\x20STATUS:\x20','abort','Error\x20Downloading:\x20','message','downloadHTTPFileCallback','image','createImageVideo','progress','Error\x20downloading\x20file','end','slice','join','ffmpeg','1/2','-loop','glob','-pix_fmt','-vf','scale=1920:1080','.mp4','Converting\x20','stderr','data','stderr:\x20','finished\x20mp4\x20convert','http://www.youtube.com/watch?v=','--format=18','Download\x20started','size:\x20','filename:\x20','_filename','\x20already\x20downloaded.','finished\x20youtube\x20downloading!','#EXTINF:0,luloPlayList','split','youtube_single','/home/osmc/luloclient/media/files/','copySync','filesFolder','Finished','shutdown','now','SyncPlaylistsService','defineProperty','__esModule','../infrastructure/HttpClientService','url','http','request','request-progress','child_process','spawn','string-template','youtube-dl','uuid/v4','config.json','mt-files-downloader','mediaFolder','media/','tempFolder','temp/','m3uFile','lulo_playlist.m3u','currentFile','newPlayList','httpClientService','HttpClientService','init','parse','readFileSync','playerId','config','baseURL','env','WEB_SERVICE_URL','playListServiceURL','api/player_playlist.php?player_id={0}','registerClient','checkFolders','deviceUuid','writeFileSync','stringify','context','post','http://restapi.lulo.run/player_devices/register','then','log','parsedBody','catch','ensureDir','loadMediaList','emptyDirSync','downloadFiles','push','Total:\x20','length','download','No\x20playlist\x20changes','reloadMediaList','existsSync','playListFile'];(function(_0x428321,_0x3bbe3f){var _0x133a22=function(_0x1ba6ad){while(--_0x1ba6ad){_0x428321['push'](_0x428321['shift']());}};_0x133a22(++_0x3bbe3f);}(a22_0x50e8,0x18e));var a22_0x1e54=function(_0x28876d,_0x75d5e4){_0x28876d=_0x28876d-0x0;var _0x3d869a=a22_0x50e8[_0x28876d];return _0x3d869a;};'use strict';Object[a22_0x1e54('0x0')](exports,a22_0x1e54('0x1'),{'value':!![]});const HttpClientService_1=require(a22_0x1e54('0x2'));const fs=require('fs');const url=require(a22_0x1e54('0x3'));const http=require(a22_0x1e54('0x4'));const fsExtra=require('fs-extra');const request=require(a22_0x1e54('0x5'));const progress=require(a22_0x1e54('0x6'));const spawn=require(a22_0x1e54('0x7'))[a22_0x1e54('0x8')];const isImage=require('is-image');const format=require(a22_0x1e54('0x9'));const os=require('os');const youtubedl=require(a22_0x1e54('0xa'));const uuidv4=require(a22_0x1e54('0xb'));const configFile=a22_0x1e54('0xc');const contextFile='context.json';const Downloader=require(a22_0x1e54('0xd'));class SyncPlaylistsService{constructor(){this[a22_0x1e54('0xe')]=a22_0x1e54('0xf');this[a22_0x1e54('0x10')]=this['mediaFolder']+a22_0x1e54('0x11');this['filesFolder']=this['mediaFolder']+'files/';this['playListFile']=this[a22_0x1e54('0xe')]+'playlist.txt';this[a22_0x1e54('0x12')]=this['filesFolder']+a22_0x1e54('0x13');this[a22_0x1e54('0x14')]=0x0;this['downloadFiles']=[];this[a22_0x1e54('0x15')]={};this[a22_0x1e54('0x16')]=new HttpClientService_1[(a22_0x1e54('0x17'))]();}[a22_0x1e54('0x18')](){this['config']=JSON[a22_0x1e54('0x19')](fs[a22_0x1e54('0x1a')](configFile));this['context']=JSON['parse'](fs[a22_0x1e54('0x1a')](contextFile));this[a22_0x1e54('0x1b')]=this[a22_0x1e54('0x1c')][a22_0x1e54('0x1b')];this[a22_0x1e54('0x1d')]=process[a22_0x1e54('0x1e')][a22_0x1e54('0x1f')]+'deploy/';this[a22_0x1e54('0x20')]=this[a22_0x1e54('0x1d')]+a22_0x1e54('0x21');this[a22_0x1e54('0x22')]();this[a22_0x1e54('0x23')]();this['loadMediaList']();}[a22_0x1e54('0x22')](){const _0xc0e603=this[a22_0x1e54('0x1c')][a22_0x1e54('0x24')];if(!_0xc0e603||_0xc0e603==''){this[a22_0x1e54('0x1c')]['deviceUuid']=uuidv4();this['config']={'deviceUuid':this[a22_0x1e54('0x1c')][a22_0x1e54('0x24')],'playerId':this['config'][a22_0x1e54('0x1b')]};fs[a22_0x1e54('0x25')](configFile,JSON['stringify'](this[a22_0x1e54('0x1c')]));}const _0x2d6d9e={'player_id':this['playerId'],'device_uuid':this[a22_0x1e54('0x1c')]['deviceUuid'],'network_info':JSON[a22_0x1e54('0x26')](os['networkInterfaces']()),'firmware_info':JSON[a22_0x1e54('0x26')](this[a22_0x1e54('0x27')]),'status':0x1};this[a22_0x1e54('0x16')][a22_0x1e54('0x28')](a22_0x1e54('0x29'),_0x2d6d9e,![])[a22_0x1e54('0x2a')](function(_0x5397ff){console[a22_0x1e54('0x2b')](a22_0x1e54('0x2c'));console['log'](_0x5397ff);})[a22_0x1e54('0x2d')](function(_0x2dfb9b){});}[a22_0x1e54('0x23')](){fsExtra['ensureDir'](this[a22_0x1e54('0xe')],_0x3e0aab=>{});fsExtra[a22_0x1e54('0x2e')](this[a22_0x1e54('0x10')],_0x38a5dc=>{});fsExtra['ensureDir'](this['filesFolder'],_0x5ce125=>{});}[a22_0x1e54('0x2f')](){const _0x1e1551=format(this[a22_0x1e54('0x20')],this['playerId']);console[a22_0x1e54('0x2b')](_0x1e1551);request({'url':_0x1e1551,'json':!![]},function(_0x2ef2aa,_0x5cdf7c,_0x25ad63){console[a22_0x1e54('0x2b')](_0x25ad63);this[a22_0x1e54('0x15')]=_0x25ad63;if(this['hasPlayListChanged']()){fsExtra[a22_0x1e54('0x30')](this[a22_0x1e54('0x10')]);this[a22_0x1e54('0x31')]=[];this[a22_0x1e54('0x14')]=0x0;for(const _0x10b1cb in _0x25ad63){this['downloadFiles'][a22_0x1e54('0x32')](_0x25ad63[_0x10b1cb]);}console[a22_0x1e54('0x2b')](a22_0x1e54('0x33')+this[a22_0x1e54('0x31')]['length']);if(this[a22_0x1e54('0x31')][a22_0x1e54('0x34')]>0x0){this[a22_0x1e54('0x35')]();}}else{console['log'](a22_0x1e54('0x36'));}}['bind'](this));}[a22_0x1e54('0x37')](){if(fsExtra[a22_0x1e54('0x38')](this[a22_0x1e54('0x39')])){fsExtra[a22_0x1e54('0x3a')](this[a22_0x1e54('0x39')]);}this[a22_0x1e54('0x2f')]();}[a22_0x1e54('0x3b')](){const _0x301525=JSON[a22_0x1e54('0x26')](this[a22_0x1e54('0x15')]);try{if(!fs[a22_0x1e54('0x38')](this['playListFile'])){return!![];}else{const _0x2eb0f9=fs[a22_0x1e54('0x1a')](this[a22_0x1e54('0x39')])[a22_0x1e54('0x3c')]();if(_0x2eb0f9!=_0x301525){return!![];}}}catch(_0x50439d){console[a22_0x1e54('0x3d')](_0x50439d);}return![];}[a22_0x1e54('0x35')](){console[a22_0x1e54('0x2b')](a22_0x1e54('0x3e')+this['currentFile']+a22_0x1e54('0x3f')+this[a22_0x1e54('0x31')]['length']);if(this[a22_0x1e54('0x14')]>=this['downloadFiles'][a22_0x1e54('0x34')]){this[a22_0x1e54('0x40')]();return;}const _0x3081a5=String(this[a22_0x1e54('0x31')][this[a22_0x1e54('0x14')]][a22_0x1e54('0x41')]);const _0x2b607c=this['downloadFiles'][this[a22_0x1e54('0x14')]][a22_0x1e54('0x42')];const _0x199647=_0x3081a5[a22_0x1e54('0x43')](_0x3081a5[a22_0x1e54('0x44')]('/')+0x1);const _0x253182=this[a22_0x1e54('0x1d')]+_0x3081a5;console[a22_0x1e54('0x2b')](a22_0x1e54('0x45')+_0x253182);if(_0x2b607c=='youtube_single'){this[a22_0x1e54('0x46')](_0x3081a5);}else{this[a22_0x1e54('0x47')](_0x253182,_0x199647,_0x2b607c);}}[a22_0x1e54('0x47')](_0x3eefe5,_0x21303a,_0x259552){console[a22_0x1e54('0x2b')](a22_0x1e54('0x48')+_0x3eefe5);const _0x4a75c2=new Downloader();console[a22_0x1e54('0x2b')](_0x3eefe5);console[a22_0x1e54('0x2b')](_0x21303a);console[a22_0x1e54('0x2b')](_0x259552);const _0x24633e=_0x4a75c2[a22_0x1e54('0x35')](_0x3eefe5,this['tempFolder']+_0x21303a);_0x24633e[a22_0x1e54('0x49')]();_0x24633e['on'](a22_0x1e54('0x49'),function(_0x24633e){console[a22_0x1e54('0x2b')](a22_0x1e54('0x4a')+_0x3eefe5);});_0x24633e['on']('error',function(_0x24633e){console['log'](a22_0x1e54('0x3d'));this[a22_0x1e54('0x35')]();}[a22_0x1e54('0x4b')](this));_0x24633e['on']('end',function(_0x24633e){console['log']('end');console[a22_0x1e54('0x2b')](a22_0x1e54('0x4c')+_0x21303a);console[a22_0x1e54('0x2b')](a22_0x1e54('0x4d')+_0x259552);if(_0x259552=='image'){const _0x4fb3e6=this[a22_0x1e54('0x31')][this[a22_0x1e54('0x14')]][a22_0x1e54('0x4e')]!=null?this[a22_0x1e54('0x31')][this[a22_0x1e54('0x14')]][a22_0x1e54('0x4e')]:0x1e;this['createImageVideo'](_0x21303a,_0x4fb3e6);}else if(_0x259552==a22_0x1e54('0x4f')){this['currentFile']++;this[a22_0x1e54('0x35')]();}}[a22_0x1e54('0x4b')](this));_0x24633e['on'](a22_0x1e54('0x50'),function(_0x24633e){console[a22_0x1e54('0x2b')](a22_0x1e54('0x50'));});_0x24633e['on'](a22_0x1e54('0x51'),function(_0x24633e){console[a22_0x1e54('0x2b')]('destroyed');});_0x24633e['on'](a22_0x1e54('0x52'),function(_0x24633e){console['log']('retry');});}[a22_0x1e54('0x53')](_0x40273d,_0x1b928b,_0x8f2bc7,_0x190a0c){console['log'](a22_0x1e54('0x53'));console[a22_0x1e54('0x2b')](_0x40273d);const _0x292e39=!![];let _0x31fdb9=0x0;const _0x47c77c='';console[a22_0x1e54('0x2b')](a22_0x1e54('0x54')+_0x40273d+a22_0x1e54('0x55')+_0x1b928b);if(_0x31fdb9){if(_0x31fdb9>0x5){_0x190a0c(a22_0x1e54('0x56'),_0x40273d,_0x8f2bc7,null);return;}}else{_0x31fdb9=0x0;}const _0x56a3f3=this[a22_0x1e54('0x10')]+_0x1b928b;let _0x452ed1;if(_0x190a0c===undefined){console[a22_0x1e54('0x2b')]('WARNING\x20downloadFile\x20callback\x20is\x20undefined\x20for\x20'+_0x40273d+a22_0x1e54('0x55')+_0x56a3f3);_0x190a0c=function(_0x2801a9,_0x256e01){console[a22_0x1e54('0x2b')]('downloadFile\x20callback\x20result\x20undefined:\x20',_0x2801a9,_0x256e01);};}http[a22_0x1e54('0x57')]['maxSockets']=0x64;const _0x2487cb={'host':url[a22_0x1e54('0x19')](_0x40273d)['host'],'port':0x50,'path':url[a22_0x1e54('0x19')](_0x40273d)[a22_0x1e54('0x58')],'agent':![]};const _0x30cf04=http[a22_0x1e54('0x59')](_0x2487cb,function(_0x22acfc){let _0x14be34=0x0;let _0x175383=0x0;function _0x364021(){if(_0x14be34===undefined){console[a22_0x1e54('0x2b')](_0x1b928b+'\x20Progress:\x20unknown\x09'+_0x175383+'/'+'?');}const _0x534fdb=_0x175383/_0x14be34*0x64;console[a22_0x1e54('0x2b')](_0x1b928b+a22_0x1e54('0x5a')+_0x534fdb+'%\x09'+_0x175383+'/'+_0x14be34);}console[a22_0x1e54('0x2b')](_0x1b928b+'\x20'+_0x22acfc[a22_0x1e54('0x5b')]);switch(_0x22acfc['statusCode']){case 0xc8:_0x14be34=_0x22acfc[a22_0x1e54('0x5c')]['content-length']||_0x47c77c;fs[a22_0x1e54('0x5d')](_0x56a3f3,function(_0x43f1be,_0x516657){if(!_0x43f1be){console['log'](a22_0x1e54('0x5e')+_0x56a3f3);if(_0x516657[a22_0x1e54('0x5f')]==_0x14be34){console[a22_0x1e54('0x2b')](a22_0x1e54('0x60')+_0x14be34+')');console[a22_0x1e54('0x2b')]('Redownloading');}else{console[a22_0x1e54('0x2b')](a22_0x1e54('0x61')+_0x516657['size']+a22_0x1e54('0x62')+_0x14be34+')');}}_0x452ed1=fs[a22_0x1e54('0x63')](_0x56a3f3);_0x22acfc[a22_0x1e54('0x64')](_0x452ed1);_0x22acfc['on']('data',function(_0xdc9dce){_0x175383+=_0xdc9dce[a22_0x1e54('0x34')];_0x364021();});_0x30cf04['on'](a22_0x1e54('0x3d'),function(_0x43f1be){console[a22_0x1e54('0x2b')](a22_0x1e54('0x65'));console[a22_0x1e54('0x2b')](_0x43f1be);});_0x452ed1['on']('finish',function(){console[a22_0x1e54('0x2b')](a22_0x1e54('0x66')+_0x40273d+a22_0x1e54('0x55')+_0x1b928b);_0x190a0c(null,_0x1b928b,_0x8f2bc7,_0x1b928b);}[a22_0x1e54('0x4b')](this));});break;case 0x12e:const _0x50337c=_0x22acfc[a22_0x1e54('0x5c')][a22_0x1e54('0x67')];console['log'](a22_0x1e54('0x68')+_0x40273d+'\x20to\x20'+_0x50337c);if(_0x31fdb9<0x5){this[a22_0x1e54('0x53')](_0x50337c,_0x1b928b,_0x190a0c,_0x31fdb9++);}else{console['error'](a22_0x1e54('0x69')+_0x40273d+'.');_0x190a0c(a22_0x1e54('0x6a'),null,null,null);}return;case 0x194:console['log'](a22_0x1e54('0x6b')+_0x40273d);default:console[a22_0x1e54('0x2b')](a22_0x1e54('0x6c')+_0x40273d+a22_0x1e54('0x6d')+_0x22acfc['statusCode']);_0x30cf04[a22_0x1e54('0x6e')]();_0x190a0c(_0x22acfc[a22_0x1e54('0x5b')],null,null,null);return;}})['on']('error',function(_0x36cf21){console[a22_0x1e54('0x2b')](a22_0x1e54('0x6f')+_0x40273d+'\x20'+_0x36cf21[a22_0x1e54('0x70')]);_0x190a0c(_0x36cf21,null,null,null);});}['downloadHTTPFileCallback'](_0x56be3c,_0xc408b0,_0x33c589,_0x16a7b2){console[a22_0x1e54('0x2b')](a22_0x1e54('0x71'));console[a22_0x1e54('0x2b')](_0x56be3c);console[a22_0x1e54('0x2b')](_0xc408b0);console[a22_0x1e54('0x2b')](_0x33c589);console['log'](_0x16a7b2);if(_0x33c589==a22_0x1e54('0x72')){const _0x4ddc59=this[a22_0x1e54('0x31')][this['currentFile']][a22_0x1e54('0x4e')]!=null?this['downloadFiles'][this['currentFile']][a22_0x1e54('0x4e')]:0x1e;this[a22_0x1e54('0x73')](_0x16a7b2,_0x4ddc59);}else if(_0x33c589==a22_0x1e54('0x4f')){if(_0x56be3c==null&&_0xc408b0!=''){this[a22_0x1e54('0x14')]++;}this['download']();}console[a22_0x1e54('0x2b')](this[a22_0x1e54('0x14')]);}['downloadRequestFile'](_0x5b2a58,_0x32cb88,_0x35c478){progress(request(_0x5b2a58),{})['on'](a22_0x1e54('0x74'),function(_0x5c1b18){console[a22_0x1e54('0x2b')](_0x5c1b18);})['on'](a22_0x1e54('0x3d'),function(_0x3e32fa){console[a22_0x1e54('0x2b')](a22_0x1e54('0x75'));this[a22_0x1e54('0x35')]();})['on'](a22_0x1e54('0x76'),function(){console[a22_0x1e54('0x2b')]('Downloaded:\x20'+_0x32cb88);console[a22_0x1e54('0x2b')](a22_0x1e54('0x4d')+_0x35c478);if(_0x35c478=='image'){const _0x620942=this['downloadFiles'][this[a22_0x1e54('0x14')]][a22_0x1e54('0x4e')]!=null?this['downloadFiles'][this[a22_0x1e54('0x14')]][a22_0x1e54('0x4e')]:0x1e;this[a22_0x1e54('0x73')](_0x32cb88,_0x620942);}else if(_0x35c478==a22_0x1e54('0x4f')){this[a22_0x1e54('0x14')]++;this['download']();}}[a22_0x1e54('0x4b')](this))[a22_0x1e54('0x64')](fs[a22_0x1e54('0x63')](this[a22_0x1e54('0x10')]+_0x32cb88));}[a22_0x1e54('0x73')](_0x4d9a47,_0x1d4375=0x1e){const _0x6b3852=this['tempFolder']+_0x4d9a47;console[a22_0x1e54('0x2b')](_0x6b3852);console[a22_0x1e54('0x2b')](_0x4d9a47);const _0x55c987=_0x4d9a47['split']('.')[a22_0x1e54('0x77')](0x0,-0x1)[a22_0x1e54('0x78')]('.');const _0x3f5c9d=a22_0x1e54('0x79');const _0x1c9823=['-y','-r',a22_0x1e54('0x7a'),a22_0x1e54('0x7b'),'1','-pattern_type',a22_0x1e54('0x7c'),'-i',_0x6b3852,'-t',String(_0x1d4375),'-c:v','libx264',a22_0x1e54('0x7d'),'yuv420p','-r','25',a22_0x1e54('0x7e'),a22_0x1e54('0x7f'),this[a22_0x1e54('0x10')]+_0x55c987+a22_0x1e54('0x80')];const _0x1b5acf=spawn(_0x3f5c9d,_0x1c9823);_0x1b5acf['stdout']['on']('data',function(_0x1c53ba){console[a22_0x1e54('0x2b')](a22_0x1e54('0x81')+_0x6b3852);});_0x1b5acf[a22_0x1e54('0x82')]['on'](a22_0x1e54('0x83'),function(_0xdd54d2){console[a22_0x1e54('0x2b')](a22_0x1e54('0x84')+_0xdd54d2);}[a22_0x1e54('0x4b')](this));_0x1b5acf['on']('close',function(){console[a22_0x1e54('0x2b')](a22_0x1e54('0x85'));this[a22_0x1e54('0x14')]++;this[a22_0x1e54('0x35')]();}[a22_0x1e54('0x4b')](this));}[a22_0x1e54('0x46')](_0x34aa8b){const _0x486a33=youtubedl(a22_0x1e54('0x86')+_0x34aa8b,[a22_0x1e54('0x87')],{'cwd':__dirname});_0x486a33['on']('info',function(_0x4807a){console[a22_0x1e54('0x2b')](a22_0x1e54('0x88'));console[a22_0x1e54('0x2b')]('filename:\x20'+_0x4807a['_filename']);console[a22_0x1e54('0x2b')](a22_0x1e54('0x89')+_0x4807a[a22_0x1e54('0x5f')]);});_0x486a33['on']('complete',function complete(_0x2867ff){'use strict';console[a22_0x1e54('0x2b')](a22_0x1e54('0x8a')+_0x2867ff[a22_0x1e54('0x8b')]+a22_0x1e54('0x8c'));});_0x486a33['on']('end',function(){console[a22_0x1e54('0x2b')](a22_0x1e54('0x8d'));this[a22_0x1e54('0x14')]++;this[a22_0x1e54('0x35')]();}[a22_0x1e54('0x4b')](this));_0x486a33[a22_0x1e54('0x64')](fs[a22_0x1e54('0x63')](this[a22_0x1e54('0x10')]+'/'+_0x34aa8b+a22_0x1e54('0x80')));}[a22_0x1e54('0x40')](){fs[a22_0x1e54('0x25')](this[a22_0x1e54('0x39')],JSON[a22_0x1e54('0x26')](this[a22_0x1e54('0x15')]));let _0x3f88e8='#EXTCPlayListM3U::M3U'+'\x0d\x0a'+a22_0x1e54('0x8e')+'\x0d\x0a';for(const _0x507488 in this['downloadFiles']){const _0x564d2a=this[a22_0x1e54('0x31')][_0x507488]['path'];const _0x29a2a9=this[a22_0x1e54('0x31')][_0x507488]['media_type'];const _0x25670c=_0x564d2a['substring'](_0x564d2a[a22_0x1e54('0x44')]('/')+0x1);let _0x2406a8=_0x25670c[a22_0x1e54('0x8f')]('.')[a22_0x1e54('0x77')](0x0,-0x1)[a22_0x1e54('0x78')]('.');if(_0x29a2a9==a22_0x1e54('0x90')){_0x2406a8=_0x564d2a;}_0x3f88e8+=a22_0x1e54('0x91')+_0x2406a8+'.mp4'+'\x0d\x0a';}fsExtra[a22_0x1e54('0x30')](this['filesFolder']);fsExtra[a22_0x1e54('0x92')](this[a22_0x1e54('0x10')],this[a22_0x1e54('0x93')]);fs[a22_0x1e54('0x25')](this['m3uFile'],_0x3f88e8);fsExtra[a22_0x1e54('0x30')](this[a22_0x1e54('0x10')]);console[a22_0x1e54('0x2b')](a22_0x1e54('0x94'));const _0x2c26f7=spawn(a22_0x1e54('0x95'),['-r',a22_0x1e54('0x96')]);}}exports[a22_0x1e54('0x97')]=SyncPlaylistsService;