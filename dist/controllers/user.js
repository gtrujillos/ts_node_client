var a5_0x2a8b=['Password\x20reset\x20token\x20is\x20invalid\x20or\x20has\x20expired.','/forgot','account/reset','Password\x20Reset','postReset','confirm','back','waterfall','passwordResetExpires','createTransport','SendGrid','env','SENDGRID_USER','SENDGRID_PASSWORD','express-ts@starter.com','Your\x20password\x20has\x20been\x20changed','Hello,\x0a\x0aThis\x20is\x20a\x20confirmation\x20that\x20the\x20password\x20for\x20your\x20account\x20','\x20has\x20just\x20been\x20changed.\x0a','Success!\x20Your\x20password\x20has\x20been\x20changed.','account/forgot','Forgot\x20Password','postForgot','randomBytes','hex','hackathon@starter.com','You\x20are\x20receiving\x20this\x20email\x20because\x20you\x20(or\x20someone\x20else)\x20have\x20requested\x20the\x20reset\x20of\x20the\x20password\x20for\x20your\x20account.\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20click\x20on\x20the\x20following\x20link,\x20or\x20paste\x20this\x20into\x20your\x20browser\x20to\x20complete\x20the\x20process:\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20http://','headers','host','\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20did\x20not\x20request\x20this,\x20please\x20ignore\x20this\x20email\x20and\x20your\x20password\x20will\x20remain\x20unchanged.\x0a','sendMail','An\x20e-mail\x20has\x20been\x20sent\x20to\x20','\x20with\x20further\x20instructions.','__importDefault','__esModule','async','crypto','nodemailer','passport','../models/User','express-validator','user','redirect','account/login','Login','postLogin','assert','Email\x20is\x20not\x20valid','password','Password\x20cannot\x20be\x20blank','notEmpty','sanitize','email','normalizeEmail','validationErrors','flash','errors','/login','default','authenticate','local','message','logIn','success','returnTo','logout','render','account/signup','Create\x20Account','isEmail','Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long','len','Passwords\x20do\x20not\x20match','equals','findOne','body','save','getAccount','account/profile','Account\x20Management','postUpdateProfile','Please\x20enter\x20a\x20valid\x20email\x20address.','/account','findById','name','profile','gender','location','website','code','The\x20email\x20address\x20you\x20have\x20entered\x20is\x20already\x20associated\x20with\x20an\x20account.','Profile\x20information\x20has\x20been\x20updated.','postUpdatePassword','confirmPassword','Password\x20has\x20been\x20changed.','postDeleteAccount','remove','Your\x20account\x20has\x20been\x20deleted.','params','provider','tokens','filter','kind','info','\x20account\x20has\x20been\x20unlinked.','getReset','isAuthenticated','token','where','now','exec'];(function(_0x41c51c,_0x44263c){var _0x51abec=function(_0x45f6e7){while(--_0x45f6e7){_0x41c51c['push'](_0x41c51c['shift']());}};_0x51abec(++_0x44263c);}(a5_0x2a8b,0x16a));var a5_0x3a6d=function(_0x2699a9,_0x501e82){_0x2699a9=_0x2699a9-0x0;var _0x5b6c40=a5_0x2a8b[_0x2699a9];return _0x5b6c40;};'use strict';var __importDefault=this&&this[a5_0x3a6d('0x0')]||function(_0x3f855b){return _0x3f855b&&_0x3f855b[a5_0x3a6d('0x1')]?_0x3f855b:{'default':_0x3f855b};};Object['defineProperty'](exports,a5_0x3a6d('0x1'),{'value':!![]});const async_1=__importDefault(require(a5_0x3a6d('0x2')));const crypto_1=__importDefault(require(a5_0x3a6d('0x3')));const nodemailer_1=__importDefault(require(a5_0x3a6d('0x4')));const passport_1=__importDefault(require(a5_0x3a6d('0x5')));const User_1=__importDefault(require(a5_0x3a6d('0x6')));const request=require(a5_0x3a6d('0x7'));exports['getLogin']=(_0x6c4f6b,_0x2182ba)=>{if(_0x6c4f6b[a5_0x3a6d('0x8')]){return _0x2182ba[a5_0x3a6d('0x9')]('/');}_0x2182ba['render'](a5_0x3a6d('0xa'),{'title':a5_0x3a6d('0xb')});};exports[a5_0x3a6d('0xc')]=(_0x31bf20,_0x289ef2,_0x19a3e0)=>{_0x31bf20[a5_0x3a6d('0xd')]('email',a5_0x3a6d('0xe'))['isEmail']();_0x31bf20[a5_0x3a6d('0xd')](a5_0x3a6d('0xf'),a5_0x3a6d('0x10'))[a5_0x3a6d('0x11')]();_0x31bf20[a5_0x3a6d('0x12')](a5_0x3a6d('0x13'))[a5_0x3a6d('0x14')]({'gmail_remove_dots':![]});const _0x1af45a=_0x31bf20[a5_0x3a6d('0x15')]();if(_0x1af45a){_0x31bf20[a5_0x3a6d('0x16')](a5_0x3a6d('0x17'),_0x1af45a);return _0x289ef2[a5_0x3a6d('0x9')](a5_0x3a6d('0x18'));}passport_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x1a')](a5_0x3a6d('0x1b'),(_0x2fd95c,_0x538bb3,_0x5e5b6d)=>{if(_0x2fd95c){return _0x19a3e0(_0x2fd95c);}if(!_0x538bb3){_0x31bf20[a5_0x3a6d('0x16')]('errors',_0x5e5b6d[a5_0x3a6d('0x1c')]);return _0x289ef2[a5_0x3a6d('0x9')](a5_0x3a6d('0x18'));}_0x31bf20[a5_0x3a6d('0x1d')](_0x538bb3,_0x2fd95c=>{if(_0x2fd95c){return _0x19a3e0(_0x2fd95c);}_0x31bf20[a5_0x3a6d('0x16')](a5_0x3a6d('0x1e'),{'msg':'Success!\x20You\x20are\x20logged\x20in.'});_0x289ef2[a5_0x3a6d('0x9')](_0x31bf20['session'][a5_0x3a6d('0x1f')]||'/');});})(_0x31bf20,_0x289ef2,_0x19a3e0);};exports[a5_0x3a6d('0x20')]=(_0x478afe,_0x43ac41)=>{_0x478afe[a5_0x3a6d('0x20')]();_0x43ac41[a5_0x3a6d('0x9')]('/');};exports['getSignup']=(_0x283e56,_0x211e9a)=>{if(_0x283e56[a5_0x3a6d('0x8')]){return _0x211e9a[a5_0x3a6d('0x9')]('/');}_0x211e9a[a5_0x3a6d('0x21')](a5_0x3a6d('0x22'),{'title':a5_0x3a6d('0x23')});};exports['postSignup']=(_0x2545b4,_0x1fd2c6,_0x113ff4)=>{_0x2545b4[a5_0x3a6d('0xd')]('email',a5_0x3a6d('0xe'))[a5_0x3a6d('0x24')]();_0x2545b4['assert'](a5_0x3a6d('0xf'),a5_0x3a6d('0x25'))[a5_0x3a6d('0x26')]({'min':0x4});_0x2545b4['assert']('confirmPassword',a5_0x3a6d('0x27'))[a5_0x3a6d('0x28')](_0x2545b4['body'][a5_0x3a6d('0xf')]);_0x2545b4[a5_0x3a6d('0x12')]('email')[a5_0x3a6d('0x14')]({'gmail_remove_dots':![]});const _0x2e1983=_0x2545b4[a5_0x3a6d('0x15')]();if(_0x2e1983){_0x2545b4['flash'](a5_0x3a6d('0x17'),_0x2e1983);return _0x1fd2c6[a5_0x3a6d('0x9')]('/signup');}const _0x5bef62=new User_1[(a5_0x3a6d('0x19'))]({});User_1['default'][a5_0x3a6d('0x29')]({'email':_0x2545b4[a5_0x3a6d('0x2a')][a5_0x3a6d('0x13')]},(_0x2cc2eb,_0x3cd928)=>{if(_0x2cc2eb){return _0x113ff4(_0x2cc2eb);}if(_0x3cd928){_0x2545b4[a5_0x3a6d('0x16')]('errors',{'msg':'Account\x20with\x20that\x20email\x20address\x20already\x20exists.'});return _0x1fd2c6['redirect']('/signup');}_0x5bef62[a5_0x3a6d('0x2b')](_0x2cc2eb=>{if(_0x2cc2eb){return _0x113ff4(_0x2cc2eb);}_0x2545b4[a5_0x3a6d('0x1d')](_0x5bef62,_0x2cc2eb=>{if(_0x2cc2eb){return _0x113ff4(_0x2cc2eb);}_0x1fd2c6[a5_0x3a6d('0x9')]('/');});});});};exports[a5_0x3a6d('0x2c')]=(_0x1f3671,_0x1e026a)=>{_0x1e026a[a5_0x3a6d('0x21')](a5_0x3a6d('0x2d'),{'title':a5_0x3a6d('0x2e')});};exports[a5_0x3a6d('0x2f')]=(_0x278db3,_0x493289,_0xef9ec2)=>{_0x278db3['assert'](a5_0x3a6d('0x13'),a5_0x3a6d('0x30'))[a5_0x3a6d('0x24')]();_0x278db3[a5_0x3a6d('0x12')](a5_0x3a6d('0x13'))[a5_0x3a6d('0x14')]({'gmail_remove_dots':![]});const _0x4696a1=_0x278db3[a5_0x3a6d('0x15')]();if(_0x4696a1){_0x278db3[a5_0x3a6d('0x16')](a5_0x3a6d('0x17'),_0x4696a1);return _0x493289['redirect'](a5_0x3a6d('0x31'));}User_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x32')](_0x278db3[a5_0x3a6d('0x8')]['id'],(_0x595cc0,_0x3f88ad)=>{if(_0x595cc0){return _0xef9ec2(_0x595cc0);}_0x3f88ad[a5_0x3a6d('0x13')]=_0x278db3['body']['email']||'';_0x3f88ad['profile'][a5_0x3a6d('0x33')]=_0x278db3[a5_0x3a6d('0x2a')][a5_0x3a6d('0x33')]||'';_0x3f88ad[a5_0x3a6d('0x34')][a5_0x3a6d('0x35')]=_0x278db3[a5_0x3a6d('0x2a')]['gender']||'';_0x3f88ad[a5_0x3a6d('0x34')]['location']=_0x278db3[a5_0x3a6d('0x2a')][a5_0x3a6d('0x36')]||'';_0x3f88ad['profile'][a5_0x3a6d('0x37')]=_0x278db3[a5_0x3a6d('0x2a')]['website']||'';_0x3f88ad['save'](_0x595cc0=>{if(_0x595cc0){if(_0x595cc0[a5_0x3a6d('0x38')]===0x2af8){_0x278db3[a5_0x3a6d('0x16')](a5_0x3a6d('0x17'),{'msg':a5_0x3a6d('0x39')});return _0x493289['redirect'](a5_0x3a6d('0x31'));}return _0xef9ec2(_0x595cc0);}_0x278db3['flash']('success',{'msg':a5_0x3a6d('0x3a')});_0x493289['redirect'](a5_0x3a6d('0x31'));});});};exports[a5_0x3a6d('0x3b')]=(_0x16aea6,_0x3c59af,_0x2b7933)=>{_0x16aea6['assert'](a5_0x3a6d('0xf'),a5_0x3a6d('0x25'))[a5_0x3a6d('0x26')]({'min':0x4});_0x16aea6['assert'](a5_0x3a6d('0x3c'),a5_0x3a6d('0x27'))['equals'](_0x16aea6[a5_0x3a6d('0x2a')]['password']);const _0x2ebfb6=_0x16aea6[a5_0x3a6d('0x15')]();if(_0x2ebfb6){_0x16aea6['flash']('errors',_0x2ebfb6);return _0x3c59af[a5_0x3a6d('0x9')](a5_0x3a6d('0x31'));}User_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x32')](_0x16aea6[a5_0x3a6d('0x8')]['id'],(_0x23feea,_0x195204)=>{if(_0x23feea){return _0x2b7933(_0x23feea);}_0x195204['password']=_0x16aea6[a5_0x3a6d('0x2a')]['password'];_0x195204[a5_0x3a6d('0x2b')](_0x23feea=>{if(_0x23feea){return _0x2b7933(_0x23feea);}_0x16aea6[a5_0x3a6d('0x16')]('success',{'msg':a5_0x3a6d('0x3d')});_0x3c59af[a5_0x3a6d('0x9')]('/account');});});};exports[a5_0x3a6d('0x3e')]=(_0x3f2321,_0xa880cb,_0xd55cc3)=>{User_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x3f')]({'_id':_0x3f2321[a5_0x3a6d('0x8')]['id']},_0x3ccd8e=>{if(_0x3ccd8e){return _0xd55cc3(_0x3ccd8e);}_0x3f2321[a5_0x3a6d('0x20')]();_0x3f2321[a5_0x3a6d('0x16')]('info',{'msg':a5_0x3a6d('0x40')});_0xa880cb[a5_0x3a6d('0x9')]('/');});};exports['getOauthUnlink']=(_0x112306,_0x42fd90,_0x25b035)=>{const _0x2112d5=_0x112306[a5_0x3a6d('0x41')][a5_0x3a6d('0x42')];User_1['default']['findById'](_0x112306[a5_0x3a6d('0x8')]['id'],(_0x1a5444,_0x30568e)=>{if(_0x1a5444){return _0x25b035(_0x1a5444);}_0x30568e[_0x2112d5]=undefined;_0x30568e[a5_0x3a6d('0x43')]=_0x30568e[a5_0x3a6d('0x43')][a5_0x3a6d('0x44')](_0x1c8e80=>_0x1c8e80[a5_0x3a6d('0x45')]!==_0x2112d5);_0x30568e[a5_0x3a6d('0x2b')](_0x1a5444=>{if(_0x1a5444){return _0x25b035(_0x1a5444);}_0x112306[a5_0x3a6d('0x16')](a5_0x3a6d('0x46'),{'msg':_0x2112d5+a5_0x3a6d('0x47')});_0x42fd90[a5_0x3a6d('0x9')](a5_0x3a6d('0x31'));});});};exports[a5_0x3a6d('0x48')]=(_0x3df078,_0x32b8f7,_0x420841)=>{if(_0x3df078[a5_0x3a6d('0x49')]()){return _0x32b8f7['redirect']('/');}User_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x29')]({'passwordResetToken':_0x3df078['params'][a5_0x3a6d('0x4a')]})[a5_0x3a6d('0x4b')]('passwordResetExpires')['gt'](Date[a5_0x3a6d('0x4c')]())[a5_0x3a6d('0x4d')]((_0x2cbc6f,_0x35636e)=>{if(_0x2cbc6f){return _0x420841(_0x2cbc6f);}if(!_0x35636e){_0x3df078[a5_0x3a6d('0x16')](a5_0x3a6d('0x17'),{'msg':a5_0x3a6d('0x4e')});return _0x32b8f7['redirect'](a5_0x3a6d('0x4f'));}_0x32b8f7[a5_0x3a6d('0x21')](a5_0x3a6d('0x50'),{'title':a5_0x3a6d('0x51')});});};exports[a5_0x3a6d('0x52')]=(_0x396bbe,_0x344b51,_0x1bc975)=>{_0x396bbe['assert'](a5_0x3a6d('0xf'),'Password\x20must\x20be\x20at\x20least\x204\x20characters\x20long.')[a5_0x3a6d('0x26')]({'min':0x4});_0x396bbe['assert'](a5_0x3a6d('0x53'),'Passwords\x20must\x20match.')['equals'](_0x396bbe[a5_0x3a6d('0x2a')][a5_0x3a6d('0xf')]);const _0x5291ae=_0x396bbe['validationErrors']();if(_0x5291ae){_0x396bbe[a5_0x3a6d('0x16')](a5_0x3a6d('0x17'),_0x5291ae);return _0x344b51[a5_0x3a6d('0x9')](a5_0x3a6d('0x54'));}async_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x55')]([function resetPassword(_0x3d3f2b){User_1[a5_0x3a6d('0x19')]['findOne']({'passwordResetToken':_0x396bbe[a5_0x3a6d('0x41')][a5_0x3a6d('0x4a')]})['where'](a5_0x3a6d('0x56'))['gt'](Date['now']())[a5_0x3a6d('0x4d')]((_0x45eceb,_0x5160c4)=>{if(_0x45eceb){return _0x1bc975(_0x45eceb);}if(!_0x5160c4){_0x396bbe[a5_0x3a6d('0x16')](a5_0x3a6d('0x17'),{'msg':a5_0x3a6d('0x4e')});return _0x344b51[a5_0x3a6d('0x9')]('back');}_0x5160c4[a5_0x3a6d('0xf')]=_0x396bbe[a5_0x3a6d('0x2a')][a5_0x3a6d('0xf')];_0x5160c4['passwordResetToken']=undefined;_0x5160c4[a5_0x3a6d('0x56')]=undefined;_0x5160c4[a5_0x3a6d('0x2b')](_0x45eceb=>{if(_0x45eceb){return _0x1bc975(_0x45eceb);}_0x396bbe[a5_0x3a6d('0x1d')](_0x5160c4,_0x45eceb=>{_0x3d3f2b(_0x45eceb,_0x5160c4);});});});},function sendResetPasswordEmail(_0x125f37,_0x3a1426){const _0x1def00=nodemailer_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x57')]({'service':a5_0x3a6d('0x58'),'auth':{'user':process[a5_0x3a6d('0x59')][a5_0x3a6d('0x5a')],'pass':process[a5_0x3a6d('0x59')][a5_0x3a6d('0x5b')]}});const _0x17b8e3={'to':_0x125f37[a5_0x3a6d('0x13')],'from':a5_0x3a6d('0x5c'),'subject':a5_0x3a6d('0x5d'),'text':a5_0x3a6d('0x5e')+_0x125f37[a5_0x3a6d('0x13')]+a5_0x3a6d('0x5f')};_0x1def00['sendMail'](_0x17b8e3,_0x2145cf=>{_0x396bbe[a5_0x3a6d('0x16')](a5_0x3a6d('0x1e'),{'msg':a5_0x3a6d('0x60')});_0x3a1426(_0x2145cf);});}],_0x4ca099=>{if(_0x4ca099){return _0x1bc975(_0x4ca099);}_0x344b51[a5_0x3a6d('0x9')]('/');});};exports['getForgot']=(_0x56a152,_0x2fdb1b)=>{if(_0x56a152[a5_0x3a6d('0x49')]()){return _0x2fdb1b[a5_0x3a6d('0x9')]('/');}_0x2fdb1b[a5_0x3a6d('0x21')](a5_0x3a6d('0x61'),{'title':a5_0x3a6d('0x62')});};exports[a5_0x3a6d('0x63')]=(_0xe5c8f6,_0x525ed3,_0xdef8c4)=>{_0xe5c8f6['assert'](a5_0x3a6d('0x13'),a5_0x3a6d('0x30'))['isEmail']();_0xe5c8f6['sanitize'](a5_0x3a6d('0x13'))[a5_0x3a6d('0x14')]({'gmail_remove_dots':![]});const _0x363cc2=_0xe5c8f6[a5_0x3a6d('0x15')]();if(_0x363cc2){_0xe5c8f6[a5_0x3a6d('0x16')]('errors',_0x363cc2);return _0x525ed3[a5_0x3a6d('0x9')](a5_0x3a6d('0x4f'));}async_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x55')]([function createRandomToken(_0x3181af){crypto_1[a5_0x3a6d('0x19')][a5_0x3a6d('0x64')](0x10,(_0x413d5e,_0x376f72)=>{const _0x324f67=_0x376f72['toString'](a5_0x3a6d('0x65'));_0x3181af(_0x413d5e,_0x324f67);});},function setRandomToken(_0x2e4d80,_0x42fc96){User_1[a5_0x3a6d('0x19')]['findOne']({'email':_0xe5c8f6[a5_0x3a6d('0x2a')]['email']},(_0x5ce8b0,_0x55d7ae)=>{if(_0x5ce8b0){return _0x42fc96(_0x5ce8b0);}if(!_0x55d7ae){_0xe5c8f6[a5_0x3a6d('0x16')](a5_0x3a6d('0x17'),{'msg':'Account\x20with\x20that\x20email\x20address\x20does\x20not\x20exist.'});return _0x525ed3[a5_0x3a6d('0x9')](a5_0x3a6d('0x4f'));}_0x55d7ae['passwordResetToken']=_0x2e4d80;_0x55d7ae[a5_0x3a6d('0x56')]=Date[a5_0x3a6d('0x4c')]()+0x36ee80;_0x55d7ae['save'](_0x5ce8b0=>{_0x42fc96(_0x5ce8b0,_0x2e4d80,_0x55d7ae);});});},function sendForgotPasswordEmail(_0x346be5,_0x2a42a3,_0x8bc7d9){const _0x44c909=nodemailer_1[a5_0x3a6d('0x19')]['createTransport']({'service':a5_0x3a6d('0x58'),'auth':{'user':process['env'][a5_0x3a6d('0x5a')],'pass':process[a5_0x3a6d('0x59')][a5_0x3a6d('0x5b')]}});const _0x5afb41={'to':_0x2a42a3[a5_0x3a6d('0x13')],'from':a5_0x3a6d('0x66'),'subject':'Reset\x20your\x20password\x20on\x20Hackathon\x20Starter','text':a5_0x3a6d('0x67')+_0xe5c8f6[a5_0x3a6d('0x68')][a5_0x3a6d('0x69')]+'/reset/'+_0x346be5+a5_0x3a6d('0x6a')};_0x44c909[a5_0x3a6d('0x6b')](_0x5afb41,_0x402692=>{_0xe5c8f6[a5_0x3a6d('0x16')](a5_0x3a6d('0x46'),{'msg':a5_0x3a6d('0x6c')+_0x2a42a3[a5_0x3a6d('0x13')]+a5_0x3a6d('0x6d')});_0x8bc7d9(_0x402692);});}],_0xd49002=>{if(_0xd49002){return _0xdef8c4(_0xd49002);}_0x525ed3[a5_0x3a6d('0x9')]('/forgot');});};