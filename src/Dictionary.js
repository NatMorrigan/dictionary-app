import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";



export default function Dictionary (props) {
    let [keyword, setKeyword] = useState (props.defaultKeyword);
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] = useState (null);


    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelResponse(response){
    setPhotos(response.data.photos);
    }
    
    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        const pexelApiKey ="563492ad6f917000010000015c8adc3d187541baa7f4ae37cd52af89";
        let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelApiKey}`};
        axios.get(pexelApiUrl, { headers: headers,
    }).then(handlePexelResponse);
    }
    

    function handleSubmit (event){
        event.preventDefault();
        search();
        
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                <form  className="Search-form  d-flex justify-content-center"onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} autoFocus={true} defaultValue={props.defaultKeyword} />
                </form>
                </section>
                <Results results={results} />
                <Photos photos={photos} /> 
            </div>
        );
    } else {
        load();
        return "Loading";
    }

}