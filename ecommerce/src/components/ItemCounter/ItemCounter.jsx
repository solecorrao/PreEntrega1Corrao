
import { useCounter } from "../../hooks/useCounter.js";

export const ItemCounter = ({ initial=1, stock=5, onAdd }) => {
    const {counter, handleRestar, handleSumar} = useCounter(initial, stock)  
    
    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (

        <div>
            <div >
                <button onClick={handleRestar}>-</button>
                <label> {counter} </label>
                <button onClick={handleSumar}>+</button>
            </div>
            <button onClick={handleOnAdd}>Agregar a pedido</button>
        </div>

    );
}