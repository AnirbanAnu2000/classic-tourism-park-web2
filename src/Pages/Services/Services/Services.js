import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from'../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://immense-headland-61926.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <div className="container py-5">
            <h2 className="text-primary services-heading">Our services</h2>
              <div className="row">
                  {
                      services.map(service => <Service
                          key={service.id}
                          service={service}
                      ></Service>)
                  }
              </div>
            </div>
        </div>
    );
};

export default Services;


