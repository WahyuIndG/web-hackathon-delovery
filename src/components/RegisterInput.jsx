import React from 'react';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [nama, onNamaChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <>
      <form className="register-input">
        <input type="text" value={nama} onChange={onNamaChange} placeholder="John Doe" />
        <input type="text" value={email} onChange={onEmailChange} placeholder="John@sample.com" />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="tuliskan sandi yg kuat"
        />
        <button type="button" onClick={() => register({ nama, email, password })}>
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterInput;
