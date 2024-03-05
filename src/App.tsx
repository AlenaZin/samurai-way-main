import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { MessagesContainer } from './components/messages/MessagesContainer';
import { UsersContainer } from './components/users/UsersContainer';

// type AppProps = {
//   store: RootState
// };

function App() {
  // const state = store.getState()
  // const state = useSelector((store: RootState) => store)
  // const dispatch = useDispatch<AppDispatch>()
  // const state = useAppSelector(state => state);
  // const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<MessagesContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
