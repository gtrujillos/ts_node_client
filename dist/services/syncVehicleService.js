var a27_0x3367=['bind','setCurrentDriverImage','syncEvents','folder','result_driver.txt','existsSync','readFileSync','toString','Send\x20event','default','encrypt','eventTypeId','locationParts','parse','stringify','longitude','speed','then','catch','get','data','length','image_data','saveImageFile','replace','match','png','jpg','ensureDirSync','authorized_driver.','writeFile','base64','user_id','current_driver.jpg','error','kill','SyncVehicleService','__importDefault','defineProperty','__esModule','../infrastructure/HttpClientService','../infrastructure/crypt-utils','jpeg-extract','fs-extra','base64-img','fork','url','http://localhost:60/index1.jpg','currentDriverResult','env','FILES_FOLDER','apiURL','vehicleId','VEHICLE_ID','httpClientService','HttpClientService','gpsService','init','log','init\x20SyncVehicleService','loadAuthorizedDriver'];(function(_0x2e932a,_0x3b5d07){var _0x2d195f=function(_0x33e92a){while(--_0x33e92a){_0x2e932a['push'](_0x2e932a['shift']());}};_0x2d195f(++_0x3b5d07);}(a27_0x3367,0x1d0));var a27_0x18f1=function(_0x47207c,_0x49b0e1){_0x47207c=_0x47207c-0x0;var _0x2a59bc=a27_0x3367[_0x47207c];return _0x2a59bc;};'use strict';var __importDefault=this&&this[a27_0x18f1('0x0')]||function(_0x579da1){return _0x579da1&&_0x579da1['__esModule']?_0x579da1:{'default':_0x579da1};};Object[a27_0x18f1('0x1')](exports,a27_0x18f1('0x2'),{'value':!![]});const HttpClientService_1=require(a27_0x18f1('0x3'));const crypt_utils_1=__importDefault(require(a27_0x18f1('0x4')));const extract=require(a27_0x18f1('0x5'));const fsExtra=require(a27_0x18f1('0x6'));const base64Img=require(a27_0x18f1('0x7'));const fork=require('child_process')[a27_0x18f1('0x8')];let child;class SyncVehicleService{constructor(_0x2ba4ee){this[a27_0x18f1('0x9')]=a27_0x18f1('0xa');this[a27_0x18f1('0xb')]=null;this['folder']=process[a27_0x18f1('0xc')][a27_0x18f1('0xd')];this[a27_0x18f1('0xe')]=process[a27_0x18f1('0xc')]['API_SERVICE_URL'];this[a27_0x18f1('0xf')]=process[a27_0x18f1('0xc')][a27_0x18f1('0x10')];this[a27_0x18f1('0x11')]=new HttpClientService_1[(a27_0x18f1('0x12'))]();this[a27_0x18f1('0x13')]=_0x2ba4ee;}[a27_0x18f1('0x14')](){console[a27_0x18f1('0x15')](a27_0x18f1('0x16'));this['loadAuthorizedDriver']();setInterval(function(){this[a27_0x18f1('0x17')]();}[a27_0x18f1('0x18')](this),0x2710);setInterval(function(){this[a27_0x18f1('0x19')]();}[a27_0x18f1('0x18')](this),0x3e8);setInterval(function(){this['syncEvents']();}['bind'](this),0x3e8);}[a27_0x18f1('0x1a')](){const _0x524ed3=this[a27_0x18f1('0x1b')]+a27_0x18f1('0x1c');if(fsExtra[a27_0x18f1('0x1d')](_0x524ed3)){const _0x387f70=fsExtra[a27_0x18f1('0x1e')](_0x524ed3)[a27_0x18f1('0x1f')]();if(this[a27_0x18f1('0xb')]!=_0x387f70){this[a27_0x18f1('0xb')]=_0x387f70;const _0x1533f9=this[a27_0x18f1('0xe')]+'events/report_event/';console[a27_0x18f1('0x15')](a27_0x18f1('0x20'),_0x1533f9);console[a27_0x18f1('0x15')]('driverResult',_0x387f70);const _0x4f5430=crypt_utils_1[a27_0x18f1('0x21')][a27_0x18f1('0x22')](_0x387f70);console['log'](a27_0x18f1('0x23'),_0x4f5430);const _0x48502f=this[a27_0x18f1('0x13')]?this['gpsService'][a27_0x18f1('0x24')]:{};const _0x44569b=this[a27_0x18f1('0x1b')]+'current_driver.jpg';let _0x90cb40=null;if(fsExtra[a27_0x18f1('0x1d')](_0x44569b)){_0x90cb40=base64Img['base64Sync'](_0x44569b);_0x90cb40=JSON[a27_0x18f1('0x25')](JSON[a27_0x18f1('0x26')](_0x90cb40));_0x90cb40=_0x90cb40;}const _0x43054a={'event_type_id':_0x4f5430,'vehicle_id':this[a27_0x18f1('0xf')],'latitude':_0x48502f['latitude']?_0x48502f['latitude']:0x0,'longitude':_0x48502f[a27_0x18f1('0x27')]?_0x48502f['longitude']:0x0,'speed':_0x48502f['speed']?_0x48502f[a27_0x18f1('0x28')]:0x0,'reported_at':new Date(),'image_data':_0x90cb40};this[a27_0x18f1('0x11')]['post'](_0x1533f9,_0x43054a,![])[a27_0x18f1('0x29')](function(_0x4f6866){if(_0x4f6866['success']){}}[a27_0x18f1('0x18')](this))[a27_0x18f1('0x2a')](function(_0x56ed5e){console[a27_0x18f1('0x15')](_0x56ed5e);});}}}[a27_0x18f1('0x17')](){console[a27_0x18f1('0x15')]('loadAuthorizedDriver');const _0x194f80=this[a27_0x18f1('0xe')]+'route_schedules/get_by_vehicle/'+this[a27_0x18f1('0xf')];console[a27_0x18f1('0x15')](a27_0x18f1('0x17'),_0x194f80);this['httpClientService'][a27_0x18f1('0x2b')](_0x194f80,![])[a27_0x18f1('0x29')](function(_0x2dcda8){if(_0x2dcda8['success']){if(_0x2dcda8[a27_0x18f1('0x2c')]&&_0x2dcda8[a27_0x18f1('0x2c')][a27_0x18f1('0x2d')]>0x0&&_0x2dcda8[a27_0x18f1('0x2c')][0x0][a27_0x18f1('0x2e')]){this[a27_0x18f1('0x2f')](_0x2dcda8['data'][0x0]);}}}[a27_0x18f1('0x18')](this))['catch'](function(_0x27b7c3){console[a27_0x18f1('0x15')](_0x27b7c3);});}[a27_0x18f1('0x2f')](_0x1c92c8){let _0x1f1bec='';const _0xf465ad=_0x1c92c8['image_data'][a27_0x18f1('0x30')](/^data:image\/(png|jpeg|jpg);base64,/,'');if(_0x1c92c8[a27_0x18f1('0x2e')][a27_0x18f1('0x31')](/^data:image\/png;base64,/,'')){_0x1f1bec=a27_0x18f1('0x32');}else if(_0x1c92c8[a27_0x18f1('0x2e')]['match'](/^data:image\/(jpg|jpeg);base64,/,'')){_0x1f1bec=a27_0x18f1('0x33');}fsExtra[a27_0x18f1('0x34')](this[a27_0x18f1('0x1b')]);const _0x4b32a7=this['folder']+a27_0x18f1('0x35')+_0x1f1bec;const _0x59071a=this[a27_0x18f1('0x1b')]+'authorized_driver.txt';fsExtra[a27_0x18f1('0x36')](_0x4b32a7,_0xf465ad,a27_0x18f1('0x37'),function(_0x851231){});fsExtra['writeFile'](_0x59071a,_0x1c92c8[a27_0x18f1('0x38')],function(_0x5acbe6){});}['setCurrentDriverImage'](){console['log'](a27_0x18f1('0x19'));extract(this[a27_0x18f1('0x9')])[a27_0x18f1('0x29')](_0x226ba1=>{const _0x29787e=process['env'][a27_0x18f1('0xd')];fsExtra['ensureDirSync'](_0x29787e);const _0x118a5b=_0x29787e+a27_0x18f1('0x39');fsExtra['writeFileSync'](_0x118a5b,_0x226ba1);})[a27_0x18f1('0x2a')](_0x2c2798=>{console[a27_0x18f1('0x3a')](_0x2c2798);if(child!=null){child[a27_0x18f1('0x3b')]();child=null;}});}}exports[a27_0x18f1('0x3c')]=SyncVehicleService;