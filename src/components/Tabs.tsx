import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPopularFilms, getTopRatedFilms, getUpcomingFilms } from '../redux/films/filmsActions';

const TabsStyled = styled.div`
  display: flex;
  width: 100%;

  .tab--active {
    border-bottom-color: #29960f;
    
    a {
      color: #29960f;
    }
  }
`;

const TabsButton = styled.div`
  width: 20%;
  padding: 10px;
  font-size: 24px;
  text-align: center;
  border-bottom: 2px solid #000;
  cursor: pointer;
`;

const TabLink = styled(Link)`
  color: #000;
`;

export const Tabs = () => {
  const [ activeTab, setActiveTab ] = useState(0);
  const dispatch = useDispatch();

  const tabList = [
    { value: 0, text: 'Популярное', to: '/' },
    { value: 1, text: 'Рейтинговое', to: '/top_rated' },
    { value: 2, text: 'Скоро в прокате', to: '/upcoming' }
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
      default:
        setActiveTab(0);
        break;
      case '/top_rated':
        setActiveTab(1);
        break;
      case '/upcoming':
        setActiveTab(2);
        break;
    }
  }, []);

  const handleClickTab = (tab) => {
    setActiveTab(tab);
    if (activeTab === tab) return;

    switch (tab) {
      case 0:
        return dispatch(getPopularFilms());
      case 1:
        return dispatch(getTopRatedFilms());
      case 2:
        return dispatch(getUpcomingFilms());
      default:
        return false;
    }
  };

  return (
    <TabsStyled>
      {
        tabList.map((tab) => {
          return (
            <TabsButton
              key={tab.value}
              value={tab.value}
              className={activeTab === tab.value && 'tab--active'}
              onClick={() => handleClickTab(tab.value)}
            >
              <TabLink to={tab.to}>{tab.text}</TabLink>
            </TabsButton>
          );
        })
      }
    </TabsStyled>
  );
};
