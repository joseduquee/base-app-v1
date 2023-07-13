import axios from 'axios';

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const getPokemons = async() => {
    const { data } = await pokemonApi.get(`/pokemon?limit=50`);
    return data.results;
}

export const getPokemonById = async() => {
    const { data } = await pokemonApi.get('pokemon/4')
    return data;
}