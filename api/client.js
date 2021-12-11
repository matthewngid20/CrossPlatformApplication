import axios from 'axios';

export default axios.create({
  //baseURL: 'http://yourIPGoesHere:3000/api',
  baseURL: 'http://192.168.1.100:3000/api',
});