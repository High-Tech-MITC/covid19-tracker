import { Circle, Popup } from "leaflet"

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 800
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1200
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 2000
    },
}

export const sortData = (data) => {
    const sortedData = [...data]

    return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1)
}

