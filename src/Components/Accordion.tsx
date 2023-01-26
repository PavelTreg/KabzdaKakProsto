import React from 'react';
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionValue: (valueAc:boolean) => void
   }

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue}
                        collapsed = {props.collapsed}
                       setAccordionValue = {props.setAccordionValue}
        />
        <AccordionBody collapsed ={props.collapsed} />
    </div>
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionValue: (valueAc:boolean) => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=> {props.setAccordionValue(!props.collapsed)}}>---{props.title} ----</h3>
    )


}
type AccordionBodyPropsType = {
    collapsed: boolean
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    if (props.collapsed) {
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

export default Accordion;
