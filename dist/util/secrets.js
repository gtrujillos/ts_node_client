var a26_0x24c9=['.env.example','ENVIRONMENT','env','NODE_ENV','production','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','exit','__importDefault','defineProperty','__esModule','./logger','default','existsSync','debug','config','.env','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables'];(function(_0x5037ab,_0x458520){var _0x5d1de5=function(_0x2352c9){while(--_0x2352c9){_0x5037ab['push'](_0x5037ab['shift']());}};_0x5d1de5(++_0x458520);}(a26_0x24c9,0x1ae));var a26_0x27cf=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a26_0x24c9[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this[a26_0x27cf('0x0')]||function(_0x42ade7){return _0x42ade7&&_0x42ade7['__esModule']?_0x42ade7:{'default':_0x42ade7};};Object[a26_0x27cf('0x1')](exports,a26_0x27cf('0x2'),{'value':!![]});const logger_1=__importDefault(require(a26_0x27cf('0x3')));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a26_0x27cf('0x4')][a26_0x27cf('0x5')]('.env')){logger_1[a26_0x27cf('0x4')][a26_0x27cf('0x6')]('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1['default'][a26_0x27cf('0x7')]({'path':a26_0x27cf('0x8')});}else{logger_1[a26_0x27cf('0x4')][a26_0x27cf('0x6')](a26_0x27cf('0x9'));dotenv_1['default'][a26_0x27cf('0x7')]({'path':a26_0x27cf('0xa')});}exports[a26_0x27cf('0xb')]=process[a26_0x27cf('0xc')][a26_0x27cf('0xd')];const prod=exports[a26_0x27cf('0xb')]===a26_0x27cf('0xe');exports[a26_0x27cf('0xf')]=process[a26_0x27cf('0xc')][a26_0x27cf('0xf')];exports[a26_0x27cf('0x10')]=prod?process[a26_0x27cf('0xc')][a26_0x27cf('0x10')]:process['env'][a26_0x27cf('0x11')];if(!exports[a26_0x27cf('0xf')]){logger_1[a26_0x27cf('0x4')][a26_0x27cf('0x12')](a26_0x27cf('0x13'));process['exit'](0x1);}if(!exports[a26_0x27cf('0x10')]){logger_1[a26_0x27cf('0x4')][a26_0x27cf('0x12')](a26_0x27cf('0x14'));process[a26_0x27cf('0x15')](0x1);}