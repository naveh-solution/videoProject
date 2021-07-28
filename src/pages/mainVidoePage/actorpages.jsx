import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComp from "../../components/cpCard";
import FilterComp from "../../components/cpFilter";
import SerchComp from "../../components/cpSerch";
import Actor from "../../model/actors";
import "./actorspage.css"

function ActorsPages() {

    const [actors, setActors] = React.useState([new Actor("Matt", "LeBlanc", "7-25-1967", "https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001455/"),
    new Actor("David Bryan", "Woodside", "7-25-1969", "https://m.media-amazon.com/images/M/MV5BMzAyMTA3OTQ3NF5BMl5BanBnXkFtZTcwODA0NTM5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0940851/"),
    new Actor("Nicolas", "Cage", "8-24-1962", "https://m.media-amazon.com/images/M/MV5BMjUxMjE4MTQxMF5BMl5BanBnXkFtZTcwNzc2MDM1NA@@._V1_UY317_CR9,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000115/"),
    new Actor("Julia", "Roberts", "10-28-1967", "https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000210/")])
    const [serchActors, setSerchActor] = React.useState(actors)
    const [serch, setSerch] = React.useState("")
    const [selectedItem, setSelectedItem] = React.useState("")
    const [filterdActors, setFilterdActors] = React.useState(actors)

    function serchActorsfunc(serchVal){
        console.log(serchVal)
        const serchActorsArr = actors.filter((actor) =>{
            console.log(actor.fname.toLowerCase().startsWith({serchVal}) || actor.lname.toLowerCase().startsWith({serchVal}))
            return actor.fname.toLowerCase().startsWith({serchVal}) || actor.lname.toLowerCase().startsWith({serchVal})})
            console.log(serchActorsArr)
            if(serchActorsArr.length>0){
                setActors(serchActorsArr)
            }
    }

    return (
        <div>
            <header className="header">
                <SerchComp   serchValue={serch} setSerchValue={setSerch} onSerchCange={serchActorsfunc}/>
                
                <FilterComp actorsL={filterdActors} onFilter={setFilterdActors} selected={selectedItem}  setSelected={setSelectedItem}/>
            </header>
            <div className="container">
                <div className="row">
                    {actors.map(actor => 
                        <div className="col-md-3 col-sm-4 col-lg-2">
                        <CardComp actor={actor}/>
                        </div>
                    )}
                </div>
            </div>
        </div >

    )

}


export default ActorsPages