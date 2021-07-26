import { Card } from "react-bootstrap"
import CardComp from "../../components/cpCard"
import actors from "../../model/actors"

function ActorsPages() {




    return (
        <div>
            <div className="filterDiv">
                <FilterCom />
            </div>
            <div className="container">
                <div className="row">
                    <CardComp cards={actors} />
                </div>
            </div>
        </div>

    )

}

export default ActorsPages