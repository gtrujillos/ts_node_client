var a17_0x2a8b=['pipe','finish','unlink','successfully\x20deleted\x20','EventsService','defineProperty','__esModule','../infrastructure/stationSettings','request','eventDateParts','startDateParts','log','gpsService','sensorsService','countingWebSocketService','createEvent','bind','startDate','DateUtils','getDateParts','eventDate','createJson','createFile','1-71767930-','year','day','hour','minute','-00001','StationContext','settings','routeCode','routeName','nit','plate','month','second','locationParts','hdop','longitude','speed','doorStatus','CountingInfo','Out','zlib','eventFileFolder','error','.gz','createGzip','createReadStream','createWriteStream'];(function(_0x20ed8c,_0x445896){var _0x215da3=function(_0x32cfc3){while(--_0x32cfc3){_0x20ed8c['push'](_0x20ed8c['shift']());}};_0x215da3(++_0x445896);}(a17_0x2a8b,0x16a));var a17_0x3a6d=function(_0x2a4a6a,_0xd4df79){_0x2a4a6a=_0x2a4a6a-0x0;var _0x348f0d=a17_0x2a8b[_0x2a4a6a];return _0x348f0d;};'use strict';Object[a17_0x3a6d('0x0')](exports,a17_0x3a6d('0x1'),{'value':!![]});const stationSettings_1=require(a17_0x3a6d('0x2'));const dateUtils_1=require('../infrastructure/utils/dateUtils');const fs=require('fs');const request=require(a17_0x3a6d('0x3'));class EventsService{constructor(_0x36a12e,_0x3adbd4,_0x1ac61c){this[a17_0x3a6d('0x4')]={'day':'','month':'','year':'','hour':'','minute':'','second':''};this[a17_0x3a6d('0x5')]={'day':'','month':'','year':'','hour':'','minute':'','second':''};console[a17_0x3a6d('0x6')]('init\x20EventsService');this[a17_0x3a6d('0x7')]=_0x36a12e;this[a17_0x3a6d('0x8')]=_0x3adbd4;this[a17_0x3a6d('0x9')]=_0x1ac61c;this[a17_0x3a6d('0x7')]['createEvent']=this[a17_0x3a6d('0xa')][a17_0x3a6d('0xb')](this);this[a17_0x3a6d('0x8')][a17_0x3a6d('0xa')]=this[a17_0x3a6d('0xa')][a17_0x3a6d('0xb')](this);this[a17_0x3a6d('0x9')]['createEvent']=this[a17_0x3a6d('0xa')]['bind'](this);this[a17_0x3a6d('0xc')]=new Date();this[a17_0x3a6d('0x5')]=dateUtils_1[a17_0x3a6d('0xd')][a17_0x3a6d('0xe')](this[a17_0x3a6d('0xc')]);}[a17_0x3a6d('0xa')](_0x363786){try{this[a17_0x3a6d('0xf')]=new Date();this[a17_0x3a6d('0x4')]=dateUtils_1[a17_0x3a6d('0xd')][a17_0x3a6d('0xe')](this[a17_0x3a6d('0xf')]);const _0x14038b=this[a17_0x3a6d('0x10')](_0x363786);const _0x293514=this[a17_0x3a6d('0x11')](_0x14038b);}catch(_0x2fd95c){console['log'](_0x2fd95c);}}[a17_0x3a6d('0x10')](_0x6cd9b9){const _0x58a27e={'idViaje':a17_0x3a6d('0x12')+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x13')]+this[a17_0x3a6d('0x4')]['month']+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x14')]+'-'+this['eventDateParts'][a17_0x3a6d('0x15')]+this['eventDateParts'][a17_0x3a6d('0x16')]+this[a17_0x3a6d('0x4')]['second']+a17_0x3a6d('0x17'),'cedula':stationSettings_1[a17_0x3a6d('0x18')][a17_0x3a6d('0x19')]['driverDocument'],'codigoRuta':stationSettings_1[a17_0x3a6d('0x18')][a17_0x3a6d('0x19')][a17_0x3a6d('0x1a')],'ruta':stationSettings_1[a17_0x3a6d('0x18')][a17_0x3a6d('0x19')][a17_0x3a6d('0x1b')],'nit':stationSettings_1[a17_0x3a6d('0x18')]['settings'][a17_0x3a6d('0x1c')],'placa':stationSettings_1[a17_0x3a6d('0x18')][a17_0x3a6d('0x19')][a17_0x3a6d('0x1d')],'inicio_viaje':this['eventDateParts'][a17_0x3a6d('0x14')]+'/'+this[a17_0x3a6d('0x4')]['month']+'/'+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x13')]+'\x20'+this[a17_0x3a6d('0x4')]['hour']+':'+this['eventDateParts'][a17_0x3a6d('0x16')]+':'+this[a17_0x3a6d('0x4')]['second'],'fin_viaje':'','estado':'0','eventos':[{'archivo_enviado':![],'fecha':this[a17_0x3a6d('0x4')][a17_0x3a6d('0x13')]+this['eventDateParts'][a17_0x3a6d('0x1e')]+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x14')],'hora':this['eventDateParts'][a17_0x3a6d('0x15')]+this[a17_0x3a6d('0x4')]['minute']+this['eventDateParts'][a17_0x3a6d('0x1f')],'dop':this['gpsService'][a17_0x3a6d('0x20')][a17_0x3a6d('0x21')],'longitud':this[a17_0x3a6d('0x7')][a17_0x3a6d('0x20')][a17_0x3a6d('0x22')],'latitud':this[a17_0x3a6d('0x7')]['locationParts']['latitude'],'velocidad':this['gpsService']['locationParts'][a17_0x3a6d('0x23')],'puerta':[{'estado':this[a17_0x3a6d('0x8')][a17_0x3a6d('0x24')],'idPuerta':0x0,'ingresos':_0x6cd9b9!=null?_0x6cd9b9['CountingInfo'][0x0]['In']:0x0,'salidas':_0x6cd9b9!=null?_0x6cd9b9[a17_0x3a6d('0x25')][0x0][a17_0x3a6d('0x26')]:0x0},{'estado':0x0,'idPuerta':0x1,'ingresos':0x0,'salidas':0x0}]}]};return _0x58a27e;}[a17_0x3a6d('0x11')](_0x1e026a){const _0x4551f5=require('fs');const _0x390119=require(a17_0x3a6d('0x27'));const _0xfaf716=stationSettings_1[a17_0x3a6d('0x18')]['settings'][a17_0x3a6d('0x1c')]+stationSettings_1['StationContext'][a17_0x3a6d('0x19')][a17_0x3a6d('0x1d')]+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x14')]+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x1e')]+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x13')]+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x15')]+this['eventDateParts'][a17_0x3a6d('0x16')]+this[a17_0x3a6d('0x4')][a17_0x3a6d('0x1f')];const _0xaf01f4=stationSettings_1['StationContext'][a17_0x3a6d('0x19')][a17_0x3a6d('0x28')]+_0xfaf716;const _0x4b12f5=JSON['stringify'](_0x1e026a);_0x4551f5['writeFile'](_0xaf01f4,_0x4b12f5,_0x3e58fa=>{if(_0x3e58fa)return console[a17_0x3a6d('0x29')](_0x3e58fa);const _0x20c6ae=_0xaf01f4+a17_0x3a6d('0x2a');const _0x339e28=_0x390119[a17_0x3a6d('0x2b')]();const _0x4c2ef6=_0x4551f5[a17_0x3a6d('0x2c')](_0xaf01f4);const _0x513f36=_0x4551f5[a17_0x3a6d('0x2d')](_0x20c6ae);_0x4c2ef6[a17_0x3a6d('0x2e')](_0x339e28)['pipe'](_0x513f36)['on'](a17_0x3a6d('0x2f'),_0x3e58fa=>{if(_0x3e58fa)return console['error'](_0x3e58fa);else{if(_0x4551f5['existsSync'](_0xaf01f4)){_0x4551f5[a17_0x3a6d('0x30')](_0xaf01f4,_0x3e58fa=>{if(_0x3e58fa)throw _0x3e58fa;console[a17_0x3a6d('0x6')](a17_0x3a6d('0x31')+_0xaf01f4);});}console[a17_0x3a6d('0x6')]('successfully\x20created\x20'+_0x20c6ae);return _0x20c6ae;}});});}}exports[a17_0x3a6d('0x32')]=EventsService;