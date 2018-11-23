const betterMedium = () => {
  // Inject stylesheet
  // Chrome/Firefox extension availability
  if (typeof browser === 'undefined') {
    browser = chrome;
  }

  document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" type="text/css" href="' +
      browser.runtime.getURL('better-medium.css') +
      '">'
  );
};

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    betterMedium();
  });
});

if (
  document.querySelector(
    'head meta[property="al:ios:app_name"][content="medium" i]'
  )
) {
  betterMedium();

  // Watch for changes to body
  observer.observe(document.body, {
    attributes: true
  });
}
