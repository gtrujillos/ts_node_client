var a0_0x13ca=['__esModule','defineProperty','express','compression','body-parser','./util/logger','dotenv','path','express-validator','.env','default','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','set','port','PORT','join','../views','view\x20engine','use','json','public'];(function(_0x3785f0,_0x8002d9){var _0x52c185=function(_0x462aaa){while(--_0x462aaa){_0x3785f0['push'](_0x3785f0['shift']());}};_0x52c185(++_0x8002d9);}(a0_0x13ca,0x7d));var a0_0x1020=function(_0x330a91,_0x1fdacf){_0x330a91=_0x330a91-0x0;var _0x141409=a0_0x13ca[_0x330a91];return _0x141409;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x591a0b){return _0x591a0b&&_0x591a0b[a0_0x1020('0x0')]?_0x591a0b:{'default':_0x591a0b};};Object[a0_0x1020('0x1')](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require(a0_0x1020('0x2')));const compression_1=__importDefault(require(a0_0x1020('0x3')));const body_parser_1=__importDefault(require(a0_0x1020('0x4')));const logger_1=__importDefault(require(a0_0x1020('0x5')));const dotenv_1=__importDefault(require(a0_0x1020('0x6')));const path_1=__importDefault(require(a0_0x1020('0x7')));const express_validator_1=__importDefault(require(a0_0x1020('0x8')));const fs_1=__importDefault(require('fs'));if(fs_1['default']['existsSync'](a0_0x1020('0x9'))){logger_1[a0_0x1020('0xa')][a0_0x1020('0xb')](a0_0x1020('0xc'));dotenv_1['default'][a0_0x1020('0xd')]({'path':a0_0x1020('0x9')});}else{logger_1['default'][a0_0x1020('0xb')](a0_0x1020('0xe'));dotenv_1['default'][a0_0x1020('0xd')]({'path':a0_0x1020('0xf')});}const app=express_1['default']();app[a0_0x1020('0x10')](a0_0x1020('0x11'),process['env'][a0_0x1020('0x12')]||0xbb8);app['set']('views',path_1[a0_0x1020('0xa')][a0_0x1020('0x13')](__dirname,a0_0x1020('0x14')));app[a0_0x1020('0x10')](a0_0x1020('0x15'),'pug');app[a0_0x1020('0x16')](compression_1[a0_0x1020('0xa')]());app[a0_0x1020('0x16')](body_parser_1[a0_0x1020('0xa')][a0_0x1020('0x17')]());app['use'](body_parser_1['default']['urlencoded']({'extended':!![]}));app[a0_0x1020('0x16')](express_validator_1[a0_0x1020('0xa')]());app[a0_0x1020('0x16')](express_1[a0_0x1020('0xa')]['static'](path_1[a0_0x1020('0xa')][a0_0x1020('0x13')](__dirname,a0_0x1020('0x18')),{'maxAge':0x758fac300}));exports[a0_0x1020('0xa')]=app;