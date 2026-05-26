/* === EMAIL === */
(function(){
  const u='johndevadhm',d='gmail.com';
  const a=document.getElementById('em-a');
  const t=document.getElementById('em-t');
  if(a) a.href='mailto:'+u+'@'+d;
  if(t) t.textContent=u+'@'+d;
})();

window.__jdd_main_loaded = true;

if (window.__jdd_loader_done) {
  init();
} else {
  window.addEventListener('jdd_loader_complete', () => {
    init();
  });
}

function init(){

const LANG={
  fr:{
    nh:'Accueil',na:'À propos',nc:'Contact',
    htag:'Développeur Web Full-Stack · Cotonou, Bénin',
    hsub:'Je conçois des applications web modernes et maintenables, avec un focus sur performance, UX et robustesse backend.',
    hcta:'Voir les projets',
    plbl:'Réalisations phares',ptit:'Projets',
    p1:'Site vitrine complet pour une agence créative — architecture frontend solide, expérience utilisateur soignée et performances web optimisées.',
    p2:'Plateforme web pour une factory d\'agents IA — interface métier avancée, architecture modulaire et intégration backend robuste.',
    qtext:'"Chaque mission est traitée avec une logique produit : clarté fonctionnelle, implémentation solide et livraison propre."',
    qattr:'sa philosophie de travail',
    sklbl:'Expertise',sktit:'Stack',
    li:'Intermédiaire',la:'Maîtrisé',ll:"En apprentissage",ln:'Notions',
    abint:"Développeur Web Full-Stack freelance basé à Cotonou, Bénin. Je conçois des applications web modernes et maintenables, avec un focus sur la performance, l'UX et la robustesse backend. Chaque mission est traitée avec une logique produit claire — de la spécification au déploiement.",
    abav:'Disponible pour de nouvelles missions',abtg:"Clients Bénin · France · Afrique de l'Ouest",
    stlbl:'Parcours',sttit:'Formation',
    edu1:"Cotonou, Bénin — Formation en informatique et réseaux. Systèmes, architecture logicielle et développement. La théorie qui renforce la pratique quotidienne.",
    st1t:'Autodidacte Web',
    st1d:"Cotonou, Bénin — Premiers projets web en autonomie. HTML, CSS, JavaScript, puis React et Node.js. L'apprentissage par la pratique comme seule règle.",
    st2t:'Freelance Full-Stack',
    st2d:"Projets clients réels. De la maquette au déploiement. Chaque mission est l'occasion de livrer de la valeur business concrète et mesurable.",
    st3t:"What's Next",
    st3d:"Applications plus ambitieuses, APIs plus robustes, et la conviction que l'Afrique de l'Ouest produit des développeurs de classe mondiale.",
    inlbl:'Au-delà du code',intit:"L'humain",
    i1t:'Tech & Innovation',i1d:"Passionné par les nouvelles tendances du web et l'écosystème startup africain. La technologie comme levier de transformation réelle.",
    i2t:'Gaming',i2d:"Les systèmes de jeu comme source d'inspiration pour la conception d'UX et de logiques produit. Le meilleur game design enseigne la fluidité.",
    i3t:'Lecture',i3d:"Business, entrepreneuriat, architecture logicielle. Les livres comme raccourcis vers l'expérience accumulée des autres — et les erreurs à éviter.",
    i4t:'Afrique Digitale',i4d:"La conviction profonde que les développeurs africains sont en train de construire les prochains grands produits numériques du continent.",
    ph1:'Clarté fonctionnelle. Implémentation solide.',ph2:"L'objectif est la valeur business.",phinsp:'sa philosophie de travail',
    nblbl:'En chiffres',nbtit:'Impact',nb1:'Projets livrés',nb2:'Satisfaction client',nb3:"Années d'expérience",
    tmlbl:'Ce qu\'ils disent',tmtit:'Témoignages',
    fqlbl:'Questions fréquentes',fqtit:'FAQ',
    ctlbl:'Travaillons ensemble',ct1:'Construisons',ct2:'quelque chose',ct3:'ensemble.',
    ctd:"Vous cherchez un développeur Full-Stack qui livre proprement, pense produit et communique clairement ? Si c'est votre projet — parlons.",
    emlbl:'Email',soclbl:'Réseaux',
    loclbl:'Basé à',locsub:"Bénin, Afrique de l'Ouest · GMT+1"
  },
  en:{
    nh:'Home',na:'About',nc:'Contact',
    htag:'Full-Stack Web Developer · Cotonou, Bénin',
    hsub:'I build modern, maintainable web applications with a focus on performance, UX and backend robustness.',
    hcta:'See work',
    plbl:'Featured Work',ptit:'Projects',
    p1:'Full-scale showcase website for a creative agency — solid frontend architecture, refined user experience and optimised web performance.',
    p2:'Web platform for an AI agent factory — advanced business interface, modular architecture and robust backend integration.',
    qtext:'"Every mission is handled with product-thinking: functional clarity, solid implementation and clean delivery."',
    qattr:'his work philosophy',
    sklbl:'Expertise',sktit:'Stack',
    li:'Intermediate',la:'Advanced',ll:'Learning',ln:'Notions',
    abint:"Full-Stack Freelance Web Developer based in Cotonou, Bénin. I design modern, maintainable web applications with a focus on performance, UX and backend robustness. Every mission is handled with a clear product mindset — from specification to deployment.",
    abav:'Available for new projects',abtg:'Clients in Bénin · France · West Africa',
    stlbl:'Journey',sttit:'Timeline',
    edu1:"Cotonou, Bénin — Computer science and networking degree. Systems, software architecture and development. Theory that strengthens daily practice.",
    st1t:'Self-taught Web Dev',
    st1d:"Cotonou, Bénin — First web projects built independently. HTML, CSS, JavaScript, then React and Node.js. Learning by doing as the only rule.",
    st2t:'Full-Stack Freelance',
    st2d:'Real client projects. From wireframe to deployment. Every mission is an opportunity to deliver concrete, measurable business value.',
    st3t:"What's Next",
    st3d:'More ambitious applications, more robust APIs, and the conviction that West Africa produces world-class developers.',
    inlbl:'Beyond Code',intit:'The Human',
    i1t:'Tech & Innovation',i1d:'Passionate about new web trends and the African startup ecosystem. Technology as a lever for real transformation.',
    i2t:'Gaming',i2d:'Game systems as inspiration for UX design and product logic. The best game design teaches fluidity.',
    i3t:'Reading',i3d:"Business, entrepreneurship, software architecture. Books as shortcuts to others' accumulated experience — and mistakes to avoid.",
    i4t:'Digital Africa',i4d:'The deep conviction that African developers are building the next great digital products of the continent.',
    ph1:'Functional clarity. Solid implementation.',ph2:'The objective is business value.',phinsp:'his work philosophy',
    nblbl:'By the Numbers',nbtit:'Impact',nb1:'Projects Shipped',nb2:'Client Satisfaction',nb3:'Years of Experience',
    tmlbl:'What they say',tmtit:'Testimonials',
    fqlbl:'Frequently Asked',fqtit:'FAQ',
    ctlbl:'Get in touch',ct1:"Let's",ct2:'build',ct3:'something.',
    ctd:"Looking for a Full-Stack developer who ships cleanly, thinks product and communicates clearly? If that's your project — let's talk.",
    emlbl:'Email',soclbl:'Networks',
    loclbl:'Based in',locsub:'Bénin, West Africa · GMT+1'
  }
};

let CL='fr';
function setLang(l){
  CL=l;
  const T=LANG[l];
  document.querySelectorAll('[data-k]').forEach(el=>{
    const k=el.dataset.k;
    if(T[k]!==undefined) el.textContent=T[k];
  });
  document.documentElement.lang=l==='fr'?'fr':'en';
  document.querySelectorAll('.lb').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
}

document.querySelectorAll('.lb').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.l)));
setLang('fr');

