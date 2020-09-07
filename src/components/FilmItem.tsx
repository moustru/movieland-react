import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToPlaylist, removeFromPlaylist } from '../redux/playlist/playlistActions';

const Film = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 10px;
`;

const FilmTitle = styled.div`
  height: 100px;
  margin: 20px 0;
  font-size: 24px;
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
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  popularity: number;
}

interface FilmItemProps {
  film: FilmItemInterface;
}

const ButtonIsNotAdded = ({ film }: FilmItemProps) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-yes"
      onClick={() => dispatch(addToPlaylist(film))}
    >
      Добавить в плейлист
    </button>
  );
};

const ButtonIsAdded = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-no"
      onClick={() => dispatch(removeFromPlaylist(id))}
    >
      Удалить из плейлиста
    </button>
  );
};

const FilmItem = ({ film }: FilmItemProps) => {
  const playlist = useSelector((state) => state.playlist.playlist);
  const isFilmInPlaylist = playlist.map((item) => item.id).includes(film.id);

  return (
    <Film>
      <div>
        <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${film.poster_path}`} alt="Not Found" style={{ width: '100%' }} />
      </div>
      <FilmTitle>{film.title}</FilmTitle>
      <FilmRates>
        <span>{film.vote_average}</span>
        <span>{film.popularity}</span>
      </FilmRates>
      {
        isFilmInPlaylist ? <ButtonIsAdded id={film.id} /> : <ButtonIsNotAdded film={film} />
      }
    </Film>
  );
};

export default FilmItem;
