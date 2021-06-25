import react from "react";
import Nav from "../Navbar/Navbar";
import Header from "../Header/Header"
import Combo from "../peripherals/combo";
import createCard from "../peripherals/about me/lang";
import datas from "../peripherals/about me/datas"
import Card from "../peripherals/cards/card";
import H1 from "../custom compo/text/h1"
import LIK from "../custom text/lik"

function body() {
    return (
        <div>
            <Nav />
            <Header />
            <Combo />
            <LIK />
            <div className="align">
            {datas.map(createCard)}
            </div>
            {/* <Card img_src="https://cdn.discordapp.com/attachments/857642735262892082/857642846966120488/js.png" lang_name="Javascript"/> */}
        </div>
    )
}
export default body