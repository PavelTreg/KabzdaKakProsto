import React from "react";

type RatingPropsType = {
    value: number
    setRatingValue: (value:valueStar) => void
}

export type valueStar = 0 | 1 | 2 | 3 | 4 | 5


export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")


        return (
            <div>
                <Star selected={props.value>0} onClick = {props.setRatingValue} value ={1}/>
                <Star selected={props.value>1} onClick = {props.setRatingValue} value ={2}/>
                <Star selected={props.value>2} onClick = {props.setRatingValue} value ={3}/>
                <Star selected={props.value>3} onClick = {props.setRatingValue} value ={4}/>
                <Star selected={props.value>4} onClick = {props.setRatingValue} value ={5}/>

            </div>
        )
    }

type StarPropsType = {
    selected: boolean
    onClick: (value: valueStar) => void
    value: valueStar

}

export function Star(props: StarPropsType) {
    console.log("Star rendering")


        return <span onClick={() => {props.onClick(props.value)}}>
   {  props.selected ? <b>star </b> : 'star'}
    </span>

}