import axios from 'axios';

export default () => {
    return axios.create({
        baseURL:`https://petroapp-price.petro.gob.ve`,
        withCredentials:false,
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        }
    });
};