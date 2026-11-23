const menu=document.querySelector('.menu');const header=document.querySelector('header');
const closeMenu=()=>{header?.classList.remove('open');menu?.setAttribute('aria-expanded','false')};
menu?.addEventListener('click',()=>{const open=header?.classList.toggle('open');menu.setAttribute('aria-expanded',String(Boolean(open)))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const menus={
Lunch:[['01','Roasted pumpkin','Tahini, apple, pumpkin seed','220 Kč'],['02','Chicken sandwich','Pickle, herbs, mustard','260 Kč'],['03','Market fish plate','Potato, fennel, lemon','340 Kč']],
Dinner:[['01','Beef tartare','Radish, cured yolk, sourdough','320 Kč'],['02','Herb roast chicken','Green beans, jus, crispy potato','390 Kč'],['03','Wood-fired market fish','Fennel, butter, preserved lemon','420 Kč']],
Dessert:[['01','Roasted pear','Almond cream, walnut','180 Kč'],['02','Chocolate tart','Crème fraîche, sea salt','210 Kč'],['03','Daily sorbet','Three seasonal flavors','150 Kč']]
};
const renderMenu=name=>{document.querySelector('.dish-list').innerHTML=menus[name].map(([number,dish,details,price])=>`<article><b>${number}</b><div><h3>${dish}</h3><p>${details}</p></div><strong>${price}</strong></article>`).join('')};
document.querySelectorAll('.menu-tabs button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.menu-tabs button').forEach(b=>b.classList.remove('active'));button.classList.add('active');renderMenu(button.textContent.trim())}));
document.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.reset();document.querySelector('.form-result').textContent='Table request received — see you soon.'});
