var a17_0x4665=['GPS_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','sensorsService','SensorsService','gpsService','GPSService','serialPortService','CountingWebSocketService','eventsService','EventsService','countingWebSocketService','syncService','SyncEventsService','syncPlaylistsService','mqttService','MainService','defineProperty','__esModule','./serialPortService','./gpsService','./CountingWebsocketService','./eventsService','./syncPlaylistsService','./mqttService','init','env','SENSORS_SERVICE_ENABLED','true'];(function(_0x1c2563,_0x331bc7){var _0x2eb41c=function(_0x1fc990){while(--_0x1fc990){_0x1c2563['push'](_0x1c2563['shift']());}};_0x2eb41c(++_0x331bc7);}(a17_0x4665,0xc6));var a17_0x5b90=function(_0x4f1600,_0x518e0c){_0x4f1600=_0x4f1600-0x0;var _0x4b9193=a17_0x4665[_0x4f1600];return _0x4b9193;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a17_0x5b90('0x0')](exports,a17_0x5b90('0x1'),{'value':!![]});const serialPortService_1=require(a17_0x5b90('0x2'));const gpsService_1=require(a17_0x5b90('0x3'));const CountingWebsocketService_1=require(a17_0x5b90('0x4'));const syncEventsService_1=require('./syncEventsService');const sensorsService_1=require('./sensorsService');const eventsService_1=require(a17_0x5b90('0x5'));const syncPlaylistsService_1=require(a17_0x5b90('0x6'));const mqttService_1=require(a17_0x5b90('0x7'));class MainService{constructor(_0x563c0b){}[a17_0x5b90('0x8')](){const _0x462f7f=process[a17_0x5b90('0x9')][a17_0x5b90('0xa')]==a17_0x5b90('0xb');const _0x141471=process[a17_0x5b90('0x9')][a17_0x5b90('0xc')]==a17_0x5b90('0xb');const _0x237594=process['env']['SERIAL_PORT_SERVICE_ENABLED']==a17_0x5b90('0xb');const _0x388b5d=process[a17_0x5b90('0x9')][a17_0x5b90('0xd')]==a17_0x5b90('0xb');const _0x137470=process['env'][a17_0x5b90('0xe')]==a17_0x5b90('0xb');const _0x562ce6=process[a17_0x5b90('0x9')]['SYNC_EVENTS_SERVICE_ENABLED']==a17_0x5b90('0xb');const _0xb0f011=process[a17_0x5b90('0x9')][a17_0x5b90('0xf')]==a17_0x5b90('0xb');const _0x119447=process['env']['MQTT_SERVICE_ENABLED']==a17_0x5b90('0xb');if(_0x462f7f){this[a17_0x5b90('0x10')]=new sensorsService_1[(a17_0x5b90('0x11'))]();this[a17_0x5b90('0x10')][a17_0x5b90('0x8')]();}if(_0x141471){this[a17_0x5b90('0x12')]=new gpsService_1[(a17_0x5b90('0x13'))]();this[a17_0x5b90('0x12')][a17_0x5b90('0x8')]();}if(_0x237594){this[a17_0x5b90('0x14')]=new serialPortService_1['SerialPortService'](this[a17_0x5b90('0x12')]);this[a17_0x5b90('0x14')][a17_0x5b90('0x8')]();}if(_0x388b5d){this['countingWebSocketService']=new CountingWebsocketService_1[(a17_0x5b90('0x15'))]();this['countingWebSocketService'][a17_0x5b90('0x8')]();}if(_0x137470){this[a17_0x5b90('0x16')]=new eventsService_1[(a17_0x5b90('0x17'))](this[a17_0x5b90('0x12')],this[a17_0x5b90('0x10')],this[a17_0x5b90('0x18')]);}if(_0x562ce6){this[a17_0x5b90('0x19')]=new syncEventsService_1[(a17_0x5b90('0x1a'))]();this[a17_0x5b90('0x19')][a17_0x5b90('0x8')]();}if(_0xb0f011){this[a17_0x5b90('0x1b')]=new syncPlaylistsService_1['SyncPlaylistsService']();this[a17_0x5b90('0x1b')][a17_0x5b90('0x8')]();}if(_0x119447){this['mqttService']=new mqttService_1['MqttService'](this[a17_0x5b90('0x1b')]);this[a17_0x5b90('0x1c')][a17_0x5b90('0x8')]();}}}exports[a17_0x5b90('0x1d')]=MainService;