var a30_0x314e=['MONGODB_URI','env','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__esModule','defineProperty','./logger','default','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','production','SESSION_SECRET'];(function(_0x11ccef,_0x397257){var _0x4c0b53=function(_0x565821){while(--_0x565821){_0x11ccef['push'](_0x11ccef['shift']());}};_0x4c0b53(++_0x397257);}(a30_0x314e,0x1c0));var a30_0xb708=function(_0x465667,_0x265385){_0x465667=_0x465667-0x0;var _0xd2c601=a30_0x314e[_0x465667];return _0xd2c601;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3ebae6){return _0x3ebae6&&_0x3ebae6[a30_0xb708('0x0')]?_0x3ebae6:{'default':_0x3ebae6};};Object[a30_0xb708('0x1')](exports,a30_0xb708('0x0'),{'value':!![]});const logger_1=__importDefault(require(a30_0xb708('0x2')));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a30_0xb708('0x3')][a30_0xb708('0x4')](a30_0xb708('0x5'))){logger_1[a30_0xb708('0x3')][a30_0xb708('0x6')](a30_0xb708('0x7'));dotenv_1['default'][a30_0xb708('0x8')]({'path':'.env'});}else{logger_1[a30_0xb708('0x3')]['debug'](a30_0xb708('0x9'));dotenv_1['default'][a30_0xb708('0x8')]({'path':a30_0xb708('0xa')});}exports[a30_0xb708('0xb')]=process['env']['NODE_ENV'];const prod=exports[a30_0xb708('0xb')]===a30_0xb708('0xc');exports[a30_0xb708('0xd')]=process['env'][a30_0xb708('0xd')];exports[a30_0xb708('0xe')]=prod?process[a30_0xb708('0xf')][a30_0xb708('0xe')]:process[a30_0xb708('0xf')][a30_0xb708('0x10')];if(!exports[a30_0xb708('0xd')]){logger_1['default'][a30_0xb708('0x11')](a30_0xb708('0x12'));process[a30_0xb708('0x13')](0x1);}if(!exports[a30_0xb708('0xe')]){logger_1[a30_0xb708('0x3')][a30_0xb708('0x11')](a30_0xb708('0x14'));process[a30_0xb708('0x13')](0x1);}