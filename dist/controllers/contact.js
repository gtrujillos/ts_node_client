var a3_0x3df5=['errors','redirect','/contact','name','body','Contact\x20Form','success','Email\x20has\x20been\x20sent\x20successfully!','__importDefault','defineProperty','__esModule','nodemailer','default','createTransport','env','SENDGRID_PASSWORD','render','contact','Contact','notEmpty','email','Email\x20is\x20not\x20valid','isEmail','message','Message\x20cannot\x20be\x20blank','flash'];(function(_0x1b1c5c,_0x19fbf1){var _0x4b6ee4=function(_0x489510){while(--_0x489510){_0x1b1c5c['push'](_0x1b1c5c['shift']());}};_0x4b6ee4(++_0x19fbf1);}(a3_0x3df5,0x70));var a3_0x3759=function(_0x7e0dfa,_0xccd90d){_0x7e0dfa=_0x7e0dfa-0x0;var _0x459a16=a3_0x3df5[_0x7e0dfa];return _0x459a16;};'use strict';var __importDefault=this&&this[a3_0x3759('0x0')]||function(_0x4be9ac){return _0x4be9ac&&_0x4be9ac['__esModule']?_0x4be9ac:{'default':_0x4be9ac};};Object[a3_0x3759('0x1')](exports,a3_0x3759('0x2'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x3759('0x3')));const transporter=nodemailer_1[a3_0x3759('0x4')][a3_0x3759('0x5')]({'service':'SendGrid','auth':{'user':process[a3_0x3759('0x6')]['SENDGRID_USER'],'pass':process['env'][a3_0x3759('0x7')]}});exports['getContact']=(_0x3d68a5,_0x4df618)=>{_0x4df618[a3_0x3759('0x8')](a3_0x3759('0x9'),{'title':a3_0x3759('0xa')});};exports['postContact']=(_0x54da8f,_0x467848)=>{_0x54da8f['assert']('name','Name\x20cannot\x20be\x20blank')[a3_0x3759('0xb')]();_0x54da8f['assert'](a3_0x3759('0xc'),a3_0x3759('0xd'))[a3_0x3759('0xe')]();_0x54da8f['assert'](a3_0x3759('0xf'),a3_0x3759('0x10'))['notEmpty']();const _0x515f70=_0x54da8f['validationErrors']();if(_0x515f70){_0x54da8f[a3_0x3759('0x11')](a3_0x3759('0x12'),_0x515f70);return _0x467848[a3_0x3759('0x13')](a3_0x3759('0x14'));}const _0x5f51b0={'to':'your@email.com','from':_0x54da8f['body'][a3_0x3759('0x15')]+'\x20<'+_0x54da8f[a3_0x3759('0x16')]['email']+'>','subject':a3_0x3759('0x17'),'text':_0x54da8f[a3_0x3759('0x16')][a3_0x3759('0xf')]};transporter['sendMail'](_0x5f51b0,_0x192ec5=>{if(_0x192ec5){_0x54da8f[a3_0x3759('0x11')](a3_0x3759('0x12'),{'msg':_0x192ec5[a3_0x3759('0xf')]});return _0x467848[a3_0x3759('0x13')](a3_0x3759('0x14'));}_0x54da8f[a3_0x3759('0x11')](a3_0x3759('0x18'),{'msg':a3_0x3759('0x19')});_0x467848['redirect'](a3_0x3759('0x14'));});};