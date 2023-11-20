import { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { products } from '../../../data/products';

import productDetailsStyles from './product.details.module.css'


export function ProductDetailsPage() {

  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const params = useParams();
  const product = useMemo(() => products.find( e => e.id === +params.id ), [params.id]);

  const increment = () => {
    setCount(Math.min(count + 1, product.inStock));
  };

  const decrement = () => {
    setCount(Math.max(count - 1, 0));
  };


  return (
    <div className={productDetailsStyles.container}>
      <div className={productDetailsStyles.card}>

        <div className={productDetailsStyles.image}>
          <img src={product.img} alt={product.name} />
        </div>

        <div className={productDetailsStyles.info}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p className={productDetailsStyles.description}>{product.description}</p>
        </div>

        <div className={productDetailsStyles.actions}>
          <div>
            <div className={productDetailsStyles.counter}>
              <button onClick={ decrement } >-</button>
              <div><span>{count}</span></div>
              <button onClick={ increment } >+</button>
            </div>
            <button className={productDetailsStyles['add-cart']}>Agregar al carrito</button>
          </div>
          <button onClick={()=> navigate(-1)} className={productDetailsStyles['btn-back']}>Volver</button>
        </div>

        <div className={productDetailsStyles.footer}>
          <b>{product.inStock} unidades disponibles</b>
        </div>

      </div>
    </div>
  )
}
