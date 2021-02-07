import React, { useState } from 'react' 

function SearchText({handleSearch}){
    const[value,setValue]=useState('')

    return(

        <form onSubmit={(e)=>{
            e.preventDefault();
            setValue(value);
            handleSearch(value);
            setValue('');
        }}>
            <label>Star Wars Characters</label>
        </form>
    );
}
export default SearchText;