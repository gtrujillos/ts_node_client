var a20_0x24f3=['read','SerialPortService','defineProperty','__esModule','../infrastructure/stationSettings','gpsService','log','openCOM','serialPort','StationContext','portCOM','none','Readline','pipe','open','serialPortOnOpen','bind','close','serialPortOnClose','error','serialPortOnData','readable','serialPortOnReadable','parserOnData','init\x20SerialPort','settings','port\x20closed.','serialPortOnError','Serial\x20port\x20error:\x20','gps'];(function(_0x55ebbe,_0x6c644a){var _0xcc62f7=function(_0xd7dbac){while(--_0xd7dbac){_0x55ebbe['push'](_0x55ebbe['shift']());}};_0xcc62f7(++_0x6c644a);}(a20_0x24f3,0x1a6));var a20_0x3ecb=function(_0x26df3f,_0x129937){_0x26df3f=_0x26df3f-0x0;var _0x2016be=a20_0x24f3[_0x26df3f];return _0x2016be;};'use strict';Object[a20_0x3ecb('0x0')](exports,a20_0x3ecb('0x1'),{'value':!![]});const stationSettings_1=require(a20_0x3ecb('0x2'));class SerialPortService{constructor(_0x1e379c){this[a20_0x3ecb('0x3')]=_0x1e379c;}['init'](){console[a20_0x3ecb('0x4')]('init\x20SerialPortService');this['openCOM']();}[a20_0x3ecb('0x5')](){const _0x231246=require('serialport');this[a20_0x3ecb('0x6')]=new _0x231246(stationSettings_1[a20_0x3ecb('0x7')]['settings'][a20_0x3ecb('0x8')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a20_0x3ecb('0x9')});const _0x1f15e7=_0x231246['parsers'][a20_0x3ecb('0xa')];const _0x4518b8=new _0x1f15e7('\x0d\x0a');this['serialPort'][a20_0x3ecb('0xb')](_0x4518b8);this[a20_0x3ecb('0x6')]['on'](a20_0x3ecb('0xc'),this[a20_0x3ecb('0xd')][a20_0x3ecb('0xe')](this));this[a20_0x3ecb('0x6')]['on'](a20_0x3ecb('0xf'),this[a20_0x3ecb('0x10')][a20_0x3ecb('0xe')](this));this[a20_0x3ecb('0x6')]['on'](a20_0x3ecb('0x11'),this['serialPortOnError'][a20_0x3ecb('0xe')](this));this[a20_0x3ecb('0x6')]['on']('data',this[a20_0x3ecb('0x12')][a20_0x3ecb('0xe')](this));this[a20_0x3ecb('0x6')]['on'](a20_0x3ecb('0x13'),this[a20_0x3ecb('0x14')][a20_0x3ecb('0xe')](this));_0x4518b8['on']('data',this[a20_0x3ecb('0x15')]['bind'](this));console['log'](a20_0x3ecb('0x16'));}[a20_0x3ecb('0xd')](){console['log']('Port\x20opened:\x20'+stationSettings_1[a20_0x3ecb('0x7')][a20_0x3ecb('0x17')][a20_0x3ecb('0x8')]);}[a20_0x3ecb('0x10')](){console['log'](a20_0x3ecb('0x18'));setTimeout(function(){this[a20_0x3ecb('0x5')]()[a20_0x3ecb('0xe')](this);},0x1388);}[a20_0x3ecb('0x19')](_0x36a317){console['error'](a20_0x3ecb('0x1a')+_0x36a317);setTimeout(function(){this[a20_0x3ecb('0x5')]();}[a20_0x3ecb('0xe')](this),0x1388);}['parserOnData'](_0x5ddd04){this[a20_0x3ecb('0x3')][a20_0x3ecb('0x1b')]['update'](_0x5ddd04);}['serialPortOnData'](_0x2d6f2c){}[a20_0x3ecb('0x14')](){this[a20_0x3ecb('0x6')][a20_0x3ecb('0x1c')]();}}exports[a20_0x3ecb('0x1d')]=SerialPortService;