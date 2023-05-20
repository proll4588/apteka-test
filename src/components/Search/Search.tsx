import React, { FC } from 'react'
import SearchProps from './Search.props'
import './Search.css'

const Search: FC<SearchProps> = ({ onChange, value }) => {
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value)
    }

    return (
        <div className='Search'>
            <div className='Search__container'>
                <input
                    className='Search__input'
                    placeholder='search'
                    type='text'
                    value={value}
                    onChange={inputHandler}
                />
            </div>
        </div>
    )
}

export default Search
