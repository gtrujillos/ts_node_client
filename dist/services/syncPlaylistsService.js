var a21_0x29c1=['/home/osmc/luloclient/media/files/','emptyDirSync','copySync','Finished','shutdown','defineProperty','__esModule','request','request-progress','child_process','spawn','is-image','mediaFolder','temp/','filesFolder','files/','playListFile','m3uFile','currentFile','newPlayList','readFileSync','config.json','playerId','baseURL','env','WEB_SERVICE_URL','playListServiceURL','deploy/api/player_playlist.php?player_id={0}','loadMediaList','checkFolders','ensureDir','tempFolder','log','hasPlayListChanged','downloadFiles','push','Total:\x20','download','No\x20playlist\x20changes','bind','reloadMediaList','unlinkSync','stringify','existsSync','toString','error','this.currentFile:\x20','length','finishProcess','substring','lastIndexOf','Downloading:\x20','progress','Error\x20downloading\x20file','Downloaded:\x20','duration','createImageVideo','pipe','createWriteStream','split','join','ffmpeg','-loop','-pattern_type','-c:v','-pix_fmt','-vf','scale=1920:1080','.mp4','stdout','data','stderr','stderr:\x20','close','finished\x20mp4\x20convert','writeFileSync','#EXTINF:0,luloPlayList','slice'];(function(_0x1afdba,_0x173ab7){var _0x1f760b=function(_0x4c131a){while(--_0x4c131a){_0x1afdba['push'](_0x1afdba['shift']());}};_0x1f760b(++_0x173ab7);}(a21_0x29c1,0xa1));var a21_0x22a6=function(_0x2ef120,_0x1c1c4c){_0x2ef120=_0x2ef120-0x0;var _0x4c5b9e=a21_0x29c1[_0x2ef120];return _0x4c5b9e;};'use strict';// import { StationContext } from '../infrastructure/stationSettings';
             // import { cat } from 'shelljs';
             // import { NetworkInfo } from 'simple-ifconfig';
