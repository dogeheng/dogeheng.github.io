import './i18n.js';
const hero=document.getElementById('profileHero');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const rig=window.createCompanionRig({host:document.getElementById('profilePuppet'),stage:hero,fallback:document.getElementById('profileFallback'),assetExtension:'webp'});
rig?.setVisible(true);if(reduced)rig?.setPaused(true);
window.profileRig=rig;
document.querySelector('.peeking-yuki').addEventListener('animationend',()=>{if(!reduced)rig?.play('wave')});
window.profileCaptureReady=document.fonts.ready.then(()=>new Promise(resolve=>{const timer=setInterval(()=>{if(hero.dataset.rigReady==='ready'){clearInterval(timer);resolve(true)}},30)}));
if(new URLSearchParams(location.search).has('still'))hero.classList.add('is-still');
window.renderProfileAt=(time,theme='light')=>{
  document.body.dataset.theme=theme;
  hero.getAnimations({subtree:true}).forEach(animation=>animation.cancel());
  const ease=(t)=>{t=Math.max(0,Math.min(1,t));return 1-Math.pow(1-t,3)};
  document.querySelector('.greeting').style.clipPath=`inset(0 ${100*(1-ease((time-.1)/1.2))}% -12px 0)`;
  document.querySelector('.name').style.clipPath=`inset(0 ${100*(1-ease((time-1.15)/2.1))}% -12px 0)`;
  document.querySelector('.peeking-yuki').style.transform=`translateX(${74*(1-ease((time-.75)/1.05))}%) rotate(-12deg)`;
  rig?.capture(time,'wave',time>4.5?Math.max(0,1-(time-4.5)*2):ease((time-.9)/.55));
};
