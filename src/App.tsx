import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Messages } from './components/messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { StateType } from './redux/state';

type AppProps = {state: StateType};

function App({ state }: AppProps) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/"
              element={<Profile posts={state.profilePage.postData} />}
            />
            <Route
              path="/profile"
              element={<Profile posts={state.profilePage.postData} />}
            />
            <Route
              path="/dialogs/*"
              element={
                <Messages
                  dialogs={state.messagesPage.dialogsData}
                  messages={state.messagesPage.messagesData}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
