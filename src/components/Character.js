// Write your Character component here
import React, { useState } from 'react'
import SearchText from './SearchText'


function Character({info}){
    const[searchText, setSearchTExt]= useState('')
    const handleSearch =(value)=>setSearchTExt(value)


    return(
        <Container>
            <searchText
            handlesearch= {handleSearch}
            />
            info.filter(item.name.includes(searchText)).map(item,index)=>{
                return(
                    <div>
                        <h1>{item.name}</h1>
                        <p>Gender:{item.gender}<br/>
                           Height:{item.height}<br/>
                           Mass:{item.mass}<br/>
                           Birth Year:{item.birth_year}<br/>
                           Eye Color:{item.eye_color}<br/>
                           Hair Color:{item.hair_color}<br/>
                           Skin Color:{item.skin_color}<br/>

                        </p>

                    </div>
                )
            }
        </Container>
    )
}
export default Character;