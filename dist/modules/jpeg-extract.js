var a11_0x3b18=['request','from','abort','response','statusCode','data','length','slice','indexOf','push','concat'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a11_0x3b18,0x8f));var a11_0x3c52=function(_0x10b10a,_0x2cafc9){_0x10b10a=_0x10b10a-0x0;var _0x5b20ec=a11_0x3b18[_0x10b10a];return _0x5b20ec;};const request=require(a11_0x3c52('0x0'));module['exports']=(_0x574bb4,_0x2560a0)=>{return new Promise((_0x18d1ec,_0x209c8a)=>{const _0x4a1b03=Buffer[a11_0x3c52('0x1')]([0xff,0xd8]);const _0x33a4fe=Buffer['from']([0xff,0xd9]);const _0x210381=[];const _0x4de42b=request(_0x574bb4);_0x4de42b['on']('error',_0x15dee7=>{_0x4de42b[a11_0x3c52('0x2')]();if(_0x2560a0)_0x2560a0(_0x15dee7);else _0x209c8a(_0x15dee7);});_0x4de42b['on'](a11_0x3c52('0x3'),_0x2c25b1=>{if(_0x2c25b1[a11_0x3c52('0x4')]!==0xc8){_0x4de42b['abort']();if(_0x2560a0)_0x2560a0(_0x2c25b1);else _0x209c8a(new Error(_0x2c25b1));}_0x2c25b1['on'](a11_0x3c52('0x5'),_0x2e3f41=>{if(_0x210381[a11_0x3c52('0x6')]===0x0){const _0x2e2577=_0x2e3f41['indexOf'](_0x4a1b03);if(_0x2e2577>-0x1){const _0x2d33f5=_0x2e3f41[a11_0x3c52('0x7')](_0x2e2577,_0x2e3f41[a11_0x3c52('0x6')]);_0x210381['push'](_0x2d33f5);}}else if(_0x2e3f41[a11_0x3c52('0x8')](_0x33a4fe)!=-0x1){const _0x17f66d=_0x2e3f41[a11_0x3c52('0x8')](_0x33a4fe)+0x2;const _0x2d33f5=_0x2e3f41[a11_0x3c52('0x7')](0x0,_0x17f66d);_0x210381[a11_0x3c52('0x9')](_0x2d33f5);const _0x421416=Buffer[a11_0x3c52('0xa')](_0x210381);_0x4de42b[a11_0x3c52('0x2')]();if(_0x2560a0)_0x2560a0(undefined,_0x421416);_0x18d1ec(_0x421416);}else{_0x210381['push'](_0x2e3f41);}});});});};