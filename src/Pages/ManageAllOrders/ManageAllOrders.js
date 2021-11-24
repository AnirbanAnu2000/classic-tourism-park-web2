// import React from 'react';

// const ManageAllOrders = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default ManageAllOrders;

import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
  // const { serviceId } = useParams();
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch(`https://immense-headland-61926.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    const handleDelete = id => {
      const url = `https://immense-headland-61926.herokuapp.com/orders/${id}`;

      fetch(url, {
        method: "DELETE",
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount){
          alert('Deleted The Order')
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining);
        }
      })
    }
    return (
        <div className="container mb-5">
        <div className="row justify-content-center">
            <h2 className="text-center brand-color my-5">Manage Orders</h2>
            {
              orders.map(order => <div className="col-lg-4 text-center border border-1 py-3" key={order._id}>
                  <h3 className="brand-color mt-3">Service Name: {order.name}</h3>
                  <h5><b className="brand-color">Service Price:</b> ${order.price}</h5>
                  <p><b className="brand-color">Client Email:</b> <b>{order.email}</b></p>
                  <button onClick={ () => handleDelete(order._id)} className="btn btn-danger d-block mx-auto my-3">Delete</button>
                </div>)
            }
        </div>
        </div>
    );
};

export default ManageAllOrders;