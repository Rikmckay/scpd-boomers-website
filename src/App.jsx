import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import BoardMembers from './pages/BoardMembers';
import Membership from './pages/Membership';
import Bylaws from './pages/Bylaws';
import EventFlyer from './pages/EventFlyer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/board" element={<BoardMembers />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/bylaws" element={<Bylaws />} />
          <Route path="/flyer" element={<EventFlyer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
