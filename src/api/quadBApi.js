import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=all'
})

export default instance;