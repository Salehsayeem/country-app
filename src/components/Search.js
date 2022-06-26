import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Search = (props) => {
    const val = props;
    const [searchText, setSearchText] = useState("")
    const handleSearchChange = (e) => {
        setSearchText(e.target.value)
    }
    useEffect(() => {
        val.onSearch(searchText)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText])
    return (
        <div
            style={{ textAlign: "center" }}>
            <input
                type='text' placeholder="Search Countries"
                value={searchText}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Search