Object[a21_0x22a6('0x0')](exports,a21_0x22a6('0x1'),{'value':!![]});const fs=require('fs');const fsExtra=require('fs-extra');const request=require(a21_0x22a6('0x2'));const progress=require(a21_0x22a6('0x3'));const spawn=require(a21_0x22a6('0x4'))[a21_0x22a6('0x5')];const isImage=require(a21_0x22a6('0x6'));const format=require('string-template');const os=require('os');class SyncPlaylistsService{constructor(){this[a21_0x22a6('0x7')]='media/';this['tempFolder']=this[a21_0x22a6('0x7')]+a21_0x22a6('0x8');this[a21_0x22a6('0x9')]=this[a21_0x22a6('0x7')]+a21_0x22a6('0xa');this[a21_0x22a6('0xb')]=this[a21_0x22a6('0x7')]+'playlist.txt';this[a21_0x22a6('0xc')]=this[a21_0x22a6('0x9')]+'lulo_playlist.m3u';this[a21_0x22a6('0xd')]=0x0;this['downloadFiles']=[];this[a21_0x22a6('0xe')]={};}['init'](){const _0x370ee8=JSON['parse'](fs[a21_0x22a6('0xf')](a21_0x22a6('0x10')));this[a21_0x22a6('0x11')]=_0x370ee8['playerId'];this[a21_0x22a6('0x12')]=process[a21_0x22a6('0x13')][a21_0x22a6('0x14')];this[a21_0x22a6('0x15')]=this[a21_0x22a6('0x12')]+a21_0x22a6('0x16');this['checkFolders']();this[a21_0x22a6('0x17')]();}[a21_0x22a6('0x18')](){fsExtra[a21_0x22a6('0x19')](this[a21_0x22a6('0x7')],_0x5926a9=>{});fsExtra[a21_0x22a6('0x19')](this[a21_0x22a6('0x1a')],_0x2837dd=>{});fsExtra[a21_0x22a6('0x19')](this[a21_0x22a6('0x9')],_0x277c11=>{});}['loadMediaList'](){const _0x40da07=format(this['playListServiceURL'],this[a21_0x22a6('0x11')]);console[a21_0x22a6('0x1b')](_0x40da07);request({'url':_0x40da07,'json':!![]},function(_0x39d639,_0x2acad2,_0x57c2ce){this[a21_0x22a6('0xe')]=_0x57c2ce;if(this[a21_0x22a6('0x1c')]()){this[a21_0x22a6('0x1d')]=[];this[a21_0x22a6('0xd')]=0x0;for(const _0x59c0c5 in _0x57c2ce){this['downloadFiles'][a21_0x22a6('0x1e')](_0x57c2ce[_0x59c0c5]);}console['log'](a21_0x22a6('0x1f')+this['downloadFiles']['length']);if(this[a21_0x22a6('0x1d')]['length']>0x0){this[a21_0x22a6('0x20')]();}}else{console['log'](a21_0x22a6('0x21'));}}[a21_0x22a6('0x22')](this));}[a21_0x22a6('0x23')](){fs[a21_0x22a6('0x24')](this[a21_0x22a6('0xb')]);this[a21_0x22a6('0x17')]();}['hasPlayListChanged'](){const _0x2e5ef2=JSON[a21_0x22a6('0x25')](this[a21_0x22a6('0xe')]);try{if(!fs[a21_0x22a6('0x26')](this[a21_0x22a6('0xb')])){return!![];}else{const _0x53b2b6=fs[a21_0x22a6('0xf')](this[a21_0x22a6('0xb')])[a21_0x22a6('0x27')]();if(_0x53b2b6!=_0x2e5ef2){return!![];}}}catch(_0x271c02){console[a21_0x22a6('0x28')](_0x271c02);}return![];}[a21_0x22a6('0x20')](){console[a21_0x22a6('0x1b')](a21_0x22a6('0x29')+this[a21_0x22a6('0xd')]);if(this[a21_0x22a6('0xd')]>=this[a21_0x22a6('0x1d')][a21_0x22a6('0x2a')]){this[a21_0x22a6('0x2b')]();return;}const _0x22ef38=String(this[a21_0x22a6('0x1d')][this[a21_0x22a6('0xd')]]['path']);const _0xea08f1=_0x22ef38[a21_0x22a6('0x2c')](_0x22ef38[a21_0x22a6('0x2d')]('/')+0x1);console[a21_0x22a6('0x1b')](a21_0x22a6('0x2e')+_0xea08f1);progress(request(this[a21_0x22a6('0x12')]+_0x22ef38),{})['on'](a21_0x22a6('0x2f'),function(_0xbdab72){console['log'](a21_0x22a6('0x2f'),_0xbdab72['percent']);})['on'](a21_0x22a6('0x28'),function(_0x2cf94f){console[a21_0x22a6('0x1b')](a21_0x22a6('0x30'));this[a21_0x22a6('0x20')]();})['on']('end',function(){console[a21_0x22a6('0x1b')](a21_0x22a6('0x31')+_0xea08f1);if(isImage(_0xea08f1)){const _0x338a79=this['downloadFiles'][this[a21_0x22a6('0xd')]][a21_0x22a6('0x32')]!=null?this[a21_0x22a6('0x1d')][this[a21_0x22a6('0xd')]]['duration']:0x1e;this[a21_0x22a6('0x33')](_0xea08f1,_0x338a79);}else{this[a21_0x22a6('0xd')]++;this[a21_0x22a6('0x20')]();}}[a21_0x22a6('0x22')](this))[a21_0x22a6('0x34')](fs[a21_0x22a6('0x35')](this[a21_0x22a6('0x1a')]+_0xea08f1));}[a21_0x22a6('0x33')](_0x36f9ca,_0x1dc045=0x1e){const _0x46942d=this['tempFolder']+_0x36f9ca;const _0xb0878d=_0x36f9ca[a21_0x22a6('0x36')]('.')['slice'](0x0,-0x1)[a21_0x22a6('0x37')]('.');const _0x1cecee=a21_0x22a6('0x38');const _0x1eb1ed=['-y','-r','1/2',a21_0x22a6('0x39'),'1',a21_0x22a6('0x3a'),'glob','-i',_0x46942d,'-t',String(_0x1dc045),a21_0x22a6('0x3b'),'libx264',a21_0x22a6('0x3c'),'yuv420p','-r','25',a21_0x22a6('0x3d'),a21_0x22a6('0x3e'),this[a21_0x22a6('0x1a')]+_0xb0878d+a21_0x22a6('0x3f')];const _0x44b3b5=spawn(_0x1cecee,_0x1eb1ed);_0x44b3b5[a21_0x22a6('0x40')]['on'](a21_0x22a6('0x41'),function(_0x423470){console['log']('Converting\x20'+_0x46942d);});_0x44b3b5[a21_0x22a6('0x42')]['on'](a21_0x22a6('0x41'),function(_0x46c622){console['log'](a21_0x22a6('0x43')+_0x46c622);}[a21_0x22a6('0x22')](this));_0x44b3b5['on'](a21_0x22a6('0x44'),function(){console['log'](a21_0x22a6('0x45'));this[a21_0x22a6('0xd')]++;this[a21_0x22a6('0x20')]();}['bind'](this));}[a21_0x22a6('0x2b')](){fs[a21_0x22a6('0x46')](this[a21_0x22a6('0xb')],JSON['stringify'](this[a21_0x22a6('0xe')]));let _0x3cf518='#EXTCPlayListM3U::M3U'+'\x0d\x0a'+a21_0x22a6('0x47')+'\x0d\x0a';for(const _0x119866 in this[a21_0x22a6('0x1d')]){const _0x3b4141=this['downloadFiles'][_0x119866]['path'];const _0x51fe40=_0x3b4141[a21_0x22a6('0x2c')](_0x3b4141[a21_0x22a6('0x2d')]('/')+0x1);const _0x52ace9=_0x51fe40[a21_0x22a6('0x36')]('.')[a21_0x22a6('0x48')](0x0,-0x1)['join']('.');_0x3cf518+=a21_0x22a6('0x49')+_0x52ace9+'.mp4'+'\x0d\x0a';}fsExtra[a21_0x22a6('0x4a')](this[a21_0x22a6('0x9')]);fsExtra[a21_0x22a6('0x4b')](this[a21_0x22a6('0x1a')],this[a21_0x22a6('0x9')]);fs[a21_0x22a6('0x46')](this[a21_0x22a6('0xc')],_0x3cf518);fsExtra[a21_0x22a6('0x4a')](this[a21_0x22a6('0x1a')]);console[a21_0x22a6('0x1b')](a21_0x22a6('0x4c'));const _0x4ad982=spawn(a21_0x22a6('0x4d'),['-r','now']);}}exports['SyncPlaylistsService']=SyncPlaylistsService;