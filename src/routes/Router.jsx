import { Route, Routes } from 'react-router-dom';

import { CategoryPage, HomePage, ProductDetailsPage } from '../products/pages';
import { ProductsLayout } from '../products/layout/ProductsLayout';

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<ProductsLayout />} >
        <Route path={"/"} element={ <HomePage /> }/>
        <Route path={"category/:id"} element={ <CategoryPage /> }/>
        <Route path={"item/:id"} element={ <ProductDetailsPage /> }/>
      </Route>
    </Routes>
  )
}

export default Router