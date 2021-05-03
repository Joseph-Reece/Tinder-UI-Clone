
import './App.css';
import './assets/header.css'
import Header from './components/header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/tinderCards';
require('dotenv').config()

function App() {
  
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* Tinder cards */}
      <TinderCards />


      {/* Swipebuttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
