import React from 'react';
import './App.css';



function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://img.freepik.com/premium-vector/bird-logo-vector_95982-44.jpg" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://kartin.papik.pro/uploads/posts/2023-06/1687110851_kartin-papik-pro-p-kartinki-s-kolibri-i-tsvetami-krasivie-61.jpg" />
        </div>
        
        <div>
          ava + discription
        </div>

        <div>
          My posps
          <div>
            New post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;
