var a0_0x3a80=['join','../views','view\x20engine','pug','use','json','__importDefault','__esModule','express','compression','body-parser','./util/logger','dotenv','default','existsSync','.env','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','debug','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','set','port','PORT','views'];(function(_0x2f9db5,_0x484119){var _0x52aa25=function(_0x11003a){while(--_0x11003a){_0x2f9db5['push'](_0x2f9db5['shift']());}};_0x52aa25(++_0x484119);}(a0_0x3a80,0x196));var a0_0x1e93=function(_0x23ba7d,_0x5aba57){_0x23ba7d=_0x23ba7d-0x0;var _0x24032b=a0_0x3a80[_0x23ba7d];return _0x24032b;};'use strict';var __importDefault=this&&this[a0_0x1e93('0x0')]||function(_0x132447){return _0x132447&&_0x132447[a0_0x1e93('0x1')]?_0x132447:{'default':_0x132447};};Object['defineProperty'](exports,a0_0x1e93('0x1'),{'value':!![]});const express_1=__importDefault(require(a0_0x1e93('0x2')));const compression_1=__importDefault(require(a0_0x1e93('0x3')));const body_parser_1=__importDefault(require(a0_0x1e93('0x4')));const logger_1=__importDefault(require(a0_0x1e93('0x5')));const dotenv_1=__importDefault(require(a0_0x1e93('0x6')));const path_1=__importDefault(require('path'));const express_validator_1=__importDefault(require('express-validator'));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x1e93('0x7')][a0_0x1e93('0x8')](a0_0x1e93('0x9'))){logger_1['default']['debug'](a0_0x1e93('0xa'));dotenv_1[a0_0x1e93('0x7')][a0_0x1e93('0xb')]({'path':'.env'});}else{logger_1['default'][a0_0x1e93('0xc')](a0_0x1e93('0xd'));dotenv_1[a0_0x1e93('0x7')][a0_0x1e93('0xb')]({'path':a0_0x1e93('0xe')});}const app=express_1[a0_0x1e93('0x7')]();app[a0_0x1e93('0xf')](a0_0x1e93('0x10'),process['env'][a0_0x1e93('0x11')]||0xbb8);app[a0_0x1e93('0xf')](a0_0x1e93('0x12'),path_1[a0_0x1e93('0x7')][a0_0x1e93('0x13')](__dirname,a0_0x1e93('0x14')));app[a0_0x1e93('0xf')](a0_0x1e93('0x15'),a0_0x1e93('0x16'));app[a0_0x1e93('0x17')](compression_1['default']());app[a0_0x1e93('0x17')](body_parser_1['default'][a0_0x1e93('0x18')]());app[a0_0x1e93('0x17')](body_parser_1[a0_0x1e93('0x7')]['urlencoded']({'extended':!![]}));app['use'](express_validator_1[a0_0x1e93('0x7')]());app[a0_0x1e93('0x17')](express_1[a0_0x1e93('0x7')]['static'](path_1[a0_0x1e93('0x7')]['join'](__dirname,'public'),{'maxAge':0x758fac300}));exports[a0_0x1e93('0x7')]=app;