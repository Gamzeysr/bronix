import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "./card/Card";
import MainCss from "./Main.module.css";





const Main = () => {
    const [news, setNews] = useState([]);
    // stateleri kullanacahım yer

    const url = "https://rickandmortyapi.com/api/character?page=";



    const handleData = async (page) => {
        const { data } = await axios(`${url}${page}`)
        setNews(data.results)
        // console.log(data.results)
    }



    const newsData = async () => {
        const { data } = await axios(url)
        setNews(data.results)

    }


    useEffect(() => {

        handleData(1)
    }, [])



    return (
        <div >
            {news?.map((item, index) => {
                return (
                    <Card {...item} key={index} />
                )
            })}
            <div className={MainCss.pagination}>
                <button onClick={() => handleData(1)}>1</button>
                <button onClick={() => handleData("2")}>2</button>
                <button onClick={() => handleData("3")}>3</button>
                <button onClick={() => handleData("4")}>4</button>
                <button onClick={() => handleData("5")}>5</button>

            </div>




        </div >
    )
}

export default Main;