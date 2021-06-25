import react from "react"

function navbar() {
    return (
        <div className="nav">
            <div className="left">
                <p>regex</p>
            </div>
            <div className="right">
                <ul>                
                    <li><p><a href="#">About me</a></p></li>
                    <li><p><a href="#">Home</a></p></li>
                </ul>
            </div>
        </div>
    )
}

export default navbar;