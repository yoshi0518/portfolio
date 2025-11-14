'use server';

import { env } from '@/shared/libs/env';
import { microcms } from '@/shared/libs/microcms';

import type { PortfolioType } from '@/features/home/types';

export const getPortfolioAction = async (): Promise<PortfolioType> => {
  const data = await microcms.getObject<PortfolioType>({
    endpoint: 'portfolio',
  });

  if (env.DEBUG) {
    console.log('=== getPortfolioAction ===');
    console.log({ data });
  }

  return data;
};
