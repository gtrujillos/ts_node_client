var a26_0x2b7a=['getTime','status.json','{\x22status\x22:\x20\x22','Video\x20service\x20restarted','ensureDirSync','current_driver_temp.jpg','writeFileSync','copy','setCurrentDriverImage\x20corruptedCounter\x20********************:\x20','error','extract','SyncVehicleService','__importDefault','__esModule','defineProperty','../infrastructure/HttpClientService','../infrastructure/crypt-utils','base64-img','is-corrupted-jpeg','jimp','child_process','fork','url','http://localhost:60/index1.jpg','folder','env','FILES_FOLDER','apiURL','API_SERVICE_URL','VEHICLE_ID','eventResults','result_driver_bus.txt','httpClientService','HttpClientService','gpsService','init2','log','image1.jpg','image2.jpg','init','init\x20SyncVehicleService','loadAuthorizedDriver','setCurrentDriverImage','bind','length','driverValidationEvents','toString','result','syncEvents','events/report_event/','default','eventTypeId','locationParts','current_driver.jpg','latitude','replace','speed','existsSync','parse','stringify','image_data','post','then','success','catch','err','vehicleId','get','data','saveImageFile','match','png','authorized_driver.txt','base64','writeFile','user_id'];(function(_0x37e3b9,_0x324a14){var _0x1251b7=function(_0xb0701){while(--_0xb0701){_0x37e3b9['push'](_0x37e3b9['shift']());}};_0x1251b7(++_0x324a14);}(a26_0x2b7a,0x13c));var a26_0x370d=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a26_0x2b7a[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a26_0x370d('0x0')]||function(_0x3c1830){return _0x3c1830&&_0x3c1830[a26_0x370d('0x1')]?_0x3c1830:{'default':_0x3c1830};};Object[a26_0x370d('0x2')](exports,'__esModule',{'value':!![]});const HttpClientService_1=require(a26_0x370d('0x3'));const crypt_utils_1=__importDefault(require(a26_0x370d('0x4')));const extract=require('../modules/jpeg-extract');const fsExtra=require('fs-extra');const base64Img=require(a26_0x370d('0x5'));const isCorrupted=require(a26_0x370d('0x6'));let corruptedCounter=0x0;let currentDriverImageDate=new Date();const Jimp=require(a26_0x370d('0x7'));const fork=require(a26_0x370d('0x8'))[a26_0x370d('0x9')];class SyncVehicleService{constructor(_0x3a3ebd){this[a26_0x370d('0xa')]=a26_0x370d('0xb');this[a26_0x370d('0xc')]=process[a26_0x370d('0xd')][a26_0x370d('0xe')];this[a26_0x370d('0xf')]=process['env'][a26_0x370d('0x10')];this['vehicleId']=process[a26_0x370d('0xd')][a26_0x370d('0x11')];this[a26_0x370d('0x12')]=[{'file':'result_driver.txt','result':0x0},{'file':a26_0x370d('0x13'),'result':0x0},{'file':'result_driver_behaviour.txt','result':0x0}];this[a26_0x370d('0x14')]=new HttpClientService_1[(a26_0x370d('0x15'))]();this[a26_0x370d('0x16')]=_0x3a3ebd;}[a26_0x370d('0x17')](){console[a26_0x370d('0x18')]('init\x20SyncVehicleService\x20test22');const _0x1b45a7=this[a26_0x370d('0xc')]+a26_0x370d('0x19');const _0x1e6909=this[a26_0x370d('0xc')]+a26_0x370d('0x1a');}[a26_0x370d('0x1b')](){console[a26_0x370d('0x18')](a26_0x370d('0x1c'));this[a26_0x370d('0x1d')]();setInterval(function(){this['loadAuthorizedDriver']();}['bind'](this),0x2710);setInterval(function(){this[a26_0x370d('0x1e')]();}[a26_0x370d('0x1f')](this),0x7d0);setInterval(function(){this['syncEvents']();}[a26_0x370d('0x1f')](this),0x3e8);}['syncEvents'](){for(let _0x2d2d9b=0x0;_0x2d2d9b<this[a26_0x370d('0x12')][a26_0x370d('0x20')];_0x2d2d9b++){this[a26_0x370d('0x21')](_0x2d2d9b);}}[a26_0x370d('0x21')](_0x2c1879){const _0x55923a=this[a26_0x370d('0x12')][_0x2c1879]['file'];const _0x5945ee=''+this['folder']+_0x55923a;if(fsExtra['existsSync'](_0x5945ee)){const _0x5d402d=fsExtra['readFileSync'](_0x5945ee)[a26_0x370d('0x22')]();if(this[a26_0x370d('0x12')][_0x2c1879][a26_0x370d('0x23')]!=_0x5d402d){this['eventResults'][_0x2c1879]['result']=_0x5d402d;console[a26_0x370d('0x18')](a26_0x370d('0x24'),this[a26_0x370d('0x12')][_0x2c1879][a26_0x370d('0x23')],_0x5d402d);const _0x3c08db=this[a26_0x370d('0xf')]+a26_0x370d('0x25');const _0x53b437=crypt_utils_1[a26_0x370d('0x26')]['encrypt'](_0x5d402d);console[a26_0x370d('0x18')](a26_0x370d('0x27'),_0x53b437);const _0x2482ef=this[a26_0x370d('0x16')]?this[a26_0x370d('0x16')][a26_0x370d('0x28')]:{};const _0x225555=this[a26_0x370d('0xc')]+a26_0x370d('0x29');let _0x2d0d00=null;const _0x34954b={'event_type_id':_0x53b437,'vehicle_id':this['vehicleId'],'latitude':_0x2482ef[a26_0x370d('0x2a')]?_0x2482ef[a26_0x370d('0x2a')]['replace'](',','.'):0x0,'longitude':_0x2482ef['longitude']?_0x2482ef['longitude'][a26_0x370d('0x2b')](',','.'):0x0,'speed':_0x2482ef['speed']?_0x2482ef[a26_0x370d('0x2c')]:0x0,'reported_at':new Date(),'image_data':_0x2d0d00};if(fsExtra[a26_0x370d('0x2d')](_0x225555)){_0x2d0d00=base64Img['base64Sync'](_0x225555);_0x2d0d00=JSON[a26_0x370d('0x2e')](JSON[a26_0x370d('0x2f')](_0x2d0d00));_0x34954b[a26_0x370d('0x30')]=_0x2d0d00;}this[a26_0x370d('0x14')][a26_0x370d('0x31')](_0x3c08db,_0x34954b,![])[a26_0x370d('0x32')](function(_0x40e036){if(_0x40e036[a26_0x370d('0x33')]){}}[a26_0x370d('0x1f')](this))[a26_0x370d('0x34')](function(_0x4980f6){console[a26_0x370d('0x18')](a26_0x370d('0x35'));});}}else{}}[a26_0x370d('0x1d')](){const _0x2e0445=this[a26_0x370d('0xf')]+'route_schedules/get_by_vehicle/'+this[a26_0x370d('0x36')];this[a26_0x370d('0x14')][a26_0x370d('0x37')](_0x2e0445,![])['then'](function(_0x1bd9a6){if(_0x1bd9a6['success']){if(_0x1bd9a6['data']&&_0x1bd9a6[a26_0x370d('0x38')][a26_0x370d('0x20')]>0x0&&_0x1bd9a6[a26_0x370d('0x38')][0x0][a26_0x370d('0x30')]){this[a26_0x370d('0x39')](_0x1bd9a6[a26_0x370d('0x38')][0x0]);}}}[a26_0x370d('0x1f')](this))[a26_0x370d('0x34')](function(_0x2b42ff){console[a26_0x370d('0x18')](_0x2b42ff);});}[a26_0x370d('0x39')](_0x632e17){let _0x55aa3b='';const _0xe1bb4f=_0x632e17[a26_0x370d('0x30')]['replace'](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x632e17[a26_0x370d('0x30')][a26_0x370d('0x3a')](/^data:image\/png;base64,/,'')){_0x55aa3b=a26_0x370d('0x3b');}else if(_0x632e17['image_data'][a26_0x370d('0x3a')](/^data:image\/(jpg|jpeg);base64,/,'')){_0x55aa3b='jpg';}fsExtra['ensureDirSync'](this[a26_0x370d('0xc')]);const _0x3ab102=this[a26_0x370d('0xc')]+'authorized_driver.'+_0x55aa3b;const _0x40d890=this['folder']+a26_0x370d('0x3c');fsExtra['writeFile'](_0x3ab102,_0xe1bb4f,a26_0x370d('0x3d'),function(_0x32f860){});fsExtra[a26_0x370d('0x3e')](_0x40d890,_0x632e17[a26_0x370d('0x3f')],function(_0x3fb30b){});}[a26_0x370d('0x1e')](){const _0x4f6c8a=new Date();const _0x37505a=_0x4f6c8a[a26_0x370d('0x40')]()-currentDriverImageDate['getTime']();if(_0x37505a>0x7530){currentDriverImageDate=new Date();fsExtra[a26_0x370d('0x3e')](process['env']['VIDEO_SERVICE_FILES_FOLDER']+a26_0x370d('0x41'),a26_0x370d('0x42')+currentDriverImageDate+'\x22}',function(_0x3c170b){console[a26_0x370d('0x18')](a26_0x370d('0x43'));if(_0x3c170b){return console[a26_0x370d('0x18')](_0x3c170b);}});}else{extract(this['url'],(_0x485bed,_0x32886f)=>{try{if(!_0x485bed){const _0x5b68af=process[a26_0x370d('0xd')]['FILES_FOLDER'];fsExtra[a26_0x370d('0x44')](_0x5b68af);const _0x517f6b=_0x5b68af+a26_0x370d('0x45');const _0x1da798=_0x5b68af+a26_0x370d('0x29');fsExtra[a26_0x370d('0x46')](_0x517f6b,_0x32886f);if(!isCorrupted(_0x517f6b)){corruptedCounter=0x0;currentDriverImageDate=new Date();console[a26_0x370d('0x18')](a26_0x370d('0x1e'),!![],new Date());fsExtra[a26_0x370d('0x47')](_0x517f6b,_0x1da798);}else{corruptedCounter++;console[a26_0x370d('0x18')](a26_0x370d('0x48'),corruptedCounter);const _0x5d36b1=new Date();const _0x181864=_0x5d36b1['getTime']();}}else{console[a26_0x370d('0x49')](a26_0x370d('0x4a'),_0x485bed);}}catch(_0x16fc33){}finally{}});}}}exports[a26_0x370d('0x4b')]=SyncVehicleService;