export interface Film {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  popularity: number;
  video: boolean;
}

export interface FilmVideoFrame {
  title: string;
  link: string;
}
