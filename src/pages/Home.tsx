/** @format */

import React from 'react';
import { Card } from '../components/Card';
import { Search } from '../components/Search';

const Home = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <div className="content">
      <div className="content__container">
        <div className="content__logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <Search />
        <div className="content__items">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
