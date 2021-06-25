import React from "react"
import H1 from "../custom compo/text/h1"
import P from "../custom compo/text/p"
import BUTT from "../custom compo/clickables/button"
import PFP from "../pfp/pfp"

function header() {
    return(
        <div className="header">
        <PFP src="https://i.imgur.com/XAtwsSZ.jpg"/>
        <H1 content="I'm Aditya Dubey" /> 
        <P content="A web developer." />
        <BUTT content="Click Here!" />
        </div>
    )
}

export default header