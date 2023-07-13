import axios from 'axios';

const svc13Api = axios.create({
    baseURL: 'http://localhost:8082'
})

export const getFiles = async () => {
    const {data} = await svc13Api.get(`/files?domain=SAT01`);
    return data;
}

export const getPokemonById = async () => {
    const { data } = await svc13Api.get('pokemon/4')
    return data;
}