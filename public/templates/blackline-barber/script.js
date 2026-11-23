const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');
const closeMenu=()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')};
menu?.addEventListener('click',()=>{const open=nav?.classList.toggle('open');menu.setAttribute('aria-expanded',String(Boolean(open)))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.reset();document.querySelector('.form-result').textContent='Request received — we will confirm your time.'});
