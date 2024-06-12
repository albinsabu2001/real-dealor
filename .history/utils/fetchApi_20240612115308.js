import axios from "axios";
const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi= async (url)=>{
    const response =await axios.get((url),{
        headers:{
            'x-rapidapi-host: bayut.p.rapidapi.com',
        'x-rapidapi-key: e958a0795amshc2abf4b7027df2bp163540jsnb73c48de81ee'
    }
    })
}

