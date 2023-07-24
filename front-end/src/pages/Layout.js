import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { login, refresh } from '../async/UserService';

const Layout = () => {
  const isUser = useSelector(state => state.user.isUser)
  const dispatch = useDispatch()
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
      <div className={styles['nav-item']}>
        {isUser ? <h1>User</h1> 
        : <div>
            <button onClick={() => dispatch(login({email: 'user@example.com', password: 'string'}))}>login</button>
            <h1>Not user</h1>
          </div>}
      </div>
    </nav>
    <Outlet />
  </>
};

export default Layout;