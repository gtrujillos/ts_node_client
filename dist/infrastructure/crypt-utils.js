var a7_0x1cf1=['decrypt','createDecipher','default','defineProperty','__esModule','crypto','aes192','W\x22GT6toXTn-1G<Qw+=zey;vB','createCipher','update','utf8','hex','final'];(function(_0x5af19b,_0x4b3f24){var _0x5896b8=function(_0x1b2bfa){while(--_0x1b2bfa){_0x5af19b['push'](_0x5af19b['shift']());}};_0x5896b8(++_0x4b3f24);}(a7_0x1cf1,0x1f1));var a7_0x5aec=function(_0x110375,_0x3a8152){_0x110375=_0x110375-0x0;var _0x1105fa=a7_0x1cf1[_0x110375];return _0x1105fa;};'use strict';Object[a7_0x5aec('0x0')](exports,a7_0x5aec('0x1'),{'value':!![]});const crypto=require(a7_0x5aec('0x2')),algorithm=a7_0x5aec('0x3'),password=a7_0x5aec('0x4');const bcrypt=require('bcryptjs');const saltRounds=0xa;class CryptUtils{static['encrypt'](_0xeae3b6){const _0x3f8398=crypto[a7_0x5aec('0x5')](algorithm,password);let _0x417d7a=_0x3f8398[a7_0x5aec('0x6')](_0xeae3b6,a7_0x5aec('0x7'),a7_0x5aec('0x8'));_0x417d7a+=_0x3f8398[a7_0x5aec('0x9')]('hex');return _0x417d7a;}static[a7_0x5aec('0xa')](_0x350cd3){const _0x3d0bad=crypto[a7_0x5aec('0xb')](algorithm,password);let _0x4c34bd=_0x3d0bad[a7_0x5aec('0x6')](_0x350cd3,'hex','utf8');_0x4c34bd+=_0x3d0bad[a7_0x5aec('0x9')](a7_0x5aec('0x7'));return _0x4c34bd;}}exports[a7_0x5aec('0xc')]=CryptUtils;