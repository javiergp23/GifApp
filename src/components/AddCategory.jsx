import { useState } from 'react'


export const AddCategory = ({ setCategories }) => {
    const [inputValeu, setInputValue] = useState('Datos');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValeu.trim().length <=1) return;
        setCategories( categories => [inputValeu, ...categories])
        setInputValue('');
    }

  return (
    
    <form onSubmit={ (event) => onSubmit(event)  }>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValeu}    
            onChange={ onInputChange}
        />
    </form>

  )
}
