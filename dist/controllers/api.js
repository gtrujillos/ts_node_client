var a2_0x3424=['YEAR','getFacebook','user','tokens','find','kind','facebook','setAccessToken','accessToken','api/facebook','__importDefault','__esModule','defineProperty','fbgraph','sequelize','setSequelize','getApi','render','api/index','log','connecting','default','ready','list','colombia','Downloading:\x20','name','endsWith','models','report_files','findOrCreate','json','error','connect','ftp.vivotek.com','ipd','downloadFtp','findOne','then','fileName','get','colombia/','end','.txt','pipe','status','save','Downloaded:\x20','processFtp','parse','Data','Out','EndTime','pass_counting','create','getPassCounting','findAll','countingDate','ASC','getPassCountingByDay','query','startDate','endDate','sum','amount','total','gte','direction','literal','col','%Y-%m-%d\x20%H:00','countingDateShort','params','HOUR','DAY','MONTH'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(a2_0x3424,0xa2));var a2_0xe732=function(_0x4288fd,_0x560c74){_0x4288fd=_0x4288fd-0x0;var _0x373a98=a2_0x3424[_0x4288fd];return _0x373a98;};'use strict';var __importDefault=this&&this[a2_0xe732('0x0')]||function(_0x2005c8){return _0x2005c8&&_0x2005c8[a2_0xe732('0x1')]?_0x2005c8:{'default':_0x2005c8};};Object[a2_0xe732('0x2')](exports,a2_0xe732('0x1'),{'value':!![]});const fbgraph_1=__importDefault(require(a2_0xe732('0x3')));const ftp_1=__importDefault(require('ftp'));const fs_1=__importDefault(require('fs'));exports['sequelize']='';function setSequelize(_0x1498c0){exports[a2_0xe732('0x4')]=_0x1498c0;}exports[a2_0xe732('0x5')]=setSequelize;exports[a2_0xe732('0x6')]=(_0x19b67c,_0x8d0d67)=>{_0x8d0d67[a2_0xe732('0x7')](a2_0xe732('0x8'),{'title':'API\x20Examples'});};exports['syncFtp']=(_0x30823f,_0x533b00)=>{console[a2_0xe732('0x9')](a2_0xe732('0xa'));const _0x2126f7=[];const _0x312e98=new ftp_1[(a2_0xe732('0xb'))]();_0x312e98['on'](a2_0xe732('0xc'),function(){console['log']('connected');_0x312e98[a2_0xe732('0xd')](a2_0xe732('0xe'),![],function(_0x1aed1b,_0x1e8cb9){if(_0x1aed1b){}else{for(const _0x18bac4 of _0x1e8cb9){console[a2_0xe732('0x9')](a2_0xe732('0xf')+_0x18bac4[a2_0xe732('0x10')]);if(_0x18bac4[a2_0xe732('0x10')][a2_0xe732('0x11')]('json')){exports[a2_0xe732('0x4')][a2_0xe732('0x12')][a2_0xe732('0x13')][a2_0xe732('0x14')]({'where':{'fileName':_0x18bac4[a2_0xe732('0x10')]}})['spread']((_0x2a14cc,_0x41e0a2)=>{if(_0x41e0a2){console[a2_0xe732('0x9')](_0x18bac4['name']);_0x2126f7['push'](_0x2a14cc);}});}}}_0x533b00[a2_0xe732('0x15')]({'data':_0x2126f7});});});_0x312e98['on'](a2_0xe732('0x16'),function(_0x27d671){_0x533b00[a2_0xe732('0x15')]({'message':_0x27d671});});_0x312e98[a2_0xe732('0x17')]({'host':a2_0xe732('0x18'),'port':0x15,'user':a2_0xe732('0x19'),'password':'ipd'});};exports[a2_0xe732('0x1a')]=(_0x533608,_0x5cd551)=>{exports['sequelize'][a2_0xe732('0x12')][a2_0xe732('0x13')][a2_0xe732('0x1b')]({'where':{'status':null}})[a2_0xe732('0x1c')](_0x44294b=>{if(_0x44294b){const _0x5e7c42=new ftp_1[(a2_0xe732('0xb'))]();_0x5e7c42['on']('ready',function(){console['log']('connected:'+_0x44294b[a2_0xe732('0x1d')]);_0x5e7c42[a2_0xe732('0x1e')](a2_0xe732('0x1f')+_0x44294b[a2_0xe732('0x1d')],function(_0x36ba41,_0x45db2f){_0x5e7c42[a2_0xe732('0x20')]();if(_0x36ba41){}else{const _0x1e183f='media/'+_0x44294b[a2_0xe732('0x1d')]+a2_0xe732('0x21');_0x45db2f[a2_0xe732('0x22')](fs_1[a2_0xe732('0xb')]['createWriteStream'](_0x1e183f));_0x44294b[a2_0xe732('0x23')]=0x1;_0x44294b[a2_0xe732('0x24')]();console[a2_0xe732('0x9')](a2_0xe732('0x25')+_0x44294b[a2_0xe732('0x1d')]);}});});_0x5e7c42['on'](a2_0xe732('0x16'),function(_0x1bf169){_0x5cd551[a2_0xe732('0x15')]({'message':_0x1bf169});});_0x5e7c42['connect']({'host':a2_0xe732('0x18'),'port':0x15,'user':a2_0xe732('0x19'),'password':a2_0xe732('0x19')});_0x5cd551[a2_0xe732('0x15')]({'data':_0x44294b[a2_0xe732('0x1d')]});}else{_0x5cd551[a2_0xe732('0x15')]({'data':[]});}});};exports[a2_0xe732('0x26')]=(_0x40ac86,_0x583846)=>{exports[a2_0xe732('0x4')]['models'][a2_0xe732('0x13')][a2_0xe732('0x1b')]({'where':{'status':0x1}})['then'](_0x17b137=>{if(_0x17b137){const _0x3d91b1='media/'+_0x17b137[a2_0xe732('0x1d')]+a2_0xe732('0x21');fs_1[a2_0xe732('0xb')]['readFile'](_0x3d91b1,'utf8',function(_0x41f5bc,_0x13d217){if(_0x41f5bc){_0x17b137[a2_0xe732('0x23')]=null;}else{try{const _0x40f3de=JSON[a2_0xe732('0x27')](_0x13d217);for(const _0xe1ee18 of _0x40f3de[a2_0xe732('0x28')][0x0]['CountingInfo']){const _0x5ac208=_0xe1ee18['In'];const _0x3f13ca=_0xe1ee18[a2_0xe732('0x29')];const _0x28878d=Date['parse'](_0xe1ee18[a2_0xe732('0x2a')]);if(_0x5ac208>0x0){exports['sequelize'][a2_0xe732('0x12')][a2_0xe732('0x2b')][a2_0xe732('0x2c')]({'reportFileId':_0x17b137['id'],'amount':_0x5ac208,'countingDate':_0x28878d});}if(_0x3f13ca>0x0){exports[a2_0xe732('0x4')]['models'][a2_0xe732('0x2b')][a2_0xe732('0x2c')]({'reportFileId':_0x17b137['id'],'amount':_0x3f13ca*-0x1,'countingDate':_0x28878d});}}_0x17b137[a2_0xe732('0x23')]=0x2;}catch(_0x52eaf7){_0x17b137['status']=null;}}_0x17b137['save']();});_0x583846[a2_0xe732('0x15')]({'data':_0x17b137[a2_0xe732('0x1d')]});}else{_0x583846['json']({'data':[]});}});};exports[a2_0xe732('0x2d')]=(_0xc34146,_0x193a4c)=>{exports[a2_0xe732('0x4')][a2_0xe732('0x12')][a2_0xe732('0x2b')][a2_0xe732('0x2e')]({'where':{'amount':{[exports['sequelize']['Op']['gt']]:0x0}},'order':[[a2_0xe732('0x2f'),a2_0xe732('0x30')]]})[a2_0xe732('0x1c')](_0x147cf8=>{_0x193a4c['json']({'data':_0x147cf8});});};exports[a2_0xe732('0x31')]=(_0x387287,_0x2f3a48)=>{const _0x52835e=_0x387287[a2_0xe732('0x32')]['month'];const _0x36ad6a=_0x387287[a2_0xe732('0x32')][a2_0xe732('0x33')];const _0x333c82=_0x387287[a2_0xe732('0x32')][a2_0xe732('0x34')];exports[a2_0xe732('0x4')][a2_0xe732('0x12')][a2_0xe732('0x2b')]['findAll']({'attributes':['countingDate',[exports[a2_0xe732('0x4')]['fn'](a2_0xe732('0x35'),exports['sequelize']['col'](a2_0xe732('0x36'))),a2_0xe732('0x37')]],'where':{'countingDate':{[exports[a2_0xe732('0x4')]['Op'][a2_0xe732('0x38')]]:_0x36ad6a,[exports[a2_0xe732('0x4')]['Op']['lt']]:_0x333c82},'amount':_0x387287['params'][a2_0xe732('0x39')]=='in'?{[exports['sequelize']['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports[a2_0xe732('0x4')][a2_0xe732('0x3a')]('YEAR(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20MONTH(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27)),\x20DAY(CONVERT_TZ(countingDate,\x27+00:00\x27,\x27-05:00\x27))')],'order':[[a2_0xe732('0x2f'),'ASC']]})[a2_0xe732('0x1c')](_0x3edb26=>{_0x2f3a48[a2_0xe732('0x15')]({'data':_0x3edb26});});};exports['getPassCountingByHour']=(_0xb966da,_0x207250)=>{const _0x2e8d97=_0xb966da[a2_0xe732('0x32')]['month'];const _0x92e3d5=_0xb966da[a2_0xe732('0x32')][a2_0xe732('0x33')];const _0x3ff044=_0xb966da[a2_0xe732('0x32')][a2_0xe732('0x34')];exports['sequelize']['models']['pass_counting']['findAll']({'attributes':[a2_0xe732('0x2f'),[exports['sequelize']['fn']('DATE_FORMAT',exports[a2_0xe732('0x4')][a2_0xe732('0x3b')](a2_0xe732('0x2f')),a2_0xe732('0x3c')),a2_0xe732('0x3d')],[exports['sequelize']['fn'](a2_0xe732('0x35'),exports[a2_0xe732('0x4')][a2_0xe732('0x3b')](a2_0xe732('0x36'))),a2_0xe732('0x37')]],'where':{'countingDate':{[exports[a2_0xe732('0x4')]['Op'][a2_0xe732('0x38')]]:_0x92e3d5,[exports[a2_0xe732('0x4')]['Op']['lt']]:_0x3ff044},'amount':_0xb966da[a2_0xe732('0x3e')][a2_0xe732('0x39')]=='in'?{[exports[a2_0xe732('0x4')]['Op']['gt']]:0x0}:{[exports['sequelize']['Op']['lt']]:0x0}},'group':[exports['sequelize']['fn'](a2_0xe732('0x3f'),exports[a2_0xe732('0x4')][a2_0xe732('0x3b')](a2_0xe732('0x2f'))),exports[a2_0xe732('0x4')]['fn'](a2_0xe732('0x40'),exports[a2_0xe732('0x4')][a2_0xe732('0x3b')](a2_0xe732('0x2f'))),exports[a2_0xe732('0x4')]['fn'](a2_0xe732('0x41'),exports[a2_0xe732('0x4')]['col'](a2_0xe732('0x2f'))),exports[a2_0xe732('0x4')]['fn'](a2_0xe732('0x42'),exports[a2_0xe732('0x4')][a2_0xe732('0x3b')](a2_0xe732('0x2f')))],'order':[[a2_0xe732('0x2f'),a2_0xe732('0x30')]]})[a2_0xe732('0x1c')](_0x43c581=>{_0x207250[a2_0xe732('0x15')]({'data':_0x43c581});});};exports[a2_0xe732('0x43')]=(_0x1253d8,_0xa043c0,_0x5edb41)=>{const _0x123727=_0x1253d8[a2_0xe732('0x44')][a2_0xe732('0x45')][a2_0xe732('0x46')](_0x123727=>_0x123727[a2_0xe732('0x47')]===a2_0xe732('0x48'));fbgraph_1[a2_0xe732('0xb')][a2_0xe732('0x49')](_0x123727[a2_0xe732('0x4a')]);fbgraph_1[a2_0xe732('0xb')]['get'](_0x1253d8[a2_0xe732('0x44')][a2_0xe732('0x48')]+'?fields=id,name,email,first_name,last_name,gender,link,locale,timezone',(_0x49bce5,_0x59fe1e)=>{if(_0x49bce5){return _0x5edb41(_0x49bce5);}_0xa043c0[a2_0xe732('0x7')](a2_0xe732('0x4b'),{'title':'Facebook\x20API','profile':_0x59fe1e});});};