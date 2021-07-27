import React from "react";

function FilterComp({actorsL, onFilter}){
    const [fOrL, setFOrL] = React.useState("")

    // function sortActors(forl){

    //     actorsL.sort((act1, act2) => act1.forl - act2.forl)

    //     return onFilter({actorsL})
    // }
    // ({fOrL}) => onFilter(actorsL.sort((act1, act2) => act1.fOrL - act2.fOrl))
    return(
        <div>
        <select value={fOrL} name="fOrL" id="fLName" onChange={(e) => setFOrL(e.target.value)}>
            <option value="fname">First Name</option>
            <option value="lname">Last Name</option>
        </select>
        </div>
    )
}

export default FilterComp