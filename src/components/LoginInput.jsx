import React from 'react';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <>
      <form className="login-input">
        <input type="text" value={email} onChange={onEmailChange} placeholder="Username" />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
        <button type="button" onClick={() => login({ email, password })}>
          Login
        </button>
      </form>
    </>
  );
}

export default LoginInput;
