var a5_0x3f59=['Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','Success!\x20Your\x20password\x20has\x20been\x20changed.','isAuthenticated','account/forgot','postForgot','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','SENDGRID_PASSWORD','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','host','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','__esModule','crypto','nodemailer','passport','../models/User','express-validator','getLogin','user','redirect','account/login','postLogin','assert','email','Email\x20is\x20not\x20valid','isEmail','password','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','normalizeEmail','flash','/login','default','authenticate','logIn','success','Success!\x20You\x20are\x20logged\x20in.','logout','getSignup','render','account/signup','Create\x20Account','postSignup','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','confirmPassword','Passwords\x20do\x20not\x20match','body','errors','findOne','Account\x20with\x20that\x20email\x20address\x20already\x20exists.','/signup','save','account/profile','Account\x20Management','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','findById','profile','name','gender','location','website','code','Profile\x20information\x20has\x20been\x20updated.','len','equals','validationErrors','Password\x20has\x20been\x20changed.','/account','postDeleteAccount','remove','info','Your\x20account\x20has\x20been\x20deleted.','getOauthUnlink','params','provider','tokens','filter','kind','getReset','token','where','passwordResetExpires','now','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20Reset','confirm','Passwords\x20must\x20match.','back','waterfall','passwordResetToken','createTransport','SendGrid','env','SENDGRID_USER'];(function(_0x1d577e,_0x4c0af0){var _0x65e8b1=function(_0x3a6ec4){while(--_0x3a6ec4){_0x1d577e['push'](_0x1d577e['shift']());}};_0x65e8b1(++_0x4c0af0);}(a5_0x3f59,0x1b4));var a5_0x5c4f=function(_0x5bc3c6,_0x543f37){_0x5bc3c6=_0x5bc3c6-0x0;var _0x1c624c=a5_0x3f59[_0x5bc3c6];return _0x1c624c;};'use strict';var __importDefault=this&&this[a5_0x5c4f('0x0')]||function(_0x123dba){return _0x123dba&&_0x123dba['__esModule']?_0x123dba:{'default':_0x123dba};};Object['defineProperty'](exports,a5_0x5c4f('0x1'),{'value':!![]});const async_1=__importDefault(require('async'));const crypto_1=__importDefault(require(a5_0x5c4f('0x2')));const nodemailer_1=__importDefault(require(a5_0x5c4f('0x3')));const passport_1=__importDefault(require(a5_0x5c4f('0x4')));const User_1=__importDefault(require(a5_0x5c4f('0x5')));const request=require(a5_0x5c4f('0x6'));exports[a5_0x5c4f('0x7')]=(_0x4cfef9,_0x41225a)=>{if(_0x4cfef9[a5_0x5c4f('0x8')]){return _0x41225a[a5_0x5c4f('0x9')]('/');}_0x41225a['render'](a5_0x5c4f('0xa'),{'title':'Login'});};exports[a5_0x5c4f('0xb')]=(_0x4f131b,_0x581a57,_0x3a7ab4)=>{_0x4f131b[a5_0x5c4f('0xc')](a5_0x5c4f('0xd'),a5_0x5c4f('0xe'))[a5_0x5c4f('0xf')]();_0x4f131b['assert'](a5_0x5c4f('0x10'),a5_0x5c4f('0x11'))[a5_0x5c4f('0x12')]();_0x4f131b[a5_0x5c4f('0x13')](a5_0x5c4f('0xd'))[a5_0x5c4f('0x14')]({'gmail_remove_dots':![]});const _0x454037=_0x4f131b['validationErrors']();if(_0x454037){_0x4f131b[a5_0x5c4f('0x15')]('errors',_0x454037);return _0x581a57[a5_0x5c4f('0x9')](a5_0x5c4f('0x16'));}passport_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x18')]('local',(_0x16458d,_0x1ce4ac,_0x20c3ed)=>{if(_0x16458d){return _0x3a7ab4(_0x16458d);}if(!_0x1ce4ac){_0x4f131b[a5_0x5c4f('0x15')]('errors',_0x20c3ed['message']);return _0x581a57[a5_0x5c4f('0x9')](a5_0x5c4f('0x16'));}_0x4f131b[a5_0x5c4f('0x19')](_0x1ce4ac,_0x16458d=>{if(_0x16458d){return _0x3a7ab4(_0x16458d);}_0x4f131b[a5_0x5c4f('0x15')](a5_0x5c4f('0x1a'),{'msg':a5_0x5c4f('0x1b')});_0x581a57[a5_0x5c4f('0x9')](_0x4f131b['session']['returnTo']||'/');});})(_0x4f131b,_0x581a57,_0x3a7ab4);};exports[a5_0x5c4f('0x1c')]=(_0x534e4c,_0x23a271)=>{_0x534e4c[a5_0x5c4f('0x1c')]();_0x23a271[a5_0x5c4f('0x9')]('/');};exports[a5_0x5c4f('0x1d')]=(_0xe19eba,_0x582cc9)=>{if(_0xe19eba['user']){return _0x582cc9['redirect']('/');}_0x582cc9[a5_0x5c4f('0x1e')](a5_0x5c4f('0x1f'),{'title':a5_0x5c4f('0x20')});};exports[a5_0x5c4f('0x21')]=(_0x95866d,_0x1e0f1a,_0x226231)=>{_0x95866d[a5_0x5c4f('0xc')](a5_0x5c4f('0xd'),'Email\x20is\x20not\x20valid')[a5_0x5c4f('0xf')]();_0x95866d[a5_0x5c4f('0xc')](a5_0x5c4f('0x10'),a5_0x5c4f('0x22'))['len']({'min':0x4});_0x95866d[a5_0x5c4f('0xc')](a5_0x5c4f('0x23'),a5_0x5c4f('0x24'))['equals'](_0x95866d[a5_0x5c4f('0x25')]['password']);_0x95866d['sanitize'](a5_0x5c4f('0xd'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x504268=_0x95866d['validationErrors']();if(_0x504268){_0x95866d[a5_0x5c4f('0x15')](a5_0x5c4f('0x26'),_0x504268);return _0x1e0f1a[a5_0x5c4f('0x9')]('/signup');}const _0x2c8cc6=new User_1['default']({'email':_0x95866d['body'][a5_0x5c4f('0xd')],'password':_0x95866d[a5_0x5c4f('0x25')][a5_0x5c4f('0x10')]});User_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x27')]({'email':_0x95866d[a5_0x5c4f('0x25')][a5_0x5c4f('0xd')]},(_0x39b407,_0x55682c)=>{if(_0x39b407){return _0x226231(_0x39b407);}if(_0x55682c){_0x95866d[a5_0x5c4f('0x15')](a5_0x5c4f('0x26'),{'msg':a5_0x5c4f('0x28')});return _0x1e0f1a[a5_0x5c4f('0x9')](a5_0x5c4f('0x29'));}_0x2c8cc6[a5_0x5c4f('0x2a')](_0x39b407=>{if(_0x39b407){return _0x226231(_0x39b407);}_0x95866d['logIn'](_0x2c8cc6,_0x39b407=>{if(_0x39b407){return _0x226231(_0x39b407);}_0x1e0f1a[a5_0x5c4f('0x9')]('/');});});});};exports['getAccount']=(_0x396c94,_0x1004ac)=>{_0x1004ac['render'](a5_0x5c4f('0x2b'),{'title':a5_0x5c4f('0x2c')});};exports[a5_0x5c4f('0x2d')]=(_0x3c8222,_0x3e7338,_0x45118e)=>{_0x3c8222[a5_0x5c4f('0xc')](a5_0x5c4f('0xd'),a5_0x5c4f('0x2e'))[a5_0x5c4f('0xf')]();_0x3c8222[a5_0x5c4f('0x13')](a5_0x5c4f('0xd'))[a5_0x5c4f('0x14')]({'gmail_remove_dots':![]});const _0x450352=_0x3c8222['validationErrors']();if(_0x450352){_0x3c8222['flash']('errors',_0x450352);return _0x3e7338[a5_0x5c4f('0x9')]('/account');}User_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x2f')](_0x3c8222['user']['id'],(_0x477b40,_0x51a3d4)=>{if(_0x477b40){return _0x45118e(_0x477b40);}_0x51a3d4[a5_0x5c4f('0xd')]=_0x3c8222['body']['email']||'';_0x51a3d4[a5_0x5c4f('0x30')][a5_0x5c4f('0x31')]=_0x3c8222[a5_0x5c4f('0x25')]['name']||'';_0x51a3d4[a5_0x5c4f('0x30')][a5_0x5c4f('0x32')]=_0x3c8222[a5_0x5c4f('0x25')][a5_0x5c4f('0x32')]||'';_0x51a3d4['profile'][a5_0x5c4f('0x33')]=_0x3c8222[a5_0x5c4f('0x25')][a5_0x5c4f('0x33')]||'';_0x51a3d4[a5_0x5c4f('0x30')][a5_0x5c4f('0x34')]=_0x3c8222[a5_0x5c4f('0x25')][a5_0x5c4f('0x34')]||'';_0x51a3d4['save'](_0x477b40=>{if(_0x477b40){if(_0x477b40[a5_0x5c4f('0x35')]===0x2af8){_0x3c8222[a5_0x5c4f('0x15')](a5_0x5c4f('0x26'),{'msg':'The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.'});return _0x3e7338['redirect']('/account');}return _0x45118e(_0x477b40);}_0x3c8222[a5_0x5c4f('0x15')](a5_0x5c4f('0x1a'),{'msg':a5_0x5c4f('0x36')});_0x3e7338[a5_0x5c4f('0x9')]('/account');});});};exports['postUpdatePassword']=(_0x2df8a4,_0x383950,_0x5db617)=>{_0x2df8a4['assert'](a5_0x5c4f('0x10'),a5_0x5c4f('0x22'))[a5_0x5c4f('0x37')]({'min':0x4});_0x2df8a4[a5_0x5c4f('0xc')]('confirmPassword',a5_0x5c4f('0x24'))[a5_0x5c4f('0x38')](_0x2df8a4['body'][a5_0x5c4f('0x10')]);const _0x3dba0a=_0x2df8a4[a5_0x5c4f('0x39')]();if(_0x3dba0a){_0x2df8a4[a5_0x5c4f('0x15')]('errors',_0x3dba0a);return _0x383950[a5_0x5c4f('0x9')]('/account');}User_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x2f')](_0x2df8a4[a5_0x5c4f('0x8')]['id'],(_0x2ec7f8,_0xdfd8e4)=>{if(_0x2ec7f8){return _0x5db617(_0x2ec7f8);}_0xdfd8e4[a5_0x5c4f('0x10')]=_0x2df8a4[a5_0x5c4f('0x25')]['password'];_0xdfd8e4['save'](_0x2ec7f8=>{if(_0x2ec7f8){return _0x5db617(_0x2ec7f8);}_0x2df8a4[a5_0x5c4f('0x15')]('success',{'msg':a5_0x5c4f('0x3a')});_0x383950['redirect'](a5_0x5c4f('0x3b'));});});};exports[a5_0x5c4f('0x3c')]=(_0x3252a2,_0x423159,_0x3126ec)=>{User_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x3d')]({'_id':_0x3252a2[a5_0x5c4f('0x8')]['id']},_0x24d7df=>{if(_0x24d7df){return _0x3126ec(_0x24d7df);}_0x3252a2['logout']();_0x3252a2[a5_0x5c4f('0x15')](a5_0x5c4f('0x3e'),{'msg':a5_0x5c4f('0x3f')});_0x423159['redirect']('/');});};exports[a5_0x5c4f('0x40')]=(_0x205ddd,_0x43cc8c,_0x48000e)=>{const _0x22deb8=_0x205ddd[a5_0x5c4f('0x41')][a5_0x5c4f('0x42')];User_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x2f')](_0x205ddd[a5_0x5c4f('0x8')]['id'],(_0x25fb61,_0x2d75f3)=>{if(_0x25fb61){return _0x48000e(_0x25fb61);}_0x2d75f3[_0x22deb8]=undefined;_0x2d75f3[a5_0x5c4f('0x43')]=_0x2d75f3[a5_0x5c4f('0x43')][a5_0x5c4f('0x44')](_0x45acd2=>_0x45acd2[a5_0x5c4f('0x45')]!==_0x22deb8);_0x2d75f3[a5_0x5c4f('0x2a')](_0x25fb61=>{if(_0x25fb61){return _0x48000e(_0x25fb61);}_0x205ddd[a5_0x5c4f('0x15')]('info',{'msg':_0x22deb8+'\x20account\x20has\x20been\x20unlinked.'});_0x43cc8c[a5_0x5c4f('0x9')](a5_0x5c4f('0x3b'));});});};exports[a5_0x5c4f('0x46')]=(_0x4a3217,_0x3f7410,_0x54b3ff)=>{if(_0x4a3217['isAuthenticated']()){return _0x3f7410[a5_0x5c4f('0x9')]('/');}User_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x27')]({'passwordResetToken':_0x4a3217[a5_0x5c4f('0x41')][a5_0x5c4f('0x47')]})[a5_0x5c4f('0x48')](a5_0x5c4f('0x49'))['gt'](Date[a5_0x5c4f('0x4a')]())[a5_0x5c4f('0x4b')]((_0x7553af,_0x3118e4)=>{if(_0x7553af){return _0x54b3ff(_0x7553af);}if(!_0x3118e4){_0x4a3217[a5_0x5c4f('0x15')](a5_0x5c4f('0x26'),{'msg':a5_0x5c4f('0x4c')});return _0x3f7410[a5_0x5c4f('0x9')](a5_0x5c4f('0x4d'));}_0x3f7410[a5_0x5c4f('0x1e')](a5_0x5c4f('0x4e'),{'title':a5_0x5c4f('0x4f')});});};exports['postReset']=(_0x24de2f,_0x375e79,_0x434a20)=>{_0x24de2f[a5_0x5c4f('0xc')]('password','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.')[a5_0x5c4f('0x37')]({'min':0x4});_0x24de2f[a5_0x5c4f('0xc')](a5_0x5c4f('0x50'),a5_0x5c4f('0x51'))[a5_0x5c4f('0x38')](_0x24de2f[a5_0x5c4f('0x25')]['password']);const _0x342791=_0x24de2f['validationErrors']();if(_0x342791){_0x24de2f['flash'](a5_0x5c4f('0x26'),_0x342791);return _0x375e79['redirect'](a5_0x5c4f('0x52'));}async_1['default'][a5_0x5c4f('0x53')]([function resetPassword(_0x47b5c7){User_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x27')]({'passwordResetToken':_0x24de2f['params'][a5_0x5c4f('0x47')]})['where']('passwordResetExpires')['gt'](Date['now']())[a5_0x5c4f('0x4b')]((_0x17802c,_0x46e773)=>{if(_0x17802c){return _0x434a20(_0x17802c);}if(!_0x46e773){_0x24de2f[a5_0x5c4f('0x15')](a5_0x5c4f('0x26'),{'msg':a5_0x5c4f('0x4c')});return _0x375e79[a5_0x5c4f('0x9')]('back');}_0x46e773[a5_0x5c4f('0x10')]=_0x24de2f['body']['password'];_0x46e773[a5_0x5c4f('0x54')]=undefined;_0x46e773['passwordResetExpires']=undefined;_0x46e773['save'](_0x17802c=>{if(_0x17802c){return _0x434a20(_0x17802c);}_0x24de2f['logIn'](_0x46e773,_0x17802c=>{_0x47b5c7(_0x17802c,_0x46e773);});});});},function sendResetPasswordEmail(_0xb0e37,_0x1629d8){const _0x2708b2=nodemailer_1[a5_0x5c4f('0x17')][a5_0x5c4f('0x55')]({'service':a5_0x5c4f('0x56'),'auth':{'user':process[a5_0x5c4f('0x57')][a5_0x5c4f('0x58')],'pass':process[a5_0x5c4f('0x57')]['SENDGRID_PASSWORD']}});const _0x5eb901={'to':_0xb0e37[a5_0x5c4f('0xd')],'from':'express-ts@starter.com','subject':'Your\x20password\x20has\x20been\x20changed','text':a5_0x5c4f('0x59')+_0xb0e37[a5_0x5c4f('0xd')]+a5_0x5c4f('0x5a')};_0x2708b2[a5_0x5c4f('0x5b')](_0x5eb901,_0x5eb695=>{_0x24de2f[a5_0x5c4f('0x15')]('success',{'msg':a5_0x5c4f('0x5c')});_0x1629d8(_0x5eb695);});}],_0x34b6cc=>{if(_0x34b6cc){return _0x434a20(_0x34b6cc);}_0x375e79[a5_0x5c4f('0x9')]('/');});};exports['getForgot']=(_0x16d07d,_0x37a895)=>{if(_0x16d07d[a5_0x5c4f('0x5d')]()){return _0x37a895[a5_0x5c4f('0x9')]('/');}_0x37a895['render'](a5_0x5c4f('0x5e'),{'title':'Forgot\x20Password'});};exports[a5_0x5c4f('0x5f')]=(_0x3ebb39,_0x4f8653,_0x2e4916)=>{_0x3ebb39[a5_0x5c4f('0xc')](a5_0x5c4f('0xd'),a5_0x5c4f('0x2e'))['isEmail']();_0x3ebb39[a5_0x5c4f('0x13')](a5_0x5c4f('0xd'))[a5_0x5c4f('0x14')]({'gmail_remove_dots':![]});const _0x193137=_0x3ebb39[a5_0x5c4f('0x39')]();if(_0x193137){_0x3ebb39[a5_0x5c4f('0x15')]('errors',_0x193137);return _0x4f8653[a5_0x5c4f('0x9')](a5_0x5c4f('0x4d'));}async_1[a5_0x5c4f('0x17')]['waterfall']([function createRandomToken(_0x554542){crypto_1[a5_0x5c4f('0x17')]['randomBytes'](0x10,(_0x31bf96,_0x4e41af)=>{const _0x3a2b7e=_0x4e41af[a5_0x5c4f('0x60')](a5_0x5c4f('0x61'));_0x554542(_0x31bf96,_0x3a2b7e);});},function setRandomToken(_0x613568,_0x42cd7b){User_1['default'][a5_0x5c4f('0x27')]({'email':_0x3ebb39[a5_0x5c4f('0x25')][a5_0x5c4f('0xd')]},(_0x13608a,_0x3b5bbd)=>{if(_0x13608a){return _0x42cd7b(_0x13608a);}if(!_0x3b5bbd){_0x3ebb39[a5_0x5c4f('0x15')]('errors',{'msg':a5_0x5c4f('0x62')});return _0x4f8653[a5_0x5c4f('0x9')]('/forgot');}_0x3b5bbd['passwordResetToken']=_0x613568;_0x3b5bbd[a5_0x5c4f('0x49')]=Date[a5_0x5c4f('0x4a')]()+0x36ee80;_0x3b5bbd['save'](_0x13608a=>{_0x42cd7b(_0x13608a,_0x613568,_0x3b5bbd);});});},function sendForgotPasswordEmail(_0x8b70d2,_0x414dd0,_0xe8c52){const _0x294623=nodemailer_1[a5_0x5c4f('0x17')]['createTransport']({'service':a5_0x5c4f('0x56'),'auth':{'user':process[a5_0x5c4f('0x57')][a5_0x5c4f('0x58')],'pass':process[a5_0x5c4f('0x57')][a5_0x5c4f('0x63')]}});const _0x48cf52={'to':_0x414dd0[a5_0x5c4f('0xd')],'from':'hackathon@starter.com','subject':a5_0x5c4f('0x64'),'text':'You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://'+_0x3ebb39['headers'][a5_0x5c4f('0x65')]+'/reset/'+_0x8b70d2+a5_0x5c4f('0x66')};_0x294623[a5_0x5c4f('0x5b')](_0x48cf52,_0x33873d=>{_0x3ebb39[a5_0x5c4f('0x15')](a5_0x5c4f('0x3e'),{'msg':a5_0x5c4f('0x67')+_0x414dd0['email']+a5_0x5c4f('0x68')});_0xe8c52(_0x33873d);});}],_0x10a3c2=>{if(_0x10a3c2){return _0x2e4916(_0x10a3c2);}_0x4f8653[a5_0x5c4f('0x9')]('/forgot');});};