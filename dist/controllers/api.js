var a2_0x50a3=['API\x20Examples','syncFtp','log','connecting','default','ready','list','colombia','name','endsWith','json','models','report_files','findOrCreate','push','error','connect','ipd','downloadFtp','connected:','fileName','get','colombia/','.txt','save','Downloaded:\x20','ftp.vivotek.com','then','media/','readFile','parse','CountingInfo','Out','EndTime','pass_counting','create','status','findAll','countingDate','ASC','query','startDate','sum','amount','gte','params','direction','getPassCountingByHour','month','col','%Y-%m-%d\x20%H:00','countingDateShort','total','HOUR','DAY','MONTH','YEAR','getFacebook','tokens','find','kind','facebook','setAccessToken','?fields=id,name,email,first_name,last_name,gender,link,locale,timezone','api/facebook','__importDefault','defineProperty','__esModule','fbgraph','ftp','sequelize','setSequelize','getApi','render','api/index'];(function(_0x22de6e,_0x46c1fc){var _0x1b9f15=function(_0x5dcbb1){while(--_0x5dcbb1){_0x22de6e['push'](_0x22de6e['shift']());}};_0x1b9f15(++_0x46c1fc);}(a2_0x50a3,0xd7));var a2_0x465c=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=a2_0x50a3[_0x3562b5];return _0x54d52d;};'use strict';var __importDefault=this&&this[a2_0x465c('0x0')]||function(_0x51298e){return _0x51298e&&_0x51298e['__esModule']?_0x51298e:{'default':_0x51298e};};Object[a2_0x465c('0x1')](exports,a2_0x465c('0x2'),{'value':!![]});const fbgraph_1=__importDefault(require(a2_0x465c('0x3')));const ftp_1=__importDefault(require(a2_0x465c('0x4')));const fs_1=__importDefault(require('fs'));exports['sequelize']='';function setSequelize(_0x175b5c){exports[a2_0x465c('0x5')]=_0x175b5c;}exports[a2_0x465c('0x6')]=setSequelize;exports[a2_0x465c('0x7')]=(_0x3df013,_0x2b6296)=>{_0x2b6296[a2_0x465c('0x8')](a2_0x465c('0x9'),{'title':a2_0x465c('0xa')});};exports[a2_0x465c('0xb')]=(_0x26b6a7,_0x43f4d9)=>{console[a2_0x465c('0xc')](a2_0x465c('0xd'));const _0x3bb7d0=[];const _0x26eec0=new ftp_1[(a2_0x465c('0xe'))]();_0x26eec0['on'](a2_0x465c('0xf'),function(){console[a2_0x465c('0xc')]('connected');_0x26eec0[a2_0x465c('0x10')](a2_0x465c('0x11'),![],function(_0x3c7738,_0x113cab){if(_0x3c7738){}else{for(const _0x3da40d of _0x113cab){console[a2_0x465c('0xc')]('Downloading:\x20'+_0x3da40d[a2_0x465c('0x12')]);if(_0x3da40d['name'][a2_0x465c('0x13')](a2_0x465c('0x14'))){exports[a2_0x465c('0x5')][a2_0x465c('0x15')][a2_0x465c('0x16')][a2_0x465c('0x17')]({'where':{'fileName':_0x3da40d[a2_0x465c('0x12')]}})['spread']((_0xf0ddd1,_0x41a773)=>{if(_0x41a773){console['log'](_0x3da40d[a2_0x465c('0x12')]);_0x3bb7d0[a2_0x465c('0x18')](_0xf0ddd1);}});}}}_0x43f4d9[a2_0x465c('0x14')]({'data':_0x3bb7d0});});});_0x26eec0['on'](a2_0x465c('0x19'),function(_0x1bc8a1){_0x43f4d9[a2_0x465c('0x14')]({'message':_0x1bc8a1});});_0x26eec0[a2_0x465c('0x1a')]({'host':'ftp.vivotek.com','port':0x15,'user':a2_0x465c('0x1b'),'password':a2_0x465c('0x1b')});};exports[a2_0x465c('0x1c')]=(_0x44c0bc,_0x533481)=>{exports[a2_0x465c('0x5')][a2_0x465c('0x15')][a2_0x465c('0x16')]['findOne']({'where':{'status':null}})['then'](_0x2c7643=>{if(_0x2c7643){const _0x5e69c2=new ftp_1['default']();_0x5e69c2['on']('ready',function(){console['log'](a2_0x465c('0x1d')+_0x2c7643[a2_0x465c('0x1e')]);_0x5e69c2[a2_0x465c('0x1f')](a2_0x465c('0x20')+_0x2c7643['fileName'],function(_0x99b215,_0x1d94fb){_0x5e69c2['end']();if(_0x99b215){}else{const _0x20fd14='media/'+_0x2c7643[a2_0x465c('0x1e')]+a2_0x465c('0x21');_0x1d94fb['pipe'](fs_1[a2_0x465c('0xe')]['createWriteStream'](_0x20fd14));_0x2c7643['status']=0x1;_0x2c7643[a2_0x465c('0x22')]();console[a2_0x465c('0xc')](a2_0x465c('0x23')+_0x2c7643[a2_0x465c('0x1e')]);}});});_0x5e69c2['on']('error',function(_0xa32e45){_0x533481[a2_0x465c('0x14')]({'message':_0xa32e45});});_0x5e69c2[a2_0x465c('0x1a')]({'host':a2_0x465c('0x24'),'port':0x15,'user':'ipd','password':a2_0x465c('0x1b')});_0x533481['json']({'data':_0x2c7643[a2_0x465c('0x1e')]});}else{_0x533481[a2_0x465c('0x14')]({'data':[]});}});};exports['processFtp']=(_0x49da63,_0x535c02)=>{exports['sequelize'][a2_0x465c('0x15')][a2_0x465c('0x16')]['findOne']({'where':{'status':0x1}})[a2_0x465c('0x25')](_0xf3bdcb=>{if(_0xf3bdcb){const _0x41e4a8=a2_0x465c('0x26')+_0xf3bdcb[a2_0x465c('0x1e')]+a2_0x465c('0x21');fs_1['default'][a2_0x465c('0x27')](_0x41e4a8,'utf8',function(_0x3461ef,_0x1d43fd){if(_0x3461ef){_0xf3bdcb['status']=null;}else{try{const _0xfe666d=JSON[a2_0x465c('0x28')](_0x1d43fd);for(const _0x182d2c of _0xfe666d['Data'][0x0][a2_0x465c('0x29')]){const _0x239a47=_0x182d2c['In'];const _0x168409=_0x182d2c[a2_0x465c('0x2a')];const _0x4f1b3d=Date['parse'](_0x182d2c[a2_0x465c('0x2b')]);if(_0x239a47>0x0){exports[a2_0x465c('0x5')][a2_0x465c('0x15')][a2_0x465c('0x2c')][a2_0x465c('0x2d')]({'reportFileId':_0xf3bdcb['id'],'amount':_0x239a47,'countingDate':_0x4f1b3d});}if(_0x168409>0x0){exports[a2_0x465c('0x5')][a2_0x465c('0x15')][a2_0x465c('0x2c')][a2_0x465c('0x2d')]({'reportFileId':_0xf3bdcb['id'],'amount':_0x168409*-0x1,'countingDate':_0x4f1b3d});}}_0xf3bdcb['status']=0x2;}catch(_0x3e9231){_0xf3bdcb[a2_0x465c('0x2e')]=null;}}_0xf3bdcb['save']();});_0x535c02[a2_0x465c('0x14')]({'data':_0xf3bdcb[a2_0x465c('0x1e')]});}else{_0x535c02['json']({'data':[]});}});};exports['getPassCounting']=(_0x555227,_0x15f816)=>{exports['sequelize'][a2_0x465c('0x15')][a2_0x465c('0x2c')][a2_0x465c('0x2f')]({'where':{'amount':{[exports[a2_0x465c('0x5')]['Op']['gt']]:0x0}},'order':[[a2_0x465c('0x30'),a2_0x465c('0x31')]]})[a2_0x465c('0x25')](_0xc23cc4=>{_0x15f816[a2_0x465c('0x14')]({'data':_0xc23cc4});});};exports['getPassCountingByDay']=(_0xee5369,_0x1e95e2)=>{const _0x49b12f=_0xee5369[a2_0x465c('0x32')]['month'];const _0xdfeb97=_0xee5369[a2_0x465c('0x32')][a2_0x465c('0x33')];const _0x177e20=_0xee5369[a2_0x465c('0x32')]['endDate'];exports[a2_0x465c('0x5')][a2_0x465c('0x15')][a2_0x465c('0x2c')][a2_0x465c('0x2f')]({'attributes':['countingDate',[exports[a2_0x465c('0x5')]['fn'](a2_0x465c('0x34'),exports[a2_0x465c('0x5')]['col'](a2_0x465c('0x35'))),'total']],'where':{'countingDate':{[exports[a2_0x465c('0x5')]['Op'][a2_0x465c('0x36')]]:_0xdfeb97,[exports[a2_0x465c('0x5')]['Op']['lt']]:_0x177e20},'amount':_0xee5369[a2_0x465c('0x37')][a2_0x465c('0x38')]=='in'?{[exports[a2_0x465c('0x5')]['Op']['gt']]:0x0}:{[exports[a2_0x465c('0x5')]['Op']['lt']]:0x0}},'group':[exports[a2_0x465c('0x5')]['literal']('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[[a2_0x465c('0x30'),a2_0x465c('0x31')]]})[a2_0x465c('0x25')](_0x231f03=>{_0x1e95e2['json']({'data':_0x231f03});});};exports[a2_0x465c('0x39')]=(_0x4b6100,_0xeaf6bd)=>{const _0x1d978d=_0x4b6100[a2_0x465c('0x32')][a2_0x465c('0x3a')];const _0xf790a7=_0x4b6100[a2_0x465c('0x32')][a2_0x465c('0x33')];const _0x3ad781=_0x4b6100[a2_0x465c('0x32')]['endDate'];exports[a2_0x465c('0x5')][a2_0x465c('0x15')]['pass_counting'][a2_0x465c('0x2f')]({'attributes':['countingDate',[exports[a2_0x465c('0x5')]['fn']('DATE_FORMAT',exports[a2_0x465c('0x5')][a2_0x465c('0x3b')](a2_0x465c('0x30')),a2_0x465c('0x3c')),a2_0x465c('0x3d')],[exports[a2_0x465c('0x5')]['fn']('sum',exports[a2_0x465c('0x5')]['col'](a2_0x465c('0x35'))),a2_0x465c('0x3e')]],'where':{'countingDate':{[exports[a2_0x465c('0x5')]['Op'][a2_0x465c('0x36')]]:_0xf790a7,[exports[a2_0x465c('0x5')]['Op']['lt']]:_0x3ad781},'amount':_0x4b6100[a2_0x465c('0x37')]['direction']=='in'?{[exports[a2_0x465c('0x5')]['Op']['gt']]:0x0}:{[exports[a2_0x465c('0x5')]['Op']['lt']]:0x0}},'group':[exports[a2_0x465c('0x5')]['fn'](a2_0x465c('0x3f'),exports[a2_0x465c('0x5')][a2_0x465c('0x3b')](a2_0x465c('0x30'))),exports['sequelize']['fn'](a2_0x465c('0x40'),exports[a2_0x465c('0x5')]['col']('countingDate')),exports['sequelize']['fn'](a2_0x465c('0x41'),exports[a2_0x465c('0x5')][a2_0x465c('0x3b')](a2_0x465c('0x30'))),exports[a2_0x465c('0x5')]['fn'](a2_0x465c('0x42'),exports[a2_0x465c('0x5')][a2_0x465c('0x3b')](a2_0x465c('0x30')))],'order':[[a2_0x465c('0x30'),'ASC']]})['then'](_0x1739e7=>{_0xeaf6bd[a2_0x465c('0x14')]({'data':_0x1739e7});});};exports[a2_0x465c('0x43')]=(_0x176c39,_0x431099,_0x2e93e)=>{const _0xf08e9a=_0x176c39['user'][a2_0x465c('0x44')][a2_0x465c('0x45')](_0xf08e9a=>_0xf08e9a[a2_0x465c('0x46')]===a2_0x465c('0x47'));fbgraph_1[a2_0x465c('0xe')][a2_0x465c('0x48')](_0xf08e9a['accessToken']);fbgraph_1[a2_0x465c('0xe')]['get'](_0x176c39['user']['facebook']+a2_0x465c('0x49'),(_0x4c3c8c,_0x2f6e54)=>{if(_0x4c3c8c){return _0x2e93e(_0x4c3c8c);}_0x431099[a2_0x465c('0x8')](a2_0x465c('0x4a'),{'title':'Facebook\x20API','profile':_0x2f6e54});});};