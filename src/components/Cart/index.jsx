import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"

function Cart({currentSale, setCurrentSale}) {
    
    function removeItem(product){
        
        const remove = currentSale.filter((item) => item !== product)
        setCurrentSale(remove)

    }

    return (

        <>
            {currentSale.length === 0 ? (
                <ul className="vazio">
                    <li>
                        <img src="./SacolaVazia.png" alt="CartVazio" />
                    </li>
                </ul>
            ) : (
                <ul className="listaCartCheio">
                    {currentSale.map((product, index) => 
                        <CartProduct removeItem={removeItem} product={product} key={index}/>
                    )}
                </ul>
            )}

            {currentSale.length !== 0 && <CartTotal currentSale={currentSale}
             setCurrentSale={setCurrentSale}/>}
        </>
    )
}

export default Cart