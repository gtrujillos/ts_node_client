var a17_0x15de=['env','true','GPS_SERVICE_ENABLED','SERIAL_PORT_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','SensorsService','sensorsService','init','gpsService','GPSService','serialPortService','SerialPortService','countingWebSocketService','CountingWebSocketService','eventsService','EventsService','SyncEventsService','syncPlaylistsService','SyncPlaylistsService','mqttService','MqttService','defineProperty','__esModule','./serialPortService','./gpsService','./CountingWebsocketService','./syncEventsService','./mqttService'];(function(_0x101fdf,_0x1c7428){var _0x40664d=function(_0x26f771){while(--_0x26f771){_0x101fdf['push'](_0x101fdf['shift']());}};_0x40664d(++_0x1c7428);}(a17_0x15de,0x16d));var a17_0x56bd=function(_0x3bd48c,_0x1bc95f){_0x3bd48c=_0x3bd48c-0x0;var _0x2e4377=a17_0x15de[_0x3bd48c];return _0x2e4377;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a17_0x56bd('0x0')](exports,a17_0x56bd('0x1'),{'value':!![]});const serialPortService_1=require(a17_0x56bd('0x2'));const gpsService_1=require(a17_0x56bd('0x3'));const CountingWebsocketService_1=require(a17_0x56bd('0x4'));const syncEventsService_1=require(a17_0x56bd('0x5'));const sensorsService_1=require('./sensorsService');const eventsService_1=require('./eventsService');const syncPlaylistsService_1=require('./syncPlaylistsService');const mqttService_1=require(a17_0x56bd('0x6'));class MainService{constructor(_0x5e8beb){}['init'](){const _0x46e980=process[a17_0x56bd('0x7')]['SENSORS_SERVICE_ENABLED']==a17_0x56bd('0x8');const _0x5df3d0=process[a17_0x56bd('0x7')][a17_0x56bd('0x9')]==a17_0x56bd('0x8');const _0x49714d=process[a17_0x56bd('0x7')][a17_0x56bd('0xa')]=='true';const _0x43c382=process[a17_0x56bd('0x7')][a17_0x56bd('0xb')]==a17_0x56bd('0x8');const _0x2ebcd6=process[a17_0x56bd('0x7')][a17_0x56bd('0xc')]==a17_0x56bd('0x8');const _0x39071c=process[a17_0x56bd('0x7')][a17_0x56bd('0xd')]==a17_0x56bd('0x8');const _0x430fb3=process['env'][a17_0x56bd('0xe')]==a17_0x56bd('0x8');const _0x5e2378=process['env']['MQTT_SERVICE_ENABLED']==a17_0x56bd('0x8');if(_0x46e980){this['sensorsService']=new sensorsService_1[(a17_0x56bd('0xf'))]();this[a17_0x56bd('0x10')][a17_0x56bd('0x11')]();}if(_0x5df3d0){this[a17_0x56bd('0x12')]=new gpsService_1[(a17_0x56bd('0x13'))]();this[a17_0x56bd('0x12')]['init']();}if(_0x49714d){this[a17_0x56bd('0x14')]=new serialPortService_1[(a17_0x56bd('0x15'))](this[a17_0x56bd('0x12')]);this['serialPortService']['init']();}if(_0x43c382){this[a17_0x56bd('0x16')]=new CountingWebsocketService_1[(a17_0x56bd('0x17'))]();this[a17_0x56bd('0x16')][a17_0x56bd('0x11')]();}if(_0x2ebcd6){this[a17_0x56bd('0x18')]=new eventsService_1[(a17_0x56bd('0x19'))](this[a17_0x56bd('0x12')],this[a17_0x56bd('0x10')],this[a17_0x56bd('0x16')]);}if(_0x39071c){this['syncService']=new syncEventsService_1[(a17_0x56bd('0x1a'))]();this['syncService'][a17_0x56bd('0x11')]();}if(_0x430fb3){this[a17_0x56bd('0x1b')]=new syncPlaylistsService_1[(a17_0x56bd('0x1c'))]();this[a17_0x56bd('0x1b')][a17_0x56bd('0x11')]();}if(_0x5e2378){this[a17_0x56bd('0x1d')]=new mqttService_1[(a17_0x56bd('0x1e'))](this['syncPlaylistsService']);this['mqttService'][a17_0x56bd('0x11')]();}}}exports['MainService']=MainService;