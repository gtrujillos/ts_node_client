var a23_0x3432=['Serial\x20port\x20error:\x20','gps','serialPortOnData','SerialPortService','defineProperty','__esModule','../infrastructure/stationSettings','gpsService','init','log','init\x20SerialPortService','openCOM','serialport','serialPort','none','Readline','pipe','open','serialPortOnOpen','bind','serialPortOnClose','error','data','readable','parserOnData','init\x20SerialPort','Port\x20opened:\x20','StationContext','settings','portCOM','serialPortOnError'];(function(_0x5f20e0,_0x5b88e0){var _0x3d0c5c=function(_0x5ee62e){while(--_0x5ee62e){_0x5f20e0['push'](_0x5f20e0['shift']());}};_0x3d0c5c(++_0x5b88e0);}(a23_0x3432,0x197));var a23_0x3171=function(_0x219529,_0x25dae6){_0x219529=_0x219529-0x0;var _0x4e2813=a23_0x3432[_0x219529];return _0x4e2813;};'use strict';Object[a23_0x3171('0x0')](exports,a23_0x3171('0x1'),{'value':!![]});const stationSettings_1=require(a23_0x3171('0x2'));class SerialPortService{constructor(_0x1688e7){this[a23_0x3171('0x3')]=_0x1688e7;}[a23_0x3171('0x4')](){console[a23_0x3171('0x5')](a23_0x3171('0x6'));this[a23_0x3171('0x7')]();}['openCOM'](){const _0x2c8c21=require(a23_0x3171('0x8'));this[a23_0x3171('0x9')]=new _0x2c8c21(stationSettings_1['StationContext']['settings']['portCOM'],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a23_0x3171('0xa')});const _0x2ae442=_0x2c8c21['parsers'][a23_0x3171('0xb')];const _0x36bdf0=new _0x2ae442('\x0d\x0a');this['serialPort'][a23_0x3171('0xc')](_0x36bdf0);this[a23_0x3171('0x9')]['on'](a23_0x3171('0xd'),this[a23_0x3171('0xe')][a23_0x3171('0xf')](this));this[a23_0x3171('0x9')]['on']('close',this[a23_0x3171('0x10')][a23_0x3171('0xf')](this));this['serialPort']['on'](a23_0x3171('0x11'),this['serialPortOnError'][a23_0x3171('0xf')](this));this[a23_0x3171('0x9')]['on'](a23_0x3171('0x12'),this['serialPortOnData'][a23_0x3171('0xf')](this));this['serialPort']['on'](a23_0x3171('0x13'),this['serialPortOnReadable'][a23_0x3171('0xf')](this));_0x36bdf0['on'](a23_0x3171('0x12'),this[a23_0x3171('0x14')][a23_0x3171('0xf')](this));console[a23_0x3171('0x5')](a23_0x3171('0x15'));}[a23_0x3171('0xe')](){console[a23_0x3171('0x5')](a23_0x3171('0x16')+stationSettings_1[a23_0x3171('0x17')][a23_0x3171('0x18')][a23_0x3171('0x19')]);}[a23_0x3171('0x10')](){console['log']('port\x20closed.');setTimeout(function(){this[a23_0x3171('0x7')]()[a23_0x3171('0xf')](this);},0x1388);}[a23_0x3171('0x1a')](_0x3f5344){console[a23_0x3171('0x11')](a23_0x3171('0x1b')+_0x3f5344);setTimeout(function(){this[a23_0x3171('0x7')]();}[a23_0x3171('0xf')](this),0x1388);}[a23_0x3171('0x14')](_0xb1c97a){this[a23_0x3171('0x3')][a23_0x3171('0x1c')]['update'](_0xb1c97a);}[a23_0x3171('0x1d')](_0x2afd38){}['serialPortOnReadable'](){this[a23_0x3171('0x9')]['read']();}}exports[a23_0x3171('0x1e')]=SerialPortService;