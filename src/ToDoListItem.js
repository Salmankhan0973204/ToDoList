import React from 'react'
import {Button} from "react-bootstrap"

function ToDoListItem(props) {
    return (
      <>
        <div className="todo_style">
          <li>{props.item}</li>
          <Button style={{ marginTop: "20px", textAlign: "right" }}
            variant="danger" size="sm" onClick={()=>{ props.deleteItem(props.id)}}>
            Delete
          </Button>
        </div>
      </>
    );
}

export default ToDoListItem
