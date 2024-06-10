import estilos from './Inicial.module.css'
import {Cabecalho} from '../Componentes/Cabecalho'
import {Lateral} from '../Componentes/Lateral'
import { Outlet } from 'react-router-dom'
import bannerhome from '../assets/bannerhome.svg';




export function Inicial() {

const Menu = () => {
      return (
        <div className={estilos.menu}>
      <div className={estilos.logowebsite}>
            <p className={estilos.titulo}>Connect</p>
            <p className={estilos.titulo1}>Map</p>
            </div>
           <ul>
            <li><a href="#">Mapa</a></li>
            <li><a href="#">Sensores</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sair</a></li>
          </ul>
        </div>
        
      );
    }

  return (
      <Menu/>
  )
}
