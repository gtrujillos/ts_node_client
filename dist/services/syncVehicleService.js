var a26_0x7757=['extract','SyncVehicleService','__esModule','defineProperty','../infrastructure/HttpClientService','../infrastructure/crypt-utils','../modules/jpeg-extract','base64-img','is-corrupted-jpeg','jimp','child_process','fork','env','apiURL','vehicleId','VEHICLE_ID','result_driver_behaviour.txt','httpClientService','HttpClientService','gpsService','init2','log','folder','image1.jpg','image2.jpg','init','init\x20SyncVehicleService','loadAuthorizedDriver','bind','setCurrentDriverImage','syncEvents','driverValidationEvents','eventResults','file','readFileSync','toString','result','events/report_event/','default','encrypt','eventTypeId','current_driver.jpg','latitude','replace','longitude','speed','existsSync','image_data','post','success','catch','err','route_schedules/get_by_vehicle/','get','then','length','data','saveImageFile','match','jpg','authorized_driver.','base64','writeFile','user_id','getTime','VIDEO_SERVICE_FILES_FOLDER','status.json','{\x22status\x22:\x20\x22','Video\x20service\x20restarted','FILES_FOLDER','ensureDirSync','current_driver_temp.jpg','writeFileSync','copy','.jpg','error'];(function(_0x37ba16,_0x8c9284){var _0x116ab2=function(_0x566c8c){while(--_0x566c8c){_0x37ba16['push'](_0x37ba16['shift']());}};_0x116ab2(++_0x8c9284);}(a26_0x7757,0x1ca));var a26_0x596c=function(_0x3a3167,_0x58da00){_0x3a3167=_0x3a3167-0x0;var _0x47cef9=a26_0x7757[_0x3a3167];return _0x47cef9;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3f7149){return _0x3f7149&&_0x3f7149[a26_0x596c('0x0')]?_0x3f7149:{'default':_0x3f7149};};Object[a26_0x596c('0x1')](exports,a26_0x596c('0x0'),{'value':!![]});const HttpClientService_1=require(a26_0x596c('0x2'));const crypt_utils_1=__importDefault(require(a26_0x596c('0x3')));const extract=require(a26_0x596c('0x4'));const fsExtra=require('fs-extra');const base64Img=require(a26_0x596c('0x5'));const isCorrupted=require(a26_0x596c('0x6'));let corruptedCounter=0x0;let currentDriverImageDate=new Date();const Jimp=require(a26_0x596c('0x7'));const fork=require(a26_0x596c('0x8'))[a26_0x596c('0x9')];class SyncVehicleService{constructor(_0x156ee5){this['url']='http://localhost:60/index1.jpg';this['folder']=process[a26_0x596c('0xa')]['FILES_FOLDER'];this[a26_0x596c('0xb')]=process['env']['API_SERVICE_URL'];this[a26_0x596c('0xc')]=process['env'][a26_0x596c('0xd')];this['eventResults']=[{'file':'result_driver.txt','result':0x0},{'file':'result_driver_bus.txt','result':0x0},{'file':a26_0x596c('0xe'),'result':0x0}];this[a26_0x596c('0xf')]=new HttpClientService_1[(a26_0x596c('0x10'))]();this[a26_0x596c('0x11')]=_0x156ee5;}[a26_0x596c('0x12')](){console[a26_0x596c('0x13')]('init\x20SyncVehicleService\x20test22');const _0x3d14d9=this[a26_0x596c('0x14')]+a26_0x596c('0x15');const _0x5c3c11=this[a26_0x596c('0x14')]+a26_0x596c('0x16');}[a26_0x596c('0x17')](){console['log'](a26_0x596c('0x18'));this[a26_0x596c('0x19')]();setInterval(function(){this[a26_0x596c('0x19')]();}[a26_0x596c('0x1a')](this),0x2710);setInterval(function(){this[a26_0x596c('0x1b')]();}[a26_0x596c('0x1a')](this),0x7d0);setInterval(function(){this['syncEvents']();}[a26_0x596c('0x1a')](this),0x3e8);}[a26_0x596c('0x1c')](){for(let _0x6ea237=0x0;_0x6ea237<this['eventResults']['length'];_0x6ea237++){this[a26_0x596c('0x1d')](_0x6ea237);}}[a26_0x596c('0x1d')](_0x48ca5b){const _0x44fab3=this[a26_0x596c('0x1e')][_0x48ca5b][a26_0x596c('0x1f')];const _0x48c9aa=''+this[a26_0x596c('0x14')]+_0x44fab3;if(fsExtra['existsSync'](_0x48c9aa)){const _0x34f013=fsExtra[a26_0x596c('0x20')](_0x48c9aa)[a26_0x596c('0x21')]();if(this[a26_0x596c('0x1e')][_0x48ca5b][a26_0x596c('0x22')]!=_0x34f013){this[a26_0x596c('0x1e')][_0x48ca5b]['result']=_0x34f013;console[a26_0x596c('0x13')]('syncEvents',this['eventResults'][_0x48ca5b][a26_0x596c('0x22')],_0x34f013);const _0x4f85c=this[a26_0x596c('0xb')]+a26_0x596c('0x23');const _0x33d805=crypt_utils_1[a26_0x596c('0x24')][a26_0x596c('0x25')](_0x34f013);console[a26_0x596c('0x13')](a26_0x596c('0x26'),_0x33d805);const _0x539c06=this[a26_0x596c('0x11')]?this[a26_0x596c('0x11')]['locationParts']:{};const _0x2bd844=this[a26_0x596c('0x14')]+a26_0x596c('0x27');let _0x182d0f=null;const _0x126637={'event_type_id':_0x33d805,'vehicle_id':this['vehicleId'],'latitude':_0x539c06[a26_0x596c('0x28')]?_0x539c06[a26_0x596c('0x28')][a26_0x596c('0x29')](',','.'):0x0,'longitude':_0x539c06[a26_0x596c('0x2a')]?_0x539c06[a26_0x596c('0x2a')]['replace'](',','.'):0x0,'speed':_0x539c06[a26_0x596c('0x2b')]?_0x539c06[a26_0x596c('0x2b')]:0x0,'reported_at':new Date(),'image_data':_0x182d0f};if(fsExtra[a26_0x596c('0x2c')](_0x2bd844)){_0x182d0f=base64Img['base64Sync'](_0x2bd844);_0x182d0f=JSON['parse'](JSON['stringify'](_0x182d0f));_0x126637[a26_0x596c('0x2d')]=_0x182d0f;}this[a26_0x596c('0xf')][a26_0x596c('0x2e')](_0x4f85c,_0x126637,![])['then'](function(_0x35c8bf){if(_0x35c8bf[a26_0x596c('0x2f')]){}}[a26_0x596c('0x1a')](this))[a26_0x596c('0x30')](function(_0x43f18a){console[a26_0x596c('0x13')](a26_0x596c('0x31'));});}}else{}}[a26_0x596c('0x19')](){const _0x289240=this[a26_0x596c('0xb')]+a26_0x596c('0x32')+this[a26_0x596c('0xc')];this[a26_0x596c('0xf')][a26_0x596c('0x33')](_0x289240,![])[a26_0x596c('0x34')](function(_0x247a16){if(_0x247a16[a26_0x596c('0x2f')]){if(_0x247a16['data']&&_0x247a16['data'][a26_0x596c('0x35')]>0x0&&_0x247a16[a26_0x596c('0x36')][0x0][a26_0x596c('0x2d')]){this[a26_0x596c('0x37')](_0x247a16[a26_0x596c('0x36')][0x0]);}}}[a26_0x596c('0x1a')](this))[a26_0x596c('0x30')](function(_0x1bb19b){console[a26_0x596c('0x13')](_0x1bb19b);});}[a26_0x596c('0x37')](_0x5450bc){let _0x93f193='';const _0x278395=_0x5450bc[a26_0x596c('0x2d')]['replace'](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x5450bc[a26_0x596c('0x2d')][a26_0x596c('0x38')](/^data:image\/png;base64,/,'')){_0x93f193='png';}else if(_0x5450bc[a26_0x596c('0x2d')][a26_0x596c('0x38')](/^data:image\/(jpg|jpeg);base64,/,'')){_0x93f193=a26_0x596c('0x39');}fsExtra['ensureDirSync'](this[a26_0x596c('0x14')]);const _0x152b02=this[a26_0x596c('0x14')]+a26_0x596c('0x3a')+_0x93f193;const _0x3921f6=this['folder']+'authorized_driver.txt';fsExtra['writeFile'](_0x152b02,_0x278395,a26_0x596c('0x3b'),function(_0xa38eae){});fsExtra[a26_0x596c('0x3c')](_0x3921f6,_0x5450bc[a26_0x596c('0x3d')],function(_0x333674){});}['setCurrentDriverImage'](){const _0x55a750=new Date();const _0x2b4959=_0x55a750['getTime']()-currentDriverImageDate[a26_0x596c('0x3e')]();if(_0x2b4959>0x7530){currentDriverImageDate=new Date();fsExtra[a26_0x596c('0x3c')](process[a26_0x596c('0xa')][a26_0x596c('0x3f')]+a26_0x596c('0x40'),a26_0x596c('0x41')+currentDriverImageDate+'\x22}',function(_0x88eed1){console[a26_0x596c('0x13')](a26_0x596c('0x42'));if(_0x88eed1){return console[a26_0x596c('0x13')](_0x88eed1);}});}else{extract(this['url'],(_0x4b22ac,_0x1359fc)=>{try{if(!_0x4b22ac){const _0x1bf5b2=process[a26_0x596c('0xa')][a26_0x596c('0x43')];fsExtra[a26_0x596c('0x44')](_0x1bf5b2);const _0x22fa10=_0x1bf5b2+a26_0x596c('0x45');const _0xc8c919=_0x1bf5b2+a26_0x596c('0x27');fsExtra[a26_0x596c('0x46')](_0x22fa10,_0x1359fc);if(!isCorrupted(_0x22fa10)){corruptedCounter=0x0;currentDriverImageDate=new Date();console[a26_0x596c('0x13')](a26_0x596c('0x1b'),!![],new Date());fsExtra[a26_0x596c('0x47')](_0x22fa10,_0xc8c919);}else{corruptedCounter++;console[a26_0x596c('0x13')]('setCurrentDriverImage\x20corruptedCounter\x20********************:\x20',corruptedCounter);const _0x26ce42=new Date();const _0x3c6c1b=_0x26ce42[a26_0x596c('0x3e')]();fsExtra[a26_0x596c('0x47')](_0x22fa10,_0x1bf5b2+_0x3c6c1b[a26_0x596c('0x21')]()+a26_0x596c('0x48'));}}else{console[a26_0x596c('0x49')](a26_0x596c('0x4a'),_0x4b22ac);}}catch(_0x102bff){}finally{}});}}}exports[a26_0x596c('0x4b')]=SyncVehicleService;