import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

const domain = process.env.NEXT_PUBLIC_APP_URL || "undefined"
// .api to enter /api prefix
export const client = treaty<App>(domain).api
