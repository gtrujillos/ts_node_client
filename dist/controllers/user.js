var a5_0xedc5=['Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','Password\x20has\x20been\x20changed.','postDeleteAccount','info','getOauthUnlink','params','provider','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','where','passwordResetExpires','now','/forgot','account/reset','Password\x20Reset','postReset','confirm','back','waterfall','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','passwordResetToken','createTransport','SendGrid','env','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','\x20has\x20just\x20been\x20changed.\x0a','Success!\x20Your\x20password\x20has\x20been\x20changed.','getForgot','account/forgot','Forgot\x20Password','postForgot','randomBytes','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','sendMail','\x20with\x20further\x20instructions.','__esModule','defineProperty','async','crypto','nodemailer','../models/User','express-validator','getLogin','redirect','render','account/login','email','Email\x20is\x20not\x20valid','assert','password','notEmpty','normalizeEmail','validationErrors','flash','errors','/login','default','authenticate','local','message','logIn','success','session','logout','getSignup','user','account/signup','Create\x20Account','len','confirmPassword','Passwords\x20do\x20not\x20match','equals','body','/signup','findOne','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','account/profile','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','isEmail','sanitize','/account','findById','profile','name','gender','location','website','save','postUpdatePassword'];(function(_0x146ae3,_0x3482e2){var _0xcf6ec3=function(_0x2172c5){while(--_0x2172c5){_0x146ae3['push'](_0x146ae3['shift']());}};_0xcf6ec3(++_0x3482e2);}(a5_0xedc5,0x1cc));var a5_0x5aa3=function(_0x15c568,_0x5cfa5e){_0x15c568=_0x15c568-0x0;var _0xf53364=a5_0xedc5[_0x15c568];return _0xf53364;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x18133b){return _0x18133b&&_0x18133b[a5_0x5aa3('0x0')]?_0x18133b:{'default':_0x18133b};};Object[a5_0x5aa3('0x1')](exports,'__esModule',{'value':!![]});const async_1=__importDefault(require(a5_0x5aa3('0x2')));const crypto_1=__importDefault(require(a5_0x5aa3('0x3')));const nodemailer_1=__importDefault(require(a5_0x5aa3('0x4')));const passport_1=__importDefault(require('passport'));const User_1=__importDefault(require(a5_0x5aa3('0x5')));const request=require(a5_0x5aa3('0x6'));exports[a5_0x5aa3('0x7')]=(_0x556ccb,_0x4c3d0e)=>{if(_0x556ccb['user']){return _0x4c3d0e[a5_0x5aa3('0x8')]('/');}_0x4c3d0e[a5_0x5aa3('0x9')](a5_0x5aa3('0xa'),{'title':'Login'});};exports['postLogin']=(_0x8384b0,_0x340f2c,_0x4d8f6a)=>{_0x8384b0['assert'](a5_0x5aa3('0xb'),a5_0x5aa3('0xc'))['isEmail']();_0x8384b0[a5_0x5aa3('0xd')](a5_0x5aa3('0xe'),'Password\x20cannot\x20be\x20blank')[a5_0x5aa3('0xf')]();_0x8384b0['sanitize'](a5_0x5aa3('0xb'))[a5_0x5aa3('0x10')]({'gmail_remove_dots':![]});const _0x124143=_0x8384b0[a5_0x5aa3('0x11')]();if(_0x124143){_0x8384b0[a5_0x5aa3('0x12')](a5_0x5aa3('0x13'),_0x124143);return _0x340f2c[a5_0x5aa3('0x8')](a5_0x5aa3('0x14'));}passport_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x16')](a5_0x5aa3('0x17'),(_0x39e612,_0x5b4add,_0x1b922b)=>{if(_0x39e612){return _0x4d8f6a(_0x39e612);}if(!_0x5b4add){_0x8384b0['flash'](a5_0x5aa3('0x13'),_0x1b922b[a5_0x5aa3('0x18')]);return _0x340f2c['redirect'](a5_0x5aa3('0x14'));}_0x8384b0[a5_0x5aa3('0x19')](_0x5b4add,_0x39e612=>{if(_0x39e612){return _0x4d8f6a(_0x39e612);}_0x8384b0[a5_0x5aa3('0x12')](a5_0x5aa3('0x1a'),{'msg':'Success!\x20You\x20are\x20logged\x20in.'});_0x340f2c[a5_0x5aa3('0x8')](_0x8384b0[a5_0x5aa3('0x1b')]['returnTo']||'/');});})(_0x8384b0,_0x340f2c,_0x4d8f6a);};exports[a5_0x5aa3('0x1c')]=(_0x5cd1aa,_0x3b8241)=>{_0x5cd1aa[a5_0x5aa3('0x1c')]();_0x3b8241[a5_0x5aa3('0x8')]('/');};exports[a5_0x5aa3('0x1d')]=(_0x59dcb7,_0x396c36)=>{if(_0x59dcb7[a5_0x5aa3('0x1e')]){return _0x396c36[a5_0x5aa3('0x8')]('/');}_0x396c36[a5_0x5aa3('0x9')](a5_0x5aa3('0x1f'),{'title':a5_0x5aa3('0x20')});};exports['postSignup']=(_0x2492f4,_0x2f6d70,_0x694978)=>{_0x2492f4[a5_0x5aa3('0xd')](a5_0x5aa3('0xb'),a5_0x5aa3('0xc'))['isEmail']();_0x2492f4[a5_0x5aa3('0xd')](a5_0x5aa3('0xe'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long')[a5_0x5aa3('0x21')]({'min':0x4});_0x2492f4[a5_0x5aa3('0xd')](a5_0x5aa3('0x22'),a5_0x5aa3('0x23'))[a5_0x5aa3('0x24')](_0x2492f4[a5_0x5aa3('0x25')][a5_0x5aa3('0xe')]);_0x2492f4['sanitize'](a5_0x5aa3('0xb'))[a5_0x5aa3('0x10')]({'gmail_remove_dots':![]});const _0x1b6be3=_0x2492f4['validationErrors']();if(_0x1b6be3){_0x2492f4[a5_0x5aa3('0x12')](a5_0x5aa3('0x13'),_0x1b6be3);return _0x2f6d70[a5_0x5aa3('0x8')](a5_0x5aa3('0x26'));}const _0x1f7b62=new User_1[(a5_0x5aa3('0x15'))]({});User_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x27')]({'email':_0x2492f4['body'][a5_0x5aa3('0xb')]},(_0x469af6,_0x3e254b)=>{if(_0x469af6){return _0x694978(_0x469af6);}if(_0x3e254b){_0x2492f4[a5_0x5aa3('0x12')]('errors',{'msg':a5_0x5aa3('0x28')});return _0x2f6d70[a5_0x5aa3('0x8')](a5_0x5aa3('0x26'));}_0x1f7b62['save'](_0x469af6=>{if(_0x469af6){return _0x694978(_0x469af6);}_0x2492f4[a5_0x5aa3('0x19')](_0x1f7b62,_0x469af6=>{if(_0x469af6){return _0x694978(_0x469af6);}_0x2f6d70[a5_0x5aa3('0x8')]('/');});});});};exports['getAccount']=(_0x5b8da1,_0x4dcf73)=>{_0x4dcf73[a5_0x5aa3('0x9')](a5_0x5aa3('0x29'),{'title':'Account\x20Management'});};exports[a5_0x5aa3('0x2a')]=(_0x2bb03f,_0x30d338,_0x2c5a99)=>{_0x2bb03f['assert']('email',a5_0x5aa3('0x2b'))[a5_0x5aa3('0x2c')]();_0x2bb03f[a5_0x5aa3('0x2d')](a5_0x5aa3('0xb'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x44ef84=_0x2bb03f[a5_0x5aa3('0x11')]();if(_0x44ef84){_0x2bb03f[a5_0x5aa3('0x12')](a5_0x5aa3('0x13'),_0x44ef84);return _0x30d338[a5_0x5aa3('0x8')](a5_0x5aa3('0x2e'));}User_1['default'][a5_0x5aa3('0x2f')](_0x2bb03f[a5_0x5aa3('0x1e')]['id'],(_0x523784,_0x2ed13e)=>{if(_0x523784){return _0x2c5a99(_0x523784);}_0x2ed13e[a5_0x5aa3('0xb')]=_0x2bb03f[a5_0x5aa3('0x25')]['email']||'';_0x2ed13e[a5_0x5aa3('0x30')][a5_0x5aa3('0x31')]=_0x2bb03f['body']['name']||'';_0x2ed13e[a5_0x5aa3('0x30')]['gender']=_0x2bb03f[a5_0x5aa3('0x25')][a5_0x5aa3('0x32')]||'';_0x2ed13e['profile'][a5_0x5aa3('0x33')]=_0x2bb03f['body'][a5_0x5aa3('0x33')]||'';_0x2ed13e['profile'][a5_0x5aa3('0x34')]=_0x2bb03f['body']['website']||'';_0x2ed13e[a5_0x5aa3('0x35')](_0x523784=>{if(_0x523784){if(_0x523784['code']===0x2af8){_0x2bb03f[a5_0x5aa3('0x12')](a5_0x5aa3('0x13'),{'msg':'The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.'});return _0x30d338[a5_0x5aa3('0x8')](a5_0x5aa3('0x2e'));}return _0x2c5a99(_0x523784);}_0x2bb03f[a5_0x5aa3('0x12')](a5_0x5aa3('0x1a'),{'msg':'Profile\x20information\x20has\x20been\x20updated.'});_0x30d338[a5_0x5aa3('0x8')](a5_0x5aa3('0x2e'));});});};exports[a5_0x5aa3('0x36')]=(_0x474fbd,_0x2d93d5,_0x345a60)=>{_0x474fbd[a5_0x5aa3('0xd')](a5_0x5aa3('0xe'),a5_0x5aa3('0x37'))[a5_0x5aa3('0x21')]({'min':0x4});_0x474fbd['assert'](a5_0x5aa3('0x22'),a5_0x5aa3('0x23'))[a5_0x5aa3('0x24')](_0x474fbd[a5_0x5aa3('0x25')][a5_0x5aa3('0xe')]);const _0x1e06aa=_0x474fbd[a5_0x5aa3('0x11')]();if(_0x1e06aa){_0x474fbd[a5_0x5aa3('0x12')]('errors',_0x1e06aa);return _0x2d93d5['redirect'](a5_0x5aa3('0x2e'));}User_1['default'][a5_0x5aa3('0x2f')](_0x474fbd[a5_0x5aa3('0x1e')]['id'],(_0x216df6,_0x1660a1)=>{if(_0x216df6){return _0x345a60(_0x216df6);}_0x1660a1['password']=_0x474fbd[a5_0x5aa3('0x25')][a5_0x5aa3('0xe')];_0x1660a1['save'](_0x216df6=>{if(_0x216df6){return _0x345a60(_0x216df6);}_0x474fbd[a5_0x5aa3('0x12')](a5_0x5aa3('0x1a'),{'msg':a5_0x5aa3('0x38')});_0x2d93d5[a5_0x5aa3('0x8')](a5_0x5aa3('0x2e'));});});};exports[a5_0x5aa3('0x39')]=(_0x587c19,_0xbca7cd,_0x234178)=>{User_1['default']['remove']({'_id':_0x587c19[a5_0x5aa3('0x1e')]['id']},_0x6396b5=>{if(_0x6396b5){return _0x234178(_0x6396b5);}_0x587c19[a5_0x5aa3('0x1c')]();_0x587c19[a5_0x5aa3('0x12')](a5_0x5aa3('0x3a'),{'msg':'Your\x20account\x20has\x20been\x20deleted.'});_0xbca7cd[a5_0x5aa3('0x8')]('/');});};exports[a5_0x5aa3('0x3b')]=(_0x424f65,_0x25413d,_0x460a7e)=>{const _0x44865b=_0x424f65[a5_0x5aa3('0x3c')][a5_0x5aa3('0x3d')];User_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x2f')](_0x424f65['user']['id'],(_0x31d09,_0x71880c)=>{if(_0x31d09){return _0x460a7e(_0x31d09);}_0x71880c[_0x44865b]=undefined;_0x71880c['tokens']=_0x71880c[a5_0x5aa3('0x3e')][a5_0x5aa3('0x3f')](_0x3c6e79=>_0x3c6e79[a5_0x5aa3('0x40')]!==_0x44865b);_0x71880c[a5_0x5aa3('0x35')](_0x31d09=>{if(_0x31d09){return _0x460a7e(_0x31d09);}_0x424f65[a5_0x5aa3('0x12')](a5_0x5aa3('0x3a'),{'msg':_0x44865b+a5_0x5aa3('0x41')});_0x25413d[a5_0x5aa3('0x8')]('/account');});});};exports[a5_0x5aa3('0x42')]=(_0x303280,_0x262898,_0x2ae0d8)=>{if(_0x303280[a5_0x5aa3('0x43')]()){return _0x262898[a5_0x5aa3('0x8')]('/');}User_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x27')]({'passwordResetToken':_0x303280[a5_0x5aa3('0x3c')]['token']})[a5_0x5aa3('0x44')](a5_0x5aa3('0x45'))['gt'](Date[a5_0x5aa3('0x46')]())['exec']((_0x46942a,_0x42a9f8)=>{if(_0x46942a){return _0x2ae0d8(_0x46942a);}if(!_0x42a9f8){_0x303280['flash'](a5_0x5aa3('0x13'),{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0x262898[a5_0x5aa3('0x8')](a5_0x5aa3('0x47'));}_0x262898['render'](a5_0x5aa3('0x48'),{'title':a5_0x5aa3('0x49')});});};exports[a5_0x5aa3('0x4a')]=(_0x3ddeb5,_0xbf328d,_0x1fb5da)=>{_0x3ddeb5['assert'](a5_0x5aa3('0xe'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.')[a5_0x5aa3('0x21')]({'min':0x4});_0x3ddeb5[a5_0x5aa3('0xd')](a5_0x5aa3('0x4b'),'Passwords\x20must\x20match.')['equals'](_0x3ddeb5[a5_0x5aa3('0x25')][a5_0x5aa3('0xe')]);const _0x56ad15=_0x3ddeb5['validationErrors']();if(_0x56ad15){_0x3ddeb5[a5_0x5aa3('0x12')](a5_0x5aa3('0x13'),_0x56ad15);return _0xbf328d[a5_0x5aa3('0x8')](a5_0x5aa3('0x4c'));}async_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x4d')]([function resetPassword(_0x5b4c3c){User_1['default'][a5_0x5aa3('0x27')]({'passwordResetToken':_0x3ddeb5[a5_0x5aa3('0x3c')]['token']})[a5_0x5aa3('0x44')](a5_0x5aa3('0x45'))['gt'](Date[a5_0x5aa3('0x46')]())[a5_0x5aa3('0x4e')]((_0x529f64,_0x4d719c)=>{if(_0x529f64){return _0x1fb5da(_0x529f64);}if(!_0x4d719c){_0x3ddeb5[a5_0x5aa3('0x12')](a5_0x5aa3('0x13'),{'msg':a5_0x5aa3('0x4f')});return _0xbf328d[a5_0x5aa3('0x8')](a5_0x5aa3('0x4c'));}_0x4d719c[a5_0x5aa3('0xe')]=_0x3ddeb5['body'][a5_0x5aa3('0xe')];_0x4d719c[a5_0x5aa3('0x50')]=undefined;_0x4d719c[a5_0x5aa3('0x45')]=undefined;_0x4d719c[a5_0x5aa3('0x35')](_0x529f64=>{if(_0x529f64){return _0x1fb5da(_0x529f64);}_0x3ddeb5[a5_0x5aa3('0x19')](_0x4d719c,_0x529f64=>{_0x5b4c3c(_0x529f64,_0x4d719c);});});});},function sendResetPasswordEmail(_0x55852d,_0x518120){const _0x1b596d=nodemailer_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x51')]({'service':a5_0x5aa3('0x52'),'auth':{'user':process[a5_0x5aa3('0x53')]['SENDGRID_USER'],'pass':process[a5_0x5aa3('0x53')][a5_0x5aa3('0x54')]}});const _0x356442={'to':_0x55852d['email'],'from':a5_0x5aa3('0x55'),'subject':a5_0x5aa3('0x56'),'text':'Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20'+_0x55852d['email']+a5_0x5aa3('0x57')};_0x1b596d['sendMail'](_0x356442,_0x5c18f1=>{_0x3ddeb5[a5_0x5aa3('0x12')]('success',{'msg':a5_0x5aa3('0x58')});_0x518120(_0x5c18f1);});}],_0x6d5da=>{if(_0x6d5da){return _0x1fb5da(_0x6d5da);}_0xbf328d[a5_0x5aa3('0x8')]('/');});};exports[a5_0x5aa3('0x59')]=(_0x4930f7,_0x4378f7)=>{if(_0x4930f7[a5_0x5aa3('0x43')]()){return _0x4378f7[a5_0x5aa3('0x8')]('/');}_0x4378f7[a5_0x5aa3('0x9')](a5_0x5aa3('0x5a'),{'title':a5_0x5aa3('0x5b')});};exports[a5_0x5aa3('0x5c')]=(_0x479b52,_0x284df9,_0x5f126e)=>{_0x479b52[a5_0x5aa3('0xd')]('email','Please\x20enter\x20a\x20valid\x20email\x20address.')[a5_0x5aa3('0x2c')]();_0x479b52[a5_0x5aa3('0x2d')](a5_0x5aa3('0xb'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x284f41=_0x479b52[a5_0x5aa3('0x11')]();if(_0x284f41){_0x479b52[a5_0x5aa3('0x12')](a5_0x5aa3('0x13'),_0x284f41);return _0x284df9[a5_0x5aa3('0x8')](a5_0x5aa3('0x47'));}async_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x4d')]([function createRandomToken(_0x1d7e1e){crypto_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x5d')](0x10,(_0x4c377f,_0x1afaa2)=>{const _0x9ea21f=_0x1afaa2['toString'](a5_0x5aa3('0x5e'));_0x1d7e1e(_0x4c377f,_0x9ea21f);});},function setRandomToken(_0x51399c,_0x2acfc1){User_1['default'][a5_0x5aa3('0x27')]({'email':_0x479b52[a5_0x5aa3('0x25')][a5_0x5aa3('0xb')]},(_0xae996e,_0x33b124)=>{if(_0xae996e){return _0x2acfc1(_0xae996e);}if(!_0x33b124){_0x479b52[a5_0x5aa3('0x12')](a5_0x5aa3('0x13'),{'msg':a5_0x5aa3('0x5f')});return _0x284df9[a5_0x5aa3('0x8')](a5_0x5aa3('0x47'));}_0x33b124[a5_0x5aa3('0x50')]=_0x51399c;_0x33b124[a5_0x5aa3('0x45')]=Date[a5_0x5aa3('0x46')]()+0x36ee80;_0x33b124['save'](_0xae996e=>{_0x2acfc1(_0xae996e,_0x51399c,_0x33b124);});});},function sendForgotPasswordEmail(_0x917c53,_0x441166,_0x1e90ae){const _0x48f52d=nodemailer_1[a5_0x5aa3('0x15')][a5_0x5aa3('0x51')]({'service':'SendGrid','auth':{'user':process['env']['SENDGRID_USER'],'pass':process[a5_0x5aa3('0x53')]['SENDGRID_PASSWORD']}});const _0x4e4456={'to':_0x441166['email'],'from':a5_0x5aa3('0x60'),'subject':a5_0x5aa3('0x61'),'text':a5_0x5aa3('0x62')+_0x479b52[a5_0x5aa3('0x63')]['host']+'/reset/'+_0x917c53+a5_0x5aa3('0x64')};_0x48f52d[a5_0x5aa3('0x65')](_0x4e4456,_0x3c6050=>{_0x479b52[a5_0x5aa3('0x12')](a5_0x5aa3('0x3a'),{'msg':'An\x20e-mail\x20has\x20been\x20sent\x20to\x20'+_0x441166[a5_0x5aa3('0xb')]+a5_0x5aa3('0x66')});_0x1e90ae(_0x3c6050);});}],_0x20b04b=>{if(_0x20b04b){return _0x5f126e(_0x20b04b);}_0x284df9[a5_0x5aa3('0x8')](a5_0x5aa3('0x47'));});};