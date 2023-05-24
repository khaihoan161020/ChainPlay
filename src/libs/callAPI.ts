
type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

const callApi = async (method: Method, endpoint: string, body?: any, headers?: any) => {
    const url = process.env.NEXT_PUBLIC_URL_BE_SERVICE + endpoint
    try {
        const rawResponse = await fetch(url, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body),
            next: { revalidate: 0 }
        })
        const content = await rawResponse.json()
        return content
    } catch (error) {
        console.log('ERROR:>>>>>',error)
    }
}

export default callApi