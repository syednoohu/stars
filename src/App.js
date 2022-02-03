import './star.css';
import * as React from 'react';
import { MdStarRate } from 'react-icons/md'
// A style sheet



function App() {
  let blue = true;
  const hanndleClick = (e,c) => {
    console.log(e,c)
  }
  return (
    <div class="star-wrapper">
      <a href="#" className={`s1 ${blue ? 'blue' : ''}`} onClick={(e) => {hanndleClick(e)}}><MdStarRate/></a>
      <a href="#" className="s2" onClick={(e) => {hanndleClick(e,)}}><MdStarRate/></a>
      <a href="#" className="s3" onClick={(e) => {hanndleClick(e)}}><MdStarRate/></a>
      <a href="#" className="s4" onClick={(e) => {hanndleClick(e)}}><MdStarRate/></a>
      <a href="#" className="s5" onClick={(e) => {hanndleClick(e)}}><MdStarRate/></a>
    </div>
  );
  }

export default App;
