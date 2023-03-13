/** @format */
import React from 'react';
import { useSelector } from 'react-redux';
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
        <img src={image} alt="" />
      </div>
      <div className={styles['card__info']}>
        <div className={styles['card__title']}>{light(name)}</div>
        <div className={styles['card__text']}>{species}</div>
      </div>
    </div>
  );
};
