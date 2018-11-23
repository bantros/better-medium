// content.js

const targets = [
  '.butterBar',
  '.js-overlayDialog',
  '.js-metabar',
  '.js-metabarSpacer',
  '.js-stickyFooter',
  '.js-meterBanner'
];

const hideElem = target => {
  const nodeList = [...document.querySelectorAll(target)];

  if (!nodeList) return;

  nodeList.forEach(elem => {
    elem.style.display = 'none';
    elem.style.opacity = '0';
  });
};

const render = () => {
  if (window.location.pathname !== '/') {
    targets.forEach(target => hideElem(target));
  }
};

const mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      // console.log(mutation);

      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.classList.value === 'surface') {
          setTimeout(() => {
            render();
          }, 500);
        }

        // if (node.classList.contains === 'js-meterBanner') {
        //   console.log('js-meterBanner');
        // }

        if (node.classList.value === 'overlay overlay--lighter') {
          document.documentElement.classList.remove('u-overflowHidden');
          node.style.display = 'none';
          node.style.opacity = '0';
        }
      }
    });
  });
});

// Starts listening for changes in the root HTML element of the page.
mutationObserver.observe(document.body, {
  attributes: false,
  characterData: false,
  childList: true,
  subtree: true,
  attributeOldValue: false,
  characterDataOldValue: false
});

render();

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.message === 'changeInfo.url') {
//     setInterval(() => {
//       render();
//     }, 0);
//   }
// });
