var a5_0x5136=['Please\x20enter\x20a\x20valid\x20email\x20address.','findById','name','profile','gender','location','website','code','/account','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','Password\x20has\x20been\x20changed.','info','Your\x20account\x20has\x20been\x20deleted.','provider','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','params','token','passwordResetExpires','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','Password\x20Reset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','confirm','Passwords\x20must\x20match.','waterfall','where','now','back','passwordResetToken','createTransport','SendGrid','env','SENDGRID_USER','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','sendMail','getForgot','account/forgot','Forgot\x20Password','postForgot','randomBytes','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','/forgot','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','/reset/','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','__importDefault','__esModule','defineProperty','async','crypto','passport','../models/User','express-validator','getLogin','user','redirect','render','account/login','Login','postLogin','email','Email\x20is\x20not\x20valid','isEmail','assert','password','Password\x20cannot\x20be\x20blank','sanitize','normalizeEmail','validationErrors','flash','errors','/login','default','message','logIn','success','session','logout','getSignup','account/signup','postSignup','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','equals','body','/signup','findOne','save','account/profile','Account\x20Management'];(function(_0xa0a108,_0x3a6e72){var _0x3527d9=function(_0x4acba9){while(--_0x4acba9){_0xa0a108['push'](_0xa0a108['shift']());}};_0x3527d9(++_0x3a6e72);}(a5_0x5136,0x112));var a5_0x5aa7=function(_0x5462fd,_0x190c72){_0x5462fd=_0x5462fd-0x0;var _0x4469e0=a5_0x5136[_0x5462fd];return _0x4469e0;};'use strict';var __importDefault=this&&this[a5_0x5aa7('0x0')]||function(_0x59dc11){return _0x59dc11&&_0x59dc11[a5_0x5aa7('0x1')]?_0x59dc11:{'default':_0x59dc11};};Object[a5_0x5aa7('0x2')](exports,'__esModule',{'value':!![]});const async_1=__importDefault(require(a5_0x5aa7('0x3')));const crypto_1=__importDefault(require(a5_0x5aa7('0x4')));const nodemailer_1=__importDefault(require('nodemailer'));const passport_1=__importDefault(require(a5_0x5aa7('0x5')));const User_1=__importDefault(require(a5_0x5aa7('0x6')));const request=require(a5_0x5aa7('0x7'));exports[a5_0x5aa7('0x8')]=(_0x3a8079,_0x113a26)=>{if(_0x3a8079[a5_0x5aa7('0x9')]){return _0x113a26[a5_0x5aa7('0xa')]('/');}_0x113a26[a5_0x5aa7('0xb')](a5_0x5aa7('0xc'),{'title':a5_0x5aa7('0xd')});};exports[a5_0x5aa7('0xe')]=(_0x14a5c0,_0x15fd2e,_0x3adc1c)=>{_0x14a5c0['assert'](a5_0x5aa7('0xf'),a5_0x5aa7('0x10'))[a5_0x5aa7('0x11')]();_0x14a5c0[a5_0x5aa7('0x12')](a5_0x5aa7('0x13'),a5_0x5aa7('0x14'))['notEmpty']();_0x14a5c0[a5_0x5aa7('0x15')]('email')[a5_0x5aa7('0x16')]({'gmail_remove_dots':![]});const _0x54069b=_0x14a5c0[a5_0x5aa7('0x17')]();if(_0x54069b){_0x14a5c0[a5_0x5aa7('0x18')](a5_0x5aa7('0x19'),_0x54069b);return _0x15fd2e[a5_0x5aa7('0xa')](a5_0x5aa7('0x1a'));}passport_1[a5_0x5aa7('0x1b')]['authenticate']('local',(_0x57adf5,_0x4542c7,_0x5b0840)=>{if(_0x57adf5){return _0x3adc1c(_0x57adf5);}if(!_0x4542c7){_0x14a5c0['flash'](a5_0x5aa7('0x19'),_0x5b0840[a5_0x5aa7('0x1c')]);return _0x15fd2e[a5_0x5aa7('0xa')](a5_0x5aa7('0x1a'));}_0x14a5c0[a5_0x5aa7('0x1d')](_0x4542c7,_0x57adf5=>{if(_0x57adf5){return _0x3adc1c(_0x57adf5);}_0x14a5c0[a5_0x5aa7('0x18')](a5_0x5aa7('0x1e'),{'msg':'Success!\x20You\x20are\x20logged\x20in.'});_0x15fd2e[a5_0x5aa7('0xa')](_0x14a5c0[a5_0x5aa7('0x1f')]['returnTo']||'/');});})(_0x14a5c0,_0x15fd2e,_0x3adc1c);};exports[a5_0x5aa7('0x20')]=(_0x50cac0,_0x219a23)=>{_0x50cac0[a5_0x5aa7('0x20')]();_0x219a23[a5_0x5aa7('0xa')]('/');};exports[a5_0x5aa7('0x21')]=(_0x83e0d5,_0x371e91)=>{if(_0x83e0d5[a5_0x5aa7('0x9')]){return _0x371e91[a5_0x5aa7('0xa')]('/');}_0x371e91['render'](a5_0x5aa7('0x22'),{'title':'Create\x20Account'});};exports[a5_0x5aa7('0x23')]=(_0x1d49e7,_0xc020fc,_0x169586)=>{_0x1d49e7[a5_0x5aa7('0x12')](a5_0x5aa7('0xf'),a5_0x5aa7('0x10'))[a5_0x5aa7('0x11')]();_0x1d49e7[a5_0x5aa7('0x12')](a5_0x5aa7('0x13'),a5_0x5aa7('0x24'))[a5_0x5aa7('0x25')]({'min':0x4});_0x1d49e7[a5_0x5aa7('0x12')](a5_0x5aa7('0x26'),a5_0x5aa7('0x27'))[a5_0x5aa7('0x28')](_0x1d49e7[a5_0x5aa7('0x29')][a5_0x5aa7('0x13')]);_0x1d49e7['sanitize'](a5_0x5aa7('0xf'))[a5_0x5aa7('0x16')]({'gmail_remove_dots':![]});const _0x30c0c7=_0x1d49e7[a5_0x5aa7('0x17')]();if(_0x30c0c7){_0x1d49e7[a5_0x5aa7('0x18')]('errors',_0x30c0c7);return _0xc020fc['redirect'](a5_0x5aa7('0x2a'));}const _0xca15d2=new User_1[(a5_0x5aa7('0x1b'))]({'email':_0x1d49e7['body'][a5_0x5aa7('0xf')],'password':_0x1d49e7[a5_0x5aa7('0x29')][a5_0x5aa7('0x13')]});User_1[a5_0x5aa7('0x1b')][a5_0x5aa7('0x2b')]({'email':_0x1d49e7['body'][a5_0x5aa7('0xf')]},(_0x5dfe5d,_0xecc951)=>{if(_0x5dfe5d){return _0x169586(_0x5dfe5d);}if(_0xecc951){_0x1d49e7['flash'](a5_0x5aa7('0x19'),{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0xc020fc[a5_0x5aa7('0xa')](a5_0x5aa7('0x2a'));}_0xca15d2[a5_0x5aa7('0x2c')](_0x5dfe5d=>{if(_0x5dfe5d){return _0x169586(_0x5dfe5d);}_0x1d49e7[a5_0x5aa7('0x1d')](_0xca15d2,_0x5dfe5d=>{if(_0x5dfe5d){return _0x169586(_0x5dfe5d);}_0xc020fc[a5_0x5aa7('0xa')]('/');});});});};exports['getAccount']=(_0x3fafdc,_0x5b356e)=>{_0x5b356e[a5_0x5aa7('0xb')](a5_0x5aa7('0x2d'),{'title':a5_0x5aa7('0x2e')});};exports['postUpdateProfile']=(_0x3258df,_0x4ce3cf,_0x14b4d3)=>{_0x3258df['assert']('email',a5_0x5aa7('0x2f'))['isEmail']();_0x3258df[a5_0x5aa7('0x15')](a5_0x5aa7('0xf'))[a5_0x5aa7('0x16')]({'gmail_remove_dots':![]});const _0x51e22a=_0x3258df[a5_0x5aa7('0x17')]();if(_0x51e22a){_0x3258df[a5_0x5aa7('0x18')](a5_0x5aa7('0x19'),_0x51e22a);return _0x4ce3cf[a5_0x5aa7('0xa')]('/account');}User_1['default'][a5_0x5aa7('0x30')](_0x3258df[a5_0x5aa7('0x9')]['id'],(_0x7c63e0,_0x307e83)=>{if(_0x7c63e0){return _0x14b4d3(_0x7c63e0);}_0x307e83[a5_0x5aa7('0xf')]=_0x3258df['body'][a5_0x5aa7('0xf')]||'';_0x307e83['profile']['name']=_0x3258df['body'][a5_0x5aa7('0x31')]||'';_0x307e83[a5_0x5aa7('0x32')]['gender']=_0x3258df[a5_0x5aa7('0x29')][a5_0x5aa7('0x33')]||'';_0x307e83[a5_0x5aa7('0x32')][a5_0x5aa7('0x34')]=_0x3258df[a5_0x5aa7('0x29')][a5_0x5aa7('0x34')]||'';_0x307e83[a5_0x5aa7('0x32')][a5_0x5aa7('0x35')]=_0x3258df[a5_0x5aa7('0x29')][a5_0x5aa7('0x35')]||'';_0x307e83[a5_0x5aa7('0x2c')](_0x7c63e0=>{if(_0x7c63e0){if(_0x7c63e0[a5_0x5aa7('0x36')]===0x2af8){_0x3258df[a5_0x5aa7('0x18')](a5_0x5aa7('0x19'),{'msg':'The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.'});return _0x4ce3cf[a5_0x5aa7('0xa')](a5_0x5aa7('0x37'));}return _0x14b4d3(_0x7c63e0);}_0x3258df[a5_0x5aa7('0x18')](a5_0x5aa7('0x1e'),{'msg':a5_0x5aa7('0x38')});_0x4ce3cf[a5_0x5aa7('0xa')](a5_0x5aa7('0x37'));});});};exports[a5_0x5aa7('0x39')]=(_0x2ea3a4,_0x558c5d,_0xbf29e4)=>{_0x2ea3a4[a5_0x5aa7('0x12')](a5_0x5aa7('0x13'),a5_0x5aa7('0x24'))[a5_0x5aa7('0x25')]({'min':0x4});_0x2ea3a4[a5_0x5aa7('0x12')]('confirmPassword',a5_0x5aa7('0x27'))[a5_0x5aa7('0x28')](_0x2ea3a4[a5_0x5aa7('0x29')][a5_0x5aa7('0x13')]);const _0x25596e=_0x2ea3a4[a5_0x5aa7('0x17')]();if(_0x25596e){_0x2ea3a4[a5_0x5aa7('0x18')]('errors',_0x25596e);return _0x558c5d[a5_0x5aa7('0xa')]('/account');}User_1[a5_0x5aa7('0x1b')]['findById'](_0x2ea3a4[a5_0x5aa7('0x9')]['id'],(_0x262763,_0x16ccc2)=>{if(_0x262763){return _0xbf29e4(_0x262763);}_0x16ccc2['password']=_0x2ea3a4[a5_0x5aa7('0x29')][a5_0x5aa7('0x13')];_0x16ccc2[a5_0x5aa7('0x2c')](_0x262763=>{if(_0x262763){return _0xbf29e4(_0x262763);}_0x2ea3a4[a5_0x5aa7('0x18')](a5_0x5aa7('0x1e'),{'msg':a5_0x5aa7('0x3a')});_0x558c5d[a5_0x5aa7('0xa')]('/account');});});};exports['postDeleteAccount']=(_0x552e96,_0x63bf72,_0x564ae8)=>{User_1[a5_0x5aa7('0x1b')]['remove']({'_id':_0x552e96[a5_0x5aa7('0x9')]['id']},_0x112671=>{if(_0x112671){return _0x564ae8(_0x112671);}_0x552e96[a5_0x5aa7('0x20')]();_0x552e96['flash'](a5_0x5aa7('0x3b'),{'msg':a5_0x5aa7('0x3c')});_0x63bf72['redirect']('/');});};exports['getOauthUnlink']=(_0x562824,_0xa0936d,_0x1bfc0a)=>{const _0x124fba=_0x562824['params'][a5_0x5aa7('0x3d')];User_1[a5_0x5aa7('0x1b')][a5_0x5aa7('0x30')](_0x562824[a5_0x5aa7('0x9')]['id'],(_0x5d50b8,_0x4f5bd3)=>{if(_0x5d50b8){return _0x1bfc0a(_0x5d50b8);}_0x4f5bd3[_0x124fba]=undefined;_0x4f5bd3['tokens']=_0x4f5bd3[a5_0x5aa7('0x3e')][a5_0x5aa7('0x3f')](_0x2e28e6=>_0x2e28e6[a5_0x5aa7('0x40')]!==_0x124fba);_0x4f5bd3[a5_0x5aa7('0x2c')](_0x5d50b8=>{if(_0x5d50b8){return _0x1bfc0a(_0x5d50b8);}_0x562824[a5_0x5aa7('0x18')]('info',{'msg':_0x124fba+a5_0x5aa7('0x41')});_0xa0936d[a5_0x5aa7('0xa')](a5_0x5aa7('0x37'));});});};exports[a5_0x5aa7('0x42')]=(_0x23d54a,_0x18f9cd,_0x369b96)=>{if(_0x23d54a[a5_0x5aa7('0x43')]()){return _0x18f9cd['redirect']('/');}User_1[a5_0x5aa7('0x1b')]['findOne']({'passwordResetToken':_0x23d54a[a5_0x5aa7('0x44')][a5_0x5aa7('0x45')]})['where'](a5_0x5aa7('0x46'))['gt'](Date['now']())[a5_0x5aa7('0x47')]((_0x47d36c,_0x4c83ce)=>{if(_0x47d36c){return _0x369b96(_0x47d36c);}if(!_0x4c83ce){_0x23d54a[a5_0x5aa7('0x18')]('errors',{'msg':a5_0x5aa7('0x48')});return _0x18f9cd['redirect']('/forgot');}_0x18f9cd[a5_0x5aa7('0xb')]('account/reset',{'title':a5_0x5aa7('0x49')});});};exports['postReset']=(_0x122e30,_0x2ea315,_0x318c82)=>{_0x122e30[a5_0x5aa7('0x12')](a5_0x5aa7('0x13'),a5_0x5aa7('0x4a'))['len']({'min':0x4});_0x122e30['assert'](a5_0x5aa7('0x4b'),a5_0x5aa7('0x4c'))[a5_0x5aa7('0x28')](_0x122e30[a5_0x5aa7('0x29')][a5_0x5aa7('0x13')]);const _0x395aea=_0x122e30[a5_0x5aa7('0x17')]();if(_0x395aea){_0x122e30[a5_0x5aa7('0x18')]('errors',_0x395aea);return _0x2ea315[a5_0x5aa7('0xa')]('back');}async_1[a5_0x5aa7('0x1b')][a5_0x5aa7('0x4d')]([function resetPassword(_0xbaf4c2){User_1[a5_0x5aa7('0x1b')][a5_0x5aa7('0x2b')]({'passwordResetToken':_0x122e30[a5_0x5aa7('0x44')][a5_0x5aa7('0x45')]})[a5_0x5aa7('0x4e')](a5_0x5aa7('0x46'))['gt'](Date[a5_0x5aa7('0x4f')]())['exec']((_0x3c2652,_0x39e4d8)=>{if(_0x3c2652){return _0x318c82(_0x3c2652);}if(!_0x39e4d8){_0x122e30['flash'](a5_0x5aa7('0x19'),{'msg':a5_0x5aa7('0x48')});return _0x2ea315[a5_0x5aa7('0xa')](a5_0x5aa7('0x50'));}_0x39e4d8[a5_0x5aa7('0x13')]=_0x122e30[a5_0x5aa7('0x29')][a5_0x5aa7('0x13')];_0x39e4d8[a5_0x5aa7('0x51')]=undefined;_0x39e4d8[a5_0x5aa7('0x46')]=undefined;_0x39e4d8[a5_0x5aa7('0x2c')](_0x3c2652=>{if(_0x3c2652){return _0x318c82(_0x3c2652);}_0x122e30[a5_0x5aa7('0x1d')](_0x39e4d8,_0x3c2652=>{_0xbaf4c2(_0x3c2652,_0x39e4d8);});});});},function sendResetPasswordEmail(_0x1545e6,_0x323cf1){const _0x1c0305=nodemailer_1[a5_0x5aa7('0x1b')][a5_0x5aa7('0x52')]({'service':a5_0x5aa7('0x53'),'auth':{'user':process[a5_0x5aa7('0x54')][a5_0x5aa7('0x55')],'pass':process[a5_0x5aa7('0x54')][a5_0x5aa7('0x56')]}});const _0x3e850f={'to':_0x1545e6[a5_0x5aa7('0xf')],'from':a5_0x5aa7('0x57'),'subject':a5_0x5aa7('0x58'),'text':a5_0x5aa7('0x59')+_0x1545e6[a5_0x5aa7('0xf')]+a5_0x5aa7('0x5a')};_0x1c0305[a5_0x5aa7('0x5b')](_0x3e850f,_0x872b4d=>{_0x122e30[a5_0x5aa7('0x18')](a5_0x5aa7('0x1e'),{'msg':'Success!\x20Your\x20password\x20has\x20been\x20changed.'});_0x323cf1(_0x872b4d);});}],_0x1145dc=>{if(_0x1145dc){return _0x318c82(_0x1145dc);}_0x2ea315['redirect']('/');});};exports[a5_0x5aa7('0x5c')]=(_0x46b6ee,_0x5b3afe)=>{if(_0x46b6ee[a5_0x5aa7('0x43')]()){return _0x5b3afe[a5_0x5aa7('0xa')]('/');}_0x5b3afe[a5_0x5aa7('0xb')](a5_0x5aa7('0x5d'),{'title':a5_0x5aa7('0x5e')});};exports[a5_0x5aa7('0x5f')]=(_0x37dec2,_0x3abba7,_0x89f481)=>{_0x37dec2[a5_0x5aa7('0x12')]('email','Please\x20enter\x20a\x20valid\x20email\x20address.')[a5_0x5aa7('0x11')]();_0x37dec2[a5_0x5aa7('0x15')](a5_0x5aa7('0xf'))[a5_0x5aa7('0x16')]({'gmail_remove_dots':![]});const _0x5b66ee=_0x37dec2[a5_0x5aa7('0x17')]();if(_0x5b66ee){_0x37dec2['flash']('errors',_0x5b66ee);return _0x3abba7['redirect']('/forgot');}async_1['default'][a5_0x5aa7('0x4d')]([function createRandomToken(_0x59437b){crypto_1[a5_0x5aa7('0x1b')][a5_0x5aa7('0x60')](0x10,(_0x2175cd,_0x4180a8)=>{const _0x5907ce=_0x4180a8[a5_0x5aa7('0x61')](a5_0x5aa7('0x62'));_0x59437b(_0x2175cd,_0x5907ce);});},function setRandomToken(_0x4e3832,_0xcd7b74){User_1[a5_0x5aa7('0x1b')]['findOne']({'email':_0x37dec2[a5_0x5aa7('0x29')][a5_0x5aa7('0xf')]},(_0x3530a8,_0x358645)=>{if(_0x3530a8){return _0xcd7b74(_0x3530a8);}if(!_0x358645){_0x37dec2[a5_0x5aa7('0x18')]('errors',{'msg':a5_0x5aa7('0x63')});return _0x3abba7['redirect'](a5_0x5aa7('0x64'));}_0x358645[a5_0x5aa7('0x51')]=_0x4e3832;_0x358645['passwordResetExpires']=Date['now']()+0x36ee80;_0x358645[a5_0x5aa7('0x2c')](_0x3530a8=>{_0xcd7b74(_0x3530a8,_0x4e3832,_0x358645);});});},function sendForgotPasswordEmail(_0x35ca0e,_0x264653,_0x168f0d){const _0x151d5f=nodemailer_1[a5_0x5aa7('0x1b')]['createTransport']({'service':a5_0x5aa7('0x53'),'auth':{'user':process[a5_0x5aa7('0x54')]['SENDGRID_USER'],'pass':process['env'][a5_0x5aa7('0x56')]}});const _0x37258a={'to':_0x264653[a5_0x5aa7('0xf')],'from':'hackathon@starter.com','subject':a5_0x5aa7('0x65'),'text':a5_0x5aa7('0x66')+_0x37dec2[a5_0x5aa7('0x67')]['host']+a5_0x5aa7('0x68')+_0x35ca0e+a5_0x5aa7('0x69')};_0x151d5f[a5_0x5aa7('0x5b')](_0x37258a,_0x4daa92=>{_0x37dec2['flash'](a5_0x5aa7('0x3b'),{'msg':a5_0x5aa7('0x6a')+_0x264653[a5_0x5aa7('0xf')]+'\x20with\x20further\x20instructions.'});_0x168f0d(_0x4daa92);});}],_0xa1b49d=>{if(_0xa1b49d){return _0x89f481(_0xa1b49d);}_0x3abba7['redirect'](a5_0x5aa7('0x64'));});};