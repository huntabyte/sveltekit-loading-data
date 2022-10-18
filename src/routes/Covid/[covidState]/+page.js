export const load = ({fetch, params}) =>{
    console.log(params)

    const fetchStateData = async(id) =>{
        const stateData = await fetch('https://api.covidtracking.com/v1/states/daily.json')
        const state = await stateData.json()
        return state.filter(d => d.state == `${id}`)
        
    }

    return {
        stateData: fetchStateData(params.covidState)
    }
}