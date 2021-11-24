import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const Order = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();

    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect( () => {
        fetch(`https://immense-headland-61926.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, []);

    const onSubmit = data => {
        console.log(data);

        axios.post('https://immense-headland-61926.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your order placed successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center py-5">
                    <img src={service.img} className="w-75 text-center" height="350px" alt="" />
                    <h3 className="mt-3 brand-color">Service Package Name: {service.name}</h3>
                    <h4 className="mt-3">Service Price ${service.price}</h4>
                    <p className="mt-4 px-4">Service In Detail: {service.description}</p>
                </div>
                <div className="col-lg-6">
                    <div className="add-service">
                        <h2 className="brand-color fw-bold text-center mt-5 mb-3">Order for <span className="fw-bold text-danger">{service.name}</span> tour </h2>
                        <p>Dear <b>{user.displayName}</b> have email <b>{user.email}</b> please fill the form below for proceed to order</p>
                        
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.email} className="form-control mb-3" {...register("email", { required: true })} placeholder="email" />

                            <input defaultValue={service.name} className="form-control mb-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" />

                            <input defaultValue="Pending" className="form-control mb-3" {...register("status", { required: true, maxLength: 20 })} placeholder="Order Status" />

                            <input defaultValue={service.price} className="form-control mb-3" type="number" {...register("price")} placeholder="Service Price" />
                            
                            <input className="btn btn-primary mb-5" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;