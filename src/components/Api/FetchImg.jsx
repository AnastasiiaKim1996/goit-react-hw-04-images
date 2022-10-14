import axios from 'axios';

const My_KEY = '29338036-8ca2af07466f8459e5d49b2a7';
axios.defaults.baseURL = `https://pixabay.com/api/?key=${My_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const FetchImg = async (query, page) => {
  try {
    const response = await axios.get(`&q=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
