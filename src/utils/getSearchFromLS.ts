/** @format */

export const getSearchFromLS = () => {
  const data = localStorage.getItem('search');
  return data ? JSON.parse(data) : '';
};
