/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
//import FullStory from './pages/FullStory';
import Home from './pages/Home';
import './scss/app.scss';

const FullStory = React.lazy(() => import(/* webpackChunkName: "FullStory" */ './pages/FullStory'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/react-taskrickandmorty" element={<Home />} />
      </Route>
      <Route
        path="/react-taskrickandmorty/fullstory/:id"
        element={
          <React.Suspense fallback={<div className="wrapper">Loading...</div>}>
            <FullStory />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;
