var a0_0x308d=['/image1','FILES_FOLDER','image2.jpg','base64Sync','******************************************************','replace','from','base64','writeHead','length','get','base64-img','image-convert','fromBuffer','jpg','original','log','end','message','__esModule','defineProperty','express','body-parser','express-validator','default','existsSync','debug','Using\x20.env\x20file\x20to\x20supply\x20config\x20environment\x20variables','config','Using\x20.env.example\x20file\x20to\x20supply\x20config\x20environment\x20variables','.env.example','env','PORT','views','join','../views','set','pug','use','json','urlencoded','static','public'];(function(_0x153d34,_0x5b3349){var _0x55769a=function(_0x3f2899){while(--_0x3f2899){_0x153d34['push'](_0x153d34['shift']());}};_0x55769a(++_0x5b3349);}(a0_0x308d,0x196));var a0_0x5dd6=function(_0xb479be,_0x4bb6ab){_0xb479be=_0xb479be-0x0;var _0x44c2ed=a0_0x308d[_0xb479be];return _0x44c2ed;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x316105){return _0x316105&&_0x316105[a0_0x5dd6('0x0')]?_0x316105:{'default':_0x316105};};Object[a0_0x5dd6('0x1')](exports,a0_0x5dd6('0x0'),{'value':!![]});const express_1=__importDefault(require(a0_0x5dd6('0x2')));const compression_1=__importDefault(require('compression'));const body_parser_1=__importDefault(require(a0_0x5dd6('0x3')));const logger_1=__importDefault(require('./util/logger'));const dotenv_1=__importDefault(require('dotenv'));const path_1=__importDefault(require('path'));const express_validator_1=__importDefault(require(a0_0x5dd6('0x4')));const fs_1=__importDefault(require('fs'));if(fs_1[a0_0x5dd6('0x5')][a0_0x5dd6('0x6')]('.env')){logger_1[a0_0x5dd6('0x5')][a0_0x5dd6('0x7')](a0_0x5dd6('0x8'));dotenv_1[a0_0x5dd6('0x5')][a0_0x5dd6('0x9')]({'path':'.env'});}else{logger_1[a0_0x5dd6('0x5')]['debug'](a0_0x5dd6('0xa'));dotenv_1['default'][a0_0x5dd6('0x9')]({'path':a0_0x5dd6('0xb')});}const app=express_1[a0_0x5dd6('0x5')]();app['set']('port',process[a0_0x5dd6('0xc')][a0_0x5dd6('0xd')]||0xbb8);app['set'](a0_0x5dd6('0xe'),path_1[a0_0x5dd6('0x5')][a0_0x5dd6('0xf')](__dirname,a0_0x5dd6('0x10')));app[a0_0x5dd6('0x11')]('view\x20engine',a0_0x5dd6('0x12'));app[a0_0x5dd6('0x13')](compression_1['default']());app[a0_0x5dd6('0x13')](body_parser_1[a0_0x5dd6('0x5')][a0_0x5dd6('0x14')]());app[a0_0x5dd6('0x13')](body_parser_1[a0_0x5dd6('0x5')][a0_0x5dd6('0x15')]({'extended':!![]}));app[a0_0x5dd6('0x13')](express_validator_1[a0_0x5dd6('0x5')]());app['use'](express_1[a0_0x5dd6('0x5')][a0_0x5dd6('0x16')](path_1['default'][a0_0x5dd6('0xf')](__dirname,a0_0x5dd6('0x17')),{'maxAge':0x758fac300}));app['get'](a0_0x5dd6('0x18'),function(_0x5edaa4,_0x26d52b){const _0x5d540d=process['env']['FILES_FOLDER']+'image1.jpg';const _0x46385c=process[a0_0x5dd6('0xc')][a0_0x5dd6('0x19')]+a0_0x5dd6('0x1a');const _0xa2d947=require('base64-img');const _0x353f8e=_0xa2d947[a0_0x5dd6('0x1b')](_0x5d540d);console['log'](a0_0x5dd6('0x1c'));console['log'](_0x353f8e);const _0x36182d=_0x353f8e[a0_0x5dd6('0x1d')](/^data:image\/(png|jpeg|jpg);base64,/,'');const _0x44979f=Buffer[a0_0x5dd6('0x1e')](_0x36182d,a0_0x5dd6('0x1f'));_0x26d52b[a0_0x5dd6('0x20')](0xc8,{'Content-Type':'image/png','Content-Length':_0x44979f[a0_0x5dd6('0x21')]});_0x26d52b['end'](_0x44979f);});app[a0_0x5dd6('0x22')]('/image2',function(_0x1f9d0c,_0x13fad4){const _0x1ad6aa=require(a0_0x5dd6('0x23'));const _0x449ca2=require('jimp');const _0x55cdbb=require(a0_0x5dd6('0x24'));const _0xce91d5=process['env'][a0_0x5dd6('0x19')]+a0_0x5dd6('0x1a');const _0x3bd573=_0x1ad6aa[a0_0x5dd6('0x1b')](_0xce91d5);const _0x20677b=_0x3bd573[a0_0x5dd6('0x1d')](/^data:image\/(png|jpeg|jpg);base64,/,'');const _0x51fbea=Buffer[a0_0x5dd6('0x1e')](_0x20677b,'base64');_0x55cdbb[a0_0x5dd6('0x25')]({'buffer':_0x3bd573,'quality':0x32,'output_format':a0_0x5dd6('0x26'),'size':a0_0x5dd6('0x27')},function(_0x3694d5,_0x4ae1cd,_0x47fcd4){if(!_0x3694d5){console[a0_0x5dd6('0x28')](_0x47fcd4);_0x13fad4[a0_0x5dd6('0x29')](_0x4ae1cd);}else{_0x13fad4[a0_0x5dd6('0x14')]({'Error':_0x3694d5[a0_0x5dd6('0x2a')]});}});});exports[a0_0x5dd6('0x5')]=app;