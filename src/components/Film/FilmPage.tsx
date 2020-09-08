import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getRelatedFilm, getFilmVideos } from '../../redux/films/filmsActions';

const FilmDetails = styled.div`
  display: flex;

  .film-details {
    &__desc {
      display: flex;
      flex-direction: column;
      margin-left: 30px;

      &-title {
        font-size: 48px;
      }

      &-subtitle {
        margin-bottom: 10px;
        font-size: 26px;
      }

      &-rating, &-release, &-overview {
        margin-bottom: 5px;
        font-size: 20px;
      }
    }
  }
`;

const FilmTrailer = styled.div`
  margin-top: 30px;

  .film-trailer {
    font-size: 28px;
  }
`;

export const FilmPage = ({ match }: any) => {
  const dispatch = useDispatch();
  const film = useSelector((state) => state.films.relatedFilm);
  const videos = useSelector((state) => state.films.videos);

  useEffect(() => {
    dispatch(getRelatedFilm(match.params.id));
    dispatch(getFilmVideos(match.params.id));
  }, []);

  return (
    <>
      <FilmDetails>
        <div className="film-details__img">
          <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${film.poster_path}`} alt="Not Found" />
        </div>
        <div className="film-details__desc">
          <span className="film-details__desc-title">{film.title}</span>
          <span className="film-details__desc-subtitle">{film.original_title}</span>
          <span className="film-details__desc-rating">Рейтинг: {film.vote_average}</span>
          <span className="film-details__desc-release">Дата выпуска: {film.release_date}</span>
          <span className="film-details__desc-overview">Описание: {film.overview}</span>
        </div>
      </FilmDetails>
      <FilmTrailer>
        {
          videos.results?.length ? <div className="film-trailer">Трейлер</div> : null
        }
      </FilmTrailer>
    </>
  );
};
