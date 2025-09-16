/* Investoria minimal interactivity
   - Modal open/close
   - Provider-agnostic waitlist submit (plug in endpoint)
*/

(function () {
  const openBtn = document.getElementById('openWaitlist');
  const dialog = document.getElementById('waitlistModal');
  const form = document.getElementById('waitlistForm');
  const message = document.getElementById('formMessage');

  if (openBtn && dialog) {
    openBtn.addEventListener('click', () => {
      dialog.showModal();
    });
    dialog.addEventListener('click', (e) => {
      // click outside card closes
      const rect = dialog.querySelector('.modal__card').getBoundingClientRect();
      const isInCard = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!isInCard) dialog.close();
    });
    dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && dialog.open) dialog.close(); });
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      message.textContent = '';
      const email = /** @type {HTMLInputElement} */(form.querySelector('#email')).value.trim();
      if (!email) {
        message.textContent = 'Please enter a valid email.';
        return;
      }

      const endpoint = window.INVESTORIA_WAITLIST_ENDPOINT || '';
      if (!endpoint) {
        message.textContent = 'Form not active yet. Provide a waitlist endpoint to enable submissions.';
        return;
      }

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        if (!res.ok) throw new Error('Network response was not ok');
        message.textContent = 'Thanks! You\'re on the list.';
        form.reset();
      } catch (err) {
        console.error(err);
        message.textContent = 'Something went wrong. Please try again later.';
      }
    });
  }
})();

// Configure an endpoint at runtime by setting window.INVESTORIA_WAITLIST_ENDPOINT in an inline <script>
// Example: window.INVESTORIA_WAITLIST_ENDPOINT = 'https://formspree.io/f/xxxxxxx';



