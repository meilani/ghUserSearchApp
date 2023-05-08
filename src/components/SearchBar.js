const SearchBar = () => {
    return (
        <div className="container searchbar-container">
            <label for="search-input" className="search-label">
                <span className="hidden-text">Search for a Github profile by username</span>
            </label>
            <input 
                id="search-input"
                className="search-input"
                type="search" 
                placeholder="Search Github username..."
            />
            <div id="search-error"></div>
            <button className="search-btn">Search</button>
        </div>
    )
}

export default SearchBar