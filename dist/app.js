var a0_0x550c=['__importDefault','__esModule','defineProperty','compression','body-parser','./util/logger','dotenv','express-validator','default','existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','env','views','join','../views','set','view\x20engine','json','use','urlencoded','static','public'];(function(_0x4fefe7,_0x429df4){var _0x2e8ef7=function(_0xf21693){while(--_0xf21693){_0x4fefe7['push'](_0x4fefe7['shift']());}};_0x2e8ef7(++_0x429df4);}(a0_0x550c,0x1e6));var a0_0x56ae=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=a0_0x550c[_0x2f3e31];return _0x2c6db2;};'use strict';var __importDefault=this&&this[a0_0x56ae('0x0')]||function(_0x34a12b){return _0x34a12b&&_0x34a12b[a0_0x56ae('0x1')]?_0x34a12b:{'default':_0x34a12b};};Object[a0_0x56ae('0x2')](exports,a0_0x56ae('0x1'),{'value':!![]});const express_1=__importDefault(require('express'));const compression_1=__importDefault(require(a0_0x56ae('0x3')));const body_parser_1=__importDefault(require(a0_0x56ae('0x4')));const logger_1=__importDefault(require(a0_0x56ae('0x5')));const dotenv_1=__importDefault(require(a0_0x56ae('0x6')));const path_1=__importDefault(require('path'));const express_validator_1=__importDefault(require(a0_0x56ae('0x7')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x56ae('0x8')][a0_0x56ae('0x9')](a0_0x56ae('0xa'))){logger_1['default']['debug'](a0_0x56ae('0xb'));dotenv_1['default'][a0_0x56ae('0xc')]({'path':a0_0x56ae('0xa')});}else{logger_1[a0_0x56ae('0x8')][a0_0x56ae('0xd')](a0_0x56ae('0xe'));dotenv_1['default'][a0_0x56ae('0xc')]({'path':a0_0x56ae('0xf')});}const app=express_1[a0_0x56ae('0x8')]();app['set']('port',process[a0_0x56ae('0x10')]['PORT']||0xbb8);app['set'](a0_0x56ae('0x11'),path_1[a0_0x56ae('0x8')][a0_0x56ae('0x12')](__dirname,a0_0x56ae('0x13')));app[a0_0x56ae('0x14')](a0_0x56ae('0x15'),'pug');app['use'](compression_1['default']());app['use'](body_parser_1[a0_0x56ae('0x8')][a0_0x56ae('0x16')]());app[a0_0x56ae('0x17')](body_parser_1[a0_0x56ae('0x8')][a0_0x56ae('0x18')]({'extended':!![]}));app[a0_0x56ae('0x17')](express_validator_1['default']());app[a0_0x56ae('0x17')](express_1[a0_0x56ae('0x8')][a0_0x56ae('0x19')](path_1[a0_0x56ae('0x8')][a0_0x56ae('0x12')](__dirname,a0_0x56ae('0x1a')),{'maxAge':0x758fac300}));exports['default']=app;