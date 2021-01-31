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
            <img
              src='./img/navbar/Parapay.svg'
              alt=''
              width='150'
              height='50'
              className='logo'
            />

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
                  to='/about'
                  className='nav-links'
                  activeClassName='active'
                >
                  About
                </NavLink>
              </li>
              <li>
                <a href='' className='nav-links'>
                  Agency Banking
                </a>
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
