var a5_0x3b5b=['postSignup','Passwords\x20do\x20not\x20match','equals','body','normalizeEmail','errors','/signup','findOne','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','getAccount','account/profile','Account\x20Management','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','/account','findById','name','gender','profile','location','website','save','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','postUpdatePassword','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','confirmPassword','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','info','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','params','provider','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','token','where','passwordResetExpires','now','exec','/forgot','account/reset','Password\x20Reset','postReset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','confirm','Passwords\x20must\x20match.','waterfall','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','back','passwordResetToken','createTransport','SendGrid','env','SENDGRID_USER','SENDGRID_PASSWORD','express-ts@starter.com','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','Success!\x20Your\x20password\x20has\x20been\x20changed.','account/forgot','Forgot\x20Password','postForgot','randomBytes','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','/reset/','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','sendMail','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','__esModule','defineProperty','nodemailer','passport','../models/User','express-validator','getLogin','user','account/login','Login','assert','email','isEmail','password','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','validationErrors','flash','redirect','/login','default','authenticate','message','logIn','success','returnTo','logout','render','account/signup','Create\x20Account'];(function(_0x4fe542,_0x3d2de3){var _0x1a3497=function(_0x3e9b18){while(--_0x3e9b18){_0x4fe542['push'](_0x4fe542['shift']());}};_0x1a3497(++_0x3d2de3);}(a5_0x3b5b,0xc6));var a5_0x51d9=function(_0x80fb36,_0x348208){_0x80fb36=_0x80fb36-0x0;var _0xd9907a=a5_0x3b5b[_0x80fb36];return _0xd9907a;};'use strict';var __importDefault=this&&this[a5_0x51d9('0x0')]||function(_0x4d19f5){return _0x4d19f5&&_0x4d19f5[a5_0x51d9('0x1')]?_0x4d19f5:{'default':_0x4d19f5};};Object[a5_0x51d9('0x2')](exports,a5_0x51d9('0x1'),{'value':!![]});const async_1=__importDefault(require('async'));const crypto_1=__importDefault(require('crypto'));const nodemailer_1=__importDefault(require(a5_0x51d9('0x3')));const passport_1=__importDefault(require(a5_0x51d9('0x4')));const User_1=__importDefault(require(a5_0x51d9('0x5')));const request=require(a5_0x51d9('0x6'));exports[a5_0x51d9('0x7')]=(_0x393759,_0x2d6dbb)=>{if(_0x393759[a5_0x51d9('0x8')]){return _0x2d6dbb['redirect']('/');}_0x2d6dbb['render'](a5_0x51d9('0x9'),{'title':a5_0x51d9('0xa')});};exports['postLogin']=(_0x3a9fa6,_0x37b3d9,_0x56458c)=>{_0x3a9fa6[a5_0x51d9('0xb')](a5_0x51d9('0xc'),'Email\x20is\x20not\x20valid')[a5_0x51d9('0xd')]();_0x3a9fa6['assert'](a5_0x51d9('0xe'),a5_0x51d9('0xf'))[a5_0x51d9('0x10')]();_0x3a9fa6[a5_0x51d9('0x11')](a5_0x51d9('0xc'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x40c86e=_0x3a9fa6[a5_0x51d9('0x12')]();if(_0x40c86e){_0x3a9fa6[a5_0x51d9('0x13')]('errors',_0x40c86e);return _0x37b3d9[a5_0x51d9('0x14')](a5_0x51d9('0x15'));}passport_1[a5_0x51d9('0x16')][a5_0x51d9('0x17')]('local',(_0x93f149,_0x3bcea0,_0x2acc65)=>{if(_0x93f149){return _0x56458c(_0x93f149);}if(!_0x3bcea0){_0x3a9fa6['flash']('errors',_0x2acc65[a5_0x51d9('0x18')]);return _0x37b3d9[a5_0x51d9('0x14')]('/login');}_0x3a9fa6[a5_0x51d9('0x19')](_0x3bcea0,_0x93f149=>{if(_0x93f149){return _0x56458c(_0x93f149);}_0x3a9fa6[a5_0x51d9('0x13')](a5_0x51d9('0x1a'),{'msg':'Success!\x20You\x20are\x20logged\x20in.'});_0x37b3d9[a5_0x51d9('0x14')](_0x3a9fa6['session'][a5_0x51d9('0x1b')]||'/');});})(_0x3a9fa6,_0x37b3d9,_0x56458c);};exports[a5_0x51d9('0x1c')]=(_0x1b0e17,_0x4500c4)=>{_0x1b0e17['logout']();_0x4500c4['redirect']('/');};exports['getSignup']=(_0x482b87,_0x103e46)=>{if(_0x482b87[a5_0x51d9('0x8')]){return _0x103e46[a5_0x51d9('0x14')]('/');}_0x103e46[a5_0x51d9('0x1d')](a5_0x51d9('0x1e'),{'title':a5_0x51d9('0x1f')});};exports[a5_0x51d9('0x20')]=(_0x3b6dde,_0x544104,_0x492063)=>{_0x3b6dde[a5_0x51d9('0xb')](a5_0x51d9('0xc'),'Email\x20is\x20not\x20valid')[a5_0x51d9('0xd')]();_0x3b6dde[a5_0x51d9('0xb')](a5_0x51d9('0xe'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')['len']({'min':0x4});_0x3b6dde[a5_0x51d9('0xb')]('confirmPassword',a5_0x51d9('0x21'))[a5_0x51d9('0x22')](_0x3b6dde[a5_0x51d9('0x23')][a5_0x51d9('0xe')]);_0x3b6dde[a5_0x51d9('0x11')](a5_0x51d9('0xc'))[a5_0x51d9('0x24')]({'gmail_remove_dots':![]});const _0x50799d=_0x3b6dde['validationErrors']();if(_0x50799d){_0x3b6dde[a5_0x51d9('0x13')](a5_0x51d9('0x25'),_0x50799d);return _0x544104[a5_0x51d9('0x14')](a5_0x51d9('0x26'));}const _0x545654=new User_1[(a5_0x51d9('0x16'))]({});User_1[a5_0x51d9('0x16')][a5_0x51d9('0x27')]({'email':_0x3b6dde[a5_0x51d9('0x23')][a5_0x51d9('0xc')]},(_0x5997b6,_0xce24b8)=>{if(_0x5997b6){return _0x492063(_0x5997b6);}if(_0xce24b8){_0x3b6dde[a5_0x51d9('0x13')](a5_0x51d9('0x25'),{'msg':a5_0x51d9('0x28')});return _0x544104['redirect']('/signup');}_0x545654['save'](_0x5997b6=>{if(_0x5997b6){return _0x492063(_0x5997b6);}_0x3b6dde[a5_0x51d9('0x19')](_0x545654,_0x5997b6=>{if(_0x5997b6){return _0x492063(_0x5997b6);}_0x544104[a5_0x51d9('0x14')]('/');});});});};exports[a5_0x51d9('0x29')]=(_0x4eeb99,_0x350b4e)=>{_0x350b4e[a5_0x51d9('0x1d')](a5_0x51d9('0x2a'),{'title':a5_0x51d9('0x2b')});};exports[a5_0x51d9('0x2c')]=(_0x46e6b4,_0x52c5be,_0x165a7f)=>{_0x46e6b4[a5_0x51d9('0xb')](a5_0x51d9('0xc'),a5_0x51d9('0x2d'))[a5_0x51d9('0xd')]();_0x46e6b4[a5_0x51d9('0x11')](a5_0x51d9('0xc'))[a5_0x51d9('0x24')]({'gmail_remove_dots':![]});const _0x5b9b05=_0x46e6b4['validationErrors']();if(_0x5b9b05){_0x46e6b4[a5_0x51d9('0x13')](a5_0x51d9('0x25'),_0x5b9b05);return _0x52c5be['redirect'](a5_0x51d9('0x2e'));}User_1[a5_0x51d9('0x16')][a5_0x51d9('0x2f')](_0x46e6b4[a5_0x51d9('0x8')]['id'],(_0x4232ac,_0x161d8c)=>{if(_0x4232ac){return _0x165a7f(_0x4232ac);}_0x161d8c[a5_0x51d9('0xc')]=_0x46e6b4['body'][a5_0x51d9('0xc')]||'';_0x161d8c['profile']['name']=_0x46e6b4['body'][a5_0x51d9('0x30')]||'';_0x161d8c['profile'][a5_0x51d9('0x31')]=_0x46e6b4[a5_0x51d9('0x23')][a5_0x51d9('0x31')]||'';_0x161d8c[a5_0x51d9('0x32')][a5_0x51d9('0x33')]=_0x46e6b4[a5_0x51d9('0x23')][a5_0x51d9('0x33')]||'';_0x161d8c['profile'][a5_0x51d9('0x34')]=_0x46e6b4[a5_0x51d9('0x23')][a5_0x51d9('0x34')]||'';_0x161d8c[a5_0x51d9('0x35')](_0x4232ac=>{if(_0x4232ac){if(_0x4232ac[a5_0x51d9('0x36')]===0x2af8){_0x46e6b4['flash'](a5_0x51d9('0x25'),{'msg':a5_0x51d9('0x37')});return _0x52c5be[a5_0x51d9('0x14')]('/account');}return _0x165a7f(_0x4232ac);}_0x46e6b4[a5_0x51d9('0x13')]('success',{'msg':'Profile\x20information\x20has\x20been\x20updated.'});_0x52c5be['redirect']('/account');});});};exports[a5_0x51d9('0x38')]=(_0x1adba5,_0xebdea1,_0x4e4351)=>{_0x1adba5[a5_0x51d9('0xb')]('password',a5_0x51d9('0x39'))['len']({'min':0x4});_0x1adba5[a5_0x51d9('0xb')](a5_0x51d9('0x3a'),a5_0x51d9('0x21'))[a5_0x51d9('0x22')](_0x1adba5[a5_0x51d9('0x23')]['password']);const _0x759b86=_0x1adba5[a5_0x51d9('0x12')]();if(_0x759b86){_0x1adba5[a5_0x51d9('0x13')](a5_0x51d9('0x25'),_0x759b86);return _0xebdea1[a5_0x51d9('0x14')](a5_0x51d9('0x2e'));}User_1['default'][a5_0x51d9('0x2f')](_0x1adba5[a5_0x51d9('0x8')]['id'],(_0x21de41,_0x2dfeca)=>{if(_0x21de41){return _0x4e4351(_0x21de41);}_0x2dfeca[a5_0x51d9('0xe')]=_0x1adba5[a5_0x51d9('0x23')]['password'];_0x2dfeca[a5_0x51d9('0x35')](_0x21de41=>{if(_0x21de41){return _0x4e4351(_0x21de41);}_0x1adba5[a5_0x51d9('0x13')](a5_0x51d9('0x1a'),{'msg':a5_0x51d9('0x3b')});_0xebdea1['redirect'](a5_0x51d9('0x2e'));});});};exports[a5_0x51d9('0x3c')]=(_0x35a2b9,_0x3cb2dd,_0x19ed1b)=>{User_1[a5_0x51d9('0x16')][a5_0x51d9('0x3d')]({'_id':_0x35a2b9[a5_0x51d9('0x8')]['id']},_0x1bb77c=>{if(_0x1bb77c){return _0x19ed1b(_0x1bb77c);}_0x35a2b9['logout']();_0x35a2b9[a5_0x51d9('0x13')](a5_0x51d9('0x3e'),{'msg':a5_0x51d9('0x3f')});_0x3cb2dd[a5_0x51d9('0x14')]('/');});};exports[a5_0x51d9('0x40')]=(_0x2e3c38,_0x558023,_0x54f88c)=>{const _0x240d7b=_0x2e3c38[a5_0x51d9('0x41')][a5_0x51d9('0x42')];User_1[a5_0x51d9('0x16')][a5_0x51d9('0x2f')](_0x2e3c38[a5_0x51d9('0x8')]['id'],(_0x4e811e,_0x6ccb8f)=>{if(_0x4e811e){return _0x54f88c(_0x4e811e);}_0x6ccb8f[_0x240d7b]=undefined;_0x6ccb8f[a5_0x51d9('0x43')]=_0x6ccb8f[a5_0x51d9('0x43')][a5_0x51d9('0x44')](_0x5487e0=>_0x5487e0[a5_0x51d9('0x45')]!==_0x240d7b);_0x6ccb8f['save'](_0x4e811e=>{if(_0x4e811e){return _0x54f88c(_0x4e811e);}_0x2e3c38[a5_0x51d9('0x13')](a5_0x51d9('0x3e'),{'msg':_0x240d7b+a5_0x51d9('0x46')});_0x558023[a5_0x51d9('0x14')]('/account');});});};exports[a5_0x51d9('0x47')]=(_0x1e36ee,_0x56a3d9,_0x731995)=>{if(_0x1e36ee[a5_0x51d9('0x48')]()){return _0x56a3d9['redirect']('/');}User_1[a5_0x51d9('0x16')][a5_0x51d9('0x27')]({'passwordResetToken':_0x1e36ee[a5_0x51d9('0x41')][a5_0x51d9('0x49')]})[a5_0x51d9('0x4a')](a5_0x51d9('0x4b'))['gt'](Date[a5_0x51d9('0x4c')]())[a5_0x51d9('0x4d')]((_0x128ce3,_0x3a34a8)=>{if(_0x128ce3){return _0x731995(_0x128ce3);}if(!_0x3a34a8){_0x1e36ee['flash'](a5_0x51d9('0x25'),{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0x56a3d9[a5_0x51d9('0x14')](a5_0x51d9('0x4e'));}_0x56a3d9[a5_0x51d9('0x1d')](a5_0x51d9('0x4f'),{'title':a5_0x51d9('0x50')});});};exports[a5_0x51d9('0x51')]=(_0x3a78d2,_0x4c271d,_0x17ed71)=>{_0x3a78d2[a5_0x51d9('0xb')](a5_0x51d9('0xe'),a5_0x51d9('0x52'))['len']({'min':0x4});_0x3a78d2[a5_0x51d9('0xb')](a5_0x51d9('0x53'),a5_0x51d9('0x54'))['equals'](_0x3a78d2['body'][a5_0x51d9('0xe')]);const _0x3a0396=_0x3a78d2[a5_0x51d9('0x12')]();if(_0x3a0396){_0x3a78d2[a5_0x51d9('0x13')](a5_0x51d9('0x25'),_0x3a0396);return _0x4c271d['redirect']('back');}async_1[a5_0x51d9('0x16')][a5_0x51d9('0x55')]([function resetPassword(_0x52d13d){User_1[a5_0x51d9('0x16')][a5_0x51d9('0x27')]({'passwordResetToken':_0x3a78d2[a5_0x51d9('0x41')]['token']})[a5_0x51d9('0x4a')](a5_0x51d9('0x4b'))['gt'](Date['now']())[a5_0x51d9('0x4d')]((_0x27aa8c,_0xfb06b5)=>{if(_0x27aa8c){return _0x17ed71(_0x27aa8c);}if(!_0xfb06b5){_0x3a78d2[a5_0x51d9('0x13')](a5_0x51d9('0x25'),{'msg':a5_0x51d9('0x56')});return _0x4c271d[a5_0x51d9('0x14')](a5_0x51d9('0x57'));}_0xfb06b5[a5_0x51d9('0xe')]=_0x3a78d2['body'][a5_0x51d9('0xe')];_0xfb06b5[a5_0x51d9('0x58')]=undefined;_0xfb06b5[a5_0x51d9('0x4b')]=undefined;_0xfb06b5[a5_0x51d9('0x35')](_0x27aa8c=>{if(_0x27aa8c){return _0x17ed71(_0x27aa8c);}_0x3a78d2[a5_0x51d9('0x19')](_0xfb06b5,_0x27aa8c=>{_0x52d13d(_0x27aa8c,_0xfb06b5);});});});},function sendResetPasswordEmail(_0x316666,_0x425a4a){const _0x20fa62=nodemailer_1['default'][a5_0x51d9('0x59')]({'service':a5_0x51d9('0x5a'),'auth':{'user':process[a5_0x51d9('0x5b')][a5_0x51d9('0x5c')],'pass':process[a5_0x51d9('0x5b')][a5_0x51d9('0x5d')]}});const _0x436f0c={'to':_0x316666['email'],'from':a5_0x51d9('0x5e'),'subject':'Your\x20password\x20has\x20been\x20changed','text':a5_0x51d9('0x5f')+_0x316666[a5_0x51d9('0xc')]+a5_0x51d9('0x60')};_0x20fa62['sendMail'](_0x436f0c,_0x30c746=>{_0x3a78d2[a5_0x51d9('0x13')](a5_0x51d9('0x1a'),{'msg':a5_0x51d9('0x61')});_0x425a4a(_0x30c746);});}],_0x48f639=>{if(_0x48f639){return _0x17ed71(_0x48f639);}_0x4c271d['redirect']('/');});};exports['getForgot']=(_0x6b74fd,_0x1bca78)=>{if(_0x6b74fd[a5_0x51d9('0x48')]()){return _0x1bca78[a5_0x51d9('0x14')]('/');}_0x1bca78[a5_0x51d9('0x1d')](a5_0x51d9('0x62'),{'title':a5_0x51d9('0x63')});};exports[a5_0x51d9('0x64')]=(_0x4399d3,_0x14e067,_0x5afd7a)=>{_0x4399d3[a5_0x51d9('0xb')](a5_0x51d9('0xc'),'Please\x20enter\x20a\x20valid\x20email\x20address.')['isEmail']();_0x4399d3[a5_0x51d9('0x11')]('email')[a5_0x51d9('0x24')]({'gmail_remove_dots':![]});const _0x1adab0=_0x4399d3[a5_0x51d9('0x12')]();if(_0x1adab0){_0x4399d3['flash'](a5_0x51d9('0x25'),_0x1adab0);return _0x14e067[a5_0x51d9('0x14')](a5_0x51d9('0x4e'));}async_1[a5_0x51d9('0x16')][a5_0x51d9('0x55')]([function createRandomToken(_0x5a0510){crypto_1[a5_0x51d9('0x16')][a5_0x51d9('0x65')](0x10,(_0x5f0938,_0x3fdde1)=>{const _0x2936ac=_0x3fdde1[a5_0x51d9('0x66')](a5_0x51d9('0x67'));_0x5a0510(_0x5f0938,_0x2936ac);});},function setRandomToken(_0x14496e,_0xdf9393){User_1[a5_0x51d9('0x16')]['findOne']({'email':_0x4399d3[a5_0x51d9('0x23')]['email']},(_0x2f8080,_0xca2fbc)=>{if(_0x2f8080){return _0xdf9393(_0x2f8080);}if(!_0xca2fbc){_0x4399d3[a5_0x51d9('0x13')](a5_0x51d9('0x25'),{'msg':a5_0x51d9('0x68')});return _0x14e067[a5_0x51d9('0x14')](a5_0x51d9('0x4e'));}_0xca2fbc[a5_0x51d9('0x58')]=_0x14496e;_0xca2fbc[a5_0x51d9('0x4b')]=Date[a5_0x51d9('0x4c')]()+0x36ee80;_0xca2fbc[a5_0x51d9('0x35')](_0x2f8080=>{_0xdf9393(_0x2f8080,_0x14496e,_0xca2fbc);});});},function sendForgotPasswordEmail(_0x4e0fd5,_0x39d569,_0x256629){const _0xeb5121=nodemailer_1[a5_0x51d9('0x16')]['createTransport']({'service':a5_0x51d9('0x5a'),'auth':{'user':process[a5_0x51d9('0x5b')][a5_0x51d9('0x5c')],'pass':process['env'][a5_0x51d9('0x5d')]}});const _0x4912d6={'to':_0x39d569['email'],'from':a5_0x51d9('0x69'),'subject':a5_0x51d9('0x6a'),'text':a5_0x51d9('0x6b')+_0x4399d3[a5_0x51d9('0x6c')][a5_0x51d9('0x6d')]+a5_0x51d9('0x6e')+_0x4e0fd5+a5_0x51d9('0x6f')};_0xeb5121[a5_0x51d9('0x70')](_0x4912d6,_0x470840=>{_0x4399d3['flash'](a5_0x51d9('0x3e'),{'msg':a5_0x51d9('0x71')+_0x39d569[a5_0x51d9('0xc')]+a5_0x51d9('0x72')});_0x256629(_0x470840);});}],_0x17175=>{if(_0x17175){return _0x5afd7a(_0x17175);}_0x14e067['redirect'](a5_0x51d9('0x4e'));});};