import React, {useState} from 'react';
type PropsType = {
    on?: boolean
    onChange: (value:boolean) => void
}

export const OnOFF = (props: PropsType) => {



    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        padding: '2px',
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: "20px",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        background: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: "10px",
        borderRadius: '5px',
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red'
    }

    const onClickOn = () => {setOn(true)
        props.onChange(!on)
    }
    const onClickOff = () => {setOn(false)
        props.onChange(!on)}
    return (
        <div>
            <div style={onStyle} onClick={onClickOn}>On</div>
            <div style={offStyle} onClick={onClickOff}>Off </div>
            <div style={indicatorStyle}> </div>
        </div>
    );
};

