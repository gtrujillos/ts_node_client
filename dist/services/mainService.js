var a19_0x1e35=['MainService','defineProperty','__esModule','./serialPortService','./gpsService','./CountingWebsocketService','./syncEventsService','./sensorsService','./eventsService','./syncPlaylistsService','./videoService','./syncVehicleService','init','env','true','GPS_SERVICE_ENABLED','SERIAL_PORT_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_VEHICLE_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','MQTT_SERVICE_ENABLED','VIDEO_SERVICE_ENABLED','sensorsService','SensorsService','gpsService','GPSService','SerialPortService','serialPortService','countingWebSocketService','CountingWebSocketService','eventsService','SyncEventsService','syncPlaylistsService','SyncPlaylistsService','syncVehicleService','SyncVehicleService','mqttService','MqttService','videoService'];(function(_0x5566d9,_0x1e4484){var _0x1f79f3=function(_0x46ce80){while(--_0x46ce80){_0x5566d9['push'](_0x5566d9['shift']());}};_0x1f79f3(++_0x1e4484);}(a19_0x1e35,0x1e1));var a19_0x5a05=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a19_0x1e35[_0x2d8f05];return _0x4d74cb;};'use strict';Object[a19_0x5a05('0x0')](exports,a19_0x5a05('0x1'),{'value':!![]});const serialPortService_1=require(a19_0x5a05('0x2'));const gpsService_1=require(a19_0x5a05('0x3'));const CountingWebsocketService_1=require(a19_0x5a05('0x4'));const syncEventsService_1=require(a19_0x5a05('0x5'));const sensorsService_1=require(a19_0x5a05('0x6'));const eventsService_1=require(a19_0x5a05('0x7'));const syncPlaylistsService_1=require(a19_0x5a05('0x8'));const mqttService_1=require('./mqttService');const videoService_1=require(a19_0x5a05('0x9'));const syncVehicleService_1=require(a19_0x5a05('0xa'));class MainService{constructor(_0x3d0c7c){}[a19_0x5a05('0xb')](){const _0x2722a3=process[a19_0x5a05('0xc')]['SENSORS_SERVICE_ENABLED']==a19_0x5a05('0xd');const _0x3c58eb=process[a19_0x5a05('0xc')][a19_0x5a05('0xe')]=='true';const _0x744bea=process[a19_0x5a05('0xc')][a19_0x5a05('0xf')]==a19_0x5a05('0xd');const _0xbda126=process[a19_0x5a05('0xc')]['COUNTING_WEBSOCKET_SERVICE_ENABLED']==a19_0x5a05('0xd');const _0x1cad37=process['env'][a19_0x5a05('0x10')]==a19_0x5a05('0xd');const _0x18c8a3=process[a19_0x5a05('0xc')][a19_0x5a05('0x11')]==a19_0x5a05('0xd');const _0x341672=process['env'][a19_0x5a05('0x12')]==a19_0x5a05('0xd');const _0x581f22=process[a19_0x5a05('0xc')][a19_0x5a05('0x13')]==a19_0x5a05('0xd');const _0x385f00=process[a19_0x5a05('0xc')][a19_0x5a05('0x14')]==a19_0x5a05('0xd');const _0x4cc004=process['env'][a19_0x5a05('0x15')]==a19_0x5a05('0xd');if(_0x2722a3){this[a19_0x5a05('0x16')]=new sensorsService_1[(a19_0x5a05('0x17'))]();this[a19_0x5a05('0x16')][a19_0x5a05('0xb')]();}if(_0x3c58eb){this[a19_0x5a05('0x18')]=new gpsService_1[(a19_0x5a05('0x19'))]();this['gpsService'][a19_0x5a05('0xb')]();}if(_0x744bea){this['serialPortService']=new serialPortService_1[(a19_0x5a05('0x1a'))](this[a19_0x5a05('0x18')]);this[a19_0x5a05('0x1b')][a19_0x5a05('0xb')]();}if(_0xbda126){this[a19_0x5a05('0x1c')]=new CountingWebsocketService_1[(a19_0x5a05('0x1d'))]();this['countingWebSocketService']['init']();}if(_0x1cad37){this[a19_0x5a05('0x1e')]=new eventsService_1['EventsService'](this['gpsService'],this[a19_0x5a05('0x16')],this[a19_0x5a05('0x1c')]);}if(_0x341672){this['syncService']=new syncEventsService_1[(a19_0x5a05('0x1f'))]();this['syncService']['init']();}if(_0x581f22){this[a19_0x5a05('0x20')]=new syncPlaylistsService_1[(a19_0x5a05('0x21'))]();this[a19_0x5a05('0x20')][a19_0x5a05('0xb')]();}if(_0x18c8a3){this[a19_0x5a05('0x22')]=new syncVehicleService_1[(a19_0x5a05('0x23'))](this['gpsService']);this[a19_0x5a05('0x22')][a19_0x5a05('0xb')]();}if(_0x385f00){this[a19_0x5a05('0x24')]=new mqttService_1[(a19_0x5a05('0x25'))](this[a19_0x5a05('0x20')]);this[a19_0x5a05('0x24')][a19_0x5a05('0xb')]();}if(_0x4cc004){this[a19_0x5a05('0x26')]=new videoService_1['VideoService']();this[a19_0x5a05('0x26')][a19_0x5a05('0xb')]();}}}exports[a19_0x5a05('0x27')]=MainService;