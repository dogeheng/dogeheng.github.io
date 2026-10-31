import '../vendor/local-splatoon/client/src/styles.css';
import './demo.css';
import {GameClient} from '../vendor/local-splatoon/client/src/game/game';
import {Sfx} from '../vendor/local-splatoon/client/src/audio/sfx';
import {Hud} from '../vendor/local-splatoon/client/src/ui/hud';
import {ResultsView} from '../vendor/local-splatoon/client/src/ui/results';
import type {Net} from '../vendor/local-splatoon/client/src/net/connection';
import {OfflineArena,type Mode} from './offline';
import {getLanguage,gameCopy,onGameLanguageChange,localizeGameText} from './locale';
const canvas=document.getElementById('scene') as HTMLCanvasElement;
const labels=document.getElementById('labels')!;
const ui=document.getElementById('ui')!;
const hud=new Hud();const results=new ResultsView();const sfx=new Sfx();
// Keep the original procedural effects; this small static demo does not fetch BGM.
(sfx as unknown as {loadMusic:()=>Promise<void>}).loadMusic=async()=>{};
let mode:Mode='bot';
const net=new OfflineArena(message=>{switch(message.t){case'welcome':game.enterRoom(message);break;case'lobby':game.onLobby(message);break;case'cd':game.onCountdown(message);break;case's':game.onSnapshot(message);break;case'result':game.onResult(message);results.show(message,{me:1,myTeam:0,isPlayer:true,serverNow:()=>net.clock.serverNow(),onAgain:()=>start(mode),onLeave:()=>start('practice'),onTick:()=>sfx.play('tick'),onReveal:winner=>sfx.play(winner===0?'win':'lose')},net.lobby());break;}});
const game=new GameClient(canvas,labels,sfx,net as unknown as Net,{onKill:(by,victim)=>hud.kill(by,victim),onBanner:(text,kind)=>hud.banner(text,kind),onPhase:()=>{}});
ui.append(hud.el,results.el);hud.setMode('match');
const topBar=document.querySelector<HTMLElement>('.demo-top')!;
const footer=document.getElementById('demoFooter')!;
const status=document.getElementById('demoStatus')!;
status.append(hud.el.querySelector('.hud-top')!);
footer.append(hud.el.querySelector('.hud-bottom')!);
let lastLayout='';
function layoutGame(){const top=Math.ceil(topBar.getBoundingClientRect().bottom+8);const bottom=Math.ceil(innerHeight-footer.getBoundingClientRect().top+8);const key=`${innerWidth}/${innerHeight}/${top}/${bottom}`;if(key!==lastLayout){lastLayout=key;game.scene.setInsets({left:0,right:0,top,bottom})}}
const layoutObserver=new ResizeObserver(layoutGame);layoutObserver.observe(topBar);layoutObserver.observe(footer);addEventListener('resize',layoutGame);layoutGame();
const buttons=[...document.querySelectorAll<HTMLButtonElement>('[data-mode]')];
function start(next:Mode){mode=next;game.controls.clear();results.hide();buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mode===mode)));net.start(mode);canvas.focus();}
buttons.forEach(button=>button.addEventListener('click',()=>start(button.dataset.mode as Mode)));
document.getElementById('restart')!.addEventListener('click',()=>start(mode));
const updateSoundLabel=()=>{document.getElementById('sound')!.textContent=gameCopy(sfx.muted?'unmute':'mute')};
document.getElementById('sound')!.addEventListener('click',()=>{sfx.toggleMute();updateSoundLabel()});
game.controls.onMuteToggle=()=>{sfx.toggleMute();updateSoundLabel()};game.controls.onDebugToggle=()=>{hud.showDebug=!hud.showDebug};
function localizeControls(){document.documentElement.lang=getLanguage()==='zh'?'zh-CN':'en';document.title=gameCopy('brand');document.querySelector('.demo-brand')!.textContent=gameCopy('brand');document.querySelector('[data-mode="practice"]')!.textContent=gameCopy('practice');document.querySelector('[data-mode="bot"]')!.textContent=gameCopy('bot');document.getElementById('restart')!.textContent=gameCopy('restart');document.querySelector('.demo-hint')!.textContent=gameCopy('hint');document.querySelector('.demo-top nav')!.setAttribute('aria-label',gameCopy('nav'));canvas.setAttribute('aria-label',gameCopy('canvas'));document.querySelector('.touch-controls')!.setAttribute('aria-label',gameCopy('touch'));for(const key of ['swim','fire'] as const)document.querySelector(`[data-touch="${key}"]`)!.textContent=gameCopy(key);updateSoundLabel();layoutGame()}
onGameLanguageChange(localizeControls);localizeControls();
// Touch users get native buttons; the desktop controls remain unchanged.
const touchKeys:Record<string,string>={up:'KeyW',left:'KeyA',down:'KeyS',right:'KeyD',swim:'ShiftLeft'};
document.querySelectorAll<HTMLButtonElement>('[data-touch]').forEach(button=>{const action=button.dataset.touch!;const send=(down:boolean)=>{if(action==='fire'){game.controls.fireHeld=down;game.controls.mouseX=innerWidth*.68;game.controls.mouseY=innerHeight*.45;}else{dispatchEvent(new KeyboardEvent(down?'keydown':'keyup',{code:touchKeys[action],bubbles:true}));}};button.addEventListener('pointerdown',event=>{event.preventDefault();button.setPointerCapture(event.pointerId);send(true)});for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,()=>send(false));});
document.addEventListener('visibilitychange',()=>{if(document.hidden)game.controls.clear()});
let last=performance.now();function frame(now:number){const dt=Math.min(now-last,100);last=now;if(!document.hidden){net.advance(dt);game.frame(dt);hud.update(game);for(const root of [ui,labels,footer,status])localizeGameText(root)}requestAnimationFrame(frame)}
start(mode);requestAnimationFrame(frame);
Object.assign(window,{__game:game,__offlineArena:net,__demoStart:start});
