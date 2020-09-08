import React from 'react';
import { FilmVideoFrame } from '../../interfaces/Film';

export const FilmVideo = ({ title, link }: FilmVideoFrame) => (
  <iframe
    width="560"
    height="315"
    title={title}
    src={`https://www.youtube.com/embed/${link}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
