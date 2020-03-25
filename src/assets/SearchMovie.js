import React, { useState } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import '../styles/searchMovieStyles.scss';

const SearchMovie = ({ submitForm }) => {
    const [query, setQuery] = useState("");
    return (
        <div className="search-movie">
            <h5 style={{ marginBottom: "20px" }}>Search Movie</h5>
            <InputGroup>
                <Form onSubmit={(event) => submitForm(event, query)}>
                    <FormControl
                        placeholder="Enter a movie name..."
                        aria-label="movieName"
                        aria-describedby="basic-addon1"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </Form>
            </InputGroup>
        </div>
    )
};

export default SearchMovie;