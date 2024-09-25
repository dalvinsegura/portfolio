import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
  
});

export async function getCachedResponse(prompt: string): Promise<string | null> {
  return redis.get(prompt);
}

export async function setCachedResponse(prompt: string, response: string): Promise<void> {
  await redis.set(prompt, response, { ex: 3600 }); // Cache for 1 hour
}
