var a5_0xce75=['body','/signup','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','save','account/profile','Account\x20Management','findById','profile','name','gender','location','website','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','/account','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','postDeleteAccount','remove','Your\x20account\x20has\x20been\x20deleted.','params','provider','tokens','filter','kind','info','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','findOne','token','passwordResetExpires','now','exec','/forgot','account/reset','Password\x20Reset','postReset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','confirm','Passwords\x20must\x20match.','back','where','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','passwordResetToken','createTransport','SendGrid','env','SENDGRID_USER','SENDGRID_PASSWORD','express-ts@starter.com','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','getForgot','postForgot','waterfall','randomBytes','toString','hex','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','__importDefault','__esModule','defineProperty','async','crypto','nodemailer','passport','../models/User','express-validator','getLogin','user','render','account/login','Login','postLogin','assert','email','isEmail','password','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','normalizeEmail','validationErrors','flash','errors','redirect','/login','default','authenticate','message','logIn','success','Success!\x20You\x20are\x20logged\x20in.','session','logout','getSignup','account/signup','Create\x20Account','postSignup','Email\x20is\x20not\x20valid','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','equals'];(function(_0x5cce8d,_0x30ab5e){var _0x28c25d=function(_0x3c91d6){while(--_0x3c91d6){_0x5cce8d['push'](_0x5cce8d['shift']());}};_0x28c25d(++_0x30ab5e);}(a5_0xce75,0x122));var a5_0x5e76=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=a5_0xce75[_0x2d8f05];return _0x4d74cb;};'use strict';var __importDefault=this&&this[a5_0x5e76('0x0')]||function(_0x377415){return _0x377415&&_0x377415[a5_0x5e76('0x1')]?_0x377415:{'default':_0x377415};};Object[a5_0x5e76('0x2')](exports,a5_0x5e76('0x1'),{'value':!![]});const async_1=__importDefault(require(a5_0x5e76('0x3')));const crypto_1=__importDefault(require(a5_0x5e76('0x4')));const nodemailer_1=__importDefault(require(a5_0x5e76('0x5')));const passport_1=__importDefault(require(a5_0x5e76('0x6')));const User_1=__importDefault(require(a5_0x5e76('0x7')));const request=require(a5_0x5e76('0x8'));exports[a5_0x5e76('0x9')]=(_0x129a84,_0x34f8cb)=>{if(_0x129a84[a5_0x5e76('0xa')]){return _0x34f8cb['redirect']('/');}_0x34f8cb[a5_0x5e76('0xb')](a5_0x5e76('0xc'),{'title':a5_0x5e76('0xd')});};exports[a5_0x5e76('0xe')]=(_0x2fa2ba,_0x27c892,_0x2498ea)=>{_0x2fa2ba[a5_0x5e76('0xf')](a5_0x5e76('0x10'),'Email\x20is\x20not\x20valid')[a5_0x5e76('0x11')]();_0x2fa2ba['assert'](a5_0x5e76('0x12'),a5_0x5e76('0x13'))[a5_0x5e76('0x14')]();_0x2fa2ba[a5_0x5e76('0x15')](a5_0x5e76('0x10'))[a5_0x5e76('0x16')]({'gmail_remove_dots':![]});const _0x150de5=_0x2fa2ba[a5_0x5e76('0x17')]();if(_0x150de5){_0x2fa2ba[a5_0x5e76('0x18')](a5_0x5e76('0x19'),_0x150de5);return _0x27c892[a5_0x5e76('0x1a')](a5_0x5e76('0x1b'));}passport_1[a5_0x5e76('0x1c')][a5_0x5e76('0x1d')]('local',(_0x30c082,_0x362d6d,_0x34359c)=>{if(_0x30c082){return _0x2498ea(_0x30c082);}if(!_0x362d6d){_0x2fa2ba[a5_0x5e76('0x18')](a5_0x5e76('0x19'),_0x34359c[a5_0x5e76('0x1e')]);return _0x27c892['redirect'](a5_0x5e76('0x1b'));}_0x2fa2ba[a5_0x5e76('0x1f')](_0x362d6d,_0x30c082=>{if(_0x30c082){return _0x2498ea(_0x30c082);}_0x2fa2ba[a5_0x5e76('0x18')](a5_0x5e76('0x20'),{'msg':a5_0x5e76('0x21')});_0x27c892['redirect'](_0x2fa2ba[a5_0x5e76('0x22')]['returnTo']||'/');});})(_0x2fa2ba,_0x27c892,_0x2498ea);};exports[a5_0x5e76('0x23')]=(_0x42364d,_0x3f1ce1)=>{_0x42364d[a5_0x5e76('0x23')]();_0x3f1ce1[a5_0x5e76('0x1a')]('/');};exports[a5_0x5e76('0x24')]=(_0x141e70,_0x3d97f9)=>{if(_0x141e70[a5_0x5e76('0xa')]){return _0x3d97f9[a5_0x5e76('0x1a')]('/');}_0x3d97f9['render'](a5_0x5e76('0x25'),{'title':a5_0x5e76('0x26')});};exports[a5_0x5e76('0x27')]=(_0x455be6,_0x3ebe21,_0x47446a)=>{_0x455be6[a5_0x5e76('0xf')]('email',a5_0x5e76('0x28'))[a5_0x5e76('0x11')]();_0x455be6[a5_0x5e76('0xf')](a5_0x5e76('0x12'),a5_0x5e76('0x29'))[a5_0x5e76('0x2a')]({'min':0x4});_0x455be6[a5_0x5e76('0xf')](a5_0x5e76('0x2b'),a5_0x5e76('0x2c'))[a5_0x5e76('0x2d')](_0x455be6[a5_0x5e76('0x2e')]['password']);_0x455be6[a5_0x5e76('0x15')]('email')[a5_0x5e76('0x16')]({'gmail_remove_dots':![]});const _0x38bfbe=_0x455be6[a5_0x5e76('0x17')]();if(_0x38bfbe){_0x455be6['flash'](a5_0x5e76('0x19'),_0x38bfbe);return _0x3ebe21[a5_0x5e76('0x1a')](a5_0x5e76('0x2f'));}const _0x48c706=new User_1[(a5_0x5e76('0x1c'))]({'email':_0x455be6[a5_0x5e76('0x2e')][a5_0x5e76('0x10')],'password':_0x455be6[a5_0x5e76('0x2e')][a5_0x5e76('0x12')]});User_1[a5_0x5e76('0x1c')]['findOne']({'email':_0x455be6['body']['email']},(_0x2a7181,_0x436514)=>{if(_0x2a7181){return _0x47446a(_0x2a7181);}if(_0x436514){_0x455be6['flash'](a5_0x5e76('0x19'),{'msg':a5_0x5e76('0x30')});return _0x3ebe21[a5_0x5e76('0x1a')](a5_0x5e76('0x2f'));}_0x48c706[a5_0x5e76('0x31')](_0x2a7181=>{if(_0x2a7181){return _0x47446a(_0x2a7181);}_0x455be6[a5_0x5e76('0x1f')](_0x48c706,_0x2a7181=>{if(_0x2a7181){return _0x47446a(_0x2a7181);}_0x3ebe21[a5_0x5e76('0x1a')]('/');});});});};exports['getAccount']=(_0x1a35cd,_0x163a5f)=>{_0x163a5f[a5_0x5e76('0xb')](a5_0x5e76('0x32'),{'title':a5_0x5e76('0x33')});};exports['postUpdateProfile']=(_0x55972c,_0x4f209c,_0x1c3f66)=>{_0x55972c[a5_0x5e76('0xf')](a5_0x5e76('0x10'),'Please\x20enter\x20a\x20valid\x20email\x20address.')[a5_0x5e76('0x11')]();_0x55972c['sanitize'](a5_0x5e76('0x10'))['normalizeEmail']({'gmail_remove_dots':![]});const _0xfc8d8a=_0x55972c[a5_0x5e76('0x17')]();if(_0xfc8d8a){_0x55972c['flash'](a5_0x5e76('0x19'),_0xfc8d8a);return _0x4f209c[a5_0x5e76('0x1a')]('/account');}User_1[a5_0x5e76('0x1c')][a5_0x5e76('0x34')](_0x55972c[a5_0x5e76('0xa')]['id'],(_0x17aff4,_0xc67649)=>{if(_0x17aff4){return _0x1c3f66(_0x17aff4);}_0xc67649[a5_0x5e76('0x10')]=_0x55972c['body'][a5_0x5e76('0x10')]||'';_0xc67649[a5_0x5e76('0x35')]['name']=_0x55972c[a5_0x5e76('0x2e')][a5_0x5e76('0x36')]||'';_0xc67649['profile']['gender']=_0x55972c[a5_0x5e76('0x2e')][a5_0x5e76('0x37')]||'';_0xc67649['profile'][a5_0x5e76('0x38')]=_0x55972c[a5_0x5e76('0x2e')]['location']||'';_0xc67649['profile'][a5_0x5e76('0x39')]=_0x55972c[a5_0x5e76('0x2e')]['website']||'';_0xc67649[a5_0x5e76('0x31')](_0x17aff4=>{if(_0x17aff4){if(_0x17aff4[a5_0x5e76('0x3a')]===0x2af8){_0x55972c[a5_0x5e76('0x18')](a5_0x5e76('0x19'),{'msg':a5_0x5e76('0x3b')});return _0x4f209c['redirect'](a5_0x5e76('0x3c'));}return _0x1c3f66(_0x17aff4);}_0x55972c[a5_0x5e76('0x18')](a5_0x5e76('0x20'),{'msg':a5_0x5e76('0x3d')});_0x4f209c[a5_0x5e76('0x1a')](a5_0x5e76('0x3c'));});});};exports[a5_0x5e76('0x3e')]=(_0x15aa34,_0x364df3,_0x45c59b)=>{_0x15aa34[a5_0x5e76('0xf')]('password','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')['len']({'min':0x4});_0x15aa34[a5_0x5e76('0xf')](a5_0x5e76('0x2b'),a5_0x5e76('0x2c'))[a5_0x5e76('0x2d')](_0x15aa34[a5_0x5e76('0x2e')][a5_0x5e76('0x12')]);const _0x4666f0=_0x15aa34['validationErrors']();if(_0x4666f0){_0x15aa34[a5_0x5e76('0x18')](a5_0x5e76('0x19'),_0x4666f0);return _0x364df3[a5_0x5e76('0x1a')](a5_0x5e76('0x3c'));}User_1[a5_0x5e76('0x1c')][a5_0x5e76('0x34')](_0x15aa34[a5_0x5e76('0xa')]['id'],(_0x5ca134,_0x28b90f)=>{if(_0x5ca134){return _0x45c59b(_0x5ca134);}_0x28b90f[a5_0x5e76('0x12')]=_0x15aa34[a5_0x5e76('0x2e')][a5_0x5e76('0x12')];_0x28b90f[a5_0x5e76('0x31')](_0x5ca134=>{if(_0x5ca134){return _0x45c59b(_0x5ca134);}_0x15aa34[a5_0x5e76('0x18')]('success',{'msg':'Password\x20has\x20been\x20changed.'});_0x364df3[a5_0x5e76('0x1a')]('/account');});});};exports[a5_0x5e76('0x3f')]=(_0x23ddfe,_0x5414eb,_0x1d3e84)=>{User_1[a5_0x5e76('0x1c')][a5_0x5e76('0x40')]({'_id':_0x23ddfe[a5_0x5e76('0xa')]['id']},_0x428107=>{if(_0x428107){return _0x1d3e84(_0x428107);}_0x23ddfe[a5_0x5e76('0x23')]();_0x23ddfe[a5_0x5e76('0x18')]('info',{'msg':a5_0x5e76('0x41')});_0x5414eb[a5_0x5e76('0x1a')]('/');});};exports['getOauthUnlink']=(_0x309ead,_0x4b0ceb,_0x460763)=>{const _0x68c1ba=_0x309ead[a5_0x5e76('0x42')][a5_0x5e76('0x43')];User_1['default']['findById'](_0x309ead[a5_0x5e76('0xa')]['id'],(_0x5240bd,_0x513d60)=>{if(_0x5240bd){return _0x460763(_0x5240bd);}_0x513d60[_0x68c1ba]=undefined;_0x513d60['tokens']=_0x513d60[a5_0x5e76('0x44')][a5_0x5e76('0x45')](_0x3408bd=>_0x3408bd[a5_0x5e76('0x46')]!==_0x68c1ba);_0x513d60[a5_0x5e76('0x31')](_0x5240bd=>{if(_0x5240bd){return _0x460763(_0x5240bd);}_0x309ead[a5_0x5e76('0x18')](a5_0x5e76('0x47'),{'msg':_0x68c1ba+a5_0x5e76('0x48')});_0x4b0ceb[a5_0x5e76('0x1a')](a5_0x5e76('0x3c'));});});};exports[a5_0x5e76('0x49')]=(_0x3dc202,_0x4d18ce,_0x2c62c4)=>{if(_0x3dc202[a5_0x5e76('0x4a')]()){return _0x4d18ce['redirect']('/');}User_1['default'][a5_0x5e76('0x4b')]({'passwordResetToken':_0x3dc202[a5_0x5e76('0x42')][a5_0x5e76('0x4c')]})['where'](a5_0x5e76('0x4d'))['gt'](Date[a5_0x5e76('0x4e')]())[a5_0x5e76('0x4f')]((_0x461be1,_0x162c31)=>{if(_0x461be1){return _0x2c62c4(_0x461be1);}if(!_0x162c31){_0x3dc202[a5_0x5e76('0x18')](a5_0x5e76('0x19'),{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0x4d18ce[a5_0x5e76('0x1a')](a5_0x5e76('0x50'));}_0x4d18ce['render'](a5_0x5e76('0x51'),{'title':a5_0x5e76('0x52')});});};exports[a5_0x5e76('0x53')]=(_0x1ca4df,_0x860e11,_0x54b0c9)=>{_0x1ca4df[a5_0x5e76('0xf')](a5_0x5e76('0x12'),a5_0x5e76('0x54'))['len']({'min':0x4});_0x1ca4df['assert'](a5_0x5e76('0x55'),a5_0x5e76('0x56'))[a5_0x5e76('0x2d')](_0x1ca4df[a5_0x5e76('0x2e')][a5_0x5e76('0x12')]);const _0x2343e8=_0x1ca4df[a5_0x5e76('0x17')]();if(_0x2343e8){_0x1ca4df['flash'](a5_0x5e76('0x19'),_0x2343e8);return _0x860e11[a5_0x5e76('0x1a')](a5_0x5e76('0x57'));}async_1[a5_0x5e76('0x1c')]['waterfall']([function resetPassword(_0x12086e){User_1[a5_0x5e76('0x1c')][a5_0x5e76('0x4b')]({'passwordResetToken':_0x1ca4df[a5_0x5e76('0x42')][a5_0x5e76('0x4c')]})[a5_0x5e76('0x58')]('passwordResetExpires')['gt'](Date[a5_0x5e76('0x4e')]())[a5_0x5e76('0x4f')]((_0x14cb83,_0x50246a)=>{if(_0x14cb83){return _0x54b0c9(_0x14cb83);}if(!_0x50246a){_0x1ca4df[a5_0x5e76('0x18')](a5_0x5e76('0x19'),{'msg':a5_0x5e76('0x59')});return _0x860e11['redirect'](a5_0x5e76('0x57'));}_0x50246a[a5_0x5e76('0x12')]=_0x1ca4df[a5_0x5e76('0x2e')]['password'];_0x50246a[a5_0x5e76('0x5a')]=undefined;_0x50246a[a5_0x5e76('0x4d')]=undefined;_0x50246a['save'](_0x14cb83=>{if(_0x14cb83){return _0x54b0c9(_0x14cb83);}_0x1ca4df[a5_0x5e76('0x1f')](_0x50246a,_0x14cb83=>{_0x12086e(_0x14cb83,_0x50246a);});});});},function sendResetPasswordEmail(_0x28dbbd,_0x22fb13){const _0x222314=nodemailer_1[a5_0x5e76('0x1c')][a5_0x5e76('0x5b')]({'service':a5_0x5e76('0x5c'),'auth':{'user':process[a5_0x5e76('0x5d')][a5_0x5e76('0x5e')],'pass':process[a5_0x5e76('0x5d')][a5_0x5e76('0x5f')]}});const _0x39e6ac={'to':_0x28dbbd[a5_0x5e76('0x10')],'from':a5_0x5e76('0x60'),'subject':'Your\x20password\x20has\x20been\x20changed','text':a5_0x5e76('0x61')+_0x28dbbd[a5_0x5e76('0x10')]+a5_0x5e76('0x62')};_0x222314[a5_0x5e76('0x63')](_0x39e6ac,_0x5142a2=>{_0x1ca4df[a5_0x5e76('0x18')](a5_0x5e76('0x20'),{'msg':a5_0x5e76('0x64')});_0x22fb13(_0x5142a2);});}],_0x1a162d=>{if(_0x1a162d){return _0x54b0c9(_0x1a162d);}_0x860e11[a5_0x5e76('0x1a')]('/');});};exports[a5_0x5e76('0x65')]=(_0x3f4f38,_0x343c39)=>{if(_0x3f4f38[a5_0x5e76('0x4a')]()){return _0x343c39[a5_0x5e76('0x1a')]('/');}_0x343c39['render']('account/forgot',{'title':'Forgot\x20Password'});};exports[a5_0x5e76('0x66')]=(_0x11afac,_0x1287d5,_0x46db44)=>{_0x11afac['assert'](a5_0x5e76('0x10'),'Please\x20enter\x20a\x20valid\x20email\x20address.')[a5_0x5e76('0x11')]();_0x11afac[a5_0x5e76('0x15')](a5_0x5e76('0x10'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x5ef93c=_0x11afac[a5_0x5e76('0x17')]();if(_0x5ef93c){_0x11afac[a5_0x5e76('0x18')](a5_0x5e76('0x19'),_0x5ef93c);return _0x1287d5['redirect'](a5_0x5e76('0x50'));}async_1['default'][a5_0x5e76('0x67')]([function createRandomToken(_0x514593){crypto_1[a5_0x5e76('0x1c')][a5_0x5e76('0x68')](0x10,(_0x7d094c,_0x159936)=>{const _0x41808e=_0x159936[a5_0x5e76('0x69')](a5_0x5e76('0x6a'));_0x514593(_0x7d094c,_0x41808e);});},function setRandomToken(_0xb85f64,_0x217673){User_1[a5_0x5e76('0x1c')][a5_0x5e76('0x4b')]({'email':_0x11afac[a5_0x5e76('0x2e')][a5_0x5e76('0x10')]},(_0x5ca9ef,_0x58cc4f)=>{if(_0x5ca9ef){return _0x217673(_0x5ca9ef);}if(!_0x58cc4f){_0x11afac[a5_0x5e76('0x18')]('errors',{'msg':'Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.'});return _0x1287d5['redirect']('/forgot');}_0x58cc4f['passwordResetToken']=_0xb85f64;_0x58cc4f[a5_0x5e76('0x4d')]=Date[a5_0x5e76('0x4e')]()+0x36ee80;_0x58cc4f[a5_0x5e76('0x31')](_0x5ca9ef=>{_0x217673(_0x5ca9ef,_0xb85f64,_0x58cc4f);});});},function sendForgotPasswordEmail(_0x515de4,_0x57a5b8,_0x5d2b05){const _0x441b35=nodemailer_1[a5_0x5e76('0x1c')][a5_0x5e76('0x5b')]({'service':'SendGrid','auth':{'user':process[a5_0x5e76('0x5d')][a5_0x5e76('0x5e')],'pass':process[a5_0x5e76('0x5d')][a5_0x5e76('0x5f')]}});const _0x284f73={'to':_0x57a5b8[a5_0x5e76('0x10')],'from':'hackathon@starter.com','subject':a5_0x5e76('0x6b'),'text':a5_0x5e76('0x6c')+_0x11afac[a5_0x5e76('0x6d')][a5_0x5e76('0x6e')]+'/reset/'+_0x515de4+a5_0x5e76('0x6f')};_0x441b35[a5_0x5e76('0x63')](_0x284f73,_0x479f04=>{_0x11afac[a5_0x5e76('0x18')](a5_0x5e76('0x47'),{'msg':'An\x20e-mail\x20has\x20been\x20sent\x20to\x20'+_0x57a5b8[a5_0x5e76('0x10')]+'\x20with\x20further\x20instructions.'});_0x5d2b05(_0x479f04);});}],_0x3ee89c=>{if(_0x3ee89c){return _0x46db44(_0x3ee89c);}_0x1287d5[a5_0x5e76('0x1a')](a5_0x5e76('0x50'));});};