import { api } from '../api/api';

const getUser = async (token, dispatch) => {
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
