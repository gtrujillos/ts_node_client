var a17_0x268c=['serialPortService','countingWebSocketService','eventsService','EventsService','sensorsService','syncService','SyncEventsService','SyncPlaylistsService','syncPlaylistsService','mqttService','MainService','defineProperty','__esModule','./gpsService','./CountingWebsocketService','./sensorsService','./eventsService','./syncPlaylistsService','./mqttService','SENSORS_SERVICE_ENABLED','true','env','SERIAL_PORT_SERVICE_ENABLED','EVENTS_SERVICE_ENABLED','SYNC_EVENTS_SERVICE_ENABLED','SYNC_PLAYLISTS_SERVICE_ENABLED','SensorsService','init','GPSService','gpsService','SerialPortService'];(function(_0x1bb1ff,_0x1cbeb2){var _0x379614=function(_0x36ba12){while(--_0x36ba12){_0x1bb1ff['push'](_0x1bb1ff['shift']());}};_0x379614(++_0x1cbeb2);}(a17_0x268c,0x141));var a17_0x186d=function(_0x4ef25c,_0x579889){_0x4ef25c=_0x4ef25c-0x0;var _0x3447b8=a17_0x268c[_0x4ef25c];return _0x3447b8;};'use strict';// import SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import * as SerialPort from 'serialport';
             // import GPS from 'gps';
             // import fs from 'fs';
             // import zlib from 'zlib';
Object[a17_0x186d('0x0')](exports,a17_0x186d('0x1'),{'value':!![]});const serialPortService_1=require('./serialPortService');const gpsService_1=require(a17_0x186d('0x2'));const CountingWebsocketService_1=require(a17_0x186d('0x3'));const syncEventsService_1=require('./syncEventsService');const sensorsService_1=require(a17_0x186d('0x4'));const eventsService_1=require(a17_0x186d('0x5'));const syncPlaylistsService_1=require(a17_0x186d('0x6'));const mqttService_1=require(a17_0x186d('0x7'));class MainService{constructor(_0x13f08f){}['init'](){const _0x4a69ee=process['env'][a17_0x186d('0x8')]==a17_0x186d('0x9');const _0x11fd0a=process[a17_0x186d('0xa')]['GPS_SERVICE_ENABLED']==a17_0x186d('0x9');const _0x4de5d4=process['env'][a17_0x186d('0xb')]==a17_0x186d('0x9');const _0x27543d=process['env']['COUNTING_WEBSOCKET_SERVICE_ENABLED']==a17_0x186d('0x9');const _0x22bc53=process['env'][a17_0x186d('0xc')]==a17_0x186d('0x9');const _0xfc21ef=process['env'][a17_0x186d('0xd')]==a17_0x186d('0x9');const _0x3d6122=process[a17_0x186d('0xa')][a17_0x186d('0xe')]==a17_0x186d('0x9');const _0x242256=process[a17_0x186d('0xa')]['MQTT_SERVICE_ENABLED']=='true';if(_0x4a69ee){this['sensorsService']=new sensorsService_1[(a17_0x186d('0xf'))]();this['sensorsService'][a17_0x186d('0x10')]();}if(_0x11fd0a){this['gpsService']=new gpsService_1[(a17_0x186d('0x11'))]();this[a17_0x186d('0x12')][a17_0x186d('0x10')]();}if(_0x4de5d4){this['serialPortService']=new serialPortService_1[(a17_0x186d('0x13'))](this[a17_0x186d('0x12')]);this[a17_0x186d('0x14')][a17_0x186d('0x10')]();}if(_0x27543d){this['countingWebSocketService']=new CountingWebsocketService_1['CountingWebSocketService']();this[a17_0x186d('0x15')][a17_0x186d('0x10')]();}if(_0x22bc53){this[a17_0x186d('0x16')]=new eventsService_1[(a17_0x186d('0x17'))](this['gpsService'],this[a17_0x186d('0x18')],this[a17_0x186d('0x15')]);}if(_0xfc21ef){this[a17_0x186d('0x19')]=new syncEventsService_1[(a17_0x186d('0x1a'))]();this[a17_0x186d('0x19')]['init']();}if(_0x3d6122){this['syncPlaylistsService']=new syncPlaylistsService_1[(a17_0x186d('0x1b'))]();this[a17_0x186d('0x1c')][a17_0x186d('0x10')]();}if(_0x242256){this[a17_0x186d('0x1d')]=new mqttService_1['MqttService'](this['syncPlaylistsService']);this[a17_0x186d('0x1d')]['init']();}}}exports[a17_0x186d('0x1e')]=MainService;