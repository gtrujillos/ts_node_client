var a21_0x2710=['../infrastructure/stationSettings','gpsService','init','log','openCOM','serialport','serialPort','StationContext','settings','portCOM','none','pipe','open','serialPortOnOpen','bind','close','serialPortOnClose','error','serialPortOnError','data','serialPortOnData','readable','serialPortOnReadable','init\x20SerialPort','Port\x20opened:\x20','port\x20closed.','Serial\x20port\x20error:\x20','parserOnData','update','read','defineProperty'];(function(_0x52105b,_0xfaae8a){var _0x395697=function(_0x56584c){while(--_0x56584c){_0x52105b['push'](_0x52105b['shift']());}};_0x395697(++_0xfaae8a);}(a21_0x2710,0x7b));var a21_0x9df2=function(_0x3116fa,_0x1f8e9e){_0x3116fa=_0x3116fa-0x0;var _0x1e74a9=a21_0x2710[_0x3116fa];return _0x1e74a9;};'use strict';Object[a21_0x9df2('0x0')](exports,'__esModule',{'value':!![]});const stationSettings_1=require(a21_0x9df2('0x1'));class SerialPortService{constructor(_0x475251){this[a21_0x9df2('0x2')]=_0x475251;}[a21_0x9df2('0x3')](){console[a21_0x9df2('0x4')]('init\x20SerialPortService');this[a21_0x9df2('0x5')]();}[a21_0x9df2('0x5')](){const _0x3a0825=require(a21_0x9df2('0x6'));this[a21_0x9df2('0x7')]=new _0x3a0825(stationSettings_1[a21_0x9df2('0x8')][a21_0x9df2('0x9')][a21_0x9df2('0xa')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a21_0x9df2('0xb')});const _0x4d6e75=_0x3a0825['parsers']['Readline'];const _0x4592fc=new _0x4d6e75('\x0d\x0a');this[a21_0x9df2('0x7')][a21_0x9df2('0xc')](_0x4592fc);this[a21_0x9df2('0x7')]['on'](a21_0x9df2('0xd'),this[a21_0x9df2('0xe')][a21_0x9df2('0xf')](this));this['serialPort']['on'](a21_0x9df2('0x10'),this[a21_0x9df2('0x11')][a21_0x9df2('0xf')](this));this[a21_0x9df2('0x7')]['on'](a21_0x9df2('0x12'),this[a21_0x9df2('0x13')][a21_0x9df2('0xf')](this));this[a21_0x9df2('0x7')]['on'](a21_0x9df2('0x14'),this[a21_0x9df2('0x15')][a21_0x9df2('0xf')](this));this['serialPort']['on'](a21_0x9df2('0x16'),this[a21_0x9df2('0x17')]['bind'](this));_0x4592fc['on'](a21_0x9df2('0x14'),this['parserOnData'][a21_0x9df2('0xf')](this));console['log'](a21_0x9df2('0x18'));}[a21_0x9df2('0xe')](){console[a21_0x9df2('0x4')](a21_0x9df2('0x19')+stationSettings_1[a21_0x9df2('0x8')][a21_0x9df2('0x9')][a21_0x9df2('0xa')]);}[a21_0x9df2('0x11')](){console[a21_0x9df2('0x4')](a21_0x9df2('0x1a'));setTimeout(function(){this[a21_0x9df2('0x5')]()[a21_0x9df2('0xf')](this);},0x1388);}[a21_0x9df2('0x13')](_0x25f584){console[a21_0x9df2('0x12')](a21_0x9df2('0x1b')+_0x25f584);setTimeout(function(){this['openCOM']();}[a21_0x9df2('0xf')](this),0x1388);}[a21_0x9df2('0x1c')](_0x5ff7ce){this[a21_0x9df2('0x2')]['gps'][a21_0x9df2('0x1d')](_0x5ff7ce);}[a21_0x9df2('0x15')](_0x70c677){}[a21_0x9df2('0x17')](){this[a21_0x9df2('0x7')][a21_0x9df2('0x1e')]();}}exports['SerialPortService']=SerialPortService;