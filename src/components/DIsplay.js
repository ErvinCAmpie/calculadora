import { Component } from "react";


export function Display ({value}){


        return(
            <input className="display" readOnly value={value}/>
        );
    
}