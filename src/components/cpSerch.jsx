import React from "react"


function SerchComp ({actorsL, onSerch}){
    const [serch, setSerch] = React.useState("")
    const filterdActors = actorsL.filter((actor) =>  
        actor.fname.startsWith({serch}) || actor.lname.startsWith({serch}))
    function serchactor(){
       if(filterdActors.lenght === 0) {
           return (
               <div></div>
           )
       }else return onSerch({filterdActors})
    } 
    return( 
        <header>
            <input type="text" value={serch} id="serchText" onChange= {(e) => serchactor(setSerch(e.target.value))} placeholder="Type to Serch"/>
        </header>
    )
}

export default SerchComp