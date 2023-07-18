import './Signup.style.css';
import { useState } from 'react';
import EasyGrow from './../../assets/EasyGrow.component';
import { createAccount } from './../../Services/user';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');

  const [gotoLogin, setGotoLogin] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      name,
      email,
      password,
      phoneNumber,
      address,
      role,
    };

    createAccount(newUser)
      .then(() => {
        console.log('account created');
        setGotoLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <EasyGrow />
        </div>
        <div>
          <label className='label'>Name:</label>
          <input
            className=''
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='label'>Email:</label>
          <input
            className=''
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='label'>Password:</label>
          <input
            className=''
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='label'>Phone Number:</label>
          <input
            className=''
            type='tel'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='label'>Address:</label>
          <textarea
            className=''
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='label'>Role:</label>
          <select className='' value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value=''>Select a role</option>
            <option value='farmer'>Farmer</option>
            <option value='landOwner'>Land Owner</option>
          </select>
        </div>

        {gotoLogin ? (
          <Link to='/login'>
            <button type='submit'>Sign Up</button>
          </Link>
        ) : (
          <button type='submit'>Sign Up</button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
