var a7_0x6ec6=['createCipher','update','utf8','final','hex','decrypt','createDecipher','default','defineProperty','__esModule','aes192','W\x22GT6toXTn-1G<Qw+=zey;vB','encrypt'];(function(_0x27c379,_0x3b013d){var _0xc89f4b=function(_0x31bf58){while(--_0x31bf58){_0x27c379['push'](_0x27c379['shift']());}};_0xc89f4b(++_0x3b013d);}(a7_0x6ec6,0x133));var a7_0x4b8b=function(_0x58d1e3,_0x9d9a7){_0x58d1e3=_0x58d1e3-0x0;var _0x49d0d5=a7_0x6ec6[_0x58d1e3];return _0x49d0d5;};'use strict';Object[a7_0x4b8b('0x0')](exports,a7_0x4b8b('0x1'),{'value':!![]});const crypto=require('crypto'),algorithm=a7_0x4b8b('0x2'),password=a7_0x4b8b('0x3');const bcrypt=require('bcryptjs');const saltRounds=0xa;class CryptUtils{static[a7_0x4b8b('0x4')](_0x4481b6){const _0x25d18e=crypto[a7_0x4b8b('0x5')](algorithm,password);let _0x563e8b=_0x25d18e[a7_0x4b8b('0x6')](_0x4481b6,a7_0x4b8b('0x7'),'hex');_0x563e8b+=_0x25d18e[a7_0x4b8b('0x8')](a7_0x4b8b('0x9'));return _0x563e8b;}static[a7_0x4b8b('0xa')](_0x52eb5f){const _0x398a1d=crypto[a7_0x4b8b('0xb')](algorithm,password);let _0x1dbf76=_0x398a1d[a7_0x4b8b('0x6')](_0x52eb5f,a7_0x4b8b('0x9'),a7_0x4b8b('0x7'));_0x1dbf76+=_0x398a1d[a7_0x4b8b('0x8')](a7_0x4b8b('0x7'));return _0x1dbf76;}}exports[a7_0x4b8b('0xc')]=CryptUtils;