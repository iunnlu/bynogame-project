import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';
import SearchMovie from './SearchMovie';
import PopularCategories from './PopularCategories';
import '../styles/homePageStyles.scss';

const HomeContent = ({ popularMovies, topRatedMovies, submitForm }) => {
    return (
        <Container className="home-container">
            <TopRatedMovies topRatedMovies={topRatedMovies} />
            <Container className="movies-container">
                <Row>
                    <Col id="first-col" className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                        <PopularMovies popularMovies={popularMovies} />
                    </Col>
                    <Col id="last-col" className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <SearchMovie submitForm={submitForm} />
                        <PopularCategories />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default HomeContent;