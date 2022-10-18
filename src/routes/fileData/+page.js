
export const load = async ({ fetch }) => {

    const fetchFile = async () => {   
        const airInformation = await fetch('/top-pypi-packages-30-days.json')
        // console.log(airInformation)
        const airData = await airInformation.json()
        return airData
    }

    return {
       airInformation: fetchFile(),
    }
}