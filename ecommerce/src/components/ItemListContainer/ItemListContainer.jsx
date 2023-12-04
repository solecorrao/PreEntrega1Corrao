import CardContainer from '../CardContainer/CardContainer'
import './ItemListContainer.css'



export const ItemListContainer = ({ greeting }) => {



    return (
        <section >
            <h2 className='text-center'>  {greeting} </h2>
            <CardContainer />
        </section>
    )
}

export default ItemListContainer
