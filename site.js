// Set this only after Apple provides the official public listing URL.
const SITE_CONFIG = Object.freeze({
  appStoreUrl: '',
  supportEmail: 'jop.hackworth@gmail.com',
});

if (SITE_CONFIG.appStoreUrl) {
  const url = new URL(SITE_CONFIG.appStoreUrl);
  if (url.protocol === 'https:' && url.hostname === 'apps.apple.com') {
    document.querySelectorAll('[data-store-link]').forEach((placeholder) => {
      const link = document.createElement('a');
      link.className = placeholder.className.replace('pending', 'available');
      link.href = url.href;
      link.rel = 'noopener noreferrer';
      link.target = '_blank';
      link.textContent = placeholder.dataset.label || 'App Store';
      placeholder.replaceWith(link);
    });
  }
}

document.querySelectorAll('[data-support-email]').forEach((placeholder) => {
  const link = document.createElement('a');
  link.href = 'mailto:' + SITE_CONFIG.supportEmail;
  link.textContent = SITE_CONFIG.supportEmail;
  placeholder.replaceWith(link);
});
