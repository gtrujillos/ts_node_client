var a19_0xe3fa=['videoService','defineProperty','__esModule','./gpsService','./CountingWebsocketService','./sensorsService','./eventsService','./mqttService','./videoService','./syncVehicleService','init','env','SENSORS_SERVICE_ENABLED','true','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_VEHICLE_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','MQTT_SERVICE_ENABLED','VIDEO_SERVICE_ENABLED','gpsService','GPSService','serialPortService','countingWebSocketService','CountingWebSocketService','eventsService','EventsService','syncService','SyncEventsService','syncPlaylistsService','SyncPlaylistsService','syncVehicleService','mqttService','MqttService','VideoService'];(function(_0x2b4b38,_0x5e2fbb){var _0x288354=function(_0x5a87a1){while(--_0x5a87a1){_0x2b4b38['push'](_0x2b4b38['shift']());}};_0x288354(++_0x5e2fbb);}(a19_0xe3fa,0xf6));var a19_0x446a=function(_0x121550,_0xbe6a0b){_0x121550=_0x121550-0x0;var _0x3f4bd8=a19_0xe3fa[_0x121550];return _0x3f4bd8;};'use strict';Object[a19_0x446a('0x0')](exports,a19_0x446a('0x1'),{'value':!![]});const serialPortService_1=require('./serialPortService');const gpsService_1=require(a19_0x446a('0x2'));const CountingWebsocketService_1=require(a19_0x446a('0x3'));const syncEventsService_1=require('./syncEventsService');const sensorsService_1=require(a19_0x446a('0x4'));const eventsService_1=require(a19_0x446a('0x5'));const syncPlaylistsService_1=require('./syncPlaylistsService');const mqttService_1=require(a19_0x446a('0x6'));const videoService_1=require(a19_0x446a('0x7'));const syncVehicleService_1=require(a19_0x446a('0x8'));class MainService{constructor(_0x8e2a24){}[a19_0x446a('0x9')](){const _0x5a8343=process[a19_0x446a('0xa')][a19_0x446a('0xb')]==a19_0x446a('0xc');const _0x91d024=process[a19_0x446a('0xa')]['GPS_SERVICE_ENABLED']==a19_0x446a('0xc');const _0x1d5fec=process[a19_0x446a('0xa')]['SERIAL_PORT_SERVICE_ENABLED']=='true';const _0x19a0d1=process['env'][a19_0x446a('0xd')]==a19_0x446a('0xc');const _0xc72d93=process[a19_0x446a('0xa')][a19_0x446a('0xe')]==a19_0x446a('0xc');const _0x2051ab=process['env'][a19_0x446a('0xf')]==a19_0x446a('0xc');const _0x4fdca1=process[a19_0x446a('0xa')][a19_0x446a('0x10')]=='true';const _0xda83fb=process[a19_0x446a('0xa')]['SYNC_PLAYLISTS_SERVICE_ENABLED']=='true';const _0x409357=process['env'][a19_0x446a('0x11')]==a19_0x446a('0xc');const _0x2a6ad2=process[a19_0x446a('0xa')][a19_0x446a('0x12')]=='true';if(_0x5a8343){this['sensorsService']=new sensorsService_1['SensorsService']();this['sensorsService'][a19_0x446a('0x9')]();}if(_0x91d024){this[a19_0x446a('0x13')]=new gpsService_1[(a19_0x446a('0x14'))]();this[a19_0x446a('0x13')][a19_0x446a('0x9')]();}if(_0x1d5fec){this[a19_0x446a('0x15')]=new serialPortService_1['SerialPortService'](this[a19_0x446a('0x13')]);this[a19_0x446a('0x15')]['init']();}if(_0x19a0d1){this[a19_0x446a('0x16')]=new CountingWebsocketService_1[(a19_0x446a('0x17'))]();this[a19_0x446a('0x16')]['init']();}if(_0xc72d93){this[a19_0x446a('0x18')]=new eventsService_1[(a19_0x446a('0x19'))](this[a19_0x446a('0x13')],this['sensorsService'],this[a19_0x446a('0x16')]);}if(_0x4fdca1){this[a19_0x446a('0x1a')]=new syncEventsService_1[(a19_0x446a('0x1b'))]();this[a19_0x446a('0x1a')][a19_0x446a('0x9')]();}if(_0xda83fb){this[a19_0x446a('0x1c')]=new syncPlaylistsService_1[(a19_0x446a('0x1d'))]();this[a19_0x446a('0x1c')][a19_0x446a('0x9')]();}if(_0x2051ab){this[a19_0x446a('0x1e')]=new syncVehicleService_1['SyncVehicleService'](this[a19_0x446a('0x13')]);this[a19_0x446a('0x1e')][a19_0x446a('0x9')]();}if(_0x409357){this[a19_0x446a('0x1f')]=new mqttService_1[(a19_0x446a('0x20'))](this['syncPlaylistsService']);this[a19_0x446a('0x1f')][a19_0x446a('0x9')]();}if(_0x2a6ad2){this['videoService']=new videoService_1[(a19_0x446a('0x21'))]();this[a19_0x446a('0x22')][a19_0x446a('0x9')]();}}}exports['MainService']=MainService;