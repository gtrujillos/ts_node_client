var a7_0x2e7f=['final','defineProperty','__esModule','crypto','W\x22GT6toXTn-1G<Qw+=zey;vB','bcryptjs','createCipher','update','utf8','hex'];(function(_0x2094dd,_0x34e824){var _0x35d01e=function(_0x3c5eb9){while(--_0x3c5eb9){_0x2094dd['push'](_0x2094dd['shift']());}};_0x35d01e(++_0x34e824);}(a7_0x2e7f,0x14b));var a7_0x5153=function(_0x5903c5,_0x165ecb){_0x5903c5=_0x5903c5-0x0;var _0x4dad07=a7_0x2e7f[_0x5903c5];return _0x4dad07;};'use strict';Object[a7_0x5153('0x0')](exports,a7_0x5153('0x1'),{'value':!![]});const crypto=require(a7_0x5153('0x2')),algorithm='aes192',password=a7_0x5153('0x3');const bcrypt=require(a7_0x5153('0x4'));const saltRounds=0xa;class CryptUtils{static['encrypt'](_0x512236){const _0x181138=crypto[a7_0x5153('0x5')](algorithm,password);let _0x5001d5=_0x181138[a7_0x5153('0x6')](_0x512236,a7_0x5153('0x7'),a7_0x5153('0x8'));_0x5001d5+=_0x181138[a7_0x5153('0x9')](a7_0x5153('0x8'));return _0x5001d5;}static['decrypt'](_0xe6d682){const _0x232654=crypto['createDecipher'](algorithm,password);let _0x53a5fe=_0x232654[a7_0x5153('0x6')](_0xe6d682,a7_0x5153('0x8'),a7_0x5153('0x7'));_0x53a5fe+=_0x232654['final'](a7_0x5153('0x7'));return _0x53a5fe;}}exports['default']=CryptUtils;