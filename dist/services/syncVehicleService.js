var a27_0x140a=['log','init\x20SyncVehicleService','loadAuthorizedDriver','bind','syncEvents','length','driverValidationEvents','file','folder','readFileSync','toString','result','apiURL','default','eventTypeId','current_driver.jpg','latitude','longitude','speed','eventData:\x20','existsSync','base64Sync','parse','stringify','image_data','post','then','response:','success','catch','No\x20file:\x20','route_schedules/get_by_vehicle/','get','data','saveImageFile','replace','match','png','jpg','ensureDirSync','authorized_driver.','authorized_driver.txt','base64','writeFile','setCurrentDriverImage','VIDEO_SERVICE_FILES_FOLDER','status.json','Video\x20service\x20restarted','writeFileSync','error','extract','__esModule','../infrastructure/HttpClientService','../infrastructure/crypt-utils','jpeg-extract','fs-extra','base64-img','is-corrupted-jpeg','child_process','fork','url','http://localhost:60/index1.jpg','env','FILES_FOLDER','API_SERVICE_URL','vehicleId','eventResults','result_driver_bus.txt','result_driver_behaviour.txt','httpClientService','HttpClientService','gpsService','init'];(function(_0x4d4cf6,_0x2d0fa2){var _0x2c0fa6=function(_0x5837b3){while(--_0x5837b3){_0x4d4cf6['push'](_0x4d4cf6['shift']());}};_0x2c0fa6(++_0x2d0fa2);}(a27_0x140a,0x10e));var a27_0xbda2=function(_0x550c24,_0x576fa3){_0x550c24=_0x550c24-0x0;var _0xa9605=a27_0x140a[_0x550c24];return _0xa9605;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3e67e2){return _0x3e67e2&&_0x3e67e2['__esModule']?_0x3e67e2:{'default':_0x3e67e2};};Object['defineProperty'](exports,a27_0xbda2('0x0'),{'value':!![]});const HttpClientService_1=require(a27_0xbda2('0x1'));const crypt_utils_1=__importDefault(require(a27_0xbda2('0x2')));const extract=require(a27_0xbda2('0x3'));const fsExtra=require(a27_0xbda2('0x4'));const base64Img=require(a27_0xbda2('0x5'));const isCorrupted=require(a27_0xbda2('0x6'));let corruptedCounter=0x0;let currentDriverImageDate=new Date();const fork=require(a27_0xbda2('0x7'))[a27_0xbda2('0x8')];class SyncVehicleService{constructor(_0x44c30f){this[a27_0xbda2('0x9')]=a27_0xbda2('0xa');this['folder']=process[a27_0xbda2('0xb')][a27_0xbda2('0xc')];this['apiURL']=process[a27_0xbda2('0xb')][a27_0xbda2('0xd')];this[a27_0xbda2('0xe')]=process[a27_0xbda2('0xb')]['VEHICLE_ID'];this[a27_0xbda2('0xf')]=[{'file':'result_driver.txt','result':0x0},{'file':a27_0xbda2('0x10'),'result':0x0},{'file':a27_0xbda2('0x11'),'result':0x0}];this[a27_0xbda2('0x12')]=new HttpClientService_1[(a27_0xbda2('0x13'))]();this[a27_0xbda2('0x14')]=_0x44c30f;}[a27_0xbda2('0x15')](){console[a27_0xbda2('0x16')](a27_0xbda2('0x17'));this[a27_0xbda2('0x18')]();setInterval(function(){this['loadAuthorizedDriver']();}[a27_0xbda2('0x19')](this),0x2710);setInterval(function(){this['setCurrentDriverImage']();}['bind'](this),0x7d0);setInterval(function(){this[a27_0xbda2('0x1a')]();}[a27_0xbda2('0x19')](this),0x3e8);}[a27_0xbda2('0x1a')](){for(let _0x301c5e=0x0;_0x301c5e<this[a27_0xbda2('0xf')][a27_0xbda2('0x1b')];_0x301c5e++){this['driverValidationEvents'](_0x301c5e);}}[a27_0xbda2('0x1c')](_0x1296ce){const _0x2101e8=this[a27_0xbda2('0xf')][_0x1296ce][a27_0xbda2('0x1d')];const _0x2fe8f9=''+this[a27_0xbda2('0x1e')]+_0x2101e8;if(fsExtra['existsSync'](_0x2fe8f9)){const _0xe7e732=fsExtra[a27_0xbda2('0x1f')](_0x2fe8f9)[a27_0xbda2('0x20')]();if(this[a27_0xbda2('0xf')][_0x1296ce][a27_0xbda2('0x21')]!=_0xe7e732){this[a27_0xbda2('0xf')][_0x1296ce][a27_0xbda2('0x21')]=_0xe7e732;console[a27_0xbda2('0x16')](a27_0xbda2('0x1a'),this[a27_0xbda2('0xf')][_0x1296ce][a27_0xbda2('0x21')],_0xe7e732);const _0x4feedd=this[a27_0xbda2('0x22')]+'events/report_event/';const _0x25cc50=crypt_utils_1[a27_0xbda2('0x23')]['encrypt'](_0xe7e732);console[a27_0xbda2('0x16')](a27_0xbda2('0x24'),_0x25cc50);const _0x408bc2=this[a27_0xbda2('0x14')]?this[a27_0xbda2('0x14')]['locationParts']:{};const _0x54de05=this[a27_0xbda2('0x1e')]+a27_0xbda2('0x25');let _0x490903=null;const _0x222f70={'event_type_id':_0x25cc50,'vehicle_id':this[a27_0xbda2('0xe')],'latitude':_0x408bc2['latitude']?_0x408bc2[a27_0xbda2('0x26')]:0x0,'longitude':_0x408bc2[a27_0xbda2('0x27')]?_0x408bc2[a27_0xbda2('0x27')]:0x0,'speed':_0x408bc2[a27_0xbda2('0x28')]?_0x408bc2[a27_0xbda2('0x28')]:0x0,'reported_at':new Date(),'image_data':_0x490903};console[a27_0xbda2('0x16')](a27_0xbda2('0x29'),_0x222f70);if(fsExtra[a27_0xbda2('0x2a')](_0x54de05)){_0x490903=base64Img[a27_0xbda2('0x2b')](_0x54de05);_0x490903=JSON[a27_0xbda2('0x2c')](JSON[a27_0xbda2('0x2d')](_0x490903));_0x222f70[a27_0xbda2('0x2e')]=_0x490903;}this[a27_0xbda2('0x12')][a27_0xbda2('0x2f')](_0x4feedd,_0x222f70,![])[a27_0xbda2('0x30')](function(_0x445458){console['log'](a27_0xbda2('0x31'),_0x445458);if(_0x445458[a27_0xbda2('0x32')]){}}[a27_0xbda2('0x19')](this))[a27_0xbda2('0x33')](function(_0x482d68){console[a27_0xbda2('0x16')](_0x482d68);});}}else{console[a27_0xbda2('0x16')](a27_0xbda2('0x34'),_0x2101e8);}}[a27_0xbda2('0x18')](){const _0x159a43=this['apiURL']+a27_0xbda2('0x35')+this[a27_0xbda2('0xe')];this[a27_0xbda2('0x12')][a27_0xbda2('0x36')](_0x159a43,![])[a27_0xbda2('0x30')](function(_0x148bfa){if(_0x148bfa[a27_0xbda2('0x32')]){if(_0x148bfa['data']&&_0x148bfa[a27_0xbda2('0x37')][a27_0xbda2('0x1b')]>0x0&&_0x148bfa[a27_0xbda2('0x37')][0x0][a27_0xbda2('0x2e')]){this[a27_0xbda2('0x38')](_0x148bfa[a27_0xbda2('0x37')][0x0]);}}}[a27_0xbda2('0x19')](this))[a27_0xbda2('0x33')](function(_0x343876){console[a27_0xbda2('0x16')](_0x343876);});}['saveImageFile'](_0x2ba8e5){let _0x4629ad='';const _0x2d9e8f=_0x2ba8e5[a27_0xbda2('0x2e')][a27_0xbda2('0x39')](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x2ba8e5[a27_0xbda2('0x2e')][a27_0xbda2('0x3a')](/^data:image\/png;base64,/,'')){_0x4629ad=a27_0xbda2('0x3b');}else if(_0x2ba8e5[a27_0xbda2('0x2e')][a27_0xbda2('0x3a')](/^data:image\/(jpg|jpeg);base64,/,'')){_0x4629ad=a27_0xbda2('0x3c');}fsExtra[a27_0xbda2('0x3d')](this[a27_0xbda2('0x1e')]);const _0x2fdeb5=this[a27_0xbda2('0x1e')]+a27_0xbda2('0x3e')+_0x4629ad;const _0x3ba51f=this['folder']+a27_0xbda2('0x3f');fsExtra['writeFile'](_0x2fdeb5,_0x2d9e8f,a27_0xbda2('0x40'),function(_0x422d3b){});fsExtra[a27_0xbda2('0x41')](_0x3ba51f,_0x2ba8e5['user_id'],function(_0x2bf259){});}[a27_0xbda2('0x42')](){const _0x113056=new Date();const _0xdc3d34=_0x113056['getTime']()-currentDriverImageDate['getTime']();if(_0xdc3d34>0x7530){currentDriverImageDate=new Date();fsExtra[a27_0xbda2('0x41')](process['env'][a27_0xbda2('0x43')]+a27_0xbda2('0x44'),'{\x22status\x22:\x20\x22'+currentDriverImageDate+'\x22}',function(_0x5c10fb){console[a27_0xbda2('0x16')](a27_0xbda2('0x45'));if(_0x5c10fb){return console[a27_0xbda2('0x16')](_0x5c10fb);}});}else{extract(this[a27_0xbda2('0x9')],(_0x269aff,_0x21e098)=>{try{if(!_0x269aff){const _0x471e18=process[a27_0xbda2('0xb')]['FILES_FOLDER'];fsExtra[a27_0xbda2('0x3d')](_0x471e18);const _0x34da47=_0x471e18+'current_driver_temp.jpg';const _0x2f4361=_0x471e18+a27_0xbda2('0x25');fsExtra[a27_0xbda2('0x46')](_0x34da47,_0x21e098);if(!isCorrupted(_0x34da47)){corruptedCounter=0x0;currentDriverImageDate=new Date();fsExtra['copy'](_0x34da47,_0x2f4361);}else{corruptedCounter++;console['log'](a27_0xbda2('0x42'),corruptedCounter);}}else{console[a27_0xbda2('0x47')](a27_0xbda2('0x48'),_0x269aff);}}catch(_0x1e7f90){}finally{}});}}}exports['SyncVehicleService']=SyncVehicleService;