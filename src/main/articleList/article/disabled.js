const disabled = () => {
  const token = localStorage.getItem('token');
  if (token) return false;
  if (!token) return true;
};
export default disabled;
