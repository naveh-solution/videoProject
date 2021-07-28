import React from "react"


function SerchComp({ serchValue, setSerchValue, onSerchCange }) {
    
    // function serchactor(serchValue) {
    //     console.log(serchValue)
    //     const foundActors = actorsL.filter((actor) =>
    //         actor.fname.toLowerCase().startsWith({serchValue}) || actor.lname.toLowerCase().startsWith({serchValue}))
    //     foundActors.lenght === 0 ?
    //         <div>
    //             <h1>No Result Found</h1>
    //         </div>
    //         : onSerch({ foundActors })
    // }
    return (
        <header>
            <input type="text" value={serchValue} onChange={(e) => setSerchValue(e.target.value)} onSerchCange={onSerchCange(serchValue)} placeholder="Type to Serch" />
        </header>
    )
}

export default SerchComp