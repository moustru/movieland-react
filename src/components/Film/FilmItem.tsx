import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addToPlaylist, removeFromPlaylist } from '../../redux/playlist/playlistActions';
import { Film } from '../../interfaces/Film';

const FilmStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .film-item {
    &__img {
      position: relative;
    }
  }
`;

const FilmImgOverlay = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98.5%;
  transition: all .2s ease;

  div, span {
    opacity: 0;
    transition: all .2s ease;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #474bb9;
    cursor: pointer;
  }

  span {
    color: #fff;
    font-size: 22px;
    font-weight: 800;
    z-index: 2;
  }

  &:hover {
    div {
      opacity: .5;
    }

    span {
      opacity: 1;
    }
  }
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

interface FilmItemProps {
  film: Film;
}

interface ButtonAddedProps {
  id: number;
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

const ButtonIsAdded = ({ id }: ButtonAddedProps) => {
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
    <FilmStyled>
      <div className="film-item__img">
        <FilmImgOverlay to={`/film/${film.id}`}>
          <div />
          <span>Перейти к описанию</span>
        </FilmImgOverlay>
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
    </FilmStyled>
  );
};

export default FilmItem;
