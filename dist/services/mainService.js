var a22_0x179d=['sensorsService','SensorsService','getInstance','gpsService','GPSService','serialPortService','countingWebSocketService','EventsService','syncService','syncPlaylistsService','SyncPlaylistsService','syncVehicleService','MqttService','videoService','MainService','defineProperty','./serialPortService','./gpsService','./CountingWebsocketService','./syncEventsService','./eventsService','./syncPlaylistsService','./mqttService','./videoService','init','env','SENSORS_SERVICE_ENABLED','true','GPS_SERVICE_ENABLED','SERIAL_PORT_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','MQTT_SERVICE_ENABLED','VIDEO_SERVICE_ENABLED'];(function(_0x43aa70,_0xf26100){var _0x291727=function(_0x1610ea){while(--_0x1610ea){_0x43aa70['push'](_0x43aa70['shift']());}};_0x291727(++_0xf26100);}(a22_0x179d,0x177));var a22_0x800b=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a22_0x179d[_0x2d8f05];return _0x4d74cb;};'use strict';Object[a22_0x800b('0x0')](exports,'__esModule',{'value':!![]});const serialPortService_1=require(a22_0x800b('0x1'));const gpsService_1=require(a22_0x800b('0x2'));const CountingWebsocketService_1=require(a22_0x800b('0x3'));const syncEventsService_1=require(a22_0x800b('0x4'));const sensorsService_1=require('./sensorsService');const eventsService_1=require(a22_0x800b('0x5'));const syncPlaylistsService_1=require(a22_0x800b('0x6'));const mqttService_1=require(a22_0x800b('0x7'));const videoService_1=require(a22_0x800b('0x8'));const syncVehicleService_1=require('./syncVehicleService');class MainService{constructor(){}[a22_0x800b('0x9')](){const _0x39d2ee=process[a22_0x800b('0xa')][a22_0x800b('0xb')]==a22_0x800b('0xc');const _0xfcfef3=process[a22_0x800b('0xa')][a22_0x800b('0xd')]==a22_0x800b('0xc');const _0x42bb0d=process[a22_0x800b('0xa')][a22_0x800b('0xe')]==a22_0x800b('0xc');const _0x4c71d1=process[a22_0x800b('0xa')][a22_0x800b('0xf')]==a22_0x800b('0xc');const _0x430ed0=process[a22_0x800b('0xa')][a22_0x800b('0x10')]==a22_0x800b('0xc');const _0x724667=process[a22_0x800b('0xa')]['SYNC_VEHICLE_SERVICE_ENABLED']==a22_0x800b('0xc');const _0x2982da=process[a22_0x800b('0xa')][a22_0x800b('0x11')]==a22_0x800b('0xc');const _0x27fe35=process[a22_0x800b('0xa')][a22_0x800b('0x12')]==a22_0x800b('0xc');const _0x2d6957=process[a22_0x800b('0xa')][a22_0x800b('0x13')]==a22_0x800b('0xc');const _0x2befc3=process[a22_0x800b('0xa')][a22_0x800b('0x14')]==a22_0x800b('0xc');if(_0x39d2ee){this[a22_0x800b('0x15')]=sensorsService_1[a22_0x800b('0x16')][a22_0x800b('0x17')]();this[a22_0x800b('0x15')][a22_0x800b('0x9')]();}if(_0xfcfef3){this[a22_0x800b('0x18')]=gpsService_1[a22_0x800b('0x19')]['getInstance']();this[a22_0x800b('0x18')]['init']();}if(_0x42bb0d){this[a22_0x800b('0x1a')]=new serialPortService_1['SerialPortService']();this['serialPortService'][a22_0x800b('0x9')]();}if(_0x4c71d1){this[a22_0x800b('0x1b')]=new CountingWebsocketService_1['CountingWebSocketService']();this[a22_0x800b('0x1b')][a22_0x800b('0x9')]();}if(_0x430ed0){this['eventsService']=eventsService_1[a22_0x800b('0x1c')][a22_0x800b('0x17')]();}if(_0x2982da){this['syncService']=new syncEventsService_1['SyncEventsService']();this[a22_0x800b('0x1d')][a22_0x800b('0x9')]();}if(_0x27fe35){this[a22_0x800b('0x1e')]=new syncPlaylistsService_1[(a22_0x800b('0x1f'))]();this[a22_0x800b('0x1e')][a22_0x800b('0x9')]();}if(_0x724667){this[a22_0x800b('0x20')]=new syncVehicleService_1['SyncVehicleService'](this['gpsService']);this['syncVehicleService'][a22_0x800b('0x9')]();}if(_0x2d6957){this['mqttService']=new mqttService_1[(a22_0x800b('0x21'))](this['syncPlaylistsService']);this['mqttService'][a22_0x800b('0x9')]();}if(_0x2befc3){this[a22_0x800b('0x22')]=new videoService_1['VideoService']();this[a22_0x800b('0x22')][a22_0x800b('0x9')]();}}}exports[a22_0x800b('0x23')]=MainService;