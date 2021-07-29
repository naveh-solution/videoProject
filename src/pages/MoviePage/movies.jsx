import React from 'react';
import Movie from '../../model/movie';
import "./movies.css"

function Movies() {

    const moviesA = [new Movie("https://www.themoviedb.org/t/p/w220_and_h330_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg", "1h 35m", "Enrico Casarosa", "Luca", ["Jacob Tremblay", "Jack Dylan Grazer", "Emma Berman", "Saverio Raimondo"]),
    new Movie("https://www.themoviedb.org/t/p/w220_and_h330_face/cycDz68DtTjJrDJ1fV8EBq2Xdpb.jpg", "1h 33m", "Will Gluck", "Peter Rabbit 2: The Runaway", ["James Corden", "Rose Byrne", "Domhnall Gleeson", "David Oyelowo"])];


    return (
        <div>
            <div className="container">
                <div className="row movieDiv">
                    <div className="col col-md-4 movieImg">
                        <img src={moviesA[0].img} alt={moviesA[0].title} />
                    </div>
                    <div className="col col-md-4 movieD directorTime">
                         <p>Titel: <h3> {moviesA[0].title}</h3></p>
                        <h6>Director:</h6>
                        <span>
                            {moviesA[0].director}
                        </span>
                        <h6>Time:</h6>
                        <span>
                            {moviesA[0].time}
                        </span>
                    </div>
                    <div className="col col-md-4 movieD actorsL">
                        <h3>Actors:</h3>
                        <ul className="actors">
                            <li>{moviesA[0].actors[0]}</li>
                            <li>{moviesA[0].actors[1]}</li>
                            <li>{moviesA[0].actors[2]}</li>
                            <li>{moviesA[0].actors[3]}</li>
                        </ul>
                    </div>
                </div>
                <div className="row movieDiv">
                    <div className="col col-md-4 movieImg">
                        <img src={moviesA[1].img} alt={moviesA[1].title} />
                    </div>
                  <div className="col movieD col-md-4 directorTime">
                    <p>Titel: <h3> {moviesA[1].title}</h3></p>
                        <h6>Director:</h6>
                        <span>
                            {moviesA[1].director}
                        </span>
                        <h6>Time:</h6>
                        <span>
                            {moviesA[1].time}
                        </span>
                    </div>
                    <div className="col col-md-4 movieD actorsL">
                        <h3>Actors:</h3>
                        <ul className="actors">
                            <li>{moviesA[1].actors[0]}</li>
                            <li>{moviesA[1].actors[1]}</li>
                            <li>{moviesA[1].actors[2]}</li>
                            <li>{moviesA[1].actors[3]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies;