import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mFetch } from "../helpers/mFetch";


export const ItemList = () => {
    
    const [productos, setProductos] = useState([])
    const {cid} = useParams()

    useEffect(() => {

        if(cid) {
            mFetch()
            .then(result => setProductos(result.filter(product => product.category === cid )))
            .catch(err => console.log(err))
        } else {
            mFetch()
            .then(result => setProductos(result))
            .catch(err => console.log(err))
        }
    }, [cid])


    return (

        <section>
            {productos.map((product) => (
                <div key={product.id} className='card-group w-25 text-center gap-3 '>
                    < Item product={product} />
                </div>

            ))}
        </section>

    )

}

export default ItemList
