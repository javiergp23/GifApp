import { useState } from 'react'

// components category
export const AddCategory = ({ onNewCategory }) => {
    const [inputValeu, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValeu.trim().length <= 1) return;

        // setCategories( categories => [inputValeu, ...categories])
        setInputValue('');
        onNewCategory( inputValeu.trim());
    }
    
  return (
    <form onSubmit={ (event) => onSubmit(event) }>

        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValeu}    
            onChange={ onInputChange}
        />
        
    </form>
  )
}
