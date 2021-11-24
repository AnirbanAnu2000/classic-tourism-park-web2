import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageService.css';

const HomePageService = ({ service }) => {

    const { _id, name, price, description, img } = service; 
    return (
        <div className="col-lg-4 mb-4">
          <Card className="p-3">
            <Card.Img variant="top" className="w-100 service-img" src={img} />
            <Card.Body>
              <Card.Title className="fw-bold brand-color">{name}</Card.Title>
              <Card.Title className="fw-bold">${price}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Link to={`/order/${_id}`}>
                  <button className="btn btn-primary fw-bold">Order for {name.toLowerCase()} tour</button>
              </Link>
            </Card.Body>
          </Card>            
        </div>
    );
};

export default HomePageService;

