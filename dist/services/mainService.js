var a17_0x184d=['SENSORS_SERVICE_ENABLED','true','GPS_SERVICE_ENABLED','SERIAL_PORT_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','MQTT_SERVICE_ENABLED','sensorsService','GPSService','serialPortService','SerialPortService','gpsService','CountingWebSocketService','countingWebSocketService','eventsService','EventsService','SyncEventsService','syncPlaylistsService','SyncPlaylistsService','mqttService','MqttService','MainService','defineProperty','./CountingWebsocketService','./syncEventsService','./sensorsService','./eventsService','./syncPlaylistsService','./mqttService','init','env'];(function(_0x5ccaf3,_0x54059f){var _0x25a1f7=function(_0x4f6d52){while(--_0x4f6d52){_0x5ccaf3['push'](_0x5ccaf3['shift']());}};_0x25a1f7(++_0x54059f);}(a17_0x184d,0xb7));var a17_0xd88b=function(_0x21f8e7,_0x309673){_0x21f8e7=_0x21f8e7-0x0;var _0x53d4b0=a17_0x184d[_0x21f8e7];return _0x53d4b0;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a17_0xd88b('0x0')](exports,'__esModule',{'value':!![]});const serialPortService_1=require('./serialPortService');const gpsService_1=require('./gpsService');const CountingWebsocketService_1=require(a17_0xd88b('0x1'));const syncEventsService_1=require(a17_0xd88b('0x2'));const sensorsService_1=require(a17_0xd88b('0x3'));const eventsService_1=require(a17_0xd88b('0x4'));const syncPlaylistsService_1=require(a17_0xd88b('0x5'));const mqttService_1=require(a17_0xd88b('0x6'));class MainService{constructor(_0x26bb62){}[a17_0xd88b('0x7')](){const _0x4c2915=process[a17_0xd88b('0x8')][a17_0xd88b('0x9')]==a17_0xd88b('0xa');const _0x46143f=process[a17_0xd88b('0x8')][a17_0xd88b('0xb')]==a17_0xd88b('0xa');const _0x59f498=process[a17_0xd88b('0x8')][a17_0xd88b('0xc')]=='true';const _0x3d17df=process[a17_0xd88b('0x8')][a17_0xd88b('0xd')]==a17_0xd88b('0xa');const _0x40b24d=process[a17_0xd88b('0x8')][a17_0xd88b('0xe')]==a17_0xd88b('0xa');const _0x4f5c6d=process['env']['SYNC_EVENTS_SERVICE_ENABLED']=='true';const _0x43642d=process[a17_0xd88b('0x8')][a17_0xd88b('0xf')]==a17_0xd88b('0xa');const _0x58943f=process[a17_0xd88b('0x8')][a17_0xd88b('0x10')]==a17_0xd88b('0xa');if(_0x4c2915){this[a17_0xd88b('0x11')]=new sensorsService_1['SensorsService']();this[a17_0xd88b('0x11')]['init']();}if(_0x46143f){this['gpsService']=new gpsService_1[(a17_0xd88b('0x12'))]();this['gpsService'][a17_0xd88b('0x7')]();}if(_0x59f498){this[a17_0xd88b('0x13')]=new serialPortService_1[(a17_0xd88b('0x14'))](this[a17_0xd88b('0x15')]);this[a17_0xd88b('0x13')]['init']();}if(_0x3d17df){this['countingWebSocketService']=new CountingWebsocketService_1[(a17_0xd88b('0x16'))]();this[a17_0xd88b('0x17')][a17_0xd88b('0x7')]();}if(_0x40b24d){this[a17_0xd88b('0x18')]=new eventsService_1[(a17_0xd88b('0x19'))](this[a17_0xd88b('0x15')],this[a17_0xd88b('0x11')],this['countingWebSocketService']);}if(_0x4f5c6d){this['syncService']=new syncEventsService_1[(a17_0xd88b('0x1a'))]();this['syncService']['init']();}if(_0x43642d){this[a17_0xd88b('0x1b')]=new syncPlaylistsService_1[(a17_0xd88b('0x1c'))]();this[a17_0xd88b('0x1b')]['init']();}if(_0x58943f){this[a17_0xd88b('0x1d')]=new mqttService_1[(a17_0xd88b('0x1e'))](this[a17_0xd88b('0x1b')]);this[a17_0xd88b('0x1d')][a17_0xd88b('0x7')]();}}}exports[a17_0xd88b('0x1f')]=MainService;