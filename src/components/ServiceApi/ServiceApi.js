import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '32977164-db809f268a8ff4387fbfd100d',
    per_page: '12',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const getImages = async (query, page) => {
  const response = await instance(`?q=${query}&page=${page}`);
  const data = await response.data;
  return data;
};
