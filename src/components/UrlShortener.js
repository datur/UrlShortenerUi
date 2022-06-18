import React, { useEffect, useState } from "react";
import { createShortUrl } from "../service/urlShortenerService";
import { isEmpty } from "../utils/utils";

export default function UrlShortener(){
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState({});

    useEffect(() => {

    }, [shortUrl])

    function onUrlchange(evt){
        setUrl(evt.target.value)
    }

    function handleSubmit(evt){
        evt.preventDefault()

        if (!url.startsWith("http")){
            alert("url must start with http:// or https://")
        }
        else{
            createShortUrl(url).then(resp => setShortUrl(resp))
        }
    }

    function handleCopy(){
        navigator.clipboard.writeText(shortUrl.shortUrl);
        setShortUrl({
            ...shortUrl,
            copied: true
        })
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
        <div className="UrlShortener">
            <center><h3>Url to shorten:</h3></center>
            <center><form onSubmit={handleSubmit}>
                <label>

                    <input
                        type="text"
                        onChange={onUrlchange}
                        value={url}
                        size="50"
                        style={{textAlign: "center" }}>
                    </input>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
            </center>

        <br/>
        <center>
        {shortUrl.shortUrl}
        <br/>
        {
            isEmpty(shortUrl) ?  "" : <button onClick={handleCopy}>Copy</button>
        }
        <br/>
        {
            shortUrl.copied ? "Copied!" : ""
        }
        </center>
        </div>
        </div>
    )
}