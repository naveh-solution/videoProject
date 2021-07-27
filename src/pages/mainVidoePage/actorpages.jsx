import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComp from "../../components/cpCard";
import SerchComp from "../../components/cpSerch";
import Actor from "../../model/actors";

function ActorsPages() {

    const [actors, setActors] = React.useState([new Actor("Matt", "LeBlanc", "7-25-1967", "https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001455/"),
    new Actor("David Bryan", "Woodside", "7-25-1969", "https://m.media-amazon.com/images/M/MV5BMzAyMTA3OTQ3NF5BMl5BanBnXkFtZTcwODA0NTM5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0940851/"),
    new Actor("Nicolas", "Cage", "8-24-1962", "https://m.media-amazon.com/images/M/MV5BMjUxMjE4MTQxMF5BMl5BanBnXkFtZTcwNzc2MDM1NA@@._V1_UY317_CR9,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000115/"),
    new Actor("Julia", "Roberts", "10-28-1967", "https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000210/")])
    function cardRander(actors){

        if (actors.length > 0) {
            for (let actor of actors){ 
            const actorsnew = []
            actorsnew.push(<Col>
            <CardComp actor={actor}/>
            </Col>)

            return (
             <>
             {actorsnew}
             </>
            )
            }                                
    }else{ return <div></div>}

    }

    return (
        <div>
            <SerchComp actorsL={actors} onSerch={setActors} />
            <Container>
                <Row>
                {cardRander(actors)}

                            {/* <Col Col md = 'auto' >
                                        <CardComp actor={actors[0]} />
                            </Col>
                <Col md='auto'>
                    <CardComp actor={actors[1]} />
                </Col>
                <Col md='auto'>
                    <CardComp actor={actors[2]} />
                </Col>
                <Col md='auto'>
                    <CardComp actor={actors[3]} />
                </Col> */}
                </Row>
            </Container>
        </div >

    )

}

export default ActorsPages