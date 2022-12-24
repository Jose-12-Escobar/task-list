import APIRequestChuck from '../utils/config/axios.config.tarea';

export default function getRandomJokes() {
    return APIRequestChuck.get('/', {
        validateStatus: function (status){
            return status < 500; //Resolve only if the status code is less than 500
        }
    }); // https://api.chucknorris.io/jokes/random/
}