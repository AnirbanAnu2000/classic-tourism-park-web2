import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm(); 

    const onSubmit = data => {
        console.log(data);

        axios.post('https://immense-headland-61926.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service added successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="add-service">
                        <h2 className="brand-color fw-bold text-center mt-5 mb-3">Add A New Service</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" />
                            <textarea className="form-control mb-3" {...register("description")} placeholder="Service Description" />
                            <input className="form-control mb-3" type="number" {...register("price")} placeholder="Service Price" />
                            <input className="form-control mb-3" {...register("img")} placeholder="image url" />
                            <input className="btn btn-primary mb-5" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;