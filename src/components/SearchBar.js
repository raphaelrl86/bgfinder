const SearchBar = ({searchGames}) => {

    const handleSearch = e => {
         searchGames(e.target.value)
    }

    return (
        
        <div className='SearchGame'>
            
            <form className="d-flex p-0 pt-2" role="search">
                
            <input 
                className="form-control me-2" 
                type="text" 
                placeholder="Buscar jogo e encontrar grupo" 
                aria-label="Search"
                onChange={handleSearch}
                />
            
            </form>

        </div>
    )

}

export default SearchBar