import './style.css'
import InputSearch from "../InputSearch"

function Header({search, setSearch, searchInput, products}) {
   
    return(
        <header>
            <figure>
                <img src="./logo.png" alt="logoKBurguer" />
            </figure>
            <div className="searchSection">
                <InputSearch 
                className="searchInput"
                placeholder="Digitar Pesquisa"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button className="searchButton" onClick={searchInput}>Pesquisar</button>
            </div>
        </header>
    )

}

export default Header