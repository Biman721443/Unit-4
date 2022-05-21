import logo from './logo.svg';
import './App.css';
import {Links} from './component/Links'
import {Logo} from './component/Logo'
import {Button} from './component/Button'
let links = [
  {link:"Services"},
  {link:"Project"},
  {link:"About"},

]

function App() {
  return (
   <div className='box'>
     <div className='box1'>
      <Logo/>
      <div className='links'>
        
          {
          links.map((e)=>(
            <Links {...e}/>
          ))
        }
        
      </div>
        <Button/>

     </div>
    
    
   </div>

   
  );
}

export default App;
