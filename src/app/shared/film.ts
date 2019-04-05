export interface Film {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
  rt_score: number;
  rating?: string;
}
