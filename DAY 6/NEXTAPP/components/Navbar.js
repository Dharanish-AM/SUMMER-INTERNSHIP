

import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyApp</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
