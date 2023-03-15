/** @format */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cards } from '../../redux/cards/type';
import { selectFilter } from '../../redux/filter/selectors';
import { Highlight } from '../Highlight';
import styles from './Card.module.scss';
export const Card: React.FC<Cards> = ({ id, name, species, image }) => {
  const { searchValue } = useSelector(selectFilter);
  const light = React.useCallback(
    (str: string) => {
      return <Highlight str={str} />;
    },
    [searchValue],
  );
  return (
    <div className={styles['card']}>
      <div className={styles['card__image']}>
        <Link key={id} to={`/react-taskrickandmorty/fullstory/${id}`}>
          <img src={image} alt="ImgCard" />
        </Link>
      </div>
      <div className={styles['card__info']}>
        <div className={styles['card__title']}>
          <Link key={id} to={`/react-taskrickandmorty/fullstory/${id}`}>
            {light(name)}
          </Link>
        </div>
        <div className={styles['card__text']}>
          <Link key={id} to={`/react-taskrickandmorty/fullstory/${id}`}>
            {species}
          </Link>
        </div>
      </div>
    </div>
  );
};
