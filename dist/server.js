var a13_0x4b36=['listen','port','log','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','get','__importDefault','defineProperty','__esModule','errorhandler','./services/mainService','./app','default','init','use'];(function(_0x21ad45,_0x48636e){var _0x1d0c65=function(_0xa71141){while(--_0xa71141){_0x21ad45['push'](_0x21ad45['shift']());}};_0x1d0c65(++_0x48636e);}(a13_0x4b36,0x139));var a13_0x93df=function(_0x41a4bf,_0x5dbe27){_0x41a4bf=_0x41a4bf-0x0;var _0x347dcd=a13_0x4b36[_0x41a4bf];return _0x347dcd;};'use strict';var __importDefault=this&&this[a13_0x93df('0x0')]||function(_0x4ccffa){return _0x4ccffa&&_0x4ccffa['__esModule']?_0x4ccffa:{'default':_0x4ccffa};};Object[a13_0x93df('0x1')](exports,a13_0x93df('0x2'),{'value':!![]});const errorhandler_1=__importDefault(require(a13_0x93df('0x3')));const mainService_1=require(a13_0x93df('0x4'));const app_1=__importDefault(require(a13_0x93df('0x5')));const mainService=new mainService_1['MainService'](app_1[a13_0x93df('0x6')]);mainService[a13_0x93df('0x7')]();app_1[a13_0x93df('0x6')][a13_0x93df('0x8')](errorhandler_1['default']());const server=app_1['default'][a13_0x93df('0x9')](app_1[a13_0x93df('0x6')]['get'](a13_0x93df('0xa')),()=>{console[a13_0x93df('0xb')](a13_0x93df('0xc'),app_1[a13_0x93df('0x6')][a13_0x93df('0xd')](a13_0x93df('0xa')),app_1[a13_0x93df('0x6')][a13_0x93df('0xd')]('env'));console[a13_0x93df('0xb')]('\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a');});exports[a13_0x93df('0x6')]=server;