import { drizzle } from 'drizzle-orm/neon-http';

import { env } from '@/shared/env';

export const db = drizzle(env.NEON_DATABASE_URL);
