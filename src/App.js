import React, { useState } from 'react'
import "./App.css"
import Items from "./items"

const App = () => {

  const [inputList, setInputList] = useState("")
  const [item, setItem] = useState([])

  const inputEvent = (event) => {
    setInputList(event.target.value)
  }

  const setEvent = () => {
    setItem((oldValue) => {
      return [...oldValue, inputList]
    })
    setInputList("")
  }

  const deleteItems = (id)=> {
    setItem((oldItems)=> {
      return oldItems.filter((ele,index)=> {
        return index!==id
      })
    })
  }
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a item" value={inputList} onChange={inputEvent} />
          <button onClick={setEvent}> + </button>

          <ol>
              {item.map((itemValue,index) => { return <Items text={itemValue} key={index} id={index} delete={deleteItems}/>})}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
