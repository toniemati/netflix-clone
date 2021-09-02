import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <div className={`navbar ${show && 'navbar--black'}`}>
      <img className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo" />

      <img className="navbar__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User avatar" />
    </div>
  )
}

export default Navbar
