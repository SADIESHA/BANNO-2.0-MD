(function(_0xe80eb9,_0x561661){const _0x486a66=_0x4a65,_0xabd1e6=_0xe80eb9();while(!![]){try{const _0x589974=parseInt(_0x486a66(0x94))/0x1*(parseInt(_0x486a66(0xcb))/0x2)+parseInt(_0x486a66(0xa7))/0x3*(parseInt(_0x486a66(0xbe))/0x4)+parseInt(_0x486a66(0x96))/0x5*(parseInt(_0x486a66(0x99))/0x6)+-parseInt(_0x486a66(0xac))/0x7+-parseInt(_0x486a66(0x98))/0x8+-parseInt(_0x486a66(0xb4))/0x9*(-parseInt(_0x486a66(0xa5))/0xa)+-parseInt(_0x486a66(0xb3))/0xb;if(_0x589974===_0x561661)break;else _0xabd1e6['push'](_0xabd1e6['shift']());}catch(_0x1b6e8b){_0xabd1e6['push'](_0xabd1e6['shift']());}}}(_0x25d7,0xcf6bb));import _0x1b9656,{prepareWAMessageMedia}from'@whiskeysockets/baileys';const {generateWAMessageFromContent,proto}=_0x1b9656;import _0x17dc3b from'nayan-media-downloader';function _0x25d7(){const _0x4473fd=['data','message','>\x20©\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ʀᴇᴅ_ꜰᴏx-ᴍᴅ\x20','📥\x20Download\x20','create','from','Message','length','slice','3046622vrJPST','body','1ddQLmc','map','94555bsvYWO','InteractiveMessage','7238168usyFQv','12AnYjWs','Error\x20processing\x20your\x20request.','split','\x20Facebook\x20Video\x20Download\x0a\x0a🔍\x20Select\x20the\x20desired\x20video\x20quality\x20to\x20download.\x0a\x0a📌\x20Choose\x20an\x20option\x20to\x20download.\x0a\x0a','startsWith','No\x20results\x20found.','Error\x20processing\x20your\x20request:','Video\x20Qualities','Body','url','resolution','media_','1210nnICiy','selectedId','127401ppBgeD','facebook','video/mp4','get','relayMessage','6349686xbCboW','reply','Header','stringify','fbdl','single_select','set','9468151IYmufI','70056eYcUiL','match','waUploadToServer','key','React','parse','Please\x20provide\x20a\x20Facebook\x20video\x20URL.','NativeFlowMessage','templateButtonReplyMessage','https://i.ibb.co/tmBwc3w/Picsart-24-06-24-07-49-44-807.png','96ZbcxWj','error','remoteJid','The\x20video\x20file\x20size\x20exceeds\x20300MB.'];_0x25d7=function(){return _0x4473fd;};return _0x25d7();}const {ndown}=_0x17dc3b,fbSearchResultsMap=new Map();let fbSearchIndex=0x1;const facebookCommand=async(_0x589246,_0x2d9b8f)=>{const _0x28f174=_0x4a65;let _0x4c919c;const _0x3c3efc=_0x589246?.['message']?.[_0x28f174(0xbc)]?.[_0x28f174(0xa6)],_0x386a94=_0x589246?.[_0x28f174(0xc3)]?.['interactiveResponseMessage'];if(_0x386a94){const _0x2e6e59=_0x386a94['nativeFlowResponseMessage']?.['paramsJson'];if(_0x2e6e59){const _0x4c2bab=JSON[_0x28f174(0xb9)](_0x2e6e59);_0x4c919c=_0x4c2bab['id'];}}const _0x2b714b=_0x4c919c||_0x3c3efc,_0x314dd5=_0x589246[_0x28f174(0xcc)][_0x28f174(0xb5)](/^[\\/!#.]/),_0x486737=_0x314dd5?_0x314dd5[0x0]:'/',_0x23c2b8=_0x589246['body'][_0x28f174(0x9d)](_0x486737)?_0x589246['body'][_0x28f174(0xca)](_0x486737[_0x28f174(0xc9)])[_0x28f174(0x9b)]('\x20')[0x0]['toLowerCase']():'',_0x4c476f=_0x589246['body']['slice'](_0x486737[_0x28f174(0xc9)]+_0x23c2b8[_0x28f174(0xc9)])['trim'](),_0x5979b2=[_0x28f174(0xa8),'fb',_0x28f174(0xb0)];if(_0x5979b2['includes'](_0x23c2b8)){if(!_0x4c476f)return _0x589246[_0x28f174(0xad)](_0x28f174(0xba));try{await _0x589246[_0x28f174(0xb8)]('🎥');const _0x133334=await ndown(_0x4c476f);if(!_0x133334['status']){await _0x589246[_0x28f174(0xad)](_0x28f174(0x9e)),await _0x589246['React']('❌');return;}fbSearchResultsMap[_0x28f174(0xb2)](fbSearchIndex,_0x133334);const _0x1a30c8=[{'title':_0x28f174(0xa0),'rows':_0x133334['data'][_0x28f174(0x95)]((_0xa267cc,_0x221dab)=>({'header':'','title':_0x28f174(0xc5)+_0xa267cc[_0x28f174(0xa3)],'description':'','id':'media_'+_0x221dab+'_'+fbSearchIndex}))}],_0x2ef2d1=[{'name':_0x28f174(0xb1),'buttonParamsJson':JSON[_0x28f174(0xaf)]({'title':'♂️\x20Select\x20Quality','sections':_0x1a30c8})}],_0x1fcc24=generateWAMessageFromContent(_0x589246[_0x28f174(0xc7)],{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto[_0x28f174(0xc8)][_0x28f174(0x97)][_0x28f174(0xc6)]({'body':proto[_0x28f174(0xc8)][_0x28f174(0x97)][_0x28f174(0xa1)][_0x28f174(0xc6)]({'text':_0x28f174(0x9c)}),'footer':proto['Message'][_0x28f174(0x97)]['Footer'][_0x28f174(0xc6)]({'text':'>\x20©ʀᴇᴅ-ꜰᴏx-ᴍᴅ'}),'header':proto['Message'][_0x28f174(0x97)][_0x28f174(0xae)][_0x28f174(0xc6)]({...await prepareWAMessageMedia({'image':{'url':_0x28f174(0xbd)}},{'upload':_0x2d9b8f[_0x28f174(0xb6)]}),'title':'','gifPlayback':!![],'subtitle':'','hasMediaAttachment':![]}),'nativeFlowMessage':proto[_0x28f174(0xc8)][_0x28f174(0x97)][_0x28f174(0xbb)][_0x28f174(0xc6)]({'buttons':_0x2ef2d1}),'contextInfo':{'mentionedJid':[_0x589246['sender']],'forwardingScore':0x270f,'isForwarded':!![]}})}}},{});await _0x2d9b8f[_0x28f174(0xab)](_0x1fcc24[_0x28f174(0xb7)][_0x28f174(0xc0)],_0x1fcc24[_0x28f174(0xc3)],{'messageId':_0x1fcc24[_0x28f174(0xb7)]['id']}),await _0x589246['React']('✅'),fbSearchIndex+=0x1;}catch(_0x4f926f){console[_0x28f174(0xbf)](_0x28f174(0x9f),_0x4f926f),await _0x589246[_0x28f174(0xad)](_0x28f174(0x9a)),await _0x589246[_0x28f174(0xb8)]('❌');}}else{if(_0x2b714b){if(_0x2b714b[_0x28f174(0x9d)](_0x28f174(0xa4))){const _0x42f0c9=_0x2b714b['split']('_'),_0x131fbe=parseInt(_0x42f0c9[0x1]),_0x5161b4=parseInt(_0x42f0c9[0x2]),_0x2061b8=fbSearchResultsMap[_0x28f174(0xaa)](_0x5161b4);if(_0x2061b8)try{const _0x42a173=_0x2061b8[_0x28f174(0xc2)][_0x131fbe][_0x28f174(0xa2)];let _0x2c423c,_0x43e5cb,_0x11e5a2;_0x2c423c=await getStreamBuffer(_0x42a173),_0x43e5cb=_0x28f174(0xa9);const _0x2aab0a=_0x2c423c[_0x28f174(0xc9)]/(0x400*0x400);_0x2aab0a<=0x12c?(_0x11e5a2={'video':_0x2c423c,'mimetype':_0x28f174(0xa9),'caption':_0x28f174(0xc4)},await _0x2d9b8f['sendMessage'](_0x589246['from'],_0x11e5a2,{'quoted':_0x589246})):await _0x589246[_0x28f174(0xad)](_0x28f174(0xc1));}catch(_0x35b339){console[_0x28f174(0xbf)](_0x28f174(0x9f),_0x35b339),await _0x589246[_0x28f174(0xad)]('Error\x20processing\x20your\x20request.'),await _0x589246[_0x28f174(0xb8)]('❌');}}}}},getStreamBuffer=async _0x34ae54=>{const _0x282b6c=_0x4a65,_0x4f16a7=await fetch(_0x34ae54),_0x13f6f2=await _0x4f16a7['arrayBuffer']();return Buffer[_0x282b6c(0xc7)](_0x13f6f2);};function _0x4a65(_0x26a3d4,_0x38969f){const _0x25d7f8=_0x25d7();return _0x4a65=function(_0x4a65c8,_0x5738db){_0x4a65c8=_0x4a65c8-0x94;let _0x2ded14=_0x25d7f8[_0x4a65c8];return _0x2ded14;},_0x4a65(_0x26a3d4,_0x38969f);}export default facebookCommand;
