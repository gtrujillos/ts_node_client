var a24_0x250d=['MONGODB_URI_LOCAL','error','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__importDefault','__esModule','defineProperty','./logger','dotenv','default','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','.env','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','NODE_ENV','production','SESSION_SECRET','env','MONGODB_URI'];(function(_0x166498,_0x4e6523){var _0x139a16=function(_0xe759fb){while(--_0xe759fb){_0x166498['push'](_0x166498['shift']());}};_0x139a16(++_0x4e6523);}(a24_0x250d,0x1a6));var a24_0x7a5b=function(_0x499132,_0x48f16f){_0x499132=_0x499132-0x0;var _0x3713c0=a24_0x250d[_0x499132];return _0x3713c0;};'use strict';var __importDefault=this&&this[a24_0x7a5b('0x0')]||function(_0x431eb3){return _0x431eb3&&_0x431eb3[a24_0x7a5b('0x1')]?_0x431eb3:{'default':_0x431eb3};};Object[a24_0x7a5b('0x2')](exports,a24_0x7a5b('0x1'),{'value':!![]});const logger_1=__importDefault(require(a24_0x7a5b('0x3')));const dotenv_1=__importDefault(require(a24_0x7a5b('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1['default']['existsSync']('.env')){logger_1[a24_0x7a5b('0x5')][a24_0x7a5b('0x6')](a24_0x7a5b('0x7'));dotenv_1[a24_0x7a5b('0x5')][a24_0x7a5b('0x8')]({'path':a24_0x7a5b('0x9')});}else{logger_1[a24_0x7a5b('0x5')][a24_0x7a5b('0x6')](a24_0x7a5b('0xa'));dotenv_1[a24_0x7a5b('0x5')]['config']({'path':a24_0x7a5b('0xb')});}exports[a24_0x7a5b('0xc')]=process['env'][a24_0x7a5b('0xd')];const prod=exports[a24_0x7a5b('0xc')]===a24_0x7a5b('0xe');exports[a24_0x7a5b('0xf')]=process[a24_0x7a5b('0x10')][a24_0x7a5b('0xf')];exports[a24_0x7a5b('0x11')]=prod?process[a24_0x7a5b('0x10')][a24_0x7a5b('0x11')]:process['env'][a24_0x7a5b('0x12')];if(!exports[a24_0x7a5b('0xf')]){logger_1['default'][a24_0x7a5b('0x13')]('No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.');process[a24_0x7a5b('0x14')](0x1);}if(!exports[a24_0x7a5b('0x11')]){logger_1[a24_0x7a5b('0x5')][a24_0x7a5b('0x13')](a24_0x7a5b('0x15'));process[a24_0x7a5b('0x14')](0x1);}