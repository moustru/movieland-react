import React from 'react';
import styled from 'styled-components';

const PlaylistButtonStyled = styled.div`
  position: fixed;
  bottom: 5%;
  right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #a5a5a5;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  i {
    font-size: 36px;
  }

  .films-counter {
    position: absolute;
    bottom: 0;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 14px;
    font-weight: 800;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const PlaylistButton = () => {
  return (
    <PlaylistButtonStyled>
      <i className="material-icons">playlist_add_check</i>
      <div className="films-counter">0</div>
    </PlaylistButtonStyled>
  );
};

export default PlaylistButton;
