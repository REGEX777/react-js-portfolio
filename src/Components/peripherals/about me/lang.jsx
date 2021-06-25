import React from "react"
import Card from "../cards/card"

function createCard(data){
    return(
        <Card 
            img_src={data.img_src}
            lang_name={data.language}
        />
    )
}
export default createCard