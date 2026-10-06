/**
 * Progressive enhancement for lead forms (`form[data-lead-form]`).
 *  - Prefills selects from the query string (?product=…&reason=…).
 *  - POSTs to `data-endpoint` as JSON when configured, then redirects to the thank-you page.
 *  - Without an endpoint (demo mode) it validates and redirects without sending anything.
 */
const params = new URLSearchParams(location.search);

for (const form of document.querySelectorAll<HTMLFormElement>('form[data-lead-form]')) {
  for (const key of ['product', 'reason']) {
    const value = params.get(key);
    const field = form.elements.namedItem(key);
    if (!value || !(field instanceof HTMLSelectElement || field instanceof RadioNodeList)) continue;
    if (field instanceof HTMLSelectElement) {
      if ([...field.options].some((o) => o.value === value)) field.value = value;
    } else {
      field.value = value;
    }
  }

  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const endpoint = form.dataset.endpoint;
    const next = form.dataset.next ?? '/thank-you/';
    submit?.setAttribute('disabled', '');
    if (status) status.textContent = 'Sending…';

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      }
      location.assign(next);
    } catch {
      submit?.removeAttribute('disabled');
      if (status) status.textContent = 'Something went wrong. Please call us or email support@ledgerline.example.';
    }
  });
}
