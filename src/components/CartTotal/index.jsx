function CartTotal({currentSale, setCurrentSale}){
    
    const total = currentSale.reduce((acc, {price}) => acc + price, 0)

    function removeAll(){
        return setCurrentSale([])
    }

    return(
        <footer>
            <hr></hr>
            <div className="footerCart">
                <span className="totalCart">Total</span>
                <span className="totalCartPreco">R$: {total.toFixed(2).replace('.',',')}</span>
            </div>
            <button className="removerTodos" onClick={removeAll}>Remover todos</button>
        </footer>
    )

}

export default CartTotal