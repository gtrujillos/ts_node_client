var a27_0x2f51=['../infrastructure/HttpClientService','../infrastructure/crypt-utils','fs-extra','base64-img','fork','url','http://localhost:60/index1.jpg','currentDriverResult','folder','env','FILES_FOLDER','apiURL','vehicleId','httpClientService','HttpClientService','init','log','init\x20SyncVehicleService','loadAuthorizedDriver','bind','syncEvents','result_driver.txt','existsSync','readFileSync','toString','driverResult','default','eventTypeId','gpsService','locationParts','current_driver.jpg','base64Sync','parse','stringify','latitude','longitude','speed','then','success','route_schedules/get_by_vehicle/','data','length','image_data','saveImageFile','match','jpg','authorized_driver.','authorized_driver.txt','writeFile','base64','user_id','setCurrentDriverImage','getTime','VIDEO_SERVICE_FILES_FOLDER','{\x22status\x22:\x20\x22','The\x20file\x20was\x20saved!','extracted','ensureDirSync','current_driver_temp.jpg','writeFileSync','copy','extract','SyncVehicleService','__importDefault','__esModule','defineProperty'];(function(_0x2d158c,_0x5267c3){var _0x228c42=function(_0x247644){while(--_0x247644){_0x2d158c['push'](_0x2d158c['shift']());}};_0x228c42(++_0x5267c3);}(a27_0x2f51,0x105));var a27_0x58d4=function(_0x4c397b,_0x1b292c){_0x4c397b=_0x4c397b-0x0;var _0xfb390a=a27_0x2f51[_0x4c397b];return _0xfb390a;};'use strict';var __importDefault=this&&this[a27_0x58d4('0x0')]||function(_0x1a77b1){return _0x1a77b1&&_0x1a77b1[a27_0x58d4('0x1')]?_0x1a77b1:{'default':_0x1a77b1};};Object[a27_0x58d4('0x2')](exports,a27_0x58d4('0x1'),{'value':!![]});const HttpClientService_1=require(a27_0x58d4('0x3'));const crypt_utils_1=__importDefault(require(a27_0x58d4('0x4')));const extract=require('jpeg-extract');const fsExtra=require(a27_0x58d4('0x5'));const base64Img=require(a27_0x58d4('0x6'));const isCorrupted=require('is-corrupted-jpeg');let corruptedCounter=0x0;let currentDriverImageDate=new Date();const fork=require('child_process')[a27_0x58d4('0x7')];class SyncVehicleService{constructor(_0x10cc56){this[a27_0x58d4('0x8')]=a27_0x58d4('0x9');this[a27_0x58d4('0xa')]=null;this[a27_0x58d4('0xb')]=process[a27_0x58d4('0xc')][a27_0x58d4('0xd')];this[a27_0x58d4('0xe')]=process[a27_0x58d4('0xc')]['API_SERVICE_URL'];this[a27_0x58d4('0xf')]=process[a27_0x58d4('0xc')]['VEHICLE_ID'];this[a27_0x58d4('0x10')]=new HttpClientService_1[(a27_0x58d4('0x11'))]();this['gpsService']=_0x10cc56;}[a27_0x58d4('0x12')](){console[a27_0x58d4('0x13')](a27_0x58d4('0x14'));this[a27_0x58d4('0x15')]();setInterval(function(){this[a27_0x58d4('0x15')]();}[a27_0x58d4('0x16')](this),0x2710);setInterval(function(){this['setCurrentDriverImage']();}['bind'](this),0x7d0);setInterval(function(){this['syncEvents']();}[a27_0x58d4('0x16')](this),0x3e8);}[a27_0x58d4('0x17')](){const _0x5917b4=this[a27_0x58d4('0xb')]+a27_0x58d4('0x18');if(fsExtra[a27_0x58d4('0x19')](_0x5917b4)){const _0x400e49=fsExtra[a27_0x58d4('0x1a')](_0x5917b4)[a27_0x58d4('0x1b')]();if(this[a27_0x58d4('0xa')]!=_0x400e49){this[a27_0x58d4('0xa')]=_0x400e49;const _0x5be608=this[a27_0x58d4('0xe')]+'events/report_event/';console['log']('Send\x20event',_0x5be608);console[a27_0x58d4('0x13')](a27_0x58d4('0x1c'),_0x400e49);const _0x2eadb6=crypt_utils_1[a27_0x58d4('0x1d')]['encrypt'](_0x400e49);console[a27_0x58d4('0x13')](a27_0x58d4('0x1e'),_0x2eadb6);const _0x6aaf1b=this[a27_0x58d4('0x1f')]?this[a27_0x58d4('0x1f')][a27_0x58d4('0x20')]:{};const _0x1cbd78=this[a27_0x58d4('0xb')]+a27_0x58d4('0x21');let _0x427c46=null;if(fsExtra[a27_0x58d4('0x19')](_0x1cbd78)){_0x427c46=base64Img[a27_0x58d4('0x22')](_0x1cbd78);_0x427c46=JSON[a27_0x58d4('0x23')](JSON[a27_0x58d4('0x24')](_0x427c46));_0x427c46=_0x427c46;}const _0x57982b={'event_type_id':_0x2eadb6,'vehicle_id':this[a27_0x58d4('0xf')],'latitude':_0x6aaf1b[a27_0x58d4('0x25')]?_0x6aaf1b['latitude']:0x0,'longitude':_0x6aaf1b[a27_0x58d4('0x26')]?_0x6aaf1b['longitude']:0x0,'speed':_0x6aaf1b[a27_0x58d4('0x27')]?_0x6aaf1b[a27_0x58d4('0x27')]:0x0,'reported_at':new Date(),'image_data':_0x427c46};this[a27_0x58d4('0x10')]['post'](_0x5be608,_0x57982b,![])[a27_0x58d4('0x28')](function(_0x4cd5c0){if(_0x4cd5c0[a27_0x58d4('0x29')]){}}['bind'](this))['catch'](function(_0x4fc377){console[a27_0x58d4('0x13')](_0x4fc377);});}}}[a27_0x58d4('0x15')](){console[a27_0x58d4('0x13')](a27_0x58d4('0x15'));const _0x4c2648=this[a27_0x58d4('0xe')]+a27_0x58d4('0x2a')+this[a27_0x58d4('0xf')];console[a27_0x58d4('0x13')](a27_0x58d4('0x15'),_0x4c2648);this[a27_0x58d4('0x10')]['get'](_0x4c2648,![])[a27_0x58d4('0x28')](function(_0x1f5537){if(_0x1f5537[a27_0x58d4('0x29')]){if(_0x1f5537[a27_0x58d4('0x2b')]&&_0x1f5537['data'][a27_0x58d4('0x2c')]>0x0&&_0x1f5537[a27_0x58d4('0x2b')][0x0][a27_0x58d4('0x2d')]){this[a27_0x58d4('0x2e')](_0x1f5537['data'][0x0]);}}}[a27_0x58d4('0x16')](this))['catch'](function(_0x58c7b0){console[a27_0x58d4('0x13')](_0x58c7b0);});}[a27_0x58d4('0x2e')](_0x5dc160){let _0x337f8d='';const _0x431ec2=_0x5dc160['image_data']['replace'](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x5dc160[a27_0x58d4('0x2d')]['match'](/^data:image\/png;base64,/,'')){_0x337f8d='png';}else if(_0x5dc160[a27_0x58d4('0x2d')][a27_0x58d4('0x2f')](/^data:image\/(jpg|jpeg);base64,/,'')){_0x337f8d=a27_0x58d4('0x30');}fsExtra['ensureDirSync'](this[a27_0x58d4('0xb')]);const _0x544b6a=this[a27_0x58d4('0xb')]+a27_0x58d4('0x31')+_0x337f8d;const _0x5733bb=this[a27_0x58d4('0xb')]+a27_0x58d4('0x32');fsExtra[a27_0x58d4('0x33')](_0x544b6a,_0x431ec2,a27_0x58d4('0x34'),function(_0x4d838c){});fsExtra[a27_0x58d4('0x33')](_0x5733bb,_0x5dc160[a27_0x58d4('0x35')],function(_0x442be3){});}[a27_0x58d4('0x36')](){console[a27_0x58d4('0x13')](a27_0x58d4('0x36'),currentDriverImageDate);const _0x4777ee=new Date();const _0x1c61b9=_0x4777ee[a27_0x58d4('0x37')]()-currentDriverImageDate[a27_0x58d4('0x37')]();console['log'](_0x1c61b9);if(_0x1c61b9>0x7530){currentDriverImageDate=new Date();fsExtra['writeFile'](process[a27_0x58d4('0xc')][a27_0x58d4('0x38')]+'status.json',a27_0x58d4('0x39')+currentDriverImageDate+'\x22}',function(_0x318293){if(_0x318293){return console[a27_0x58d4('0x13')](_0x318293);}console[a27_0x58d4('0x13')](a27_0x58d4('0x3a'));});}else{extract(this['url'],(_0x16e1d2,_0x21a964)=>{if(!_0x16e1d2){console['log'](a27_0x58d4('0x3b'));const _0x585f96=process['env'][a27_0x58d4('0xd')];fsExtra[a27_0x58d4('0x3c')](_0x585f96);const _0x4c1939=_0x585f96+a27_0x58d4('0x3d');const _0x2c9bec=_0x585f96+a27_0x58d4('0x21');fsExtra[a27_0x58d4('0x3e')](_0x4c1939,_0x21a964);if(!isCorrupted(_0x4c1939)){corruptedCounter=0x0;currentDriverImageDate=new Date();console[a27_0x58d4('0x13')]('setCurrentDriverImage',!![]);fsExtra[a27_0x58d4('0x3f')](_0x4c1939,_0x2c9bec);}else{corruptedCounter++;console[a27_0x58d4('0x13')](a27_0x58d4('0x36'),corruptedCounter);}}else{console['error'](a27_0x58d4('0x40'),_0x16e1d2);}});}}}exports[a27_0x58d4('0x41')]=SyncVehicleService;