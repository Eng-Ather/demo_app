import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './Component/button'

function App() {
  // const [count, setCount] = useState(0)
  // ____  ____  ______

  //update counter with usestat hook
  const [counter,setCounter] = useState(1);
  const updateCounter = ()=>{
  setCounter(counter +2);
  console.log(counter);
 }

  //update string(user name) with usestat hook
  const [name, setName] = useState("Ali")
  const updateName = ()=>{
  setName(name+123)
  console.log(name); 
 }
  
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);//
  
  const addUser = () => {
    if(!username){
      alert("input field can not be empty")
      return
    }
    else{ setUsers([...users, username]);// is line ke wja sa hr any wali new wali users l variable ma addup ho rheha just like an array
      console.log(username);
      console.log(users);
      setUsername("");// to empty input feild}
    }
 
 };

 const clearAll = () => {
 setUsers([])
 }


  // ______________________________ Return Values ________________________________
  return (
    <>
      <div className='flex'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <h1> TODO APP With (Vite + React)</h1>
     

     <div>
        {/* <Button onClick={updateCounter}/> */}

        {/* <button onClick={updateCounter}>COUNTER</button> */}

        {/* <button className="text-xl" onClick={updateName}>update name</button> */}
       
        <input
        value={username}
        placeholder="Your Name"
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2"
      />

        <button onClick={addUser}>Add TODO</button>
        <button onClick={clearAll}>Clear All</button>


        <ul>{users.map((todo, index) => (
          <li>
            {`${index+1}) ${todo}`}
          </li>
          ))}
        </ul>
     </div>

    </>
  )
}

export default App
