var a3_0x46a9=['errors','redirect','/contact','your@email.com','body','Contact\x20Form','sendMail','success','Email\x20has\x20been\x20sent\x20successfully!','__esModule','nodemailer','default','createTransport','env','SENDGRID_USER','SENDGRID_PASSWORD','getContact','render','Contact','assert','name','Name\x20cannot\x20be\x20blank','notEmpty','email','Email\x20is\x20not\x20valid','isEmail','message','Message\x20cannot\x20be\x20blank','flash'];(function(_0x4e5754,_0x20bdab){var _0x44134d=function(_0x25bed2){while(--_0x25bed2){_0x4e5754['push'](_0x4e5754['shift']());}};_0x44134d(++_0x20bdab);}(a3_0x46a9,0x165));var a3_0x1e09=function(_0x33285c,_0x5b5232){_0x33285c=_0x33285c-0x0;var _0x208950=a3_0x46a9[_0x33285c];return _0x208950;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1d6cc0){return _0x1d6cc0&&_0x1d6cc0[a3_0x1e09('0x0')]?_0x1d6cc0:{'default':_0x1d6cc0};};Object['defineProperty'](exports,a3_0x1e09('0x0'),{'value':!![]});const nodemailer_1=__importDefault(require(a3_0x1e09('0x1')));const transporter=nodemailer_1[a3_0x1e09('0x2')][a3_0x1e09('0x3')]({'service':'SendGrid','auth':{'user':process[a3_0x1e09('0x4')][a3_0x1e09('0x5')],'pass':process[a3_0x1e09('0x4')][a3_0x1e09('0x6')]}});exports[a3_0x1e09('0x7')]=(_0x2316fd,_0x1a4d3e)=>{_0x1a4d3e[a3_0x1e09('0x8')]('contact',{'title':a3_0x1e09('0x9')});};exports['postContact']=(_0x90e1ec,_0x226a0c)=>{_0x90e1ec[a3_0x1e09('0xa')](a3_0x1e09('0xb'),a3_0x1e09('0xc'))[a3_0x1e09('0xd')]();_0x90e1ec['assert'](a3_0x1e09('0xe'),a3_0x1e09('0xf'))[a3_0x1e09('0x10')]();_0x90e1ec[a3_0x1e09('0xa')](a3_0x1e09('0x11'),a3_0x1e09('0x12'))[a3_0x1e09('0xd')]();const _0xd5f9d0=_0x90e1ec['validationErrors']();if(_0xd5f9d0){_0x90e1ec[a3_0x1e09('0x13')](a3_0x1e09('0x14'),_0xd5f9d0);return _0x226a0c[a3_0x1e09('0x15')](a3_0x1e09('0x16'));}const _0x2982a7={'to':a3_0x1e09('0x17'),'from':_0x90e1ec['body'][a3_0x1e09('0xb')]+'\x20<'+_0x90e1ec[a3_0x1e09('0x18')][a3_0x1e09('0xe')]+'>','subject':a3_0x1e09('0x19'),'text':_0x90e1ec[a3_0x1e09('0x18')][a3_0x1e09('0x11')]};transporter[a3_0x1e09('0x1a')](_0x2982a7,_0x5679e0=>{if(_0x5679e0){_0x90e1ec['flash'](a3_0x1e09('0x14'),{'msg':_0x5679e0['message']});return _0x226a0c[a3_0x1e09('0x15')](a3_0x1e09('0x16'));}_0x90e1ec['flash'](a3_0x1e09('0x1b'),{'msg':a3_0x1e09('0x1c')});_0x226a0c[a3_0x1e09('0x15')]('/contact');});};