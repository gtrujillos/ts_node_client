var a14_0x49c1=['eventDate','createJson','createFile','year','month','hour','minute','second','-00001','StationContext','settings','routeCode','routeName','nit','plate','locationParts','longitude','latitude','speed','doorStatus','CountingInfo','day','error','.gz','createGzip','createReadStream','createWriteStream','pipe','finish','existsSync','unlink','successfully\x20deleted\x20','successfully\x20created\x20','EventsService','defineProperty','__esModule','../infrastructure/stationSettings','../infrastructure/utils/dateUtils','request','eventDateParts','startDateParts','gpsService','sensorsService','countingWebSocketService','createEvent','bind','startDate','DateUtils','getDateParts'];(function(_0x40c4eb,_0x441f2c){var _0x51a2bf=function(_0x235f58){while(--_0x235f58){_0x40c4eb['push'](_0x40c4eb['shift']());}};_0x51a2bf(++_0x441f2c);}(a14_0x49c1,0x148));var a14_0x2bed=function(_0x26f056,_0x4be743){_0x26f056=_0x26f056-0x0;var _0x2dda9f=a14_0x49c1[_0x26f056];return _0x2dda9f;};'use strict';Object[a14_0x2bed('0x0')](exports,a14_0x2bed('0x1'),{'value':!![]});const stationSettings_1=require(a14_0x2bed('0x2'));const dateUtils_1=require(a14_0x2bed('0x3'));const fs=require('fs');const request=require(a14_0x2bed('0x4'));class EventsService{constructor(_0xc7adb2,_0x36b7ed,_0x41884c){this[a14_0x2bed('0x5')]={'day':'','month':'','year':'','hour':'','minute':'','second':''};this[a14_0x2bed('0x6')]={'day':'','month':'','year':'','hour':'','minute':'','second':''};this[a14_0x2bed('0x7')]=_0xc7adb2;this[a14_0x2bed('0x8')]=_0x36b7ed;this[a14_0x2bed('0x9')]=_0x41884c;this[a14_0x2bed('0x7')]['createEvent']=this[a14_0x2bed('0xa')]['bind'](this);this[a14_0x2bed('0x8')][a14_0x2bed('0xa')]=this['createEvent']['bind'](this);this[a14_0x2bed('0x9')][a14_0x2bed('0xa')]=this[a14_0x2bed('0xa')][a14_0x2bed('0xb')](this);this[a14_0x2bed('0xc')]=new Date();this[a14_0x2bed('0x6')]=dateUtils_1['DateUtils']['getDateParts'](this['startDate']);}[a14_0x2bed('0xa')](_0x13f03f){try{this['eventDate']=new Date();this[a14_0x2bed('0x5')]=dateUtils_1[a14_0x2bed('0xd')][a14_0x2bed('0xe')](this[a14_0x2bed('0xf')]);const _0x3e5cda=this[a14_0x2bed('0x10')](_0x13f03f);const _0x56aa7e=this[a14_0x2bed('0x11')](_0x3e5cda);}catch(_0x25c5b8){console['log'](_0x25c5b8);}}['createJson'](_0x243990){const _0x3eb0f1={'idViaje':'1-71767930-'+this['eventDateParts'][a14_0x2bed('0x12')]+this[a14_0x2bed('0x5')][a14_0x2bed('0x13')]+this[a14_0x2bed('0x5')]['day']+'-'+this[a14_0x2bed('0x5')][a14_0x2bed('0x14')]+this['eventDateParts'][a14_0x2bed('0x15')]+this[a14_0x2bed('0x5')][a14_0x2bed('0x16')]+a14_0x2bed('0x17'),'cedula':stationSettings_1[a14_0x2bed('0x18')][a14_0x2bed('0x19')]['driverDocument'],'codigoRuta':stationSettings_1[a14_0x2bed('0x18')][a14_0x2bed('0x19')][a14_0x2bed('0x1a')],'ruta':stationSettings_1['StationContext'][a14_0x2bed('0x19')][a14_0x2bed('0x1b')],'nit':stationSettings_1['StationContext']['settings'][a14_0x2bed('0x1c')],'placa':stationSettings_1[a14_0x2bed('0x18')][a14_0x2bed('0x19')][a14_0x2bed('0x1d')],'inicio_viaje':this[a14_0x2bed('0x5')]['day']+'/'+this[a14_0x2bed('0x5')][a14_0x2bed('0x13')]+'/'+this[a14_0x2bed('0x5')]['year']+'\x20'+this[a14_0x2bed('0x5')][a14_0x2bed('0x14')]+':'+this[a14_0x2bed('0x5')][a14_0x2bed('0x15')]+':'+this[a14_0x2bed('0x5')][a14_0x2bed('0x16')],'fin_viaje':'','estado':'0','eventos':[{'archivo_enviado':![],'fecha':this['eventDateParts']['year']+this[a14_0x2bed('0x5')][a14_0x2bed('0x13')]+this[a14_0x2bed('0x5')]['day'],'hora':this['eventDateParts'][a14_0x2bed('0x14')]+this[a14_0x2bed('0x5')][a14_0x2bed('0x15')]+this['eventDateParts']['second'],'dop':this['gpsService'][a14_0x2bed('0x1e')]['hdop'],'longitud':this['gpsService']['locationParts'][a14_0x2bed('0x1f')],'latitud':this[a14_0x2bed('0x7')][a14_0x2bed('0x1e')][a14_0x2bed('0x20')],'velocidad':this[a14_0x2bed('0x7')][a14_0x2bed('0x1e')][a14_0x2bed('0x21')],'puerta':[{'estado':this[a14_0x2bed('0x8')][a14_0x2bed('0x22')],'idPuerta':0x0,'ingresos':_0x243990!=null?_0x243990[a14_0x2bed('0x23')][0x0]['In']:0x0,'salidas':_0x243990!=null?_0x243990[a14_0x2bed('0x23')][0x0]['Out']:0x0},{'estado':0x0,'idPuerta':0x1,'ingresos':0x0,'salidas':0x0}]}]};return _0x3eb0f1;}[a14_0x2bed('0x11')](_0x41e975){const _0x5b7a1d=require('fs');const _0x3e9e85=require('zlib');const _0x18a7b3=stationSettings_1[a14_0x2bed('0x18')][a14_0x2bed('0x19')][a14_0x2bed('0x1c')]+stationSettings_1[a14_0x2bed('0x18')]['settings'][a14_0x2bed('0x1d')]+this[a14_0x2bed('0x5')][a14_0x2bed('0x24')]+this[a14_0x2bed('0x5')][a14_0x2bed('0x13')]+this[a14_0x2bed('0x5')]['year']+this[a14_0x2bed('0x5')][a14_0x2bed('0x14')]+this[a14_0x2bed('0x5')][a14_0x2bed('0x15')]+this[a14_0x2bed('0x5')]['second'];const _0xbd7e19=stationSettings_1['StationContext'][a14_0x2bed('0x19')]['eventFileFolder']+_0x18a7b3;const _0x49b31e=JSON['stringify'](_0x41e975);_0x5b7a1d['writeFile'](_0xbd7e19,_0x49b31e,_0x37f0f6=>{if(_0x37f0f6)return console[a14_0x2bed('0x25')](_0x37f0f6);const _0x550fb9=_0xbd7e19+a14_0x2bed('0x26');const _0x110808=_0x3e9e85[a14_0x2bed('0x27')]();const _0x20cad1=_0x5b7a1d[a14_0x2bed('0x28')](_0xbd7e19);const _0x598a5a=_0x5b7a1d[a14_0x2bed('0x29')](_0x550fb9);_0x20cad1[a14_0x2bed('0x2a')](_0x110808)[a14_0x2bed('0x2a')](_0x598a5a)['on'](a14_0x2bed('0x2b'),_0x37f0f6=>{if(_0x37f0f6)return console[a14_0x2bed('0x25')](_0x37f0f6);else{if(_0x5b7a1d[a14_0x2bed('0x2c')](_0xbd7e19)){_0x5b7a1d[a14_0x2bed('0x2d')](_0xbd7e19,_0x37f0f6=>{if(_0x37f0f6)throw _0x37f0f6;console['log'](a14_0x2bed('0x2e')+_0xbd7e19);});}console['log'](a14_0x2bed('0x2f')+_0x550fb9);return _0x550fb9;}});});}}exports[a14_0x2bed('0x30')]=EventsService;