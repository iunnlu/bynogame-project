import axios from 'axios';

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWNmYzczYTBkZTk2MDE4NWQ2YzAwNjE4ZDg0M2Y3ZSIsInN1YiI6IjVlN2E2Mjg4YzhhMmQ0MDAxOTIzZmQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5pmHUTB2PuwKv6M7gzFqdfvntO8n-gQJwng14KinvGE"
    }
})

//https://image.tmdb.org/t/p/original/ Image Base Url