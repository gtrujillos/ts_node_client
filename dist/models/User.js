var a9_0x1198=['update','digest','hex','https://gravatar.com/avatar/','?s=','model','User','__esModule','crypto','Schema','pre','save','isModified','genSalt','default','hash','password','compare','comparePassword','gravatar','https://gravatar.com/avatar/?s=','&d=retro','createHash','md5'];(function(_0x66ab1c,_0x559c97){var _0x4a8688=function(_0x3d8eb0){while(--_0x3d8eb0){_0x66ab1c['push'](_0x66ab1c['shift']());}};_0x4a8688(++_0x559c97);}(a9_0x1198,0x13f));var a9_0x1e0a=function(_0x6dd4b4,_0x4941a7){_0x6dd4b4=_0x6dd4b4-0x0;var _0x3447af=a9_0x1198[_0x6dd4b4];return _0x3447af;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3ffc13){return _0x3ffc13&&_0x3ffc13['__esModule']?_0x3ffc13:{'default':_0x3ffc13};};Object['defineProperty'](exports,a9_0x1e0a('0x0'),{'value':!![]});const bcrypt_nodejs_1=__importDefault(require('bcrypt-nodejs'));const crypto_1=__importDefault(require(a9_0x1e0a('0x1')));const mongoose_1=__importDefault(require('mongoose'));const userSchema=new mongoose_1['default'][(a9_0x1e0a('0x2'))]({'email':{'type':String,'unique':!![]},'password':String,'passwordResetToken':String,'passwordResetExpires':Date,'facebook':String,'twitter':String,'google':String,'tokens':Array,'profile':{'name':String,'gender':String,'location':String,'website':String,'picture':String}},{'timestamps':!![]});userSchema[a9_0x1e0a('0x3')](a9_0x1e0a('0x4'),function save(_0x2747d5){const _0x4e9e8a=this;if(!_0x4e9e8a[a9_0x1e0a('0x5')]('password')){return _0x2747d5();}bcrypt_nodejs_1['default'][a9_0x1e0a('0x6')](0xa,(_0x244e06,_0x5f40b)=>{if(_0x244e06){return _0x2747d5(_0x244e06);}bcrypt_nodejs_1[a9_0x1e0a('0x7')][a9_0x1e0a('0x8')](_0x4e9e8a['password'],_0x5f40b,undefined,(_0x244e06,_0x359fbb)=>{if(_0x244e06){return _0x2747d5(_0x244e06);}_0x4e9e8a[a9_0x1e0a('0x9')]=_0x359fbb;_0x2747d5();});});});const comparePassword=function(_0x721980,_0xab774f){bcrypt_nodejs_1[a9_0x1e0a('0x7')][a9_0x1e0a('0xa')](_0x721980,this[a9_0x1e0a('0x9')],(_0x305d7a,_0x51f356)=>{_0xab774f(_0x305d7a,_0x51f356);});};userSchema['methods'][a9_0x1e0a('0xb')]=comparePassword;userSchema['methods'][a9_0x1e0a('0xc')]=function(_0x4409b7){if(!_0x4409b7){_0x4409b7=0xc8;}if(!this['email']){return a9_0x1e0a('0xd')+_0x4409b7+a9_0x1e0a('0xe');}const _0x5c2e80=crypto_1[a9_0x1e0a('0x7')][a9_0x1e0a('0xf')](a9_0x1e0a('0x10'))[a9_0x1e0a('0x11')](this['email'])[a9_0x1e0a('0x12')](a9_0x1e0a('0x13'));return a9_0x1e0a('0x14')+_0x5c2e80+a9_0x1e0a('0x15')+_0x4409b7+a9_0x1e0a('0xe');};const User=mongoose_1[a9_0x1e0a('0x7')][a9_0x1e0a('0x16')](a9_0x1e0a('0x17'),userSchema);exports[a9_0x1e0a('0x7')]=User;