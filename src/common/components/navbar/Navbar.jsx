import { Link } from 'react-router-dom'

import { Button } from '../button';

import navbarStyles from './navbar.module.css';


//? Si quieres añadir otro link aslo aqui
const paths = [
  {
    path: '/',
    name: 'Inicio'
  },
  {
    path: '/category/1',
    name: 'Vehiculos'
  },
  {
    path: '/category/2',
    name: 'Electrònica'
  },
  {
    path: '/category/3',
    name: 'Libros'
  },
]

export const Navbar = () => {

  return (
    <div className={navbarStyles.container}>
        <div className={navbarStyles.logo}>
          <Link to={'/'}>
            <img src="/react.svg" alt="logo" />
            <b>Compras Z</b>
          </Link>
        </div>

        <nav className={navbarStyles.nav}>
          {paths.map(({path,name}) =>  (
            <Link key={name} to={path} >{name}</Link>
          ))}
        </nav>

        <div className={navbarStyles.login}>
          <Button label='Login' />
        </div>
    </div>
  )
}
