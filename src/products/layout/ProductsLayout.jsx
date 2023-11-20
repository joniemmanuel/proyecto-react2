import { Outlet } from 'react-router-dom';

import { Navbar } from '../../common';

import productsLayoutStyles from './products-layout.module.css';


export const ProductsLayout = () => {
  return (
    <div className={productsLayoutStyles.container}>
      <Navbar />
      <div className={productsLayoutStyles['container-children']}>
        <Outlet />
      </div>
    </div>
  )
};