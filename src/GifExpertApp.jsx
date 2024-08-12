import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

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
            {/* Titulo */}
            <h1>Gif Expert App</h1>
            {/* Input */}
            <AddCategory 
            // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />
            {/* Listado de Gif */}
            <ol>
                {
                categories.map(category => {
                    return <li key={ category}>{ category }</li>
                })
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}