/* === FAQ ACCORDION === */
document.querySelectorAll('.faqq').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faqi');
    const isOpen=item.classList.contains('open');
    document.querySelectorAll('.faqi').forEach(i=>i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});

/* === LENIS + GSAP === */
const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

class Lenis{
  constructor(){
    this.target=window.scrollY;this.current=window.scrollY;
    this.listeners=[];this._touch=null;
    window.addEventListener('wheel',e=>{
      e.preventDefault();
      this.target=Math.max(0,Math.min(document.body.scrollHeight-window.innerHeight,this.target+e.deltaY));
    },{passive:false});
  }
  raf(){
    this.current+=(this.target-this.current)*0.095;
    if(Math.abs(this.target-this.current)<0.5) this.current=this.target;
    window.scrollTo(0,this.current);
    this.listeners.forEach(fn=>fn({scroll:this.current}));
  }
  on(ev,fn){if(ev==='scroll') this.listeners.push(fn);}
  scrollTo(el,{offset=0}={}){
    if(typeof el==='string') el=document.querySelector(el);
    if(!el) return;
    this.target=Math.max(0,el.getBoundingClientRect().top+window.scrollY+offset);
  }
}

let lenis;
if(isTouch){
  lenis={
    on:(ev,fn)=>{
      if(ev==='scroll') window.addEventListener('scroll',()=>fn({scroll:window.scrollY}),{passive:true});
    },
    scrollTo:(el,{offset=0}={})=>{
      if(typeof el==='string') el=document.querySelector(el);
      if(!el) return;
      const y=el.getBoundingClientRect().top+window.scrollY+offset;
      window.scrollTo({top:y,behavior:'smooth'});
    }
  };
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(false);
  window.addEventListener('scroll',ScrollTrigger.update,{passive:true});
} else {
  lenis=new Lenis();
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.add(()=>lenis.raf());
  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll',ScrollTrigger.update);
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t) lenis.scrollTo(t,{offset:-80});
    document.getElementById('mn').classList.remove('open');
  });
});

