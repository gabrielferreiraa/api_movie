'use strict';

import React from 'react';
import Genres from 'components/AsideDetails/Genres';
import Descriptive from 'components/AsideDetails/Descriptive';
import CloseButton from 'components/CloseButton';
import { IMG_URL } from 'constants/configConstants';

import style from './css/AsideDetails.css';

const ContentDetail = ({ currentMovie, closedAside }) => (
  <section className={style.content}>
    <CloseButton
      handleClick={closedAside}
    />
    <img
      src={IMG_URL + currentMovie.backdrop_path}
      className={style.backdropImage}
    />
    <Descriptive
      title={currentMovie.original_title}
      description={currentMovie.overview}
      date={currentMovie.release_date}
    />
    <Genres
      genres={currentMovie.genres}
    />
  </section>
);

export default ContentDetail;
