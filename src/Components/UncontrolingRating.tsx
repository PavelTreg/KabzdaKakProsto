import React, {useState} from "react";


type StarPropsType = {
    selected: boolean
}
export function UncontrolledRating() {
    console.log("Rating rendering")
let  [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value>0}/><button onClick={() => {setValue(1)}}>1</button>
            <Star selected={value>1}/><button onClick={() => {setValue(2)}}>2</button>
            <Star selected={value>2}/><button onClick={() => {setValue(3)}}>3</button>
            <Star selected={value>3}/><button onClick={() => {setValue(4)}}>4</button>
            <Star selected={value>4}/><button onClick={() => {setValue(5)}}>5</button>
            <button onClick={() => {setValue(value + 1)}}>+</button>
        </div>

    )
}


export function Star(props: StarPropsType) {

return(
<div>
    {props.selected && <span><b>star </b></span>}

    {!props.selected && <span>star </span>}
</div>
)}