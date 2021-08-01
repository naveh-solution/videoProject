import React from "react"


function SerchComp({ serchValue, setSerchValue, onSerchCange }) {
    
   
    return (
        <header>
            <input type="text" value={serchValue} onChange={(e) => setSerchValue(e.target.value)} onSerchCange={onSerchCange(serchValue)} placeholder="Type to Serch" />
        </header>
    )
}

export default SerchComp