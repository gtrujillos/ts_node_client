var a26_0x2b52=['HttpClientService','init2','init\x20SyncVehicleService\x20test22','image1.jpg','init','log','init\x20SyncVehicleService','loadAuthorizedDriver','bind','setCurrentDriverImage','syncEvents','length','driverValidationEvents','file','existsSync','readFileSync','result','events/report_event/','gpsService','locationParts','latitude','replace','longitude','speed','parse','stringify','image_data','post','then','success','catch','err','get','data','saveImageFile','match','png','ensureDirSync','authorized_driver.','authorized_driver.txt','writeFile','base64','user_id','status.json','{\x22status\x22:\x20\x22','FILES_FOLDER','current_driver_temp.jpg','current_driver.jpg','writeFileSync','copy','setCurrentDriverImage\x20corruptedCounter\x20********************:\x20','getTime','toString','.jpg','error','extract','SyncVehicleService','__importDefault','__esModule','defineProperty','../infrastructure/HttpClientService','is-corrupted-jpeg','jimp','child_process','fork','url','http://localhost:60/index1.jpg','folder','apiURL','env','API_SERVICE_URL','vehicleId','VEHICLE_ID','eventResults','result_driver_bus.txt','result_driver_behaviour.txt','httpClientService'];(function(_0x8a85f7,_0x3f326c){var _0x1c28fc=function(_0x1c5c6d){while(--_0x1c5c6d){_0x8a85f7['push'](_0x8a85f7['shift']());}};_0x1c28fc(++_0x3f326c);}(a26_0x2b52,0xd3));var a26_0x2302=function(_0x9cbd46,_0x3080fd){_0x9cbd46=_0x9cbd46-0x0;var _0x44ae9f=a26_0x2b52[_0x9cbd46];return _0x44ae9f;};'use strict';var __importDefault=this&&this[a26_0x2302('0x0')]||function(_0x2503d5){return _0x2503d5&&_0x2503d5[a26_0x2302('0x1')]?_0x2503d5:{'default':_0x2503d5};};Object[a26_0x2302('0x2')](exports,a26_0x2302('0x1'),{'value':!![]});const HttpClientService_1=require(a26_0x2302('0x3'));const crypt_utils_1=__importDefault(require('../infrastructure/crypt-utils'));const extract=require('../modules/jpeg-extract');const fsExtra=require('fs-extra');const base64Img=require('base64-img');const isCorrupted=require(a26_0x2302('0x4'));let corruptedCounter=0x0;let currentDriverImageDate=new Date();const Jimp=require(a26_0x2302('0x5'));const fork=require(a26_0x2302('0x6'))[a26_0x2302('0x7')];class SyncVehicleService{constructor(_0x189a52){this[a26_0x2302('0x8')]=a26_0x2302('0x9');this[a26_0x2302('0xa')]=process['env']['FILES_FOLDER'];this[a26_0x2302('0xb')]=process[a26_0x2302('0xc')][a26_0x2302('0xd')];this[a26_0x2302('0xe')]=process['env'][a26_0x2302('0xf')];this[a26_0x2302('0x10')]=[{'file':'result_driver.txt','result':0x0},{'file':a26_0x2302('0x11'),'result':0x0},{'file':a26_0x2302('0x12'),'result':0x0}];this[a26_0x2302('0x13')]=new HttpClientService_1[(a26_0x2302('0x14'))]();this['gpsService']=_0x189a52;}[a26_0x2302('0x15')](){console['log'](a26_0x2302('0x16'));const _0x2db7fd=this[a26_0x2302('0xa')]+a26_0x2302('0x17');const _0x246240=this['folder']+'image2.jpg';}[a26_0x2302('0x18')](){console[a26_0x2302('0x19')](a26_0x2302('0x1a'));this[a26_0x2302('0x1b')]();setInterval(function(){this[a26_0x2302('0x1b')]();}[a26_0x2302('0x1c')](this),0x2710);setInterval(function(){this[a26_0x2302('0x1d')]();}[a26_0x2302('0x1c')](this),0x7d0);setInterval(function(){this['syncEvents']();}[a26_0x2302('0x1c')](this),0x3e8);}[a26_0x2302('0x1e')](){for(let _0x50e232=0x0;_0x50e232<this[a26_0x2302('0x10')][a26_0x2302('0x1f')];_0x50e232++){this[a26_0x2302('0x20')](_0x50e232);}}[a26_0x2302('0x20')](_0x4e48f3){const _0x2d22a8=this[a26_0x2302('0x10')][_0x4e48f3][a26_0x2302('0x21')];const _0x5dca06=''+this[a26_0x2302('0xa')]+_0x2d22a8;if(fsExtra[a26_0x2302('0x22')](_0x5dca06)){const _0x696eea=fsExtra[a26_0x2302('0x23')](_0x5dca06)['toString']();if(this[a26_0x2302('0x10')][_0x4e48f3][a26_0x2302('0x24')]!=_0x696eea){this[a26_0x2302('0x10')][_0x4e48f3]['result']=_0x696eea;console[a26_0x2302('0x19')](a26_0x2302('0x1e'),this['eventResults'][_0x4e48f3][a26_0x2302('0x24')],_0x696eea);const _0x11cd2b=this[a26_0x2302('0xb')]+a26_0x2302('0x25');const _0x50d92a=crypt_utils_1['default']['encrypt'](_0x696eea);console['log']('eventTypeId',_0x50d92a);const _0x3f93b6=this[a26_0x2302('0x26')]?this[a26_0x2302('0x26')][a26_0x2302('0x27')]:{};const _0x550e40=this[a26_0x2302('0xa')]+'current_driver.jpg';let _0x4681d9=null;const _0x3c9c8e={'event_type_id':_0x50d92a,'vehicle_id':this[a26_0x2302('0xe')],'latitude':_0x3f93b6[a26_0x2302('0x28')]?_0x3f93b6['latitude'][a26_0x2302('0x29')](',','.'):0x0,'longitude':_0x3f93b6[a26_0x2302('0x2a')]?_0x3f93b6['longitude'][a26_0x2302('0x29')](',','.'):0x0,'speed':_0x3f93b6[a26_0x2302('0x2b')]?_0x3f93b6[a26_0x2302('0x2b')]:0x0,'reported_at':new Date(),'image_data':_0x4681d9};if(fsExtra[a26_0x2302('0x22')](_0x550e40)){_0x4681d9=base64Img['base64Sync'](_0x550e40);_0x4681d9=JSON[a26_0x2302('0x2c')](JSON[a26_0x2302('0x2d')](_0x4681d9));_0x3c9c8e[a26_0x2302('0x2e')]=_0x4681d9;}this['httpClientService'][a26_0x2302('0x2f')](_0x11cd2b,_0x3c9c8e,![])[a26_0x2302('0x30')](function(_0x23c2d7){if(_0x23c2d7[a26_0x2302('0x31')]){}}[a26_0x2302('0x1c')](this))[a26_0x2302('0x32')](function(_0x1c56a0){console[a26_0x2302('0x19')](a26_0x2302('0x33'));});}}else{}}[a26_0x2302('0x1b')](){const _0x1d66cd=this[a26_0x2302('0xb')]+'route_schedules/get_by_vehicle/'+this['vehicleId'];this[a26_0x2302('0x13')][a26_0x2302('0x34')](_0x1d66cd,![])[a26_0x2302('0x30')](function(_0x3edcdb){if(_0x3edcdb[a26_0x2302('0x31')]){if(_0x3edcdb[a26_0x2302('0x35')]&&_0x3edcdb[a26_0x2302('0x35')][a26_0x2302('0x1f')]>0x0&&_0x3edcdb['data'][0x0][a26_0x2302('0x2e')]){this[a26_0x2302('0x36')](_0x3edcdb[a26_0x2302('0x35')][0x0]);}}}[a26_0x2302('0x1c')](this))[a26_0x2302('0x32')](function(_0x2a5b1c){console[a26_0x2302('0x19')](_0x2a5b1c);});}[a26_0x2302('0x36')](_0x31ff4b){let _0x3617d3='';const _0xb95c80=_0x31ff4b['image_data'][a26_0x2302('0x29')](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x31ff4b[a26_0x2302('0x2e')][a26_0x2302('0x37')](/^data:image\/png;base64,/,'')){_0x3617d3=a26_0x2302('0x38');}else if(_0x31ff4b['image_data']['match'](/^data:image\/(jpg|jpeg);base64,/,'')){_0x3617d3='jpg';}fsExtra[a26_0x2302('0x39')](this[a26_0x2302('0xa')]);const _0x1f9627=this[a26_0x2302('0xa')]+a26_0x2302('0x3a')+_0x3617d3;const _0x181625=this[a26_0x2302('0xa')]+a26_0x2302('0x3b');fsExtra[a26_0x2302('0x3c')](_0x1f9627,_0xb95c80,a26_0x2302('0x3d'),function(_0x5ab7c0){});fsExtra[a26_0x2302('0x3c')](_0x181625,_0x31ff4b[a26_0x2302('0x3e')],function(_0x3c956b){});}['setCurrentDriverImage'](){const _0xd49bff=new Date();const _0x43fea9=_0xd49bff['getTime']()-currentDriverImageDate['getTime']();if(_0x43fea9>0x7530){currentDriverImageDate=new Date();fsExtra[a26_0x2302('0x3c')](process[a26_0x2302('0xc')]['VIDEO_SERVICE_FILES_FOLDER']+a26_0x2302('0x3f'),a26_0x2302('0x40')+currentDriverImageDate+'\x22}',function(_0x33cbd0){console[a26_0x2302('0x19')]('Video\x20service\x20restarted');if(_0x33cbd0){return console[a26_0x2302('0x19')](_0x33cbd0);}});}else{extract(this[a26_0x2302('0x8')],(_0x366584,_0x2dfc9e)=>{try{if(!_0x366584){const _0x4add77=process[a26_0x2302('0xc')][a26_0x2302('0x41')];fsExtra[a26_0x2302('0x39')](_0x4add77);const _0x22e0ae=_0x4add77+a26_0x2302('0x42');const _0x1d37f4=_0x4add77+a26_0x2302('0x43');fsExtra[a26_0x2302('0x44')](_0x22e0ae,_0x2dfc9e);if(!isCorrupted(_0x22e0ae)){corruptedCounter=0x0;currentDriverImageDate=new Date();console[a26_0x2302('0x19')](a26_0x2302('0x1d'),!![],new Date());fsExtra[a26_0x2302('0x45')](_0x22e0ae,_0x1d37f4);}else{corruptedCounter++;console[a26_0x2302('0x19')](a26_0x2302('0x46'),corruptedCounter);const _0x12050a=new Date();const _0x112b19=_0x12050a[a26_0x2302('0x47')]();fsExtra[a26_0x2302('0x45')](_0x22e0ae,_0x4add77+_0x112b19[a26_0x2302('0x48')]()+a26_0x2302('0x49'));}}else{console[a26_0x2302('0x4a')](a26_0x2302('0x4b'),_0x366584);}}catch(_0x1d5a4c){}finally{}});}}}exports[a26_0x2302('0x4c')]=SyncVehicleService;