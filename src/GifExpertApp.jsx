import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball'])
   
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;

        // console.log(newCategory)
        // categories.push(newCategory);
        setCategories([ newCategory, ...categories ])
    }
    
    return(
        <>
           
        <h1>Gif Expert App</h1>
        <AddCategory 

            onNewCategory={ (value) => onAddCategory(value) }
        />
        
        {
        categories.map(category => {
            (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            )
        })
        }
        

        </>
    )
}