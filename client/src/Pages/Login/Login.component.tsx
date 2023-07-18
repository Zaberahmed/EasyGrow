import './Login.style.css';
import { useState } from 'react';
import { profile, userLogin } from './../../Services/user';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = { email, password };

    const token = await userLogin(user);
    console.log(token);

    if (token!) {
      const hello = await profile();
      console.log(hello);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>Email:</label>
          <input
            className=''
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Password:</label>
          <input
            className=''
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <Link to='/map'> */}
        <button type='submit'>Log in</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Login;
