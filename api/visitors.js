import { Redis } from '@upstash/redis'

const ACTIVE_WINDOW_MS = 90_000
const VISITOR_ID_PATTERN = /^[a-zA-Z0-9-]{16,80}$/

function getRedis() {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error('Visitor counter is not configured.')
  }

  return Redis.fromEnv()
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
    const redis = getRedis()
    const now = Date.now()
    const cutoff = now - ACTIVE_WINDOW_MS

    await redis.zadd('portfolio:active-visitors', {
      score: now,
      member: visitorId,
    })
    await redis.zremrangebyscore('portfolio:active-visitors', 0, cutoff)
    await redis.pfadd('portfolio:unique-visitors', visitorId)

    const [activeVisitors, totalVisitors] = await Promise.all([
      redis.zcard('portfolio:active-visitors'),
      redis.pfcount('portfolio:unique-visitors'),
    ])

    response.setHeader('Cache-Control', 'no-store')
    return response.status(200).json({ activeVisitors, totalVisitors })
  } catch (error) {
    console.error('Unable to update visitor count.', error)
    return response.status(503).json({ error: 'Visitor counter unavailable.' })
  }
}
