// /components/Layout.js
import Head from "next/head";
import Link from 'next/link';

const Layout = ({ title = "My Shop", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">🛒 My Shop</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fw-bold">
          Home
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link href="/login" className="nav-link text-dark">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signUp" className="nav-link text-dark">
                Sign-Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-600">
        © {new Date().getFullYear()} My Shop. All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
