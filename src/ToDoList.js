import React, { useState } from 'react'
import ToDoListItem from './ToDoListItem';
import {Button} from 'react-bootstrap'

function ToDoList() {
    const [inputlist, setinputlist] = useState("");
    const [items, setitems] = useState([]);
    const itemEvent = (e) => {
      setinputlist(e.target.value);
    };

    const listItem = () => {
        setitems((olddata) => {
            return [...olddata, inputlist]
        })
        setinputlist("")
  };
  
  const deleteItem = (id) => {
    console.log("hello")
    setitems((olddata) => {
      return olddata.filter((arr,index) => {
        return index !== id
      })
    })
   }
    return (
      <div className="main_div">
        <div className="centre_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Enter your work"
            onChange={itemEvent}
            value={inputlist}
          />
          
          <Button onClick={listItem} variant="primary" size="sm">
            +
          </Button>{" "}
          <ol>
            {items.map((item,index) => {
              return (
                <ToDoListItem
                  key={index}
                  id={index}
                  item={item}
                  deleteItem={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
}

export default ToDoList
