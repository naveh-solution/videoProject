import React from "react"


function SerchComp({ actorsL, onSerch }) {
    const [serch, setSerch] = React.useState("")
    function serchactor() {
        const filterdActors = actorsL.filter((actor) =>
            actor.fname.toLowerCase().startsWith({ serch }) || actor.lname.toLowerCase().startsWith({ serch }))
        filterdActors.lenght === 0 ?
            <div>
                <h1>No Result Found</h1>
            </div>
            : onSerch({ filterdActors })
    }
    return (
        <header>
            <input type="text" value={serch} id="serchText" onChange={(e) => serchactor(setSerch(e.target.value))} placeholder="Type to Serch" />
        </header>
    )
}

export default SerchComp