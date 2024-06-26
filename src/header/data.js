import { api } from '../api/api';

const getUser = async (dispatch) => {
  const token = localStorage.getItem('token');
  const request = await api.getUser(token);
  const responce = await request.json();
  const user = {
    username: responce?.user.username,
    email: responce?.user.email,
    avatar: responce?.user.image,
  };
  dispatch({ type: 'user', payload: user });
  return responce;
};
export default getUser;
