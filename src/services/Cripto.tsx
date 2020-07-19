import axios from 'axios';

export default () => {
    return axios.create({
        baseURL:`https://min-api.cryptocompare.com/data`,
        withCredentials:false,
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        }
    });
};