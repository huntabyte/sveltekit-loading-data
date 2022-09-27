import 'dotenv/config'

export const load = async () => {
    console.log('Server Load Ran')
    const fetchMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`)
        const data = await res.json()
        return data.results
    }

    return {
        movies: fetchMovies(),
    }
}