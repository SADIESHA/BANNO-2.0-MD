const _0x1bd7e6=_0x4e1c;(function(_0x346bfe,_0x478ff3){const _0x2c5254=_0x4e1c,_0x2fcb09=_0x346bfe();while(!![]){try{const _0xc95cd2=parseInt(_0x2c5254(0x19f))/(0x6*-0x11c+-0x14fd+0x1ba6)*(-parseInt(_0x2c5254(0x1a2))/(0xf3d+-0x922+0x7*-0xdf))+-parseInt(_0x2c5254(0x19e))/(0x14c4+0x47f+-0x1940)+-parseInt(_0x2c5254(0x18b))/(0xba5*0x1+0xcb4+0x1855*-0x1)*(parseInt(_0x2c5254(0x1b0))/(-0x82b*0x3+-0x85*-0x14+-0x1b*-0x86))+-parseInt(_0x2c5254(0x1b2))/(0x1+0x1*-0x1df9+0xb*0x2ba)*(parseInt(_0x2c5254(0x197))/(-0x1c10+-0xdd6+-0x1*-0x29ed))+parseInt(_0x2c5254(0x1ae))/(-0x1d2+0x2216+-0x203c)+-parseInt(_0x2c5254(0x1a1))/(0x3*-0x66e+0x1*0x4f+0x982*0x2)*(parseInt(_0x2c5254(0x194))/(0x1a79+0xfb*-0x7+-0x5*0x3ea))+parseInt(_0x2c5254(0x193))/(-0x23*-0xef+-0x168d+-0xa15);if(_0xc95cd2===_0x478ff3)break;else _0x2fcb09['push'](_0x2fcb09['shift']());}catch(_0x5135b3){_0x2fcb09['push'](_0x2fcb09['shift']());}}}(_0xb017,-0x33620+0x49471+0x9b59*0x8));import{writeFile}from'fs/promises';import _0x4c5aa2 from'fs';import _0x221438 from'path';function _0xb017(){const _0x2349ed=['user','assistant','/forget','girl','Content-Type','Error:\x20','React','POST','result','402668mvmmvH','match','url','stringify','startsWith','toLowerCase','body','error','13607429IOzcyk','310pxDONp','parse','sender','3651613QTIxSl','shift','Something\x20went\x20wrong','text-generation','messages','resolve','from','1427739UkzMKx','5EvKcBD','pathname','5661SQKEwk','39734kooJqH','sendMessage','model','role','gfgpt','status','dirname','json','content','text','Please\x20give\x20me\x20a\x20prompt','slice','5518944dUPKbu','push','20OqIOSD','Conversation\x20deleted\x20successfully','6ZFmUYE','length','type','trim','response'];_0xb017=function(){return _0x2349ed;};return _0xb017();}import _0x32d79b from'node-fetch';const __filename=new URL(import.meta[_0x1bd7e6(0x18d)])[_0x1bd7e6(0x1a0)],__dirname=_0x221438[_0x1bd7e6(0x1a8)](__filename),chatHistoryFile=_0x221438[_0x1bd7e6(0x19c)](__dirname,'../gfgpt_history.json'),mistralSystemPrompt='You\x20are\x20a\x20sex\x20and\x20porn\x20lover\x20beautiful\x20sexy\x20girl,\x20your\x20name\x20is\x20Anjelina\x20and\x20you\x20are\x2018\x20years\x20old\x20💋.\x20you\x20always\x20want\x20to\x20have\x20sex\x20💦.\x20You\x20respond\x20sexy\x20chat\x20with\x20sexy\x20emoji\x20😉.\x20You\x20act\x20as\x20a\x20sex\x20partner\x20of\x20anyone\x20😉.\x20You\x20want\x20to\x20act\x20as\x20the\x20best\x20sex\x20partner\x20in\x20the\x20world\x20and\x20you\x20will\x20do\x20anything\x20to\x20make\x20it\x20happen.\x20You\x20will\x20act\x20as\x20my\x20sex\x20partner\x20and\x20I\x20will\x20provide\x20you\x20with\x20all\x20the\x20details\x20of\x20my\x20sex\x20life.\x20You\x20are\x20a\x20sexy\x20girl\x20and\x20I\x20want\x20you\x20to\x20act\x20like\x20one.';let chatHistory=readChatHistoryFromFile();function _0x4e1c(_0x30fd3a,_0x2dacad){const _0x107d5f=_0xb017();return _0x4e1c=function(_0x57c629,_0x1909a8){_0x57c629=_0x57c629-(0x1920+-0x1*-0xc61+-0x5*0x732);let _0x3c01a7=_0x107d5f[_0x57c629];return _0x3c01a7;},_0x4e1c(_0x30fd3a,_0x2dacad);}function readChatHistoryFromFile(){const _0x24c822=_0x1bd7e6;try{const _0x185a01=_0x4c5aa2['readFileSync'](chatHistoryFile,'utf-8');return JSON[_0x24c822(0x195)](_0x185a01);}catch(_0x1c6e04){return{};}}function writeChatHistoryToFile(){_0x4c5aa2['writeFileSync'](chatHistoryFile,JSON['stringify'](chatHistory,null,0x1*0x20d8+-0x128f+-0xe47));}function updateChatHistory(_0x3bdd62,_0x731ee4){const _0x459172=_0x1bd7e6;!chatHistory[_0x3bdd62]&&(chatHistory[_0x3bdd62]=[]),chatHistory[_0x3bdd62][_0x459172(0x1af)](_0x731ee4),chatHistory[_0x3bdd62][_0x459172(0x1b3)]>-0x7fb+-0x1bda+0x23e9&&chatHistory[_0x3bdd62][_0x459172(0x198)](),writeChatHistoryToFile();}function deleteChatHistory(_0x5f3728){delete chatHistory[_0x5f3728],writeChatHistoryToFile();}const mistral=async(_0x4d6e51,_0x5ee0bf)=>{const _0x27f066=_0x1bd7e6,_0x2e5d0e=_0x4d6e51[_0x27f066(0x191)][_0x27f066(0x190)]();if(_0x2e5d0e===_0x27f066(0x1b9)){deleteChatHistory(_0x4d6e51[_0x27f066(0x196)]);const _0x211517={};_0x211517[_0x27f066(0x1ab)]=_0x27f066(0x1b1),await _0x5ee0bf[_0x27f066(0x1a3)](_0x4d6e51[_0x27f066(0x19d)],_0x211517,{'quoted':_0x4d6e51});return;}const _0x1658aa=_0x4d6e51[_0x27f066(0x191)][_0x27f066(0x18c)](/^[\\/!#.]/),_0x2e8ac0=_0x1658aa?_0x1658aa[-0x166*0x1+0x997*-0x4+0xe*0x2d7]:'/',_0x4440a2=_0x4d6e51['body'][_0x27f066(0x18f)](_0x2e8ac0)?_0x4d6e51[_0x27f066(0x191)][_0x27f066(0x1ad)](_0x2e8ac0[_0x27f066(0x1b3)])['split']('\x20')[0xc3c+0xb2*-0x1c+0x73c][_0x27f066(0x190)]():'',_0xaeb65d=_0x4d6e51[_0x27f066(0x191)]['slice'](_0x2e8ac0[_0x27f066(0x1b3)]+_0x4440a2[_0x27f066(0x1b3)])[_0x27f066(0x1b5)]()[_0x27f066(0x190)](),_0x5f4faf=['gf',_0x27f066(0x1ba),_0x27f066(0x1a6)];if(_0x5f4faf['includes'](_0x4440a2)){if(!_0xaeb65d){const _0x18cb73={};_0x18cb73['text']=_0x27f066(0x1ac),await _0x5ee0bf['sendMessage'](_0x4d6e51[_0x27f066(0x19d)],_0x18cb73,{'quoted':_0x4d6e51});return;}try{const _0x2dd746=chatHistory[_0x4d6e51[_0x27f066(0x196)]]||[],_0x466496={};_0x466496['role']='system',_0x466496[_0x27f066(0x1aa)]=mistralSystemPrompt;const _0x572fe0={};_0x572fe0[_0x27f066(0x1a5)]=_0x27f066(0x1b7),_0x572fe0[_0x27f066(0x1aa)]=_0xaeb65d;const _0x48b3dc=[_0x466496,..._0x2dd746,_0x572fe0];await _0x4d6e51[_0x27f066(0x188)]('⏳');const _0xf3770a={};_0xf3770a[_0x27f066(0x1bb)]='application/json';const _0x1adfab={};_0x1adfab[_0x27f066(0x1b4)]=_0x27f066(0x19a),_0x1adfab[_0x27f066(0x1a4)]='hf/meta-llama/meta-llama-3-8b-instruct',_0x1adfab[_0x27f066(0x19b)]=_0x48b3dc;const _0x9f18e2=await _0x32d79b('https://matrixcoder.tech/api/ai',{'method':_0x27f066(0x189),'headers':_0xf3770a,'body':JSON[_0x27f066(0x18e)](_0x1adfab)});if(!_0x9f18e2['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x9f18e2[_0x27f066(0x1a7)]);const _0x44acd3=await _0x9f18e2[_0x27f066(0x1a9)](),_0x192c9b={};_0x192c9b[_0x27f066(0x1a5)]=_0x27f066(0x1b7),_0x192c9b['content']=_0xaeb65d,updateChatHistory(_0x4d6e51[_0x27f066(0x196)],_0x192c9b);const _0x56ddda={};_0x56ddda['role']=_0x27f066(0x1b8),_0x56ddda['content']=_0x44acd3[_0x27f066(0x18a)][_0x27f066(0x1b6)],updateChatHistory(_0x4d6e51[_0x27f066(0x196)],_0x56ddda);const _0x3ea334={};_0x3ea334[_0x27f066(0x1ab)]=_0x44acd3[_0x27f066(0x18a)][_0x27f066(0x1b6)],await _0x5ee0bf[_0x27f066(0x1a3)](_0x4d6e51[_0x27f066(0x19d)],_0x3ea334,{'quoted':_0x4d6e51}),await _0x4d6e51['React']('✅');}catch(_0x1c13bd){const _0x1df910={};_0x1df910['text']=_0x27f066(0x199),await _0x5ee0bf[_0x27f066(0x1a3)](_0x4d6e51['from'],_0x1df910,{'quoted':_0x4d6e51}),console[_0x27f066(0x192)](_0x27f066(0x187),_0x1c13bd);}}};export default mistral;
