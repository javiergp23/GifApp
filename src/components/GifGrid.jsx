
export const GifGrid = ({ category }) => {
    
    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=vVIHvNC7Yb5l94dtLK2fyblNzBRO33hH&q=${ category }`
        const resp = await fetch(url);

        console.log(resp);
    }

    getGifs();

    return(
        <>
            <h3>{category}</h3>
           
        </>
    )
}