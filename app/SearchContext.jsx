'use client'
import { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movieItem, setMovieItem] = useState([])
    
    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, movieItem, setMovieItem }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchProvider, SearchContext };
