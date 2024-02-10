
import ImageOne from '../assets/IHAlogo.png';
import ImageTwo from '../assets/menu.png';


import './Navbar.css'

function Navbar() {
    return (
      <nav>
            <ul>
               <li><img src={ImageOne} alt="logo" className='logo'/></li>
               <li><img src={ImageTwo} alt="logo" className='menu'/></li>
            </ul>
      </nav>
    )
}
  
export default Navbar // component export