import { TZDate } from '@date-fns/tz';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getCurrentDt = () => new TZDate(new Date(), 'Asia/Tokyo');
