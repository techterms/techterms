import type { APIRoute } from 'astro';
import { definitions } from '../../data/definitions';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(definitions), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
