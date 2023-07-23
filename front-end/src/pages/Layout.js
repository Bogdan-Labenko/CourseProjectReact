import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Layout = () => {

  return <>
    <nav className={styles['nav-container']}>
      <div className={styles['nav-item']}>
        <NavLink to="/" className={styles['nav-link']}>Home</NavLink>
      </div>
      <div className={styles['nav-item']}>
        <DropdownButton variant='secondary' id="dropdown-basic-button" title="Man`s">
          <Dropdown.Item>
            <NavLink to="/mans/Clothes" className={styles['nav-link']}>Clothes</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/mans/Shoes" className={styles['nav-link']}>Shoes</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/mans/Hats" className={styles['nav-link']}>Hats</NavLink>
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className={styles['nav-item']}>
        <DropdownButton variant='secondary' id="dropdown-basic-button" title="Women`s">
          <Dropdown.Item>
            <NavLink to="/womens/Clothes" className={styles['nav-link']}>Clothes</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/womens/Shoes" className={styles['nav-link']}>Shoes</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/womens/Hats" className={styles['nav-link']}>Hats</NavLink>
          </Dropdown.Item>
        </DropdownButton>
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