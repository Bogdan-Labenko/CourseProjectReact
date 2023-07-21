import { Outlet, Link } from "react-router-dom";
import "../styles/main.css"

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mans">Man`s clothes</Link>
          </li>
          <li>
            <Link to="/womens">Women's clothing</Link>
          </li>
          <li>
            <Link to="/jewelery">Jewelery</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
        </ul>
      </nav> */}

      <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/mans">Man`s clothes</Link>
          </div>
          <div>
            <Link to="/womens">Women's clothing</Link>
          </div>
          <div>
            <Link to="/jewelery">Jewelery</Link>
          </div>
          <div>
            <Link to="/electronics">Electronics</Link>
          </div>
          <div>
            <Link to="/cart"><img style={{height: "50px", width: "50px"}} src="/cart-icon-28356.png"/></Link>
          </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;