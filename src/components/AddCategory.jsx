import { useState } from "react"


export const AddCategory = () => {
    const [inputValeu, setInputValue] = useState('Datos');
    const onInputChange = ({ target }) => {
        
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValeu);
    }

  return (
    <>
        <form onSubmit={ (event) => onSubmit(event)  }>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={inputValeu}    
                onChange={ onInputChange}
            />
        </form>
    </>
  )
}
