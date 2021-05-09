import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
  const [navData, setNavData] = useState({
    active: false,
  });

  const {active} = navData;

  const handleToggle = () => {
    setNavData({...navData, active: !active});
  };
  return (
    <div>
      <section className='navbar-section'>
        <div className='nav-container'>
          <div className='navbar-content'>
            <Link to='/home' className='logo'>
              <img
                src='/img/navbar/header-logo.png'
                alt=''
                width='158'
                height='38.81'
              />
            </Link>

            <div
              onClick={handleToggle}
              className={active ? 'is-active menu-toggle' : 'menu-toggle'}
              id='mobile-menu'
            >
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>

            <ul className={active ? 'active nav-menu' : 'nav-menu'}>
              <li>
                <NavLink
                  to='/home'
                  className='nav-links'
                  activeClassName='active'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/agency'
                  className='nav-links'
                  activeClassName='active'
                >
                  Agency Banking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className='nav-links'
                  activeClassName='active'
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/contact'
                  className='nav-links'
                  activeClassName='active'
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/faq'
                  className='nav-links'
                  activeClassName='active'
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
