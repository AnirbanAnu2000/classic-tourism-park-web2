import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth"; 

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://immense-headland-61926.herokuapp.com/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDelete = id => {
    const url = `https://immense-headland-61926.herokuapp.com/orders/${id}`;

    fetch(url, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount){
        alert(user.displayName + " you have deleted this service item.")
        const remaining = orders.filter(order => order._id !== id);
        setOrders(remaining);
      }
    })
  }

  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="brand-color fw-bold text-center my-4">Dear {user.displayName} below your orders</h2>
          <table class="table table-bordered border-primary text-center mt-3 mb-5">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {
              
              orders.map((order, i)=><tbody>
              <tr key={order.id} order={order}>
                <td style={{verticalAlign:"middle"}}>{order.name}</td>
                <td style={{verticalAlign:"middle"}}>{order.price}</td>
                <td style={{verticalAlign:"middle"}}>
                <button onClick={ () => handleDelete(order._id)} className="btn btn-danger d-block mx-auto my-3 btn-sm">Cancel</button>
                </td>
                <td style={{verticalAlign:"middle"}}><button className="btn btn-warning fw-bold">{order.status}</button></td>
              </tr>
            </tbody>)
            }
          </table>                      
              
        </div>        
      </div>   
    </div>
  );
};

export default MyOrders;
