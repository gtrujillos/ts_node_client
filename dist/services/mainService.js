var a16_0x40c4=['GPS_SERVICE_ENABLED','SERIAL_PORT_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','MQTT_SERVICE_ENABLED','sensorsService','SensorsService','GPSService','gpsService','serialPortService','SerialPortService','countingWebSocketService','CountingWebSocketService','eventsService','EventsService','SyncEventsService','syncService','syncPlaylistsService','SyncPlaylistsService','mqttService','MqttService','MainService','defineProperty','./serialPortService','./syncEventsService','./syncPlaylistsService','./mqttService','init','env','true'];(function(_0x18b6c1,_0x28d7d3){var _0x24a1ca=function(_0xfc8a03){while(--_0xfc8a03){_0x18b6c1['push'](_0x18b6c1['shift']());}};_0x24a1ca(++_0x28d7d3);}(a16_0x40c4,0x93));var a16_0x1679=function(_0x554243,_0x42e276){_0x554243=_0x554243-0x0;var _0x6a085d=a16_0x40c4[_0x554243];return _0x6a085d;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a16_0x1679('0x0')](exports,'__esModule',{'value':!![]});const serialPortService_1=require(a16_0x1679('0x1'));const gpsService_1=require('./gpsService');const CountingWebsocketService_1=require('./CountingWebsocketService');const syncEventsService_1=require(a16_0x1679('0x2'));const sensorsService_1=require('./sensorsService');const eventsService_1=require('./eventsService');const syncPlaylistsService_1=require(a16_0x1679('0x3'));const mqttService_1=require(a16_0x1679('0x4'));class MainService{constructor(_0x5d49ce){}[a16_0x1679('0x5')](){const _0x2ea3c0=process[a16_0x1679('0x6')]['SENSORS_SERVICE_ENABLED']==a16_0x1679('0x7');const _0xd92422=process[a16_0x1679('0x6')][a16_0x1679('0x8')]==a16_0x1679('0x7');const _0x383afa=process[a16_0x1679('0x6')][a16_0x1679('0x9')]=='true';const _0x3bd6cb=process[a16_0x1679('0x6')]['COUNTING_WEBSOCKET_SERVICE_ENABLED']==a16_0x1679('0x7');const _0x399e08=process[a16_0x1679('0x6')][a16_0x1679('0xa')]==a16_0x1679('0x7');const _0x5b65c1=process['env'][a16_0x1679('0xb')]==a16_0x1679('0x7');const _0x5d337f=process['env'][a16_0x1679('0xc')]==a16_0x1679('0x7');const _0x466aa2=process[a16_0x1679('0x6')][a16_0x1679('0xd')]==a16_0x1679('0x7');if(_0x2ea3c0){this[a16_0x1679('0xe')]=new sensorsService_1[(a16_0x1679('0xf'))]();this[a16_0x1679('0xe')]['init']();}if(_0xd92422){this['gpsService']=new gpsService_1[(a16_0x1679('0x10'))]();this[a16_0x1679('0x11')]['init']();}if(_0x383afa){this[a16_0x1679('0x12')]=new serialPortService_1[(a16_0x1679('0x13'))](this['gpsService']);this['serialPortService'][a16_0x1679('0x5')]();}if(_0x3bd6cb){this[a16_0x1679('0x14')]=new CountingWebsocketService_1[(a16_0x1679('0x15'))]();this['countingWebSocketService'][a16_0x1679('0x5')]();}if(_0x399e08){this[a16_0x1679('0x16')]=new eventsService_1[(a16_0x1679('0x17'))](this[a16_0x1679('0x11')],this[a16_0x1679('0xe')],this[a16_0x1679('0x14')]);}if(_0x5b65c1){this['syncService']=new syncEventsService_1[(a16_0x1679('0x18'))]();this[a16_0x1679('0x19')][a16_0x1679('0x5')]();}if(_0x5d337f){this[a16_0x1679('0x1a')]=new syncPlaylistsService_1[(a16_0x1679('0x1b'))]();this[a16_0x1679('0x1a')][a16_0x1679('0x5')]();}if(_0x466aa2){this[a16_0x1679('0x1c')]=new mqttService_1[(a16_0x1679('0x1d'))](this[a16_0x1679('0x1a')]);this[a16_0x1679('0x1c')][a16_0x1679('0x5')]();}}}exports[a16_0x1679('0x1e')]=MainService;