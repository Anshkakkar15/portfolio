import React from 'react';
import logo from '../../assets/images/logo.jpg'
import '../../Styles/Navbar.css'
import { Navigation } from '../../appMock/Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2 fs-6">
      <div className="container navbar m-auto  navWidth">
        <div className='mx-2'>
          <img src={logo} alt='logo' width={75} height={75} className="logo" />
          <a className="navbar-brand px-2" href="/">Ansh</a>
        </div>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto relative" >
            {Navigation?.map((el) =>
              <li key={el?.id} className="nav-item ">
                <Link className="nav-link" aria-current="page" to={el?.link}>{el?.router}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav >
  )
}

