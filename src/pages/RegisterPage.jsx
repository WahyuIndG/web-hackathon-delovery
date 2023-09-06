import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ nama, email, password, jenisKelamin = 1 }) => {
    // TODO: dispatch() asyncAddUser
    dispatch();
    navigate('/');
  };
  return (
    <>
      <section className="register-page">
        <RegisterInput register={onRegister} />
      </section>
    </>
  );
}

export default RegisterPage;
