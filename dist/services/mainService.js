var a17_0x4423=['gpsService','GPSService','serialPortService','SerialPortService','countingWebSocketService','CountingWebSocketService','eventsService','EventsService','syncService','SyncEventsService','syncPlaylistsService','SyncPlaylistsService','MqttService','MainService','defineProperty','./serialPortService','./CountingWebsocketService','./sensorsService','./eventsService','./syncPlaylistsService','./mqttService','init','env','GPS_SERVICE_ENABLED','SERIAL_PORT_SERVICE_ENABLED','true','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','sensorsService','SensorsService'];(function(_0x591427,_0x1e4045){var _0x54fd7b=function(_0x44d66e){while(--_0x44d66e){_0x591427['push'](_0x591427['shift']());}};_0x54fd7b(++_0x1e4045);}(a17_0x4423,0x6b));var a17_0x2c75=function(_0x29f714,_0xdeaf10){_0x29f714=_0x29f714-0x0;var _0x3a8110=a17_0x4423[_0x29f714];return _0x3a8110;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a17_0x2c75('0x0')](exports,'__esModule',{'value':!![]});const serialPortService_1=require(a17_0x2c75('0x1'));const gpsService_1=require('./gpsService');const CountingWebsocketService_1=require(a17_0x2c75('0x2'));const syncEventsService_1=require('./syncEventsService');const sensorsService_1=require(a17_0x2c75('0x3'));const eventsService_1=require(a17_0x2c75('0x4'));const syncPlaylistsService_1=require(a17_0x2c75('0x5'));const mqttService_1=require(a17_0x2c75('0x6'));class MainService{constructor(_0x238d58){}[a17_0x2c75('0x7')](){const _0x2de1b7=process[a17_0x2c75('0x8')]['SENSORS_SERVICE_ENABLED']=='true';const _0x3dfe8d=process[a17_0x2c75('0x8')][a17_0x2c75('0x9')]=='true';const _0x2cc898=process[a17_0x2c75('0x8')][a17_0x2c75('0xa')]==a17_0x2c75('0xb');const _0x49fc04=process[a17_0x2c75('0x8')][a17_0x2c75('0xc')]==a17_0x2c75('0xb');const _0x23f6fe=process[a17_0x2c75('0x8')][a17_0x2c75('0xd')]==a17_0x2c75('0xb');const _0x1f0b3a=process[a17_0x2c75('0x8')]['SYNC_EVENTS_SERVICE_ENABLED']==a17_0x2c75('0xb');const _0x341b90=process[a17_0x2c75('0x8')][a17_0x2c75('0xe')]==a17_0x2c75('0xb');const _0x8a21e3=process['env']['MQTT_SERVICE_ENABLED']==a17_0x2c75('0xb');if(_0x2de1b7){this[a17_0x2c75('0xf')]=new sensorsService_1[(a17_0x2c75('0x10'))]();this[a17_0x2c75('0xf')][a17_0x2c75('0x7')]();}if(_0x3dfe8d){this[a17_0x2c75('0x11')]=new gpsService_1[(a17_0x2c75('0x12'))]();this[a17_0x2c75('0x11')][a17_0x2c75('0x7')]();}if(_0x2cc898){this[a17_0x2c75('0x13')]=new serialPortService_1[(a17_0x2c75('0x14'))](this[a17_0x2c75('0x11')]);this[a17_0x2c75('0x13')]['init']();}if(_0x49fc04){this[a17_0x2c75('0x15')]=new CountingWebsocketService_1[(a17_0x2c75('0x16'))]();this[a17_0x2c75('0x15')][a17_0x2c75('0x7')]();}if(_0x23f6fe){this[a17_0x2c75('0x17')]=new eventsService_1[(a17_0x2c75('0x18'))](this[a17_0x2c75('0x11')],this[a17_0x2c75('0xf')],this['countingWebSocketService']);}if(_0x1f0b3a){this[a17_0x2c75('0x19')]=new syncEventsService_1[(a17_0x2c75('0x1a'))]();this[a17_0x2c75('0x19')][a17_0x2c75('0x7')]();}if(_0x341b90){this[a17_0x2c75('0x1b')]=new syncPlaylistsService_1[(a17_0x2c75('0x1c'))]();this[a17_0x2c75('0x1b')][a17_0x2c75('0x7')]();}if(_0x8a21e3){this['mqttService']=new mqttService_1[(a17_0x2c75('0x1d'))](this['syncPlaylistsService']);this['mqttService']['init']();}}}exports[a17_0x2c75('0x1e')]=MainService;