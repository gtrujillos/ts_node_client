var a2_0x3dab=['name','push','error','connect','ftp.vivotek.com','ipd','downloadFtp','findOne','then','fileName','pipe','status','save','Downloaded:\x20','processFtp','media/','.txt','utf8','Data','CountingInfo','Out','parse','EndTime','pass_counting','create','getPassCounting','findAll','ASC','getPassCountingByDay','query','month','endDate','countingDate','col','amount','gte','params','direction','literal','YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))','startDate','%Y-%m-%d\x20%H:00','sum','HOUR','DAY','MONTH','YEAR','getFacebook','find','kind','facebook','setAccessToken','accessToken','get','user','api/facebook','__esModule','fbgraph','sequelize','setSequelize','getApi','render','api/index','syncFtp','connecting','default','ready','log','connected','list','Downloading:\x20','endsWith','json','models','report_files','findOrCreate'];(function(_0x24168b,_0x3c24ce){var _0x5f3157=function(_0x24fe6f){while(--_0x24fe6f){_0x24168b['push'](_0x24168b['shift']());}};_0x5f3157(++_0x3c24ce);}(a2_0x3dab,0x11c));var a2_0x1dec=function(_0x1f7989,_0x1df629){_0x1f7989=_0x1f7989-0x0;var _0x12e5da=a2_0x3dab[_0x1f7989];return _0x12e5da;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2e1e51){return _0x2e1e51&&_0x2e1e51[a2_0x1dec('0x0')]?_0x2e1e51:{'default':_0x2e1e51};};Object['defineProperty'](exports,a2_0x1dec('0x0'),{'value':!![]});const fbgraph_1=__importDefault(require(a2_0x1dec('0x1')));const ftp_1=__importDefault(require('ftp'));const fs_1=__importDefault(require('fs'));exports[a2_0x1dec('0x2')]='';function setSequelize(_0x39e579){exports['sequelize']=_0x39e579;}exports[a2_0x1dec('0x3')]=setSequelize;exports[a2_0x1dec('0x4')]=(_0x54ce56,_0x1c615d)=>{_0x1c615d[a2_0x1dec('0x5')](a2_0x1dec('0x6'),{'title':'API\x20Examples'});};exports[a2_0x1dec('0x7')]=(_0x81df70,_0x163c58)=>{console['log'](a2_0x1dec('0x8'));const _0x294e21=[];const _0x2dbf82=new ftp_1[(a2_0x1dec('0x9'))]();_0x2dbf82['on'](a2_0x1dec('0xa'),function(){console[a2_0x1dec('0xb')](a2_0x1dec('0xc'));_0x2dbf82[a2_0x1dec('0xd')]('colombia',![],function(_0x3e240d,_0x4bbb62){if(_0x3e240d){}else{for(const _0x3b909b of _0x4bbb62){console[a2_0x1dec('0xb')](a2_0x1dec('0xe')+_0x3b909b['name']);if(_0x3b909b['name'][a2_0x1dec('0xf')](a2_0x1dec('0x10'))){exports[a2_0x1dec('0x2')][a2_0x1dec('0x11')][a2_0x1dec('0x12')][a2_0x1dec('0x13')]({'where':{'fileName':_0x3b909b[a2_0x1dec('0x14')]}})['spread']((_0xf75042,_0x11a236)=>{if(_0x11a236){console[a2_0x1dec('0xb')](_0x3b909b[a2_0x1dec('0x14')]);_0x294e21[a2_0x1dec('0x15')](_0xf75042);}});}}}_0x163c58[a2_0x1dec('0x10')]({'data':_0x294e21});});});_0x2dbf82['on'](a2_0x1dec('0x16'),function(_0x7f1ae7){_0x163c58[a2_0x1dec('0x10')]({'message':_0x7f1ae7});});_0x2dbf82[a2_0x1dec('0x17')]({'host':a2_0x1dec('0x18'),'port':0x15,'user':a2_0x1dec('0x19'),'password':a2_0x1dec('0x19')});};exports[a2_0x1dec('0x1a')]=(_0xeccb7c,_0x592617)=>{exports[a2_0x1dec('0x2')]['models'][a2_0x1dec('0x12')][a2_0x1dec('0x1b')]({'where':{'status':null}})[a2_0x1dec('0x1c')](_0x12eb6c=>{if(_0x12eb6c){const _0x60daff=new ftp_1[(a2_0x1dec('0x9'))]();_0x60daff['on']('ready',function(){console[a2_0x1dec('0xb')]('connected:'+_0x12eb6c[a2_0x1dec('0x1d')]);_0x60daff['get']('colombia/'+_0x12eb6c[a2_0x1dec('0x1d')],function(_0x7628f6,_0x46e682){_0x60daff['end']();if(_0x7628f6){}else{const _0x10a325='media/'+_0x12eb6c[a2_0x1dec('0x1d')]+'.txt';_0x46e682[a2_0x1dec('0x1e')](fs_1[a2_0x1dec('0x9')]['createWriteStream'](_0x10a325));_0x12eb6c[a2_0x1dec('0x1f')]=0x1;_0x12eb6c[a2_0x1dec('0x20')]();console[a2_0x1dec('0xb')](a2_0x1dec('0x21')+_0x12eb6c[a2_0x1dec('0x1d')]);}});});_0x60daff['on']('error',function(_0x3be931){_0x592617['json']({'message':_0x3be931});});_0x60daff['connect']({'host':'ftp.vivotek.com','port':0x15,'user':a2_0x1dec('0x19'),'password':a2_0x1dec('0x19')});_0x592617[a2_0x1dec('0x10')]({'data':_0x12eb6c[a2_0x1dec('0x1d')]});}else{_0x592617['json']({'data':[]});}});};exports[a2_0x1dec('0x22')]=(_0x8917eb,_0xde0ddf)=>{exports['sequelize'][a2_0x1dec('0x11')][a2_0x1dec('0x12')][a2_0x1dec('0x1b')]({'where':{'status':0x1}})['then'](_0xeee65=>{if(_0xeee65){const _0x25a5dc=a2_0x1dec('0x23')+_0xeee65[a2_0x1dec('0x1d')]+a2_0x1dec('0x24');fs_1['default']['readFile'](_0x25a5dc,a2_0x1dec('0x25'),function(_0x48d168,_0x3516f8){if(_0x48d168){_0xeee65[a2_0x1dec('0x1f')]=null;}else{try{const _0x453f9e=JSON['parse'](_0x3516f8);for(const _0x12a575 of _0x453f9e[a2_0x1dec('0x26')][0x0][a2_0x1dec('0x27')]){const _0x11a809=_0x12a575['In'];const _0x1672da=_0x12a575[a2_0x1dec('0x28')];const _0x521ce1=Date[a2_0x1dec('0x29')](_0x12a575[a2_0x1dec('0x2a')]);if(_0x11a809>0x0){exports[a2_0x1dec('0x2')]['models'][a2_0x1dec('0x2b')][a2_0x1dec('0x2c')]({'reportFileId':_0xeee65['id'],'amount':_0x11a809,'countingDate':_0x521ce1});}if(_0x1672da>0x0){exports[a2_0x1dec('0x2')][a2_0x1dec('0x11')]['pass_counting'][a2_0x1dec('0x2c')]({'reportFileId':_0xeee65['id'],'amount':_0x1672da*-0x1,'countingDate':_0x521ce1});}}_0xeee65[a2_0x1dec('0x1f')]=0x2;}catch(_0x3d0a71){_0xeee65[a2_0x1dec('0x1f')]=null;}}_0xeee65[a2_0x1dec('0x20')]();});_0xde0ddf[a2_0x1dec('0x10')]({'data':_0xeee65[a2_0x1dec('0x1d')]});}else{_0xde0ddf['json']({'data':[]});}});};exports[a2_0x1dec('0x2d')]=(_0x39161c,_0x48d3cc)=>{exports[a2_0x1dec('0x2')][a2_0x1dec('0x11')]['pass_counting'][a2_0x1dec('0x2e')]({'where':{'amount':{[exports[a2_0x1dec('0x2')]['Op']['gt']]:0x0}},'order':[['countingDate',a2_0x1dec('0x2f')]]})['then'](_0x20c6b0=>{_0x48d3cc[a2_0x1dec('0x10')]({'data':_0x20c6b0});});};exports[a2_0x1dec('0x30')]=(_0x10a7bb,_0xbe9212)=>{const _0xd203a3=_0x10a7bb[a2_0x1dec('0x31')][a2_0x1dec('0x32')];const _0x21d85a=_0x10a7bb[a2_0x1dec('0x31')]['startDate'];const _0x3be0b6=_0x10a7bb[a2_0x1dec('0x31')][a2_0x1dec('0x33')];exports['sequelize']['models']['pass_counting'][a2_0x1dec('0x2e')]({'attributes':[a2_0x1dec('0x34'),[exports['sequelize']['fn']('sum',exports[a2_0x1dec('0x2')][a2_0x1dec('0x35')](a2_0x1dec('0x36'))),'total']],'where':{'countingDate':{[exports[a2_0x1dec('0x2')]['Op'][a2_0x1dec('0x37')]]:_0x21d85a,[exports['sequelize']['Op']['lt']]:_0x3be0b6},'amount':_0x10a7bb[a2_0x1dec('0x38')][a2_0x1dec('0x39')]=='in'?{[exports[a2_0x1dec('0x2')]['Op']['gt']]:0x0}:{[exports[a2_0x1dec('0x2')]['Op']['lt']]:0x0}},'group':[exports[a2_0x1dec('0x2')][a2_0x1dec('0x3a')](a2_0x1dec('0x3b'))],'order':[['countingDate',a2_0x1dec('0x2f')]]})['then'](_0x3fdcce=>{_0xbe9212[a2_0x1dec('0x10')]({'data':_0x3fdcce});});};exports['getPassCountingByHour']=(_0x41eb6,_0x2232ec)=>{const _0x249dd4=_0x41eb6['query']['month'];const _0x2bd31d=_0x41eb6[a2_0x1dec('0x31')][a2_0x1dec('0x3c')];const _0x1637cb=_0x41eb6['query'][a2_0x1dec('0x33')];exports[a2_0x1dec('0x2')][a2_0x1dec('0x11')][a2_0x1dec('0x2b')]['findAll']({'attributes':[a2_0x1dec('0x34'),[exports[a2_0x1dec('0x2')]['fn']('DATE_FORMAT',exports['sequelize'][a2_0x1dec('0x35')](a2_0x1dec('0x34')),a2_0x1dec('0x3d')),'countingDateShort'],[exports['sequelize']['fn'](a2_0x1dec('0x3e'),exports[a2_0x1dec('0x2')]['col'](a2_0x1dec('0x36'))),'total']],'where':{'countingDate':{[exports[a2_0x1dec('0x2')]['Op'][a2_0x1dec('0x37')]]:_0x2bd31d,[exports['sequelize']['Op']['lt']]:_0x1637cb},'amount':_0x41eb6['params'][a2_0x1dec('0x39')]=='in'?{[exports[a2_0x1dec('0x2')]['Op']['gt']]:0x0}:{[exports[a2_0x1dec('0x2')]['Op']['lt']]:0x0}},'group':[exports[a2_0x1dec('0x2')]['fn'](a2_0x1dec('0x3f'),exports[a2_0x1dec('0x2')][a2_0x1dec('0x35')](a2_0x1dec('0x34'))),exports['sequelize']['fn'](a2_0x1dec('0x40'),exports['sequelize'][a2_0x1dec('0x35')]('countingDate')),exports['sequelize']['fn'](a2_0x1dec('0x41'),exports['sequelize'][a2_0x1dec('0x35')](a2_0x1dec('0x34'))),exports[a2_0x1dec('0x2')]['fn'](a2_0x1dec('0x42'),exports['sequelize'][a2_0x1dec('0x35')](a2_0x1dec('0x34')))],'order':[[a2_0x1dec('0x34'),a2_0x1dec('0x2f')]]})['then'](_0x5382cc=>{_0x2232ec[a2_0x1dec('0x10')]({'data':_0x5382cc});});};exports[a2_0x1dec('0x43')]=(_0x2f7c6f,_0x1f69cd,_0x1207a5)=>{const _0x5a6a26=_0x2f7c6f['user']['tokens'][a2_0x1dec('0x44')](_0x5a6a26=>_0x5a6a26[a2_0x1dec('0x45')]===a2_0x1dec('0x46'));fbgraph_1[a2_0x1dec('0x9')][a2_0x1dec('0x47')](_0x5a6a26[a2_0x1dec('0x48')]);fbgraph_1[a2_0x1dec('0x9')][a2_0x1dec('0x49')](_0x2f7c6f[a2_0x1dec('0x4a')][a2_0x1dec('0x46')]+'?fields=id,name,email,first_name,last_name,gender,link,locale,timezone',(_0x1f05f6,_0x3dff95)=>{if(_0x1f05f6){return _0x1207a5(_0x1f05f6);}_0x1f69cd[a2_0x1dec('0x5')](a2_0x1dec('0x4b'),{'title':'Facebook\x20API','profile':_0x3dff95});});};