var a19_0x136d=['SyncPlaylistsService','syncVehicleService','mqttService','MqttService','videoService','VideoService','MainService','__esModule','./serialPortService','./gpsService','./CountingWebsocketService','./mqttService','./syncVehicleService','env','SENSORS_SERVICE_ENABLED','true','SERIAL_PORT_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','VIDEO_SERVICE_ENABLED','sensorsService','SensorsService','GPSService','gpsService','init','serialPortService','CountingWebSocketService','countingWebSocketService','eventsService','EventsService','syncService','SyncEventsService','syncPlaylistsService'];(function(_0x3562b5,_0x22dabc){var _0x54d52d=function(_0x27bd3d){while(--_0x27bd3d){_0x3562b5['push'](_0x3562b5['shift']());}};_0x54d52d(++_0x22dabc);}(a19_0x136d,0x142));var a19_0x530e=function(_0x2f184b,_0x150adb){_0x2f184b=_0x2f184b-0x0;var _0x66a54d=a19_0x136d[_0x2f184b];return _0x66a54d;};'use strict';Object['defineProperty'](exports,a19_0x530e('0x0'),{'value':!![]});const serialPortService_1=require(a19_0x530e('0x1'));const gpsService_1=require(a19_0x530e('0x2'));const CountingWebsocketService_1=require(a19_0x530e('0x3'));const syncEventsService_1=require('./syncEventsService');const sensorsService_1=require('./sensorsService');const eventsService_1=require('./eventsService');const syncPlaylistsService_1=require('./syncPlaylistsService');const mqttService_1=require(a19_0x530e('0x4'));const videoService_1=require('./videoService');const syncVehicleService_1=require(a19_0x530e('0x5'));class MainService{constructor(_0x2b3a19){}['init'](){const _0x69b5e3=process[a19_0x530e('0x6')][a19_0x530e('0x7')]==a19_0x530e('0x8');const _0x115ab3=process['env']['GPS_SERVICE_ENABLED']==a19_0x530e('0x8');const _0xce17f9=process[a19_0x530e('0x6')][a19_0x530e('0x9')]==a19_0x530e('0x8');const _0xf7ff37=process[a19_0x530e('0x6')][a19_0x530e('0xa')]==a19_0x530e('0x8');const _0x2f99ed=process[a19_0x530e('0x6')][a19_0x530e('0xb')]==a19_0x530e('0x8');const _0x138740=process[a19_0x530e('0x6')]['SYNC_VEHICLE_SERVICE_ENABLED']==a19_0x530e('0x8');const _0x29bc8f=process[a19_0x530e('0x6')][a19_0x530e('0xc')]==a19_0x530e('0x8');const _0x409b37=process[a19_0x530e('0x6')][a19_0x530e('0xd')]=='true';const _0x2911ec=process[a19_0x530e('0x6')]['MQTT_SERVICE_ENABLED']==a19_0x530e('0x8');const _0x30da54=process[a19_0x530e('0x6')][a19_0x530e('0xe')]=='true';if(_0x69b5e3){this[a19_0x530e('0xf')]=new sensorsService_1[(a19_0x530e('0x10'))]();this['sensorsService']['init']();}if(_0x115ab3){this['gpsService']=new gpsService_1[(a19_0x530e('0x11'))]();this[a19_0x530e('0x12')][a19_0x530e('0x13')]();}if(_0xce17f9){this[a19_0x530e('0x14')]=new serialPortService_1['SerialPortService'](this[a19_0x530e('0x12')]);this['serialPortService'][a19_0x530e('0x13')]();}if(_0xf7ff37){this['countingWebSocketService']=new CountingWebsocketService_1[(a19_0x530e('0x15'))]();this[a19_0x530e('0x16')][a19_0x530e('0x13')]();}if(_0x2f99ed){this[a19_0x530e('0x17')]=new eventsService_1[(a19_0x530e('0x18'))](this[a19_0x530e('0x12')],this[a19_0x530e('0xf')],this[a19_0x530e('0x16')]);}if(_0x29bc8f){this[a19_0x530e('0x19')]=new syncEventsService_1[(a19_0x530e('0x1a'))]();this['syncService'][a19_0x530e('0x13')]();}if(_0x409b37){this[a19_0x530e('0x1b')]=new syncPlaylistsService_1[(a19_0x530e('0x1c'))]();this[a19_0x530e('0x1b')]['init']();}if(_0x138740){this[a19_0x530e('0x1d')]=new syncVehicleService_1['SyncVehicleService'](this[a19_0x530e('0x12')]);this[a19_0x530e('0x1d')][a19_0x530e('0x13')]();}if(_0x2911ec){this[a19_0x530e('0x1e')]=new mqttService_1[(a19_0x530e('0x1f'))](this[a19_0x530e('0x1b')]);this[a19_0x530e('0x1e')]['init']();}if(_0x30da54){this[a19_0x530e('0x20')]=new videoService_1[(a19_0x530e('0x21'))]();this[a19_0x530e('0x20')][a19_0x530e('0x13')]();}}}exports[a19_0x530e('0x22')]=MainService;