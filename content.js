// content.js

const metabar = document.querySelector('.js-metabar');
const metabarSpacer = document.querySelector('.js-metabarSpacer');
const stickyFooter = document.querySelector('.js-stickyFooter');

if (window.location.pathname !== '/') {
  metabar.style.display = 'none';
  metabarSpacer.style.display = 'none';
  stickyFooter.style.display = 'none';
}
