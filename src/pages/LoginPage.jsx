import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password })); // TODO: dispatch async action to login | asyncSetAuthUser({email, password})
  };
  return (
    <>
      <section className="login-page">
        <LoginInput login={onLogin} />
      </section>
      <p>
        Belum Punya Akun ? <Link to="/register">Register</Link>
      </p>
    </>
  );
}

export default LoginPage;
