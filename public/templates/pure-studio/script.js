const menu=document.querySelector('.menu');const header=document.querySelector('header');
const closeMenu=()=>{header?.classList.remove('open');menu?.setAttribute('aria-expanded','false')};
menu?.addEventListener('click',()=>{const open=header?.classList.toggle('open');menu.setAttribute('aria-expanded',String(Boolean(open)))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.querySelectorAll('.services article button').forEach(button=>button.addEventListener('click',()=>button.parentElement.classList.toggle('open')));
document.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.reset();document.querySelector('.form-result').textContent='Consultation request received.'});
