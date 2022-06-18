import axios from "axios";
import { getApiDomain } from "../utils/utils";

export async function createShortUrl(urlToShorten){
    try{
    var resp = await axios.post(getApiDomain() + "/api/UrlShortener", `${urlToShorten}`, {headers: {
        'Content-Type': 'application/json',
    }});

    return resp.data
    }
    catch (err){
        return {status: err.response.status}
    }
}

export async function retrieveLongUrl(shortUrlToken){
    try{
        var resp = await axios.get(getApiDomain() + "/api/UrlShortener/" + shortUrlToken)
        console.log(resp)
        return resp.data
    }
    catch (err){
        return {status: err.response.status,
        url: ""}
    }
}