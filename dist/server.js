var a13_0x1be8=['get','port','log','env','\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','__importDefault','__esModule','./app','default','use','listen'];(function(_0x4367e8,_0x503880){var _0xd01e67=function(_0x443d21){while(--_0x443d21){_0x4367e8['push'](_0x4367e8['shift']());}};_0xd01e67(++_0x503880);}(a13_0x1be8,0x68));var a13_0x8525=function(_0x17189b,_0x31a1d4){_0x17189b=_0x17189b-0x0;var _0x265c24=a13_0x1be8[_0x17189b];return _0x265c24;};'use strict';var __importDefault=this&&this[a13_0x8525('0x0')]||function(_0x211c71){return _0x211c71&&_0x211c71[a13_0x8525('0x1')]?_0x211c71:{'default':_0x211c71};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const errorhandler_1=__importDefault(require('errorhandler'));const mainService_1=require('./services/mainService');const app_1=__importDefault(require(a13_0x8525('0x2')));const mainService=new mainService_1['MainService'](app_1[a13_0x8525('0x3')]);mainService['init']();app_1[a13_0x8525('0x3')][a13_0x8525('0x4')](errorhandler_1[a13_0x8525('0x3')]());const server=app_1[a13_0x8525('0x3')][a13_0x8525('0x5')](app_1[a13_0x8525('0x3')][a13_0x8525('0x6')](a13_0x8525('0x7')),()=>{console[a13_0x8525('0x8')]('\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode',app_1[a13_0x8525('0x3')][a13_0x8525('0x6')]('port'),app_1[a13_0x8525('0x3')][a13_0x8525('0x6')](a13_0x8525('0x9')));console[a13_0x8525('0x8')](a13_0x8525('0xa'));});exports[a13_0x8525('0x3')]=server;