import ImageOne from '../assets/icon1.png';
import ImageTwo from '../assets/icon2.png';
import ImageThree from '../assets/icon3.png';
import ImageFour from '../assets/icon4.png';


function Gallery() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between' , background: 'white'}}>
        <img src={ImageOne} alt="settings_image" className='icon' />
        <img src={ImageTwo} alt="laptop_image" className='icon' />
        <img src={ImageThree} alt="screen_image" className='icon' />
        <img src={ImageFour} alt="code_image" className='icon' />
      </div>
    )
}
  
export default Gallery // component export