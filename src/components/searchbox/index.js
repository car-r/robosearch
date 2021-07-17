import React from 'react'
import { SearchBoxContainer, SearchBoxInput } from './SearchBoxElements'

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <SearchBoxContainer>
            <SearchBoxInput 
                type='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
        </SearchBoxContainer>
    )
}

export default SearchBox
