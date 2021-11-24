import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './/Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="col-lg-4 mb-4">
          <Card className="p-3">
            <Card.Img variant="top" className="w-100 service-img" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Title>{price}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Link to={`/booking/${_id}`}>
                  <button className="btn btn-primary fw-bold">Book {name.toLowerCase()}</button>
              </Link>
            </Card.Body>
          </Card>            
        </div>
    );
};

export default Service;


