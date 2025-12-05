// config/redis.js
import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

let redis = null;

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

// Only initialize Redis if valid credentials are provided
if (redisUrl && redisUrl !== "YOUR_REDIS_URL" && redisUrl.startsWith("https://") && redisToken && redisToken !== "YOUR_REDIS_TOKEN") {
  try {
    redis = new Redis({
      url: redisUrl,
      token: redisToken,
    });
    console.log("Successfully initialized Upstash Redis client.");
  } catch (error) {
    console.error("Error initializing Upstash Redis client:", error.message);
    redis = null; // Ensure redis is null if initialization fails
  }
} else {
  console.warn("Upstash Redis credentials are not fully configured or are placeholder values. Redis functionality will be unavailable.");
}

export { redis };