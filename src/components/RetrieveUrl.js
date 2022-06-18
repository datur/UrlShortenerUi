import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieveLongUrl } from "../service/urlShortenerService";
import { isEmpty } from "../utils/utils";

export default function RetrieveUrl(){
    let params = useParams();
    let navigate = useNavigate();

    const [url, setUrl] = useState('');
    const [retrievedUrl, setRetrievedUrl] = useState({})

    useEffect(() => {
        if (isEmpty(retrievedUrl)){
            retrieveLongUrl(params.id).then(resp => {setRetrievedUrl(resp)
                setUrl(resp.url)})
        }
        if (retrievedUrl.status === 404){
            navigate('/NotFound')
        }
    }, [url])

    if (url !== ""){
        new Promise(r => setTimeout(r, 4000)).then()
        window.location.replace(url)
    }else{
        navigate('/NotFound')
    }

    return (
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
          <h2>Getting Url for Token: {params.id}</h2>
          
          {
            url !== "" ? <h3>Url Found. Redirecting to {url}</h3> : ""
          }
        
        </div>
    )

}