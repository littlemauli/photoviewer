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

console.log(ImageUrls.length)
console.log(ImageUrls)

function randomIndex() {
  let index = Math.floor(Math.random() * ImageUrls.length)
  console.log(index)
  return index
}


function App() {
  let [currentUrl, setnewUrl] = React.useState('');
  currentUrl = PhotoViewer.src
  console.log(currentUrl)

  const handleNewUrl = () => {
    setnewUrl(PhotoViewer.src = SmallPhotoViewer.src);
  };

  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={ImageUrls[randomIndex()]} />
      <h1>All small pictures</h1>
      {
        ImageUrls.map(el =>
          <SmallPhotoViewer src={el} />
        )}

      <span>
        {/* put change state here */}
        <button onClick={handleNewUrl}></button>

      </span>
    </div>

  );
};




export default App;




