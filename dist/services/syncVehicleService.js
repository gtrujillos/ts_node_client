var a27_0x486d=['copy','error','extract','SyncVehicleService','__esModule','defineProperty','../infrastructure/HttpClientService','base64-img','FILES_FOLDER','apiURL','API_SERVICE_URL','env','VEHICLE_ID','result_driver.txt','result_driver_bus.txt','result_driver_behaviour.txt','httpClientService','HttpClientService','gpsService','init','log','loadAuthorizedDriver','bind','setCurrentDriverImage','syncEvents','eventResults','length','driverValidationEvents','file','folder','existsSync','readFileSync','toString','result','events/report_event/','encrypt','eventTypeId','locationParts','parse','stringify','vehicleId','latitude','longitude','speed','then','success','catch','get','data','image_data','saveImageFile','replace','match','png','ensureDirSync','authorized_driver.txt','writeFile','base64','user_id','getTime','VIDEO_SERVICE_FILES_FOLDER','status.json','{\x22status\x22:\x20\x22','Video\x20service\x20restarted','current_driver.jpg'];(function(_0x3162a5,_0x3089bf){var _0x5711b2=function(_0x8e5745){while(--_0x8e5745){_0x3162a5['push'](_0x3162a5['shift']());}};_0x5711b2(++_0x3089bf);}(a27_0x486d,0x86));var a27_0x113b=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a27_0x486d[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x530800){return _0x530800&&_0x530800[a27_0x113b('0x0')]?_0x530800:{'default':_0x530800};};Object[a27_0x113b('0x1')](exports,a27_0x113b('0x0'),{'value':!![]});const HttpClientService_1=require(a27_0x113b('0x2'));const crypt_utils_1=__importDefault(require('../infrastructure/crypt-utils'));const extract=require('jpeg-extract');const fsExtra=require('fs-extra');const base64Img=require(a27_0x113b('0x3'));const isCorrupted=require('is-corrupted-jpeg');let corruptedCounter=0x0;let currentDriverImageDate=new Date();const fork=require('child_process')['fork'];class SyncVehicleService{constructor(_0x3b5d15){this['url']='http://localhost:60/index1.jpg';this['folder']=process['env'][a27_0x113b('0x4')];this[a27_0x113b('0x5')]=process['env'][a27_0x113b('0x6')];this['vehicleId']=process[a27_0x113b('0x7')][a27_0x113b('0x8')];this['eventResults']=[{'file':a27_0x113b('0x9'),'result':0x0},{'file':a27_0x113b('0xa'),'result':0x0},{'file':a27_0x113b('0xb'),'result':0x0}];this[a27_0x113b('0xc')]=new HttpClientService_1[(a27_0x113b('0xd'))]();this[a27_0x113b('0xe')]=_0x3b5d15;}[a27_0x113b('0xf')](){console[a27_0x113b('0x10')]('init\x20SyncVehicleService');this[a27_0x113b('0x11')]();setInterval(function(){this['loadAuthorizedDriver']();}[a27_0x113b('0x12')](this),0x2710);setInterval(function(){this[a27_0x113b('0x13')]();}[a27_0x113b('0x12')](this),0x7d0);setInterval(function(){this[a27_0x113b('0x14')]();}['bind'](this),0x3e8);}[a27_0x113b('0x14')](){for(let _0x50d9cd=0x0;_0x50d9cd<this[a27_0x113b('0x15')][a27_0x113b('0x16')];_0x50d9cd++){this['driverValidationEvents'](_0x50d9cd);}}[a27_0x113b('0x17')](_0x2cc9a2){const _0x3edda6=this['eventResults'][_0x2cc9a2][a27_0x113b('0x18')];const _0x42a345=''+this[a27_0x113b('0x19')]+_0x3edda6;if(fsExtra[a27_0x113b('0x1a')](_0x42a345)){const _0x47303f=fsExtra[a27_0x113b('0x1b')](_0x42a345)[a27_0x113b('0x1c')]();if(this[a27_0x113b('0x15')][_0x2cc9a2][a27_0x113b('0x1d')]!=_0x47303f){this[a27_0x113b('0x15')][_0x2cc9a2]['result']=_0x47303f;console[a27_0x113b('0x10')](a27_0x113b('0x14'),this[a27_0x113b('0x15')][_0x2cc9a2]['result'],_0x47303f);const _0x1836a7=this[a27_0x113b('0x5')]+a27_0x113b('0x1e');const _0x5022c4=crypt_utils_1['default'][a27_0x113b('0x1f')](_0x47303f);console[a27_0x113b('0x10')](a27_0x113b('0x20'),_0x5022c4);const _0x1c579b=this['gpsService']?this['gpsService'][a27_0x113b('0x21')]:{};const _0x3bf29c=this[a27_0x113b('0x19')]+'current_driver.jpg';let _0x5b40ea=null;if(fsExtra[a27_0x113b('0x1a')](_0x3bf29c)){_0x5b40ea=base64Img['base64Sync'](_0x3bf29c);_0x5b40ea=JSON[a27_0x113b('0x22')](JSON[a27_0x113b('0x23')](_0x5b40ea));_0x5b40ea=_0x5b40ea;}const _0x16f466={'event_type_id':_0x5022c4,'vehicle_id':this[a27_0x113b('0x24')],'latitude':_0x1c579b[a27_0x113b('0x25')]?_0x1c579b[a27_0x113b('0x25')]:0x0,'longitude':_0x1c579b[a27_0x113b('0x26')]?_0x1c579b[a27_0x113b('0x26')]:0x0,'speed':_0x1c579b[a27_0x113b('0x27')]?_0x1c579b['speed']:0x0,'reported_at':new Date(),'image_data':_0x5b40ea};this[a27_0x113b('0xc')]['post'](_0x1836a7,_0x16f466,![])[a27_0x113b('0x28')](function(_0x2208bd){if(_0x2208bd[a27_0x113b('0x29')]){}}['bind'](this))[a27_0x113b('0x2a')](function(_0x17066a){console[a27_0x113b('0x10')](_0x17066a);});}}}[a27_0x113b('0x11')](){const _0xd9bb05=this[a27_0x113b('0x5')]+'route_schedules/get_by_vehicle/'+this[a27_0x113b('0x24')];this[a27_0x113b('0xc')][a27_0x113b('0x2b')](_0xd9bb05,![])['then'](function(_0x4c840e){if(_0x4c840e[a27_0x113b('0x29')]){if(_0x4c840e['data']&&_0x4c840e[a27_0x113b('0x2c')]['length']>0x0&&_0x4c840e[a27_0x113b('0x2c')][0x0][a27_0x113b('0x2d')]){this[a27_0x113b('0x2e')](_0x4c840e[a27_0x113b('0x2c')][0x0]);}}}['bind'](this))[a27_0x113b('0x2a')](function(_0x1fa764){console[a27_0x113b('0x10')](_0x1fa764);});}[a27_0x113b('0x2e')](_0x6ac965){let _0x1b3465='';const _0x4c8c23=_0x6ac965['image_data'][a27_0x113b('0x2f')](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x6ac965['image_data'][a27_0x113b('0x30')](/^data:image\/png;base64,/,'')){_0x1b3465=a27_0x113b('0x31');}else if(_0x6ac965['image_data'][a27_0x113b('0x30')](/^data:image\/(jpg|jpeg);base64,/,'')){_0x1b3465='jpg';}fsExtra[a27_0x113b('0x32')](this[a27_0x113b('0x19')]);const _0xfd9138=this[a27_0x113b('0x19')]+'authorized_driver.'+_0x1b3465;const _0x54c30e=this[a27_0x113b('0x19')]+a27_0x113b('0x33');fsExtra[a27_0x113b('0x34')](_0xfd9138,_0x4c8c23,a27_0x113b('0x35'),function(_0x420ab2){});fsExtra['writeFile'](_0x54c30e,_0x6ac965[a27_0x113b('0x36')],function(_0x1602fd){});}['setCurrentDriverImage'](){const _0x12ab92=new Date();const _0x812baf=_0x12ab92[a27_0x113b('0x37')]()-currentDriverImageDate['getTime']();if(_0x812baf>0x7530){currentDriverImageDate=new Date();fsExtra['writeFile'](process[a27_0x113b('0x7')][a27_0x113b('0x38')]+a27_0x113b('0x39'),a27_0x113b('0x3a')+currentDriverImageDate+'\x22}',function(_0x20c967){console[a27_0x113b('0x10')](a27_0x113b('0x3b'));if(_0x20c967){return console[a27_0x113b('0x10')](_0x20c967);}});}else{extract(this['url'],(_0x9972a4,_0x5f2f59)=>{try{if(!_0x9972a4){const _0x3e1e7c=process['env'][a27_0x113b('0x4')];fsExtra['ensureDirSync'](_0x3e1e7c);const _0x1f4a04=_0x3e1e7c+'current_driver_temp.jpg';const _0xaa175f=_0x3e1e7c+a27_0x113b('0x3c');fsExtra['writeFileSync'](_0x1f4a04,_0x5f2f59);if(!isCorrupted(_0x1f4a04)){corruptedCounter=0x0;currentDriverImageDate=new Date();fsExtra[a27_0x113b('0x3d')](_0x1f4a04,_0xaa175f);}else{corruptedCounter++;console[a27_0x113b('0x10')](a27_0x113b('0x13'),corruptedCounter);}}else{console[a27_0x113b('0x3e')](a27_0x113b('0x3f'),_0x9972a4);}}catch(_0x3d8398){}finally{}});}}}exports[a27_0x113b('0x40')]=SyncVehicleService;