/* Portfolio visit counter: one counted visit per browser tab session.
   This measures approximate visits, not unique people. Works only with a deployed
   Cloudflare Pages Function and a bound D1 database. No cookies or IPs stored. */
(async function initializeVisitCounter() {
  const output = document.getElementById('visitCount');
  if (!output) return;
  const storageKey = 'larry-portfolio-visit-v3';
  let previouslyCounted = false;
  try { previouslyCounted = sessionStorage.getItem(storageKey) === 'yes'; } catch (_) {}
  try {
    const response = await fetch('/api/visits', {
      method: previouslyCounted ? 'GET' : 'POST',
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    });
    if (!response.ok) throw new Error('Counter not configured');
    const data = await response.json();
    if (!Number.isSafeInteger(data.visits) || data.visits < 0) throw new Error('Invalid counter response');
    output.textContent = new Intl.NumberFormat('en-US').format(data.visits);
    if (!previouslyCounted) {
      try { sessionStorage.setItem(storageKey, 'yes'); } catch (_) {}
    }
  } catch (_) {
    output.textContent = '—';
    output.title = 'Visit count is available after Cloudflare D1 is configured';
  }
})();
