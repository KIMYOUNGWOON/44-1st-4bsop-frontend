import React from 'react';
import Nav from '../../Components/Nav/Nav';
import BandBanner from './BandBanner/BandBanner';
import MainBanner from './MainBanner/MainBanner';
import SlideItemList from './SlideItemList/SlideItemList';
import LeftBanner from './LeftBanner/LeftBanner';
import RightBanner from './RightBanner/RightBanner';
import StoreLocator from './StoreLocator/StoreLocator';
import Selection from './Selection/Selection';
import './Main.scss';

function Main({ basket, setBasket }) {
  return (
    <div className="main">
      <BandBanner />
      <Nav basket={basket} setBasket={setBasket} />
      <MainBanner />
      <SlideItemList />
      <LeftBanner />
      <RightBanner />
      <LeftBanner />
      <StoreLocator />
      <Selection />
      <LeftBanner />
    </div>
  );
}

export default Main;
