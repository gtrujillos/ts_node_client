var a24_0xd948=['dotenv','default','existsSync','debug','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','ENVIRONMENT','env','NODE_ENV','SESSION_SECRET','MONGODB_URI','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','error','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__esModule','./logger'];(function(_0x98ebf1,_0x5d2471){var _0x14a882=function(_0xef153f){while(--_0xef153f){_0x98ebf1['push'](_0x98ebf1['shift']());}};_0x14a882(++_0x5d2471);}(a24_0xd948,0x6a));var a24_0x6ebb=function(_0x56a67b,_0x2dcf10){_0x56a67b=_0x56a67b-0x0;var _0x23e80f=a24_0xd948[_0x56a67b];return _0x23e80f;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2a57d2){return _0x2a57d2&&_0x2a57d2[a24_0x6ebb('0x0')]?_0x2a57d2:{'default':_0x2a57d2};};Object['defineProperty'](exports,a24_0x6ebb('0x0'),{'value':!![]});const logger_1=__importDefault(require(a24_0x6ebb('0x1')));const dotenv_1=__importDefault(require(a24_0x6ebb('0x2')));const fs_1=__importDefault(require('fs'));if(fs_1[a24_0x6ebb('0x3')][a24_0x6ebb('0x4')]('.env')){logger_1[a24_0x6ebb('0x3')][a24_0x6ebb('0x5')]('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1['default'][a24_0x6ebb('0x6')]({'path':'.env'});}else{logger_1[a24_0x6ebb('0x3')][a24_0x6ebb('0x5')](a24_0x6ebb('0x7'));dotenv_1['default'][a24_0x6ebb('0x6')]({'path':a24_0x6ebb('0x8')});}exports[a24_0x6ebb('0x9')]=process[a24_0x6ebb('0xa')][a24_0x6ebb('0xb')];const prod=exports['ENVIRONMENT']==='production';exports[a24_0x6ebb('0xc')]=process[a24_0x6ebb('0xa')][a24_0x6ebb('0xc')];exports[a24_0x6ebb('0xd')]=prod?process[a24_0x6ebb('0xa')][a24_0x6ebb('0xd')]:process[a24_0x6ebb('0xa')]['MONGODB_URI_LOCAL'];if(!exports[a24_0x6ebb('0xc')]){logger_1['default']['error'](a24_0x6ebb('0xe'));process[a24_0x6ebb('0xf')](0x1);}if(!exports[a24_0x6ebb('0xd')]){logger_1['default'][a24_0x6ebb('0x10')](a24_0x6ebb('0x11'));process['exit'](0x1);}