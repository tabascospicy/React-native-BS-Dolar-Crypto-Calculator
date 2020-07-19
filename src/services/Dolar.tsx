import axios from 'axios';

export default () => {
    return axios.create({
        baseURL:`https://cors-anywhere.herokuapp.com/https://localbitcoins.com/`,
        withCredentials:false,
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        }
    });
};