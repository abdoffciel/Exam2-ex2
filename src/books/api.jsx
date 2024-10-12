import axios from 'axios';

export const fetchBooks = async () => {
  try {
    const response = await axios.get('/db.json'); 
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
