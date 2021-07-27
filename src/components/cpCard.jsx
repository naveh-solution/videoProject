import { Card } from "react-bootstrap"


function CardComp({ actor }) {



return (
    <Card>
        <Card.Img variant="top" src={actor.picLink} alt="sory"/>
        <Card.Body>
            <Card.Title className="cardTitle"><a href={actor.imdbLink} rel="noreferrer" target="_blank">{actor.fname + " " + actor.lname}</a></Card.Title>
            <Card.Text>
                <span>{actor.ageCal()}</span>
            </Card.Text>
        </Card.Body>
    </Card>
)


}

export default CardComp