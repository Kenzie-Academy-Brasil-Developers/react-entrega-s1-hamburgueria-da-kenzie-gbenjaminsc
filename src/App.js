import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import ProductList from './components/ProductList'


function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    
  }, [])

  function handleClick(idProduct) {
    
    const findProduct      = products.find(({id}) => id === idProduct)
    const duplicateProduct = currentSale.some(({id}) => id === idProduct)

    duplicateProduct ? (
      alert('Produto já aplicado no carrinho')
    ) : (
      setCurrentSale([...currentSale, findProduct])
    )

  }

  function searchInput() {
    
    const productsFilter = products.filter(({name,category}) =>
      name.toLowerCase().includes(search.toLowerCase()) || category.toLowerCase().includes(search.toLowerCase())
    )
    
    setFilteredProducts(productsFilter)
  }
  

  return (
    <>
      <Header search={search} setSearch={setSearch} searchInput={searchInput} products={products}/>
      <main>
        <section className='secaoVitrine'>
          <ProductList products={products}
          handleClick={handleClick}
          filteredProducts={filteredProducts}
          search={search}/>
        </section>

        <aside className='asideCart'>
          <div className='tituloCart'>
            <h1>Carrinho de compras</h1>
          </div>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
        </aside>
      </main>
    </>
  );
}

export default App;
