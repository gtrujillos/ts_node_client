var a0_0x2add=['views','join','../views','pug','use','json','urlencoded','static','get','FILES_FOLDER','image1.jpg','env','image2.jpg','base64-img','log','******************************************************','replace','from','writeHead','image/png','end','/image2','image-convert','base64','fromBuffer','jpg','message','__importDefault','__esModule','express','compression','body-parser','./util/logger','path','express-validator','default','existsSync','.env','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','set','PORT'];(function(_0x13da72,_0x533650){var _0x4177ae=function(_0x420aaa){while(--_0x420aaa){_0x13da72['push'](_0x13da72['shift']());}};_0x4177ae(++_0x533650);}(a0_0x2add,0x14f));var a0_0x2de9=function(_0x316c08,_0x378732){_0x316c08=_0x316c08-0x0;var _0x3ada61=a0_0x2add[_0x316c08];return _0x3ada61;};'use strict';var __importDefault=this&&this[a0_0x2de9('0x0')]||function(_0x5d0893){return _0x5d0893&&_0x5d0893['__esModule']?_0x5d0893:{'default':_0x5d0893};};Object['defineProperty'](exports,a0_0x2de9('0x1'),{'value':!![]});const express_1=__importDefault(require(a0_0x2de9('0x2')));const compression_1=__importDefault(require(a0_0x2de9('0x3')));const body_parser_1=__importDefault(require(a0_0x2de9('0x4')));const logger_1=__importDefault(require(a0_0x2de9('0x5')));const dotenv_1=__importDefault(require('dotenv'));const path_1=__importDefault(require(a0_0x2de9('0x6')));const express_validator_1=__importDefault(require(a0_0x2de9('0x7')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x2de9('0x8')][a0_0x2de9('0x9')](a0_0x2de9('0xa'))){logger_1[a0_0x2de9('0x8')][a0_0x2de9('0xb')](a0_0x2de9('0xc'));dotenv_1['default'][a0_0x2de9('0xd')]({'path':a0_0x2de9('0xa')});}else{logger_1[a0_0x2de9('0x8')][a0_0x2de9('0xb')](a0_0x2de9('0xe'));dotenv_1[a0_0x2de9('0x8')][a0_0x2de9('0xd')]({'path':'.env.example'});}const app=express_1['default']();app[a0_0x2de9('0xf')]('port',process['env'][a0_0x2de9('0x10')]||0xbb8);app['set'](a0_0x2de9('0x11'),path_1[a0_0x2de9('0x8')][a0_0x2de9('0x12')](__dirname,a0_0x2de9('0x13')));app[a0_0x2de9('0xf')]('view\x20engine',a0_0x2de9('0x14'));app[a0_0x2de9('0x15')](compression_1[a0_0x2de9('0x8')]());app[a0_0x2de9('0x15')](body_parser_1['default'][a0_0x2de9('0x16')]());app[a0_0x2de9('0x15')](body_parser_1[a0_0x2de9('0x8')][a0_0x2de9('0x17')]({'extended':!![]}));app['use'](express_validator_1[a0_0x2de9('0x8')]());app[a0_0x2de9('0x15')](express_1[a0_0x2de9('0x8')][a0_0x2de9('0x18')](path_1[a0_0x2de9('0x8')][a0_0x2de9('0x12')](__dirname,'public'),{'maxAge':0x758fac300}));app[a0_0x2de9('0x19')]('/image1',function(_0x2ecd2c,_0x2caad3){const _0x1f574c=process['env'][a0_0x2de9('0x1a')]+a0_0x2de9('0x1b');const _0x1d3f8f=process[a0_0x2de9('0x1c')][a0_0x2de9('0x1a')]+a0_0x2de9('0x1d');const _0x474be1=require(a0_0x2de9('0x1e'));const _0x32cded=_0x474be1['base64Sync'](_0x1f574c);console[a0_0x2de9('0x1f')](a0_0x2de9('0x20'));console['log'](_0x32cded);const _0x101654=_0x32cded[a0_0x2de9('0x21')](/^data:image\/(png|jpeg|jpg);base64,/,'');const _0x56210d=Buffer[a0_0x2de9('0x22')](_0x101654,'base64');_0x2caad3[a0_0x2de9('0x23')](0xc8,{'Content-Type':a0_0x2de9('0x24'),'Content-Length':_0x56210d['length']});_0x2caad3[a0_0x2de9('0x25')](_0x56210d);});app['get'](a0_0x2de9('0x26'),function(_0x5527ad,_0x1246f0){const _0x15a5fa=require(a0_0x2de9('0x1e'));const _0x1cadef=require('jimp');const _0x171aa9=require(a0_0x2de9('0x27'));const _0x498344=process[a0_0x2de9('0x1c')][a0_0x2de9('0x1a')]+a0_0x2de9('0x1d');const _0x3c336d=_0x15a5fa['base64Sync'](_0x498344);console['log']('******************************************************');const _0x294dcc=_0x3c336d[a0_0x2de9('0x21')](/^data:image\/(png|jpeg|jpg);base64,/,'');const _0x4cb93f=Buffer[a0_0x2de9('0x22')](_0x294dcc,a0_0x2de9('0x28'));_0x171aa9[a0_0x2de9('0x29')]({'buffer':_0x3c336d,'quality':0x32,'output_format':a0_0x2de9('0x2a'),'size':'original'},function(_0x100edc,_0x204b14,_0x341349){if(!_0x100edc){console[a0_0x2de9('0x1f')](_0x341349);_0x1246f0[a0_0x2de9('0x25')](_0x204b14);}else{_0x1246f0['json']({'Error':_0x100edc[a0_0x2de9('0x2b')]});}});});exports[a0_0x2de9('0x8')]=app;