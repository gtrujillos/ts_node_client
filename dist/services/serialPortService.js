var a21_0x289b=['serialPortOnOpen','bind','close','serialPortOnClose','serialPortOnError','data','serialPortOnData','readable','serialPortOnReadable','parserOnData','log','init\x20SerialPort','port\x20closed.','Serial\x20port\x20error:\x20','read','SerialPortService','defineProperty','__esModule','../infrastructure/stationSettings','gpsService','init\x20SerialPortService','openCOM','serialport','StationContext','settings','none','parsers','serialPort','pipe','open'];(function(_0xd9a9d3,_0x89b94b){var _0x575c5b=function(_0x73bddb){while(--_0x73bddb){_0xd9a9d3['push'](_0xd9a9d3['shift']());}};_0x575c5b(++_0x89b94b);}(a21_0x289b,0x6a));var a21_0x12a9=function(_0x4839a7,_0x2946fd){_0x4839a7=_0x4839a7-0x0;var _0x4b7780=a21_0x289b[_0x4839a7];return _0x4b7780;};'use strict';Object[a21_0x12a9('0x0')](exports,a21_0x12a9('0x1'),{'value':!![]});const stationSettings_1=require(a21_0x12a9('0x2'));class SerialPortService{constructor(_0x4f28d8){this[a21_0x12a9('0x3')]=_0x4f28d8;}['init'](){console['log'](a21_0x12a9('0x4'));this[a21_0x12a9('0x5')]();}['openCOM'](){const _0x145f23=require(a21_0x12a9('0x6'));this['serialPort']=new _0x145f23(stationSettings_1[a21_0x12a9('0x7')][a21_0x12a9('0x8')]['portCOM'],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a21_0x12a9('0x9')});const _0x503770=_0x145f23[a21_0x12a9('0xa')]['Readline'];const _0x2a77c7=new _0x503770('\x0d\x0a');this[a21_0x12a9('0xb')][a21_0x12a9('0xc')](_0x2a77c7);this[a21_0x12a9('0xb')]['on'](a21_0x12a9('0xd'),this[a21_0x12a9('0xe')][a21_0x12a9('0xf')](this));this[a21_0x12a9('0xb')]['on'](a21_0x12a9('0x10'),this[a21_0x12a9('0x11')]['bind'](this));this['serialPort']['on']('error',this[a21_0x12a9('0x12')]['bind'](this));this[a21_0x12a9('0xb')]['on'](a21_0x12a9('0x13'),this[a21_0x12a9('0x14')][a21_0x12a9('0xf')](this));this[a21_0x12a9('0xb')]['on'](a21_0x12a9('0x15'),this[a21_0x12a9('0x16')]['bind'](this));_0x2a77c7['on']('data',this[a21_0x12a9('0x17')]['bind'](this));console[a21_0x12a9('0x18')](a21_0x12a9('0x19'));}[a21_0x12a9('0xe')](){console[a21_0x12a9('0x18')]('Port\x20opened:\x20'+stationSettings_1[a21_0x12a9('0x7')]['settings']['portCOM']);}[a21_0x12a9('0x11')](){console['log'](a21_0x12a9('0x1a'));setTimeout(function(){this[a21_0x12a9('0x5')]()[a21_0x12a9('0xf')](this);},0x1388);}[a21_0x12a9('0x12')](_0x7f1a64){console['error'](a21_0x12a9('0x1b')+_0x7f1a64);setTimeout(function(){this[a21_0x12a9('0x5')]();}[a21_0x12a9('0xf')](this),0x1388);}[a21_0x12a9('0x17')](_0xfb278d){this[a21_0x12a9('0x3')]['gps']['update'](_0xfb278d);}[a21_0x12a9('0x14')](_0x8da712){}[a21_0x12a9('0x16')](){this[a21_0x12a9('0xb')][a21_0x12a9('0x1c')]();}}exports[a21_0x12a9('0x1d')]=SerialPortService;