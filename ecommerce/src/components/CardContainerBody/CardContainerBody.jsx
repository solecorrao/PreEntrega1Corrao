import { Link } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter";

export const CardContainerBody = ({ product }) => {

    const onAdd = (cantidad) => {
        console.log(`lacantidad seleccionada es ${cantidad}`)
    }

    return (
        <div className="card">
            <div className='card-body p-0'>
                <h6 className="card-header">{product.name}</h6>
                <img src={product.imgUrl} className='card-img-top' alt='imagen' />
                <div className="card-body">
                    <h4 className="card-text">Precio: ${product.price}</h4>
                    <p className="card-text" >{product.description}</p>
                    {/* <ItemCounter 
                    initial={1}
                    stock={product.stock}
                    onAdd={onAdd} /> */}
                </div>
            </div>
            <Link to={`/detail/${product.id}`}>
                <button className=" btn btn-outline-dark w-100">Detalle</button>
            </Link>
        </div>


    );
};

export default CardContainerBody