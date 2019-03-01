import axios from 'axios';

const KEY = 'AIzaSyBFTOe4nzq3aVifwHiDqS_jIE0e_C8C0pc'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
})