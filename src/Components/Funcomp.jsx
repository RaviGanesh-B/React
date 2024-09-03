import React, { Component } from "react";


export class ClassComp extends Component {
render(){
    return(
        <div>
        <h1>
        Tree Structure
        </h1>
        
        </div>
    )
}
}

export const FunComp = () => {
    return(
        <div>
        <Child1/>
        <Child2/>
        <Child3/>
           
        </div>
    )
}

export const Child1 = () => {
    return(
        <div>
            <h1>
                Child-1
            </h1>
            <GrandChild1/>
        </div>
    )
}

export const GrandChild1 = () => {
    return(
        <div>
            <h1>
                GrandChild-1
            </h1>
            <GreatGrandChild1/>
        </div>
    )
}
export const GreatGrandChild1 = () => {
    return(
        <div>
            <h1>
                GreatGrandChild-1
            </h1>
        </div>
    )
}

export const Child2 = () => {
    return(
        <div>
            <h1>
                Child2
            </h1>
            <GrandChild2/>
            <GrandChild3/>
        </div>
    )
}

export const GrandChild2 = () => {
    return(
        <div>
            <h1>
                GrandChild-2
            </h1>
        </div>
    )
}
export const GrandChild3 = () => {
    return(
        <div>
            <h1>
                GrandChild-3
            </h1>
        </div>
    )
}

export const Child3 = () => {
    return(
        <div>
            <h1>
                Child-3
            </h1>
            <GrandChild4/>
            <GrandChild5/>
        </div>
    )
}

export const GrandChild4 = () =>{
    return(
        <div>
            <h1>
                GrandChild-4
            </h1>
        </div>
    )
}

export const GrandChild5 = () => {
    return(
        <div>
            <h1>
                GrandChild-5
            </h1>
        </div>
    )
}