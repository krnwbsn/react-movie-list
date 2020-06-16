import { ICast } from './icast';
import { ICrew } from './icrew';

export interface IMovieCredits {
  id?: number;
  cast: ICast[];
  crew: ICrew[];
}
