import { getGifs } from "../helpers/getGifts"
// agregand cada componente gifGrid
export const GifGrid = ({ category }) => {
    
    getGifs(category);

    return(
        <>
            <h3>{category}</h3>
            
        </>
    )
}