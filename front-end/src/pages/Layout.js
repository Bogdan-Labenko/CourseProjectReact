import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css';


const Layout = () => {
  return <>
    <nav className={styles['nav-container']}>
      <div className={styles['nav-item']}>
        <NavLink to="/" className={styles['nav-link']}>Home</NavLink>
      </div>
      <div className={styles['nav-item']}>
        <NavLink to="/mans" className={styles['nav-link']}>Man's clothes</NavLink>
      </div>
      <div className={styles['nav-item']}>
        <NavLink to="/womens" className={styles['nav-link']}>Women's clothing</NavLink>
      </div>
      <div className={styles['nav-item']}>
        <NavLink to="/cart" className={styles['nav-link']}>
          <img alt="banner" className={styles['cart-icon']} src="/cart-icon-28356.png" />
        </NavLink>
      </div>
    </nav>
    <Outlet />
  </>
};

export default Layout;