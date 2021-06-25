import React from "react"

function card(props){
    return(
        <div className="card">
            {/* //language pics */}
            <img src={props.img_src}></img>
            {/* //language names */}
            <p className="lang-name">{props.lang_name}</p>
        </div>
    )
}

export default card