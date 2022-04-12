import Product from "../Product"

function ProductList({products, handleClick, filteredProducts, search}) {

    return filteredProducts.length > 0 ?(
        <>
        {search !== '' && (<h1 className="filtroResult"> Resultado para: <strong>{search}</strong></h1>)}
        <ul className="vitrineProdutos">
            {filteredProducts.map(({id, name, category, price, img}) =>
                <Product key={id}
                id={id}
                name={name}
                category={category} 
                price={price}
                img={img}
                handleClick={handleClick}/>
            )}
        </ul>
        </>
    ) : (
        <>
        <ul className="vitrineProdutos">    
            {products.map(({id, name, category, price, img}) => 
                <Product key={id}
                id={id}
                name={name}
                category={category}
                price={price}
                img={img}
                handleClick={handleClick}/>
            )}
        </ul>
        </>
    )
}

export default ProductList