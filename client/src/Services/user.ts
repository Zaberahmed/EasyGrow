const BASE_URL = 'http://localhost:4000';

export const createAccount = async (newUser: User) => {
  try {
    const response = await fetch(`${BASE_URL}/registration`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Failed to create account');
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const userLogin = async (user: any) => {
  console.log(user);
  try {
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();

    localStorage.setItem(`${data.accessToken}`, `${data.token}`);

    return data.accessToken;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    const response = await fetch('http://localhost:4000/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get profile');
    }

    const message = await response.json();

    console.log(message);
  } catch (error) {
    console.error(error);
  }
};

export const profile = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await fetch('http://localhost:4000/profile', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get profile');
    }

    const user = await response.json();

    console.log(user);
  } catch (error) {
    console.error(error);
  }
};
