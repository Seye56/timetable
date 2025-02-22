import './App.css';
import dom from 'react-dom';
import React from 'react';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 days in Chicago 🏙</h1>
      <h2>Welcome to Chicago, Check out this calendar to get to know the city and see all the sights during your stay.</h2>
      <Calendar />

      
    </div>
  )
}

export default App