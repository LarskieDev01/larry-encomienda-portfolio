// Cloudflare Pages Function for a privacy-minimal approximate visit counter.
// Bind a Cloudflare D1 database as DB. Do not publish private visitor information.
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'access-control-allow-origin': 'same-origin',
    'x-content-type-options': 'nosniff'
  }
});

export async function onRequest(context) {
  const { request, env } = context;
  if (!env.DB) return json({ error: 'Database binding DB is not configured' }, 503);
  const method = request.method.toUpperCase();
  try {
    if (method === 'GET') {
      const row = await env.DB.prepare('SELECT visits FROM site_counter WHERE id = 1').first();
      return json({ visits: Number(row?.visits ?? 0), measurement: 'approximate visits' });
    }
    if (method === 'POST') {
      const row = await env.DB.prepare(`
        INSERT INTO site_counter (id, visits) VALUES (1, 1)
        ON CONFLICT(id) DO UPDATE SET visits = visits + 1
        RETURNING visits
      `).first();
      return json({ visits: Number(row.visits), measurement: 'approximate visits' });
    }
    return json({ error: 'Method not allowed' }, 405);
  } catch (error) {
    console.error('Visitor counter error:', error);
    return json({ error: 'Visitor counter temporarily unavailable' }, 503);
  }
}
