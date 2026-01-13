import type { APIRoute } from 'astro';
import { generateOgImage } from '../../utils/ogImage';

export const GET: APIRoute = async () => {
  const png = await generateOgImage({
    title: 'Claude Code for Marketers',
    description: 'AI superpowers for marketers. No coding required.',
  });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
