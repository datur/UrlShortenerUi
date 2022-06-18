
export function getApiDomain(){
    const apiPort = process.env.REACT_APP_API_PORT || 7250;
    const apiUrl = process.env.REACT_APP_API_URL || `https://localhost:${apiPort}`;
    return apiUrl
}

export function isEmpty(obj){
    return Object.keys(obj).length === 0 && obj.constructor === Object
}