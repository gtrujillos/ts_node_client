var a0_0x58fe=['join','../views','view\x20engine','pug','use','json','urlencoded','static','__importDefault','__esModule','defineProperty','express','compression','body-parser','./util/logger','dotenv','path','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','default','config','.env.example','env','set','views'];(function(_0x46e34c,_0x58592a){var _0x4f75bd=function(_0x491c57){while(--_0x491c57){_0x46e34c['push'](_0x46e34c['shift']());}};_0x4f75bd(++_0x58592a);}(a0_0x58fe,0xd8));var a0_0x4df5=function(_0x51119a,_0x33f56b){_0x51119a=_0x51119a-0x0;var _0x1c32bf=a0_0x58fe[_0x51119a];return _0x1c32bf;};'use strict';var __importDefault=this&&this[a0_0x4df5('0x0')]||function(_0x1715bf){return _0x1715bf&&_0x1715bf[a0_0x4df5('0x1')]?_0x1715bf:{'default':_0x1715bf};};Object[a0_0x4df5('0x2')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a0_0x4df5('0x3')));const compression_1=__importDefault(require(a0_0x4df5('0x4')));const body_parser_1=__importDefault(require(a0_0x4df5('0x5')));const logger_1=__importDefault(require(a0_0x4df5('0x6')));const dotenv_1=__importDefault(require(a0_0x4df5('0x7')));const path_1=__importDefault(require(a0_0x4df5('0x8')));const express_validator_1=__importDefault(require('express-validator'));const fs_1=__importDefault(require('fs'));if(fs_1['default']['existsSync'](a0_0x4df5('0x9'))){logger_1['default'][a0_0x4df5('0xa')](a0_0x4df5('0xb'));dotenv_1['default']['config']({'path':'.env'});}else{logger_1[a0_0x4df5('0xc')]['debug']('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a0_0x4df5('0xc')][a0_0x4df5('0xd')]({'path':a0_0x4df5('0xe')});}const app=express_1[a0_0x4df5('0xc')]();app['set']('port',process[a0_0x4df5('0xf')]['PORT']||0xbb8);app[a0_0x4df5('0x10')](a0_0x4df5('0x11'),path_1[a0_0x4df5('0xc')][a0_0x4df5('0x12')](__dirname,a0_0x4df5('0x13')));app[a0_0x4df5('0x10')](a0_0x4df5('0x14'),a0_0x4df5('0x15'));app[a0_0x4df5('0x16')](compression_1[a0_0x4df5('0xc')]());app[a0_0x4df5('0x16')](body_parser_1[a0_0x4df5('0xc')][a0_0x4df5('0x17')]());app['use'](body_parser_1[a0_0x4df5('0xc')][a0_0x4df5('0x18')]({'extended':!![]}));app[a0_0x4df5('0x16')](express_validator_1[a0_0x4df5('0xc')]());app[a0_0x4df5('0x16')](express_1[a0_0x4df5('0xc')][a0_0x4df5('0x19')](path_1[a0_0x4df5('0xc')][a0_0x4df5('0x12')](__dirname,'public'),{'maxAge':0x758fac300}));exports[a0_0x4df5('0xc')]=app;