var a1_0xa856=['There\x20is\x20already\x20an\x20account\x20using\x20this\x20email\x20address.\x20Sign\x20in\x20to\x20that\x20account\x20and\x20link\x20it\x20with\x20Facebook\x20manually\x20from\x20Account\x20Settings.','givenName','location','isAuthenticated','redirect','/login','isAuthorized','split','slice','find','/auth/','defineProperty','__esModule','passport','passport-local','passport-facebook','lodash','../models/User','default','Strategy','serializeUser','deserializeUser','findById','use','email','findOne','Email\x20','\x20not\x20found.','comparePassword','Invalid\x20email\x20or\x20password.','FACEBOOK_ID','env','FACEBOOK_SECRET','/auth/facebook/callback','name','link','locale','user','errors','facebook','tokens','push','profile','familyName','gender','_json','picture','https://graph.facebook.com/','save','info','Facebook\x20account\x20has\x20been\x20linked.','flash'];(function(_0x504587,_0x2721c7){var _0x5844b9=function(_0xbc884a){while(--_0xbc884a){_0x504587['push'](_0x504587['shift']());}};_0x5844b9(++_0x2721c7);}(a1_0xa856,0xdb));var a1_0x4107=function(_0x536f6a,_0x8ef520){_0x536f6a=_0x536f6a-0x0;var _0xa712b0=a1_0xa856[_0x536f6a];return _0xa712b0;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1f7891){return _0x1f7891&&_0x1f7891['__esModule']?_0x1f7891:{'default':_0x1f7891};};Object[a1_0x4107('0x0')](exports,a1_0x4107('0x1'),{'value':!![]});const passport_1=__importDefault(require(a1_0x4107('0x2')));const passport_local_1=__importDefault(require(a1_0x4107('0x3')));const passport_facebook_1=__importDefault(require(a1_0x4107('0x4')));const lodash_1=__importDefault(require(a1_0x4107('0x5')));const User_1=__importDefault(require(a1_0x4107('0x6')));const LocalStrategy=passport_local_1['default']['Strategy'];const FacebookStrategy=passport_facebook_1[a1_0x4107('0x7')][a1_0x4107('0x8')];passport_1[a1_0x4107('0x7')][a1_0x4107('0x9')]((_0x195497,_0x21709c)=>{_0x21709c(undefined,_0x195497['id']);});passport_1[a1_0x4107('0x7')][a1_0x4107('0xa')]((_0x484224,_0x59d2c3)=>{User_1[a1_0x4107('0x7')][a1_0x4107('0xb')](_0x484224,(_0x938e5e,_0x3a1a26)=>{_0x59d2c3(_0x938e5e,_0x3a1a26);});});passport_1[a1_0x4107('0x7')][a1_0x4107('0xc')](new LocalStrategy({'usernameField':a1_0x4107('0xd')},(_0x2fef72,_0x1a8591,_0x394fcf)=>{User_1[a1_0x4107('0x7')][a1_0x4107('0xe')]({'email':_0x2fef72['toLowerCase']()},(_0x145a5c,_0x4b2421)=>{if(_0x145a5c){return _0x394fcf(_0x145a5c);}if(!_0x4b2421){return _0x394fcf(undefined,![],{'message':a1_0x4107('0xf')+_0x2fef72+a1_0x4107('0x10')});}_0x4b2421[a1_0x4107('0x11')](_0x1a8591,(_0x145a5c,_0x2beb57)=>{if(_0x145a5c){return _0x394fcf(_0x145a5c);}if(_0x2beb57){return _0x394fcf(undefined,_0x4b2421);}return _0x394fcf(undefined,![],{'message':a1_0x4107('0x12')});});});}));passport_1[a1_0x4107('0x7')][a1_0x4107('0xc')](new FacebookStrategy({'clientID':process['env'][a1_0x4107('0x13')],'clientSecret':process[a1_0x4107('0x14')][a1_0x4107('0x15')],'callbackURL':a1_0x4107('0x16'),'profileFields':[a1_0x4107('0x17'),a1_0x4107('0xd'),a1_0x4107('0x18'),a1_0x4107('0x19'),'timezone'],'passReqToCallback':!![]},(_0x336b05,_0x492f91,_0x4db961,_0x1aedf9,_0x6f12f7)=>{if(_0x336b05[a1_0x4107('0x1a')]){User_1[a1_0x4107('0x7')][a1_0x4107('0xe')]({'facebook':_0x1aedf9['id']},(_0x4eb214,_0x10eb1d)=>{if(_0x4eb214){return _0x6f12f7(_0x4eb214);}if(_0x10eb1d){_0x336b05['flash'](a1_0x4107('0x1b'),{'msg':'There\x20is\x20already\x20a\x20Facebook\x20account\x20that\x20belongs\x20to\x20you.\x20Sign\x20in\x20with\x20that\x20account\x20or\x20delete\x20it,\x20then\x20link\x20it\x20with\x20your\x20current\x20account.'});_0x6f12f7(_0x4eb214);}else{User_1[a1_0x4107('0x7')]['findById'](_0x336b05[a1_0x4107('0x1a')]['id'],(_0x4eb214,_0x33186c)=>{if(_0x4eb214){return _0x6f12f7(_0x4eb214);}_0x33186c[a1_0x4107('0x1c')]=_0x1aedf9['id'];_0x33186c[a1_0x4107('0x1d')][a1_0x4107('0x1e')]({'kind':a1_0x4107('0x1c'),'accessToken':_0x492f91});_0x33186c[a1_0x4107('0x1f')][a1_0x4107('0x17')]=_0x33186c[a1_0x4107('0x1f')][a1_0x4107('0x17')]||_0x1aedf9[a1_0x4107('0x17')]['givenName']+'\x20'+_0x1aedf9[a1_0x4107('0x17')][a1_0x4107('0x20')];_0x33186c[a1_0x4107('0x1f')][a1_0x4107('0x21')]=_0x33186c[a1_0x4107('0x1f')][a1_0x4107('0x21')]||_0x1aedf9[a1_0x4107('0x22')][a1_0x4107('0x21')];_0x33186c[a1_0x4107('0x1f')][a1_0x4107('0x23')]=_0x33186c[a1_0x4107('0x1f')][a1_0x4107('0x23')]||a1_0x4107('0x24')+_0x1aedf9['id']+'/picture?type=large';_0x33186c[a1_0x4107('0x25')](_0x4eb214=>{_0x336b05['flash'](a1_0x4107('0x26'),{'msg':a1_0x4107('0x27')});_0x6f12f7(_0x4eb214,_0x33186c);});});}});}else{User_1[a1_0x4107('0x7')]['findOne']({'facebook':_0x1aedf9['id']},(_0x59a21b,_0x211c18)=>{if(_0x59a21b){return _0x6f12f7(_0x59a21b);}if(_0x211c18){return _0x6f12f7(undefined,_0x211c18);}User_1['default']['findOne']({'email':_0x1aedf9[a1_0x4107('0x22')][a1_0x4107('0xd')]},(_0x59a21b,_0x2fb306)=>{if(_0x59a21b){return _0x6f12f7(_0x59a21b);}if(_0x2fb306){_0x336b05[a1_0x4107('0x28')](a1_0x4107('0x1b'),{'msg':a1_0x4107('0x29')});_0x6f12f7(_0x59a21b);}else{const _0x11d984=new User_1[(a1_0x4107('0x7'))]();_0x11d984[a1_0x4107('0xd')]=_0x1aedf9[a1_0x4107('0x22')][a1_0x4107('0xd')];_0x11d984['facebook']=_0x1aedf9['id'];_0x11d984[a1_0x4107('0x1d')][a1_0x4107('0x1e')]({'kind':a1_0x4107('0x1c'),'accessToken':_0x492f91});_0x11d984[a1_0x4107('0x1f')][a1_0x4107('0x17')]=_0x1aedf9[a1_0x4107('0x17')][a1_0x4107('0x2a')]+'\x20'+_0x1aedf9[a1_0x4107('0x17')][a1_0x4107('0x20')];_0x11d984[a1_0x4107('0x1f')]['gender']=_0x1aedf9[a1_0x4107('0x22')]['gender'];_0x11d984[a1_0x4107('0x1f')][a1_0x4107('0x23')]=a1_0x4107('0x24')+_0x1aedf9['id']+'/picture?type=large';_0x11d984[a1_0x4107('0x1f')][a1_0x4107('0x2b')]=_0x1aedf9['_json'][a1_0x4107('0x2b')]?_0x1aedf9[a1_0x4107('0x22')][a1_0x4107('0x2b')][a1_0x4107('0x17')]:'';_0x11d984[a1_0x4107('0x25')](_0x59a21b=>{_0x6f12f7(_0x59a21b,_0x11d984);});}});});}}));exports['isAuthenticated']=(_0x187b1f,_0x2dabb2,_0x4b799b)=>{if(_0x187b1f[a1_0x4107('0x2c')]()){return _0x4b799b();}_0x2dabb2[a1_0x4107('0x2d')](a1_0x4107('0x2e'));};exports[a1_0x4107('0x2f')]=(_0x54ad54,_0x1421aa,_0x5499c0)=>{const _0x29cb19=_0x54ad54['path'][a1_0x4107('0x30')]('/')[a1_0x4107('0x31')](-0x1)[0x0];if(lodash_1[a1_0x4107('0x7')][a1_0x4107('0x32')](_0x54ad54[a1_0x4107('0x1a')][a1_0x4107('0x1d')],{'kind':_0x29cb19})){_0x5499c0();}else{_0x1421aa[a1_0x4107('0x2d')](a1_0x4107('0x33')+_0x29cb19);}};