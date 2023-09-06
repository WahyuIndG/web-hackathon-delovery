import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ authUser, logOut }) {
  const { name } = authUser;

  return (
    <>
      <div>
        <p>{name}</p>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/product'}>Product</Link>
          <Link to={'/occasion'}>Occasion</Link>
        </nav>
        <button type="button" onClick={logOut}>
          Log out
        </button>
      </div>
    </>
  );
}

export default Navigation;
