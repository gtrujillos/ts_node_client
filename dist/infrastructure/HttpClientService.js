var a6_0x17a6=['env','then','HttpClientService','defineProperty','__esModule','request-promise-native','get','Bearer\x20','API_TOKEN','catch','post'];(function(_0x13fc15,_0x286bfb){var _0x426b4f=function(_0x1069b8){while(--_0x1069b8){_0x13fc15['push'](_0x13fc15['shift']());}};_0x426b4f(++_0x286bfb);}(a6_0x17a6,0x116));var a6_0x5a24=function(_0x1e552e,_0x491414){_0x1e552e=_0x1e552e-0x0;var _0x1445c1=a6_0x17a6[_0x1e552e];return _0x1445c1;};'use strict';Object[a6_0x5a24('0x0')](exports,a6_0x5a24('0x1'),{'value':!![]});const rp=require(a6_0x5a24('0x2'));class HttpClientService{constructor(){}[a6_0x5a24('0x3')](_0x17fed4,_0x4e8ac2,_0xc942de=!![]){const _0x59cee5={'method':'GET','uri':_0x17fed4,'json':!![],'headers':{'Authorization':a6_0x5a24('0x4')+process['env'][a6_0x5a24('0x5')]}};return rp(_0x59cee5)['then'](function(_0x57a56e){return _0x57a56e;})[a6_0x5a24('0x6')](function(_0x63b6ff){return{'error':_0x63b6ff};});}[a6_0x5a24('0x7')](_0x514a13,_0x1ecbb1,_0x5db63c,_0x19f4c1=null){const _0x18ea46={'method':'POST','uri':_0x514a13,'body':_0x1ecbb1,'json':!![]};if(_0x19f4c1){_0x18ea46['auth']=_0x19f4c1;}else{_0x18ea46['headers']={'Authorization':a6_0x5a24('0x4')+process[a6_0x5a24('0x8')][a6_0x5a24('0x5')]};}return rp(_0x18ea46)[a6_0x5a24('0x9')](function(_0x4d3b0d){return _0x4d3b0d;})['catch'](function(_0x39405c){return _0x39405c;});}}exports[a6_0x5a24('0xa')]=HttpClientService;