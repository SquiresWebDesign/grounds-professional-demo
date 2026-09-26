const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.right = '6%';
  nav.style.background = '#fff';
  nav.style.padding = '18px 22px';
  nav.style.borderRadius = '10px';
  nav.style.boxShadow = '0 12px 35px #0002';
});
