import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../styles/popularCategoriesStyles.scss';

const PopularCategories = () => {
    const categories = [
        {id: 1, name: "Action"},
        {id: 2, name: "Adventure"},
        {id: 3, name: "Comedy"},
        {id: 4, name: "Crime"},
        {id: 5, name: "Drama"},
        {id: 6, name: "Epics/Historical"},
        {id: 7, name: "Horror"},
        {id: 8, name: "Musicals"},
        {id: 9, name: "Science Fiction"},
        {id: 10, name: "War"},
        {id: 11, name: "Western"}
    ];
    const renderContent = () => {
        return categories.map(item => {
            return(
                <ListGroup.Item style={{cursor: "pointer"}} key={item.id}>{item.name}</ListGroup.Item>
            )
        });
    };
    return (
        <Card className="popular-categories">
            <Card.Header style={{paddingLeft:"12px"}}><h5>Popular Categories</h5></Card.Header>
            <ListGroup variant="flush">
                {renderContent()}
            </ListGroup>
        </Card>
    )
};

export default PopularCategories;