var a9_0x5158=['md5','update','digest','hex','https://gravatar.com/avatar/','?s=','model','User','__esModule','defineProperty','bcrypt-nodejs','crypto','mongoose','default','Schema','pre','save','password','genSalt','compare','methods','comparePassword','gravatar','email','https://gravatar.com/avatar/?s=','&d=retro'];(function(_0x145214,_0x1e5a67){var _0x16fe03=function(_0x533e41){while(--_0x533e41){_0x145214['push'](_0x145214['shift']());}};_0x16fe03(++_0x1e5a67);}(a9_0x5158,0x1dc));var a9_0x3b75=function(_0x475ac5,_0x45a7f7){_0x475ac5=_0x475ac5-0x0;var _0x422a40=a9_0x5158[_0x475ac5];return _0x422a40;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x579fb6){return _0x579fb6&&_0x579fb6[a9_0x3b75('0x0')]?_0x579fb6:{'default':_0x579fb6};};Object[a9_0x3b75('0x1')](exports,a9_0x3b75('0x0'),{'value':!![]});const bcrypt_nodejs_1=__importDefault(require(a9_0x3b75('0x2')));const crypto_1=__importDefault(require(a9_0x3b75('0x3')));const mongoose_1=__importDefault(require(a9_0x3b75('0x4')));const userSchema=new mongoose_1[(a9_0x3b75('0x5'))][(a9_0x3b75('0x6'))]({'email':{'type':String,'unique':!![]},'password':String,'passwordResetToken':String,'passwordResetExpires':Date,'facebook':String,'twitter':String,'google':String,'tokens':Array,'profile':{'name':String,'gender':String,'location':String,'website':String,'picture':String}},{'timestamps':!![]});userSchema[a9_0x3b75('0x7')](a9_0x3b75('0x8'),function save(_0x32b438){const _0x85141=this;if(!_0x85141['isModified'](a9_0x3b75('0x9'))){return _0x32b438();}bcrypt_nodejs_1[a9_0x3b75('0x5')][a9_0x3b75('0xa')](0xa,(_0x49a534,_0xfd8cf5)=>{if(_0x49a534){return _0x32b438(_0x49a534);}bcrypt_nodejs_1[a9_0x3b75('0x5')]['hash'](_0x85141[a9_0x3b75('0x9')],_0xfd8cf5,undefined,(_0x49a534,_0x978c8d)=>{if(_0x49a534){return _0x32b438(_0x49a534);}_0x85141['password']=_0x978c8d;_0x32b438();});});});const comparePassword=function(_0x5a566a,_0x36b8d2){bcrypt_nodejs_1[a9_0x3b75('0x5')][a9_0x3b75('0xb')](_0x5a566a,this[a9_0x3b75('0x9')],(_0x18779e,_0x1ab9cf)=>{_0x36b8d2(_0x18779e,_0x1ab9cf);});};userSchema[a9_0x3b75('0xc')][a9_0x3b75('0xd')]=comparePassword;userSchema['methods'][a9_0x3b75('0xe')]=function(_0x2477ed){if(!_0x2477ed){_0x2477ed=0xc8;}if(!this[a9_0x3b75('0xf')]){return a9_0x3b75('0x10')+_0x2477ed+a9_0x3b75('0x11');}const _0x11d054=crypto_1[a9_0x3b75('0x5')]['createHash'](a9_0x3b75('0x12'))[a9_0x3b75('0x13')](this[a9_0x3b75('0xf')])[a9_0x3b75('0x14')](a9_0x3b75('0x15'));return a9_0x3b75('0x16')+_0x11d054+a9_0x3b75('0x17')+_0x2477ed+a9_0x3b75('0x11');};const User=mongoose_1[a9_0x3b75('0x5')][a9_0x3b75('0x18')](a9_0x3b75('0x19'),userSchema);exports[a9_0x3b75('0x5')]=User;