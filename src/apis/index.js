import axios from 'axios';

export default axios.create({
  // NOTE: Sometimes I hit my get request limit with herokuapp and get blocked. So I switch to another baseurl and use the CORS extension to keep coding. I will remove second baseURL at a later date.
  // baseURL: 'https://cors-anywhere.herokuapp.com/http://data.nba.net',
  baseURL: 'https://data.nba.net',
});
