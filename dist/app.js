var a0_0x3f7c=['port','env','PORT','views','pug','use','json','urlencoded','static','join','public','__importDefault','__esModule','defineProperty','express','compression','body-parser','path','default','existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','set'];(function(_0x4b9a2c,_0x70c0a6){var _0x4b82ec=function(_0x226c09){while(--_0x226c09){_0x4b9a2c['push'](_0x4b9a2c['shift']());}};_0x4b82ec(++_0x70c0a6);}(a0_0x3f7c,0x15d));var a0_0x2bd8=function(_0x483e11,_0x3294fa){_0x483e11=_0x483e11-0x0;var _0x4cdaea=a0_0x3f7c[_0x483e11];return _0x4cdaea;};'use strict';var __importDefault=this&&this[a0_0x2bd8('0x0')]||function(_0x26a8fa){return _0x26a8fa&&_0x26a8fa[a0_0x2bd8('0x1')]?_0x26a8fa:{'default':_0x26a8fa};};Object[a0_0x2bd8('0x2')](exports,a0_0x2bd8('0x1'),{'value':!![]});const express_1=__importDefault(require(a0_0x2bd8('0x3')));const compression_1=__importDefault(require(a0_0x2bd8('0x4')));const body_parser_1=__importDefault(require(a0_0x2bd8('0x5')));const logger_1=__importDefault(require('./util/logger'));const dotenv_1=__importDefault(require('dotenv'));const path_1=__importDefault(require(a0_0x2bd8('0x6')));const express_validator_1=__importDefault(require('express-validator'));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x2bd8('0x7')][a0_0x2bd8('0x8')](a0_0x2bd8('0x9'))){logger_1[a0_0x2bd8('0x7')]['debug'](a0_0x2bd8('0xa'));dotenv_1['default']['config']({'path':a0_0x2bd8('0x9')});}else{logger_1[a0_0x2bd8('0x7')][a0_0x2bd8('0xb')](a0_0x2bd8('0xc'));dotenv_1[a0_0x2bd8('0x7')][a0_0x2bd8('0xd')]({'path':'.env.example'});}const app=express_1[a0_0x2bd8('0x7')]();app[a0_0x2bd8('0xe')](a0_0x2bd8('0xf'),process[a0_0x2bd8('0x10')][a0_0x2bd8('0x11')]||0xbb8);app[a0_0x2bd8('0xe')](a0_0x2bd8('0x12'),path_1['default']['join'](__dirname,'../views'));app[a0_0x2bd8('0xe')]('view\x20engine',a0_0x2bd8('0x13'));app[a0_0x2bd8('0x14')](compression_1[a0_0x2bd8('0x7')]());app[a0_0x2bd8('0x14')](body_parser_1['default'][a0_0x2bd8('0x15')]());app[a0_0x2bd8('0x14')](body_parser_1[a0_0x2bd8('0x7')][a0_0x2bd8('0x16')]({'extended':!![]}));app[a0_0x2bd8('0x14')](express_validator_1['default']());app[a0_0x2bd8('0x14')](express_1[a0_0x2bd8('0x7')][a0_0x2bd8('0x17')](path_1[a0_0x2bd8('0x7')][a0_0x2bd8('0x18')](__dirname,a0_0x2bd8('0x19')),{'maxAge':0x758fac300}));exports[a0_0x2bd8('0x7')]=app;