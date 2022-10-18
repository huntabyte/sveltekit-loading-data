import 'dotenv/config'

export const load = async () => {
    console.log('Server Load Ran')
    const fetchCovidData = async () => {
        const res = await fetch(`https://api.covidtracking.com/v1/us/current.json`)
        const data = await res.json()
        return data
    }

    return {
        covid : fetchCovidData(),
    }
}