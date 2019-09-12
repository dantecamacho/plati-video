import React from 'react'
import './search.css'


const Search=(props)=>(
    <form 
    action="" 
    className="Search"
    onSubmit={props.handleSubmit}    
    > 
        <input 
        ref={props.setRef}
        type="text"
        className="Search-input"
        placeholder="Busca tu video favorito"
        name="search"
        />
    </form>
)

export default Search