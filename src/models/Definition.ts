import type { Categories } from './Categories';

export interface Definition {
  id: string;
  term: string;
  explanation: string;
  categories: Categories[];
  related: string[];
}
