var a21_0x5608=['read','SerialPortService','defineProperty','__esModule','../infrastructure/stationSettings','gpsService','init','init\x20SerialPortService','serialport','serialPort','StationContext','settings','none','parsers','Readline','pipe','open','bind','serialPortOnClose','error','serialPortOnError','data','serialPortOnData','readable','serialPortOnReadable','log','init\x20SerialPort','Port\x20opened:\x20','portCOM','port\x20closed.','openCOM','Serial\x20port\x20error:\x20','gps','update'];(function(_0x3bb575,_0x4dad3f){var _0x1ffdc9=function(_0x105216){while(--_0x105216){_0x3bb575['push'](_0x3bb575['shift']());}};_0x1ffdc9(++_0x4dad3f);}(a21_0x5608,0xac));var a21_0x1535=function(_0x1a08b6,_0x45d265){_0x1a08b6=_0x1a08b6-0x0;var _0x29bfc2=a21_0x5608[_0x1a08b6];return _0x29bfc2;};'use strict';Object[a21_0x1535('0x0')](exports,a21_0x1535('0x1'),{'value':!![]});const stationSettings_1=require(a21_0x1535('0x2'));class SerialPortService{constructor(_0x298f40){this[a21_0x1535('0x3')]=_0x298f40;}[a21_0x1535('0x4')](){console['log'](a21_0x1535('0x5'));this['openCOM']();}['openCOM'](){const _0x16b713=require(a21_0x1535('0x6'));this[a21_0x1535('0x7')]=new _0x16b713(stationSettings_1[a21_0x1535('0x8')][a21_0x1535('0x9')]['portCOM'],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a21_0x1535('0xa')});const _0x4f5c88=_0x16b713[a21_0x1535('0xb')][a21_0x1535('0xc')];const _0x478a95=new _0x4f5c88('\x0d\x0a');this[a21_0x1535('0x7')][a21_0x1535('0xd')](_0x478a95);this[a21_0x1535('0x7')]['on'](a21_0x1535('0xe'),this['serialPortOnOpen'][a21_0x1535('0xf')](this));this['serialPort']['on']('close',this[a21_0x1535('0x10')][a21_0x1535('0xf')](this));this[a21_0x1535('0x7')]['on'](a21_0x1535('0x11'),this[a21_0x1535('0x12')]['bind'](this));this[a21_0x1535('0x7')]['on'](a21_0x1535('0x13'),this[a21_0x1535('0x14')][a21_0x1535('0xf')](this));this[a21_0x1535('0x7')]['on'](a21_0x1535('0x15'),this[a21_0x1535('0x16')]['bind'](this));_0x478a95['on']('data',this['parserOnData']['bind'](this));console[a21_0x1535('0x17')](a21_0x1535('0x18'));}['serialPortOnOpen'](){console[a21_0x1535('0x17')](a21_0x1535('0x19')+stationSettings_1[a21_0x1535('0x8')][a21_0x1535('0x9')][a21_0x1535('0x1a')]);}[a21_0x1535('0x10')](){console['log'](a21_0x1535('0x1b'));setTimeout(function(){this[a21_0x1535('0x1c')]()[a21_0x1535('0xf')](this);},0x1388);}[a21_0x1535('0x12')](_0x11606f){console[a21_0x1535('0x11')](a21_0x1535('0x1d')+_0x11606f);setTimeout(function(){this[a21_0x1535('0x1c')]();}[a21_0x1535('0xf')](this),0x1388);}['parserOnData'](_0x22577e){this['gpsService'][a21_0x1535('0x1e')][a21_0x1535('0x1f')](_0x22577e);}['serialPortOnData'](_0x41f66e){}[a21_0x1535('0x16')](){this[a21_0x1535('0x7')][a21_0x1535('0x20')]();}}exports[a21_0x1535('0x21')]=SerialPortService;