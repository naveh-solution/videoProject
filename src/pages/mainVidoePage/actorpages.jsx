import { Card } from "react-bootstrap"
import actors from "../../model/actors"

function ActorsPages() {

    function creatCard({actors}){

        const cardToRender = [];
         for (let actor of actors){
            <Card>
            <Card.Img variant="top" src={actor.Img} />
            <Card.Body>
              <Card.Title><a href={actor.imdbLink}>{actor.fname + actor.lname}</a></Card.Title>
              <Card.Text>
                <span>{actor.bDay}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        }

        }
    }

    return (
        <div>
            <div className="filterDiv">
                <FilterCom />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <CardComp/>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ActorsPages