var a17_0x5cab=['EventsService','syncService','SyncEventsService','SyncPlaylistsService','syncPlaylistsService','mqttService','MqttService','defineProperty','__esModule','./gpsService','./CountingWebsocketService','./syncEventsService','./syncPlaylistsService','./mqttService','init','env','SENSORS_SERVICE_ENABLED','GPS_SERVICE_ENABLED','true','SERIAL_PORT_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','MQTT_SERVICE_ENABLED','sensorsService','SensorsService','GPSService','gpsService','serialPortService','countingWebSocketService','CountingWebSocketService','eventsService'];(function(_0x2f2c3a,_0x4ff962){var _0xc80322=function(_0x4d0da1){while(--_0x4d0da1){_0x2f2c3a['push'](_0x2f2c3a['shift']());}};_0xc80322(++_0x4ff962);}(a17_0x5cab,0xa7));var a17_0x3294=function(_0xa7ff21,_0xca8905){_0xa7ff21=_0xa7ff21-0x0;var _0x1f2d6d=a17_0x5cab[_0xa7ff21];return _0x1f2d6d;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a17_0x3294('0x0')](exports,a17_0x3294('0x1'),{'value':!![]});const serialPortService_1=require('./serialPortService');const gpsService_1=require(a17_0x3294('0x2'));const CountingWebsocketService_1=require(a17_0x3294('0x3'));const syncEventsService_1=require(a17_0x3294('0x4'));const sensorsService_1=require('./sensorsService');const eventsService_1=require('./eventsService');const syncPlaylistsService_1=require(a17_0x3294('0x5'));const mqttService_1=require(a17_0x3294('0x6'));class MainService{constructor(_0x5b1709){}[a17_0x3294('0x7')](){const _0x408cab=process[a17_0x3294('0x8')][a17_0x3294('0x9')]=='true';const _0x459303=process[a17_0x3294('0x8')][a17_0x3294('0xa')]==a17_0x3294('0xb');const _0xc8c578=process[a17_0x3294('0x8')][a17_0x3294('0xc')]=='true';const _0x42977a=process[a17_0x3294('0x8')][a17_0x3294('0xd')]==a17_0x3294('0xb');const _0x280db0=process[a17_0x3294('0x8')]['EVENTS_SERVICE_ENABLED']=='true';const _0xbca31c=process[a17_0x3294('0x8')][a17_0x3294('0xe')]==a17_0x3294('0xb');const _0x19f80f=process['env'][a17_0x3294('0xf')]=='true';const _0x14f85a=process['env'][a17_0x3294('0x10')]==a17_0x3294('0xb');if(_0x408cab){this[a17_0x3294('0x11')]=new sensorsService_1[(a17_0x3294('0x12'))]();this[a17_0x3294('0x11')][a17_0x3294('0x7')]();}if(_0x459303){this['gpsService']=new gpsService_1[(a17_0x3294('0x13'))]();this[a17_0x3294('0x14')][a17_0x3294('0x7')]();}if(_0xc8c578){this['serialPortService']=new serialPortService_1['SerialPortService'](this['gpsService']);this[a17_0x3294('0x15')][a17_0x3294('0x7')]();}if(_0x42977a){this[a17_0x3294('0x16')]=new CountingWebsocketService_1[(a17_0x3294('0x17'))]();this['countingWebSocketService']['init']();}if(_0x280db0){this[a17_0x3294('0x18')]=new eventsService_1[(a17_0x3294('0x19'))](this[a17_0x3294('0x14')],this['sensorsService'],this['countingWebSocketService']);}if(_0xbca31c){this[a17_0x3294('0x1a')]=new syncEventsService_1[(a17_0x3294('0x1b'))]();this[a17_0x3294('0x1a')]['init']();}if(_0x19f80f){this['syncPlaylistsService']=new syncPlaylistsService_1[(a17_0x3294('0x1c'))]();this[a17_0x3294('0x1d')]['init']();}if(_0x14f85a){this[a17_0x3294('0x1e')]=new mqttService_1[(a17_0x3294('0x1f'))](this[a17_0x3294('0x1d')]);this[a17_0x3294('0x1e')][a17_0x3294('0x7')]();}}}exports['MainService']=MainService;