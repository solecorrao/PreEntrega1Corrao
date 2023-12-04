import { useEffect, useState } from "react";
import { mFetch } from "../helpers/mFetch";
import './CardContainer.css'
import CardContainerBody from "../CardContainerBody/CardContainerBody";
import { useParams } from "react-router-dom";


export const CardContainer = () => {

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
        <section >
            <section>
                {productos.map((product) => (
                    <div key={product.id} className='card-group w-25 text-center gap-3 '>
                        < CardContainerBody product={product} />
                    </div>

                ))}
            </section>
        </section>


    );
}

export default CardContainer