import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductCarousel from '@/components/ProductCarousel';
import {useRouter} from 'next/router';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();


  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <>
      <Head>
        <title>My Store | Curated Modern Products</title>
        <meta name="description" content="Discover simple, high-quality products for modern living." />
      </Head>
            {/* Nav bar */}
      <Navbar></Navbar>


      {/* Hero */}
      <section className="vh-100 d-flex align-items-center justify-content-center text-center bg-light">
        <div className="container">
          <h1 className="display-2 fw-bold text-dark mb-3">Modern Essentials</h1>
          <p className="lead text-muted mb-4">Carefully curated items to elevate your everyday life.</p>
          <Link href="/products" className="btn btn-dark btn-lg px-5 py-3 rounded-pill shadow">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Info Icons */}
      <section className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded-4 h-100">
              <i className="bi bi-truck fs-1 mb-3"></i>
              <h5 className="fw-semibold">Free Shipping</h5>
              <p className="text-muted">On all U.S. orders over $50</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded-4 h-100">
              <i className="bi bi-lock fs-1 mb-3"></i>
              <h5 className="fw-semibold">Secure Checkout</h5>
              <p className="text-muted">256-bit encryption protects your data</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded-4 h-100">
              <i className="bi bi-headset fs-1 mb-3"></i>
              <h5 className="fw-semibold">24/7 Support</h5>
              <p className="text-muted">Real people, real help — any time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Featured Collection</h2>
          <ProductCarousel products={products} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0 small">© {new Date().getFullYear()} My Store — All rights reserved.</p>
      </footer>
    </>
  );
}


