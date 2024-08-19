// agregand cada componente gifGrid
export const GifGrid = ({ category }) => {
    
    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=  q=${ category }`
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