var a19_0x2a1c=['SYNC_PLAYLISTS_SERVICE_ENABLED','VIDEO_SERVICE_ENABLED','sensorsService','SensorsService','gpsService','GPSService','serialPortService','SerialPortService','CountingWebSocketService','countingWebSocketService','eventsService','EventsService','syncService','SyncEventsService','syncPlaylistsService','SyncPlaylistsService','syncVehicleService','SyncVehicleService','mqttService','VideoService','videoService','MainService','defineProperty','__esModule','./serialPortService','./CountingWebsocketService','./syncEventsService','./sensorsService','./syncPlaylistsService','./mqttService','./videoService','./syncVehicleService','init','true','GPS_SERVICE_ENABLED','env','SERIAL_PORT_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_VEHICLE_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a19_0x2a1c,0x187));var a19_0x4475=function(_0x29a905,_0x5929ef){_0x29a905=_0x29a905-0x0;var _0x8a11ea=a19_0x2a1c[_0x29a905];return _0x8a11ea;};'use strict';Object[a19_0x4475('0x0')](exports,a19_0x4475('0x1'),{'value':!![]});const serialPortService_1=require(a19_0x4475('0x2'));const gpsService_1=require('./gpsService');const CountingWebsocketService_1=require(a19_0x4475('0x3'));const syncEventsService_1=require(a19_0x4475('0x4'));const sensorsService_1=require(a19_0x4475('0x5'));const eventsService_1=require('./eventsService');const syncPlaylistsService_1=require(a19_0x4475('0x6'));const mqttService_1=require(a19_0x4475('0x7'));const videoService_1=require(a19_0x4475('0x8'));const syncVehicleService_1=require(a19_0x4475('0x9'));class MainService{constructor(_0xe8473){}[a19_0x4475('0xa')](){const _0x4e78b4=process['env']['SENSORS_SERVICE_ENABLED']==a19_0x4475('0xb');const _0x267ea0=process['env'][a19_0x4475('0xc')]==a19_0x4475('0xb');const _0xcb02e3=process[a19_0x4475('0xd')][a19_0x4475('0xe')]==a19_0x4475('0xb');const _0x36b623=process['env'][a19_0x4475('0xf')]==a19_0x4475('0xb');const _0x57e069=process[a19_0x4475('0xd')][a19_0x4475('0x10')]=='true';const _0x5849ad=process[a19_0x4475('0xd')][a19_0x4475('0x11')]==a19_0x4475('0xb');const _0x5d8e5a=process[a19_0x4475('0xd')][a19_0x4475('0x12')]==a19_0x4475('0xb');const _0x70c2de=process[a19_0x4475('0xd')][a19_0x4475('0x13')]=='true';const _0x59d84a=process[a19_0x4475('0xd')]['MQTT_SERVICE_ENABLED']=='true';const _0x59ea8d=process[a19_0x4475('0xd')][a19_0x4475('0x14')]==a19_0x4475('0xb');if(_0x4e78b4){this[a19_0x4475('0x15')]=new sensorsService_1[(a19_0x4475('0x16'))]();this[a19_0x4475('0x15')]['init']();}if(_0x267ea0){this[a19_0x4475('0x17')]=new gpsService_1[(a19_0x4475('0x18'))]();this[a19_0x4475('0x17')][a19_0x4475('0xa')]();}if(_0xcb02e3){this[a19_0x4475('0x19')]=new serialPortService_1[(a19_0x4475('0x1a'))](this[a19_0x4475('0x17')]);this[a19_0x4475('0x19')][a19_0x4475('0xa')]();}if(_0x36b623){this['countingWebSocketService']=new CountingWebsocketService_1[(a19_0x4475('0x1b'))]();this[a19_0x4475('0x1c')][a19_0x4475('0xa')]();}if(_0x57e069){this[a19_0x4475('0x1d')]=new eventsService_1[(a19_0x4475('0x1e'))](this[a19_0x4475('0x17')],this['sensorsService'],this['countingWebSocketService']);}if(_0x5d8e5a){this[a19_0x4475('0x1f')]=new syncEventsService_1[(a19_0x4475('0x20'))]();this[a19_0x4475('0x1f')]['init']();}if(_0x70c2de){this[a19_0x4475('0x21')]=new syncPlaylistsService_1[(a19_0x4475('0x22'))]();this['syncPlaylistsService'][a19_0x4475('0xa')]();}if(_0x5849ad){this[a19_0x4475('0x23')]=new syncVehicleService_1[(a19_0x4475('0x24'))](this[a19_0x4475('0x17')]);this[a19_0x4475('0x23')]['init']();}if(_0x59d84a){this[a19_0x4475('0x25')]=new mqttService_1['MqttService'](this['syncPlaylistsService']);this['mqttService'][a19_0x4475('0xa')]();}if(_0x59ea8d){this['videoService']=new videoService_1[(a19_0x4475('0x26'))]();this[a19_0x4475('0x27')][a19_0x4475('0xa')]();}}}exports[a19_0x4475('0x28')]=MainService;