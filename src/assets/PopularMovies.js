import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { MdError } from "react-icons/md";
import '../styles/popularMoviesStyles.scss';

const PopularMovies = ({ popularMovies }) => {
    const renderContent = () => {
        return popularMovies.map(item => {
            return (
                <Card className="custom-card" key={item.id}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.overview}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="custom-card-footer text-muted">
                        <i style={{fontWeight:"bold"}} className="fa fa-language">&nbsp;&nbsp;{item.original_language.toUpperCase()}</i>
                        <i style={{fontWeight:"bold"}} className="fa fa-calendar">&nbsp;&nbsp;{item.release_date}</i>
                    </Card.Footer>
                </Card>
            )
        })
    }
    if(popularMovies.length === 0){
        return(
            <div className="not-found">
                <MdError size={70} />
                <h3 style={{marginTop:"10px"}}>Not Found!</h3>
            </div>
        )
    }
    return (
        <CardColumns>
            {renderContent()}
        </CardColumns>
    )
};

export default PopularMovies;