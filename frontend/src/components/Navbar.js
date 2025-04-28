import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  const decodeToken = (token) => {
    if (!token || typeof token !== 'string') {
      return null;
    }
  
    try {
      const payload = token.split('.')[1];
      if (!payload) throw new Error('Invalid token structure');
  
      const decoded = JSON.parse(atob(payload));
      return decoded;
    } catch (error) {
      console.error('Failed to decode token:', error.message);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = decodeToken(token);

    if(user) {
        setUserName(user.name);
    }

    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <h4>{userName }</h4>

      <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/profile">Profile</Link>
          </li>
        </ul>

        <ul className="navbar-nav mb-2 mb-lg-0">
          {isLoggedIn ? (
            <li className="nav-item">
              <button className="btn btn-outline-dark btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link text-dark"  href="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark"  href="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
