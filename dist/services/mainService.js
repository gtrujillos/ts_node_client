var a17_0x27e3=['syncService','SyncEventsService','syncPlaylistsService','SyncPlaylistsService','mqttService','MainService','defineProperty','__esModule','./serialPortService','./gpsService','./CountingWebsocketService','./sensorsService','./syncPlaylistsService','./mqttService','env','SENSORS_SERVICE_ENABLED','true','EVENTS_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','MQTT_SERVICE_ENABLED','sensorsService','SensorsService','init','gpsService','GPSService','serialPortService','SerialPortService','countingWebSocketService','eventsService'];(function(_0x3f7031,_0x184dff){var _0x5310eb=function(_0x4d9e70){while(--_0x4d9e70){_0x3f7031['push'](_0x3f7031['shift']());}};_0x5310eb(++_0x184dff);}(a17_0x27e3,0x1e6));var a17_0x4608=function(_0x282907,_0x2ddb97){_0x282907=_0x282907-0x0;var _0x3af526=a17_0x27e3[_0x282907];return _0x3af526;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a17_0x4608('0x0')](exports,a17_0x4608('0x1'),{'value':!![]});const serialPortService_1=require(a17_0x4608('0x2'));const gpsService_1=require(a17_0x4608('0x3'));const CountingWebsocketService_1=require(a17_0x4608('0x4'));const syncEventsService_1=require('./syncEventsService');const sensorsService_1=require(a17_0x4608('0x5'));const eventsService_1=require('./eventsService');const syncPlaylistsService_1=require(a17_0x4608('0x6'));const mqttService_1=require(a17_0x4608('0x7'));class MainService{constructor(_0x2292af){}['init'](){const _0x3e7f62=process[a17_0x4608('0x8')][a17_0x4608('0x9')]==a17_0x4608('0xa');const _0x5496f7=process[a17_0x4608('0x8')]['GPS_SERVICE_ENABLED']==a17_0x4608('0xa');const _0x3272f1=process[a17_0x4608('0x8')]['SERIAL_PORT_SERVICE_ENABLED']=='true';const _0x5d0e06=process[a17_0x4608('0x8')]['COUNTING_WEBSOCKET_SERVICE_ENABLED']==a17_0x4608('0xa');const _0x2e9f52=process[a17_0x4608('0x8')][a17_0x4608('0xb')]==a17_0x4608('0xa');const _0x41a3a8=process[a17_0x4608('0x8')][a17_0x4608('0xc')]=='true';const _0xbf2434=process[a17_0x4608('0x8')][a17_0x4608('0xd')]==a17_0x4608('0xa');const _0x54ec53=process[a17_0x4608('0x8')][a17_0x4608('0xe')]==a17_0x4608('0xa');if(_0x3e7f62){this[a17_0x4608('0xf')]=new sensorsService_1[(a17_0x4608('0x10'))]();this[a17_0x4608('0xf')][a17_0x4608('0x11')]();}if(_0x5496f7){this[a17_0x4608('0x12')]=new gpsService_1[(a17_0x4608('0x13'))]();this[a17_0x4608('0x12')][a17_0x4608('0x11')]();}if(_0x3272f1){this[a17_0x4608('0x14')]=new serialPortService_1[(a17_0x4608('0x15'))](this[a17_0x4608('0x12')]);this[a17_0x4608('0x14')]['init']();}if(_0x5d0e06){this[a17_0x4608('0x16')]=new CountingWebsocketService_1['CountingWebSocketService']();this[a17_0x4608('0x16')][a17_0x4608('0x11')]();}if(_0x2e9f52){this[a17_0x4608('0x17')]=new eventsService_1['EventsService'](this[a17_0x4608('0x12')],this[a17_0x4608('0xf')],this[a17_0x4608('0x16')]);}if(_0x41a3a8){this[a17_0x4608('0x18')]=new syncEventsService_1[(a17_0x4608('0x19'))]();this['syncService']['init']();}if(_0xbf2434){this[a17_0x4608('0x1a')]=new syncPlaylistsService_1[(a17_0x4608('0x1b'))]();this[a17_0x4608('0x1a')][a17_0x4608('0x11')]();}if(_0x54ec53){this[a17_0x4608('0x1c')]=new mqttService_1['MqttService'](this[a17_0x4608('0x1a')]);this[a17_0x4608('0x1c')][a17_0x4608('0x11')]();}}}exports[a17_0x4608('0x1d')]=MainService;