var a24_0x136d=['read','SerialPortService','__esModule','../infrastructure/stationSettings','gpsService','openCOM','serialport','serialPort','settings','portCOM','none','parsers','pipe','open','serialPortOnOpen','bind','close','serialPortOnClose','error','serialPortOnError','serialPortOnData','readable','serialPortOnReadable','data','parserOnData','log','init\x20SerialPort','Port\x20opened:\x20','StationContext','Serial\x20port\x20error:\x20','gps','update'];(function(_0x3d06d8,_0x563282){var _0x44dddf=function(_0x21df48){while(--_0x21df48){_0x3d06d8['push'](_0x3d06d8['shift']());}};_0x44dddf(++_0x563282);}(a24_0x136d,0x142));var a24_0x530e=function(_0x1ba001,_0x296b86){_0x1ba001=_0x1ba001-0x0;var _0x2bf8fb=a24_0x136d[_0x1ba001];return _0x2bf8fb;};'use strict';Object['defineProperty'](exports,a24_0x530e('0x0'),{'value':!![]});const stationSettings_1=require(a24_0x530e('0x1'));class SerialPortService{constructor(_0x1cecbd){this[a24_0x530e('0x2')]=_0x1cecbd;}['init'](){console['log']('init\x20SerialPortService');this['openCOM']();}[a24_0x530e('0x3')](){const _0x4865ca=require(a24_0x530e('0x4'));this[a24_0x530e('0x5')]=new _0x4865ca(stationSettings_1['StationContext'][a24_0x530e('0x6')][a24_0x530e('0x7')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a24_0x530e('0x8')});const _0x2a78d8=_0x4865ca[a24_0x530e('0x9')]['Readline'];const _0x5bf160=new _0x2a78d8('\x0d\x0a');this[a24_0x530e('0x5')][a24_0x530e('0xa')](_0x5bf160);this[a24_0x530e('0x5')]['on'](a24_0x530e('0xb'),this[a24_0x530e('0xc')][a24_0x530e('0xd')](this));this[a24_0x530e('0x5')]['on'](a24_0x530e('0xe'),this[a24_0x530e('0xf')][a24_0x530e('0xd')](this));this[a24_0x530e('0x5')]['on'](a24_0x530e('0x10'),this[a24_0x530e('0x11')][a24_0x530e('0xd')](this));this[a24_0x530e('0x5')]['on']('data',this[a24_0x530e('0x12')][a24_0x530e('0xd')](this));this[a24_0x530e('0x5')]['on'](a24_0x530e('0x13'),this[a24_0x530e('0x14')][a24_0x530e('0xd')](this));_0x5bf160['on'](a24_0x530e('0x15'),this[a24_0x530e('0x16')]['bind'](this));console[a24_0x530e('0x17')](a24_0x530e('0x18'));}['serialPortOnOpen'](){console[a24_0x530e('0x17')](a24_0x530e('0x19')+stationSettings_1[a24_0x530e('0x1a')][a24_0x530e('0x6')]['portCOM']);}[a24_0x530e('0xf')](){console[a24_0x530e('0x17')]('port\x20closed.');setTimeout(function(){this['openCOM']()['bind'](this);},0x1388);}[a24_0x530e('0x11')](_0x25a628){console[a24_0x530e('0x10')](a24_0x530e('0x1b')+_0x25a628);setTimeout(function(){this['openCOM']();}[a24_0x530e('0xd')](this),0x1388);}['parserOnData'](_0x3fc09e){this['gpsService'][a24_0x530e('0x1c')][a24_0x530e('0x1d')](_0x3fc09e);}[a24_0x530e('0x12')](_0x3e140d){}[a24_0x530e('0x14')](){this[a24_0x530e('0x5')][a24_0x530e('0x1e')]();}}exports[a24_0x530e('0x1f')]=SerialPortService;