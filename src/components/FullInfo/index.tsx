/** @format */

import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './FullInfo.scss';
export const FullInfo: React.FC = () => {
  const [card, setCard] = React.useState<{
    image: string;
    name: string;
    gender: string;
    status: string;
    species: string;
    origin: {
      name: string;
      url: string;
    };
    type: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchCard() {
      try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/' + id);
        setCard(data);
      } catch (error) {
        alert('Mistake when reciving data a card');
        navigate('/');
      }
    }
    fetchCard();
  }, []);
  const infoCard = card
    ? [
        { title: 'Gender', value: card.gender },
        { title: 'Status', value: card.status },
        { title: 'Specie', value: card.species },
        { title: 'Origin', value: card.origin.name },
        { title: 'Type', value: card.type },
      ]
    : [];
  if (!card) {
    return <div className="fullstory">Loading...</div>;
  }
  return (
    <div className="fullstory">
      <div className="fullstory__btn">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z"
            fill="black"
          />
        </svg>
        Go Back
      </div>
      <div className="fullstory__image">
        <img src={card.image} alt="ImgCard" />
      </div>
      <div className="fullstory__fullname">{card.name}</div>
      <div className="fullstory__info">Informations</div>
      {infoCard.map((obj, i) => (
        <ul key={i} className="fullstory__items">
          <li className="fullstory__title">{obj.title}</li>
          <li className="fullstory__subtitle">{obj.value}</li>
        </ul>
      ))}
    </div>
  );
};
