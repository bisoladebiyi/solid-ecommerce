import axios from "axios"

export const fetchItems = async (url: string) => {
    const options = {
        url,
        method: 'GET'
    }
    try {
        const { data } = await axios(options)

        return data
    } catch (error) {
        throw error
    }
}