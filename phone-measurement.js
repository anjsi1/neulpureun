(function () {
  'use strict';
  var lastClick = -Infinity;
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      var now = Date.now();
      if (now - lastClick < 800) return;
      lastClick = now;
      // Keep native tel navigation intact even when the tag is blocked.
      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18091235588/R0_HCPmi2IwdEISyybJD',
            button_position: link.dataset.position,
            transport_type: 'beacon'
          });
        }
      } catch (error) { /* Measurement must never prevent a phone call. */ }
    });
  });
})();
