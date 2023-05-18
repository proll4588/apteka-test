import React, { FC, useEffect, useState } from 'react'
import SearchProps from './Search.props'
import useDebounce from '../../hooks/debounce.hook'
import './Search.css'

const Search: FC<SearchProps> = ({ onChange }) => {
    const [search, setSearch] = useState<string>('')
    const deb = useDebounce(search)

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        onChange && onChange(deb)
    }, [deb])

    return (
        <div className='Search'>
            <div className='Search__container'>
                <input
                    className='Search__input'
                    placeholder='search'
                    type='text'
                    value={search}
                    onChange={inputHandler}
                />
            </div>
        </div>
    )
}

export default Search
