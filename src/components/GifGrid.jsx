import { getGifs } from "../helpers/getGifts";
import { useState, useEffect } from 'react'
// agregand cada componente gifGrid
export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([]);  
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);


    return(
        <>
            <h3>{category}</h3>
            <ol>
                <li>Titulo</li>
                <li>Titulo</li>
                <li>Titulo</li>
                <li>Titulo</li>
                <li>Titulo</li>
            </ol>
        </>
    )
}