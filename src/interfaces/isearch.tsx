export interface ISearch<Data> {
  page: number;
  results: Array<Data>;
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: Date;
    minimum: Date;
  };
}
