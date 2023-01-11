import React from 'react';
import data from './data';
import './App.css';
import db from './firebaseConfig';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';

function App() {

  console.log(db);

  const cards = data.map((item)=>{
    return(
      <Cards 
      key={item.id} 
      game={item.game} 
      genre={item.genre} 
      year={item.year} 
      publisher={item.publisher} 
      image={item.image} 
      />
    )
  })


  return (
    <>
      <Navbar />
      <div className='card'>
        {cards}
      </div>
      
    </>
  );
}

export default App;
