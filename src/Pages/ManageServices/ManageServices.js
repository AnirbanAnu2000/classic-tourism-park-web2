import React, { useEffect, useState } from 'react';

const ManageServices = () => {
  
    const [services, setServices] = useState([]); 

    useEffect( () => {
        fetch(`https://immense-headland-61926.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    const handleDelete = id => {
      const url = `https://immense-headland-61926.herokuapp.com/services/${id}`;

      fetch(url, {
        method: "DELETE",
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount){
          alert('Deleted The Service')
          const remaining = services.filter(service => service._id !== id);
          setServices(remaining);
        }
      })
    }
    return (
        <div className="container mb-5">
        <div className="row justify-content-center">
            <h2 className="text-center brand-color my-5">Manage Services</h2>
            {
              services.map(service => <div className="col-lg-4 text-center border border-1 py-3" key={service._id}>
                  <img src={service.img} className="w-100" height="350px" alt="" />
                  <h3 className="brand-color mt-3">Service Name: {service.name}</h3>
                  <h5>Service Price: ${service.price}</h5>
                  <p><b className="brand-color">Service Detail</b>: {service.description}</p>
                  <button onClick={ () => handleDelete(service._id)} className="btn btn-danger d-block mx-auto my-3">Delete</button>
                </div>)
            }
        </div>
        </div>
    );
};

export default ManageServices;