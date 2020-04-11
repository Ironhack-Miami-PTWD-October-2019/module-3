import axios from 'axios';

const service = axios.create({
  baseURL: 'https://got-mock-api.herokuapp.com'
});

const GOT_SERVICE = {
  getAllEpisodes: () => {
    return service.get('/episodes');
    //   .then(res => res.data)
    //   .catch(err => console.log(err));
  }
};

export default GOT_SERVICE;
