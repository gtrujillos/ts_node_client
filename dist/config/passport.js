var a1_0x1933=['locale','user','flash','errors','There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.','facebook','tokens','profile','name','givenName','gender','picture','/picture?type=large','save','info','Facebook\x20account\x20has\x20been\x20linked.','There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','_json','push','familyName','location','isAuthenticated','redirect','/login','isAuthorized','path','split','slice','find','/auth/','__importDefault','defineProperty','__esModule','passport','passport-local','passport-facebook','lodash','../models/User','default','Strategy','serializeUser','findById','use','email','findOne','toLowerCase','\x20not\x20found.','comparePassword','env','FACEBOOK_SECRET','/auth/facebook/callback','link'];(function(_0x5751ce,_0x40cdb4){var _0x47610c=function(_0x5d3018){while(--_0x5d3018){_0x5751ce['push'](_0x5751ce['shift']());}};_0x47610c(++_0x40cdb4);}(a1_0x1933,0x1be));var a1_0x44c3=function(_0x17e57e,_0xa2e811){_0x17e57e=_0x17e57e-0x0;var _0x3a5cf5=a1_0x1933[_0x17e57e];return _0x3a5cf5;};'use strict';var __importDefault=this&&this[a1_0x44c3('0x0')]||function(_0x598243){return _0x598243&&_0x598243['__esModule']?_0x598243:{'default':_0x598243};};Object[a1_0x44c3('0x1')](exports,a1_0x44c3('0x2'),{'value':!![]});const passport_1=__importDefault(require(a1_0x44c3('0x3')));const passport_local_1=__importDefault(require(a1_0x44c3('0x4')));const passport_facebook_1=__importDefault(require(a1_0x44c3('0x5')));const lodash_1=__importDefault(require(a1_0x44c3('0x6')));const User_1=__importDefault(require(a1_0x44c3('0x7')));const LocalStrategy=passport_local_1[a1_0x44c3('0x8')]['Strategy'];const FacebookStrategy=passport_facebook_1[a1_0x44c3('0x8')][a1_0x44c3('0x9')];passport_1['default'][a1_0x44c3('0xa')]((_0x3fa07e,_0x247391)=>{_0x247391(undefined,_0x3fa07e['id']);});passport_1[a1_0x44c3('0x8')]['deserializeUser']((_0x52ff0e,_0x1a273f)=>{User_1[a1_0x44c3('0x8')][a1_0x44c3('0xb')](_0x52ff0e,(_0x3ce158,_0x3e6b58)=>{_0x1a273f(_0x3ce158,_0x3e6b58);});});passport_1[a1_0x44c3('0x8')][a1_0x44c3('0xc')](new LocalStrategy({'usernameField':a1_0x44c3('0xd')},(_0x4bd612,_0x266c33,_0x26b6b4)=>{User_1[a1_0x44c3('0x8')][a1_0x44c3('0xe')]({'email':_0x4bd612[a1_0x44c3('0xf')]()},(_0x4eeb72,_0x5adc50)=>{if(_0x4eeb72){return _0x26b6b4(_0x4eeb72);}if(!_0x5adc50){return _0x26b6b4(undefined,![],{'message':'Email\x20'+_0x4bd612+a1_0x44c3('0x10')});}_0x5adc50[a1_0x44c3('0x11')](_0x266c33,(_0x4eeb72,_0x3393df)=>{if(_0x4eeb72){return _0x26b6b4(_0x4eeb72);}if(_0x3393df){return _0x26b6b4(undefined,_0x5adc50);}return _0x26b6b4(undefined,![],{'message':'Invalid\x20email\x20or\x20password.'});});});}));passport_1['default'][a1_0x44c3('0xc')](new FacebookStrategy({'clientID':process[a1_0x44c3('0x12')]['FACEBOOK_ID'],'clientSecret':process['env'][a1_0x44c3('0x13')],'callbackURL':a1_0x44c3('0x14'),'profileFields':['name',a1_0x44c3('0xd'),a1_0x44c3('0x15'),a1_0x44c3('0x16'),'timezone'],'passReqToCallback':!![]},(_0x496eac,_0x44e47b,_0x12993d,_0x4e9c00,_0x4903d0)=>{if(_0x496eac[a1_0x44c3('0x17')]){User_1[a1_0x44c3('0x8')][a1_0x44c3('0xe')]({'facebook':_0x4e9c00['id']},(_0x5017a0,_0x5761a2)=>{if(_0x5017a0){return _0x4903d0(_0x5017a0);}if(_0x5761a2){_0x496eac[a1_0x44c3('0x18')](a1_0x44c3('0x19'),{'msg':a1_0x44c3('0x1a')});_0x4903d0(_0x5017a0);}else{User_1[a1_0x44c3('0x8')]['findById'](_0x496eac['user']['id'],(_0x5017a0,_0x14d7b1)=>{if(_0x5017a0){return _0x4903d0(_0x5017a0);}_0x14d7b1[a1_0x44c3('0x1b')]=_0x4e9c00['id'];_0x14d7b1[a1_0x44c3('0x1c')]['push']({'kind':a1_0x44c3('0x1b'),'accessToken':_0x44e47b});_0x14d7b1[a1_0x44c3('0x1d')][a1_0x44c3('0x1e')]=_0x14d7b1[a1_0x44c3('0x1d')][a1_0x44c3('0x1e')]||_0x4e9c00[a1_0x44c3('0x1e')][a1_0x44c3('0x1f')]+'\x20'+_0x4e9c00[a1_0x44c3('0x1e')]['familyName'];_0x14d7b1['profile'][a1_0x44c3('0x20')]=_0x14d7b1['profile'][a1_0x44c3('0x20')]||_0x4e9c00['_json'][a1_0x44c3('0x20')];_0x14d7b1[a1_0x44c3('0x1d')][a1_0x44c3('0x21')]=_0x14d7b1[a1_0x44c3('0x1d')][a1_0x44c3('0x21')]||'https://graph.facebook.com/'+_0x4e9c00['id']+a1_0x44c3('0x22');_0x14d7b1[a1_0x44c3('0x23')](_0x5017a0=>{_0x496eac[a1_0x44c3('0x18')](a1_0x44c3('0x24'),{'msg':a1_0x44c3('0x25')});_0x4903d0(_0x5017a0,_0x14d7b1);});});}});}else{User_1['default']['findOne']({'facebook':_0x4e9c00['id']},(_0x588604,_0x232263)=>{if(_0x588604){return _0x4903d0(_0x588604);}if(_0x232263){return _0x4903d0(undefined,_0x232263);}User_1[a1_0x44c3('0x8')][a1_0x44c3('0xe')]({'email':_0x4e9c00['_json'][a1_0x44c3('0xd')]},(_0x588604,_0x4a412e)=>{if(_0x588604){return _0x4903d0(_0x588604);}if(_0x4a412e){_0x496eac['flash'](a1_0x44c3('0x19'),{'msg':a1_0x44c3('0x26')});_0x4903d0(_0x588604);}else{const _0x2ccb29=new User_1[(a1_0x44c3('0x8'))]();_0x2ccb29[a1_0x44c3('0xd')]=_0x4e9c00[a1_0x44c3('0x27')][a1_0x44c3('0xd')];_0x2ccb29[a1_0x44c3('0x1b')]=_0x4e9c00['id'];_0x2ccb29[a1_0x44c3('0x1c')][a1_0x44c3('0x28')]({'kind':'facebook','accessToken':_0x44e47b});_0x2ccb29['profile']['name']=_0x4e9c00[a1_0x44c3('0x1e')][a1_0x44c3('0x1f')]+'\x20'+_0x4e9c00['name'][a1_0x44c3('0x29')];_0x2ccb29['profile'][a1_0x44c3('0x20')]=_0x4e9c00['_json'][a1_0x44c3('0x20')];_0x2ccb29[a1_0x44c3('0x1d')][a1_0x44c3('0x21')]='https://graph.facebook.com/'+_0x4e9c00['id']+a1_0x44c3('0x22');_0x2ccb29[a1_0x44c3('0x1d')]['location']=_0x4e9c00[a1_0x44c3('0x27')][a1_0x44c3('0x2a')]?_0x4e9c00[a1_0x44c3('0x27')][a1_0x44c3('0x2a')][a1_0x44c3('0x1e')]:'';_0x2ccb29[a1_0x44c3('0x23')](_0x588604=>{_0x4903d0(_0x588604,_0x2ccb29);});}});});}}));exports[a1_0x44c3('0x2b')]=(_0x47bd33,_0x484398,_0x53559c)=>{if(_0x47bd33[a1_0x44c3('0x2b')]()){return _0x53559c();}_0x484398[a1_0x44c3('0x2c')](a1_0x44c3('0x2d'));};exports[a1_0x44c3('0x2e')]=(_0x1e2c85,_0x3e5387,_0x478471)=>{const _0x575984=_0x1e2c85[a1_0x44c3('0x2f')][a1_0x44c3('0x30')]('/')[a1_0x44c3('0x31')](-0x1)[0x0];if(lodash_1[a1_0x44c3('0x8')][a1_0x44c3('0x32')](_0x1e2c85[a1_0x44c3('0x17')][a1_0x44c3('0x1c')],{'kind':_0x575984})){_0x478471();}else{_0x3e5387['redirect'](a1_0x44c3('0x33')+_0x575984);}};