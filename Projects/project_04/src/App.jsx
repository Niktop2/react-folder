import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'
import Comp1 from './components/comp1'
import Comp2 from './components/Comp2/comp2'
import Comp3 from './components/Comp3'
import Card from './components/Card'


function App() {
  const [value, setValue] = useState(5)
  const [color, setColor] = useState('olive')
  //+++++++++++++++++++++++++++++++++++++++++++++++
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  
   const passwordGenerator = useCallback(() => {
   let pass =""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
   passwordGenerator()
 }, [length, numberAllowed, charAllowed, passwordGenerator])



  const change = () => {
   setColor('orange')
  }
  const change1 = () => {
   setColor('blue')
  }

  const addValue = () => {
   //   setValue(value + 1);
   //   setValue(value + 1);
   //   setValue(value + 1);
   //   setValue(value + 1);

     setValue(prevValue => prevValue + 1)
     setValue(prevValue => prevValue + 1)
     setValue(prevValue => prevValue + 1)
     setValue(prevValue => prevValue + 1)
  }
  const removeValue = () => {
     setValue(value - 1);
  }
 
   return (
    <>
    <div>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 max-w-52'>Tailwind test</h1>
    <br></br>
    ++++++++++++++++++++++++++++++++++++++++++++++++
    <h1 className='bg-green-300 max-w-52 rounded-md text-black'>Counter : {value}</h1>
    
    <button onClick={addValue}>Increase</button>
    <button onClick={removeValue}>Decrease</button>
    <br></br>

    +++++++++++++++++++++++++++++++++++++++++++++++++

    <Card userName="Nikhil" btn="click-me"/>
    <br />
    +++++++++++++++++++++++++++++++++++++++++++++++++
    <Comp1 userName="Nikhil Topre" prop="props"/>
    <Comp3 name="jai shree ram"/>
    </div> 

    +++++++++++++++++++++++++++++++++++++++++++++++++ 
    <br />
     project -01 bg changer

     <div className='bg-orange-300 w-80 h-80 mb-5' style={{backgroundColor: color}}>

      <h1 className='justify-center flex'>Bg Changer</h1>
         <div className='bg-black m-4 w-72 h-32 p-5 outline-dashed'>

             <button 
             onClick={change} 
             className='rounded-full bg-white text-black px-4 py-1' 
             style={{ backgroundColor: "orange" }}>organge</button>

             <button 
             onClick={change1}
             className='rounded-full bg-white text-black px-4 py-1'  
             style={{ backgroundColor: "blue" }}>
             Blue</button>

             <button
              onClick={() => setColor("green")}className='rounded-full bg-white text-black px-4 py-1' 
              style={{ backgroundColor: "green" }}>
              Green
              </button>

             
         </div>
     </div>

     ++++++++++++++++++++++++++++++++++++++++++++++++
     <br/>

     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-400">

       <h1 className='text-white text-center my-3'>Password generator</h1>

       <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          className="outline-none w-full py-1 px-3" type="text" 
          value={password}  
          placeholder="Password"
          readOnly
          ref={passwordRef}/>

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-md'>
           Copy</button>
       </div>

       <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1'>
            <input className='cursor-pointer'
            type="range"  
            min={6} 
            max={100} 
            value={length} 
            onChange={(e) => {setLength(e.target.value)}}  
            />

            <label>Length: {length}</label>
         </div>

         <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {setNumberAllowed((prev) => !prev)}}/>

            <label htmlFor="numberInput">Numbers</label>
         </div>

         <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
             defaultChecked={charAllowed}
             id="characterInput"
             onChange={() => {setCharAllowed((prev) => !prev )}} />
             
            <label htmlFor="characterInput">Characters</label>
         </div>

       </div>
     </div>

     </>
  )
}

export default App;




