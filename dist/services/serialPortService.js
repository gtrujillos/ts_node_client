var a20_0x4882=['settings','portCOM','none','pipe','open','serialPortOnOpen','bind','serialPortOnClose','serialPortOnError','data','serialPortOnData','readable','log','init\x20SerialPort','StationContext','port\x20closed.','parserOnData','gps','update','serialPortOnReadable','read','SerialPortService','defineProperty','__esModule','../infrastructure/stationSettings','init','openCOM','serialport','serialPort'];(function(_0x415584,_0x5e607b){var _0x476d33=function(_0x100aa2){while(--_0x100aa2){_0x415584['push'](_0x415584['shift']());}};_0x476d33(++_0x5e607b);}(a20_0x4882,0xc4));var a20_0x4747=function(_0x2c7e99,_0x4f1e1e){_0x2c7e99=_0x2c7e99-0x0;var _0xef8e45=a20_0x4882[_0x2c7e99];return _0xef8e45;};'use strict';Object[a20_0x4747('0x0')](exports,a20_0x4747('0x1'),{'value':!![]});const stationSettings_1=require(a20_0x4747('0x2'));class SerialPortService{constructor(_0x34d89c){this['gpsService']=_0x34d89c;}[a20_0x4747('0x3')](){this[a20_0x4747('0x4')]();}['openCOM'](){const _0x2626a2=require(a20_0x4747('0x5'));this[a20_0x4747('0x6')]=new _0x2626a2(stationSettings_1['StationContext'][a20_0x4747('0x7')][a20_0x4747('0x8')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a20_0x4747('0x9')});const _0x44d90e=_0x2626a2['parsers']['Readline'];const _0x3f860c=new _0x44d90e('\x0d\x0a');this[a20_0x4747('0x6')][a20_0x4747('0xa')](_0x3f860c);this[a20_0x4747('0x6')]['on'](a20_0x4747('0xb'),this[a20_0x4747('0xc')][a20_0x4747('0xd')](this));this['serialPort']['on']('close',this[a20_0x4747('0xe')][a20_0x4747('0xd')](this));this[a20_0x4747('0x6')]['on']('error',this[a20_0x4747('0xf')][a20_0x4747('0xd')](this));this['serialPort']['on'](a20_0x4747('0x10'),this[a20_0x4747('0x11')][a20_0x4747('0xd')](this));this[a20_0x4747('0x6')]['on'](a20_0x4747('0x12'),this['serialPortOnReadable']['bind'](this));_0x3f860c['on']('data',this['parserOnData'][a20_0x4747('0xd')](this));console[a20_0x4747('0x13')](a20_0x4747('0x14'));}[a20_0x4747('0xc')](){console[a20_0x4747('0x13')]('Port\x20opened:\x20'+stationSettings_1[a20_0x4747('0x15')][a20_0x4747('0x7')]['portCOM']);}['serialPortOnClose'](){console['log'](a20_0x4747('0x16'));setTimeout(function(){this[a20_0x4747('0x4')]()['bind'](this);},0x1388);}[a20_0x4747('0xf')](_0x4938f2){console['error']('Serial\x20port\x20error:\x20'+_0x4938f2);setTimeout(function(){this[a20_0x4747('0x4')]();}[a20_0x4747('0xd')](this),0x1388);}[a20_0x4747('0x17')](_0xd533c9){this['gpsService'][a20_0x4747('0x18')][a20_0x4747('0x19')](_0xd533c9);}[a20_0x4747('0x11')](_0x1db9cd){}[a20_0x4747('0x1a')](){this['serialPort'][a20_0x4747('0x1b')]();}}exports[a20_0x4747('0x1c')]=SerialPortService;