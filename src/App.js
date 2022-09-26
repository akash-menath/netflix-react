import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Components/NavBar/NavBar.css"
import "./App.css"
import Banner from "./Components/Banner/Banner";
import "./Components/Banner/Banner.css"
import RowPost from "./Components/RowPost/RowPost";
import "./Components/RowPost/RowPost.css"
import {original,action} from './urls'


function App() {



  return (
    <div>
     <NavBar/>
     <Banner/>
     <RowPost url={original}  title='Netflix Orginals'/>
     <RowPost url={action} title='Action' isSmall/>
    </div>
  )
}
export default App

