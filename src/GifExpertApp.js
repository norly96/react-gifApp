import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   
    const [categories, setCategories] = useState(['Naruto'])
    
  /*   const handleAdd = () => {
       //setCategories([...categories, 'Bleach']);
       setCategories( cats => [...cats, 'Bleach']);
    } */

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>


            <ol>
                { categories.map(category=> {
                    return <GifGrid category={category} key={category}/>
                })
                }
            </ol>    
        </div>
    )
}
