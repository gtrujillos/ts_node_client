var a19_0x20b2=['./syncVehicleService','init','SENSORS_SERVICE_ENABLED','true','env','SERIAL_PORT_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','MQTT_SERVICE_ENABLED','VIDEO_SERVICE_ENABLED','sensorsService','gpsService','GPSService','serialPortService','SerialPortService','countingWebSocketService','eventsService','EventsService','syncService','SyncEventsService','syncPlaylistsService','syncVehicleService','mqttService','VideoService','videoService','MainService','defineProperty','__esModule','./serialPortService','./CountingWebsocketService','./syncEventsService','./sensorsService','./syncPlaylistsService','./mqttService','./videoService'];(function(_0xa8c0c2,_0xff7d93){var _0x398635=function(_0x1010c1){while(--_0x1010c1){_0xa8c0c2['push'](_0xa8c0c2['shift']());}};_0x398635(++_0xff7d93);}(a19_0x20b2,0x117));var a19_0x1b95=function(_0x315eac,_0x933568){_0x315eac=_0x315eac-0x0;var _0x2d069a=a19_0x20b2[_0x315eac];return _0x2d069a;};'use strict';Object[a19_0x1b95('0x0')](exports,a19_0x1b95('0x1'),{'value':!![]});const serialPortService_1=require(a19_0x1b95('0x2'));const gpsService_1=require('./gpsService');const CountingWebsocketService_1=require(a19_0x1b95('0x3'));const syncEventsService_1=require(a19_0x1b95('0x4'));const sensorsService_1=require(a19_0x1b95('0x5'));const eventsService_1=require('./eventsService');const syncPlaylistsService_1=require(a19_0x1b95('0x6'));const mqttService_1=require(a19_0x1b95('0x7'));const videoService_1=require(a19_0x1b95('0x8'));const syncVehicleService_1=require(a19_0x1b95('0x9'));class MainService{constructor(_0x3b5cdb){}[a19_0x1b95('0xa')](){const _0x5012ac=process['env'][a19_0x1b95('0xb')]==a19_0x1b95('0xc');const _0x48a116=process[a19_0x1b95('0xd')]['GPS_SERVICE_ENABLED']=='true';const _0x1833e3=process[a19_0x1b95('0xd')][a19_0x1b95('0xe')]==a19_0x1b95('0xc');const _0x1d9ade=process[a19_0x1b95('0xd')][a19_0x1b95('0xf')]=='true';const _0x50f909=process['env'][a19_0x1b95('0x10')]==a19_0x1b95('0xc');const _0xd68cd7=process[a19_0x1b95('0xd')]['SYNC_VEHICLE_SERVICE_ENABLED']=='true';const _0x113243=process[a19_0x1b95('0xd')]['SYNC_EVENTS_SERVICE_ENABLED']==a19_0x1b95('0xc');const _0x35aa19=process[a19_0x1b95('0xd')][a19_0x1b95('0x11')]==a19_0x1b95('0xc');const _0x3b898d=process[a19_0x1b95('0xd')][a19_0x1b95('0x12')]==a19_0x1b95('0xc');const _0xa2cf72=process[a19_0x1b95('0xd')][a19_0x1b95('0x13')]==a19_0x1b95('0xc');if(_0x5012ac){this['sensorsService']=new sensorsService_1['SensorsService']();this[a19_0x1b95('0x14')][a19_0x1b95('0xa')]();}if(_0x48a116){this[a19_0x1b95('0x15')]=new gpsService_1[(a19_0x1b95('0x16'))]();this['gpsService'][a19_0x1b95('0xa')]();}if(_0x1833e3){this[a19_0x1b95('0x17')]=new serialPortService_1[(a19_0x1b95('0x18'))](this[a19_0x1b95('0x15')]);this[a19_0x1b95('0x17')][a19_0x1b95('0xa')]();}if(_0x1d9ade){this[a19_0x1b95('0x19')]=new CountingWebsocketService_1['CountingWebSocketService']();this[a19_0x1b95('0x19')][a19_0x1b95('0xa')]();}if(_0x50f909){this[a19_0x1b95('0x1a')]=new eventsService_1[(a19_0x1b95('0x1b'))](this[a19_0x1b95('0x15')],this[a19_0x1b95('0x14')],this['countingWebSocketService']);}if(_0x113243){this[a19_0x1b95('0x1c')]=new syncEventsService_1[(a19_0x1b95('0x1d'))]();this[a19_0x1b95('0x1c')][a19_0x1b95('0xa')]();}if(_0x35aa19){this[a19_0x1b95('0x1e')]=new syncPlaylistsService_1['SyncPlaylistsService']();this[a19_0x1b95('0x1e')]['init']();}if(_0xd68cd7){this[a19_0x1b95('0x1f')]=new syncVehicleService_1['SyncVehicleService'](this[a19_0x1b95('0x15')]);this['syncVehicleService'][a19_0x1b95('0xa')]();}if(_0x3b898d){this[a19_0x1b95('0x20')]=new mqttService_1['MqttService'](this[a19_0x1b95('0x1e')]);this['mqttService'][a19_0x1b95('0xa')]();}if(_0xa2cf72){this['videoService']=new videoService_1[(a19_0x1b95('0x21'))]();this[a19_0x1b95('0x22')][a19_0x1b95('0xa')]();}}}exports[a19_0x1b95('0x23')]=MainService;