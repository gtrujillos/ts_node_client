var a11_0x13fd=['slice','concat','request','exports','from','error','response','statusCode','abort','data','length','indexOf','push'];(function(_0x2c2e98,_0x1f3be4){var _0x3e5c4c=function(_0x131408){while(--_0x131408){_0x2c2e98['push'](_0x2c2e98['shift']());}};_0x3e5c4c(++_0x1f3be4);}(a11_0x13fd,0x1af));var a11_0x2496=function(_0xc5f10c,_0x1a4d04){_0xc5f10c=_0xc5f10c-0x0;var _0x48327f=a11_0x13fd[_0xc5f10c];return _0x48327f;};const request=require(a11_0x2496('0x0'));module[a11_0x2496('0x1')]=(_0x5b0cfc,_0x3fd15a)=>{return new Promise((_0x1feb14,_0x580850)=>{const _0x1863c0=Buffer[a11_0x2496('0x2')]([0xff,0xd8]);const _0x337269=Buffer['from']([0xff,0xd9]);const _0x597494=[];const _0x3a9f12=request(_0x5b0cfc);_0x3a9f12['on'](a11_0x2496('0x3'),_0x5d1a05=>{_0x3a9f12['abort']();if(_0x3fd15a)_0x3fd15a(_0x5d1a05);else _0x580850(_0x5d1a05);});_0x3a9f12['on'](a11_0x2496('0x4'),_0x5dcee4=>{if(_0x5dcee4[a11_0x2496('0x5')]!==0xc8){_0x3a9f12[a11_0x2496('0x6')]();if(_0x3fd15a)_0x3fd15a(_0x5dcee4);else _0x580850(new Error(_0x5dcee4));}_0x5dcee4['on'](a11_0x2496('0x7'),_0x3cd63c=>{if(_0x597494[a11_0x2496('0x8')]===0x0){const _0x25ff3b=_0x3cd63c[a11_0x2496('0x9')](_0x1863c0);if(_0x25ff3b>-0x1){const _0x291c68=_0x3cd63c['slice'](_0x25ff3b,_0x3cd63c[a11_0x2496('0x8')]);_0x597494[a11_0x2496('0xa')](_0x291c68);}}else if(_0x3cd63c[a11_0x2496('0x9')](_0x337269)!=-0x1){const _0x3b8c0c=_0x3cd63c['indexOf'](_0x337269)+0x2;const _0x291c68=_0x3cd63c[a11_0x2496('0xb')](0x0,_0x3b8c0c);_0x597494[a11_0x2496('0xa')](_0x291c68);const _0x253150=Buffer[a11_0x2496('0xc')](_0x597494);_0x3a9f12[a11_0x2496('0x6')]();if(_0x3fd15a)_0x3fd15a(undefined,_0x253150);_0x1feb14(_0x253150);}else{_0x597494['push'](_0x3cd63c);}});});});};