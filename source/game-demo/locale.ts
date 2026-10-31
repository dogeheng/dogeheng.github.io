export type Language='en'|'zh';
const valid=(value:unknown):value is Language=>value==='en'||value==='zh';
let stored:string|null=null;try{stored=localStorage.getItem('peiheng-language')}catch{}
const requested=new URLSearchParams(location.search).get('lang');
let language:Language=valid(requested)?requested:valid(stored)?stored:'en';
const copies={
  en:{brand:'Splash Arena · 90-second demo',practice:'Practice',bot:'Play AI',restart:'Restart',mute:'Mute',unmute:'Sound on',swim:'Swim',fire:'Paint',hint:'WASD move · mouse aim · left click paint · Shift swim · right click bomb · E special',nav:'Demo options',canvas:'Splash Arena 3D arena',touch:'Touch controls'},
  zh:{brand:'Splash Arena · 90 秒试玩',practice:'自由练习',bot:'挑战 AI',restart:'重来',mute:'静音',unmute:'开启声音',swim:'潜游',fire:'涂色',hint:'WASD 移动 · 鼠标瞄准 · 左键涂色 · Shift 潜游 · 右键炸弹 · E 大招',nav:'试玩选项',canvas:'Splash Arena 三维游戏场地',touch:'触屏游戏操作'}
};
export const getLanguage=()=>language;
export const gameCopy=(key:keyof typeof copies.en)=>copies[language][key];
const listeners=new Set<()=>void>();
export function onGameLanguageChange(listener:()=>void){listeners.add(listener)}
export function setGameLanguage(value:unknown){if(!valid(value)||value===language)return;language=value;const url=new URL(location.href);url.searchParams.set('lang',value);history.replaceState(null,'',url.href);for(const listener of listeners)listener()}
addEventListener('message',event=>{if(event.origin===location.origin&&event.source===parent&&event.data?.type==='peiheng:set-locale')setGameLanguage(event.data.locale)});
addEventListener('storage',event=>{if(event.key==='peiheng-language')setGameLanguage(event.newValue)});
// Translate original HUD output without changing upstream simulation or UI callbacks.
const words:Record<string,string>={'墨水  ·  白线 = 炸弹所需':'Ink · line = bomb cost','无限墨水！':'Unlimited ink!','最后一分钟！':'Final minute!','墨潮！':'Ink surge!','开始！':'Go!','结束！':'Time!','评 判 中 …':'Judging…','最 终 结 果':'Final results','对 手 弃 权':'Opponent forfeited','平局！':'Draw!','橙队':'Orange','青队':'Mint','（我方）':' (your team)','（我）':' (you)','小薄荷 · AI':'Mint · AI','玩家':'Player','涂地格数':'Cells painted','被击倒':'Deaths','击倒':'Splats','再来一局':'Play again','已准备':'Ready','离开房间':'Free practice','队伍':'Team','状态':'Status','观战':'Spectator','在线':'Online','离线':'Offline'};
words['小薄']='Mint';
const entries=Object.entries(words).sort((a,b)=>b[0].length-a[0].length);
const textCache=new WeakMap<Text,{source:string;rendered:string}>();
export function localizeGameText(root:HTMLElement){const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);for(let node=walker.nextNode() as Text|null;node;node=walker.nextNode() as Text|null){const text=node.nodeValue||'',cached=textCache.get(node);const source=cached&&text===cached.rendered?cached.source:text;let rendered=source;if(language==='en'){rendered=source==='我'?'You':source==='你'?'You':source;if(rendered.includes('被击倒了…'))rendered=rendered.replace(/被击倒了…\s*([\d.]+) 秒后复活/,'Splatted… respawn in $1s');else if(rendered===' 击倒了 ')rendered=' splatted ';else for(const [from,to]of entries)rendered=rendered.split(from).join(to);rendered=rendered.replace(/^你(?=\s|[（(]|$)/,'You').replace(/(Orange|Mint)胜利！/,'$1 wins!');}if(rendered!==text)node.nodeValue=rendered;textCache.set(node,{source,rendered})}}