/* === THREE.JS hero === */
(function(){
  if(typeof THREE==='undefined') return;
  const cv=document.getElementById('hcv');
  if(!cv) return;
  const W=window.innerWidth,H=window.innerHeight;
  const scene=new THREE.Scene();
  const cam=new THREE.PerspectiveCamera(55,W/H,.1,100);
  cam.position.set(0,0,5.5);
  const ren=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
  ren.setSize(W,H);
  ren.setPixelRatio(Math.min(devicePixelRatio,2));
  ren.setClearColor(0,0);
  const m1=new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.5,1),
    new THREE.MeshBasicMaterial({color:0x7D39EB,wireframe:true,transparent:true,opacity:.1})
  );
  m1.position.set(2.2,0,0);
  scene.add(m1);
  const m2=new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.3,0),
    new THREE.MeshBasicMaterial({color:0xC6FF33,wireframe:true,transparent:true,opacity:.07})
  );
  m2.position.set(1.6,.4,0);
  scene.add(m2);
  const m3=new THREE.Mesh(
    new THREE.TorusGeometry(3.3,.7,6,44),
    new THREE.MeshBasicMaterial({color:0,wireframe:true,transparent:true,opacity:.035})
  );
  m3.rotation.x=Math.PI/4;
  m3.position.set(2,0,0);
  scene.add(m3);
  let mx=0,my=0,tx=0,ty=0,sy=0;
  document.addEventListener('mousemove',e=>{
    mx=(e.clientX/window.innerWidth-.5);
    my=-(e.clientY/window.innerHeight-.5);
  });
  lenis.on('scroll',({scroll})=>{sy=scroll;});
  (function tick(){
    requestAnimationFrame(tick);
    tx+=(mx*.22-tx)*.05;
    ty+=(my*.18-ty)*.05;
    m1.rotation.x+=.0024;m1.rotation.y+=.004+tx*.007;
    m2.rotation.x-=.003;m2.rotation.y-=.002;
    m3.rotation.z+=.001;m3.rotation.y+=.0018;
    const p=sy*.0014;
    m1.position.y=-p;
    m2.position.y=.4-p*.5;
    ren.render(scene,cam);
  })();
  window.addEventListener('resize',()=>{
    const W2=window.innerWidth,H2=window.innerHeight;
    cam.aspect=W2/H2;
    cam.updateProjectionMatrix();
    ren.setSize(W2,H2);
  });
})();

  const loader = document.getElementById('loader');
  const tl = gsap.timeline({
    onComplete: () => {
      if (loader) loader.style.display = 'none';
    }
  });

  if (loader) {
    tl.to(loader, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut'
    }, 0);
  }

  const startTime = 0.5;

  tl.from('.ht', {
    opacity: 0,
    y: 14,
    duration: 0.8,
    ease: 'power3.out'
  }, startTime);

  document.querySelectorAll('.rs').forEach((s, i) => {
    tl.from(s, {
      y: '112%',
      duration: 1.3,
      ease: 'power4.out'
    }, startTime + 0.15 + i * 0.12);
  });

  tl.from('.hb', {
    opacity: 0,
    y: 22,
    duration: 0.9,
    ease: 'power3.out'
  }, startTime + 0.55);

  tl.from('.sc', {
    opacity: 0,
    duration: 1
  }, startTime + 1.1);

