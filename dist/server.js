var a15_0x54d8=['\x20\x20Press\x20CTRL-C\x20to\x20stop\x0a','http://camera.nton.lviv.ua/mjpg/video.mjpg','pipe','error','error\x20handling\x20is\x20needed\x20because\x20pipe\x20will\x20break\x20once\x20pipe.end()\x20is\x20called','end','__importDefault','__esModule','defineProperty','./services/mainService','./app','http','MainService','default','init','use','listen','get','\x20\x20App\x20is\x20running\x20at\x20http://localhost:%d\x20in\x20%s\x20mode','port','env','log'];(function(_0x1fd790,_0x16e325){var _0xc7dded=function(_0x484528){while(--_0x484528){_0x1fd790['push'](_0x1fd790['shift']());}};_0xc7dded(++_0x16e325);}(a15_0x54d8,0x74));var a15_0x267b=function(_0x1b161d,_0x175523){_0x1b161d=_0x1b161d-0x0;var _0x5dc686=a15_0x54d8[_0x1b161d];return _0x5dc686;};'use strict';var __importDefault=this&&this[a15_0x267b('0x0')]||function(_0x281f80){return _0x281f80&&_0x281f80[a15_0x267b('0x1')]?_0x281f80:{'default':_0x281f80};};Object[a15_0x267b('0x2')](exports,a15_0x267b('0x1'),{'value':!![]});const errorhandler_1=__importDefault(require('errorhandler'));const mainService_1=require(a15_0x267b('0x3'));const app_1=__importDefault(require(a15_0x267b('0x4')));const http_1=require(a15_0x267b('0x5'));const mainService=new mainService_1[(a15_0x267b('0x6'))](app_1[a15_0x267b('0x7')]);mainService[a15_0x267b('0x8')]();app_1[a15_0x267b('0x7')][a15_0x267b('0x9')](errorhandler_1[a15_0x267b('0x7')]());const server=app_1[a15_0x267b('0x7')][a15_0x267b('0xa')](app_1[a15_0x267b('0x7')][a15_0x267b('0xb')]('port'),()=>{console['log'](a15_0x267b('0xc'),app_1[a15_0x267b('0x7')]['get'](a15_0x267b('0xd')),app_1[a15_0x267b('0x7')][a15_0x267b('0xb')](a15_0x267b('0xe')));console[a15_0x267b('0xf')](a15_0x267b('0x10'));});app_1['default']['get']('/stream1',function(_0x5165eb,_0x3d3329){const _0x14db80=a15_0x267b('0x11');const _0x13b2fa=http_1['request'](_0x14db80)[a15_0x267b('0x12')](_0x3d3329);_0x13b2fa['on'](a15_0x267b('0x13'),function(){console[a15_0x267b('0xf')](a15_0x267b('0x14'));});_0x5165eb['on'](a15_0x267b('0x15'),function(){_0x13b2fa['end']();});_0x5165eb['on']('close',function(){_0x13b2fa[a15_0x267b('0x15')]();});});exports[a15_0x267b('0x7')]=server;