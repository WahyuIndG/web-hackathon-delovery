import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ nama, email, password, jenis_kelamin = 1 }) => {
    dispatch(); // TODO: dispatch action async to register | asyncRegisterUser({...})
    navigate('/');
  };
  return (
    <>
      <section className="register-page">
        <RegisterInput register={onRegister} />
        <p>
          Sudah Punya Akun ? <Link to={'/register'}>Register</Link>
        </p>
      </section>
    </>
  );
}

export default RegisterPage;
