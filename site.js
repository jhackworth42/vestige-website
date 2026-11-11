const APP_STORE_URL = '';
const SUPPORT_EMAIL = 'jop.hackworth@gmail.com';
for (const link of document.querySelectorAll('.app-store-link')) {
  if (APP_STORE_URL) { link.href = APP_STORE_URL; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  else { link.href = '#'; link.addEventListener('click', event => { event.preventDefault(); alert('Vestige is coming to the App Store.'); }); }
}
for (const link of document.querySelectorAll('.support-email')) {
  link.href = 'mailto:' + SUPPORT_EMAIL; link.textContent = SUPPORT_EMAIL;
}
