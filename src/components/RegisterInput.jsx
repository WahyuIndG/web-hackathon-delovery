import React from 'react';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <>
      <form className="register-input">
        <input type="text" value={name} onChange={onNameChange} placeholder="John Doe" />
        <input type="text" value={email} onChange={onEmailChange} placeholder="John@sample.com" />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="type strong password"
        />
        <button type="button" onClick={() => register({ name, email, password })}>
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterInput;
