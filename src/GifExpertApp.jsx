import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball'])
   
    const onAddCategory = () => {
        setCategories([ ...categories, 'Game of Thrones'])
    }
 
    return(
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>
            {/* Input */}
            <AddCategory setCategories={ setCategories }/>
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