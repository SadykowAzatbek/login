import { useState } from 'react';
import { loginMutation } from '../../types';

const Login = () => {
  const [user, setUser] = useState<loginMutation>({
    email: '',
    password: '',
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/users/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <>
      <div>
        <h4>Войти в личный кабинет</h4>
        <form onSubmit={formSubmitHandler}>
          <input
            required
            name="email"
            type="email"
            value={user.email}
            onChange={inputChangeHandler}
            placeholder="E-mail"
            className="input-styles"
            autoFocus
          />
          <input
            required
            name="password"
            type="password"
            value={user.password}
            onChange={inputChangeHandler}
            placeholder="Password"
            className="input-styles"
          />
          <button className="btn-styles" type="submit">Войти</button>
        </form>
      </div>
    </>
  );
};

export default Login;