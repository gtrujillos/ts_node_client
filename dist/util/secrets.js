var a25_0x2dce=['SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__importDefault','__esModule','defineProperty','default','existsSync','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','env','NODE_ENV','production'];(function(_0x387ad4,_0x1372d6){var _0x33ddc7=function(_0x141545){while(--_0x141545){_0x387ad4['push'](_0x387ad4['shift']());}};_0x33ddc7(++_0x1372d6);}(a25_0x2dce,0x1c0));var a25_0x193f=function(_0x5db683,_0x3e3211){_0x5db683=_0x5db683-0x0;var _0x58873f=a25_0x2dce[_0x5db683];return _0x58873f;};'use strict';var __importDefault=this&&this[a25_0x193f('0x0')]||function(_0xe0020f){return _0xe0020f&&_0xe0020f[a25_0x193f('0x1')]?_0xe0020f:{'default':_0xe0020f};};Object[a25_0x193f('0x2')](exports,a25_0x193f('0x1'),{'value':!![]});const logger_1=__importDefault(require('./logger'));const dotenv_1=__importDefault(require('dotenv'));const fs_1=__importDefault(require('fs'));if(fs_1[a25_0x193f('0x3')][a25_0x193f('0x4')]('.env')){logger_1[a25_0x193f('0x3')][a25_0x193f('0x5')](a25_0x193f('0x6'));dotenv_1[a25_0x193f('0x3')][a25_0x193f('0x7')]({'path':'.env'});}else{logger_1[a25_0x193f('0x3')][a25_0x193f('0x5')](a25_0x193f('0x8'));dotenv_1[a25_0x193f('0x3')][a25_0x193f('0x7')]({'path':a25_0x193f('0x9')});}exports[a25_0x193f('0xa')]=process[a25_0x193f('0xb')][a25_0x193f('0xc')];const prod=exports[a25_0x193f('0xa')]===a25_0x193f('0xd');exports[a25_0x193f('0xe')]=process[a25_0x193f('0xb')][a25_0x193f('0xe')];exports[a25_0x193f('0xf')]=prod?process[a25_0x193f('0xb')][a25_0x193f('0xf')]:process[a25_0x193f('0xb')][a25_0x193f('0x10')];if(!exports[a25_0x193f('0xe')]){logger_1[a25_0x193f('0x3')][a25_0x193f('0x11')](a25_0x193f('0x12'));process[a25_0x193f('0x13')](0x1);}if(!exports['MONGODB_URI']){logger_1['default'][a25_0x193f('0x11')](a25_0x193f('0x14'));process[a25_0x193f('0x13')](0x1);}