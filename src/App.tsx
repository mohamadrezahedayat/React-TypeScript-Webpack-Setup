import './styles.css'
import Image from './react-logo.png'
import Logo from './react-logo.svg'
import { ClickCounter } from './clickCounter'

export const App = ()=>{
  return <>
    <h1>React Typescript Starter Template - running in {process.env.NODE_ENV} mode</h1>
    <img src={Image} alt='react-logo' width='300' height='300'/>
    <img src={Logo} alt='react-logo' width='300' />
    <ClickCounter/>
    </>
}