var a24_0x4313=['../infrastructure/HttpClientService','jpeg-extract','fs-extra','rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov','bigbuckbunny','http://192.168.0.102:60/index1.jpg','httpClientService','HttpClientService','init','log','init\x20VideoService','loadCurrentDriver','http://restapi.passcontrol.co/route_schedules/','then','data','user','downloadDriverPicture','bind','catch','get','http://restapi.passcontrol.co/users/id/','saveImageFile','extractImage','url','writeFileSync','/Volumes/[C]\x20Windows\x2010\x20(1)/Temp/frs/currentDriver/img.jpg','image_data','replace','match','png','jpg','/Volumes/[C]\x20Windows\x2010\x20(1)/Temp/frs/','ensureDirSync','driver.','writeFile','VideoService','__esModule'];(function(_0x1a52c7,_0x16cac1){var _0x421f20=function(_0x2eb709){while(--_0x2eb709){_0x1a52c7['push'](_0x1a52c7['shift']());}};_0x421f20(++_0x16cac1);}(a24_0x4313,0x127));var a24_0x5873=function(_0x1bd2cc,_0x498128){_0x1bd2cc=_0x1bd2cc-0x0;var _0x40f2ba=a24_0x4313[_0x1bd2cc];return _0x40f2ba;};'use strict';Object['defineProperty'](exports,a24_0x5873('0x0'),{'value':!![]});const HttpClientService_1=require(a24_0x5873('0x1'));const fs=require('fs');const extract=require(a24_0x5873('0x2'));const fsExtra=require(a24_0x5873('0x3'));const url=a24_0x5873('0x4');const filename=a24_0x5873('0x5');const username='';const password='';class VideoService{constructor(){this['url']=a24_0x5873('0x6');this[a24_0x5873('0x7')]=new HttpClientService_1[(a24_0x5873('0x8'))]();}[a24_0x5873('0x9')](){console[a24_0x5873('0xa')](a24_0x5873('0xb'));}[a24_0x5873('0xc')](){console[a24_0x5873('0xa')]('loadCurrentDriver');this[a24_0x5873('0x7')]['get'](a24_0x5873('0xd'),![])[a24_0x5873('0xe')](function(_0x2bc9ed){console['log'](_0x2bc9ed[a24_0x5873('0xf')][0x0][a24_0x5873('0x10')]['id']);this[a24_0x5873('0x11')](_0x2bc9ed[a24_0x5873('0xf')][0x0]['user']['id']);}[a24_0x5873('0x12')](this))[a24_0x5873('0x13')](function(_0x9b7dd5){});}[a24_0x5873('0x11')](_0x95b28d){console[a24_0x5873('0xa')]('downloadDriverPicture:'+_0x95b28d);this[a24_0x5873('0x7')][a24_0x5873('0x14')](a24_0x5873('0x15')+_0x95b28d,![])[a24_0x5873('0xe')](function(_0x8bf210){this[a24_0x5873('0x16')](_0x8bf210[a24_0x5873('0xf')]);}[a24_0x5873('0x12')](this))[a24_0x5873('0x13')](function(_0x29d4fa){});}['extractImage'](){console['log'](a24_0x5873('0x17'));extract(this[a24_0x5873('0x18')])[a24_0x5873('0xe')](_0x1767af=>{fs[a24_0x5873('0x19')](a24_0x5873('0x1a'),_0x1767af);})['catch'](_0x2b20ed=>{console['error'](_0x2b20ed);});}[a24_0x5873('0x16')](_0x1410c1){console[a24_0x5873('0xa')]('saveImageFile');let _0x488d6a='';const _0x25d2b8=_0x1410c1[a24_0x5873('0x1b')][a24_0x5873('0x1c')](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x1410c1[a24_0x5873('0x1b')][a24_0x5873('0x1d')](/^data:image\/png;base64,/,'')){_0x488d6a=a24_0x5873('0x1e');}else if(_0x1410c1[a24_0x5873('0x1b')][a24_0x5873('0x1d')](/^data:image\/(jpg|jpeg);base64,/,'')){_0x488d6a=a24_0x5873('0x1f');}console[a24_0x5873('0xa')](_0x25d2b8);const _0x5e3331=a24_0x5873('0x20');fsExtra[a24_0x5873('0x21')](_0x5e3331);const _0x2b94b7=_0x5e3331+a24_0x5873('0x22')+_0x488d6a;fsExtra[a24_0x5873('0x23')](_0x2b94b7,_0x25d2b8,'base64',function(_0x2e3549){console[a24_0x5873('0xa')](_0x2e3549);});}}exports[a24_0x5873('0x24')]=VideoService;