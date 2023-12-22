import { Inter, Lusitana, Zilla_Slab, Belanosima } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const zillaSlab = Zilla_Slab({
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
export const belanosima = Belanosima({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});
