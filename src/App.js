import React, { useState } from 'react';
import './App.css';

function App() {

//     return (
//       <div className="App">
//         <header className="App-header">
//           <Profile />   
//         </header>
//       </div>
//     );

// }

// function Profile(props) {
//   // Declare a new state variable, which we'll call "count"
  const [activate, setActivate] = useState("");

  function handleClick(e) {
    let id = e.target.id;
    setActivate(id);
  } 

  // if(count > 100) {
  //   return 
  // } else {
    return (
    <div className="all">
      

      
      <button id="firstbutton" className={(activate==="firstbutton") ? "active" : ""} onClick={handleClick}>
        First Button
      </button>
      <button id="secondbutton" className={(activate==="secondbutton") ? "active" : ""} onClick={handleClick}>
        Second Button
      </button>
      <button id="thirdbutton" className={(activate==="thirdbutton") ? "active" : ""} onClick={handleClick}>
        Third Button
      </button>
      {activate}
    </div>
  );
}
// }

export default App;
