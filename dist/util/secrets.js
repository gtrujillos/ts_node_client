var a30_0x550c=['No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','exit','__importDefault','__esModule','defineProperty','dotenv','default','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env.example','ENVIRONMENT','env','production','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error'];(function(_0xb67384,_0x27295a){var _0x156d7c=function(_0x52a1f8){while(--_0x52a1f8){_0xb67384['push'](_0xb67384['shift']());}};_0x156d7c(++_0x27295a);}(a30_0x550c,0x1e6));var a30_0x56ae=function(_0x363212,_0x4694d0){_0x363212=_0x363212-0x0;var _0x533f13=a30_0x550c[_0x363212];return _0x533f13;};'use strict';var __importDefault=this&&this[a30_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a30_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a30_0x56ae('0x2')](exports,a30_0x56ae('0x1'),{'value':!![]});const logger_1=__importDefault(require('./logger'));const dotenv_1=__importDefault(require(a30_0x56ae('0x3')));const fs_1=__importDefault(require('fs'));if(fs_1[a30_0x56ae('0x4')][a30_0x56ae('0x5')](a30_0x56ae('0x6'))){logger_1['default'][a30_0x56ae('0x7')](a30_0x56ae('0x8'));dotenv_1[a30_0x56ae('0x4')][a30_0x56ae('0x9')]({'path':'.env'});}else{logger_1['default'][a30_0x56ae('0x7')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a30_0x56ae('0x4')][a30_0x56ae('0x9')]({'path':a30_0x56ae('0xa')});}exports[a30_0x56ae('0xb')]=process[a30_0x56ae('0xc')]['NODE_ENV'];const prod=exports[a30_0x56ae('0xb')]===a30_0x56ae('0xd');exports[a30_0x56ae('0xe')]=process['env']['SESSION_SECRET'];exports[a30_0x56ae('0xf')]=prod?process['env']['MONGODB_URI']:process[a30_0x56ae('0xc')][a30_0x56ae('0x10')];if(!exports[a30_0x56ae('0xe')]){logger_1[a30_0x56ae('0x4')][a30_0x56ae('0x11')](a30_0x56ae('0x12'));process['exit'](0x1);}if(!exports['MONGODB_URI']){logger_1['default']['error'](a30_0x56ae('0x13'));process[a30_0x56ae('0x14')](0x1);}