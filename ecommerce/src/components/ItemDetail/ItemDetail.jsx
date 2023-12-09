import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../helpers/mFetch";

export const ItemDetail = () => {

  const [product, setproduct] = useState({})
  const {pid} = useParams()

  useEffect(() => {
      mFetch(pid)
          .then(res => setproduct(res))
          .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div className="card-body p-0">
        <h6 className="card-header">{product.name}</h6>
        <img
          src={product.imgUrl}
          className="card-img-top, "
          style={{ maxWidth: "50%" }}
          alt="imagen"
        />
        <div className="card-body">
          <h4 className="card-text">Precio: ${product.price}</h4>
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
