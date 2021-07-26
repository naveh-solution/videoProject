import { Card } from "react-bootstrap"


function CardComp({ actors }) {



    const cardToRender = [];
    for (let actor of actors) {
        cardToRender.push(
            <div className="col">
                <Card>
                    <Card.Img variant="top" src={actor.Img} />
                    <Card.Body>
                        <Card.Title><a href={actor.imdbLink}>{actor.fname + actor.lname}</a></Card.Title>
                        <Card.Text>
                            <span>{actor.bDay}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>)


    }
    return (
        <>
            {cardToRender}
        </>
    )


}

export default CardComp