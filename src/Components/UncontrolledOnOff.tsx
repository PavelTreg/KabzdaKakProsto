import React, {useState} from 'react';

type PropsType = {
    onOffValue: boolean
    setOnOffValue: (value: boolean) => void
}

export const UncontrolledOnOFF = (props: PropsType) => {

/*    let [on, setOn] = useState(false)*/

    const onStyle = {
        width: '30px',
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        padding: '2px',
        background: props.onOffValue ? 'blue' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        background: props.onOffValue ? 'white' : 'orange'
    }
    const indicatorStyle = {
        width: '10px',
        height: "10px",
        borderRadius: '5px',
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '5px',
        background: props.onOffValue ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.setOnOffValue(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.setOnOffValue(false)}}>Off </div>
            <div style={indicatorStyle}> </div>
        </div>
    );
};

