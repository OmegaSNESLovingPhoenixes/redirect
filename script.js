var win = window.open(); win.document.body.style.margin = '0';
win.document.body.style.height = '100vh';
var iframe = win.document.createElement('iframe');
iframe.style.border = 'none'; iframe.style.width = '100%';
iframe.style.height = '100%'; iframe.style.margin = '0';
iframe.src = 'https://cognition-dev.github.io';
win.document.body.appendChild(iframe);
window.location.href = ‘https://www.google.com/
const closeTab = () => {
    window.close(``, `_parent`, ``);
};
