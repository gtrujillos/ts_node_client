var a5_0x86a6=['now','exec','Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','Password\x20Reset','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.','confirm','Passwords\x20must\x20match.','back','passwordResetToken','createTransport','SendGrid','env','SENDGRID_PASSWORD','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','getForgot','isAuthenticated','account/forgot','postForgot','Please\x20enter\x20a\x20valid\x20email\x20address.','/forgot','waterfall','randomBytes','toString','hex','Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.','SENDGRID_USER','hackathon@starter.com','Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','/reset/','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','sendMail','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','__esModule','defineProperty','async','crypto','nodemailer','../models/User','getLogin','user','redirect','account/login','Login','postLogin','assert','email','Email\x20is\x20not\x20valid','isEmail','password','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','flash','errors','/login','default','authenticate','message','logIn','success','Success!\x20You\x20are\x20logged\x20in.','returnTo','logout','getSignup','render','account/signup','Create\x20Account','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','confirmPassword','Passwords\x20do\x20not\x20match','equals','body','validationErrors','/signup','findOne','getAccount','account/profile','Account\x20Management','postUpdateProfile','normalizeEmail','findById','profile','name','gender','location','website','save','Profile\x20information\x20has\x20been\x20updated.','/account','postUpdatePassword','remove','info','Your\x20account\x20has\x20been\x20deleted.','params','provider','tokens','filter','kind','\x20account\x20has\x20been\x20unlinked.','token','where','passwordResetExpires'];(function(_0x1bb9af,_0xbec9e2){var _0x588f8e=function(_0x5c6eb3){while(--_0x5c6eb3){_0x1bb9af['push'](_0x1bb9af['shift']());}};_0x588f8e(++_0xbec9e2);}(a5_0x86a6,0x1d4));var a5_0x5364=function(_0x5985ee,_0x3aae72){_0x5985ee=_0x5985ee-0x0;var _0x3a45e4=a5_0x86a6[_0x5985ee];return _0x3a45e4;};'use strict';var __importDefault=this&&this[a5_0x5364('0x0')]||function(_0x14206b){return _0x14206b&&_0x14206b[a5_0x5364('0x1')]?_0x14206b:{'default':_0x14206b};};Object[a5_0x5364('0x2')](exports,'__esModule',{'value':!![]});const async_1=__importDefault(require(a5_0x5364('0x3')));const crypto_1=__importDefault(require(a5_0x5364('0x4')));const nodemailer_1=__importDefault(require(a5_0x5364('0x5')));const passport_1=__importDefault(require('passport'));const User_1=__importDefault(require(a5_0x5364('0x6')));const request=require('express-validator');exports[a5_0x5364('0x7')]=(_0x261d31,_0xaae015)=>{if(_0x261d31[a5_0x5364('0x8')]){return _0xaae015[a5_0x5364('0x9')]('/');}_0xaae015['render'](a5_0x5364('0xa'),{'title':a5_0x5364('0xb')});};exports[a5_0x5364('0xc')]=(_0x3ed1de,_0x45515d,_0x1cecd4)=>{_0x3ed1de[a5_0x5364('0xd')](a5_0x5364('0xe'),a5_0x5364('0xf'))[a5_0x5364('0x10')]();_0x3ed1de[a5_0x5364('0xd')](a5_0x5364('0x11'),a5_0x5364('0x12'))[a5_0x5364('0x13')]();_0x3ed1de[a5_0x5364('0x14')]('email')['normalizeEmail']({'gmail_remove_dots':![]});const _0x3c01cd=_0x3ed1de['validationErrors']();if(_0x3c01cd){_0x3ed1de[a5_0x5364('0x15')](a5_0x5364('0x16'),_0x3c01cd);return _0x45515d['redirect'](a5_0x5364('0x17'));}passport_1[a5_0x5364('0x18')][a5_0x5364('0x19')]('local',(_0x679da2,_0x42fab7,_0x330796)=>{if(_0x679da2){return _0x1cecd4(_0x679da2);}if(!_0x42fab7){_0x3ed1de[a5_0x5364('0x15')]('errors',_0x330796[a5_0x5364('0x1a')]);return _0x45515d['redirect'](a5_0x5364('0x17'));}_0x3ed1de[a5_0x5364('0x1b')](_0x42fab7,_0x679da2=>{if(_0x679da2){return _0x1cecd4(_0x679da2);}_0x3ed1de[a5_0x5364('0x15')](a5_0x5364('0x1c'),{'msg':a5_0x5364('0x1d')});_0x45515d[a5_0x5364('0x9')](_0x3ed1de['session'][a5_0x5364('0x1e')]||'/');});})(_0x3ed1de,_0x45515d,_0x1cecd4);};exports['logout']=(_0x1f36b6,_0x3046ae)=>{_0x1f36b6[a5_0x5364('0x1f')]();_0x3046ae[a5_0x5364('0x9')]('/');};exports[a5_0x5364('0x20')]=(_0x5dd616,_0x9d55f9)=>{if(_0x5dd616[a5_0x5364('0x8')]){return _0x9d55f9[a5_0x5364('0x9')]('/');}_0x9d55f9[a5_0x5364('0x21')](a5_0x5364('0x22'),{'title':a5_0x5364('0x23')});};exports['postSignup']=(_0x5dc5ae,_0x5181b2,_0x4e3d0a)=>{_0x5dc5ae['assert'](a5_0x5364('0xe'),a5_0x5364('0xf'))[a5_0x5364('0x10')]();_0x5dc5ae[a5_0x5364('0xd')](a5_0x5364('0x11'),a5_0x5364('0x24'))[a5_0x5364('0x25')]({'min':0x4});_0x5dc5ae[a5_0x5364('0xd')](a5_0x5364('0x26'),a5_0x5364('0x27'))[a5_0x5364('0x28')](_0x5dc5ae[a5_0x5364('0x29')][a5_0x5364('0x11')]);_0x5dc5ae[a5_0x5364('0x14')](a5_0x5364('0xe'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x3c096f=_0x5dc5ae[a5_0x5364('0x2a')]();if(_0x3c096f){_0x5dc5ae[a5_0x5364('0x15')](a5_0x5364('0x16'),_0x3c096f);return _0x5181b2[a5_0x5364('0x9')](a5_0x5364('0x2b'));}const _0x3aa46d=new User_1['default']({});User_1[a5_0x5364('0x18')][a5_0x5364('0x2c')]({'email':_0x5dc5ae[a5_0x5364('0x29')]['email']},(_0x58f42b,_0x2dafcd)=>{if(_0x58f42b){return _0x4e3d0a(_0x58f42b);}if(_0x2dafcd){_0x5dc5ae[a5_0x5364('0x15')]('errors',{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0x5181b2['redirect'](a5_0x5364('0x2b'));}_0x3aa46d['save'](_0x58f42b=>{if(_0x58f42b){return _0x4e3d0a(_0x58f42b);}_0x5dc5ae[a5_0x5364('0x1b')](_0x3aa46d,_0x58f42b=>{if(_0x58f42b){return _0x4e3d0a(_0x58f42b);}_0x5181b2[a5_0x5364('0x9')]('/');});});});};exports[a5_0x5364('0x2d')]=(_0x250852,_0x8df0cb)=>{_0x8df0cb[a5_0x5364('0x21')](a5_0x5364('0x2e'),{'title':a5_0x5364('0x2f')});};exports[a5_0x5364('0x30')]=(_0x5768a6,_0x4ca706,_0x56e79e)=>{_0x5768a6[a5_0x5364('0xd')](a5_0x5364('0xe'),'Please\x20enter\x20a\x20valid\x20email\x20address.')[a5_0x5364('0x10')]();_0x5768a6[a5_0x5364('0x14')]('email')[a5_0x5364('0x31')]({'gmail_remove_dots':![]});const _0x431b3a=_0x5768a6[a5_0x5364('0x2a')]();if(_0x431b3a){_0x5768a6['flash']('errors',_0x431b3a);return _0x4ca706[a5_0x5364('0x9')]('/account');}User_1[a5_0x5364('0x18')][a5_0x5364('0x32')](_0x5768a6[a5_0x5364('0x8')]['id'],(_0x196698,_0x3c69b4)=>{if(_0x196698){return _0x56e79e(_0x196698);}_0x3c69b4[a5_0x5364('0xe')]=_0x5768a6[a5_0x5364('0x29')][a5_0x5364('0xe')]||'';_0x3c69b4[a5_0x5364('0x33')][a5_0x5364('0x34')]=_0x5768a6[a5_0x5364('0x29')][a5_0x5364('0x34')]||'';_0x3c69b4[a5_0x5364('0x33')][a5_0x5364('0x35')]=_0x5768a6[a5_0x5364('0x29')][a5_0x5364('0x35')]||'';_0x3c69b4[a5_0x5364('0x33')][a5_0x5364('0x36')]=_0x5768a6['body']['location']||'';_0x3c69b4['profile'][a5_0x5364('0x37')]=_0x5768a6[a5_0x5364('0x29')][a5_0x5364('0x37')]||'';_0x3c69b4[a5_0x5364('0x38')](_0x196698=>{if(_0x196698){if(_0x196698['code']===0x2af8){_0x5768a6['flash'](a5_0x5364('0x16'),{'msg':'The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.'});return _0x4ca706[a5_0x5364('0x9')]('/account');}return _0x56e79e(_0x196698);}_0x5768a6['flash'](a5_0x5364('0x1c'),{'msg':a5_0x5364('0x39')});_0x4ca706[a5_0x5364('0x9')](a5_0x5364('0x3a'));});});};exports[a5_0x5364('0x3b')]=(_0x3a0e91,_0x20584a,_0x503989)=>{_0x3a0e91[a5_0x5364('0xd')](a5_0x5364('0x11'),a5_0x5364('0x24'))['len']({'min':0x4});_0x3a0e91[a5_0x5364('0xd')](a5_0x5364('0x26'),a5_0x5364('0x27'))['equals'](_0x3a0e91[a5_0x5364('0x29')][a5_0x5364('0x11')]);const _0x14c138=_0x3a0e91[a5_0x5364('0x2a')]();if(_0x14c138){_0x3a0e91[a5_0x5364('0x15')](a5_0x5364('0x16'),_0x14c138);return _0x20584a['redirect']('/account');}User_1[a5_0x5364('0x18')]['findById'](_0x3a0e91[a5_0x5364('0x8')]['id'],(_0x1aa8b5,_0x5151f8)=>{if(_0x1aa8b5){return _0x503989(_0x1aa8b5);}_0x5151f8['password']=_0x3a0e91[a5_0x5364('0x29')][a5_0x5364('0x11')];_0x5151f8[a5_0x5364('0x38')](_0x1aa8b5=>{if(_0x1aa8b5){return _0x503989(_0x1aa8b5);}_0x3a0e91['flash'](a5_0x5364('0x1c'),{'msg':'Password\x20has\x20been\x20changed.'});_0x20584a[a5_0x5364('0x9')](a5_0x5364('0x3a'));});});};exports['postDeleteAccount']=(_0x3b5f93,_0x10cbd6,_0x2836de)=>{User_1['default'][a5_0x5364('0x3c')]({'_id':_0x3b5f93[a5_0x5364('0x8')]['id']},_0x35683e=>{if(_0x35683e){return _0x2836de(_0x35683e);}_0x3b5f93['logout']();_0x3b5f93['flash'](a5_0x5364('0x3d'),{'msg':a5_0x5364('0x3e')});_0x10cbd6[a5_0x5364('0x9')]('/');});};exports['getOauthUnlink']=(_0x18449b,_0xa344c2,_0x86588c)=>{const _0xcf230e=_0x18449b[a5_0x5364('0x3f')][a5_0x5364('0x40')];User_1[a5_0x5364('0x18')][a5_0x5364('0x32')](_0x18449b[a5_0x5364('0x8')]['id'],(_0x229751,_0x150b42)=>{if(_0x229751){return _0x86588c(_0x229751);}_0x150b42[_0xcf230e]=undefined;_0x150b42['tokens']=_0x150b42[a5_0x5364('0x41')][a5_0x5364('0x42')](_0x415772=>_0x415772[a5_0x5364('0x43')]!==_0xcf230e);_0x150b42[a5_0x5364('0x38')](_0x229751=>{if(_0x229751){return _0x86588c(_0x229751);}_0x18449b['flash'](a5_0x5364('0x3d'),{'msg':_0xcf230e+a5_0x5364('0x44')});_0xa344c2[a5_0x5364('0x9')](a5_0x5364('0x3a'));});});};exports['getReset']=(_0x1faad3,_0x3333ff,_0x44e00c)=>{if(_0x1faad3['isAuthenticated']()){return _0x3333ff['redirect']('/');}User_1[a5_0x5364('0x18')][a5_0x5364('0x2c')]({'passwordResetToken':_0x1faad3[a5_0x5364('0x3f')][a5_0x5364('0x45')]})[a5_0x5364('0x46')](a5_0x5364('0x47'))['gt'](Date[a5_0x5364('0x48')]())[a5_0x5364('0x49')]((_0x3379a9,_0x4ab312)=>{if(_0x3379a9){return _0x44e00c(_0x3379a9);}if(!_0x4ab312){_0x1faad3['flash'](a5_0x5364('0x16'),{'msg':a5_0x5364('0x4a')});return _0x3333ff['redirect']('/forgot');}_0x3333ff[a5_0x5364('0x21')]('account/reset',{'title':a5_0x5364('0x4b')});});};exports['postReset']=(_0x4642d5,_0xa2b8a1,_0x339be6)=>{_0x4642d5[a5_0x5364('0xd')](a5_0x5364('0x11'),a5_0x5364('0x4c'))[a5_0x5364('0x25')]({'min':0x4});_0x4642d5[a5_0x5364('0xd')](a5_0x5364('0x4d'),a5_0x5364('0x4e'))['equals'](_0x4642d5[a5_0x5364('0x29')][a5_0x5364('0x11')]);const _0x32a4ed=_0x4642d5[a5_0x5364('0x2a')]();if(_0x32a4ed){_0x4642d5[a5_0x5364('0x15')]('errors',_0x32a4ed);return _0xa2b8a1[a5_0x5364('0x9')](a5_0x5364('0x4f'));}async_1['default']['waterfall']([function resetPassword(_0x408657){User_1[a5_0x5364('0x18')][a5_0x5364('0x2c')]({'passwordResetToken':_0x4642d5[a5_0x5364('0x3f')][a5_0x5364('0x45')]})[a5_0x5364('0x46')]('passwordResetExpires')['gt'](Date['now']())['exec']((_0x414aa4,_0x54d848)=>{if(_0x414aa4){return _0x339be6(_0x414aa4);}if(!_0x54d848){_0x4642d5[a5_0x5364('0x15')](a5_0x5364('0x16'),{'msg':'Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.'});return _0xa2b8a1[a5_0x5364('0x9')](a5_0x5364('0x4f'));}_0x54d848[a5_0x5364('0x11')]=_0x4642d5[a5_0x5364('0x29')]['password'];_0x54d848[a5_0x5364('0x50')]=undefined;_0x54d848['passwordResetExpires']=undefined;_0x54d848[a5_0x5364('0x38')](_0x414aa4=>{if(_0x414aa4){return _0x339be6(_0x414aa4);}_0x4642d5['logIn'](_0x54d848,_0x414aa4=>{_0x408657(_0x414aa4,_0x54d848);});});});},function sendResetPasswordEmail(_0x101543,_0x42bda5){const _0x183015=nodemailer_1['default'][a5_0x5364('0x51')]({'service':a5_0x5364('0x52'),'auth':{'user':process[a5_0x5364('0x53')]['SENDGRID_USER'],'pass':process['env'][a5_0x5364('0x54')]}});const _0x4a18fb={'to':_0x101543['email'],'from':'express-ts@starter.com','subject':a5_0x5364('0x55'),'text':a5_0x5364('0x56')+_0x101543['email']+a5_0x5364('0x57')};_0x183015['sendMail'](_0x4a18fb,_0x4aa202=>{_0x4642d5[a5_0x5364('0x15')](a5_0x5364('0x1c'),{'msg':'Success!\x20Your\x20password\x20has\x20been\x20changed.'});_0x42bda5(_0x4aa202);});}],_0x44d150=>{if(_0x44d150){return _0x339be6(_0x44d150);}_0xa2b8a1[a5_0x5364('0x9')]('/');});};exports[a5_0x5364('0x58')]=(_0x2f0d14,_0x1ceb0c)=>{if(_0x2f0d14[a5_0x5364('0x59')]()){return _0x1ceb0c['redirect']('/');}_0x1ceb0c[a5_0x5364('0x21')](a5_0x5364('0x5a'),{'title':'Forgot\x20Password'});};exports[a5_0x5364('0x5b')]=(_0x2fcfd8,_0x1d0300,_0x190c45)=>{_0x2fcfd8[a5_0x5364('0xd')](a5_0x5364('0xe'),a5_0x5364('0x5c'))[a5_0x5364('0x10')]();_0x2fcfd8[a5_0x5364('0x14')](a5_0x5364('0xe'))['normalizeEmail']({'gmail_remove_dots':![]});const _0x35e4a5=_0x2fcfd8[a5_0x5364('0x2a')]();if(_0x35e4a5){_0x2fcfd8['flash'](a5_0x5364('0x16'),_0x35e4a5);return _0x1d0300[a5_0x5364('0x9')](a5_0x5364('0x5d'));}async_1[a5_0x5364('0x18')][a5_0x5364('0x5e')]([function createRandomToken(_0x4d82bd){crypto_1[a5_0x5364('0x18')][a5_0x5364('0x5f')](0x10,(_0x3edc54,_0x2984eb)=>{const _0x3fc483=_0x2984eb[a5_0x5364('0x60')](a5_0x5364('0x61'));_0x4d82bd(_0x3edc54,_0x3fc483);});},function setRandomToken(_0x4fc5c8,_0x2a221b){User_1[a5_0x5364('0x18')][a5_0x5364('0x2c')]({'email':_0x2fcfd8['body'][a5_0x5364('0xe')]},(_0x54c7c1,_0x15b2e7)=>{if(_0x54c7c1){return _0x2a221b(_0x54c7c1);}if(!_0x15b2e7){_0x2fcfd8[a5_0x5364('0x15')]('errors',{'msg':a5_0x5364('0x62')});return _0x1d0300[a5_0x5364('0x9')](a5_0x5364('0x5d'));}_0x15b2e7[a5_0x5364('0x50')]=_0x4fc5c8;_0x15b2e7[a5_0x5364('0x47')]=Date[a5_0x5364('0x48')]()+0x36ee80;_0x15b2e7[a5_0x5364('0x38')](_0x54c7c1=>{_0x2a221b(_0x54c7c1,_0x4fc5c8,_0x15b2e7);});});},function sendForgotPasswordEmail(_0x31c0dc,_0x218e5b,_0x3ddf82){const _0xda5fc1=nodemailer_1[a5_0x5364('0x18')][a5_0x5364('0x51')]({'service':a5_0x5364('0x52'),'auth':{'user':process[a5_0x5364('0x53')][a5_0x5364('0x63')],'pass':process[a5_0x5364('0x53')]['SENDGRID_PASSWORD']}});const _0x69c147={'to':_0x218e5b['email'],'from':a5_0x5364('0x64'),'subject':a5_0x5364('0x65'),'text':a5_0x5364('0x66')+_0x2fcfd8['headers']['host']+a5_0x5364('0x67')+_0x31c0dc+a5_0x5364('0x68')};_0xda5fc1[a5_0x5364('0x69')](_0x69c147,_0x4b3db2=>{_0x2fcfd8['flash'](a5_0x5364('0x3d'),{'msg':a5_0x5364('0x6a')+_0x218e5b[a5_0x5364('0xe')]+a5_0x5364('0x6b')});_0x3ddf82(_0x4b3db2);});}],_0x93c3da=>{if(_0x93c3da){return _0x190c45(_0x93c3da);}_0x1d0300[a5_0x5364('0x9')](a5_0x5364('0x5d'));});};