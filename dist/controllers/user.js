var a5_0x4b9f=['redirect','render','account/login','assert','Email\x20is\x20not\x20valid','password','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','normalizeEmail','validationErrors','flash','errors','/login','authenticate','message','logIn','success','session','logout','Create\x20Account','postSignup','isEmail','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','equals','/signup','default','body','findOne','email','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','save','Account\x20Management','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','/account','findById','name','gender','profile','location','website','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','info','getOauthUnlink','params','provider','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','token','where','passwordResetExpires','now','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','account/reset','Password\x20Reset','postReset','confirm','back','waterfall','exec','SENDGRID_USER','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','account/forgot','Forgot\x20Password','/forgot','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','passwordResetToken','SendGrid','env','SENDGRID_PASSWORD','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','__esModule','defineProperty','async','crypto','nodemailer','passport','../models/User','getLogin','user'];(function(_0x5e16ae,_0x5ddadf){var _0x13b226=function(_0x496f12){while(--_0x496f12){_0x5e16ae['push'](_0x5e16ae['shift']());}};_0x13b226(++_0x5ddadf);}(a5_0x4b9f,0xce));var a5_0x152b=function(_0x903cb0,_0x51ae10){_0x903cb0=_0x903cb0-0x0;var _0x58ff7e=a5_0x4b9f[_0x903cb0];return _0x58ff7e;};'use strict';var __importDefault=this&&this[a5_0x152b('0x0')]||function(_0x31abe2){return _0x31abe2&&_0x31abe2[a5_0x152b('0x1')]?_0x31abe2:{'default':_0x31abe2};};Object[a5_0x152b('0x2')](exports,a5_0x152b('0x1'),{'value':!![]});const async_1=__importDefault(require(a5_0x152b('0x3')));const crypto_1=__importDefault(require(a5_0x152b('0x4')));const nodemailer_1=__importDefault(require(a5_0x152b('0x5')));const passport_1=__importDefault(require(a5_0x152b('0x6')));const User_1=__importDefault(require(a5_0x152b('0x7')));const request=require('express-validator');exports[a5_0x152b('0x8')]=(_0x41e8f6,_0x7bf3ca)=>{if(_0x41e8f6[a5_0x152b('0x9')]){return _0x7bf3ca[a5_0x152b('0xa')]('/');}_0x7bf3ca[a5_0x152b('0xb')](a5_0x152b('0xc'),{'title':'Login'});};exports['postLogin']=(_0x55ac7f,_0x570662,_0x4fee63)=>{_0x55ac7f[a5_0x152b('0xd')]('email',a5_0x152b('0xe'))['isEmail']();_0x55ac7f[a5_0x152b('0xd')](a5_0x152b('0xf'),a5_0x152b('0x10'))[a5_0x152b('0x11')]();_0x55ac7f[a5_0x152b('0x12')]('email')[a5_0x152b('0x13')]({'gmail_remove_dots':![]});const _0x507d62=_0x55ac7f[a5_0x152b('0x14')]();if(_0x507d62){_0x55ac7f[a5_0x152b('0x15')](a5_0x152b('0x16'),_0x507d62);return _0x570662[a5_0x152b('0xa')](a5_0x152b('0x17'));}passport_1['default'][a5_0x152b('0x18')]('local',(_0x1f87ed,_0x44cb9,_0x119922)=>{if(_0x1f87ed){return _0x4fee63(_0x1f87ed);}if(!_0x44cb9){_0x55ac7f[a5_0x152b('0x15')](a5_0x152b('0x16'),_0x119922[a5_0x152b('0x19')]);return _0x570662[a5_0x152b('0xa')](a5_0x152b('0x17'));}_0x55ac7f[a5_0x152b('0x1a')](_0x44cb9,_0x1f87ed=>{if(_0x1f87ed){return _0x4fee63(_0x1f87ed);}_0x55ac7f[a5_0x152b('0x15')](a5_0x152b('0x1b'),{'msg':'Success!\x20You\x20are\x20logged\x20in.'});_0x570662[a5_0x152b('0xa')](_0x55ac7f[a5_0x152b('0x1c')]['returnTo']||'/');});})(_0x55ac7f,_0x570662,_0x4fee63);};exports['logout']=(_0x28dc6b,_0xab6a43)=>{_0x28dc6b[a5_0x152b('0x1d')]();_0xab6a43[a5_0x152b('0xa')]('/');};exports['getSignup']=(_0x249e7e,_0x1e6d89)=>{if(_0x249e7e[a5_0x152b('0x9')]){return _0x1e6d89['redirect']('/');}_0x1e6d89[a5_0x152b('0xb')]('account/signup',{'title':a5_0x152b('0x1e')});};exports[a5_0x152b('0x1f')]=(_0x45ca30,_0x27c6ad,_0x5869c2)=>{_0x45ca30[a5_0x152b('0xd')]('email',a5_0x152b('0xe'))[a5_0x152b('0x20')]();_0x45ca30[a5_0x152b('0xd')]('password',a5_0x152b('0x21'))[a5_0x152b('0x22')]({'min':0x4});_0x45ca30[a5_0x152b('0xd')](a5_0x152b('0x23'),a5_0x152b('0x24'))[a5_0x152b('0x25')](_0x45ca30['body']['password']);_0x45ca30[a5_0x152b('0x12')]('email')[a5_0x152b('0x13')]({'gmail_remove_dots':![]});const _0x1e9f88=_0x45ca30[a5_0x152b('0x14')]();if(_0x1e9f88){_0x45ca30[a5_0x152b('0x15')](a5_0x152b('0x16'),_0x1e9f88);return _0x27c6ad[a5_0x152b('0xa')](a5_0x152b('0x26'));}const _0x53f398=new User_1[(a5_0x152b('0x27'))]({'email':_0x45ca30[a5_0x152b('0x28')]['email'],'password':_0x45ca30[a5_0x152b('0x28')][a5_0x152b('0xf')]});User_1[a5_0x152b('0x27')][a5_0x152b('0x29')]({'email':_0x45ca30[a5_0x152b('0x28')][a5_0x152b('0x2a')]},(_0x2bc358,_0x1df433)=>{if(_0x2bc358){return _0x5869c2(_0x2bc358);}if(_0x1df433){_0x45ca30[a5_0x152b('0x15')]('errors',{'msg':a5_0x152b('0x2b')});return _0x27c6ad[a5_0x152b('0xa')]('/signup');}_0x53f398[a5_0x152b('0x2c')](_0x2bc358=>{if(_0x2bc358){return _0x5869c2(_0x2bc358);}_0x45ca30['logIn'](_0x53f398,_0x2bc358=>{if(_0x2bc358){return _0x5869c2(_0x2bc358);}_0x27c6ad[a5_0x152b('0xa')]('/');});});});};exports['getAccount']=(_0xdcfe1f,_0x259a9f)=>{_0x259a9f[a5_0x152b('0xb')]('account/profile',{'title':a5_0x152b('0x2d')});};exports[a5_0x152b('0x2e')]=(_0x58f032,_0x20e542,_0x2fbbcc)=>{_0x58f032[a5_0x152b('0xd')](a5_0x152b('0x2a'),a5_0x152b('0x2f'))[a5_0x152b('0x20')]();_0x58f032[a5_0x152b('0x12')](a5_0x152b('0x2a'))[a5_0x152b('0x13')]({'gmail_remove_dots':![]});const _0x528785=_0x58f032[a5_0x152b('0x14')]();if(_0x528785){_0x58f032['flash'](a5_0x152b('0x16'),_0x528785);return _0x20e542['redirect'](a5_0x152b('0x30'));}User_1['default'][a5_0x152b('0x31')](_0x58f032[a5_0x152b('0x9')]['id'],(_0x20caab,_0x59b0f2)=>{if(_0x20caab){return _0x2fbbcc(_0x20caab);}_0x59b0f2[a5_0x152b('0x2a')]=_0x58f032[a5_0x152b('0x28')][a5_0x152b('0x2a')]||'';_0x59b0f2['profile']['name']=_0x58f032['body'][a5_0x152b('0x32')]||'';_0x59b0f2['profile'][a5_0x152b('0x33')]=_0x58f032[a5_0x152b('0x28')][a5_0x152b('0x33')]||'';_0x59b0f2[a5_0x152b('0x34')][a5_0x152b('0x35')]=_0x58f032[a5_0x152b('0x28')]['location']||'';_0x59b0f2[a5_0x152b('0x34')]['website']=_0x58f032[a5_0x152b('0x28')][a5_0x152b('0x36')]||'';_0x59b0f2[a5_0x152b('0x2c')](_0x20caab=>{if(_0x20caab){if(_0x20caab[a5_0x152b('0x37')]===0x2af8){_0x58f032[a5_0x152b('0x15')](a5_0x152b('0x16'),{'msg':a5_0x152b('0x38')});return _0x20e542[a5_0x152b('0xa')](a5_0x152b('0x30'));}return _0x2fbbcc(_0x20caab);}_0x58f032[a5_0x152b('0x15')](a5_0x152b('0x1b'),{'msg':a5_0x152b('0x39')});_0x20e542[a5_0x152b('0xa')]('/account');});});};exports[a5_0x152b('0x3a')]=(_0x4770d5,_0x2a4024,_0x5e0339)=>{_0x4770d5[a5_0x152b('0xd')](a5_0x152b('0xf'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')[a5_0x152b('0x22')]({'min':0x4});_0x4770d5['assert'](a5_0x152b('0x23'),a5_0x152b('0x24'))[a5_0x152b('0x25')](_0x4770d5[a5_0x152b('0x28')][a5_0x152b('0xf')]);const _0x180e5b=_0x4770d5[a5_0x152b('0x14')]();if(_0x180e5b){_0x4770d5[a5_0x152b('0x15')](a5_0x152b('0x16'),_0x180e5b);return _0x2a4024[a5_0x152b('0xa')](a5_0x152b('0x30'));}User_1[a5_0x152b('0x27')][a5_0x152b('0x31')](_0x4770d5[a5_0x152b('0x9')]['id'],(_0x1c1dcf,_0x4586bc)=>{if(_0x1c1dcf){return _0x5e0339(_0x1c1dcf);}_0x4586bc[a5_0x152b('0xf')]=_0x4770d5[a5_0x152b('0x28')][a5_0x152b('0xf')];_0x4586bc['save'](_0x1c1dcf=>{if(_0x1c1dcf){return _0x5e0339(_0x1c1dcf);}_0x4770d5[a5_0x152b('0x15')](a5_0x152b('0x1b'),{'msg':a5_0x152b('0x3b')});_0x2a4024[a5_0x152b('0xa')](a5_0x152b('0x30'));});});};exports[a5_0x152b('0x3c')]=(_0xba2ae3,_0x4588b5,_0x26271e)=>{User_1['default'][a5_0x152b('0x3d')]({'_id':_0xba2ae3[a5_0x152b('0x9')]['id']},_0x12e514=>{if(_0x12e514){return _0x26271e(_0x12e514);}_0xba2ae3[a5_0x152b('0x1d')]();_0xba2ae3[a5_0x152b('0x15')](a5_0x152b('0x3e'),{'msg':'Your\x20account\x20has\x20been\x20deleted.'});_0x4588b5['redirect']('/');});};exports[a5_0x152b('0x3f')]=(_0x402679,_0x3241f8,_0x4c4dfa)=>{const _0x246e1c=_0x402679[a5_0x152b('0x40')][a5_0x152b('0x41')];User_1[a5_0x152b('0x27')][a5_0x152b('0x31')](_0x402679['user']['id'],(_0x301151,_0x347936)=>{if(_0x301151){return _0x4c4dfa(_0x301151);}_0x347936[_0x246e1c]=undefined;_0x347936['tokens']=_0x347936[a5_0x152b('0x42')][a5_0x152b('0x43')](_0x169883=>_0x169883[a5_0x152b('0x44')]!==_0x246e1c);_0x347936[a5_0x152b('0x2c')](_0x301151=>{if(_0x301151){return _0x4c4dfa(_0x301151);}_0x402679[a5_0x152b('0x15')](a5_0x152b('0x3e'),{'msg':_0x246e1c+a5_0x152b('0x45')});_0x3241f8[a5_0x152b('0xa')]('/account');});});};exports[a5_0x152b('0x46')]=(_0x26dae1,_0x471ec3,_0x3edbca)=>{if(_0x26dae1[a5_0x152b('0x47')]()){return _0x471ec3[a5_0x152b('0xa')]('/');}User_1[a5_0x152b('0x27')][a5_0x152b('0x29')]({'passwordResetToken':_0x26dae1[a5_0x152b('0x40')][a5_0x152b('0x48')]})[a5_0x152b('0x49')](a5_0x152b('0x4a'))['gt'](Date[a5_0x152b('0x4b')]())['exec']((_0x37213b,_0x22832b)=>{if(_0x37213b){return _0x3edbca(_0x37213b);}if(!_0x22832b){_0x26dae1[a5_0x152b('0x15')](a5_0x152b('0x16'),{'msg':a5_0x152b('0x4c')});return _0x471ec3[a5_0x152b('0xa')]('/forgot');}_0x471ec3[a5_0x152b('0xb')](a5_0x152b('0x4d'),{'title':a5_0x152b('0x4e')});});};exports[a5_0x152b('0x4f')]=(_0x264b90,_0x5ec8c7,_0x56b02c)=>{_0x264b90[a5_0x152b('0xd')](a5_0x152b('0xf'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.')[a5_0x152b('0x22')]({'min':0x4});_0x264b90[a5_0x152b('0xd')](a5_0x152b('0x50'),'Passwords\x20must\x20match.')['equals'](_0x264b90['body']['password']);const _0x13ff45=_0x264b90[a5_0x152b('0x14')]();if(_0x13ff45){_0x264b90[a5_0x152b('0x15')](a5_0x152b('0x16'),_0x13ff45);return _0x5ec8c7[a5_0x152b('0xa')](a5_0x152b('0x51'));}async_1[a5_0x152b('0x27')][a5_0x152b('0x52')]([function resetPassword(_0x46b2c3){User_1[a5_0x152b('0x27')][a5_0x152b('0x29')]({'passwordResetToken':_0x264b90[a5_0x152b('0x40')][a5_0x152b('0x48')]})['where'](a5_0x152b('0x4a'))['gt'](Date[a5_0x152b('0x4b')]())[a5_0x152b('0x53')]((_0x23fc77,_0x100d88)=>{if(_0x23fc77){return _0x56b02c(_0x23fc77);}if(!_0x100d88){_0x264b90[a5_0x152b('0x15')]('errors',{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0x5ec8c7[a5_0x152b('0xa')](a5_0x152b('0x51'));}_0x100d88[a5_0x152b('0xf')]=_0x264b90['body']['password'];_0x100d88['passwordResetToken']=undefined;_0x100d88['passwordResetExpires']=undefined;_0x100d88[a5_0x152b('0x2c')](_0x23fc77=>{if(_0x23fc77){return _0x56b02c(_0x23fc77);}_0x264b90[a5_0x152b('0x1a')](_0x100d88,_0x23fc77=>{_0x46b2c3(_0x23fc77,_0x100d88);});});});},function sendResetPasswordEmail(_0x4146ce,_0x571eb2){const _0x53eaa4=nodemailer_1[a5_0x152b('0x27')]['createTransport']({'service':'SendGrid','auth':{'user':process['env'][a5_0x152b('0x54')],'pass':process['env']['SENDGRID_PASSWORD']}});const _0x4d2fd9={'to':_0x4146ce[a5_0x152b('0x2a')],'from':a5_0x152b('0x55'),'subject':a5_0x152b('0x56'),'text':a5_0x152b('0x57')+_0x4146ce['email']+a5_0x152b('0x58')};_0x53eaa4[a5_0x152b('0x59')](_0x4d2fd9,_0x9bcc0d=>{_0x264b90['flash']('success',{'msg':a5_0x152b('0x5a')});_0x571eb2(_0x9bcc0d);});}],_0xa729ff=>{if(_0xa729ff){return _0x56b02c(_0xa729ff);}_0x5ec8c7[a5_0x152b('0xa')]('/');});};exports['getForgot']=(_0x1fef1c,_0x5bb094)=>{if(_0x1fef1c['isAuthenticated']()){return _0x5bb094['redirect']('/');}_0x5bb094[a5_0x152b('0xb')](a5_0x152b('0x5b'),{'title':a5_0x152b('0x5c')});};exports['postForgot']=(_0x2d52b2,_0x117bc9,_0x5ea70d)=>{_0x2d52b2[a5_0x152b('0xd')]('email',a5_0x152b('0x2f'))['isEmail']();_0x2d52b2[a5_0x152b('0x12')](a5_0x152b('0x2a'))[a5_0x152b('0x13')]({'gmail_remove_dots':![]});const _0x6f0dc=_0x2d52b2['validationErrors']();if(_0x6f0dc){_0x2d52b2[a5_0x152b('0x15')](a5_0x152b('0x16'),_0x6f0dc);return _0x117bc9['redirect'](a5_0x152b('0x5d'));}async_1['default'][a5_0x152b('0x52')]([function createRandomToken(_0x5e3d0d){crypto_1[a5_0x152b('0x27')]['randomBytes'](0x10,(_0x23f330,_0x2996c9)=>{const _0x383a6a=_0x2996c9[a5_0x152b('0x5e')](a5_0x152b('0x5f'));_0x5e3d0d(_0x23f330,_0x383a6a);});},function setRandomToken(_0xe9a5ab,_0x3b58ef){User_1[a5_0x152b('0x27')][a5_0x152b('0x29')]({'email':_0x2d52b2['body'][a5_0x152b('0x2a')]},(_0x13dd4d,_0x303fc5)=>{if(_0x13dd4d){return _0x3b58ef(_0x13dd4d);}if(!_0x303fc5){_0x2d52b2[a5_0x152b('0x15')](a5_0x152b('0x16'),{'msg':a5_0x152b('0x60')});return _0x117bc9[a5_0x152b('0xa')](a5_0x152b('0x5d'));}_0x303fc5[a5_0x152b('0x61')]=_0xe9a5ab;_0x303fc5[a5_0x152b('0x4a')]=Date[a5_0x152b('0x4b')]()+0x36ee80;_0x303fc5['save'](_0x13dd4d=>{_0x3b58ef(_0x13dd4d,_0xe9a5ab,_0x303fc5);});});},function sendForgotPasswordEmail(_0x18fb62,_0x33eeeb,_0x2bc470){const _0x4e637d=nodemailer_1[a5_0x152b('0x27')]['createTransport']({'service':a5_0x152b('0x62'),'auth':{'user':process[a5_0x152b('0x63')][a5_0x152b('0x54')],'pass':process[a5_0x152b('0x63')][a5_0x152b('0x64')]}});const _0x44ccb1={'to':_0x33eeeb[a5_0x152b('0x2a')],'from':'hackathon@starter.com','subject':a5_0x152b('0x65'),'text':a5_0x152b('0x66')+_0x2d52b2[a5_0x152b('0x67')][a5_0x152b('0x68')]+'/reset/'+_0x18fb62+a5_0x152b('0x69')};_0x4e637d[a5_0x152b('0x59')](_0x44ccb1,_0x35ee6e=>{_0x2d52b2[a5_0x152b('0x15')]('info',{'msg':a5_0x152b('0x6a')+_0x33eeeb['email']+a5_0x152b('0x6b')});_0x2bc470(_0x35ee6e);});}],_0x536a76=>{if(_0x536a76){return _0x5ea70d(_0x536a76);}_0x117bc9[a5_0x152b('0xa')](a5_0x152b('0x5d'));});};