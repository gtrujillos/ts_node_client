var a24_0x318d=['No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__importDefault','__esModule','defineProperty','./logger','dotenv','default','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env.example','ENVIRONMENT','SESSION_SECRET','env','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit'];(function(_0x2fbeca,_0x302170){var _0x1ae02f=function(_0x1066ee){while(--_0x1066ee){_0x2fbeca['push'](_0x2fbeca['shift']());}};_0x1ae02f(++_0x302170);}(a24_0x318d,0x166));var a24_0x9e81=function(_0x1d2076,_0x2a7e5a){_0x1d2076=_0x1d2076-0x0;var _0x6ffefc=a24_0x318d[_0x1d2076];return _0x6ffefc;};'use strict';var __importDefault=this&&this[a24_0x9e81('0x0')]||function(_0x1a2462){return _0x1a2462&&_0x1a2462[a24_0x9e81('0x1')]?_0x1a2462:{'default':_0x1a2462};};Object[a24_0x9e81('0x2')](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require(a24_0x9e81('0x3')));const dotenv_1=__importDefault(require(a24_0x9e81('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1[a24_0x9e81('0x5')][a24_0x9e81('0x6')](a24_0x9e81('0x7'))){logger_1[a24_0x9e81('0x5')][a24_0x9e81('0x8')](a24_0x9e81('0x9'));dotenv_1[a24_0x9e81('0x5')]['config']({'path':a24_0x9e81('0x7')});}else{logger_1[a24_0x9e81('0x5')][a24_0x9e81('0x8')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a24_0x9e81('0x5')][a24_0x9e81('0xa')]({'path':a24_0x9e81('0xb')});}exports[a24_0x9e81('0xc')]=process['env']['NODE_ENV'];const prod=exports[a24_0x9e81('0xc')]==='production';exports[a24_0x9e81('0xd')]=process[a24_0x9e81('0xe')][a24_0x9e81('0xd')];exports[a24_0x9e81('0xf')]=prod?process[a24_0x9e81('0xe')]['MONGODB_URI']:process[a24_0x9e81('0xe')][a24_0x9e81('0x10')];if(!exports['SESSION_SECRET']){logger_1[a24_0x9e81('0x5')][a24_0x9e81('0x11')](a24_0x9e81('0x12'));process[a24_0x9e81('0x13')](0x1);}if(!exports[a24_0x9e81('0xf')]){logger_1[a24_0x9e81('0x5')]['error'](a24_0x9e81('0x14'));process[a24_0x9e81('0x13')](0x1);}