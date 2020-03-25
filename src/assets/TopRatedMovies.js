import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import '../styles/topRatedMoviesStyles.scss';

const TopRatedMovies = ({ topRatedMovies }) => {
    const renderContent = () => {
        const array = [];
        let sliceValue = 0;
        for (let i = 0; i < (topRatedMovies.length / 5); i++) {
            sliceValue = i*5;
            array.push(
                <Carousel.Item>
                    <Row>
                        {topRatedMovies.slice(sliceValue, sliceValue+5).map(item => {
                            return (
                                <Col key={item.id}>
                                    <img
                                        style={{border:"1px solid #d6d6d6", borderRadius:"5px", cursor:"pointer"}}
                                        className="d-block w-100"
                                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                        alt="First slide"
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Carousel.Item>
            )
        };
        return array;
    }
    return (
        <Carousel className="custom-carousel">
            {renderContent()}
        </Carousel>
    )
};

export default TopRatedMovies;