var a0_0x15dd=['body-parser','./util/logger','dotenv','path','express-validator','default','existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','debug','set','port','env','PORT','views','view\x20engine','pug','use','json','urlencoded','join','public','__esModule','defineProperty','express','compression'];(function(_0x25fe6d,_0x40ed26){var _0x3221e8=function(_0x2e6509){while(--_0x2e6509){_0x25fe6d['push'](_0x25fe6d['shift']());}};_0x3221e8(++_0x40ed26);}(a0_0x15dd,0x10a));var a0_0x4f1a=function(_0x5c84a6,_0x1781c0){_0x5c84a6=_0x5c84a6-0x0;var _0x3f848b=a0_0x15dd[_0x5c84a6];return _0x3f848b;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1a0636){return _0x1a0636&&_0x1a0636[a0_0x4f1a('0x0')]?_0x1a0636:{'default':_0x1a0636};};Object[a0_0x4f1a('0x1')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a0_0x4f1a('0x2')));const compression_1=__importDefault(require(a0_0x4f1a('0x3')));const body_parser_1=__importDefault(require(a0_0x4f1a('0x4')));const logger_1=__importDefault(require(a0_0x4f1a('0x5')));const dotenv_1=__importDefault(require(a0_0x4f1a('0x6')));const path_1=__importDefault(require(a0_0x4f1a('0x7')));const express_validator_1=__importDefault(require(a0_0x4f1a('0x8')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x4f1a('0x9')][a0_0x4f1a('0xa')](a0_0x4f1a('0xb'))){logger_1['default']['debug'](a0_0x4f1a('0xc'));dotenv_1[a0_0x4f1a('0x9')][a0_0x4f1a('0xd')]({'path':a0_0x4f1a('0xb')});}else{logger_1['default'][a0_0x4f1a('0xe')]('Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables');dotenv_1[a0_0x4f1a('0x9')]['config']({'path':'.env.example'});}const app=express_1['default']();app[a0_0x4f1a('0xf')](a0_0x4f1a('0x10'),process[a0_0x4f1a('0x11')][a0_0x4f1a('0x12')]||0xbb8);app[a0_0x4f1a('0xf')](a0_0x4f1a('0x13'),path_1[a0_0x4f1a('0x9')]['join'](__dirname,'../views'));app[a0_0x4f1a('0xf')](a0_0x4f1a('0x14'),a0_0x4f1a('0x15'));app[a0_0x4f1a('0x16')](compression_1[a0_0x4f1a('0x9')]());app[a0_0x4f1a('0x16')](body_parser_1[a0_0x4f1a('0x9')][a0_0x4f1a('0x17')]());app[a0_0x4f1a('0x16')](body_parser_1[a0_0x4f1a('0x9')][a0_0x4f1a('0x18')]({'extended':!![]}));app['use'](express_validator_1['default']());app[a0_0x4f1a('0x16')](express_1['default']['static'](path_1['default'][a0_0x4f1a('0x19')](__dirname,a0_0x4f1a('0x1a')),{'maxAge':0x758fac300}));exports['default']=app;