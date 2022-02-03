import React, { useState } from 'react';
import { MdStarRate } from 'react-icons/md'
import './star.css';
export const New = () => {
  const [cItem, setcItem] = useState(0)
  const numbers = [1, 2, 3, 4, 5];
  const aItems = numbers.map((i) =>
     <a key={i} 
        href="#" 
        className={`${(cItem > i) ? 'blue' :(cItem === i) ? 'red' : 'black' }`} 
        onClick={()=> setcItem(i)}>
         <MdStarRate/>
      </a>
  );


  return (
    <div> {aItems} </div>
  );
};
