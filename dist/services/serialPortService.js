var a20_0x4380=['../infrastructure/stationSettings','gpsService','init','log','init\x20SerialPortService','openCOM','serialPort','settings','portCOM','none','parsers','Readline','pipe','open','serialPortOnOpen','bind','close','error','data','serialPortOnData','readable','serialPortOnReadable','parserOnData','init\x20SerialPort','Port\x20opened:\x20','StationContext','serialPortOnClose','serialPortOnError','Serial\x20port\x20error:\x20','gps','update','read','defineProperty','__esModule'];(function(_0x2b84d3,_0x5f2ce3){var _0x334acd=function(_0x567074){while(--_0x567074){_0x2b84d3['push'](_0x2b84d3['shift']());}};_0x334acd(++_0x5f2ce3);}(a20_0x4380,0x174));var a20_0x3194=function(_0x45e8f3,_0x48391e){_0x45e8f3=_0x45e8f3-0x0;var _0x51fbf2=a20_0x4380[_0x45e8f3];return _0x51fbf2;};'use strict';Object[a20_0x3194('0x0')](exports,a20_0x3194('0x1'),{'value':!![]});const stationSettings_1=require(a20_0x3194('0x2'));class SerialPortService{constructor(_0x5b2f8c){this[a20_0x3194('0x3')]=_0x5b2f8c;}[a20_0x3194('0x4')](){console[a20_0x3194('0x5')](a20_0x3194('0x6'));this['openCOM']();}[a20_0x3194('0x7')](){const _0x4d76f5=require('serialport');this[a20_0x3194('0x8')]=new _0x4d76f5(stationSettings_1['StationContext'][a20_0x3194('0x9')][a20_0x3194('0xa')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a20_0x3194('0xb')});const _0x5876d6=_0x4d76f5[a20_0x3194('0xc')][a20_0x3194('0xd')];const _0x195e60=new _0x5876d6('\x0d\x0a');this[a20_0x3194('0x8')][a20_0x3194('0xe')](_0x195e60);this[a20_0x3194('0x8')]['on'](a20_0x3194('0xf'),this[a20_0x3194('0x10')][a20_0x3194('0x11')](this));this[a20_0x3194('0x8')]['on'](a20_0x3194('0x12'),this['serialPortOnClose'][a20_0x3194('0x11')](this));this[a20_0x3194('0x8')]['on'](a20_0x3194('0x13'),this['serialPortOnError'][a20_0x3194('0x11')](this));this[a20_0x3194('0x8')]['on'](a20_0x3194('0x14'),this[a20_0x3194('0x15')][a20_0x3194('0x11')](this));this[a20_0x3194('0x8')]['on'](a20_0x3194('0x16'),this[a20_0x3194('0x17')][a20_0x3194('0x11')](this));_0x195e60['on']('data',this[a20_0x3194('0x18')][a20_0x3194('0x11')](this));console[a20_0x3194('0x5')](a20_0x3194('0x19'));}['serialPortOnOpen'](){console[a20_0x3194('0x5')](a20_0x3194('0x1a')+stationSettings_1[a20_0x3194('0x1b')][a20_0x3194('0x9')][a20_0x3194('0xa')]);}[a20_0x3194('0x1c')](){console[a20_0x3194('0x5')]('port\x20closed.');setTimeout(function(){this['openCOM']()[a20_0x3194('0x11')](this);},0x1388);}[a20_0x3194('0x1d')](_0x49ce53){console['error'](a20_0x3194('0x1e')+_0x49ce53);setTimeout(function(){this[a20_0x3194('0x7')]();}['bind'](this),0x1388);}[a20_0x3194('0x18')](_0x5de3e6){this[a20_0x3194('0x3')][a20_0x3194('0x1f')][a20_0x3194('0x20')](_0x5de3e6);}[a20_0x3194('0x15')](_0x4ff97c){}[a20_0x3194('0x17')](){this[a20_0x3194('0x8')][a20_0x3194('0x21')]();}}exports['SerialPortService']=SerialPortService;