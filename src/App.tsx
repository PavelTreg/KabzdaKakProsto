import React, {useState} from 'react';
import './App.css';
import {OnOFF} from "./Components/onOff";
import UncontrolledAccordion from "./Components/UncontrolingAccordion";
import Accordion from "./Components/Accordion";
import {Rating, Star, valueStar} from "./Components/Rating";
import {UncontrolledRating} from "./Components/UncontrolingRating";
import {UncontrolledOnOFF} from "./Components/UncontrolledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<valueStar>(4)
    let [accordionValue, setAccordionValue] = useState<boolean>(false)
    let [onOffValue, setOnOffValue] = useState<boolean>(false)
  return (
    <div className="App">
<OnOFF  onChange = {setOnOffValue}/> {onOffValue.toString()}
{/*<UncontrolledAccordion/>*/}
        <Accordion titleValue={'Menu'}
                   collapsed={accordionValue}
                   setAccordionValue = {setAccordionValue}
        />
        <Rating value={ratingValue}
                setRatingValue={setRatingValue}
        />
        <UncontrolledRating/>
        <UncontrolledOnOFF
            onOffValue = {onOffValue}
            setOnOffValue = {setOnOffValue}
        />
{/*        <Star selected={true}/>*/}
    </div>
  );
}
export default App;
