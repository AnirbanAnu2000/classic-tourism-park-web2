import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HomePageService from '../HomePageService/HomePageService';
import './HomePageServices.css';

const HomePageServices = () => {
    const {user} = useAuth();

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
                {user.email &&
                    <nav aria-label="breadcrumb" className="ms-2">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <Link to="/addService">Add Service</Link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <Link to="manageServices">Manage Services</Link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <Link to="manageOrders">Manage Orders</Link>
                            </li>
                        </ol>
                    </nav>
                }
                <div className="row">
                    {
                        services.map(service => <HomePageService
                            key={service.id}
                            service={service}
                        ></HomePageService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePageServices;


