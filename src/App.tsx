import React from 'react';
import './App.css';
import {OnOFF} from "./Components/useState";
import UncontrolledAccordion from "./Components/UncontrolingAccordion";
import Accordion from "./Components/Accordion";
import {Rating, Star} from "./Components/Rating";
import {UncontrolledRating} from "./Components/UncontrolingRating";

function App() {
  return (
    <div className="App">
<OnOFF  />
<UncontrolledAccordion/>
        <Accordion titleValue={'Menu'} collapsed={false}/>
        <Rating value={2}/>
        <UncontrolledRating/>
        <Star selected={false}/>
    </div>
  );
}
export default App;
