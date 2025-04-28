// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // ✅ Dynamically import Bootstrap JS on client-side only
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

