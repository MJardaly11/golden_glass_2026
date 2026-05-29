import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
        <h1>Golden Glass</h1>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}