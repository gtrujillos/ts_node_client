var a24_0x13ca=['config','ENVIRONMENT','env','production','SESSION_SECRET','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','MONGODB_URI','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','exit','__esModule','defineProperty','./logger','dotenv','default','existsSync','.env','debug'];(function(_0x43a6af,_0x5315c3){var _0x3c0e5f=function(_0x894fac){while(--_0x894fac){_0x43a6af['push'](_0x43a6af['shift']());}};_0x3c0e5f(++_0x5315c3);}(a24_0x13ca,0x7d));var a24_0x1020=function(_0x3db581,_0x569256){_0x3db581=_0x3db581-0x0;var _0x49bdc7=a24_0x13ca[_0x3db581];return _0x49bdc7;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x591a0b){return _0x591a0b&&_0x591a0b[a24_0x1020('0x0')]?_0x591a0b:{'default':_0x591a0b};};Object[a24_0x1020('0x1')](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require(a24_0x1020('0x2')));const dotenv_1=__importDefault(require(a24_0x1020('0x3')));const fs_1=__importDefault(require('fs'));if(fs_1[a24_0x1020('0x4')][a24_0x1020('0x5')](a24_0x1020('0x6'))){logger_1[a24_0x1020('0x4')][a24_0x1020('0x7')]('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1['default'][a24_0x1020('0x8')]({'path':a24_0x1020('0x6')});}else{logger_1[a24_0x1020('0x4')][a24_0x1020('0x7')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a24_0x1020('0x4')][a24_0x1020('0x8')]({'path':'.env.example'});}exports[a24_0x1020('0x9')]=process[a24_0x1020('0xa')]['NODE_ENV'];const prod=exports[a24_0x1020('0x9')]===a24_0x1020('0xb');exports['SESSION_SECRET']=process[a24_0x1020('0xa')][a24_0x1020('0xc')];exports['MONGODB_URI']=prod?process[a24_0x1020('0xa')]['MONGODB_URI']:process['env'][a24_0x1020('0xd')];if(!exports[a24_0x1020('0xc')]){logger_1[a24_0x1020('0x4')][a24_0x1020('0xe')](a24_0x1020('0xf'));process['exit'](0x1);}if(!exports[a24_0x1020('0x10')]){logger_1[a24_0x1020('0x4')][a24_0x1020('0xe')](a24_0x1020('0x11'));process[a24_0x1020('0x12')](0x1);}