var a24_0x15dd=['debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','ENVIRONMENT','NODE_ENV','env','SESSION_SECRET','MONGODB_URI','MONGODB_URI_LOCAL','error','No\x20client\x20secret.\x20Set\x20SESSION_SECRET\x20environment\x20variable.','exit','No\x20mongo\x20connection\x20string.\x20Set\x20MONGODB_URI\x20environment\x20variable.','__esModule','defineProperty','./logger','dotenv','default','existsSync','.env'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a24_0x15dd,0x10a));var a24_0x4f1a=function(_0xffe46d,_0x4c1420){_0xffe46d=_0xffe46d-0x0;var _0x3873c6=a24_0x15dd[_0xffe46d];return _0x3873c6;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1a0636){return _0x1a0636&&_0x1a0636[a24_0x4f1a('0x0')]?_0x1a0636:{'default':_0x1a0636};};Object[a24_0x4f1a('0x1')](exports,'__esModule',{'value':!![]});const logger_1=__importDefault(require(a24_0x4f1a('0x2')));const dotenv_1=__importDefault(require(a24_0x4f1a('0x3')));const fs_1=__importDefault(require('fs'));if(fs_1[a24_0x4f1a('0x4')][a24_0x4f1a('0x5')](a24_0x4f1a('0x6'))){logger_1[a24_0x4f1a('0x4')][a24_0x4f1a('0x7')](a24_0x4f1a('0x8'));dotenv_1[a24_0x4f1a('0x4')][a24_0x4f1a('0x9')]({'path':'.env'});}else{logger_1['default'][a24_0x4f1a('0x7')](a24_0x4f1a('0xa'));dotenv_1[a24_0x4f1a('0x4')][a24_0x4f1a('0x9')]({'path':'.env.example'});}exports[a24_0x4f1a('0xb')]=process['env'][a24_0x4f1a('0xc')];const prod=exports['ENVIRONMENT']==='production';exports['SESSION_SECRET']=process[a24_0x4f1a('0xd')][a24_0x4f1a('0xe')];exports[a24_0x4f1a('0xf')]=prod?process[a24_0x4f1a('0xd')][a24_0x4f1a('0xf')]:process[a24_0x4f1a('0xd')][a24_0x4f1a('0x10')];if(!exports['SESSION_SECRET']){logger_1['default'][a24_0x4f1a('0x11')](a24_0x4f1a('0x12'));process[a24_0x4f1a('0x13')](0x1);}if(!exports[a24_0x4f1a('0xf')]){logger_1[a24_0x4f1a('0x4')][a24_0x4f1a('0x11')](a24_0x4f1a('0x14'));process[a24_0x4f1a('0x13')](0x1);}