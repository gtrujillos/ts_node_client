var a23_0x7e08=['init\x20SerialPortService','openCOM','serialPort','StationContext','settings','portCOM','none','parsers','pipe','bind','close','error','serialPortOnError','data','serialPortOnData','readable','serialPortOnReadable','parserOnData','init\x20SerialPort','serialPortOnOpen','Port\x20opened:\x20','serialPortOnClose','port\x20closed.','read','SerialPortService','__esModule','../infrastructure/stationSettings','gpsService','init','log'];(function(_0x3040da,_0x30c56d){var _0x3e772b=function(_0xe77065){while(--_0xe77065){_0x3040da['push'](_0x3040da['shift']());}};_0x3e772b(++_0x30c56d);}(a23_0x7e08,0xcd));var a23_0x5691=function(_0x771cfd,_0x2d4917){_0x771cfd=_0x771cfd-0x0;var _0x19e9fe=a23_0x7e08[_0x771cfd];return _0x19e9fe;};'use strict';Object['defineProperty'](exports,a23_0x5691('0x0'),{'value':!![]});const stationSettings_1=require(a23_0x5691('0x1'));class SerialPortService{constructor(_0x177b63){this[a23_0x5691('0x2')]=_0x177b63;}[a23_0x5691('0x3')](){console[a23_0x5691('0x4')](a23_0x5691('0x5'));this[a23_0x5691('0x6')]();}['openCOM'](){const _0x525846=require('serialport');this[a23_0x5691('0x7')]=new _0x525846(stationSettings_1[a23_0x5691('0x8')][a23_0x5691('0x9')][a23_0x5691('0xa')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a23_0x5691('0xb')});const _0x44e0d3=_0x525846[a23_0x5691('0xc')]['Readline'];const _0x27d0af=new _0x44e0d3('\x0d\x0a');this[a23_0x5691('0x7')][a23_0x5691('0xd')](_0x27d0af);this[a23_0x5691('0x7')]['on']('open',this['serialPortOnOpen'][a23_0x5691('0xe')](this));this[a23_0x5691('0x7')]['on'](a23_0x5691('0xf'),this['serialPortOnClose'][a23_0x5691('0xe')](this));this[a23_0x5691('0x7')]['on'](a23_0x5691('0x10'),this[a23_0x5691('0x11')][a23_0x5691('0xe')](this));this[a23_0x5691('0x7')]['on'](a23_0x5691('0x12'),this[a23_0x5691('0x13')][a23_0x5691('0xe')](this));this[a23_0x5691('0x7')]['on'](a23_0x5691('0x14'),this[a23_0x5691('0x15')]['bind'](this));_0x27d0af['on'](a23_0x5691('0x12'),this[a23_0x5691('0x16')][a23_0x5691('0xe')](this));console[a23_0x5691('0x4')](a23_0x5691('0x17'));}[a23_0x5691('0x18')](){console['log'](a23_0x5691('0x19')+stationSettings_1[a23_0x5691('0x8')][a23_0x5691('0x9')]['portCOM']);}[a23_0x5691('0x1a')](){console[a23_0x5691('0x4')](a23_0x5691('0x1b'));setTimeout(function(){this['openCOM']()[a23_0x5691('0xe')](this);},0x1388);}[a23_0x5691('0x11')](_0x3d1e90){console[a23_0x5691('0x10')]('Serial\x20port\x20error:\x20'+_0x3d1e90);setTimeout(function(){this[a23_0x5691('0x6')]();}['bind'](this),0x1388);}['parserOnData'](_0x2633c1){this[a23_0x5691('0x2')]['gps']['update'](_0x2633c1);}[a23_0x5691('0x13')](_0x2cd92c){}[a23_0x5691('0x15')](){this['serialPort'][a23_0x5691('0x1c')]();}}exports[a23_0x5691('0x1d')]=SerialPortService;