import React from 'react';
import styled from 'styled-components';

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
        font-size: 32px;
      }

      .btn-no {
        margin-top: 10px;
      }
    }
  }
`;

const PlaylistItem = () => {
  return (
    <PlaylistItemStyled>
      <div className="playlist-item__img">
        <img src="/logo192.png" alt="Not Found" />
      </div>
      <div className="playlist-item__desc">
        <span className="playlist-item__desc-title">Film title</span>
        <span>Other stuff</span>
        <button type="button" className="btn btn-no">
          Убрать из плейлиста
        </button>
      </div>
    </PlaylistItemStyled>
  );
};

export default PlaylistItem;
