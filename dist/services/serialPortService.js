var a20_0x3a85=['portCOM','none','parsers','pipe','open','serialPortOnOpen','bind','serialPortOnClose','serialPortOnError','serialPortOnData','serialPortOnReadable','data','parserOnData','log','init\x20SerialPort','Port\x20opened:\x20','port\x20closed.','error','Serial\x20port\x20error:\x20','gps','update','SerialPortService','__esModule','../infrastructure/stationSettings','gpsService','init','openCOM','serialport','serialPort','StationContext','settings'];(function(_0x573d22,_0x48bf69){var _0x179f02=function(_0x499090){while(--_0x499090){_0x573d22['push'](_0x573d22['shift']());}};_0x179f02(++_0x48bf69);}(a20_0x3a85,0xef));var a20_0x4d7a=function(_0x49b020,_0x5a51b5){_0x49b020=_0x49b020-0x0;var _0xeb0ec=a20_0x3a85[_0x49b020];return _0xeb0ec;};'use strict';Object['defineProperty'](exports,a20_0x4d7a('0x0'),{'value':!![]});const stationSettings_1=require(a20_0x4d7a('0x1'));class SerialPortService{constructor(_0x9b7fa0){this[a20_0x4d7a('0x2')]=_0x9b7fa0;}[a20_0x4d7a('0x3')](){this[a20_0x4d7a('0x4')]();}['openCOM'](){const _0x559770=require(a20_0x4d7a('0x5'));this[a20_0x4d7a('0x6')]=new _0x559770(stationSettings_1[a20_0x4d7a('0x7')][a20_0x4d7a('0x8')][a20_0x4d7a('0x9')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a20_0x4d7a('0xa')});const _0x2491b7=_0x559770[a20_0x4d7a('0xb')]['Readline'];const _0x42d378=new _0x2491b7('\x0d\x0a');this[a20_0x4d7a('0x6')][a20_0x4d7a('0xc')](_0x42d378);this[a20_0x4d7a('0x6')]['on'](a20_0x4d7a('0xd'),this[a20_0x4d7a('0xe')][a20_0x4d7a('0xf')](this));this[a20_0x4d7a('0x6')]['on']('close',this[a20_0x4d7a('0x10')][a20_0x4d7a('0xf')](this));this['serialPort']['on']('error',this[a20_0x4d7a('0x11')][a20_0x4d7a('0xf')](this));this['serialPort']['on']('data',this[a20_0x4d7a('0x12')][a20_0x4d7a('0xf')](this));this[a20_0x4d7a('0x6')]['on']('readable',this[a20_0x4d7a('0x13')][a20_0x4d7a('0xf')](this));_0x42d378['on'](a20_0x4d7a('0x14'),this[a20_0x4d7a('0x15')][a20_0x4d7a('0xf')](this));console[a20_0x4d7a('0x16')](a20_0x4d7a('0x17'));}['serialPortOnOpen'](){console[a20_0x4d7a('0x16')](a20_0x4d7a('0x18')+stationSettings_1[a20_0x4d7a('0x7')]['settings'][a20_0x4d7a('0x9')]);}[a20_0x4d7a('0x10')](){console['log'](a20_0x4d7a('0x19'));setTimeout(function(){this['openCOM']()[a20_0x4d7a('0xf')](this);},0x1388);}['serialPortOnError'](_0x2755da){console[a20_0x4d7a('0x1a')](a20_0x4d7a('0x1b')+_0x2755da);setTimeout(function(){this['openCOM']();}[a20_0x4d7a('0xf')](this),0x1388);}[a20_0x4d7a('0x15')](_0x1f7bfa){this[a20_0x4d7a('0x2')][a20_0x4d7a('0x1c')][a20_0x4d7a('0x1d')](_0x1f7bfa);}[a20_0x4d7a('0x12')](_0x325209){}[a20_0x4d7a('0x13')](){this[a20_0x4d7a('0x6')]['read']();}}exports[a20_0x4d7a('0x1e')]=SerialPortService;