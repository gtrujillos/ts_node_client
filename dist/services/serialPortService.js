var a20_0x10e8=['serialPortOnError','data','serialPortOnData','readable','serialPortOnReadable','init\x20SerialPort','log','Port\x20opened:\x20','StationContext','settings','parserOnData','gps','defineProperty','__esModule','../infrastructure/stationSettings','gpsService','openCOM','serialPort','portCOM','parsers','pipe','open','serialPortOnOpen','bind','close','serialPortOnClose','error'];(function(_0x12ece3,_0x54dd8c){var _0x1708c2=function(_0x53c436){while(--_0x53c436){_0x12ece3['push'](_0x12ece3['shift']());}};_0x1708c2(++_0x54dd8c);}(a20_0x10e8,0xff));var a20_0x5229=function(_0x22c15c,_0x5cb07b){_0x22c15c=_0x22c15c-0x0;var _0x2f8aef=a20_0x10e8[_0x22c15c];return _0x2f8aef;};'use strict';Object[a20_0x5229('0x0')](exports,a20_0x5229('0x1'),{'value':!![]});const stationSettings_1=require(a20_0x5229('0x2'));class SerialPortService{constructor(_0x5f1cec){this[a20_0x5229('0x3')]=_0x5f1cec;}['init'](){this[a20_0x5229('0x4')]();}[a20_0x5229('0x4')](){const _0x3cb8f7=require('serialport');this[a20_0x5229('0x5')]=new _0x3cb8f7(stationSettings_1['StationContext']['settings'][a20_0x5229('0x6')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':'none'});const _0x4f123a=_0x3cb8f7[a20_0x5229('0x7')]['Readline'];const _0x6a5aef=new _0x4f123a('\x0d\x0a');this[a20_0x5229('0x5')][a20_0x5229('0x8')](_0x6a5aef);this[a20_0x5229('0x5')]['on'](a20_0x5229('0x9'),this[a20_0x5229('0xa')][a20_0x5229('0xb')](this));this[a20_0x5229('0x5')]['on'](a20_0x5229('0xc'),this[a20_0x5229('0xd')]['bind'](this));this['serialPort']['on'](a20_0x5229('0xe'),this[a20_0x5229('0xf')]['bind'](this));this[a20_0x5229('0x5')]['on'](a20_0x5229('0x10'),this[a20_0x5229('0x11')][a20_0x5229('0xb')](this));this[a20_0x5229('0x5')]['on'](a20_0x5229('0x12'),this[a20_0x5229('0x13')][a20_0x5229('0xb')](this));_0x6a5aef['on'](a20_0x5229('0x10'),this['parserOnData']['bind'](this));console['log'](a20_0x5229('0x14'));}[a20_0x5229('0xa')](){console[a20_0x5229('0x15')](a20_0x5229('0x16')+stationSettings_1[a20_0x5229('0x17')][a20_0x5229('0x18')][a20_0x5229('0x6')]);}[a20_0x5229('0xd')](){console[a20_0x5229('0x15')]('port\x20closed.');setTimeout(function(){this['openCOM']()[a20_0x5229('0xb')](this);},0x1388);}[a20_0x5229('0xf')](_0x352a7b){console[a20_0x5229('0xe')]('Serial\x20port\x20error:\x20'+_0x352a7b);setTimeout(function(){this['openCOM']();}[a20_0x5229('0xb')](this),0x1388);}[a20_0x5229('0x19')](_0x1ee05d){this[a20_0x5229('0x3')][a20_0x5229('0x1a')]['update'](_0x1ee05d);}[a20_0x5229('0x11')](_0x70c566){}['serialPortOnReadable'](){this[a20_0x5229('0x5')]['read']();}}exports['SerialPortService']=SerialPortService;