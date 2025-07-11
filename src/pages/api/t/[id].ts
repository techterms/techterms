import type { APIRoute } from 'astro';
import { definitions } from '../../../data/definitions';

export function getStaticPaths() {
  return definitions.map(definition => ({
    params: { id: definition.id },
  }));
}

export const GET: APIRoute = ({ params }) => {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: 'Term ID is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const definition = definitions.find(def => def.id === id);

  if (!definition) {
    return new Response(JSON.stringify({ error: 'Term not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify(definition), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
