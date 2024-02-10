
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

import './App.css'



function App() {

const header = 
<div className='header'>
  <h1>Say hello to<br /> ReactJS</h1>
  <p>You will learn how to use the most popular frontend library,<br /> 
     and become a super Ninja developer</p> 
  <div className ='awesome'>Awesome!</div>
</div> ;


  return (
    <>
      <Navbar />
      {header}
      <Gallery />
    </>
  );
}
 
export default App;