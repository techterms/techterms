import type { Categories } from './Categories';

export type Definition = {
  id: string;
  term: string;
  explanation: string;
  categories: Categories[];
  related: string[];
};
