
import { ItemCount } from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {


    return (

        <div className="card text-center">
            <ItemDetail />
            <ItemCount />
        </div>
    )
}


export default ItemDetailContainer
