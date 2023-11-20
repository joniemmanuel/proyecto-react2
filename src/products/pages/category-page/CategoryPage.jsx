import { useMemo } from 'react';

import { useParams } from 'react-router-dom';

import { Button } from '../../../common';
import { products } from '../../../data/products';
import { ProductList } from '../../components';

import categoryPageStyles from './category-page.module.css';


export const CategoryPage = () => {

  const params = useParams();
  const productsByCategory = useMemo(() => products.filter( e => e.categoryId === +params.id ), [params.id])

  return (
    <div className={categoryPageStyles.container}>
    
      <h2 className="title">Desde aquí podrás ver un listado de todas las categorías</h2>
    
      <Button mb={30} label='Ver artículos sin stock disponibles'/>

      <ProductList products={productsByCategory}/>

    </div>
  )
}
