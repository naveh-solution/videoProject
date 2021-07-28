import React from "react";

function FilterComp({actorsL, onFilter, selected, setSelected}){
   

    function sortActors(){

const actorsBy = actorsL.sort((act1, act2) => act1.fOrL - act2.fOrL)
        console.log({actorsBy})
        return onFilter({actorsBy})
    }
    
    return(
        <div>
        <select value={selected} name="fOrL" id="fLName" onChange={(e) => sortActors(setSelected(e.target.value))}>
            <option value="fname">First Name</option>
            <option value="lname">Last Name</option>
        </select>
        </div>
    )
}

export default FilterComp