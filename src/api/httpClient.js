import axios from 'axios';

const svc13Api = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT_BASE
})

export const getFiles = async (selectedValue) => {
    const {data} = await svc13Api.get(`/files?domain=${selectedValue}`);
    return data;
}

export const putFile = async (body) => {
    const response = await svc13Api.put('files/upload', body);
    return response;
}