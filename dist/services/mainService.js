var a16_0x1862=['SensorsService','gpsService','GPSService','serialPortService','SerialPortService','countingWebSocketService','eventsService','EventsService','syncService','SyncEventsService','syncPlaylistsService','SyncPlaylistsService','mqttService','MqttService','MainService','defineProperty','__esModule','./gpsService','./CountingWebsocketService','./sensorsService','./eventsService','./syncPlaylistsService','./mqttService','init','SENSORS_SERVICE_ENABLED','true','env','GPS_SERVICE_ENABLED','SERIAL_PORT_SERVICE_ENABLED','COUNTING_WEBSOCKET_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','sensorsService'];(function(_0xabfd89,_0x1436df){var _0x3801d3=function(_0x105629){while(--_0x105629){_0xabfd89['push'](_0xabfd89['shift']());}};_0x3801d3(++_0x1436df);}(a16_0x1862,0x185));var a16_0x5073=function(_0x582edd,_0x292d6a){_0x582edd=_0x582edd-0x0;var _0x5b4453=a16_0x1862[_0x582edd];return _0x5b4453;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a16_0x5073('0x0')](exports,a16_0x5073('0x1'),{'value':!![]});const serialPortService_1=require('./serialPortService');const gpsService_1=require(a16_0x5073('0x2'));const CountingWebsocketService_1=require(a16_0x5073('0x3'));const syncEventsService_1=require('./syncEventsService');const sensorsService_1=require(a16_0x5073('0x4'));const eventsService_1=require(a16_0x5073('0x5'));const syncPlaylistsService_1=require(a16_0x5073('0x6'));const mqttService_1=require(a16_0x5073('0x7'));class MainService{constructor(_0x51cb41){}[a16_0x5073('0x8')](){const _0x22f9a7=process['env'][a16_0x5073('0x9')]==a16_0x5073('0xa');const _0x2765a9=process[a16_0x5073('0xb')][a16_0x5073('0xc')]==a16_0x5073('0xa');const _0x37dc47=process[a16_0x5073('0xb')][a16_0x5073('0xd')]=='true';const _0x5004b6=process['env'][a16_0x5073('0xe')]==a16_0x5073('0xa');const _0x3c1ea8=process[a16_0x5073('0xb')][a16_0x5073('0xf')]=='true';const _0xace3bc=process[a16_0x5073('0xb')][a16_0x5073('0x10')]=='true';const _0xbbe794=process[a16_0x5073('0xb')][a16_0x5073('0x11')]==a16_0x5073('0xa');const _0x37a82e=process[a16_0x5073('0xb')]['MQTT_SERVICE_ENABLED']==a16_0x5073('0xa');if(_0x22f9a7){this[a16_0x5073('0x12')]=new sensorsService_1[(a16_0x5073('0x13'))]();this[a16_0x5073('0x12')]['init']();}if(_0x2765a9){this[a16_0x5073('0x14')]=new gpsService_1[(a16_0x5073('0x15'))]();this[a16_0x5073('0x14')][a16_0x5073('0x8')]();}if(_0x37dc47){this[a16_0x5073('0x16')]=new serialPortService_1[(a16_0x5073('0x17'))](this['gpsService']);this['serialPortService'][a16_0x5073('0x8')]();}if(_0x5004b6){this[a16_0x5073('0x18')]=new CountingWebsocketService_1['CountingWebSocketService']();this[a16_0x5073('0x18')][a16_0x5073('0x8')]();}if(_0x3c1ea8){this[a16_0x5073('0x19')]=new eventsService_1[(a16_0x5073('0x1a'))](this[a16_0x5073('0x14')],this['sensorsService'],this[a16_0x5073('0x18')]);}if(_0xace3bc){this[a16_0x5073('0x1b')]=new syncEventsService_1[(a16_0x5073('0x1c'))]();this[a16_0x5073('0x1b')][a16_0x5073('0x8')]();}if(_0xbbe794){this[a16_0x5073('0x1d')]=new syncPlaylistsService_1[(a16_0x5073('0x1e'))]();this[a16_0x5073('0x1d')][a16_0x5073('0x8')]();}if(_0x37a82e){this[a16_0x5073('0x1f')]=new mqttService_1[(a16_0x5073('0x20'))](this[a16_0x5073('0x1d')]);this['mqttService'][a16_0x5073('0x8')]();}}}exports[a16_0x5073('0x21')]=MainService;