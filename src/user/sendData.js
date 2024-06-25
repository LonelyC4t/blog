import { api } from '../api/api';

const sendData = async (info, dispatch, setError) => {
  if (Object.keys(info.user).length === 3) {
    try {
      let request = await api.createProfile(info);
      if (!request.ok) {
        let responce = await request.json();
        setError(responce.errors);
        return responce;
      }
      if (request.ok) setError(null);
      let responce = await request.json();
      return responce;
    } catch (err) {
      setError(err);
    }
  }
  if (Object.keys(info.user).length === 2) {
    try {
      let request = await api.logIn(info);
      if (!request.ok) {
        let responce = await request.json();
        setError(responce.errors);
        return responce;
      }
      if (request.ok) {
        let responce = await request.json();
        setError(null);
        const user = {
          username: responce.user?.username,
          email: responce.user?.email,
        };
        dispatch({ type: 'user', payload: user });
        localStorage.setItem('token', responce.user.token);
        return responce;
      }
    } catch (err) {
      setError(err);
    }
  }
  if (Object.keys(info.user).length === 4) {
    let request = await api.updateUser(info);
    let responce = await request.json();
    const user = {
      username: responce.user.username,
      email: responce.user.email,
      avatar: responce.user.image,
    };
    dispatch({ type: 'user', payload: user });
  }
};
export default sendData;
