import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([  'Gifs'])
   
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;

        // console.log(newCategory)
        // categories.push(newCategory);
        setCategories([ newCategory, ...categories ])
    }
    return(
        <>
        <h1>Gif Search App</h1>
        <AddCategory 

            onNewCategory={ (value) => onAddCategory(value) }
        />
        
        {
        categories.map((category) => 
            (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            )
        )
        }
        </>
    )
}