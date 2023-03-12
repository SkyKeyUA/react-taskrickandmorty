/** @format */
import styles from './Card.module.scss';
export const Card: React.FC = () => {
  return (
    <div className={styles['card']}>
      <img className={styles['card__image']} src="/img/card.jpg" alt="" />
      <div className={styles['card__info']}>
        <div className={styles['card__title']}>Rick Sanchez</div>
        <div className={styles['card__text']}>Human</div>
      </div>
    </div>
  );
};
