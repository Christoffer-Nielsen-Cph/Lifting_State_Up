import { useState } from 'react'
import './styling/App.css'
import AddToList from "./components/AddToList.jsx";
import ListCount from "./components/ListCount.jsx";
import ListShow from "./components/ListShow.jsx";

function App() {

  const [list, setList] = useState([]);

  return (
    <div className="App">

      <ListCount list={list}/>
      <ListShow list={list}/>
      <AddToList setList={setList}/>

    </div>
  )
}

export default App
