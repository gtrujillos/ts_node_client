var a5_0x2b89=['findById','profile','name','gender','location','website','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','Profile\x20information\x20has\x20been\x20updated.','Passwords\x20do\x20not\x20match','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','params','provider','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','token','where','passwordResetExpires','now','postReset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','len','confirm','Passwords\x20must\x20match.','back','waterfall','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','createTransport','env','SENDGRID_USER','SENDGRID_PASSWORD','Your\x20password\x20has\x20been\x20changed','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','postForgot','/forgot','randomBytes','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','passwordResetToken','hackathon@starter.com','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','info','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','__esModule','defineProperty','crypto','nodemailer','passport','user','redirect','render','account/login','postLogin','assert','email','Email\x20is\x20not\x20valid','isEmail','sanitize','flash','/login','default','authenticate','errors','logIn','success','Success!\x20You\x20are\x20logged\x20in.','returnTo','logout','Create\x20Account','postSignup','password','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','confirmPassword','equals','body','normalizeEmail','validationErrors','findOne','/signup','save','getAccount','account/profile','Account\x20Management','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','/account'];(function(_0x354e41,_0x3eb581){var _0x396b80=function(_0x546eda){while(--_0x546eda){_0x354e41['push'](_0x354e41['shift']());}};_0x396b80(++_0x3eb581);}(a5_0x2b89,0xfd));var a5_0x36c4=function(_0x1e23e7,_0x2c2b5b){_0x1e23e7=_0x1e23e7-0x0;var _0x2f4785=a5_0x2b89[_0x1e23e7];return _0x2f4785;};'use strict';var __importDefault=this&&this[a5_0x36c4('0x0')]||function(_0x178cde){return _0x178cde&&_0x178cde[a5_0x36c4('0x1')]?_0x178cde:{'default':_0x178cde};};Object[a5_0x36c4('0x2')](exports,'__esModule',{'value':!![]});const async_1=__importDefault(require('async'));const crypto_1=__importDefault(require(a5_0x36c4('0x3')));const nodemailer_1=__importDefault(require(a5_0x36c4('0x4')));const passport_1=__importDefault(require(a5_0x36c4('0x5')));const User_1=__importDefault(require('../models/User'));const request=require('express-validator');exports['getLogin']=(_0x4721f5,_0x5d50ad)=>{if(_0x4721f5[a5_0x36c4('0x6')]){return _0x5d50ad[a5_0x36c4('0x7')]('/');}_0x5d50ad[a5_0x36c4('0x8')](a5_0x36c4('0x9'),{'title':'Login'});};exports[a5_0x36c4('0xa')]=(_0x26b47c,_0x38a354,_0x217275)=>{_0x26b47c[a5_0x36c4('0xb')](a5_0x36c4('0xc'),a5_0x36c4('0xd'))[a5_0x36c4('0xe')]();_0x26b47c[a5_0x36c4('0xb')]('password','Password\x20cannot\x20be\x20blank')['notEmpty']();_0x26b47c[a5_0x36c4('0xf')](a5_0x36c4('0xc'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x3313d0=_0x26b47c['validationErrors']();if(_0x3313d0){_0x26b47c[a5_0x36c4('0x10')]('errors',_0x3313d0);return _0x38a354[a5_0x36c4('0x7')](a5_0x36c4('0x11'));}passport_1[a5_0x36c4('0x12')][a5_0x36c4('0x13')]('local',(_0x47397e,_0x4c0169,_0xf5df1e)=>{if(_0x47397e){return _0x217275(_0x47397e);}if(!_0x4c0169){_0x26b47c[a5_0x36c4('0x10')](a5_0x36c4('0x14'),_0xf5df1e['message']);return _0x38a354[a5_0x36c4('0x7')](a5_0x36c4('0x11'));}_0x26b47c[a5_0x36c4('0x15')](_0x4c0169,_0x47397e=>{if(_0x47397e){return _0x217275(_0x47397e);}_0x26b47c[a5_0x36c4('0x10')](a5_0x36c4('0x16'),{'msg':a5_0x36c4('0x17')});_0x38a354[a5_0x36c4('0x7')](_0x26b47c['session'][a5_0x36c4('0x18')]||'/');});})(_0x26b47c,_0x38a354,_0x217275);};exports[a5_0x36c4('0x19')]=(_0x1f3ede,_0x288596)=>{_0x1f3ede[a5_0x36c4('0x19')]();_0x288596[a5_0x36c4('0x7')]('/');};exports['getSignup']=(_0x28c164,_0x54ca49)=>{if(_0x28c164[a5_0x36c4('0x6')]){return _0x54ca49['redirect']('/');}_0x54ca49[a5_0x36c4('0x8')]('account/signup',{'title':a5_0x36c4('0x1a')});};exports[a5_0x36c4('0x1b')]=(_0x1ca402,_0x4bbec6,_0x2524db)=>{_0x1ca402[a5_0x36c4('0xb')](a5_0x36c4('0xc'),'Email\x20is\x20not\x20valid')[a5_0x36c4('0xe')]();_0x1ca402[a5_0x36c4('0xb')](a5_0x36c4('0x1c'),a5_0x36c4('0x1d'))['len']({'min':0x4});_0x1ca402[a5_0x36c4('0xb')](a5_0x36c4('0x1e'),'Passwords\x20do\x20not\x20match')[a5_0x36c4('0x1f')](_0x1ca402[a5_0x36c4('0x20')][a5_0x36c4('0x1c')]);_0x1ca402[a5_0x36c4('0xf')](a5_0x36c4('0xc'))[a5_0x36c4('0x21')]({'gmail_remove_dots':![]});const _0x3d3d8a=_0x1ca402[a5_0x36c4('0x22')]();if(_0x3d3d8a){_0x1ca402[a5_0x36c4('0x10')]('errors',_0x3d3d8a);return _0x4bbec6['redirect']('/signup');}const _0x58922f=new User_1['default']({});User_1[a5_0x36c4('0x12')][a5_0x36c4('0x23')]({'email':_0x1ca402[a5_0x36c4('0x20')][a5_0x36c4('0xc')]},(_0x94d3e4,_0x48e79f)=>{if(_0x94d3e4){return _0x2524db(_0x94d3e4);}if(_0x48e79f){_0x1ca402[a5_0x36c4('0x10')](a5_0x36c4('0x14'),{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0x4bbec6[a5_0x36c4('0x7')](a5_0x36c4('0x24'));}_0x58922f[a5_0x36c4('0x25')](_0x94d3e4=>{if(_0x94d3e4){return _0x2524db(_0x94d3e4);}_0x1ca402[a5_0x36c4('0x15')](_0x58922f,_0x94d3e4=>{if(_0x94d3e4){return _0x2524db(_0x94d3e4);}_0x4bbec6[a5_0x36c4('0x7')]('/');});});});};exports[a5_0x36c4('0x26')]=(_0x411b42,_0x3383f4)=>{_0x3383f4[a5_0x36c4('0x8')](a5_0x36c4('0x27'),{'title':a5_0x36c4('0x28')});};exports[a5_0x36c4('0x29')]=(_0x35e324,_0x3f4cd2,_0x228ae7)=>{_0x35e324['assert']('email',a5_0x36c4('0x2a'))[a5_0x36c4('0xe')]();_0x35e324[a5_0x36c4('0xf')](a5_0x36c4('0xc'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x265550=_0x35e324[a5_0x36c4('0x22')]();if(_0x265550){_0x35e324[a5_0x36c4('0x10')](a5_0x36c4('0x14'),_0x265550);return _0x3f4cd2['redirect'](a5_0x36c4('0x2b'));}User_1[a5_0x36c4('0x12')][a5_0x36c4('0x2c')](_0x35e324['user']['id'],(_0xd35249,_0x4349cd)=>{if(_0xd35249){return _0x228ae7(_0xd35249);}_0x4349cd[a5_0x36c4('0xc')]=_0x35e324['body'][a5_0x36c4('0xc')]||'';_0x4349cd[a5_0x36c4('0x2d')][a5_0x36c4('0x2e')]=_0x35e324['body'][a5_0x36c4('0x2e')]||'';_0x4349cd[a5_0x36c4('0x2d')][a5_0x36c4('0x2f')]=_0x35e324[a5_0x36c4('0x20')]['gender']||'';_0x4349cd[a5_0x36c4('0x2d')][a5_0x36c4('0x30')]=_0x35e324[a5_0x36c4('0x20')][a5_0x36c4('0x30')]||'';_0x4349cd['profile'][a5_0x36c4('0x31')]=_0x35e324[a5_0x36c4('0x20')][a5_0x36c4('0x31')]||'';_0x4349cd[a5_0x36c4('0x25')](_0xd35249=>{if(_0xd35249){if(_0xd35249['code']===0x2af8){_0x35e324['flash'](a5_0x36c4('0x14'),{'msg':a5_0x36c4('0x32')});return _0x3f4cd2[a5_0x36c4('0x7')]('/account');}return _0x228ae7(_0xd35249);}_0x35e324['flash'](a5_0x36c4('0x16'),{'msg':a5_0x36c4('0x33')});_0x3f4cd2[a5_0x36c4('0x7')](a5_0x36c4('0x2b'));});});};exports['postUpdatePassword']=(_0x59e413,_0x3a0102,_0x2c007d)=>{_0x59e413[a5_0x36c4('0xb')](a5_0x36c4('0x1c'),a5_0x36c4('0x1d'))['len']({'min':0x4});_0x59e413[a5_0x36c4('0xb')](a5_0x36c4('0x1e'),a5_0x36c4('0x34'))[a5_0x36c4('0x1f')](_0x59e413['body']['password']);const _0x581d50=_0x59e413[a5_0x36c4('0x22')]();if(_0x581d50){_0x59e413[a5_0x36c4('0x10')](a5_0x36c4('0x14'),_0x581d50);return _0x3a0102[a5_0x36c4('0x7')](a5_0x36c4('0x2b'));}User_1[a5_0x36c4('0x12')][a5_0x36c4('0x2c')](_0x59e413[a5_0x36c4('0x6')]['id'],(_0x3615c5,_0x155984)=>{if(_0x3615c5){return _0x2c007d(_0x3615c5);}_0x155984[a5_0x36c4('0x1c')]=_0x59e413['body']['password'];_0x155984[a5_0x36c4('0x25')](_0x3615c5=>{if(_0x3615c5){return _0x2c007d(_0x3615c5);}_0x59e413[a5_0x36c4('0x10')]('success',{'msg':a5_0x36c4('0x35')});_0x3a0102[a5_0x36c4('0x7')](a5_0x36c4('0x2b'));});});};exports[a5_0x36c4('0x36')]=(_0x42e273,_0x43218f,_0xf7375)=>{User_1[a5_0x36c4('0x12')][a5_0x36c4('0x37')]({'_id':_0x42e273[a5_0x36c4('0x6')]['id']},_0x1f13c6=>{if(_0x1f13c6){return _0xf7375(_0x1f13c6);}_0x42e273[a5_0x36c4('0x19')]();_0x42e273[a5_0x36c4('0x10')]('info',{'msg':a5_0x36c4('0x38')});_0x43218f['redirect']('/');});};exports[a5_0x36c4('0x39')]=(_0x11440f,_0x3af11a,_0x50ad32)=>{const _0x5f3bc0=_0x11440f[a5_0x36c4('0x3a')][a5_0x36c4('0x3b')];User_1[a5_0x36c4('0x12')][a5_0x36c4('0x2c')](_0x11440f[a5_0x36c4('0x6')]['id'],(_0x2df7e7,_0x2f9f0b)=>{if(_0x2df7e7){return _0x50ad32(_0x2df7e7);}_0x2f9f0b[_0x5f3bc0]=undefined;_0x2f9f0b[a5_0x36c4('0x3c')]=_0x2f9f0b[a5_0x36c4('0x3c')][a5_0x36c4('0x3d')](_0x4f7300=>_0x4f7300[a5_0x36c4('0x3e')]!==_0x5f3bc0);_0x2f9f0b[a5_0x36c4('0x25')](_0x2df7e7=>{if(_0x2df7e7){return _0x50ad32(_0x2df7e7);}_0x11440f[a5_0x36c4('0x10')]('info',{'msg':_0x5f3bc0+a5_0x36c4('0x3f')});_0x3af11a[a5_0x36c4('0x7')](a5_0x36c4('0x2b'));});});};exports[a5_0x36c4('0x40')]=(_0x5a6da0,_0x2edaeb,_0x146b0c)=>{if(_0x5a6da0[a5_0x36c4('0x41')]()){return _0x2edaeb[a5_0x36c4('0x7')]('/');}User_1[a5_0x36c4('0x12')][a5_0x36c4('0x23')]({'passwordResetToken':_0x5a6da0['params'][a5_0x36c4('0x42')]})[a5_0x36c4('0x43')](a5_0x36c4('0x44'))['gt'](Date[a5_0x36c4('0x45')]())['exec']((_0x4c11b7,_0x34547d)=>{if(_0x4c11b7){return _0x146b0c(_0x4c11b7);}if(!_0x34547d){_0x5a6da0[a5_0x36c4('0x10')](a5_0x36c4('0x14'),{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0x2edaeb[a5_0x36c4('0x7')]('/forgot');}_0x2edaeb['render']('account/reset',{'title':'Password\x20Reset'});});};exports[a5_0x36c4('0x46')]=(_0xdc6eaf,_0x49ea14,_0x3e3f27)=>{_0xdc6eaf[a5_0x36c4('0xb')](a5_0x36c4('0x1c'),a5_0x36c4('0x47'))[a5_0x36c4('0x48')]({'min':0x4});_0xdc6eaf['assert'](a5_0x36c4('0x49'),a5_0x36c4('0x4a'))[a5_0x36c4('0x1f')](_0xdc6eaf[a5_0x36c4('0x20')][a5_0x36c4('0x1c')]);const _0x53d9dc=_0xdc6eaf['validationErrors']();if(_0x53d9dc){_0xdc6eaf[a5_0x36c4('0x10')](a5_0x36c4('0x14'),_0x53d9dc);return _0x49ea14[a5_0x36c4('0x7')](a5_0x36c4('0x4b'));}async_1[a5_0x36c4('0x12')][a5_0x36c4('0x4c')]([function resetPassword(_0x3395c5){User_1[a5_0x36c4('0x12')][a5_0x36c4('0x23')]({'passwordResetToken':_0xdc6eaf['params'][a5_0x36c4('0x42')]})[a5_0x36c4('0x43')](a5_0x36c4('0x44'))['gt'](Date[a5_0x36c4('0x45')]())['exec']((_0x483436,_0x227f4b)=>{if(_0x483436){return _0x3e3f27(_0x483436);}if(!_0x227f4b){_0xdc6eaf['flash'](a5_0x36c4('0x14'),{'msg':a5_0x36c4('0x4d')});return _0x49ea14['redirect']('back');}_0x227f4b[a5_0x36c4('0x1c')]=_0xdc6eaf[a5_0x36c4('0x20')]['password'];_0x227f4b['passwordResetToken']=undefined;_0x227f4b['passwordResetExpires']=undefined;_0x227f4b[a5_0x36c4('0x25')](_0x483436=>{if(_0x483436){return _0x3e3f27(_0x483436);}_0xdc6eaf[a5_0x36c4('0x15')](_0x227f4b,_0x483436=>{_0x3395c5(_0x483436,_0x227f4b);});});});},function sendResetPasswordEmail(_0x28cd01,_0x3ccadd){const _0x1a652a=nodemailer_1[a5_0x36c4('0x12')][a5_0x36c4('0x4e')]({'service':'SendGrid','auth':{'user':process[a5_0x36c4('0x4f')][a5_0x36c4('0x50')],'pass':process[a5_0x36c4('0x4f')][a5_0x36c4('0x51')]}});const _0x40e4b4={'to':_0x28cd01[a5_0x36c4('0xc')],'from':'express-ts@starter.com','subject':a5_0x36c4('0x52'),'text':'Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20'+_0x28cd01['email']+a5_0x36c4('0x53')};_0x1a652a[a5_0x36c4('0x54')](_0x40e4b4,_0x488d57=>{_0xdc6eaf[a5_0x36c4('0x10')](a5_0x36c4('0x16'),{'msg':a5_0x36c4('0x55')});_0x3ccadd(_0x488d57);});}],_0x41a38c=>{if(_0x41a38c){return _0x3e3f27(_0x41a38c);}_0x49ea14[a5_0x36c4('0x7')]('/');});};exports['getForgot']=(_0x4d657b,_0x5d3dd4)=>{if(_0x4d657b[a5_0x36c4('0x41')]()){return _0x5d3dd4[a5_0x36c4('0x7')]('/');}_0x5d3dd4[a5_0x36c4('0x8')]('account/forgot',{'title':'Forgot\x20Password'});};exports[a5_0x36c4('0x56')]=(_0x56c252,_0x4b15c8,_0x4a4343)=>{_0x56c252['assert'](a5_0x36c4('0xc'),a5_0x36c4('0x2a'))[a5_0x36c4('0xe')]();_0x56c252[a5_0x36c4('0xf')](a5_0x36c4('0xc'))[a5_0x36c4('0x21')]({'gmail_remove_dots':![]});const _0xdfb5cd=_0x56c252[a5_0x36c4('0x22')]();if(_0xdfb5cd){_0x56c252['flash'](a5_0x36c4('0x14'),_0xdfb5cd);return _0x4b15c8[a5_0x36c4('0x7')](a5_0x36c4('0x57'));}async_1[a5_0x36c4('0x12')][a5_0x36c4('0x4c')]([function createRandomToken(_0x187c0b){crypto_1['default'][a5_0x36c4('0x58')](0x10,(_0x5d8788,_0x4b9f66)=>{const _0xf95014=_0x4b9f66['toString']('hex');_0x187c0b(_0x5d8788,_0xf95014);});},function setRandomToken(_0x524e29,_0x551ada){User_1['default'][a5_0x36c4('0x23')]({'email':_0x56c252[a5_0x36c4('0x20')][a5_0x36c4('0xc')]},(_0x2a5238,_0xb64601)=>{if(_0x2a5238){return _0x551ada(_0x2a5238);}if(!_0xb64601){_0x56c252['flash'](a5_0x36c4('0x14'),{'msg':a5_0x36c4('0x59')});return _0x4b15c8['redirect']('/forgot');}_0xb64601[a5_0x36c4('0x5a')]=_0x524e29;_0xb64601[a5_0x36c4('0x44')]=Date[a5_0x36c4('0x45')]()+0x36ee80;_0xb64601['save'](_0x2a5238=>{_0x551ada(_0x2a5238,_0x524e29,_0xb64601);});});},function sendForgotPasswordEmail(_0x96ca4e,_0xf7c315,_0x460440){const _0x30ef63=nodemailer_1[a5_0x36c4('0x12')][a5_0x36c4('0x4e')]({'service':'SendGrid','auth':{'user':process[a5_0x36c4('0x4f')][a5_0x36c4('0x50')],'pass':process[a5_0x36c4('0x4f')][a5_0x36c4('0x51')]}});const _0x578c38={'to':_0xf7c315[a5_0x36c4('0xc')],'from':a5_0x36c4('0x5b'),'subject':'Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','text':a5_0x36c4('0x5c')+_0x56c252[a5_0x36c4('0x5d')][a5_0x36c4('0x5e')]+'/reset/'+_0x96ca4e+a5_0x36c4('0x5f')};_0x30ef63['sendMail'](_0x578c38,_0x2d2283=>{_0x56c252[a5_0x36c4('0x10')](a5_0x36c4('0x60'),{'msg':a5_0x36c4('0x61')+_0xf7c315[a5_0x36c4('0xc')]+a5_0x36c4('0x62')});_0x460440(_0x2d2283);});}],_0x1abbcb=>{if(_0x1abbcb){return _0x4a4343(_0x1abbcb);}_0x4b15c8[a5_0x36c4('0x7')](a5_0x36c4('0x57'));});};