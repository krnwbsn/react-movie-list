import { IMovie } from './imovie';
import { ICompany } from './icompany';
import { ICountry } from './icountry';
import { IGenre } from './igenre';

export interface IMovieDetails extends IMovie {
  budget: number;
  genres: IGenre[];
  production_companies: ICompany[];
  production_countries: ICountry[];
  revenue: number;
  status: string;
  tagline: string;
}
