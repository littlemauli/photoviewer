//import logo from './logo.svg';
import './App.css';
import { PhotoViewer, ImageUrls, SmallPhotoViewer } from './toDoWithPhotoViewer/PhotoViewer.js'
import './toDoWithPhotoViewer/PhotoViewer.css'
import React, { useState } from 'react'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




function randomIndex() {
  let index = Math.floor(Math.random() * ImageUrls.length)
  return index
}


function App() {
  const [currentUrl, setnewUrl] = React.useState(ImageUrls[randomIndex()]);
  const [isColored, setIsColored] =React.useState(true)

  function Color(){
    setIsColored(!isColored)
  }

  return (
    <div>
      <h1 id='main-title'>React Photo Viewer</h1>
      <PhotoViewer src={currentUrl} />
      <h2 id='second-title'>All small pictures</h2>

      {
        ImageUrls.map(el =>
          <SmallPhotoViewer   value='self' className={`small-photo ${(currentUrl=== el && !isColored)? 'small-photo-red':''}`}
           path={el}  key={el} onClick={(e) =>{
             setnewUrl(el);
             Color();
            } 
          }/>

        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>

  );
};


export default App;




