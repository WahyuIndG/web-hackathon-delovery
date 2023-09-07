import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../states/authUser/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ nama, email, password, jenis_kelamin = 1 }) => {
    dispatch(asyncRegisterUser({ email, nama, password, jenis_kelamin })); // TODO: dispatch action async to register | asyncRegisterUser({...})
    navigate('/');
  };
  return (
    <>
      <section className="register-page">
        <RegisterInput register={onRegister} />
        <p>
          Sudah Punya Akun ? <Link to="/login">Login</Link>
        </p>
      </section>
    </>
  );
}

export default RegisterPage;
