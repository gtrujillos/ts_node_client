var a23_0x411e=['bind','close','serialPortOnClose','error','serialPortOnError','data','serialPortOnData','readable','serialPortOnReadable','parserOnData','log','init\x20SerialPort','Port\x20opened:\x20','port\x20closed.','openCOM','Serial\x20port\x20error:\x20','read','SerialPortService','__esModule','../infrastructure/stationSettings','init','init\x20SerialPortService','GPSService','getInstance','gps','update','$GPGGA,224900.000,4832.3762,N,00903.5393,E,1,04,7.8,498.6,M,48.0,M,,0000*5E','serialport','serialPort','StationContext','settings','portCOM','none','parsers','Readline','open','serialPortOnOpen'];(function(_0x57532e,_0x56b0f7){var _0x2ae633=function(_0x431d87){while(--_0x431d87){_0x57532e['push'](_0x57532e['shift']());}};_0x2ae633(++_0x56b0f7);}(a23_0x411e,0xcb));var a23_0x3afc=function(_0x4bd822,_0x2bd6f7){_0x4bd822=_0x4bd822-0x0;var _0xb4bdb3=a23_0x411e[_0x4bd822];return _0xb4bdb3;};'use strict';Object['defineProperty'](exports,a23_0x3afc('0x0'),{'value':!![]});const stationSettings_1=require(a23_0x3afc('0x1'));const gpsService_1=require('./gpsService');class SerialPortService{constructor(){}[a23_0x3afc('0x2')](){console['log'](a23_0x3afc('0x3'));gpsService_1[a23_0x3afc('0x4')][a23_0x3afc('0x5')]()[a23_0x3afc('0x6')][a23_0x3afc('0x7')](a23_0x3afc('0x8'));}['openCOM'](){const _0x34726e=require(a23_0x3afc('0x9'));this[a23_0x3afc('0xa')]=new _0x34726e(stationSettings_1[a23_0x3afc('0xb')][a23_0x3afc('0xc')][a23_0x3afc('0xd')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a23_0x3afc('0xe')});const _0x911292=_0x34726e[a23_0x3afc('0xf')][a23_0x3afc('0x10')];const _0x59cc91=new _0x911292('\x0d\x0a');this[a23_0x3afc('0xa')]['pipe'](_0x59cc91);this[a23_0x3afc('0xa')]['on'](a23_0x3afc('0x11'),this[a23_0x3afc('0x12')][a23_0x3afc('0x13')](this));this[a23_0x3afc('0xa')]['on'](a23_0x3afc('0x14'),this[a23_0x3afc('0x15')][a23_0x3afc('0x13')](this));this[a23_0x3afc('0xa')]['on'](a23_0x3afc('0x16'),this[a23_0x3afc('0x17')][a23_0x3afc('0x13')](this));this[a23_0x3afc('0xa')]['on'](a23_0x3afc('0x18'),this[a23_0x3afc('0x19')][a23_0x3afc('0x13')](this));this['serialPort']['on'](a23_0x3afc('0x1a'),this[a23_0x3afc('0x1b')][a23_0x3afc('0x13')](this));_0x59cc91['on'](a23_0x3afc('0x18'),this[a23_0x3afc('0x1c')]['bind'](this));console[a23_0x3afc('0x1d')](a23_0x3afc('0x1e'));}[a23_0x3afc('0x12')](){console['log'](a23_0x3afc('0x1f')+stationSettings_1[a23_0x3afc('0xb')][a23_0x3afc('0xc')][a23_0x3afc('0xd')]);}[a23_0x3afc('0x15')](){console[a23_0x3afc('0x1d')](a23_0x3afc('0x20'));setTimeout(function(){this[a23_0x3afc('0x21')]()[a23_0x3afc('0x13')](this);},0x1388);}[a23_0x3afc('0x17')](_0xa99685){console['error'](a23_0x3afc('0x22')+_0xa99685);setTimeout(function(){this[a23_0x3afc('0x21')]();}[a23_0x3afc('0x13')](this),0x1388);}[a23_0x3afc('0x1c')](_0x52e8ff){try{gpsService_1[a23_0x3afc('0x4')][a23_0x3afc('0x5')]()[a23_0x3afc('0x6')][a23_0x3afc('0x7')](_0x52e8ff);}catch(_0x1bbe40){console[a23_0x3afc('0x16')](a23_0x3afc('0x1c'),_0x1bbe40);}}['serialPortOnData'](_0x4475d8){}['serialPortOnReadable'](){this[a23_0x3afc('0xa')][a23_0x3afc('0x23')]();}}exports[a23_0x3afc('0x24')]=SerialPortService;