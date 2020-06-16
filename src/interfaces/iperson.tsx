import { IMovie } from './imovie';
import { IShow } from './ishow';

export interface IPerson {
  adult: boolean;
  id: number;
  known_for?: Array<IMovie | IShow>;
  name: string;
  popularity: number;
  profile_path: string;
}