gsap.utils.toArray('.sl').forEach(el=>gsap.from(el,{opacity:0,x:-16,duration:.7,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}}));
gsap.utils.toArray('.st').forEach(el=>gsap.from(el,{opacity:0,y:32,duration:1,ease:'power4.out',scrollTrigger:{trigger:el,start:'top 84%'}}));
gsap.from('.bc',{opacity:0,y:55,duration:.85,ease:'power3.out',stagger:.08,scrollTrigger:{trigger:'.bento',start:'top 82%'}});
gsap.to('.qt',{y:-55,ease:'none',scrollTrigger:{trigger:'#quote',start:'top bottom',end:'bottom top',scrub:true}});

gsap.to('.abh',{y:-50,ease:'none',scrollTrigger:{trigger:'#about',start:'top bottom',end:'bottom top',scrub:true}});
gsap.from('.tli',{opacity:0,x:-32,duration:.75,ease:'power3.out',stagger:.1,scrollTrigger:{trigger:'.tl',start:'top 83%'}});
gsap.from('.inc',{opacity:0,y:32,duration:.7,ease:'power3.out',stagger:.1,scrollTrigger:{trigger:'.ing',start:'top 83%'}});
gsap.to('.phq',{y:-50,ease:'none',scrollTrigger:{trigger:'#philosophy',start:'top bottom',end:'bottom top',scrub:true}});
gsap.from('.phj',{opacity:0,y:16,duration:1,ease:'power3.out',scrollTrigger:{trigger:'#philosophy',start:'top 82%'}});
gsap.from('.nbi',{opacity:0,y:28,duration:.8,ease:'power3.out',stagger:.18,scrollTrigger:{trigger:'.nbg',start:'top 82%'}});
gsap.from('.tmc',{opacity:0,y:40,duration:.8,ease:'power3.out',stagger:.12,scrollTrigger:{trigger:'.tmg',start:'top 83%'}});
gsap.from('.faqi',{opacity:0,y:20,duration:.6,ease:'power3.out',stagger:.07,scrollTrigger:{trigger:'.faqg',start:'top 85%'}});
gsap.from('.cth',{opacity:0,y:55,duration:1.2,ease:'power4.out',scrollTrigger:{trigger:'.cth',start:'top 84%'}});
gsap.from('.cts',{opacity:0,y:18,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.cts',start:'top 86%'}});
gsap.from('.el',{opacity:0,x:-28,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.el',start:'top 86%'}});
gsap.from('.soca',{opacity:0,x:-18,duration:.6,ease:'power3.out',stagger:.09,scrollTrigger:{trigger:'.socl',start:'top 83%'}});
gsap.from('.locn',{opacity:0,y:35,duration:1,ease:'power4.out',scrollTrigger:{trigger:'.locn',start:'top 83%'}});
gsap.to('.locn',{y:-40,ease:'none',scrollTrigger:{trigger:'#location',start:'top bottom',end:'bottom top',scrub:true}});

document.querySelectorAll('.bc').forEach(c=>{
  c.addEventListener('mousemove',e=>{
    const r=c.getBoundingClientRect();
    gsap.to(c,{rotateX:-(e.clientY-r.top)/r.height*.5*7+7*.25,rotateY:(e.clientX-r.left)/r.width*7-3.5,transformPerspective:900,duration:.4,ease:'power2.out'});
  });
  c.addEventListener('mouseleave',()=>gsap.to(c,{rotateX:0,rotateY:0,duration:.7,ease:'power3.out'}));
});

(function(){
  if(window.matchMedia('(hover: none)').matches) return;
  const dot=document.getElementById('cd'),ring=document.getElementById('cr');
  if(!dot||!ring) return;

  let mx=window.innerWidth/2, my=window.innerHeight/2;
  let rx=mx, ry=my;
  let isVisible=false;
  let firstMove=true;
  let isTouching=false;

  window.addEventListener('touchstart',()=>{
    isTouching=true;
    dot.classList.remove('visible');
    ring.classList.remove('visible');
  },{passive:true});

  window.addEventListener('touchend',()=>{
    setTimeout(()=>{isTouching=false;},500);
  },{passive:true});

  document.addEventListener('mousemove',e=>{
    if(isTouching) return;
    mx=e.clientX; my=e.clientY;
    if(firstMove){
      rx=mx; ry=my;
      firstMove=false;
    }
    if(!isVisible){
      isVisible=true;
      dot.classList.add('visible');
      ring.classList.add('visible');
    }
    dot.style.transform=`translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  },{passive:true});

  document.addEventListener('mouseleave',()=>{
    isVisible=false;
    dot.classList.remove('visible');
    ring.classList.remove('visible');
    firstMove=true;
  });

  (function loop(){
    if(isVisible){
      rx+=(mx-rx)*.12;
      ry+=(my-ry)*.12;
      ring.style.transform=`translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    }
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a,button,.bc,.inc,.soca,.tmc,.faqq').forEach(el=>{
    el.addEventListener('mouseenter',()=>{
      if(isVisible) ring.classList.add('h');
    });
    el.addEventListener('mouseleave',()=>{
      ring.classList.remove('h');
    });
  });
})();

document.getElementById('nhb').addEventListener('click',()=>document.getElementById('mn').classList.add('open'));
document.getElementById('mc').addEventListener('click',()=>document.getElementById('mn').classList.remove('open'));

['hero','about','contact'].forEach(id=>{
  const el=document.getElementById(id);
  if(!el) return;
  ScrollTrigger.create({trigger:el,start:'top 60%',end:'bottom 60%',onEnter:()=>setActive(id),onEnterBack:()=>setActive(id)});
});
function setActive(id){
  document.querySelectorAll('.na').forEach(l=>l.classList.toggle('act',l.getAttribute('href')==='#'+id));
}

/* === HORLOGE BÉNIN : UTC+1 === */
(function(){
  const tEl=document.getElementById('ftt'),dEl=document.getElementById('ftd');
  const DAY={
    en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    fr:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
  };
  const MON={
    en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    fr:['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc']
  };
  function tick(){
    const now=new Date();
    const bj=new Date(now.getTime()+now.getTimezoneOffset()*60000+3600000);
    tEl.textContent=
      String(bj.getHours()).padStart(2,'0')+':'+
      String(bj.getMinutes()).padStart(2,'0')+':'+
      String(bj.getSeconds()).padStart(2,'0');
    const l=CL in DAY?CL:'fr';
    dEl.textContent=DAY[l][bj.getDay()]+' '+bj.getDate()+' '+MON[l][bj.getMonth()]+' '+bj.getFullYear();
  }
  tick();
  setInterval(tick,1000);
})();

}
