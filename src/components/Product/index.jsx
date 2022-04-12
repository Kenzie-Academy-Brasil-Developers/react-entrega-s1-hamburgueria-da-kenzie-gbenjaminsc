
function Product({id, name, category, price, img, handleClick}){

    return(
        <>
        <li key={id} id={id} className='cardProduto'>
            <figure className="imgProduto">
                <img src={img} alt={name}/>
            </figure>
            <div className='produtoInfo'>
                <h3>{name}</h3>
                <span className="categoriaLista">{category}</span>
                <span className="precoLista">R$: {price.toFixed(2)}</span>
                <button className="buttonAdd" data-id={id} onClick={() => handleClick(id)}>Adicionar</button>
            </div>
        </li>
        </>
    )

}

export default Product