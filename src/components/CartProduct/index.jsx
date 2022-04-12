
function CartProduct({product, removeItem}){
    return(
    <>
        <li key={product.id} id={product.id} className='listaCart'>
            <div className="imgCart">
                <figure>
                    <img src={product.img} alt={product.name} />
                </figure>
            </div>
            <div className='infoCart'>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
            </div>
            <div className="removeDiv">
                <button className="btnRemove" onClick={() => removeItem(product)}>Remover</button>
            </div>
        </li>
    </>
    )
}

export default CartProduct