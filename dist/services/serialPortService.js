var a20_0xe3fa=['gpsService','log','init\x20SerialPortService','openCOM','serialport','serialPort','StationContext','portCOM','none','parsers','Readline','pipe','bind','close','serialPortOnClose','error','serialPortOnError','data','serialPortOnData','readable','serialPortOnOpen','Port\x20opened:\x20','settings','Serial\x20port\x20error:\x20','parserOnData','gps','update','serialPortOnReadable','SerialPortService','defineProperty','__esModule'];(function(_0x102b38,_0x476074){var _0x2b2be3=function(_0x55fa43){while(--_0x55fa43){_0x102b38['push'](_0x102b38['shift']());}};_0x2b2be3(++_0x476074);}(a20_0xe3fa,0xf6));var a20_0x446a=function(_0xf1f966,_0x4db66d){_0xf1f966=_0xf1f966-0x0;var _0x263d0d=a20_0xe3fa[_0xf1f966];return _0x263d0d;};'use strict';Object[a20_0x446a('0x0')](exports,a20_0x446a('0x1'),{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');class SerialPortService{constructor(_0x1be04a){this[a20_0x446a('0x2')]=_0x1be04a;}['init'](){console[a20_0x446a('0x3')](a20_0x446a('0x4'));this['openCOM']();}[a20_0x446a('0x5')](){const _0x39eaef=require(a20_0x446a('0x6'));this[a20_0x446a('0x7')]=new _0x39eaef(stationSettings_1[a20_0x446a('0x8')]['settings'][a20_0x446a('0x9')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a20_0x446a('0xa')});const _0x196bc2=_0x39eaef[a20_0x446a('0xb')][a20_0x446a('0xc')];const _0x5e75e6=new _0x196bc2('\x0d\x0a');this[a20_0x446a('0x7')][a20_0x446a('0xd')](_0x5e75e6);this[a20_0x446a('0x7')]['on']('open',this['serialPortOnOpen'][a20_0x446a('0xe')](this));this['serialPort']['on'](a20_0x446a('0xf'),this[a20_0x446a('0x10')][a20_0x446a('0xe')](this));this[a20_0x446a('0x7')]['on'](a20_0x446a('0x11'),this[a20_0x446a('0x12')][a20_0x446a('0xe')](this));this['serialPort']['on'](a20_0x446a('0x13'),this[a20_0x446a('0x14')]['bind'](this));this[a20_0x446a('0x7')]['on'](a20_0x446a('0x15'),this['serialPortOnReadable'][a20_0x446a('0xe')](this));_0x5e75e6['on'](a20_0x446a('0x13'),this['parserOnData']['bind'](this));console[a20_0x446a('0x3')]('init\x20SerialPort');}[a20_0x446a('0x16')](){console[a20_0x446a('0x3')](a20_0x446a('0x17')+stationSettings_1[a20_0x446a('0x8')][a20_0x446a('0x18')]['portCOM']);}['serialPortOnClose'](){console['log']('port\x20closed.');setTimeout(function(){this[a20_0x446a('0x5')]()[a20_0x446a('0xe')](this);},0x1388);}[a20_0x446a('0x12')](_0x154958){console[a20_0x446a('0x11')](a20_0x446a('0x19')+_0x154958);setTimeout(function(){this['openCOM']();}[a20_0x446a('0xe')](this),0x1388);}[a20_0x446a('0x1a')](_0x553677){this[a20_0x446a('0x2')][a20_0x446a('0x1b')][a20_0x446a('0x1c')](_0x553677);}['serialPortOnData'](_0x1a86e9){}[a20_0x446a('0x1d')](){this[a20_0x446a('0x7')]['read']();}}exports[a20_0x446a('0x1e')]=SerialPortService;