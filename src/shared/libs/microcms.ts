import { createClient } from 'microcms-js-sdk';

import { env } from '@/shared/libs/env';

export const microcms = createClient({
  serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
  apiKey: env.MICROCMS_API_KEY,
});
