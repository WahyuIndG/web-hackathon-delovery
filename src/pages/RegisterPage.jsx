import React from 'react';
import { useDispatch } from 'react-redux';
import { IoEarthOutline } from 'react-icons/io5';
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
        <header className="register-page__hero">
          <h1>
            <IoEarthOutline />
          </h1>
        </header>
        <article className="register-page__main">
          <h2>Buat Akun Dull ya</h2>
          <RegisterInput register={onRegister} />
          <p>
            Sudah Punya Akun? <Link to="/">Login</Link>
          </p>
        </article>
      </section>
    </>
  );
}

export default RegisterPage;

{
  /* 
<section className="register-page">
  <header className="register-page__hero">
    <h1>
      <IoEarthOutline />
    </h1>
  </header>
  <article className="register-page__main">
    <h2>Create your account</h2>
    <RegisterInput register={onRegister} />

    <p>
      Already have an account? <Link to="/">Login</Link>
    </p>
  </article>
</section>; 
*/
}
