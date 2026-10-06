// Always open the site at the top unless the visitor intentionally used a section link.
if(!window.location.hash){
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  window.scrollTo(0,0);
  window.addEventListener('pageshow',()=>window.scrollTo(0,0));
}

const header=document.querySelector('header');
const menu=document.querySelector('.menu');
if(menu&&header){menu.addEventListener('click',()=>header.classList.toggle('open'));}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>header?.classList.remove('open')));

const philosophyHeading=document.querySelector('.statement h2');
if(philosophyHeading){
  philosophyHeading.style.fontSize='clamp(30px, 3.2vw, 46px)';
  philosophyHeading.style.lineHeight='1.08';
}

const form=document.querySelector('#interestForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const note=document.querySelector('#formNote');if(note){note.textContent="Thanks — the visual demo is working. Next we'll connect this form to your real enquiry inbox or booking system.";note.style.fontWeight='700';}});}
