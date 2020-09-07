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

const FilmItem = () => {
  return (
    <Film>
      <div>
        <img src="/logo192.png" alt="Not Found" style={{ width: '100%' }} />
      </div>
      <FilmTitle>Film title</FilmTitle>
      <FilmRates>
        <span>4.30</span>
        <span>10000</span>
      </FilmRates>
      <button type="button" className="btn btn-yes">
        Добавить в плейлист
      </button>
    </Film>
  );
};

export default FilmItem;
