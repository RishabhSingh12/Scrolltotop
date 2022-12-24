import { useState,useRef, useEffect } from 'react'

import './App.css'

function App() {
  const [show,setShow] = useState(true);
  // const btnref = useRef();
  
  
  const scrollHandler = () => {
    //  let position=window.scrollY;
    //   console.log(position);
      if(window.scrollY === 0)
      {
        // btnref.current.style.display="none"
        setShow(false);
      }
      else{
        // btnref.current.style.display = "block";
        setShow(true);
      }
  }
  

  // effect running for scroll-btn-to-top visibility
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    
    return () => {
      window.removeEventListener("scroll",scrollHandler);
    }
  },[])

  
  const clickHandler =() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
    
  }

  return (
    <div className="container">
      <h1>Scroll to top</h1>
      {show && <div  className="scroll-container">
        <button  className="scroll-btn" onClick={clickHandler}>
          <span></span>
          <span></span>
          <p></p>
        </button>
      </div>}
    </div>
  )
}

export default App
