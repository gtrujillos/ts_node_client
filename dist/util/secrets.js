var a30_0x15dd=['debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','ENVIRONMENT','NODE_ENV','env','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__esModule','defineProperty','./logger','dotenv','default','existsSync','.env'];(function(_0x2a26cf,_0x476fa5){var _0x3ead0c=function(_0x31df76){while(--_0x31df76){_0x2a26cf['push'](_0x2a26cf['shift']());}};_0x3ead0c(++_0x476fa5);}(a30_0x15dd,0x10a));var a30_0x4f1a=function(_0x14206c,_0xcacfce){_0x14206c=_0x14206c-0x0;var _0x2ab5f0=a30_0x15dd[_0x14206c];return _0x2ab5f0;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1a0636){return _0x1a0636&&_0x1a0636[a30_0x4f1a('0x0')]?_0x1a0636:{'default':_0x1a0636};};Object[a30_0x4f1a('0x1')](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require(a30_0x4f1a('0x2')));const dotenv_1=__importDefault(require(a30_0x4f1a('0x3')));const fs_1=__importDefault(require('fs'));if(fs_1[a30_0x4f1a('0x4')][a30_0x4f1a('0x5')](a30_0x4f1a('0x6'))){logger_1[a30_0x4f1a('0x4')][a30_0x4f1a('0x7')](a30_0x4f1a('0x8'));dotenv_1[a30_0x4f1a('0x4')][a30_0x4f1a('0x9')]({'path':'.env'});}else{logger_1['default'][a30_0x4f1a('0x7')](a30_0x4f1a('0xa'));dotenv_1[a30_0x4f1a('0x4')][a30_0x4f1a('0x9')]({'path':'.env.example'});}exports[a30_0x4f1a('0xb')]=process['env'][a30_0x4f1a('0xc')];const prod=exports['ENVIRONMENT']==='production';exports['SESSION_SECRET']=process[a30_0x4f1a('0xd')][a30_0x4f1a('0xe')];exports[a30_0x4f1a('0xf')]=prod?process[a30_0x4f1a('0xd')][a30_0x4f1a('0xf')]:process[a30_0x4f1a('0xd')][a30_0x4f1a('0x10')];if(!exports['SESSION_SECRET']){logger_1['default'][a30_0x4f1a('0x11')](a30_0x4f1a('0x12'));process[a30_0x4f1a('0x13')](0x1);}if(!exports[a30_0x4f1a('0xf')]){logger_1[a30_0x4f1a('0x4')][a30_0x4f1a('0x11')](a30_0x4f1a('0x14'));process[a30_0x4f1a('0x13')](0x1);}