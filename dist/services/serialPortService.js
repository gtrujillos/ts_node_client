var a21_0xcaa7=['settings','gpsService','gps','update','read','SerialPortService','../infrastructure/stationSettings','init','log','init\x20SerialPortService','openCOM','serialPort','StationContext','portCOM','none','parsers','Readline','pipe','open','close','serialPortOnClose','error','serialPortOnError','data','serialPortOnData','bind','readable','serialPortOnReadable','parserOnData','init\x20SerialPort'];(function(_0xf8dfe8,_0x495eb3){var _0x39af29=function(_0x2c2c98){while(--_0x2c2c98){_0xf8dfe8['push'](_0xf8dfe8['shift']());}};_0x39af29(++_0x495eb3);}(a21_0xcaa7,0xf6));var a21_0x4770=function(_0x2a9413,_0x2250b6){_0x2a9413=_0x2a9413-0x0;var _0x21539c=a21_0xcaa7[_0x2a9413];return _0x21539c;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a21_0x4770('0x0'));class SerialPortService{constructor(_0x26edf0){this['gpsService']=_0x26edf0;}[a21_0x4770('0x1')](){console[a21_0x4770('0x2')](a21_0x4770('0x3'));this[a21_0x4770('0x4')]();}['openCOM'](){const _0x39897e=require('serialport');this[a21_0x4770('0x5')]=new _0x39897e(stationSettings_1[a21_0x4770('0x6')]['settings'][a21_0x4770('0x7')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a21_0x4770('0x8')});const _0x3fc227=_0x39897e[a21_0x4770('0x9')][a21_0x4770('0xa')];const _0x595d8b=new _0x3fc227('\x0d\x0a');this[a21_0x4770('0x5')][a21_0x4770('0xb')](_0x595d8b);this[a21_0x4770('0x5')]['on'](a21_0x4770('0xc'),this['serialPortOnOpen']['bind'](this));this[a21_0x4770('0x5')]['on'](a21_0x4770('0xd'),this[a21_0x4770('0xe')]['bind'](this));this[a21_0x4770('0x5')]['on'](a21_0x4770('0xf'),this[a21_0x4770('0x10')]['bind'](this));this['serialPort']['on'](a21_0x4770('0x11'),this[a21_0x4770('0x12')][a21_0x4770('0x13')](this));this[a21_0x4770('0x5')]['on'](a21_0x4770('0x14'),this[a21_0x4770('0x15')][a21_0x4770('0x13')](this));_0x595d8b['on'](a21_0x4770('0x11'),this[a21_0x4770('0x16')]['bind'](this));console[a21_0x4770('0x2')](a21_0x4770('0x17'));}['serialPortOnOpen'](){console[a21_0x4770('0x2')]('Port\x20opened:\x20'+stationSettings_1[a21_0x4770('0x6')][a21_0x4770('0x18')][a21_0x4770('0x7')]);}[a21_0x4770('0xe')](){console[a21_0x4770('0x2')]('port\x20closed.');setTimeout(function(){this['openCOM']()[a21_0x4770('0x13')](this);},0x1388);}[a21_0x4770('0x10')](_0x31f252){console[a21_0x4770('0xf')]('Serial\x20port\x20error:\x20'+_0x31f252);setTimeout(function(){this['openCOM']();}[a21_0x4770('0x13')](this),0x1388);}[a21_0x4770('0x16')](_0x32e9e5){this[a21_0x4770('0x19')][a21_0x4770('0x1a')][a21_0x4770('0x1b')](_0x32e9e5);}[a21_0x4770('0x12')](_0x21f4f4){}[a21_0x4770('0x15')](){this[a21_0x4770('0x5')][a21_0x4770('0x1c')]();}}exports[a21_0x4770('0x1d')]=SerialPortService;