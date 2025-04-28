// pages/profile.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

export default function ProfilePage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Unauthorized. Please log in.');
        router.push('/login');
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/api/orders/myOrders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch orders');
        }

        setOrders(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <Navbar></Navbar>
      <h2>Your Orders</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {!error && orders.length === 0 && <p>No orders found.</p>}
      <div className="row">
        {orders.map((order) => (
          <div key={order._id} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Order #{order._id}</h5>
                <p>Status: <strong>{order.status}</strong></p>
                <p>Total: <strong>${order.totalAmount}</strong></p>
                <ul>
                  {order.items.map((item, i) => (
                    <li key={i}>{item.product?.name} × {item.quantity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
