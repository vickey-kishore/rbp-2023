import React from 'react';
import './Menus.css';
import './MainCSS.css';
import Menu from './Menu'

function Home() {
  return (
    <>      
    <Menu/>
      <div className="container-fluid">
        <header>
          <h1>Welcome to the Movie Booking App</h1>
        </header>
        <section>
          <p>Explore the latest movies and book your tickets online.</p>
        </section>
      </div>
    </>
  );
}

export default Home;