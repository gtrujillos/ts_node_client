var a20_0x4c59=['read','SerialPortService','defineProperty','__esModule','init\x20SerialPortService','openCOM','serialport','serialPort','StationContext','settings','portCOM','none','Readline','pipe','open','bind','serialPortOnClose','error','serialPortOnError','data','serialPortOnData','readable','parserOnData','log','Port\x20opened:\x20','port\x20closed.','Serial\x20port\x20error:\x20','gpsService','gps','serialPortOnReadable'];(function(_0x510c59,_0x330e0f){var _0x3b71dd=function(_0x30ceea){while(--_0x30ceea){_0x510c59['push'](_0x510c59['shift']());}};_0x3b71dd(++_0x330e0f);}(a20_0x4c59,0x14c));var a20_0x46ec=function(_0x1b584,_0x440e1c){_0x1b584=_0x1b584-0x0;var _0x1fd111=a20_0x4c59[_0x1b584];return _0x1fd111;};'use strict';Object[a20_0x46ec('0x0')](exports,a20_0x46ec('0x1'),{'value':!![]});const stationSettings_1=require('../infrastructure/stationSettings');class SerialPortService{constructor(_0x3238bb){this['gpsService']=_0x3238bb;}['init'](){console['log'](a20_0x46ec('0x2'));this[a20_0x46ec('0x3')]();}[a20_0x46ec('0x3')](){const _0x45ee95=require(a20_0x46ec('0x4'));this[a20_0x46ec('0x5')]=new _0x45ee95(stationSettings_1[a20_0x46ec('0x6')][a20_0x46ec('0x7')][a20_0x46ec('0x8')],{'baudRate':0x2580,'dataBits':0x8,'stopBits':0x1,'parity':a20_0x46ec('0x9')});const _0xe45c6d=_0x45ee95['parsers'][a20_0x46ec('0xa')];const _0x4e954a=new _0xe45c6d('\x0d\x0a');this[a20_0x46ec('0x5')][a20_0x46ec('0xb')](_0x4e954a);this['serialPort']['on'](a20_0x46ec('0xc'),this['serialPortOnOpen'][a20_0x46ec('0xd')](this));this[a20_0x46ec('0x5')]['on']('close',this[a20_0x46ec('0xe')][a20_0x46ec('0xd')](this));this[a20_0x46ec('0x5')]['on'](a20_0x46ec('0xf'),this[a20_0x46ec('0x10')][a20_0x46ec('0xd')](this));this[a20_0x46ec('0x5')]['on'](a20_0x46ec('0x11'),this[a20_0x46ec('0x12')]['bind'](this));this['serialPort']['on'](a20_0x46ec('0x13'),this['serialPortOnReadable']['bind'](this));_0x4e954a['on'](a20_0x46ec('0x11'),this[a20_0x46ec('0x14')][a20_0x46ec('0xd')](this));console[a20_0x46ec('0x15')]('init\x20SerialPort');}['serialPortOnOpen'](){console[a20_0x46ec('0x15')](a20_0x46ec('0x16')+stationSettings_1[a20_0x46ec('0x6')][a20_0x46ec('0x7')][a20_0x46ec('0x8')]);}[a20_0x46ec('0xe')](){console[a20_0x46ec('0x15')](a20_0x46ec('0x17'));setTimeout(function(){this[a20_0x46ec('0x3')]()[a20_0x46ec('0xd')](this);},0x1388);}['serialPortOnError'](_0x8a522e){console[a20_0x46ec('0xf')](a20_0x46ec('0x18')+_0x8a522e);setTimeout(function(){this[a20_0x46ec('0x3')]();}[a20_0x46ec('0xd')](this),0x1388);}[a20_0x46ec('0x14')](_0x164016){this[a20_0x46ec('0x19')][a20_0x46ec('0x1a')]['update'](_0x164016);}['serialPortOnData'](_0x35b7b2){}[a20_0x46ec('0x1b')](){this[a20_0x46ec('0x5')][a20_0x46ec('0x1c')]();}}exports[a20_0x46ec('0x1d')]=SerialPortService;