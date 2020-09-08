import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FilmList } from '../components/Film/FilmList';
import { FilmPage } from '../components/Film/FilmPage';

const NotFound = () => <h1>Not Found!</h1>;

export const RouterComponent = () => (
  <Switch>
    <Route exact path="/" render={(props) => <FilmList {...props} />} />
    <Route path="/top_rated" render={(props) => <FilmList {...props} />} />
    <Route path="/upcoming" render={(props) => <FilmList {...props} />} />
    <Route path="/film/:id" render={(props) => <FilmPage {...props} />} />
    <Route component={NotFound} />
  </Switch>
);
