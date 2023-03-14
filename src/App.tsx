/** @format */

import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import FullStory from './pages/FullStory';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/fullstory/:id" element={<FullStory />} />
    </Routes>
  );
}

export default App;
