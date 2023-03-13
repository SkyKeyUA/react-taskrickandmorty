/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { Skeleton } from '../components/Card/Skeleton';
import { Search } from '../components/Search';
import { fetchCards } from '../redux/cards/asyncActions';
import { selectCardsData } from '../redux/cards/selectors';
import { selectFilter } from '../redux/filter/selectors';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const { items, status } = useSelector(selectCardsData);
  const dispatch = useAppDispatch();
  const { searchValue } = useSelector(selectFilter);
  const itemsFilter = items.filter((obj) => {
    return obj.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  React.useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="content">
      <div className="content__container">
        <div className="content__logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <Search />
        <div className="content__items">
          {status === 'loading'
            ? skeletons
            : itemsFilter.map((obj: any) => <Card key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
