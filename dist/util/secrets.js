var a30_0x48c7=['__esModule','defineProperty','./logger','dotenv','default','.env','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','env','NODE_ENV','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','exit','__importDefault'];(function(_0x55e638,_0x4f71ca){var _0x5ac5be=function(_0x3322e7){while(--_0x3322e7){_0x55e638['push'](_0x55e638['shift']());}};_0x5ac5be(++_0x4f71ca);}(a30_0x48c7,0x71));var a30_0x1213=function(_0x1d7e82,_0x483860){_0x1d7e82=_0x1d7e82-0x0;var _0x5d969a=a30_0x48c7[_0x1d7e82];return _0x5d969a;};'use strict';var __importDefault=this&&this[a30_0x1213('0x0')]||function(_0x37e7a3){return _0x37e7a3&&_0x37e7a3[a30_0x1213('0x1')]?_0x37e7a3:{'default':_0x37e7a3};};Object[a30_0x1213('0x2')](exports,a30_0x1213('0x1'),{'value':!![]});const logger_1=__importDefault(require(a30_0x1213('0x3')));const dotenv_1=__importDefault(require(a30_0x1213('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1[a30_0x1213('0x5')]['existsSync'](a30_0x1213('0x6'))){logger_1['default']['debug']('Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a30_0x1213('0x5')][a30_0x1213('0x7')]({'path':'.env'});}else{logger_1['default']['debug'](a30_0x1213('0x8'));dotenv_1['default'][a30_0x1213('0x7')]({'path':a30_0x1213('0x9')});}exports['ENVIRONMENT']=process[a30_0x1213('0xa')][a30_0x1213('0xb')];const prod=exports['ENVIRONMENT']==='production';exports[a30_0x1213('0xc')]=process[a30_0x1213('0xa')][a30_0x1213('0xc')];exports[a30_0x1213('0xd')]=prod?process[a30_0x1213('0xa')][a30_0x1213('0xd')]:process[a30_0x1213('0xa')][a30_0x1213('0xe')];if(!exports[a30_0x1213('0xc')]){logger_1[a30_0x1213('0x5')][a30_0x1213('0xf')](a30_0x1213('0x10'));process['exit'](0x1);}if(!exports[a30_0x1213('0xd')]){logger_1[a30_0x1213('0x5')][a30_0x1213('0xf')](a30_0x1213('0x11'));process[a30_0x1213('0x12')](0x1);}