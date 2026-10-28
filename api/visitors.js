const VISITOR_ID_PATTERN = /^[a-zA-Z0-9-]{16,80}$/

function getSupabaseConfig() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Visitor counter is not configured.')
  }

  return {
    url: process.env.SUPABASE_URL.replace(/\/+$/, ''),
    key: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const visitorId = typeof request.body?.visitorId === 'string'
    ? request.body.visitorId
    : ''

  if (!VISITOR_ID_PATTERN.test(visitorId)) {
    return response.status(400).json({ error: 'Invalid visitor ID.' })
  }

  try {
    const { url, key } = getSupabaseConfig()
    const supabaseResponse = await fetch(`${url}/rest/v1/rpc/record_visitor`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ p_visitor_id: visitorId }),
    })

    if (!supabaseResponse.ok) {
      const details = await supabaseResponse.text()
      throw new Error(`Supabase request failed: ${details}`)
    }

    const counts = await supabaseResponse.json()

    if (
      typeof counts.activeVisitors !== 'number'
      || typeof counts.totalVisitors !== 'number'
    ) {
      throw new Error('Supabase returned an invalid visitor count.')
    }

    response.setHeader('Cache-Control', 'no-store')
    return response.status(200).json({
      activeVisitors: counts.activeVisitors,
      totalVisitors: counts.totalVisitors,
    })
  } catch (error) {
    console.error('Unable to update visitor count.', error)
    return response.status(503).json({ error: 'Visitor counter unavailable.' })
  }
}
