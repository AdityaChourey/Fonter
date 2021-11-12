import logo from './clipart-0090.svg'
import './App.css';
import { useState } from 'react';
import data from './data'
import Buttons from './Buttons'

function App() {
  const [text1,setText1] = useState('');
  const [text2,setText2] = useState('');
  const [fonts,setfonts] = useState(data)

  const compare=(index)=>{
    const newFont = data.find((item)=>item.id===index)
    setfonts(newFont)
    setText2(text1)
  } 
  return (
    <section className="fonter">
      <div className="img-container">
        <img src={logo} alt='logo' style={{width:100,height:100}}></img>
      </div>
      <div className="text-box">
        <textarea className='text' value={text1} onChange={(e)=>setText1(e.target.value)}></textarea>
        <textarea style={{fontFamily:fonts.font}}className='text' 
        value={text2} onChange={(e)=>setText2(e.target.value)}></textarea>
      </div>
      <Buttons data={data} compare={compare}/>
    </section>
  );
}

export default App;
