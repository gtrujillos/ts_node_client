var a2_0x3eb6=['create','countingDate','ASC','getPassCountingByDay','query','startDate','findAll','sum','amount','total','params','literal','month','endDate','DATE_FORMAT','col','%Y-%m-%d\x20%H:00','countingDateShort','gte','direction','HOUR','DAY','YEAR','getFacebook','find','kind','facebook','setAccessToken','accessToken','user','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','api/facebook','Facebook\x20API','__importDefault','__esModule','defineProperty','ftp','sequelize','setSequelize','getApi','render','api/index','API\x20Examples','syncFtp','log','connecting','default','ready','connected','list','name','endsWith','models','report_files','findOrCreate','spread','push','json','error','connect','ftp.vivotek.com','ipd','downloadFtp','findOne','then','connected:','fileName','get','media/','pipe','createWriteStream','status','save','Downloaded:\x20','processFtp','Data','Out','parse','EndTime','pass_counting'];(function(_0x554843,_0x43ce31){var _0x247993=function(_0x577458){while(--_0x577458){_0x554843['push'](_0x554843['shift']());}};_0x247993(++_0x43ce31);}(a2_0x3eb6,0xc1));var a2_0x4e54=function(_0x3fcb45,_0x58d233){_0x3fcb45=_0x3fcb45-0x0;var _0x2e5d53=a2_0x3eb6[_0x3fcb45];return _0x2e5d53;};'use strict';var __importDefault=this&&this[a2_0x4e54('0x0')]||function(_0x4d6bce){return _0x4d6bce&&_0x4d6bce[a2_0x4e54('0x1')]?_0x4d6bce:{'default':_0x4d6bce};};Object[a2_0x4e54('0x2')](exports,a2_0x4e54('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require('fbgraph'));const ftp_1=__importDefault(require(a2_0x4e54('0x3')));const fs_1=__importDefault(require('fs'));exports[a2_0x4e54('0x4')]='';function setSequelize(_0x418030){exports[a2_0x4e54('0x4')]=_0x418030;}exports[a2_0x4e54('0x5')]=setSequelize;exports[a2_0x4e54('0x6')]=(_0x47af93,_0x42cbac)=>{_0x42cbac[a2_0x4e54('0x7')](a2_0x4e54('0x8'),{'title':a2_0x4e54('0x9')});};exports[a2_0x4e54('0xa')]=(_0x176418,_0x38eee7)=>{console[a2_0x4e54('0xb')](a2_0x4e54('0xc'));const _0x65a0b6=[];const _0x3304f9=new ftp_1[(a2_0x4e54('0xd'))]();_0x3304f9['on'](a2_0x4e54('0xe'),function(){console[a2_0x4e54('0xb')](a2_0x4e54('0xf'));_0x3304f9[a2_0x4e54('0x10')]('colombia',![],function(_0xab6742,_0xb3557a){if(_0xab6742){}else{for(const _0x14ba9c of _0xb3557a){console[a2_0x4e54('0xb')]('Downloading:\x20'+_0x14ba9c[a2_0x4e54('0x11')]);if(_0x14ba9c['name'][a2_0x4e54('0x12')]('json')){exports[a2_0x4e54('0x4')][a2_0x4e54('0x13')][a2_0x4e54('0x14')][a2_0x4e54('0x15')]({'where':{'fileName':_0x14ba9c[a2_0x4e54('0x11')]}})[a2_0x4e54('0x16')]((_0x2e8187,_0x3da618)=>{if(_0x3da618){console[a2_0x4e54('0xb')](_0x14ba9c[a2_0x4e54('0x11')]);_0x65a0b6[a2_0x4e54('0x17')](_0x2e8187);}});}}}_0x38eee7[a2_0x4e54('0x18')]({'data':_0x65a0b6});});});_0x3304f9['on'](a2_0x4e54('0x19'),function(_0x196632){_0x38eee7[a2_0x4e54('0x18')]({'message':_0x196632});});_0x3304f9[a2_0x4e54('0x1a')]({'host':a2_0x4e54('0x1b'),'port':0x15,'user':'ipd','password':a2_0x4e54('0x1c')});};exports[a2_0x4e54('0x1d')]=(_0x513b13,_0x18d38f)=>{exports[a2_0x4e54('0x4')]['models'][a2_0x4e54('0x14')][a2_0x4e54('0x1e')]({'where':{'status':null}})[a2_0x4e54('0x1f')](_0x5210e5=>{if(_0x5210e5){const _0x40167d=new ftp_1[(a2_0x4e54('0xd'))]();_0x40167d['on'](a2_0x4e54('0xe'),function(){console['log'](a2_0x4e54('0x20')+_0x5210e5[a2_0x4e54('0x21')]);_0x40167d[a2_0x4e54('0x22')]('colombia/'+_0x5210e5[a2_0x4e54('0x21')],function(_0x5aecbb,_0x225e33){_0x40167d['end']();if(_0x5aecbb){}else{const _0x3ae7c3=a2_0x4e54('0x23')+_0x5210e5[a2_0x4e54('0x21')]+'.txt';_0x225e33[a2_0x4e54('0x24')](fs_1['default'][a2_0x4e54('0x25')](_0x3ae7c3));_0x5210e5[a2_0x4e54('0x26')]=0x1;_0x5210e5[a2_0x4e54('0x27')]();console[a2_0x4e54('0xb')](a2_0x4e54('0x28')+_0x5210e5[a2_0x4e54('0x21')]);}});});_0x40167d['on'](a2_0x4e54('0x19'),function(_0x5e5c1a){_0x18d38f['json']({'message':_0x5e5c1a});});_0x40167d[a2_0x4e54('0x1a')]({'host':a2_0x4e54('0x1b'),'port':0x15,'user':a2_0x4e54('0x1c'),'password':a2_0x4e54('0x1c')});_0x18d38f[a2_0x4e54('0x18')]({'data':_0x5210e5[a2_0x4e54('0x21')]});}else{_0x18d38f[a2_0x4e54('0x18')]({'data':[]});}});};exports[a2_0x4e54('0x29')]=(_0x163904,_0x5c4d17)=>{exports[a2_0x4e54('0x4')][a2_0x4e54('0x13')][a2_0x4e54('0x14')][a2_0x4e54('0x1e')]({'where':{'status':0x1}})[a2_0x4e54('0x1f')](_0x2aa5a8=>{if(_0x2aa5a8){const _0x3f78fa=a2_0x4e54('0x23')+_0x2aa5a8['fileName']+'.txt';fs_1['default']['readFile'](_0x3f78fa,'utf8',function(_0x33f2b9,_0x4e87cd){if(_0x33f2b9){_0x2aa5a8[a2_0x4e54('0x26')]=null;}else{try{const _0x156612=JSON['parse'](_0x4e87cd);for(const _0x3ef553 of _0x156612[a2_0x4e54('0x2a')][0x0]['CountingInfo']){const _0xa318ab=_0x3ef553['In'];const _0x4c01d9=_0x3ef553[a2_0x4e54('0x2b')];const _0x3cf290=Date[a2_0x4e54('0x2c')](_0x3ef553[a2_0x4e54('0x2d')]);if(_0xa318ab>0x0){exports['sequelize'][a2_0x4e54('0x13')][a2_0x4e54('0x2e')][a2_0x4e54('0x2f')]({'reportFileId':_0x2aa5a8['id'],'amount':_0xa318ab,'countingDate':_0x3cf290});}if(_0x4c01d9>0x0){exports[a2_0x4e54('0x4')][a2_0x4e54('0x13')][a2_0x4e54('0x2e')][a2_0x4e54('0x2f')]({'reportFileId':_0x2aa5a8['id'],'amount':_0x4c01d9*-0x1,'countingDate':_0x3cf290});}}_0x2aa5a8[a2_0x4e54('0x26')]=0x2;}catch(_0x19f43d){_0x2aa5a8[a2_0x4e54('0x26')]=null;}}_0x2aa5a8[a2_0x4e54('0x27')]();});_0x5c4d17['json']({'data':_0x2aa5a8['fileName']});}else{_0x5c4d17[a2_0x4e54('0x18')]({'data':[]});}});};exports['getPassCounting']=(_0x2a3bcf,_0xab3dd8)=>{exports[a2_0x4e54('0x4')][a2_0x4e54('0x13')]['pass_counting']['findAll']({'where':{'amount':{[exports['sequelize']['Op']['gt']]:0x0}},'order':[[a2_0x4e54('0x30'),a2_0x4e54('0x31')]]})['then'](_0x27c57c=>{_0xab3dd8[a2_0x4e54('0x18')]({'data':_0x27c57c});});};exports[a2_0x4e54('0x32')]=(_0x574567,_0x5a6f06)=>{const _0x39807c=_0x574567[a2_0x4e54('0x33')]['month'];const _0x52933f=_0x574567['query'][a2_0x4e54('0x34')];const _0x72894b=_0x574567[a2_0x4e54('0x33')]['endDate'];exports[a2_0x4e54('0x4')][a2_0x4e54('0x13')][a2_0x4e54('0x2e')][a2_0x4e54('0x35')]({'attributes':['countingDate',[exports[a2_0x4e54('0x4')]['fn'](a2_0x4e54('0x36'),exports[a2_0x4e54('0x4')]['col'](a2_0x4e54('0x37'))),a2_0x4e54('0x38')]],'where':{'countingDate':{[exports[a2_0x4e54('0x4')]['Op']['gte']]:_0x52933f,[exports[a2_0x4e54('0x4')]['Op']['lt']]:_0x72894b},'amount':_0x574567[a2_0x4e54('0x39')]['direction']=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a2_0x4e54('0x4')]['Op']['lt']]:0x0}},'group':[exports[a2_0x4e54('0x4')][a2_0x4e54('0x3a')]('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[['countingDate',a2_0x4e54('0x31')]]})['then'](_0xe606f4=>{_0x5a6f06['json']({'data':_0xe606f4});});};exports['getPassCountingByHour']=(_0x383259,_0x579d0f)=>{const _0x18ef10=_0x383259[a2_0x4e54('0x33')][a2_0x4e54('0x3b')];const _0x2c27ae=_0x383259[a2_0x4e54('0x33')][a2_0x4e54('0x34')];const _0x1ab88=_0x383259[a2_0x4e54('0x33')][a2_0x4e54('0x3c')];exports['sequelize'][a2_0x4e54('0x13')]['pass_counting'][a2_0x4e54('0x35')]({'attributes':[a2_0x4e54('0x30'),[exports[a2_0x4e54('0x4')]['fn'](a2_0x4e54('0x3d'),exports[a2_0x4e54('0x4')][a2_0x4e54('0x3e')](a2_0x4e54('0x30')),a2_0x4e54('0x3f')),a2_0x4e54('0x40')],[exports['sequelize']['fn'](a2_0x4e54('0x36'),exports[a2_0x4e54('0x4')]['col']('amount')),a2_0x4e54('0x38')]],'where':{'countingDate':{[exports[a2_0x4e54('0x4')]['Op'][a2_0x4e54('0x41')]]:_0x2c27ae,[exports['sequelize']['Op']['lt']]:_0x1ab88},'amount':_0x383259['params'][a2_0x4e54('0x42')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports[a2_0x4e54('0x4')]['Op']['lt']]:0x0}},'group':[exports[a2_0x4e54('0x4')]['fn'](a2_0x4e54('0x43'),exports[a2_0x4e54('0x4')][a2_0x4e54('0x3e')](a2_0x4e54('0x30'))),exports[a2_0x4e54('0x4')]['fn'](a2_0x4e54('0x44'),exports[a2_0x4e54('0x4')][a2_0x4e54('0x3e')](a2_0x4e54('0x30'))),exports[a2_0x4e54('0x4')]['fn']('MONTH',exports[a2_0x4e54('0x4')][a2_0x4e54('0x3e')](a2_0x4e54('0x30'))),exports[a2_0x4e54('0x4')]['fn'](a2_0x4e54('0x45'),exports['sequelize'][a2_0x4e54('0x3e')](a2_0x4e54('0x30')))],'order':[[a2_0x4e54('0x30'),'ASC']]})[a2_0x4e54('0x1f')](_0x4f57d5=>{_0x579d0f[a2_0x4e54('0x18')]({'data':_0x4f57d5});});};exports[a2_0x4e54('0x46')]=(_0x34b7aa,_0x579bec,_0xc4a51b)=>{const _0x4c5820=_0x34b7aa['user']['tokens'][a2_0x4e54('0x47')](_0x4c5820=>_0x4c5820[a2_0x4e54('0x48')]===a2_0x4e54('0x49'));fbgraph_1[a2_0x4e54('0xd')][a2_0x4e54('0x4a')](_0x4c5820[a2_0x4e54('0x4b')]);fbgraph_1[a2_0x4e54('0xd')][a2_0x4e54('0x22')](_0x34b7aa[a2_0x4e54('0x4c')][a2_0x4e54('0x49')]+a2_0x4e54('0x4d'),(_0x382d11,_0x327365)=>{if(_0x382d11){return _0xc4a51b(_0x382d11);}_0x579bec[a2_0x4e54('0x7')](a2_0x4e54('0x4e'),{'title':a2_0x4e54('0x4f'),'profile':_0x327365});});};