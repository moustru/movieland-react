import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromPlaylist } from '../../redux/playlist/playlistActions';

const PlaylistItemStyled = styled.div`
  display: flex;
  margin: 20px;
  color: #fff;

  .playlist-item {
    &__img {
      width: 25%;
      margin-right: 10px;

      img {
        width: 100%;
      }
    }

    &__desc {
      span {
        display: block;
      }

      &-title {
        font-size: 24px;
      }

      .btn-no {
        margin-top: 10px;
      }
    }
  }
`;

const PlaylistItem = ({ film }) => {
  const dispatch = useDispatch();

  return (
    <PlaylistItemStyled>
      <div className="playlist-item__img">
        <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${film.poster_path}`} alt="Not Found" />
      </div>
      <div className="playlist-item__desc">
        <span className="playlist-item__desc-title">{film.title}</span>
        <span>{film.vote_average}</span>
        <button
          type="button"
          className="btn btn-no"
          onClick={() => dispatch(removeFromPlaylist(film.id))}
        >
          Убрать из плейлиста
        </button>
      </div>
    </PlaylistItemStyled>
  );
};

export default PlaylistItem;
