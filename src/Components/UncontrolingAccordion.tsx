import React, {useState} from 'react';

/*type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}*/

const UncontrolledAccordion = () => {

    let[ collapsed, setCollapsed]  = useState(false)
    return <div>
        <AccordionTitle title={'Menu'}
                        setCollapsed={setCollapsed}
                        collapsed ={collapsed}
        />


        <button onClick={() => {setCollapsed(!collapsed)}}> Toggle </button>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={ () => {props.setCollapsed(!props.collapsed)} }>---{props.title} ----</h3>
    )}



type AccordionBodyPropsType = {
    collapsed?: boolean
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    if (props.collapsed === true) {
        return <select>
            <ul>
                <li> 1</li>
                <li> 2</li>
                <li> 3</li>
            </ul>
        </select>

    }
    else {

        return <ul>
            <li> 1</li>
            <li> 2</li>
            <li> 3</li>
        </ul>
    }
}

export default UncontrolledAccordion;