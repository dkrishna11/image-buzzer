import React, {useState} from 'react';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';


function App() {
  let [info, setInfo]=useState("")
  return (
    <div className="App">
      <SearchBar setInfo={setInfo}/>
      <ImageList images={info}/>
    </div>
  );
}

export default App;
