var a11_0x164d=['error','abort','length','indexOf','push','slice','exports','from'];(function(_0x229cb9,_0x5e0f1c){var _0x3cfffa=function(_0xaa920){while(--_0xaa920){_0x229cb9['push'](_0x229cb9['shift']());}};_0x3cfffa(++_0x5e0f1c);}(a11_0x164d,0x106));var a11_0x4d2a=function(_0x5699f6,_0x3ec122){_0x5699f6=_0x5699f6-0x0;var _0x3027bd=a11_0x164d[_0x5699f6];return _0x3027bd;};const request=require('request');module[a11_0x4d2a('0x0')]=(_0x1d1b9c,_0x16908a)=>{return new Promise((_0x3d58e8,_0x185394)=>{const _0x460364=Buffer[a11_0x4d2a('0x1')]([0xff,0xd8]);const _0x47ad88=Buffer['from']([0xff,0xd9]);const _0x25ec2b=[];const _0xd1e961=request(_0x1d1b9c);_0xd1e961['on'](a11_0x4d2a('0x2'),_0x3c08cd=>{_0xd1e961['abort']();if(_0x16908a)_0x16908a(_0x3c08cd);else _0x185394(_0x3c08cd);});_0xd1e961['on']('response',_0x18a927=>{if(_0x18a927['statusCode']!==0xc8){_0xd1e961[a11_0x4d2a('0x3')]();if(_0x16908a)_0x16908a(_0x18a927);else _0x185394(new Error(_0x18a927));}_0x18a927['on']('data',_0x405457=>{if(_0x25ec2b[a11_0x4d2a('0x4')]===0x0){const _0x14da41=_0x405457[a11_0x4d2a('0x5')](_0x460364);if(_0x14da41>-0x1){const _0x1d52b9=_0x405457['slice'](_0x14da41,_0x405457['length']);_0x25ec2b[a11_0x4d2a('0x6')](_0x1d52b9);}}else if(_0x405457['indexOf'](_0x47ad88)!=-0x1){const _0x22302a=_0x405457[a11_0x4d2a('0x5')](_0x47ad88)+0x2;const _0x1d52b9=_0x405457[a11_0x4d2a('0x7')](0x0,_0x22302a);_0x25ec2b[a11_0x4d2a('0x6')](_0x1d52b9);const _0x169b0e=Buffer['concat'](_0x25ec2b);_0xd1e961['abort']();if(_0x16908a)_0x16908a(undefined,_0x169b0e);_0x3d58e8(_0x169b0e);}else{_0x25ec2b[a11_0x4d2a('0x6')](_0x405457);}});});});};