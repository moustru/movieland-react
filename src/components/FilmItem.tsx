import React from 'react';
import styled from 'styled-components';

const Film = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FilmTitle = styled.div`
  margin: 20px 0;
  font-size: 28px;
  font-weight: 800;
  text-align: center;
`;

const FilmRates = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    font-size: 20px;
  }
`;

interface FilmItemInterface {
  poster_path: string;
  title: string;
  vote_average: number;
  popularity: number;
}

interface FilmItemProps {
  film: FilmItemInterface;
}

const FilmItem = ({ film }: FilmItemProps) => (
  <Film>
    <div>
      <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${film.poster_path}`} alt="Not Found" style={{ width: '100%' }} />
    </div>
    <FilmTitle>{film.title}</FilmTitle>
    <FilmRates>
      <span>{film.vote_average}</span>
      <span>{film.popularity}</span>
    </FilmRates>
    <button type="button" className="btn btn-yes">
      Добавить в плейлист
    </button>
  </Film>
);

export default FilmItem;
