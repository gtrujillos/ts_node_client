var a7_0x5f05=['bcryptjs','encrypt','createCipher','hex','decrypt','createDecipher','utf8','default','aes192'];(function(_0x47a438,_0x2ac83c){var _0x11a7ce=function(_0x2536d7){while(--_0x2536d7){_0x47a438['push'](_0x47a438['shift']());}};_0x11a7ce(++_0x2ac83c);}(a7_0x5f05,0xd7));var a7_0x2760=function(_0x48d515,_0x53afa8){_0x48d515=_0x48d515-0x0;var _0x5f41f=a7_0x5f05[_0x48d515];return _0x5f41f;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const crypto=require('crypto'),algorithm=a7_0x2760('0x0'),password='W\x22GT6toXTn-1G<Qw+=zey;vB';const bcrypt=require(a7_0x2760('0x1'));const saltRounds=0xa;class CryptUtils{static[a7_0x2760('0x2')](_0x30595c){const _0x274849=crypto[a7_0x2760('0x3')](algorithm,password);let _0x1edc56=_0x274849['update'](_0x30595c,'utf8',a7_0x2760('0x4'));_0x1edc56+=_0x274849['final'](a7_0x2760('0x4'));return _0x1edc56;}static[a7_0x2760('0x5')](_0x4d1197){const _0x32246e=crypto[a7_0x2760('0x6')](algorithm,password);let _0xe06145=_0x32246e['update'](_0x4d1197,'hex',a7_0x2760('0x7'));_0xe06145+=_0x32246e['final'](a7_0x2760('0x7'));return _0xe06145;}}exports[a7_0x2760('0x8')]=CryptUtils;